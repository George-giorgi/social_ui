import "./online.scss"

export default function Online({online}) {
    return (
        <li className="rightBarFriend">
            <div className="rightbarProfileImgCont">
                <img className="rightBarProfaileImg" src={online.profilePicture} alt="imge" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rigtbarUserName">{online.username}</span>
        </li>
    )
}
