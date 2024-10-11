import { NavLink,Outlet } from "react-router-dom";

import travel from '/Users/alexkaramanov/Desktop/OLprojectReact/src/assets/travel.jpg'
import portraits from '/Users/alexkaramanov/Desktop/OLprojectReact/src/assets/portraits.jpg'
import family from '/Users/alexkaramanov/Desktop/OLprojectReact/src/assets/family.jpg'
import business from '/Users/alexkaramanov/Desktop/OLprojectReact/src/assets/business.jpg'

export default function GalleryLayout(){
    return (
        <div>
        <nav className="bg-pink-400">
        <NavLink to="/travel"><img src={travel} alt="travel" className="w-full" /></NavLink>
        <NavLink to="/portraits"><img src={portraits} alt="portraits" className="w-full" /></NavLink>
        <NavLink to="/family"><img src={family} alt="family" className="w-full" /></NavLink>
        <NavLink to="/business"><img src={business} alt="business" className="w-full" /></NavLink>
        </nav>
        <Outlet/>
        </div>
    )
}