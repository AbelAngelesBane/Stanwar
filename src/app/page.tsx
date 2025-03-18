import AddPost from "@/components/AddPost";
import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Stories from "@/components/Stories";

export default function Home() {
  return (
      <div className="flex gap-2 text-black p-6 bg-slate-300">
        {/* LEFT DIV */}
        <div className="hidden xl:block w-[20%] h-full">
          <LeftMenu></LeftMenu>
        </div>

        {/* CENTER DIV */}
        <div className="w-full lg:w-[70%] xl:w-[50%]">
          <div className="flex flex-col gap-6">
            <Stories/>
            <AddPost/>
            <div className="flex flex-col gap-2">
              <Feed/>
              <Feed/>
              <Feed/>
            </div>
            
          </div>
        </div>

        {/* RIGHT DIV */}
        <div className="hidden lg:block w-[30%]">
          <RightMenu />
        </div>
        
      </div>
  );
}
