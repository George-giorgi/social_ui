import "./rightbar.scss"
import {Users} from "../../Datas"
import Online from "../online/Online"

export default function Rightbar({profile}) {
    const HomeRightbar =()=>{

        return(
            <>
             <div className="birthDayConteiner">
                    <img 
                    className="birthDayImg" 
                    src = "./assets/gift.png" 
                    alt="imagee"
                    />
                    <span className="birthDayText"> <b>pola foster</b> and <b>other friends</b> 3 have a birthday today.</span>
                </div>
                <img className="rightbarAd" src = "./assets/ad.png" alt="imagee" />
                <h4 className="rightbarTitle">
                    Onlyne Friends
                </h4>
                <ul className="rightbarFriendList">
                    {
                      Users.map((o)=>{
                         
                        return  <Online 
                        online={o} 
                        key={o.id}
                        />
                      })
                    }
                </ul>

            </>
        )
    }
    const ProfileRightbar = ()=>{

        return(
            <>
             <h4 className ="rightbarTitl">User informatio Title</h4>
             <div className="rightbarInfo">
                 <div className="rightbarInfoItem">
                     <span className="rightbarInfokey">City:</span>
                     <span className="rightbarInfoValue">Rustavi</span>
                 </div>
                 <div className="rightbarInfoItem">
                     <span className="rightbarInfokey">From:</span>
                     <span className="rightbarInfoValue">Rustavi</span>
                 </div>
                 <div className="rightbarInfoItem">
                     <span className="rightbarInfokey">Relationship:</span>
                     <span className="rightbarInfoValue">Single</span>
                 </div>
             </div>
             <h4 className ="rightbarTitle">User friends</h4>
             <div className="rightbarFollowings">
                 <div className="rightbarFollowing">
                     <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                     <span className="rightbarWollowingName">Eka Kapanadze</span>
                 </div>
                 <div className="rightbarFollowing">
                     <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
                     <span className="rightbarWollowingName">Eka Kapanadze</span>
                 </div>
                 <div className="rightbarFollowing">
                     <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
                     <span className="rightbarWollowingName">Eka Kapanadze</span>
                 </div>
                 <div className="rightbarFollowing">
                     <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                     <span className="rightbarWollowingName">Eka Kapanadze</span>
                 </div>
                 <div className="rightbarFollowing">
                     <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
                     <span className="rightbarWollowingName">Eka Kapanadze</span>
                 </div>
                 <div className="rightbarFollowing">
                     <img src="assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
                     <span className="rightbarWollowingName">Eka Kapanadze</span>
                 </div>
             </div>
            </>
        )
    }
    return (
        <div className ="Rightbar">
            <div className="rightBarWrapper">
               {profile? <ProfileRightbar/> :<HomeRightbar/> }
            </div>
        </div>
    )
}
