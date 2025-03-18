import LeftMenu from "@/components/LeftMenu"
import RightMenu from "@/components/RightMenu"
import ProfileFeed from "@/components/ProfileFeed"
const ProfilePage = () => {
    return (
        <div className="flex gap-2 text-black p-6 bg-slate-300">
        {/* LEFT DIV */}
        <div className="hidden xl:block w-[20%] h-full">
          <LeftMenu userId="prof"></LeftMenu>
        </div>

        {/* CENTER DIV */}
        <div className="w-full lg:w-[70%] xl:w-[50%]">
          <div className="flex flex-col gap-6">
            <ProfileFeed />
          </div>
        </div>

        {/* RIGHT DIV */}
        <div className="hidden lg:block w-[30%]">
            <RightMenu userId="prof"/>
        </div>
        
      </div>
    )
}

export default ProfilePage