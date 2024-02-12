import { Button } from 'flowbite-react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
import {app} from '../firebase';
import { signInSuccess,signInFailure } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';




export default function OAuth() {
  const auth = getAuth(app)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handelGoogleClick=async()=>{
    const provider=new GoogleAuthProvider();
    provider.setCustomParameters({prompt:'select_account'})

    try{
      const resultsFromGoogle=await signInWithPopup(auth,provider);
      const res=await fetch('/api/auth/google',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            name:resultsFromGoogle.user.displayName,
            email:resultsFromGoogle.user.email,
            googlePhotoUrl:resultsFromGoogle.user.photoURL,
        }),
      })
      const data=await res.json();
    //   if(data.success===false){
    //     dispatch(signInFailure(data.message));
    //   }
      if(res.ok){
        dispatch(signInSuccess(data));
        navigator('/'); 
      }
    }catch(error){
      console.log(error);
    }
  }
  return (
      <Button type='button'color='blue' outline onClick={handelGoogleClick}><AiFillGoogleCircle className='w-6 h-6 mr-2'/>Continue with google</Button>
  )
}
