import { NavLink,Outlet } from "react-router-dom";

import travel from '/Users/alexkaramanov/Desktop/OLprojectReact/src/assets/travel.jpg'
import portraits from '/Users/alexkaramanov/Desktop/OLprojectReact/src/assets/portraits.jpg'
import family from '/Users/alexkaramanov/Desktop/OLprojectReact/src/assets/family.jpg'
import business from '/Users/alexkaramanov/Desktop/OLprojectReact/src/assets/business.jpg'

export default function GalleryLayout(){
    return (
        <div>
        <nav className="w-[63vw] grid ml-auto mr-auto gap-4 grid-cols-[repeat(2,_minmax(240px,_1fr))] object-cover">
        <NavLink to="/travel"><img src={travel} alt="travel" 
        className="w-full rounded-[3px] hover:shadow-[0_8px_16px_0_rgba(0,_0,_0,_0.2),_0_6px_20px_0_rgba(0,_0,_0,_0.19)] hover:opacity-80 hover:scale-[1.01] hover:transition hover:duration-[0.3s]" />
        <p className="absolute m-[-3rem_auto] ml-6 p-2 text-white brightness-90">Travel</p></NavLink>
        <NavLink to="/portraits"><img src={portraits} alt="portraits" className="w-full rounded-[3px] hover:shadow-[0_8px_16px_0_rgba(0,_0,_0,_0.2),_0_6px_20px_0_rgba(0,_0,_0,_0.19)] hover:opacity-80 hover:scale-[1.01] hover:transition hover:duration-[0.3s]" />
        <p className="absolute m-[-3rem_auto] ml-6 p-2 text-white brightness-90" >Portraits</p></NavLink>
        <NavLink to="/family"><img src={family} alt="family" className="w-full rounded-[3px] hover:shadow-[0_8px_16px_0_rgba(0,_0,_0,_0.2),_0_6px_20px_0_rgba(0,_0,_0,_0.19)] hover:opacity-80 hover:scale-[1.01] hover:transition hover:duration-[0.3s]" />
        <p className="absolute m-[-3rem_auto] ml-6 p-2 text-white brightness-90" >Family</p></NavLink>
        <NavLink to="/business"><img src={business} alt="business" className="w-full rounded-[3px] hover:shadow-[0_8px_16px_0_rgba(0,_0,_0,_0.2),_0_6px_20px_0_rgba(0,_0,_0,_0.19)] hover:opacity-80 hover:scale-[1.01] hover:transition hover:duration-[0.3s]" />
        <p className="absolute m-[-3rem_auto] ml-6 p-2 text-white brightness-90" >Business</p></NavLink>
        </nav>
        <Outlet/>
        </div>
    )
}