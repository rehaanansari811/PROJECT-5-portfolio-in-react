import React from 'react'
import me from "../assets/me.jpeg"
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineArrowUp } from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <div>
        <img src={me} alt="Founder" />
        <h2>Rehaan Ansari</h2>
        <p>Moivation is temporary, but discipline is forever.</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://www.youtube.com/" target='_blank'>
            <AiFillYoutube />
          </a>
          <a target='_blank' href="https://www.instagram.com/the_ansariii/">
            <AiFillInstagram />
          </a>
          <a target='_blank' href="https://www.linkedin.com/in/rehaan-ansari/">
            <AiFillLinkedin />
          </a>
        </article>
      </aside>
      <a href="#home"><AiOutlineArrowUp/></a>
    </footer>
  )
}

export default Footer