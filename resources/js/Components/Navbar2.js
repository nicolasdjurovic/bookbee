import React from 'react';
import {Link} from "@inertiajs/inertia-react";
import { usePage } from '@inertiajs/inertia-react'
import { RiCoinsLine } from "react-icons/ri";

export default function Navbar1(){
    const { auth } = usePage().props
    return (
        <div className={"w-full h-[65px] flex flex-col justify-center bg-white items-end pl-20 pr-4"}>
            <p>{auth.user.email}</p>
            <div className={"flex items-center"}>
                <p>10</p>
                <Link><RiCoinsLine size={"24px"}/></Link>
            </div>
        </div>
    );
}
