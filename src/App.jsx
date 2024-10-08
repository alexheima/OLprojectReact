import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(  
  <Route path="/" element={<RootLayout/>}>
    <Route index element={<Home />}/>
    <Route path="about" element={<About />}/>
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
