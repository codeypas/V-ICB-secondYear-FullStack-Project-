import {Avatar, Button, Dropdown, DropdownDivider, DropdownItem, Navbar, TextInput} from 'flowbite-react';
import { Link,useLocation } from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai';
import {useDispatch, useSelector} from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';

export default function Header() {
  const path=useLocation().pathname;
  const{currentUser}=useSelector(state=>state.user)
  const dispatch=useDispatch();
// for signout
  const handelSignOut=async()=>{
    try{
      const res=await fetch('/api/user/signout',{
        method:'POST',

      });
      const data=await res.json();
      if(!res.ok){
        console.log(data.message);
      }
      else{
        dispatch(signoutSuccess());
      }
    }catch(error){
      console.log(error.message);
    }
  }
//for signout
  return (
   <Navbar className='border-b-2'>
    <Link 
    to='/' 
    className='self-center whitespace-nowrap text-sm sm:text-xl font-bold'>
    <span className='px-2 py-1 bg-gradient-to-b from-blue-200 to-blue-500'>V-IOT</span>
    </Link>
    <form>
      <TextInput 
      type='text' 
      placeholder='search' 
      rightIcon={AiOutlineSearch}
      className='hidden lg:inline'
      />
    </form>
    <Button className='w-12 h-10 lg:hidden' pill>
      <AiOutlineSearch/>
    </Button>

   <div className='flex gap-2 md:order-2'>
   {currentUser ?(
    <Dropdown
      arrowIcon={false}
      inline
      label={
        <Avatar
        alt='user'
        img={currentUser.profilePicture}
        rounded
        />
      }
      >
        <Dropdown.Header>
          <span className='block text-sm'> @{currentUser.username}</span>
          <span className='block text-sm font-medium truncated'>{currentUser.email}</span>
        </Dropdown.Header>
        <Link to={'/dashboard?tab=profile'}>
          <Dropdown.Item>Profile</Dropdown.Item>
        </Link>
        <DropdownDivider/>
          <Dropdown.Item onClick={handelSignOut}>Sign Out</Dropdown.Item>
    </Dropdown>
   ):
   (
    <Link to='/signup'>
      <Button color='blue' outline>Sign In</Button>
    </Link>
   )
   }
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
      <Navbar.Link active={path==='/faculty'} as={'div'}>
        <Link to='/faculty'>Faculty</Link>
      </Navbar.Link>
    </Navbar.Collapse>
   </Navbar>
  )
}

