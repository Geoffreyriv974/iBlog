import "./Login.css";

function Login() {
    return (
        <>
            <h1 className="login-text">Connection</h1>
            <div className="form-login">
                <div className="div-input">
                    <input placeholder="Email" type="email" required/>
                    <input placeholder="mot de passe" type="password" required/>
                </div>
            </div>
            <a href="/public" className="btn-login">Se connecter</a>
        </>
    );
}

export default Login;
