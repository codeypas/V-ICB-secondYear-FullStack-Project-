import {Button, Navbar, TextInput} from 'flowbite-react';
import { Link } from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai'
export default function Header() {
  return (
   <Navbar>
    <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-bold'>
    <span className='px-2 px-1 bg-gradient-to-b from-blue-200 to-blue-500'>V-IOT</span>
    </Link>
    <form>
      <TextInput type='text' placeholder='search' 
      rightIcon={AiOutlineSearch}
      className='hidden lg:inline'
      />
    </form>
    <button className='w-12 h-10 lg:hidden'>
      <AiOutlineSearch/>
    </button>

   <div className='md:order-2'>
   <Link to='/sign-in'>
      <Button color='light-blue'>Sign In</Button>
    </Link>
    <Navbar.Toggle/>
   </div>

    <Navbar.Collapse>
      <Navbar.Link>
        <Link to='/'>Home</Link>
      </Navbar.Link>
      <Navbar.Link>
        <Link to='/'>DashBoard</Link>
      </Navbar.Link>
      <Navbar.Link>
        <Link to='/'>About</Link>
      </Navbar.Link>
    </Navbar.Collapse>
   </Navbar>
  )
}

