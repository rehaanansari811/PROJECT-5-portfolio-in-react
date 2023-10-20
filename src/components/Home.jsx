import React, { useRef } from 'react'
import { animate, motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { BsArrowUpRight, BsChevronDown } from 'react-icons/bs'
import me from '../assets/me.jpeg'
const Home = () => {

  const clientCount = useRef(null);
  const projectsCount = useRef(null);
  const animationclientCount = ()=>{
    animate(0,100,{
      duration:1,
      onUpdate:(v)=>(clientCount.current.textContent = v.toFixed())
    })
  }
  const animationProjectsCount = ()=>{
    animate(0,500,{
      duration:1,
      onUpdate:(v)=>(projectsCount.current.textContent = v.toFixed())
    })
  }
  const animations = {
    h1: {
      initial: {
        x: '-100%'
      },
      whileInView: {
        x: 0,
        opacity: 1
      }
    },
    button: {
      initial: {
        y: '-100%',
        opacity: 0
      },
      whileInView: {
        y: 0,
        opacity: 1
      }
    }
  }
  return (
    <div id='home'>
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Rehaan Ansari
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriterpara",
              cursor: ""
            }}
          />

          <div>
            <a href="mailto:ansarirehaan811@gmail.com">Hire Me</a>
            <a href="#work">Projects{" "}<BsArrowUpRight /></a>
          </div>

          <article>
            <p>
              +<motion.span whileInView={animationclientCount} ref={clientCount}></motion.span>
            </p>
            <span>Clients Worldwide</span>
          </article>

          <aside>
            <article>
              <p>
                +<motion.span whileInView={animationProjectsCount} ref={projectsCount}></motion.span>
              </p>
              <span>Projects Done</span>
            </article>
            <article data-special>
              <p>Contact</p>
              <span>ansarirehaan811@gmail.com</span>
            </article>
          </aside>

        </div>
      </section>
      <section>
        <img src={me} alt="Rehaan Ansari" />
      </section>
      <BsChevronDown/>
    </div>
  )
}

export default Home