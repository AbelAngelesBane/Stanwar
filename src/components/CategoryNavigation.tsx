import Image from "next/image"
const CategoryNavigation = ()=>{
    return (
        <div className="bg-white p-4 flex flex-col gap-4 text-slate-500 rounded-lg">
            <div className="flex flex-row items-center gap-4 category-item p-2">
                <Image alt="MyPost" src="/posts.png" className="h-4 w-4" width={16} height={16}/>
                My Post
            </div>
            <div className="flex flex-row items-center gap-4 category-item p-2">
                <Image alt="activity" src="/activity.png" className="h-4 w-4" width={16} height={16}/>
                Activity
            </div>
            <div className="flex flex-row items-center gap-4 category-item p-2">
                <Image alt="marketplace" src="/market.png" className="h-4 w-4" width={16} height={16}/>
                Marketplace
            </div>
            <div className="flex flex-row items-center gap-4 category-item p-2">
                <Image alt="events" src="/events.png" className="h-4 w-4" width={16} height={16}/>
                Events
            </div>
            <div className="flex flex-row items-center gap-4 category-item p-2">
                <Image alt="albums" src="/albums.png" className="h-4 w-4" width={16} height={16}/>
                Albums
            </div>
            <div className="flex flex-row items-center gap-4 category-item p-2">
                <Image alt="videos" src="/videos.png" className="h-4 w-4" width={16} height={16}/>
                Videos
            </div>
            <div className="flex flex-row items-center gap-4 category-item p-2">
                <Image alt="news" src="/news.png" className="h-4 w-4" width={16} height={16}/>
                News
            </div>
            <div className="flex flex-row items-center gap-4 category-item p-2">
                <Image alt="courses" src="/courses.png" className="h-4 w-4" width={16} height={16}/>
                Courses
            </div>
            <div className="flex flex-row items-center gap-4 category-item p-2">
                <Image alt="lists" src="/lists.png" className="h-4 w-4" width={16} height={16}/>
                Lists
            </div>
            <div className="flex flex-row items-center gap-4 category-item p-2">
                <Image alt="settings" src="/settings.png" className="h-4 w-4" width={16} height={16}/>
                Settings
            </div>
        </div>
    )
}
export default CategoryNavigation