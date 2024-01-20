import { TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Label } from 'flowbite-react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Button } from 'flowbite-react'

export default function signin() {
  return (
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
          <form className='flex flex-col gap-5'>
            {/* username */}
            <div >
              <Label value='User Name' />
              <TextInput
                type='text'
                placeholder='User Name'
                id='username'
              />
            </div>

            {/* email */}
            <div >
              <Label value='Email' />
              <TextInput
                type='email'
                placeholder='Email'
                id='email'
              />
            </div>

            {/* password */}
            <div>
              <Label value='Password' />
              <TextInput
                type='password'
                placeholder='password'
                id='password'
              />
            </div>
            <Button color='blue'>
              SignUp
            </Button>
          </form>
          <div className='flex gap-3 text-sm mt-5'>
            <span>Have an Account</span>
            <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
          </div>
        </div>
      </div>
      </div>
      )
}

