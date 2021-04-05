
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <div className="nav" id="navbar">
                <nav className="nav__container">
                    <div>
                        <Link to="#" className="nav__link nav__logo">
                            <i className="bx bxs-pencil nav__icon"></i>
                            <span className="nav__logo-name">Log Book</span>
                        </Link>

                        <div className="nav__list">
                            <div className="nav__items">
                                <h3 className="nav__subtitle">Profile</h3>

                                <Link to="#" className="nav__link active">
                                    <i className="bx bx-home nav__icon"></i>
                                    <span className="nav__name">Home</span>
                                </Link>

                                <div className="nav__dropdown">
                                    <Link to="#" className="nav__link">
                                        <i className="bx bx-user nav__icon"></i>
                                        <span className="nav__name">Profile</span>
                                        <i className="bx bx-chevron-down nav__icon nav__dropdown-icon"></i>
                                    </Link>

                                    <div className="nav__dropdown-collapse">
                                        <div className="nav__dropdown-content">
                                            <Link to="#" className="nav__link">
                                                <i className="bx bx-door-open nav__icon"></i>
                                                <span className="nav__dropdown-item">login</span>
                                            </Link>
                                            <Link to="#" className="nav__link">
                                                <i className="bx bx-window-open nav__icon"></i>
                                                <span className="nav__dropdown-item">Update</span>
                                            </Link>
                                            <Link to="#" className="nav__link">
                                                <i className="bx bx-trash nav__icon"></i>
                                                <span className="nav__dropdown-item">Delete account</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <Link to="#" className="nav__link">
                                    <i className="bx bx-toggle-left nav__icon"></i>
                                    <span className="nav__name">Dark theme</span>
                                </Link>
                            </div>

                            <div className="nav__items">
                                <h3 className="nav__subtitle">Menu</h3>

                                <div className="nav__dropdown">
                                    <Link to="#" className="nav__link">
                                        <i className="bx bx-library nav__icon"></i>
                                        <span className="nav__name">My logs</span>
                                        <i className="bx bx-chevron-down nav__icon nav__dropdown-icon"></i>
                                    </Link>

                                    <div className="nav__dropdown-collapse">
                                        <div className="nav__dropdown-content">
                                            <Link to="#" className="nav__link">
                                                <i className="bx bx-book-bookmark nav__icon"></i>
                                                <span className="nav__dropdown-item">Diary</span>
                                            </Link>
                                            <Link to="#" className="nav__link">
                                                <i className="bx bx-camera nav__icon"></i>
                                                <span className="nav__dropdown-item">snaps</span>
                                            </Link>
                                            <Link to="#" className="nav__link">
                                                <i className="bx bx-calendar nav__icon"></i>
                                                <span className="nav__dropdown-item">Scheduler</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <Link to="#" className="nav__link">
                                    <i className="bx bx-share-alt nav__icon"></i>
                                    <span className="nav__name">Share</span>
                                </Link>
                                <Link to="#" className="nav__link">
                                    <i className="bx bx-star nav__icon"></i>
                                    <span className="nav__name">Rate us</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link to="#" className="nav__link nav__logout">
                        <i className="bx bx-log-out nav__icon"></i>
                        <span className="nav__name">Log Out</span>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Nav;
