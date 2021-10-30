import styles from "./styles.module.scss";
import { ReactComponent as DARROW } from "../../assets/down-arrow.svg";

export default function Footer({ isLogin }) {
  return (
    <div className={styles.container}>
      <div className={styles.featuresFooter}>
        <div className={styles.col1}>
          {isLogin ? (
            <img src="assets/dark-logo.png" alt="syndo" />
          ) : (
            <img src="assets/logo.png" alt="syndo" />
          )}
          <p>BY THE CROWED FOR THE CROWED</p>
        </div>
        <ul className={styles.col2}>
          <li>Products</li>
        </ul>
        <ul className={styles.col2}>
          <li>Company</li>
          <li>About As</li>
          <li>Risk</li>
        </ul>
        <ul className={styles.col2}>
          <li>Resources</li>
          <li>How it works</li>
          <li>FAQ</li>
        </ul>
      </div>
      <hr />
      <div className={styles.footer}>
        <div className={styles.left}>
          <span>syndo.2021 All Right Reserved</span>
          <span>Privacy Policy</span>
          <span>Legal Terms</span>
        </div>
        <div className={styles.right}>
          <span>EN</span>
          {isLogin ? (
            <DARROW className={styles.darkArrow} />
          ) : (
            <DARROW className={styles.whiteArrow} />
          )}
        </div>
      </div>
    </div>
  );
}
