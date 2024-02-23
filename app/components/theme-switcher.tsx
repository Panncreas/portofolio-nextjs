"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Image from "next/image";
import sun from '../assets/img/sun.png'
import moon from '../assets/img/moon.png'


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }

  const toggleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
    setToggle(!toggle)
  }

  return (
    <div
      className={`flex w-16 cursor-pointer  
      border-[#FDEEDC] border-2 rounded-full
      ${toggle ? "justify-start bg-[#E36414]" : "justify-end bg-[#28221B]"}`}
      onClick={toggleSwitch}
    >
     <motion.div className={`flex items-center justify-center w-6 rounded-full  
     ${toggle ? "bg-[#FDEEDC]" : "bg-[#675948]"}`}
     layout
     transition={{type:'spring', stiffness: 1000, damping: 100}}>
      {toggle ? 
      <Image src={sun} alt="dark"
      className="w-4"/>
      :
      <Image src={moon} alt="light"
      className="w-4"/>
      }
     </motion.div>

    </div>
  );
};   