import Image from "next/image"

/* eslint-disable @next/next/no-img-element */
const MyProfileCard = () => {
    return (
        <div className="bg-white  w-full flex flex-col relative">
            {/* Image banner */}
            <div className="">
                <img alt="profile-banner" className="w-full h-20 object-cover" src="https://images.unsplash.com/photo-1735238075870-2e74333c6c7e?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            </div>
            {/* Profile Picture */}
            <div className=" bg-blue-300 relative ">
                <Image className="rounded-full w-12 h-12 object-cover absolute transform right-1/2 -translate-y-1/2 translate-x-1/2 ring-1 ring-white z-10" width={48} height={48} alt="profile" src="https://images.unsplash.com/photo-1740482801914-6b6b928ba062?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            </div>
            <div className="flex flex-col gap-2 items-center p-4 mt-2">
                <span  className="font-bold text-center">Stefanni Joanne Angelina Germonatta</span>
                <span className="text-slate-400 text-sm">500 Slate</span>
                <button className="bg-blue-400 rounded-lg text-sm text-white p-2">My Profile</button>
            </div>
        </div>
    )
}
export default MyProfileCard