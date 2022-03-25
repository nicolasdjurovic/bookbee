import React from 'react';
import {Link} from "@inertiajs/inertia-react";
import {AiOutlineHome, AiOutlineShopping, AiOutlineStar} from "react-icons/ai";
import {BiLogOut} from "react-icons/bi";
import {RiCoinsLine} from "react-icons/ri";

export default function Book(){

    return (
        <>
            <div className={"grid grid-rows-2 grid-flow-col gap-4 lg:grid-rows-1 ml-20 mt-4 mr-4"}>
                <div className={"h-40 w-full bg-[#212121] rounded-lg flex"}>
                    <div className={"w-40 h-full"}>
                        <img src={"storage/1.jpg"} alt="book1" className={"object-cover w-full h-full rounded-lg"}/>
                    </div>
                    <div className={"flex justify-between items-start w-full"}>
                        <div className={"flex flex-col items-start w-full mx-4 my-4"}>
                            <h2 className={"text-white font-bold"}>Book Title</h2>
                            <p className={"text-white"}>By: Author</p>
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
        </>
    );
}
