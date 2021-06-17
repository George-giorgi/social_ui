import "./friend.scss"

export default function Friend({users}) {
    return (
        <li className="SidebarFriend">
            <img className="sidebarFriendImg"
             src={users.profilePicture}
            alt="imagee"
            />
            <span className="sideBarFriendName">{users.username}</span>
        </li>
    )
}
