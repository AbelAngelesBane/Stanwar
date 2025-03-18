import Image from "next/image"
import Feed from "./Feed"

const ProfileFeed = () => {
    return (
        <div className="flex flex-col gap-4">
            <div>
                {/* Banner */}
                <div className="banner"/>
                <div className=" bg-blue-300 relative ">
                    <Image className="rounded-full w-20 h-20 object-cover absolute transform right-1/2 -translate-y-1/2 translate-x-1/2 ring-2 ring-white z-10" width={80} height={80} alt="profile" src="https://images.unsplash.com/photo-1740482801914-6b6b928ba062?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </div>
                <div className="mt-12 text-center">
                    <span className="font-semibold ">Stefanni Joanne Angelina Germonotta</span>
                </div> 
                <div className="flex flex-row w-full justify-center gap-8">
                    <div className="flex flex-col text-center">
                        142<br/>Post
                    </div>
                    <div className="flex flex-col text-center">
                        1.2K<br/>Followers
                    </div>
                    <div className="flex flex-col text-center">
                        1.4K<br/>Following
                    </div>
                </div>

            </div>
            <Feed/>
        </div>
    )
}
export default ProfileFeed