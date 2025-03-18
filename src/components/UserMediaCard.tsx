import Image from "next/image"
const UserMediaCard = ()=>{
    const samplImg = "https://plus.unsplash.com/premium_photo-1674740443999-3d67127b5389?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const samplImg2 = "https://images.unsplash.com/photo-1728519616666-d092572850f9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const samplImg3 = "https://images.unsplash.com/photo-1735615479436-6a697c3e0d48?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const imgs = [samplImg,samplImg2,samplImg3,samplImg,samplImg3]
    
    return (
        <div className="bg-white p-4 rounded-lg shadow-md ">
            <div className="flex flex-row place-content-between">
                <span className="text-slate-400 font-bold">User Media</span>
                <span className="text-blue-500 cursor-pointer">See all</span>
            </div>
            <div className="grid lg:grid-cols-3 xl:grid-cols-4  w-full mt-4">
                {imgs ? 
                imgs.map((img,index) => 
                <div className= "flex justify-center mt-4" key={index}>
                    <Image src={img} className="h-20 w-16 rounded-lg" height={32} width={24} alt="image"/>
                </div> 
                )
                : ""}

            </div>
        </div>
    )
}
export default UserMediaCard