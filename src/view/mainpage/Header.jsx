
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="header__container">
                    <img src="assets/img/perfil.jpg" alt="" className="header__img" />

                    <Link to="#" className="header__logo">Log Book</Link>

                    <div className="header__search">
                        <input type="search" placeholder="Search" className="header__input" />
                        <i className="bx bx-search header__icon"></i>
                    </div>

                    <div className="header__toggle">
                        <i className="bx bx-menu" id="header-toggle"></i>
                    </div>
                </div>
            </header>
        </div>
    )
};

export default Header;
