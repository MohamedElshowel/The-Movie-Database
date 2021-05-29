import logo from "../../images/logo.svg";
import plus from "../../images/plus.svg";
import search from "../../images/search.svg";

function Header() {
    return (
        <header className="app-header">
            <div className="app-header__content">
                <div className="app-header__media">
                    <a className="app-header__logo" href="/">
                        <img src={logo} alt="The Movie Database (TMDb)" />
                    </a>
                    <div className="app-header__categories">
                        <ul>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">TV Shows</a></li>
                            <li><a href="#">People</a></li>
                            <li><a href="#">More</a></li>
                        </ul>
                    </div>
                </div>
                <div className="app-header__actions">
                    <ul>
                        <li className="app-header__actions__add">
                            <a href="#">
                                <img src={plus} alt="Add New Movie" />
                            </a>
                        </li>
                        <li className="app-header__actions__translate">EN</li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Join TMDb</a></li>
                        <li className="app-header__actions__search">
                            <a href="#">
                                <img src={search} alt="Search" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;
