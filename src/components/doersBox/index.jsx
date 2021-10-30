import styles from "./styles.module.scss";

export default function DoersBox({ pragraph, image, name, position }) {
  return (
    <div className={styles.box}>
      <p>{pragraph}</p>
      <div className={styles.profile}>
        <div className={styles.profileImg}>
          <img src={image} alt="" />
        </div>
        <div className={styles.profileData}>
          <span className={styles.profileName}>{name}</span>
          <span className={styles.profilePosition}>{position}</span>
        </div>
      </div>
    </div>
  );
}
