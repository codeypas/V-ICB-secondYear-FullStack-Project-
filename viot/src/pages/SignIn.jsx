import React from 'react'

export default function SignIn() {
  return (
    <div>
      <h1>signin</h1>
    </div>
  )
}



// import { TextInput } from 'flowbite-react'
// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { Label } from 'flowbite-react'
// import { AiOutlineSearch } from 'react-icons/ai'
// import { Button } from 'flowbite-react'

// export default function signin() {
//   const navigate = useNavigate();
//   return (
//     <div className='min-h-screen mt-20'>
//       <div className='flex p-3 max-w-3xl max-auto flex-col md:flex-row md:items-center gap-5'>
//         {/* left half */}
//         <div className='flex-1 ml-2'>
//           <Link to='/' className='font-bold text-4xl'>
//             <span className='px-5 py-2 bg-gradient-to-b from-blue-200 to-blue-500 gap-7'>V-IOT</span>
//           </Link>

//           <p className='text-sm mt-5'>WELCOME TO BMSCE</p>

//         </div>
//         {/* right half */}
//         <div className='flex-1'>
//           <form className='flex flex-col gap-5'>
//             {/* email */}
//             <div >
//               <Label value='Email' />
//               <TextInput
//                 type='email' placeholder='Email' id='email' onChange={handleChange}/>
//             </div>

//             {/* password */}
//             <div>
//               <Label value='Password' />
//               <TextInput
//                 type='password'placeholder='password'id='password' onChange={handleChange}/>
//             </div>
//             <Button color='blue'>
//               Sign In
//             </Button>
//           </form>
//           <div className='flex gap-3 text-sm mt-5'>
//             <span>Don't have an Account</span>
//             <Link to='/signup' className='text-blue-500'>Sign Up</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }






