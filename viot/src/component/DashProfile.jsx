// export default function DashProfile() {
//   return (
//     <div>
//       <h1>dashprofile</h1>
//     </div>
//   )
// }






import { useSelector } from 'react-redux'

export default function DashProfile() {
    const { currentUser } = useSelector(state => state.user)
    return (
        <div className='amx-w-lg mx-auto p-3 w-full'>
            <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
            <form className='flex flex-col'>
                <div className='w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'>
                    <img src={currentUser.profilePicture} 
                    alt="user"
                    className='rounded-full w-full h-full object-cover border-8' />
                </div>
            </form>
        </div>
    );
}
