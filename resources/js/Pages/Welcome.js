import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import '../../css/app.css'

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className={"flex justify-between items-center px-4 py-4 absolute w-full bg1"}>
                <div>
                    <img src="/storage/bookbee-logo.png" alt="bookbee-logo" className={"h-8"}/>
                </div>
            </div>
            <div className={"h-screen w-full flex flex-col px-4 absolute justify-center"}>
                <h1 className={"flex justify-start text-[40px] md:text-[60px] lg:text-[80px] xl:text-[80px] text-white font-bold py-4"}>
                    The future of <br></br>audiobooks.
                </h1>
                <div className={"flex items-center space-x-4"}>
                    {props.auth.user ? (
                        <Link href={route('dashboard')} className="button1">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="button1">
                                Log in
                            </Link>
                            <Link href={route('register')} className="button1">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
            <div className={"w-full h-screen bg2"}></div>
        </>
    );
}
