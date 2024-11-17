import  { useState } from 'react'
import {RiCloseLine, RiMenu2Line} from "@remixicon/react"

import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu,openMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(true);
  return (
    <nav className='flex flex-wrap justify-between sticky z-20 md:items-center text-white px-10 pt-6 md:px-20 h-auto w-full overflow-hidden '
    style={{ backgroundColor: '#1F2020', color: 'white' }} >
    <Link to='/'>
         <span className='text-2xl font-bold tracking-wide hover:text-customGold'>Portfolio</span>
    </Link>
 
    <ul className={`${menu ? "block" : "hidden"}  mx-24 p-y2 mt4 font-semibold md:mt5 bg-black px-2 rounded-x1 bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
        <Link to='/about'>
            <li className='text-md transition-all duration-300 p-1 md:p-0 hover:text-customGold'>
                About
            </li>
        </Link>
        <Link to='/skills'>
            <li className='text-md transition-all duration-300 p-1 md:p-0 hover:text-customGold'>
               Skills
            </li>
       </Link> 
       <Link to='/projects'>
       <li className='text-md transition-all duration-300 p-1 md:p-0 hover:text-customGold'>
            Projects
        </li>
       </Link>
        <Link to='/contact'>
            <li className='text-md transition-all duration-300 p-1 md:p-0 hover:text-customGold'>
                Contact
            </li>
        </Link>
    </ul>
    {showMenu ? (
        <RiMenu2Line 
          size={30}  
          className='md:hidden absolute right-10 top-6 transition-all duration-300' 
          onClick={()=> {
            openMenu(!menu);
            setShowMenu(!showMenu);
        }} 
    />
    ) : ( <RiCloseLine 
           size={30}  
           className='md:hidden absolute right-10 top-6 transition-all duration-300'/>

    )}
    </nav>
  )
}

export default Navbar;