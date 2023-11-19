import React from 'react'
import styles from "../Contact/Contact.module.css"
import people from "../../assets/People.png"
import {BsFillChatSquareTextFill} from "react-icons/bs"
import {IoMdCall} from "react-icons/io"

const Contact = () => {
   
    const OnSubmit = (event) => {
        event.preventDefault();
        var name = event.target[0].value ;
        var email = event.target[1].value ;
        var message = event.target[2].value ;
        alert(`Name : ${name} \nEmail : ${email} \nmessage : ${message}
        `);
    }

    
  return (
    <div className={styles.contact}>
         
       <div className={styles.image}>
         <img src={people} alt="people" />
       </div>

       <div className={styles.form}>

          <div className={styles.btn_container}>
            <div className={styles.btns}>
                <button> <BsFillChatSquareTextFill /> Support Chat</button>
                <button> <IoMdCall /> Call Us</button>
            </div>
          </div>

          <form onSubmit={OnSubmit}>
            <div className={styles.form_container}>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' />

                <label htmlFor="email">Email</label>
                <input type="text" name='email' />

                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="20" rows="10"></textarea>

                <button> Submit</button>
            </div>
          </form>

       </div>
    </div>
  )
}

export default Contact
