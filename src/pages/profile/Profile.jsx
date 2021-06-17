import "./profile.scss"
import Topbar from "../../components/topbar/Topbar"

import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"

import {useState} from "react"

export default function Profile() {
    const [ResClass, setResclas]= useState(false)
    let handlecklick = ()=>{

        setResclas(!ResClass)
    }
    return (
        <>
            <Topbar/>
            <div className="profile">
                <Sidebar 
                clasChange={ResClass}
                cklikcHendler= {handlecklick}
                />
                <div className="profileRight">
                    <div className="proFilerightTop">
                        <div className="profileCover">
                            <img 
                            src="./assets/post/3.jpeg" alt="asd" 
                            className="profileCoverImg"
                            />
                            <img 
                            src="./assets/person/6.jpeg" alt="asd" 
                            className="profileUserImg"
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Giorgi Kapanadze</h4>
                            <span className="profileDesc">Hello my friends!</span>
                        </div>
                    </div>
                    <div className="proFilerighBottom">
                        <Feed clasChange={ResClass} />
                        <Rightbar profile />
                    </div>
                    
                </div>
            </div>
       </>
   
    )
}
