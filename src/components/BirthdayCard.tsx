import Image from "next/image"
const BirthdayCard = () => {

    const sampleProfiles = [{
        id:0,
        name: "Michael Novotny",
        img: "https://images.unsplash.com/photo-1739188366834-1281a22a1ac5?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {   id:1,
        name: "Brian Kinney",
        img: "https://images.unsplash.com/photo-1739932900241-4d3362b5ed8e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
    ]
    return (
        <div className="bg-white w-full rounded-sm p-4 text-sm flex flex-col">
            <span className="text-slate-400 font-bold">Birthdays</span>


            {/*PROFILE CARDS*/}
            {sampleProfiles.map(profile => 
            <div className="flex flex-row gap-2 mt-4" key={profile.id}>
                <Image src={profile.img} className="w-8 h-8 object-cover rounded-full" alt="profile-pic" width={32} height={32}/>
                <span className="flex flex-1 items-center font-bold p-2 cursor-pointer">{profile.name}</span>
                <button className="celebrate-btn">Celebrate</button>
            </div>
            )               
            }

            <div className="flex flex-row p-4 bg-slate-100 content-center gap-2 items-center mt-4">
                <Image src="/gift.png" className="w-6 h-6"  height={24} width={24} alt="gift"/>
                <div className="cursor-pointer">
                    <span className="font-bold text-slate-600">Upcoming Birthdays</span>
                    <p>See other 16 have birthdays</p>
                </div>
            </div>
        </div>
    )
}
export default BirthdayCard