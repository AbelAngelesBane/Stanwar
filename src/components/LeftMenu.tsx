import CategoryNavigation from "./CategoryNavigation"
import MyProfileCard from "./MyProfileCard"
import SponsoredCard from "./SponsoredCard"

const LeftMenu = ({userId}:{userId?:string}) => {
    return (
        <div className="flex flex-col gap-4">
            {userId !== undefined ?
                // When user is at profile
                <>
                    <CategoryNavigation/>
                </> :
                //When user is at home
                <>
                    <MyProfileCard/>
                    <CategoryNavigation/>
                </>
            }
            <CategoryNavigation/>
            <SponsoredCard/>
        </div>
    )
}

export default LeftMenu