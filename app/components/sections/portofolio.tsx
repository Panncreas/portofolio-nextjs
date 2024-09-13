"use client"
import { SetStateAction, useState, useRef, useEffect } from "react";
import Link from "next/link";
import WebIo from "@/app/assets/code/Web-io";
import DesignIo from "@/app/assets/code/Design-io";
import AllIo from "@/app/assets/code/All-io";
import { Transition } from '@headlessui/react'

export default function Portofolio(){
    const [activeMenu, setActiveMenu] =  useState("All");

    const handleClick = (menu: SetStateAction<string>) => {
        setActiveMenu(menu);
    }

    const tabsRef = useRef<HTMLDivElement>(null)

    const heightFix = () => {
        if (tabsRef.current && tabsRef.current.parentElement) tabsRef.current.parentElement.style.height = `${tabsRef.current.clientHeight}px`
    }

    useEffect(() => {
        heightFix()
    }, [])   
    return(
        <div id="portofolio" className="h-[45rem] w-full">
            <div className="pt-[60px] flex justify-center mt-15 w-full font-kumar text-[40px] text-[#F9E8D9] dark:text-[#28221B]">PORTOFOLIO</div>
            <WebIo/>
            {/* <div className="flex justify-center px-4 mt-4 mx-[32rem] h-10 space-x-10 w-80 items-center">
                <div onClick={() => handleClick("All")}  className={`font-playfair text-[#F9E8D9] dark:text-[#28221B] cursor-pointer text-[18px] after:pt1 hover:after:pt2 ${activeMenu === "All" ? 'active' : ''}`}>All</div>
                <div onClick={() => handleClick("Web")}  className={`font-playfair text-[#F9E8D9] dark:text-[#28221B] cursor-pointer text-[18px] after:pt1 hover:after:pt2 ${activeMenu === "Web" ? 'active' : ''}`}>Website</div>
                <div onClick={() => handleClick("Design")}  className={`font-playfair text-[#F9E8D9] dark:text-[#28221B] cursor-pointer text-[18px] after:pt1 hover:after:pt2 ${activeMenu === "Ui/Ux" ? 'active' : ''}`}>UI / UX</div>
            </div>
                <Transition
                    show={activeMenu === "All"}
                    enter="transition ease-out duration-300"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-200"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <div>
                        <AllIo/>
                    </div>
                </Transition>
                <Transition
                    show={activeMenu === "Web"}
                    enter="transition ease-out duration-300"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-200"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <div>
                        <WebIo/>
                    </div>
                </Transition>
                <Transition
                    show={activeMenu === "Design"}
                    enter="transition ease-out duration-300"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-200"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <div>
                       <DesignIo/>
                    </div>
                </Transition> */}
        </div>
    );
}



