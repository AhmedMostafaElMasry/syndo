import styles from "./styles.module.scss";
import { ReactComponent as RARROW } from "../../assets/right-arrow.svg";
import { ReactComponent as LARROW } from "../../assets/left-arrow.svg";
import PostCard from "../../components/explore-posts";
import { Doers, ExplorePosts } from "../../dummyData";
import DoersBox from "../../components/doersBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <div className={styles.left}>
          <span>BUILT BY THE CROWD FOR THE CROWD</span>
          <h1>
            The Leading Digital
            <br /> Donations Platform in Egypt
          </h1>
          <p>
            The Leading Digital Donations Platform
            <br /> in Egypt
          </p>
          <button>Get Started</button>
        </div>
        <div className={styles.right}>
          <img src="assets/right-side.png" alt="" />
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.title}>
          <h3 className={styles.titleText}>Explore Posts</h3>
          <div className={styles.arrow}>
            <RARROW className={styles.arrowIcon} />
          </div>
        </div>
        <div className={styles.cards}>
          {ExplorePosts.map((p) => (
            <PostCard
              key={p.id}
              image={p.image}
              title={p.title}
              tillDate={p.tillDate}
              description={p.description}
              percentage={p.percentage}
              FundingGoal={p.FundingGoal}
              IntersetRate={p.IntersetRate}
              Tenor={p.Tenor}
              TotalInvested={p.TotalInvested}
              Investor={p.Investor}
              SkinInTheGame={p.SkinInTheGame}
            />
          ))}
        </div>
      </div>
      <div className={styles.section3}>
        <h3 className={styles.titleText}>Hear it from our doers</h3>
        <div className={styles.boxs}>
          {Doers.map((d) => (
            <DoersBox
              key={d.id}
              pragraph={d.pragraph}
              image={d.image}
              name={d.name}
              position={d.position}
            />
          ))}
        </div>
      </div>
      <div className={styles.section4}>
        <h1>Featured by Industry Leaders</h1>
        <div className={styles.features}>
          <div>
            <img src="assets/afiip.png" alt="" />
          </div>
          <div>
            <img src="assets/afiip.png" alt="" />
          </div>
          <div>
            <img src="assets/afiip.png" alt="" />
          </div>
          <div>
            <img src="assets/afiip.png" alt="" />
          </div>
        </div>
        <div className={styles.arrows}>
          <div className={styles.arrow}>
            <LARROW className={styles.arrowIcon} />
          </div>
          <div className={styles.arrow}>
            <RARROW className={styles.arrowIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}
