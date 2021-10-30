import styles from "./styles.module.scss";
import { ReactComponent as IMAGE } from "../../assets/image.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Chart1 from "../../components/charts/chart-1";
import Chart2 from "../../components/charts/chart-2";
import { ExplorePosts } from "../../dummyData";
import PostCard from "../../components/explore-posts";
import { useState } from "react";
import Popup from "../../components/popup/popup";
import Dialogue from "../../components/dialogue";

export default function PostTiltle(props) {
  const postId = Number(props.match.params.id);
  const post = ExplorePosts.find((p) => postId === p.id);
  const [activePitch, setActivePitch] = useState(false);
  const [activeCompany, setActiveCompany] = useState(true);
  const [openPopup, setOpenPopup] = useState(false);
  const handleActivePitch = () => {
    setActivePitch(true);
    setActiveCompany(false);
  };
  const handleActiveCompany = () => {
    setActiveCompany(true);
    setActivePitch(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.linksText}>
          Home <span>{`>`}</span> Posts <span>{`>`}</span> Post Title
        </p>
        <div className={styles.imageBox}>
          <img src={post.image} alt={post.name} className={styles.image} />
        </div>
        <h3 className={styles.postTiltle}>{post.title}</h3>
        <p className={styles.postMoney}>{post.TotalInvested}</p>
        <div className={styles.cardTags}>
          <span>Industry</span>
          <span>Loan</span>
        </div>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faGlobe} className={styles.icon} />
          <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </div>
        <button
          className={styles.investBtn}
          onClick={() => {
            setOpenPopup(true);
          }}
        >
          Invest Now
        </button>
        <div className={styles.tabs}>
          <h3
            className={activePitch ? styles.active : null}
            onClick={handleActivePitch}
          >
            Pitch
          </h3>
          <h3
            className={activeCompany ? styles.active : null}
            onClick={handleActiveCompany}
          >
            Company
          </h3>
        </div>
        {activeCompany ? (
          <div className={styles.companyContain}>
            <div className={styles.companyDetails}>
              <div className={styles.companyDetail}>
                <h3>About the Company</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellat sunt aperiam quisquam optio accusantium natus ducimus
                  pariatur. Nisi ipsum.
                </p>
              </div>
              <div className={styles.companyDetail}>
                <h3>Products and Services</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellat sunt aperiam quisquam optio accusantium natus ducimus
                  pariatur. Nisi ipsum.
                </p>
              </div>
              <div className={styles.companyDetail}>
                <h3>Competitive Landscape</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellat sunt aperiam quisquam optio accusantium natus ducimus
                  pariatur. Nisi ipsum.
                </p>
              </div>
              <div className={styles.companyDetail}>
                <h3>Company Size</h3>
                <span>11-50 Employess</span>
              </div>
              <div className={styles.companyDetail}>
                <h3>Business Model</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellat sunt aperiam quisquam optio accusantium natus ducimus
                  pariatur. Nisi ipsum.
                </p>
              </div>
            </div>
            <div className={styles.imageWrapper}>
              <IMAGE className={styles.image} />
            </div>
            <div className={styles.reactions}>
              <h3 className={styles.reactionsTitle}>Traction</h3>
              <div className={styles.reactionsWrapper}>
                <div className={styles.reaction}>
                  <h3>0</h3>
                  <p>Number of customers</p>
                </div>
                <div className={styles.reaction}>
                  <h3>0</h3>
                  <p>Active users</p>
                </div>
                <div className={styles.reaction}>
                  <h3>0</h3>
                  <p>Potential users</p>
                </div>
              </div>
            </div>
            <div className={styles.reactions}>
              <h3 className={styles.reactionsTitle}>Financial Performance</h3>
              <div className={styles.reactionsWrapper}>
                <div className={styles.reaction}>
                  <h3>0</h3>
                  <p>Seles Turnover</p>
                </div>
                <div className={styles.reaction}>
                  <h3>0</h3>
                  <p>Gross Profit Margin</p>
                </div>
                <div className={styles.reaction}>
                  <h3>0</h3>
                  <p>Company Valuation</p>
                </div>
              </div>
            </div>
            <div className={styles.charts}>
              <div className={styles.chart}>
                <Chart1 />
              </div>
              <div className={styles.chart}>
                <Chart2 />
              </div>
            </div>
            <div className={styles.clients}>
              <h3>Key Clients</h3>
              <div className={styles.keys}>
                <div className={styles.key}>
                  <div className={styles.imageBox}>
                    <IMAGE className={styles.image} />
                  </div>
                  <p>Client 1</p>
                </div>
                <div className={styles.key}>
                  <div className={styles.imageBox}>
                    <IMAGE className={styles.image} />
                  </div>
                  <p>Client 2</p>
                </div>
                <div className={styles.key}>
                  <div className={styles.imageBox}>
                    <IMAGE className={styles.image} />
                  </div>
                  <p>Client 3</p>
                </div>
              </div>
            </div>
            <div className={styles.clients}>
              <h3>Founding Team</h3>
              <div className={styles.keys}>
                <div className={styles.key}>
                  <div className={styles.imageBox}>
                    <IMAGE className={styles.image} />
                  </div>
                  <p>Name</p>
                  <span>Job Title</span>
                </div>
                <div className={styles.key}>
                  <div className={styles.imageBox}>
                    <IMAGE className={styles.image} />
                  </div>
                  <p>Name</p>
                  <span>Job Title</span>
                </div>
                <div className={styles.key}>
                  <div className={styles.imageBox}>
                    <IMAGE className={styles.image} />
                  </div>
                  <p>Name</p>
                  <span>Job Title</span>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className={styles.right}>
        <PostCard
          image={post.image}
          title={post.title}
          tillDate={post.tillDate}
          description={post.description}
          percentage={post.percentage}
          FundingGoal={post.FundingGoal}
          IntersetRate={post.IntersetRate}
          Tenor={post.Tenor}
          TotalInvested={post.TotalInvested}
          Investor={post.Investor}
          SkinInTheGame={post.SkinInTheGame}
        />
        <div className={styles.imgWrapper}>
          <img src="assets/camel.png" alt="" />
        </div>
        <div className={styles.imgWrapper}>
          <img src="assets/dark-logo.png" alt="" />
        </div>
      </div>
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <Dialogue setOpenPopup={setOpenPopup} />
      </Popup>
    </div>
  );
}
