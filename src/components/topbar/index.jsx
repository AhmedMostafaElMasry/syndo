import { Link } from "react-router-dom";
import { ReactComponent as PROFILE } from "../../assets/profile.svg";
import styles from "./styles.module.scss";
import { ReactComponent as MENU } from "../../assets/list.svg";
import { useState } from "react";

export default function Topbar({ isLogin, handleLogin, setIsLogin }) {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          {isLogin ? (
            <img src="assets/dark-logo.png" alt="syndo" />
          ) : (
            <img src="assets/logo.png" alt="syndo" />
          )}
        </div>
        {isLogin ? (
          <div className={styles.rightProfile}>
            <div className={styles.profile}>
              <span className={styles.profileName}>Jane Doe</span>
              <Link to="/" onClick={() => setIsLogin(false)}>
                <span className={styles.profileLogout}>Logout</span>
              </Link>
            </div>
            <PROFILE className={styles.profileImg} />
          </div>
        ) : (
          <div className={styles.right}>
            <MENU
              className={styles.menu}
              onClick={() => setShowLinks(!showLinks)}
            />
            <ul className={styles.links} id={showLinks ? styles.hidden : ""}>
              <li>
                <Link
                  onClick={() => handleLogin()}
                  to="/posts"
                  style={{ color: "#ffffff", textDecoration: "none" }}
                >
                  Posts
                </Link>
              </li>
              <li>Testimonials</li>
              <li>Login</li>
              <li>
                <button>Get Started</button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <h6 className={styles.implementText}>TO IMPLEMENT AS IS</h6>
    </div>
  );
}
