import React, { useState } from 'react'
import { MdCropSquare, MdInbox } from 'react-icons/md'
import { IoMdArrowDropdown } from "react-icons/io";
import { MdRefresh } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { GoTag } from "react-icons/go";
import { TbUsers } from "react-icons/tb";
import { GoInfo } from "react-icons/go";




const mailItems = [
    {
        icon: <MdInbox size={"20px"} />,
        title: "Primary"
    },
    {
        icon: <GoTag size={"20px"} />,
        title: "Promotions"
    },
    {
        icon: <TbUsers  size={"20px"} />,
        title: "Social"
    },
    {
        icon: <GoInfo size={"20px"} />,
        title: "Updates"
    },
]

const Inbox = () => {
    const [mailSelected, setMailSelected] = useState(0);
    return (
        <div className='flex-1 bg-white rounded-xl mx-5'>
            <div className='flex items-center justify-between px-4'>
                <div className='flex items-center gap-2 text-gray-700 py-2'>
                    <div className="flex items-center gap-1">
                        <MdCropSquare size={"20px"} />
                        <IoMdArrowDropdown size={"20px"} />
                    </div>
                    <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                        <MdRefresh size={"20px"} />
                    </div>
                    <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                        <IoMdMore size={"22px"} />
                    </div>
                </div>
            </div>
            <div className='h-[90vh] overflow-y-auto'>
                <div className='flex items-center gap-1'>
                    {mailItems.map((item, id) => {
                        return (
                           <div className='w-64 flex items-center'>
                             <button
                                key={id}
                                className={`${mailSelected === id ? 'border-b-4 border-b- blue-600 text-blue-600':'border-b-4 border-b-transparent'} flex items-center gap-3 justify-between cursor-pointer p-4`} 
                                onClick={()=>{
                                    setMailSelected(id)
                                }}>
                                {item.icon}
                                <span>{item.title}</span>
                            </button>
                           </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Inbox