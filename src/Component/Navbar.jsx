import React, {useState} from "react";
import styles from "./Navbar.module.css";
import Settings from "./Settings";

function Navbar() {
  const [Setting, setSetting] = useState(false)
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark"
        data-bs-theme="dark"
      >
        <div className="container-xxl">
          <div className={"navbar-brand"} оnClick={''}>
            RoR2 Item
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="nav-link">Link</div>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  випливне вікно
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <div className="dropdown-item">Action</div>
                  </li>
                  <li>
                    <div className="dropdown-item">Another action</div>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <div className="dropdown-item">Something else here</div>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Пошук"
                aria-label="Search"
              />
            </form>
            <button className={styles.optionExpander} onClick={()=>setSetting(true)}>
          </button>
            <Settings active={Setting} setActive={setSetting}/>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
