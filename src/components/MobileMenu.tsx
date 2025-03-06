"use client"
import Link from "next/link";
import { useState } from "react"

const MobileMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const setState = () => {
        setIsOpen(isOpen ? false : true)
        console.log(`NAVBAR IS ${isOpen}`)
    }

    return <div className="md:hidden">

        {/* Hamburger menu bars */}
        <div className={`flex flex-col cursor-pointer gap-[4.5px]`} onClick={setState}>
            <div className={`w-6 h-1 bg-black rounded-sm ${isOpen ? `rotate-45` : ""} origin-left ease-in-out duration-500`}></div>
            <div className={`w-6 h-1 bg-black rounded-sm ${isOpen ? `opacity-0` : ""} ease-in-out duration-500`}></div>
            <div className={`w-6 h-1 bg-black rounded-sm ${isOpen ? `-rotate-45` : ""} origin-left ease-in-out duration-500`}></div>
        </div>      
        {
            isOpen && (
                <div className="absolute left-0 w-full top-24 h-[calc(100vh-96px)] bg-black flex flex-col justify-center items-center gap-8 font-medium text-xl z-20">
                    <Link href="">Home</Link>
                    <Link href="">Friends</Link>
                    <Link href="">Groups</Link>
                    <Link href="">Stories</Link>
                    <Link href="">Login</Link>
                </div>
            )
        }
    </div>
}
export default MobileMenu