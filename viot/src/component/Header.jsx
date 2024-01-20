import {Button, Navbar, TextInput} from 'flowbite-react';
import { Link,useLocation } from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai'
export default function Header() {
  const path=useLocation().pathname;
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
      <Navbar.Link active={path==='/home'} as={'div'}>
        <Link to='/home' >Home</Link>
      </Navbar.Link>
      <Navbar.Link active={path==='/Dashboard'} as={'div'}>
        <Link to='/Dashboard'>DashBoard</Link>
      </Navbar.Link>
      <Navbar.Link active={path==='/about'} as={'div'}>
        <Link to='/about'>About</Link>
      </Navbar.Link>
    </Navbar.Collapse>
   </Navbar>
  )
}

