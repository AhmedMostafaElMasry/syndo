import { Link } from "react-router-dom";
import PostCard from "../../components/explore-posts";
import { ExplorePosts } from "../../dummyData";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Posts</h3>
        <span>Scout. Invest. Repeat.</span>
      </div>
      <div className={styles.inputs}>
        <input type="search" placeholder="Type to search ..." />
        <select name="status" id="status">
          <option value="status">Status</option>
        </select>
        <select name="type" id="type">
          <option value="type">Type</option>
        </select>
        <select name="most-founded" id="most-founded">
          <option value="most-founded">Most Founded</option>
        </select>
      </div>
      <div className={styles.cards}>
        {ExplorePosts.map((p) => (
          <Link to={`/post/title/${p.id}`} key={p.id}>
            <PostCard
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
          </Link>
        ))}
      </div>
    </div>
  );
}
