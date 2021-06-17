import "./login.scss"

export default function Login() {
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
                       <input placeholder="Email" className="loginInput" />
                       <input placeholder="Password" className="loginInput" />
                       <button className="loginButton">Log In</button>
                       <span className="loginForgot">Forgot Password?</span>
                       <button className="loginRegister">Create a new Acount</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
