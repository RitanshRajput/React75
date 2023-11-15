import React from 'react'
import { deleteDoc, doc } from 'firebase/firestore';
import {CiTrash } from "react-icons/ci";
import { PiUserCircleThin } from "react-icons/pi";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { db } from '../config/firebase'; 
import AddAndUpdateContact from './AddAndUpdateContact';
import useDisclose from '../Hooks/useDisclose';
import { toast  } from 'react-toastify';


const ContactCard = ({contact}) => { 

    const {isOpen, onClose, onOpen} = useDisclose();

    const deleteContact = async (id) => {
        try {
            await deleteDoc(doc(db, "contacts", id));
            toast.success("Contact Deleted Successfully") ;
        } catch (error) {
            console.log(error) ;
        }
    }
 
  return (
   <>
     <div key={contact.id} className="bg-black flex justify-between items-center p-2 rounded-lg border-[1px] border-cyan-500 ">
            <div className="flex gap-1">
              <PiUserCircleThin className="text-[#0ea5e9] text-5xl " />
              <div className="text-white">
                <h3 className="text-xl font-semibold">{contact.name}</h3>
                <p className="text-sm font-semibold">{contact.email}</p>
              </div>
            </div>
            <div className="flex text-3xl">
              <HiOutlinePencilSquare onClick={onOpen} className="text-[#0ea5e9] cursor-pointer hover:scale-110 ease-in-out duration-300" />
              <CiTrash onClick={() => deleteContact(contact.id)} className="text-[#0ea5e9] cursor-pointer hover:scale-110 ease-in-out duration-300"/>
            </div>
    </div>
    <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose} />
   </>
  )
}

export default ContactCard
