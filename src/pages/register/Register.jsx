import "./register.scss"

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Giosocial</h3>
                    <span className="loginDesc">
                        Connect whth friends and the world around you on Giosocial
                    </span>
                </div>
                <div className="loginRight">
                    <div className="logiBox">
                        <input placeholder="Username" className="loginInput" />
                       <input placeholder="Email" className="loginInput" />
                       <input placeholder="Password" className="loginInput" />
                       <input placeholder="Password Again" className="loginInput" />
                       <button className="loginButton">Sign Up</button>
                       <button className="loginRegister">Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
