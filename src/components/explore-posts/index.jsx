import styles from "./styles.module.scss";

export default function PostCard({
  image,
  title,
  tillDate,
  description,
  percentage,
  FundingGoal,
  IntersetRate,
  Tenor,
  TotalInvested,
  Investor,
  SkinInTheGame,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={image} alt="" />
      </div>
      <div className={styles.cardBottom}>
        <div className={styles.title}>
          <h6>{title}</h6>
          <span>{tillDate}</span>
        </div>
        <p>{description}</p>
        <div className={styles.percentage}>
          <div className={styles.percentageWrapper}>
            <div className={styles.percentageSolid} style={{width: percentage }}></div>
          </div>
          <span>{percentage}</span>
        </div>
        <div className={styles.table}>
          <div>
            <h6>Funding Goal</h6>
            <span>{FundingGoal}</span>
          </div>
          <div>
            <h6>Interset rate</h6>
            <span>{IntersetRate}</span>
          </div>
          <div>
            <h6>Tenor</h6>
            <span>{Tenor}</span>
          </div>
          <div>
            <h6>Total Invested</h6>
            <span>{TotalInvested}</span>
          </div>
          <div>
            <h6>Investor</h6>
            <span>{Investor}</span>
          </div>
          <div>
            <h6>Skin in the game</h6>
            <span>{SkinInTheGame}</span>
          </div>
        </div>
      </div>
      <div className={styles.cardTags}>
        <span>Loan</span>
        <span>Industry</span>
      </div>
    </div>
  );
}
