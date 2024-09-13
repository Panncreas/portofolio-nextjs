
import Nav from "./components/sections/nav"; 
import Home from "./components/sections/home";
import Portofolio from "./components/sections/portofolio";
import Contact from "./components/sections/contact";


export default function Page() {
  return (
    <div className=" w-full min-h-screen bg-[#1E201E]">
      <Nav/>
      <Home/>
      <Portofolio/>
      <Contact/>
    </div>
  );
}
