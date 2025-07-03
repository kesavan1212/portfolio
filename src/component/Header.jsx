// src/components/Header.jsx
import react,{useState} from 'react'
import { Bars3Icon} from '@heroicons/react/24/solid'
 function Header() {
  const  [toggleMenu, setToggleMenu] = useState(false);
  
  return (
  <header className='flex justify-between px-2 bg-primary top-0 py-2'>
      <a className='font-bold text-black' href="#">portfolio</a>
      <nav className='hidden md:block'>
      <ul className="flex font-bold text-black">
        <a href="/">home</a>
        <a href="/#about">about</a>
        <a href="/#projects">project</a>
        <a href="/#resume">resume</a>
        <a href="/#contact">contact</a>
      </ul>
      </nav>

      {toggleMenu && <nav className='block md:hidden mobil-nav'>
      <ul onClick={()=> setToggleMenu(!toggleMenu)} className="flex flex-col">
        <li><a href="#">home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#projects">projects</a></li>
        <a href="#resume">resume</a>
        <li><a href="#contact">contact</a></li>
      </ul>
      </nav> }
      <button  onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className=' h-3 w-5'/></button>
      
    </header>
  );
      
}
export default Header;
