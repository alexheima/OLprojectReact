import { NavLink, Outlet } from "react-router-dom";
import inst from "/Users/alexkaramanov/Desktop/OLprojectReact/src/assets/instagram-white-icon copy.png";
import px from "/Users/alexkaramanov/Desktop/OLprojectReact/src/assets/500px.png";
import stocksy from "/Users/alexkaramanov/Desktop/OLprojectReact/src/assets/logoStocksy.svg";
import flickr from "/Users/alexkaramanov/Desktop/OLprojectReact/src/assets/Flickr-PNG-Picture.png";
import logo from "/Users/alexkaramanov/Desktop/OLprojectReact/src/assets/logo.png"
import { Menu, X } from "lucide-react";
import { useState } from "react";
export default function RootLayout() {

const [isOpen, setIsOpen] = useState(false);

const toggleNavBar = () =>{
  setIsOpen(!isOpen);
}
  
  return (
    <div>
      <header className="bg-black flex flex-wrap justify-between items-center text-white m-4 p-8-4">
        <div>
        <NavLink to="about"><img src={logo} alt="logo" className="w-24 block"/></NavLink> 
        </div>
        <div className="hidden md:flex justify-between gap-x-20 items-center pr-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="gallery">Gallery</NavLink>
        <NavLink to="blog">Blog</NavLink>
        <NavLink to="contact">Contact</NavLink>
        </div>
        <div className="md:hidden"><button onClick={toggleNavBar}>{isOpen ? <X/> : <Menu/>}</button></div>
        
        
        {/* Alternative solution*/}
        {/* <div onClick={handleClick} className=" Hamburger hidden max-md:block max-md:cursor-pointer max-md:[&>*:nth-child(2)]:active:hidden max-md:[&>*:nth-child(1)]:active:-rotate-45 max-md:[&>*:nth-child(3)]:active:rotate-45 max-md:[&>*:nth-child(1)]:active:translate-y-1 max-md:[&>*:nth-child(3)]:active:-translate-y-1 ">  
                <span className=" bg-white w-[25px] text-white block h-[3px] m-[5px_auto] "></span>
                <span className=" bg-white w-[25px] text-white block h-[3px] m-[5px_auto] "></span>
                <span className=" bg-white w-[25px] text-white block h-[3px] m-[5px_auto]"></span>
            </div> */}


            {isOpen && (
              <>
              <div className="md:hidden flex justify-between gap-x-20 items-center pr-5 max-md:fixed  max-md:top-16 max-md:left-0 max-md:flex-col max-md:w-full  max-md:text-center max-md:bg-black max-md:z-50 max-md:gap-8 max-md:pb-4 max-md:pt-4 ">
              <NavLink to="/">Home</NavLink>
              <NavLink to="about">About</NavLink>
              <NavLink to="gallery">Gallery</NavLink>
              <NavLink to="blog">Blog</NavLink>
              <NavLink to="contact">Contact</NavLink></div>
              </>
            
            )
          }
       
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="flex justify-center gap-4 bg-black pt-5 pb-2 brightness-90 m-[0_auto] flex-row">
        <NavLink to="https://www.instagram.com/alex_karamanov"><img src={inst} alt="Instagram" className="max-h-5 hover:scale-[1.1]" /></NavLink>
        <NavLink to="https://www.500px.com/alex_karamanov"> <img src={px} alt="500px" className="max-h-5 hover:scale-[1.1]" /></NavLink>
        <NavLink to="https://www.stocksy.com/alexalina"><img src={stocksy} alt="Stocksy" className="max-h-5 hover:scale-[1.1]" /></NavLink>
        <NavLink to="https://www.flickr.com/photos/alex_karamanov"><img src={flickr} alt="Flickr" className="max-h-5 hover:scale-[1.1]" />
        </NavLink>
      </footer>
      <NavLink to="/"><p className="flex justify-center text-white brightness-90 flex-wrap m-[0_auto] text-center" >2024 &copy; Alex Karamanov  </p> </NavLink>
    </div>
  );
}
