import { useState } from "react";
import "../index.css"
export default function NavBar() {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="relative container mx-auto p-6 my-4">
            <div className="flex justify-between items-center">
                <div className="pt-2">
                    <img src="/logo.svg" alt="logo" />
                </div>
                <div className="hidden space-x-6 text-sm md:flex ">
                    <a href="#" className="hover:text-darkGrayishBlue">Pricing</a> 
                    <a href="#" className="hover:text-darkGrayishBlue">Products</a> 
                    <a href="#" className="hover:text-darkGrayishBlue">About Us</a> 
                    <a href="#" className="hover:text-darkGrayishBlue">Careers</a> 
                    <a href="#" className="hover:text-darkGrayishBlue">Community</a> 
                </div>
                <a href="#" className="hidden rounded-full text-white text-sm bg-brightRed shadow-lg shadow-brightRed/50 p-3 px-6 hover:bg-brightRedLight md:block">Get Started</a>

                <button id="menu-btn" className={`${toggle? "open": ""} hamburger md:hidden focus:outline-none`}
                        onClick={() => setToggle(!toggle)}
                    >
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>
            <div className="md:hidden">
                <div id="menu" className={`absolute ${toggle?"flex": "hidden"} flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
                    <a href="#">Pricing</a>
                    <a href="#">Products</a>
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Community</a>
                </div>
            </div>
        </nav>
    )
}
