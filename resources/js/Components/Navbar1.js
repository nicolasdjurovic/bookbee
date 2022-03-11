import React from 'react';
import {Link} from "@inertiajs/inertia-react";
import {AiOutlineHome, AiOutlineShopping, AiOutlineStar} from "react-icons/ai";
import {BiLogOut} from "react-icons/bi";

export default function Navbar1(){
    return (
        <div className={"h-screen w-[65px] fixed flex flex-col justify-between items-center bg1 z-10"}>
            <div className={"px-4 py-4"}>
                <Link><img src="/storage/bookbee-logo.png" alt="bookbee-logo" className={"w-8 hover:opacity-[0.8]"}/></Link>
            </div>
            <div>
                <Link><AiOutlineHome size={"24px"} className={"my-8 hover:opacity-[0.8]"}/></Link>
                <Link><AiOutlineShopping size={"24px"} className={"my-8 hover:opacity-[0.8]"}/></Link>
                <Link><AiOutlineStar size={"24px"} className={"my-8 hover:opacity-[0.8]"}/></Link>
            </div>
            <div className={"py-4"}>
                <Link><BiLogOut size={"24px"} className={"hover:opacity-[0.8]"}/></Link>
            </div>
        </div>
    );
}
