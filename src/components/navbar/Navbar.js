import React from "react";
import { FaFacebookSquare, FaYoutube, FaInstagramSquare } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="container">
      <nav className="flex justify-evenly  text-white bg-black font-bold mt-5 ">
        <div>
          <button className="border border-black-900  p-3 hover:bg-white hover:text-black">
            Mr. Hacker
          </button>
        </div>
        <div>
          <ul className="flex gap-10  p-3 cursor-pointer">
            <li className="cursor-pointer">Home </li>
            <li className="cursor-pointer">About me </li>
            <li className="cursor-pointer">Contact me </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-8 p-3">
            <li className="cursor-pointer">
              <FaFacebookSquare />
            </li>
            <li className="cursor-pointer">
              <FaInstagramSquare />
            </li>
            <li className="cursor-pointer">
              <FaYoutube />
            </li>
          </ul>
        </div>
      </nav>
      <section>
        <div className="">
          <img
            src="https://wallpaperaccess.com/full/1841168.jpg "
            alt="walpaper"
          ></img>
          <div className="text-white  text-center relative -mt-30">
            <h1 className=" h-20 font-bold text-4xl pt-5"> MR. ROBOT</h1>
            <label>Stay Hydrated</label>
          </div>
        </div>
      </section>
      <div className=" text-center m-10 ml-0 h-80 w-full bg-stone-500	">
        <h2 className="text-white pt-20 font-bold text-4xl ">
          Contact@gmail.com
        </h2>
      </div>
      <div className=" text-center m-10 ml-0 h-80 w-full text-white	">
        <h2 className="text-white pt-20 font-bold text-4xl ">About me</h2>
        <p className="m-10">
          I Hack Everyone Mind . I am the king of the world!!!!!!!!!!!
        </p>
      </div>
      <hr />
      <footer className="text-white m-10">
        <div>
          <h1 className="font-bold text-3xl"> Mr. ROBOT</h1>
          <ul className="flex gap-10  p-3 cursor-pointer justify-center text-2xl ">
            <li className="cursor-pointer">Home </li>
            <li className="cursor-pointer">About me </li>
            <li className="cursor-pointer">Contact me </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-8 p-3  justify-end">
            <li className="cursor-pointer">
              <FaFacebookSquare />
            </li>
            <li className="cursor-pointer">
              <FaInstagramSquare />
            </li>
            <li className="cursor-pointer">
              <FaYoutube />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Navbar;
