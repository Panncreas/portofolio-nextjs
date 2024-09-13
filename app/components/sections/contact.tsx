"use client"
import React, { useState } from "react";
import Image from "next/image";
import ig from "../../assets/img/instagram.png"
import gmail from "../../assets/img/gmail.png"
import wa from "../../assets/img/wa.png"
export default function Contact(){
    const [message, setMessage] = useState('');

    const sendMessageToWhatsApp = () => {
        const whatsappNumber = '082142404641';
        const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    };
    return(
        <div id="contact" className="h-[15rem] w-full">
                <div className=" ml-8 font-kumar  justify-center flex text-[40px] text-[#F9E8D9]">CONTACT</div>
                <div className="mt-8 justify-center space-x-10 flex">
                    <div className="flex w-48 items-center border-[#F9E8D9] border-2 rounded-l-xl rounded-r-lg">
                        <Image width={50} className="border-[#F9E8D9] border-2 rounded-xl" src={ig} alt="instagram"/>
                        <div className="ml-4 font-kumar text-[16px] text-[#F9E8D9]">nifan.albar</div>
                    </div>
                    <div className="flex w-[20rem] items-center border-[#F9E8D9] border-2 rounded-l-xl rounded-r-lg">
                        <Image width={40} className="bg-white rounded-lg w-fit h-fit border-[#fad5b49] border-2" src={gmail} alt="gmail"/>
                        <div className="ml-4 font-kumar text-[16px] text-[#F9E8D9]">nifan.albar@gmail.com</div>
                    </div>
                    <div className="flex w-56 items-center border-[#F9E8D9] border-2 rounded-l-xl rounded-r-lg">
                        <Image width={40} className="bg-white rounded-lg w-fit h-fit border-[#fad5b49] border-2" src={wa} alt="whatsapp"/>
                        <div className="ml-4 font-kumar text-[16px] text-[#F9E8D9]">082142404641</div>
                    </div>
                </div>
        </div>
    );
}