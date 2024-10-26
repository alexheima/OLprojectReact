import homeBack from '/Users/alexkaramanov/Desktop/OLprojectReact/src/assets/homeBack.jpg';
import homeFront from '/Users/alexkaramanov/Desktop/OLprojectReact/src/assets/home2.jpg';
import { NavLink } from 'react-router-dom';

export default function Home(){
    return (

         <main className="main">
        {/* <a href="family.html"> */}
           <NavLink to="/family"> <img className="max-md:hidden" src={homeBack} alt="background"/> </NavLink>
           <NavLink to="/family"> <img className="md:hidden" src={homeFront} alt="background"/> </NavLink>
            {/* </a> */}
      {/* <a href="family.html"></a>
        <img className="second" src="images/home2.jpg" alt="background" style="width: 100vw; "/> */}
      
         </main>
        
  
    )
}