import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import plus from "../../images/plus.svg";
import search from "../../images/search.svg";

function Header() {
  return (
    <header className="app-header">
      <div className="app-header__content">
        <div className="app-header__media">
          <Link className="app-header__logo" to="/">
            <img src={logo} alt="The Movie Database (TMDb)" />
          </Link>
          <div className="app-header__categories">
            <ul>
              <li>
                <Link to="/">Movies</Link>
              </li>
              <li>
                <Link to="/">TV Shows</Link>
              </li>
              <li>
                <Link to="#">People</Link>
              </li>
              <li>
                <Link to="#">More</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="app-header__actions">
          <ul>
            <li className="app-header__actions__add">
              <Link to="#">
                <img src={plus} alt="Add New Movie" />
              </Link>
            </li>
            <li className="app-header__actions__translate">EN</li>
            <li>
              <Link to="#">Login</Link>
            </li>
            <li>
              <Link to="#">Join TMDb</Link>
            </li>
            <li className="app-header__actions__search">
              <Link to="#">
                <img src={search} alt="Search" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
