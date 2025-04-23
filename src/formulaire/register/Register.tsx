import "./Register.css";

function Register() {
    return (
        <>
            <h1 className="register-text">Inscription</h1>
            <div className="form-register">
                <div className="div-input">
                    <input placeholder="Nom" type="text" required/>
                    <input placeholder="Prénom" type="text" required/>
                    <input placeholder="Email" type="email" required/>
                    <input placeholder="mot de passe" type="password" required/>
                    <input placeholder="confimer le mot de passe" type="password" required/>
                </div>
            </div>
            <div className="connect-compte">
                <p>Déjà un compte :</p>
                <a className="redirect-login" href="/login">Connectez-vous</a>
            </div>
            <a href="/public" className="btn-register">S'incrire</a>
        </>
    );
}

export default Register;
