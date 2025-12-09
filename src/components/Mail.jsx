import React, { use } from 'react'
import { FiArrowLeft } from "react-icons/fi";
import { RiInboxArchiveLine } from "react-icons/ri";
import { MdOutlineReport } from "react-icons/md";
import { RiDeleteBin4Line } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineDriveFileMove } from "react-icons/md";
import { FiMoreVertical } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../Firebase/firebase';
import { motion } from 'framer-motion';





const Mail = () => {
  const navigate = useNavigate();
  const { selectedEmail } = useSelector(store => store.appSlice);
  const params = useParams();

  const deleteMailById = async (id) => {
    try {
      await deleteDoc(doc(db, "emails", id));
      navigate('/')

    } catch (error) {
      console.log(error);

    }
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='flex-1 bg-white rounded-xl mx-5'>
      <div className='flex items-center justify-between px-4'>
        <div className='flex items-center gap-2 py-2 text-gray-700'>
          <div onClick={() => navigate('/')} className='p-2 rounded-full hover:bg-gray-100 cursor-pointer '>
            <FiArrowLeft size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <RiInboxArchiveLine size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <MdOutlineReport size={"20px"} />
          </div>
          <div onClick={() => deleteMailById(params.id)} className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <RiDeleteBin4Line size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <HiOutlineMail size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <MdOutlineWatchLater size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <IoCheckmarkCircleOutline size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <MdOutlineDriveFileMove size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <FiMoreVertical size={"20px"} />
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <button className='hover:rounded-full hover:bg-gray-100 cursor-pointer'>
            <MdKeyboardArrowLeft size={"20px"} />
          </button>
          <button className='hover:rounded-full hover:bg-gray-100 cursor-pointer'>
            <MdKeyboardArrowRight size={"20px"} />
          </button>
        </div>
      </div>
      <div className='h-[90vh] overflow-y-auto p-4'>
        <div className='flex items-center justify-between bg-white gap-1'>
          <div className='flex items-center gap-2'>
            <h1 className='text-xl font-medium'>{selectedEmail?.subject}</h1>
            <span className='text-sm bg-gray-200 rounded-md px-2'>Inbox</span>
          </div>
          <div className='flex-none text-gray-400 my-5 text-sm'>
            <p>{new Date(selectedEmail?.createAt?.seconds * 1000).toUTCString()}</p>
          </div>
        </div>
        <div className='text-gray-500 text-sm'>
          <h1>{selectedEmail?.to}</h1>
          <span>to me</span>
        </div>
        <div className='my-10 m-10'>
          <p>{selectedEmail?.message}</p>
        </div>
      </div>

    </motion.div>
  )
}

export default Mail