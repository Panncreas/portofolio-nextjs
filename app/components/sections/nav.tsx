'use client'
import React, {useEffect, useState} from "react"
import {Link, ScrollLink} from 'react-scroll/modules'
import Image from "next/image";
import menuIcon from '../../assets/img/menu.svg'
import closeIcon from '../../assets/img/close.svg'

export default function Nav() {
    const [header, setHeader] = useState(false);
    const [open, setOpen] = useState(false);


    
    const scrollHeader = () => {
        if(window.scrollY >= 20){
            setHeader(true)
        } else {
            setHeader(false)
        }
    }

    const toggleMenu = () => {
        setOpen(!open);
    }

    useEffect(()=>{
        window.addEventListener('scroll', scrollHeader)

        return()=>{
            window.addEventListener('scroll', scrollHeader)
        }
    },[])
    return(
        <div className={header? "sm:sm-header xl:md-header" : "bg-[#1E201E] drop-shadow-xl"}>
            <div className="header flex items-center h-14 w-full border-[#F9E8D9] border-b-2 justify-between">
                <div className="sm:sm-nav-logo xl:md-nav-logo">
                    Chanifan
                </div>
                
                {/* menu */}
                <div className="flex">
                    <div className={`md-nav-menu`}>
                        <div>
                            <Link  to="home" offset={-100} smooth={true}  duration={500} className="font-playfair text-lg text-[#F9E8D9] dark:text-[#28221B]" href={""}>Home</Link>
                        </div>
                        <div>
                            <Link  to="portofolio" offset={-70}  smooth={true}  duration={500} className="font-playfair text-lg text-[#F9E8D9] dark:text-[#28221B]" href={""}>Portofolio</Link>
                        </div>
                        <div>
                            <Link  to="contact" offset={-55} smooth={true}  duration={500} className="font-playfair text-lg text-[#F9E8D9] dark:text-[#28221B]" href={""}>Contact</Link>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    );

}