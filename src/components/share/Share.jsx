import "./share.scss"

import {PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons"

export default function Share() {
    return (
        <div className = "share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareImg" src="./assets/person/6.jpeg" alt="imagee" />
                    <input className="shareInput" placeholder="what's in your mind gio?" />
                </div>
                <hr className="shareHr" />
                <div className="shareButtom">
                    <div className="sahreOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or Viode</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Feeling</span>
                        </div>
                    </div>
                    <button className="shareButton">share</button>
                </div>
            </div>
        </div>
    )
}
