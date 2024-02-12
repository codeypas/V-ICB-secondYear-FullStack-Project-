import { Alert, Button,Label,Spinner,TextInput } from 'flowbite-react'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom'
import OAuth from '../component/OAuth';

export default function signup() {
  const[formData,setFormData]=useState({});
  const [errorMessage,setErrorMessage]=useState(null);
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value.trim()});
  }; 
  // console.log(formData);
   const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
      return setErrorMessage("All fields are required");
    }
    try{
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup',{
        method:'POST',headers:{'Content-Type':'application/JSON'},
        body: JSON.stringify(formData),
      });
      const data=await res.json();
      if(data.success===false){
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok){
        navigate('/signin');
      }
    }catch(error){
      setErrorMessage(error.message);
    }
  };
  return(
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl max-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left half */}
        <div className='flex-1 ml-2'>
          <Link to='/' className='font-bold text-4xl'>
            <span className='px-5 py-2 bg-gradient-to-b from-blue-200 to-blue-500 gap-7'>V-IOT</span>
          </Link>

          <p className='text-sm mt-5'>WELCOME TO BMSCE</p>

        </div>
        {/* right half */}
        <div className='flex-1'>
          <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
            {/* username */}
            <div >
              <Label value='User Name' />
              <TextInput type='text' placeholder='User Name' id='username' onChange={handleChange}/>
            </div>

            {/* email */}
            <div >
              <Label value='Email' />
              <TextInput type='email' placeholder='name.ci22@bmsce.ac.in' id='email' onChange={handleChange}/>
            </div>

            {/* password */}
            <div>
              <Label value='Password' />
              <TextInput type='current-password' placeholder='password' id='password' onChange={handleChange}  />
            </div>
            <Button color='blue' type='submit' disabled={loading}>
              {
                loading?(
                  <>
                  <Spinner size='sm' color='white'/>
                  <span className='pl-3'>Loading...</span>
                  </>
                ):'SignUp'
              }
            </Button>
            <OAuth/>
          </form>
          <div className='flex gap-3 text-sm mt-5'>
            <span>Have an Account</span>
            <Link to='/signin' className='text-blue-500'>Sign In</Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>
               {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
      </div>
      )
}

