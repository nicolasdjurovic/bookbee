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
                    <h3 className={"font-bold text-white"}>My Books</h3>
                    <MoreButton className={"flex justify-end items-center text-white"}/>
                </div>
                <div className={"grid grid-rows-2 grid-flow-col gap-4 lg:grid-rows-1 ml-20 mt-4 mr-4"}>
                    <div className={"h-40 w-full bg-[#212121] rounded-lg flex"}>
                        <div className={"w-40 h-full"}>
                            <img src="/storage/book1.jpg" alt="book1" className={"object-cover w-full h-full rounded-lg"}/>
                        </div>
                        <div className={"flex justify-between items-start w-full"}>
                            <div className={"flex flex-col items-start w-full mx-4 my-4"}>
                                <h2 className={"text-white font-bold"}>Afterlife</h2>
                                <p className={"text-white"}>By: Nicolas Djurovic</p>
                                <div className={"flex items-center"}>
                                    <p className={"text-white"}>10</p>
                                    <RiCoinsLine color={"white"}/>
                                </div>
                            </div>
                            <div className={"flex flex-col h-full justify-between items-end"}>
                                <Link className={"mx-4 my-4"}><AiOutlineShopping size={"24px"} color={"white"}/></Link>
                                <Link className={"button1 mx-4 my-4"}>Preview</Link>
                            </div>
                        </div>

                    </div>
                    <div className={"h-40 w-full bg-[#212121] rounded-lg flex"}>
                        <div className={"w-40 h-full"}>
                            <img src="/storage/book1.jpg" alt="book1" className={"object-cover w-full h-full rounded-lg"}/>
                        </div>
                        <div className={"flex justify-between items-start w-full"}>
                            <div className={"flex flex-col items-start w-full mx-4 my-4"}>
                                <h2 className={"text-white font-bold"}>Afterlife</h2>
                                <p className={"text-white"}>By: Nicolas Djurovic</p>
                                <div className={"flex items-center"}>
                                    <p className={"text-white"}>10</p>
                                    <RiCoinsLine color={"white"}/>
                                </div>
                            </div>
                            <div className={"flex flex-col h-full justify-between items-end"}>
                                <Link className={"mx-4 my-4"}><AiOutlineShopping size={"24px"} color={"white"}/></Link>
                                <Link className={"button1 mx-4 my-4"}>Preview</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>



    );
}
