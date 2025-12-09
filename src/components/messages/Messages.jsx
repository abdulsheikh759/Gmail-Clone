import React, { useEffect, useState } from 'react'
import Message from './Message'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../Firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setEmails } from '../../Redux/appSlice';

const Messages = () => {
  const dispatch = useDispatch();
 const {searchText,emails} = useSelector(store=>store.appSlice);

 const [tempEmails, setTempEmails]= useState(emails)


  useEffect(()=>{
  const emailQuery = query(collection(db,"emails"), orderBy("createAt","desc"));
  const unSubscribe = onSnapshot(emailQuery,(sanpshot)=>{
    const allEmails = sanpshot.docs.map((doc)=>({...doc.data(),id:doc.id}))

    dispatch(setEmails(allEmails));
    
  })
  // cleanup
  return ()=> unSubscribe();

  },[]);

  useEffect(()=>{
   const filterEmails = emails?.filter((email)=>{
    return email?.subject?.toLowerCase().includes(searchText.toLowerCase()) ||
    email?.message?.toLowerCase().includes(searchText.toLowerCase()) ||
    email?.to?.toLowerCase().includes(searchText.toLowerCase())
   })
   setTempEmails(filterEmails);

  },[searchText, emails])



  return (
    <div>
      {tempEmails && tempEmails.map((email,id)=> <Message key={id} email={email}/>)}
             
    </div>
  )
}

export default Messages