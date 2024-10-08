import { NavLink, Outlet } from "react-router-dom";
import inst from "/Users/alexkaramanov/Desktop/OLprojectReact/src/assets/instagram-white-icon copy.png";
import px from "/Users/alexkaramanov/Desktop/OLprojectReact/src/assets/500px.png";
import stocksy from "/Users/alexkaramanov/Desktop/OLprojectReact/src/assets/logoStocksy.svg";
import flickr from "/Users/alexkaramanov/Desktop/OLprojectReact/src/assets/Flickr-PNG-Picture.png";
import logo from "/Users/alexkaramanov/Desktop/OLprojectReact/src/assets/logo.png"
export default function RootLayout() {
  return (
    <div>
      <header className="bg-black flex flex-wrap justify-between items-center text-white m-4 p-8-4">
        <div>
        <NavLink to="about"><img src={logo} alt="logo" className="w-24 block"/></NavLink> 
        </div>
        <div className="flex justify-between gap-x-20 items-center pr-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="gallery">Gallery</NavLink>
        <NavLink to="blog">Blog</NavLink>
        <NavLink to="contact">Contact</NavLink>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="flex justify-center gap-4 bg-black flex-wrap">
        <NavLink to="https://www.instagram.com/alex_karamanov">
          <img src={inst} alt="Instagram" className="max-h-5" />
        </NavLink>
        <NavLink to="https://www.500px.com/alex_karamanov"> <img src={px} alt="500px" className="max-h-5" /></NavLink>
        <NavLink to="https://www.stocksy.com/alexalina"><img src={stocksy} alt="Stocksy" className="max-h-5" /></NavLink>
        <NavLink to="https://www.flickr.com/photos/alex_karamanov">
        <img src={flickr} alt="Flickr" className="max-h-5" />
        </NavLink>
      </footer>
      <p className="flex justify-center text-white brightness-90">2024 &copy; Alex Karamanov  </p> 
    </div>
  );
}
