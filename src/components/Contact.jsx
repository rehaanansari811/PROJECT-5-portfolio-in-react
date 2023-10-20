import React, { useState } from 'react'
import vg from "../assets/vg.png"
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import {addDoc,collection} from "firebase/firestore"
import { db } from '../firebase';
const Contact = () => {
    const animations={
        form:{
            initial:{
                x:"100%",
                opacity:0
            },
            whileInView:{
                x:"0%",
                opacity:1
            },
            transition:{
                delay:0.5
            }
        },
        button:{
            initial:{
                y:"-100%",
                opacity:0
            },
            whileInView:{
                y:"0%",
                opacity:1
            },
            transition:{
                delay:0.7
            }
        }
    }
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [disableBtn,setDisableBtn] = useState(false);

    const submitHandler = async(e) => {
        e.preventDefault();
        setDisableBtn(true);
        try {
            await addDoc(collection(db,"contacts"),{
                name,
                email,
                message
            });
            setName("")
            setEmail("")
            setMessage("")
            toast.success("Message Sent");
        setDisableBtn(false);

        } catch (error) {
            toast.error("Error");
            console.log(error);
        setDisableBtn(false);

        }
    }
    return (
        <div id='contact'>
            <section>
                <aside>
                    <img src={vg} alt="Graphics" />
                </aside>
            </section>
            <section>
                <motion.form onSubmit={submitHandler} {...animations.form}>
                    <h2>Contact Me</h2>
                    <input type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <textarea name="message" id="message" cols="30" rows="5" placeholder='Your Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

                    <motion.button 
                    disabled={disableBtn} 
                    className={disableBtn ? "disableBtn" : ""}
                    type='submit' 
                    {...animations.button}>Send</motion.button>
                </motion.form>
            </section>
        </div>
    )
}

export default Contact