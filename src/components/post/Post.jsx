
import "./post.scss"
import {MoreVert} from "@material-ui/icons"
import {Users} from "../../Datas"

import {useState} from "react"


export default function Post({posts}) {
    const [like,setlike] = useState(posts.like)
    const [likeDislike, setLikeDislike] = useState(false)
    
    const handlelike = ()=>{
       likeDislike? setlike(like-1): setlike(like+1)
       setLikeDislike(!likeDislike)
    }
    
    
    return (
        <div className="Post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopleft">
                        <img 
                        className="postProfileImg"
                        src= { Users.filter((f)=>f.id === posts.userId)[0].profilePicture
                        } alt="FF" />
                        <span className="postUserName">{
                            Users.filter((f)=>f.id === posts.userId)[0].username
                        }</span>
                        <span className="postDate">{posts.date}</span>
                    </div>
                    <div className="postTopRight">
                      <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{posts.desc}</span>
                    <img  
                    className="postImg"
                    src={posts.photo}
                    alt="imagee"
                    />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="./assets/like.png" alt="imagee"
                         onClick={handlelike}
                        />
                        <img className="likeIcon" src="./assets/heart.png" alt="imagee" 
                         onClick={handlelike}
                        />
                        <span className="postLikecounter">{like}</span>
                    </div>
                    <div className="postBottomRight">
                       <span className="postCommnetText">{posts.comment} comment</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
