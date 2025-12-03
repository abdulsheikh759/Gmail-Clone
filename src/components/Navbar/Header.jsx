import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { RiQuestionLine } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { RiGeminiFill } from "react-icons/ri";
import { CgMenuGridO } from "react-icons/cg";
import Avatar from "react-avatar";

const Header = () => {
    return (
        <header>
            <nav className='flex items-center justify-between h-16 mx-auto max-w-[1340px] px-3 '>
                <div className='flex items-center gap-10'>
                    <div className='flex items-center gap-2'>
                        <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                            <RxHamburgerMenu size={"20px"} />
                        </div>
                        <img className='w-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmvBDVrWuIi8FBzBOXybue2OoHIgzNWo4AOA&s" alt="gmail logo" />
                        <h1 className='text-2xl text-gray-600 font-medium'>Gmail</h1>
                    </div>
                </div>
                <div className='md:block  hidden w-[50%] mr-10 md:mx-6'>
                    <div className='flex items-center bg-[#E9EEF6] px-2 py-3 rounded-full'>
                        <IoIosSearch size={"24px"} className='text-gray-700' />
                        <input type="text"
                            placeholder='Search Mail'
                            className='rounded-full w-full bg-transparent outline-none px-2 text-black  placeholder:text-black/70 placeholder:font-semibold '
                        />
                    </div>
                </div>
                <div className='md:block hidden'>
                    <div className='flex items-center gap-2'>
                        <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                            <RiQuestionLine size={"26px"} className='text-gray-600' />
                        </div>
                        <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                            <IoMdSettings size={"24px"} className='text-gray-600' />
                        </div>
                        <div className='p-2 rounded-full hover:bg-blue-600 transition delay-150 duration-300 ease-in-out hover:rotate-180 cursor-pointer '>
                            <RiGeminiFill size={"24px"} className='text-gray-600' />
                        </div>
                        <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                            <CgMenuGridO size={"24px"} className='text-gray-600' />
                        </div>
                        <div className='cursor-pointer'>
                            <Avatar
                                name="Remy Sharp"
                                size="40"
                                round={true}
                                src="https://www.nicepng.com/png/full/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png"
                                 
                            />

                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header