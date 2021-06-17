import {useState} from "react"

import "./home.scss"
import Topbar from "../../components/topbar/Topbar"

import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"

export default function Home() {
    const [ResClass, setResclas]= useState(false)
    let handlecklick = ()=>{

        setResclas(!ResClass)
    }
    return (
        <>
       <Topbar/>
        <div className="homeConteiner">
            <Sidebar 
            clasChange={ResClass}
            cklikcHendler= {handlecklick}
            />
            <Feed clasChange={ResClass} />
            <Rightbar />
        </div>
       </>
      
    )
}
