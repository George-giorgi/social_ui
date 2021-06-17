
import "./sidebar.scss"
import {Users} from "../../Datas"
import {
    RssFeed,
    Chat,
    PlayCircleFilled,
    Group,
    Bookmark,
    Help,
    Work,
    EventNote,
    School
} from "@material-ui/icons"
import Friend from "../closeFriend/Friend"

export default function Sidebar({clasChange,cklikcHendler}) {

    return (
        <div className={clasChange? "Sidebar responsive": "Sidebar" }>
            <div className={clasChange? "RespButton trasform" : "RespButton"}
            onClick={cklikcHendler}
            >
                <img src="./assets/resp_photo/right-arrow.png" alt="imagee"/>
            </div>
            <div className="sidebarWrapper">
               <ul className="sideBarList">
                   <li className="sidebarListItem">
                       <RssFeed className="sidebarIcon"/>
                       <span className="SidebarText" >
                          Feed
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <Chat className="sidebarIcon"/>
                       <span className="SidebarText" >
                          Chats
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <PlayCircleFilled className="sidebarIcon"/>
                       <span className="SidebarText" >
                          Videos
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <Group className="sidebarIcon"/>
                       <span className="SidebarText" >
                          Groups
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <Bookmark className="sidebarIcon"/>
                       <span className="SidebarText" >
                          Bookmarks
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <Help className="sidebarIcon"/>
                       <span className="SidebarText" >
                          Questions
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <Work className="sidebarIcon"/>
                       <span className="SidebarText" >
                          Jobs
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <EventNote className="sidebarIcon"/>
                       <span className="SidebarText" >
                          Events
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <School className="sidebarIcon"/>
                       <span className="SidebarText" >
                          Courses
                       </span>
                   </li>
               </ul>
               <button className="sidebarButton">show mor</button>
               <hr className ="sidebarHR" />
               <ul className="sidebarFiendList">
                   {
                       Users.map((u)=>{

                        return <Friend
                         key={u.id}
                         users={u} 
                         />
                       })
                   }
                   
               </ul>
            </div>
        </div>
    )
}
