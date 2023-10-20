import { motion } from 'framer-motion'
import React from 'react'
const Testimonial = () => {
    const animations={
        section:{
            initial:{
                x:"-100%",
                opacity:0
            },
            whileInView:{
                x:"0%",
                opacity:1
            },
            transition:{
                delay:0.8
            }
        }
    }
    return (
        <div id='testimonial'>
            <h2>Testimonial</h2>
            <motion.section {...animations.section}>
                <TestimonialCard
                    name={"Raghav"}
                    feedback={"Your teaching skills are so good."}
                />
                <TestimonialCard
                    name={"Sundar Pichai"}
                    feedback={"Amazing seems like you should the Google CEO."}
                />
                <TestimonialCard
                    name={"Roy"}
                    feedback={"Wow what a portfolio, doesn't expected this to be on youtube!"}
                />
            </motion.section>
        </div>
    )
}

const TestimonialCard = ({ name, feedback }) => (
    <article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="User" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

export default Testimonial