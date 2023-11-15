import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import { CiCirclePlus, CiSearch } from "react-icons/ci";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./component/ContactCard";
import AddAndUpdateContact from "./component/AddAndUpdateContact";
import useDisclose from "./Hooks/useDisclose";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFoundContact from "./component/NotFoundContact";

//after completion delete apikey from firebase
const App = () => {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclose(false);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()))

      setContacts(filteredContacts);
      return filteredContacts;
    });
  };

  return (
    <>
      <div className="max-w-[400px] mx-auto px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex relative items-center flex-grow">
            <CiSearch className="text-white text-3xl absolute ml-1" />
            <input
              onChange={filterContacts}
              type="text"
              className="bg-transparent border rounded-md pl-9 h-10 flex-grow text-white"
            />
          </div>
          <CiCirclePlus
            onClick={onOpen}
            className="text-4xl text-white cursor-pointer hover:scale-110 ease-in-out duration-300"
          />
        </div>

        <div className="mt-4 gap-2 flex flex-col">
          {contacts.length <= 0 ? <NotFoundContact /> : contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
      <ToastContainer theme="dark" autoClose="1500"  />
    </>
  );
};
export default App;
