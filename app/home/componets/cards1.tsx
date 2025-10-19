import React from "react";
import styles from "../style/cards1.module.scss";

const Cards1 = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>With Hopp, get ready for:</h2>

      <div className={styles.cards_container}>
        <div className={styles.five_div_container}>
          <div className={styles.medium_card} id={styles.blue}>
            <h3 className={`${styles.card_title} ${styles.white}`}>
              Higher traffic to your affiliate links
            </h3>
          </div>
          <div className={styles.small_card} id={styles.light_pink}>
            <h3 className={`${styles.card_title} ${styles.black}`}>
              Boosted revenue
            </h3>
          </div>
          <div className={styles.big_card}>
            <h3 className={`${styles.card_title} ${styles.white}`}>
              An increased feeling of trust and loyalty within your community
            </h3>
          </div>
          <div className={styles.medium_card} id={styles.aqua}>
            <h3 className={`${styles.card_title} ${styles.black}`}>
              More brand partnership requests
            </h3>
          </div>
          <div className={styles.small_card} id={styles.black}>
            <h3 className={`${styles.card_title} ${styles.white}`}>
              Better engagement with your followers
            </h3>
          </div>
        </div>

        <div className={styles.big_img_container}>
          <img src="/home_img/card1.avif" alt="" className={styles.img} />
        </div>
      </div>
    </div>
  );
};

export default Cards1;
