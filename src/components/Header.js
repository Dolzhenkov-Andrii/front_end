function Header(props) {
    return (
        <header className="header"> 
            <div className="container">
                <nav className="nav">
                    <a className="nav_link" href="/">home</a>
                    <a className="nav_link" href="###">services</a>
                    <a className="nav_link" href="###">Portfolio</a>
                </nav>
                <button className="day_night" href="###" onClick={() => props.setBodyClass(!props.bodyClass)}>wds</button>
                <nav className="nav">
                    <a className="nav_link" href="###">our team</a>
                    <a className="nav_link" href="/our_blog">our blog</a>
                    <a className="nav_link" href="###">Contact us</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;