import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import { AiOutlineShopping, AiOutlineStar, AiOutlineHome } from "react-icons/ai";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import '../../css/app.css'
import Navbar1 from "@/Components/Navbar1";
import Navbar2 from "@/Components/Navbar2";
import MoreButton from "@/Components/MoreButton";

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <div>
                <Navbar1/>
            </div>
            <div>
                <Navbar2/>
            </div>
            <div>
                <div className={"flex items-center justify-between ml-20 mr-4 mt-4"}>
                    <h3 className={"font-bold"}>My Books</h3>
                    <MoreButton className={"flex justify-end items-center"}/>
                </div>
                <div className={"grid grid-rows-4 grid-flow-col gap-4 lg:grid-rows-1 ml-20 mt-4 mr-4"}>
                    <div className={"h-80 w-full bg-gray-400 rounded-lg"}></div>
                    <div className={"h-80 w-full bg-gray-400 rounded-lg"}></div>
                    <div className={"h-80 w-full bg-gray-400 rounded-lg"}></div>
                </div>
            </div>
        </>



    );
}
