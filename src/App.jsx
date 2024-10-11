import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom"
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import RootLayout from "./layouts/RootLayout";
import GalleryLayout from "./layouts/GalleryLayout";
import Travel from "./pages/gallery/Travel";
import Portraits from "./pages/gallery/Portraits";
import Family from "./pages/gallery/Family";
import Business from "./pages/gallery/Business";

const router = createBrowserRouter(
  createRoutesFromElements(  
  <Route path="/" element={<RootLayout/>}>
    <Route index element={<Home />}/>
    <Route path="about" element={<About />}/>
      <Route path="travel" element={<Travel />}/>
      <Route path="portraits" element={<Portraits />}/>
      <Route path="family" element={<Family />}/>
      <Route path="business" element={<Business />}/>
    <Route path="gallery" element={<GalleryLayout />}/>
    <Route path="blog" element={<Blog />}/>
    <Route path="contact" element={<Contact />}/>
  </Route>)
);

function App() {


  return (
  <div >

<RouterProvider router={router}/> 
</div>

  );
}

export default App
