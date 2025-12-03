import React, { useState } from 'react'
import { GoPencil } from "react-icons/go";
import { MdInbox } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";
import { GoPaste } from "react-icons/go";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";

const slidebarItems = [
    { icon: <MdInbox size={"20px"} />, title: "Inbox" },
    { icon: <IoMdStarOutline size={"20px"} />, title: "Starred" },
    { icon: <MdOutlineWatchLater size={"20px"} />, title: "Snoozed" },
    { icon: <AiOutlineSend size={"20px"} />, title: "Sent" },
    { icon: <GoPaste size={"20px"} />, title: "Drafts" },
    { icon: <LiaShoppingBagSolid size={"20px"} />, title: "Purchases" },
    { icon: <IoIosArrowDown size={"20px"} />, title: "more" },
]

const MenuSideBar = () => {
    const [selected, setSelected] = useState(0);

    return (
        <div className='w-[20%]'>
            <div className='p-3'>
                <button className='flex items-center gap-3 p-4 px-5 rounded-2xl hover:shadow-md bg-[#C2E7FF] cursor-pointer font-semibold'>
                    <GoPencil size={"24px"} />
                    Compose</button>
            </div>
            <div className='font-semibold'>
                {slidebarItems.map((item, id) => {
                    return (
                        <div
                            key={id}
                            onClick={() => setSelected(id)}
                            className={`flex items-center gap-4 pl-6 py-2 rounded-r-2xl hover:cursor-pointer 
                             hover:bg-gray-200 my-2
                            ${selected === id ? "bg-[#D3E3FD]" : "bg-transparent"}
                `}
                        >
                            {item.icon}
                            <p className='text-sm'>{item.title}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default MenuSideBar