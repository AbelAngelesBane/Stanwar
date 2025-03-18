import Image from "next/image"
const FriendRequest = ()=>{
    const sampleProfiles = [{
        id:0,
        name: "Teresita Marquez",
        img: "https://images.unsplash.com/photo-1739188366834-1281a22a1ac5?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {   id:1,
        name: "Benedick Marti",
        img: "https://images.unsplash.com/photo-1739932900241-4d3362b5ed8e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]
    return (
        <div className="bg-white w-full rounded-lg p-4 text-sm flex flex-col">
            <div className="flex flex-row place-content-between">
                <span className="text-slate-400 font-bold">Friend Request</span>
                <span className="text-blue-500 cursor-pointer">See all</span>
            </div>
            {sampleProfiles.map(profile => 
            <div className="flex flex-row gap-2 mt-2" key={profile.id}>
                <Image src={profile.img} className="w-8 h-8 object-cover rounded-full" alt="profile-pic" width={32} height={32}/>
                <span className="flex flex-1 items-center font-bold p-2 cursor-pointer">{profile.name}</span>
                <div className="flex flex-row items-center gap-2">
                    <div className="bg-blue-400 w-5 h-5 rounded-full text-white accept-decline-btn"><center>✓</center></div>
                    <div className="bg-gray-300 w-5 h-5 rounded-full text-white accept-decline-btn"><center>x</center></div>
                </div>
            </div>
            )               
            }
        </div>
    )
}

export default FriendRequest