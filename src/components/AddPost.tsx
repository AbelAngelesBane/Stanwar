"use client"
import Image from "next/image"
import {useState } from "react"

const AddPost = () => {
    const [textStatus, onChangeStatus] = useState("What's on your mind?")

    // You can obviously use PLACEHOLDER but I'm practicing useState here so don't follow haha
    const clearTextField = ()=>{
        if(textStatus === "What's on your mind?")onChangeStatus("")

    }

    return (
        <div className="w-full bg-white rounded-lg">
            <div className="p-4 flex flex-row gap-4 w-full">
                <Image src="https://images.unsplash.com/photo-1740482801914-6b6b928ba062?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-12 h-12 object-cover rounded-full" alt="profile-pic" width={48} height={48}/>
                <div className="flex flex-col flex-1">
                    <textarea className="bg-slate-200 text-sm rounded-md flex-1 px-2" 
                    value={textStatus}
                    onChange={(e)=>{onChangeStatus(e.target.value);}}
                    onClick={clearTextField}/>
                    <div className="flex flex-row justify-end md:justify-start">
                    <div className="flex flex-row gap-1 text-sm px-2 items-center cursor-pointer">
                        <Image src="/image-line.png" alt="upload-image" className="w-6 h-6" width={16} height={16}/>
                        <span>Photo</span>
                    </div>
                    <div className="flex flex-row gap-1 text-sm px-2 items-center cursor-pointer">
                        <Image src="/file-video-line.png" alt="upload-video" className="w-6 h-6" width={16} height={16}/>
                        <span>Video</span>
                    </div>
                    <div className="flex flex-row gap-1 text-sm px-2 items-center cursor-pointer">
                        <Image src="/poll.png" alt="start-poll" className="w-6 h-6" width={16} height={16}/>
                        <span>Poll</span>
                    </div>
                    <div className="flex flex-row gap-1 text-sm p-2 items-center cursor-pointer">
                        <Image src="/calendar-event-line.png" alt="add-event" className="w-6 h-6" width={16} height={16}/>
                        <span>Event</span>
                    </div>
                </div>
                </div>
                <Image src="/emoji.png" className="w-6 h-6 object-cover mt-8 cursor-pointer" width={16} height={16} alt="emoji"/>
            </div>

        </div>
    )
}
export default AddPost