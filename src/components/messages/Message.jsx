import React from 'react'
import { MdCropSquare, MdInbox } from 'react-icons/md'
import { MdOutlineStarOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedEmail } from '../../Redux/appSlice';
import {motion} from 'framer-motion'



const Message = ({email}) => {

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const openMail = () =>{
      dispatch(setSelectedEmail(email));
      navigate(`/mail/${email.id}`)
    }

    return (
        <motion.div
         initial={{opacity:0, y:-20}}
         animate={{opacity:1, y:0}}
         transition={{duration:0.6}}
         onClick={openMail} className='flex items-start justify-between border-b border-gray-200 px-4 test-sm hover:cursor-pointer hover:shadow-md py-2'>
            <div className='flex items-center gap-3 '>
                <div className='flex-none text-gray-300'>
                    <MdCropSquare className='size-5' />
                </div>
                <div className='flex-none text-gray-300'>
                    <MdOutlineStarOutline className='w-5 h-5' />
                </div>
            </div>
            <div className='flex-1 ml-4'>
                <p className='text-gray-600 truncate inline-block max-w-full'>{email.message}</p>
            </div>
            <div className='flex-none text-gray-400 text-sm'>
             <p>{new Date(email?.createAt?.seconds*1000).toUTCString()}</p>
            </div>
        </motion.div>
    )
}

export default Message