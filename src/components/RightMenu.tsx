import BirthdayCard from "./BirthdayCard"
import FriendRequest from "./FriendRequestCard"
import SponsoredCard from "./SponsoredCard"
import UserInformationCard from "./UserInformationCard"
import UserMediaCard from "./UserMediaCard"

const RightMenu = ({userId}:{userId?:string}) => {
    console.log(`PRINTED IN: ${userId}`)
    return (
        <div className="p-4 flex flex-col gap-4">
            
            {userId === undefined ?
            <>
                <FriendRequest/>
                <BirthdayCard/>
                <SponsoredCard/>
            </> : 
            <>  
                <UserInformationCard userId={1} userName="jasdkja" fullName="Nnijka Novotsky"/>
                <UserMediaCard/>
                <FriendRequest/>
            </>
            }
            
        </div>
    )
}
export default RightMenu