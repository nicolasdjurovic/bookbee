import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import { AiOutlineShopping, AiOutlineStar, AiOutlineHome } from "react-icons/ai";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { RiCoinsLine } from "react-icons/ri";
import '../../css/app.css'
import Navbar1 from "@/Components/Navbar1";
import Navbar2 from "@/Components/Navbar2";
import MoreButton from "@/Components/MoreButton";
import Book from "@/Components/Book";

export default function Dashboard() {
    return (
        <div className={"bg-[#171717] h-full"}>
            <Head title="Dashboard" />
            <div>
                <Navbar1/>
            </div>
            <div>
                <Navbar2/>
            </div>
            <div>
                <div className={"flex items-center justify-between ml-20 mr-4 mt-4"}>
                    <h3 className={"font-bold text-white"}>My Books 2</h3>
                    <MoreButton className={"flex justify-end items-center text-white"}/>
                </div>
            </div>
        </div>



    );
}
