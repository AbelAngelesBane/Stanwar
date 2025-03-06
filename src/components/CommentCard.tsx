 import Image
  from "next/image";
 const CommentCard = () => {
    return (
        <div>
            <div className="flex flex-row gap-4 w-full mt-4">
                <Image src="https://images.unsplash.com/photo-1740418644050-7c315b61bbff?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-8 h-8 object-cover rounded-full" alt="profile-pic" width={32} height={32}/>
                <div className="flex flex-1 flex-col gap-2">
                    <a className="no-underline flex flex-1 font-bold text-sm cursor-pointer">Stefanni Joanne Angelina Germonatta</a>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu elit vel metus dapibus imperdiet id et sem. Vestibulum at feugiat tortor, id gravida enim. Donec aliquam diam luctus, ultricies massa nec, sodales tortor. Fusce finibus ullamcorper arcu vitae dapibus. Aliquam sagittis sagittis dolor eu efficitur. Sed ultrices semper sem vitae pulvinar. Praesent non orci a tellus convallis tincidunt. Vivamus laoreet interdum enim eget volutpat. Suspendisse vitae justo commodo diam ullamcorper maximus. Ut efficitur risus eget quam pretium tincidunt. Donec augue est, feugiat at sem at, condimentum sodales lectus. Nullam nulla neque, fringilla eget aliquet non, mattis et augue.Nunc euismod urna sit amet dolor bibendum, eget finibus est hendrerit. Pellentesque molestie lectus a ligula auctor, vitae malesuada quam accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam tristique pellentesque magna, sit amet ultrices nibh dignissim a. Curabitur non rutrum neque, aliquet mattis massa. Maecenas eget malesuada diam, ac porttitor lorem. Aliquam pulvinar ante in enim suscipit bibendum. Mauris rutrum eleifend pulvinar. Phasellus eget massa viverra, posuere elit eget, facilisis felis.
                    </p>
                    <div className="flex flex-row text-sm justify-start items-center text-slate-400 gap-4">
                        {/* Like */}
                        <div className="flex flex-row gap-4 rounded-lg p-2 items-center text-sm justify-start cursor-pointer">
                            <Image src="/like.png" alt="like" className="w-4 h-4" width={16} height={16}/>
                            |
                            <span>124</span>
                        </div>
                        <p className="cursor-pointer">
                            Reply
                        </p>
                        
                    </div>
                </div>
                <a href="#">
                    <Image src="/more.png" alt="more" className="w-4 h-4 m-auto cursor-pointer" width={16} height={16}/>
                </a>            
            </div>  
            <div className="p-4">
            </div>
        </div>
         
    )
 }
 export default CommentCard