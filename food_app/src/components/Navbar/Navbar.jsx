import React from 'react'
import Profile from "../../assets/profile.png"
import {IoIosArrowDown} from "react-icons/io";
const Navbar = () => {
  return (
    <div className='p-4'>
        <div className="container flex justify-between items-center">
            {/* logo section */}
            <div>
                <p className='text-lg font-semibold'>
                    FOOD <span className='text-primary'>APP</span>
                </p>
            </div>
            {/* Menu section */}
            <div className='flex justify-center
            items-center gap-10'>
                <ul className='gap-8 hidden sm:flex '>
                    <li className='hover:border-b-2
                     border-primary uppercase'>
                        Home
                    </li>
                    <li className='hover:border-b-2
                     border-primary uppercase'>
                        Menu
                    </li>
                    <li className='hover:border-b-2
                     border-primary uppercase'>
                        About
                    </li>
                </ul>
            </div>
            {/* login section */}
            <div className='flex gap-4 items-center'>
                <img src={Profile} alt="" className='w-10
                 rounded-full '/>
                 <IoIosArrowDown />
            </div>
        </div>
    </div>
  )
};

export default Navbar;