import React from 'react';
import {Link} from "@inertiajs/inertia-react";
import {AiOutlineHome, AiOutlineShopping, AiOutlineStar} from "react-icons/ai";
import {BiLogOut} from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

export default function MoreButton(){
    return (
        <Link>
            <div className={"flex items-center"}>
                <p className={"moreButton"}>More</p>
                <BsArrowRight size={"24px"}/>
            </div>
        </Link>
    );
}
