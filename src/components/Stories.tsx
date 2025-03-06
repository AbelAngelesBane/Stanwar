import Image from "next/image"

const Stories = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-sm scrollbar-hide">
            <div className="flex gap-8 w-max">
                {/* STORY */}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.unsplash.com/photo-1518281878818-b69cf2e9fba8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={80} height={80} className="w-20 h-20 rounded-full ring-2" alt="story"/>
                    <span className="font-medium">Abel</span>
                </div>
                {/* STORY */}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.unsplash.com/photo-1518281878818-b69cf2e9fba8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={80} height={80} className="w-20 h-20 rounded-full ring-2" alt="story"/>
                    <span className="font-medium">Abel</span>
                </div>
                {/* STORY */}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.unsplash.com/photo-1518281878818-b69cf2e9fba8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={80} height={80} className="w-20 h-20 rounded-full ring-2" alt="story"/>
                    <span className="font-medium">Abel</span>
                </div>                {/* STORY */}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.unsplash.com/photo-1518281878818-b69cf2e9fba8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={80} height={80} className="w-20 h-20 rounded-full ring-2" alt="story"/>
                    <span className="font-medium">Abel</span>
                </div>                {/* STORY */}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.unsplash.com/photo-1518281878818-b69cf2e9fba8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={80} height={80} className="w-20 h-20 rounded-full ring-2" alt="story"/>
                    <span className="font-medium">Abel</span>
                </div>                                
            </div>
        </div>
    )
}
export default Stories