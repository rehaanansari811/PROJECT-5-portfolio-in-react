import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
const Header = ({setMenuOpen,menuOpen}) => {
  return (
    <nav>
      <NavContent/>
      <button onClick={()=> setMenuOpen(!menuOpen)}>
      <AiOutlineMenu/>
      </button>
    </nav>
  )
};

export const HeaderPhone = () => {
  return (
    <div className={`navPhone`}>
        <NavContent/>
    </div>
  )
}

const NavContent = ()=>(
  <>
    <h2>Rehaan Ansari.</h2>
    <div>
      <a href="#home">Home</a>
      <a href="#work">Work</a>
      <a href="#timeline">Experience</a>
      <a href="#services">Services</a>
      <a href="#testimonial">Testimonial</a>
      <a href="#contact">Contact</a>
    </div>
    <a href="mailto:ansarirehaan811@gmail.com">
      <button>Email</button>
    </a>
  </>
)

export default Header