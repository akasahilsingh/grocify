import React, {useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    useEffect(()=> {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
      }

      window.addEventListener("scroll", handleScroll)
      // return window.removeEventListener("scroll", handleScroll)

    }, [])
  return (
    <header className={`bg-white fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'drop-shadow-[0_4px_25px_rgba(0,0,0,0.5)]' : ''}`}>
      <nav className="max-w-[1400px] mx-auto md:h-[14vh] h-[12vh] px-10 items-center flex justify-between">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold">
          Gr<span className="text-orange-500">O</span>cery Cart
        </Link>

        {/* Desktop Menu */}
        <ul className="md:flex items-center gap-x-15 hidden">
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Nav Action */}
        <div className="flex items-center gap-x-5">
            {/* Input field */}
            <div className="md:flex items-center bg-red-100 p-1 border-2 border-orange-500 rounded-full hidden">
                <input type="text" name="text" id="text" placeholder="Search..." autoComplete="off" 
                className="flex-1 h-[5vh] px-3 focus:outline-none"/> 
                <button className="text-white w-10 h-10 flex items-center justify-center rounded-full text-xl bg-gradient-to-b from-orange-400 to-orange-500"> 
                    <FaSearch />
                </button>
            </div>
          <a href="#" className="text-zinc-800 text-2xl">
            <FaHeart />
          </a>
          <a href="#" className="text-zinc-800 text-2xl">
            <RiShoppingBag4Fill />
          </a>
          {/* Hamburger */}
          <a href="#" className="text-3xl text-zinc-800 md:hidden" onClick={toggleMenu}>
            {showMenu ? <TbMenu3 /> : <IoMdMenu />}
          </a>
        </div>
        {/* Mobile menu */}
        <ul className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl shadow-xl p-10 rounded-xl items-center gap-x-15 md:hidden absolute top-30 -left-full tranform -translate-x-1/2 transition-all duration-300 ${showMenu ? 'left-1/2' : ""}`}>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
          <li className="flex bg-red-100 p-1 border-2 border-orange-500 rounded-full md:hidden">
                <input type="text" name="text" id="text" placeholder="Search..." autoComplete="off" 
                className="flex-1 h-[5vh] px-3 focus:outline-none"/> 
                <button className="text-white w-10 h-10 flex items-center justify-center rounded-full text-xl bg-gradient-to-b from-orange-400 to-orange-500"> 
                    <FaSearch />
                </button>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
