
import "./feed.scss"
import Share from "../share/Share"
import Post from "../post/Post"
import {Posts} from "../../Datas"
export default function Feed({clasChange}) {
    
	
    return (
        <div className = {clasChange? "Feed FeedResp": "Feed"  }>
            <div className="feedWrapper">
                <Share />
                {Posts.map((p)=>{

                    return <Post  
                    posts={p}
                    key = {p.id}
                    />
                })}
                
              
            </div>
        </div>
    )
}
