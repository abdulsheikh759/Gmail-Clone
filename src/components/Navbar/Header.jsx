import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { RiQuestionLine } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { RiGeminiFill } from "react-icons/ri";
import { CgMenuGridO } from "react-icons/cg";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText, setUser } from '../../Redux/appSlice';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { auth } from '../../Firebase/firebase';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [toggle, setToggle] = useState(false);


    const [input, setInput] = useState("");
    const dispatch = useDispatch()

    const {user} = useSelector(store=>store.appSlice)

    const handleSignOut = () => {
        signOut(auth).then(()=>{
            dispatch(setUser(null));
        }).catch((error)=>{
            console.log(error);
            
        })
    }

    useEffect(() => {
        dispatch(setSearchText(input))
    }, [input])


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
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
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
                        <div className='cursor-pointer relative'>
                            <Avatar onClick={() => setToggle(!toggle)}
                                name="Remy Sharp"
                                size="40"
                                round={true}
                                src={user?.photoURL}

                            />
                            <AnimatePresence>
                                {
                                    toggle && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.6 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.6 }}
                                            transition={{ type: 'spring', stiffness: 260, damping: 20, duration: 0.2 }}
                                            className='absolute right-2 z-20 shadow-lg bg-white rounded-md'>
                                            <p onClick={handleSignOut} className='p-2 underline'>LogOut</p>

                                        </motion.div>
                                    )
                                }
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header