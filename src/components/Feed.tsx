"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import CommentCard from "./CommentCard"

const Feed = () => {
    
    const [overflowActive, setOverflowActive] = useState(false)
    const textRef = useRef<HTMLParagraphElement>(null)
    const samplStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim laoreet erat. Maecenas lacinia dui a neque elementum porta. Suspendisse a nulla porttitor, porta elit id, condimentum velit. Quisque finibus, massa dignissim luctus imperdiet, magna leo ultrices ipsum, ac pharetra diam mauris eu augue. Nunc gravida, leo vel egestas eleifend, ex dolor blandit augue, eu auctor metus arcu non metus. Phasellus vitae convallis tellus. Sed rhoncus quam eleifend posuere finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Integer maximus mi quis dignissim ultricies. Curabitur interdum ipsum a sagittis egestas. Cras vitae faucibus eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut porttitor erat a dictum ullamcorper. Proin iaculis lacus ac purus cursus pulvinar. Ut quis semper lacus, varius volutpat tellus. Cras elementum at ipsum ut dapibus. Donec sed metus massa.Curabitur semper tincidunt ante, vitae commodo lacus mollis ac. Curabitur id neque commodo, ornare arcu vel, auctor lectus. Integer in magna nec quam egestas tempor a id mauris. Suspendisse non feugiat nunc, eu pulvinar augue. Aliquam diam justo, cursus vel sagittis in, tincidunt non arcu. Praesent suscipit imperdiet sem, eu ullamcorper urna. Morbi diam nisi, posuere nec sodales vitae, eleifend et tortor. Etiam mollis, mauris sit amet ornare luctus, felis ligula consequat tellus, sagittis congue lorem velit quis augue. Donec cursus placerat lacus, eu congue lacus sagittis non. Donec ornare sapien id leo congue luctus."

    useEffect(()=>{
        if (textRef.current && isOverflowActive(textRef.current)) {
            setOverflowActive(true)
        }else{
            setOverflowActive(false)
        }
        console.log(`IS ACTIVE: ${overflowActive}`)
    },[overflowActive])

    const isOverflowActive = (event: HTMLParagraphElement)=>{
        return event.scrollHeight > event.offsetHeight || event.scrollWidth > event.offsetWidth;
    }


    const expandTextField = ()=>{
        if (textRef.current) {
            textRef.current.classList.toggle("max-h-24")
            setOverflowActive(false)
        }
    }
    
    return (
        <div className="bg-white rounded-lg text-black p-4 feed">
            {/* Profile Information */}
            <div className="flex flex-row gap-4">
                <Image src="https://images.unsplash.com/photo-1740482801914-6b6b928ba062?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-8 h-8 object-cover rounded-full" alt="profile-pic" width={32} height={32}/>
                <a href="#" className="no-underline flex-1 m-auto">Stefani Joanne Angelina Germonotta</a>
                <Image src="/more.png" alt="more" className="w-4 h-4 m-auto cursor-pointer" width={16} height={16}/>
            </div>
            <div className="mt-4 flex flex-col">
                <Image unoptimized={true} className="w-full min-h-96 rounded-lg" width={100} height={30} alt="image" src="https://images.unsplash.com/photo-1735322122784-859d1445023d?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image>
                <p ref={textRef} className="overflow-clip w-full max-h-24">{samplStr} </p>
                {overflowActive && <span className="font-bold cursor-pointer" onClick={expandTextField}>See more...</span>}    
            </div>

            <div className="text-slate-400 flex flex-row gap-4 mt-4">
                {/* Like */}
                <button className="flex flex-row flex-1 gap-4 rounded-lg bg-blue-100 p-2 items-center text-sm justify-center cursor-pointer">
                    <Image src="/like.png" alt="like" className="w-4 h-4" width={16} height={16}/>
                    |
                    <span>124</span>
                </button>

                {/* Comment */}
                <button className="flex flex-row flex-1 gap-4 rounded-lg bg-blue-100 p-2 items-center text-sm justify-center cursor-pointer">
                    <Image src="/comment.png" alt="comment" className="w-4 h-4" width={16} height={16}/>
                    |
                    <span>124</span>
                </button>

                {/* Share */}
                <button className="flex flex-row flex-1 gap-4 rounded-lg bg-blue-100 p-2 items-center text-sm justify-center cursor-pointer">
                    <Image src="/share.png" alt="share" className="w-4 h-4" width={16} height={16}/>
                    |
                    <span>124</span>
                </button>
            </div>

            {/* WRITE COMMENT */}
            <div className="flex flex-row gap-2 mt-4">
                <Image src="https://images.unsplash.com/photo-1740418644050-7c315b61bbff?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-8 h-8 object-cover rounded-full" alt="profile-pic" width={32} height={32}/>
                <div className="flex flex-row gap-2 bg-slate-200 p-2 rounded-lg flex-1">
                    <textarea placeholder="Write a comment" className="bg-slate-200 w-full"></textarea>
                    <Image src="/emoji.png" className="w-6 h-6 object-cover mt-8 cursor-pointer" width={16} height={16} alt="emoji"/>           
                </div>
            </div>
            <CommentCard/>
        </div>
        
    )
}
export default Feed