import { TUser } from "../../types/types"
import Image from "next/image"
const UserInformationCard = (user:TUser) =>{
    return (
        <div className="bg-white w-full rounded-lg p-4 text-sm flex flex-col">
            <div className="flex flex-row place-content-between">
                <span className="text-slate-400 font-bold">User Information</span>
                <span className="text-blue-500 cursor-pointer">See all</span>
            </div>

            <div className="flex flex-row mt-2 gap-2 items-center w-full overflow-clip">
                <div className="overflow-clip min-w-fit">
                    <span className="font-bold cursor-pointer text-lg">{user.fullName}</span>
                </div>           
               <span className="text-slate-400">{`@${user.userName}`}</span>
            </div>

            {/* Bio Description */}
            <div className="text-slate-500 font-medium mt-4"> 
                <p>{"My name is Nnijka, I'm from the Czech Republic, I love listening to Lady Gaga, Shawn Mendes, and One Direction."} </p>
            </div>

            {/* City */}
            <div className=" flex flex-row gap-2 mt-4 text-slate-500">
                <Image src="/map.png" alt="map" className="h-4 w-4" width={16} height={16}/>
                <p>Living in <span className="font-bold">Denver</span></p>       
            </div>

            {/* School */}
            <div className=" flex flex-row gap-2 mt-2 text-slate-500">
                <Image src="/school.png" alt="school" className="h-4 w-4" width={16} height={16}/>
                <p>Went to <span className="font-bold">University of Pangasinan</span></p>       
            </div>
            
            {/* Work */}
            <div className=" flex flex-row gap-2 mt-2 text-slate-500">
                <Image src="/work.png" alt="work" className="h-4 w-4" width={16} height={16}/>
                <p>Works at <span className="font-bold">Universals Philippines</span></p>       
            </div>

            {/* Gitlink */}
            <div className=" flex flex-row gap-2 mt-2 text-slate-500 items-center w-full">
                <Image src="/link.png" alt="link" className="h-4 w-4" width={16} height={16}/>
                <a href="https://google.ca" className="underline text-blue-400">link.to</a>  
                <div className="flex flex-row items-center gap-2 w-full justify-end">
                    <Image src="/date.png" alt="date" className="h-4 w-4 ml-auto" width={16} height={16}/>
                    <p>Joined  <span className="font-bold"> November 24, 2015</span></p>  
                </div>
 
            </div>
            <button className="bg-blue-500 mt-4 text-white p-2 rounded-md following-btn">Following</button>
            <p className="text-red-400 mt-4 flex justify-end cursor-pointer">Block User</p>
        </div>)
}
export default UserInformationCard