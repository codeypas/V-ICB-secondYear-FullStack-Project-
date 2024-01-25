// import { Button } from 'flowbite-react';
// import { AiFillGoogleCircle } from 'react-icons/ai';
// import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
// import {app} from '../firebase';

// export default function OAuth() {
//   const auth = getAuth(app)
//   const handelGoogleClick=async()=>{
//     const provider=new GoogleAuthProvider();
//     provider.setCustomParameters({prompt:'select_account'})

//     try{
//       const resultsFromGoogle=await signInWithPopup(auth,provider);
//       console.log(resultsFromGoogle);
//     }catch(error){
//       console.log(error);
//     }
//   }
//   return (
//       <Button type='button'color='blue' outline><AiFillGoogleCircle className='w-6 h-6 mr-2'/>Continue with google</Button>
//   )
// }
