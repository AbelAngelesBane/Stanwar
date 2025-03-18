import Link from "next/link"
import MobileMenu from "./MobileMenu"
import Image from "next/image"
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut } from "@clerk/nextjs"
import Spinner from "./Spinner"

const Navbar = () => {
    return (
        <div className="flex items-center justify-between h-24">
            {/* LEFT */}
            <div className="font-bold text-xl text-blue-500 md:hidden lg:block w-[20%]">
                <Link href="/">STANWAR</Link>
            </div>

            {/* CENTER */}
            <div className="hidden md:flex justify-between text-gray-600 w-[50%] gap-6 overflow-clip"> 
                {/* LINKS */}
                <div className="flex gap-6">
                    <Link href={""} className="flex gap-2 items-center">
                        <Image src="/home.png" alt="Homepage" width={16} height={16} className="w-4 h-4"/>
                        <span>Homepage</span>     
                    </Link>

                    <Link href={""} className="flex gap-2 items-center">
                        <Image src="/friends.png" alt="Friends" width={16} height={16} className="w-4 h-4"/>
                        <span>Friends</span>     
                    </Link>

                    <Link href={""} className="flex gap-2 items-center">
                        <Image src="/stories.png" alt="Stories" width={16} height={16} className="w-4 h-4"/>
                        <span>Stories</span>     
                    </Link>
                </div>

                {/* SEARCH BAR */}
                <div className="relative w-[30%] flex flex-row bg-slate-200 p-1 items-center rounded-xl overflow-hidden">
                    <input placeholder=" search.." className="bg-slate-200 text-slate-500 font-thin text-sm"/>
                    <Image src={"/search.png"} width={20} height={20} alt="search" className="w-4 h-4 absolute right-2"></Image>
                </div>    
                
            </div>

            {/* RIGHT */}
            <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end text-gray-600">
                <ClerkLoading>
                    <Spinner/>
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <div className="hidden md:flex">
                            <Image src={"/people.png"} alt="people" width={20} height={20}/>
                        </div>
                        <div className="hidden md:flex">
                            <Image src={"/messages.png"} alt="messages" width={20} height={20}/>
                        </div>
                        <div className="hidden md:flex">
                            <Image src={"/notifications.png"} alt="notifications" width={20} height={20}/>
                        </div>
                        <div className="flex bg-blue-950 border-none rounded-full w-6 h-6 items-center justify-center">
                            <Image src={"/noAvatar.png"} alt="profile" width={20} height={20} className="w-4 h-4"/>
                        </div>
                    </SignedIn>

                    <SignedOut>
                        <div className="flex gap-2 items-center">
                            <Image src="/login.png" alt="login" width={20} height={20} className="w-4 h-4 bg-white"/>
                            <Link href={"/sign-in"}>Login/Register</Link>
                        </div>
                    </SignedOut>
                </ClerkLoaded>
                <MobileMenu/>               
            </div>
        </div>
    )
}
export default Navbar

