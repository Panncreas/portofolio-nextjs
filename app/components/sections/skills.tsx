import React from "react";
import Image from 'next/image'
import web from '../../assets/img/ux.png'
import uiux from '../../assets/img/web-design.png'
import data from '../../assets/img/statistic.png'

export default function Skills(){
    return(
        <div id="skills" className="h-[16rem] w-full">
            <div className="mx-[36.92rem] mt-16 font-kumar text-[40px] text-[#EE7214]">SKILLS</div>
            <div className="flex h-80 w-full justify-center items-center space-x-10">
                <div className="place-items-center grid gap-4 space-y-5 w-60">
                    <Image src={web} width={150} height={150} alt="web-icon"/>
                    <div className="font-kumar text-[20px] text-[#EE7214]">Web Development</div>
                </div>
                <div className="place-items-center grid gap-4 space-y-5 w-60">
                    <Image src={uiux} width={150} height={150} alt="web-icon"/>
                    <div className="font-kumar text-[20px] text-[#EE7214]">UI / UX Designer</div>
                </div>
                <div className="place-items-center grid gap-4 space-y-5 w-60">
                    <Image src={data} width={150} height={150} alt="web-icon"/>
                    <div className="font-kumar text-[20px] text-[#EE7214]">Data Analayst</div>
                </div>
            </div>
        </div>
    );
}