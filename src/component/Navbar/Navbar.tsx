import "./Navbar.css"
function Navbar() {
    return (
        <>
            <nav>
                <div className="nav-main">
                    <div className="nav-title">
                        <p>iBlog</p>
                    </div>
                    <div className="nav-option">
                        <a className="btn-redirect-accueil" href="/">Accueil</a>
                        <a className="btn-redirect-accueil" href="/article">Article</a>
                        <a className="btn-redirect-accueil" href="/article">Catégorie</a>
                        <a className="btn-redirect-accueil" href="/catégorie">Admin</a>
                        <a className="btn-redirect-accueil" href="/register">Inscrition</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar