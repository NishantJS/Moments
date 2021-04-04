
import './style.css';
import './App.css';

const App = () => {
  return (
    <div>
       <body>
        {/*========== HEADER ==========*/}
        <header className="header">
            <div className="header__container">
                <img src="assets/img/perfil.jpg" alt="" className="header__img" />

                <a href="#" className="header__logo">Log Book</a>
    
                <div className="header__search">
                    <input type="search" placeholder="Search" className="header__input" />
                    <i className='bx bx-search header__icon'></i>
                </div>
    
                <div className="header__toggle">
                    <i className='bx bx-menu' id="header-toggle"></i>
                </div>
            </div>
        </header>

        {/*========== NAV ==========*/}
        <div className="nav" id="navbar">
            <nav className="nav__container">
                <div>
                    <a href="#" className="nav__link nav__logo">
                        <i className='bx bxs-pencil nav__icon' ></i>
                        <span className="nav__logo-name">Log Book</span>
                    </a>
    
                    <div className="nav__list">
                        <div className="nav__items">
                            <h3 className="nav__subtitle">Profile</h3>
    
                            <a href="#" className="nav__link active">
                                <i className='bx bx-home nav__icon' ></i>
                                <span className="nav__name">Home</span>
                            </a>
                            
                            <div className="nav__dropdown">
                                <a href="#" className="nav__link">
                                    <i className='bx bx-user nav__icon' ></i>
                                    <span className="nav__name">Profile</span>
                                    <i className='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
                                </a>

                                <div className="nav__dropdown-collapse">
                                    <div className="nav__dropdown-content">
                                    <a href="#" className="nav__link">
                                          <i className='bx bx-door-open nav__icon' ></i>
                                          <span className="nav__dropdown-item">login</span>
                                    </a>
                                    <a href="#" className="nav__link">
                                          <i className='bx bx-window-open nav__icon' ></i>
                                          <span className="nav__dropdown-item">Update</span>
                                    </a>
                                    <a href="#" className="nav__link">
                                          <i className='bx bx-trash nav__icon' ></i>
                                          <span className="nav__dropdown-item">Delete account</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <a href="#" className="nav__link">
                                <i className='bx bx-toggle-left nav__icon' ></i>
                                <span className="nav__name">Dark theme</span>
                            </a>
                        </div>
    
                        <div className="nav__items">
                            <h3 className="nav__subtitle">Menu</h3>
    
                            <div className="nav__dropdown">
                                <a href="#" className="nav__link">
                                    <i className='bx bx-library nav__icon' ></i>
                                    <span className="nav__name">My logs</span>
                                    <i className='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
                                </a>

                                <div className="nav__dropdown-collapse">
                                    <div className="nav__dropdown-content">
                                        <a href="#" className="nav__link">
                                          <i className='bx bx-book-bookmark nav__icon' ></i>
                                          <span className="nav__dropdown-item">Diary</span>
                                        </a>
                                        <a href="#" className="nav__link">
                                          <i className='bx bx-camera nav__icon' ></i>
                                          <span className="nav__dropdown-item">snaps</span>
                                        </a>
                                        <a href="#" className="nav__link">
                                          <i className='bx bx-calendar nav__icon' ></i>
                                          <span className="nav__dropdown-item">Scheduler</span>
                                        </a>
                                        
                                    </div>
                                </div>

                            </div>

                            <a href="#" className="nav__link">
                                <i className='bx bx-share-alt nav__icon' ></i>
                                <span className="nav__name">Share</span>
                            </a>
                            <a href="#" className="nav__link">
                                <i className='bx bx-star nav__icon' ></i>
                                <span className="nav__name">Rate us</span>
                            </a>
                        </div>
                    </div>
                </div>

                <a href="#" className="nav__link nav__logout">
                    <i className='bx bx-log-out nav__icon' ></i>
                    <span className="nav__name">Log Out</span>
                </a>
            </nav>
        </div>

        {/*========== CONTENTS ==========*/}
        <main>
            <section>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vel illum fuga unde cum, voluptates magni molestias eveniet culpa autem ut, totam veniam, suscipit tempore ullam pariatur est at asperiores?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vel illum fuga unde cum, voluptates magni molestias eveniet culpa autem ut, totam veniam, suscipit tempore ullam pariatur est at asperiores?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vel illum fuga unde cum, voluptates magni molestias eveniet culpa autem ut, totam veniam, suscipit tempore ullam pariatur est at asperiores?</p>
            </section>
        </main>

        
    </body>
    </div>
  );
}

export default App;
