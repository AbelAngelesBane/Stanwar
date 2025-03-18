import Image from "next/image"
const SponsoredCard = ()=>{
    const samplStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim laoreet erat. Maecenas lacinia dui a neque elementum porta."
    return (
        <div className="bg-white w-full rounded-lg p-4 text-sm flex flex-col">
            <div className="flex flex-row place-content-between">
                <span className="text-slate-400 font-bold flex flex-1">Sponsored Ads</span>
                <Image src="/more.png" alt="more" className="w-4 h-4 m-auto cursor-pointer" width={16} height={16}/>
            </div>
            {/* AD IMAGE */}
            <img alt="sponsored image" className="h-auto w-full mt-4" src="https://images.unsplash.com/photo-1740745492818-0ab54b709586?q=80&w=2932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className="flex flex-row gap-4 mt-4">
                <Image src="https://images.unsplash.com/photo-1740745492818-0ab54b709586?q=80&w=2932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-8 h-8 object-cover rounded-full" alt="profile-pic" width={32} height={32}/>
                <a href="#" className="no-underline flex-1 m-auto font-bold text-md text-blue-400">Moulin Rouge</a>
            </div>
            {/* AD DESCRIPTION */}
            <p className="mt-4">{samplStr}</p>
            <button className="bg-slate-200 p-2 rounded-md text-gray-500">Learn More</button>
        </div>
    
    )
}
export default SponsoredCard