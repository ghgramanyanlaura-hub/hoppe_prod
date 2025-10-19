"use client"
import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import styles from '../style/main.module.scss';
import Link from 'next/link';

const Navigation: FC = () => {

    return (
        <div className={styles.container}>
    <div className={styles.div_words}>
        <div className={styles.displayFlex_div}>
            <div className={styles.b_lock}>

            <h2 className={styles.main_word}>Your Link-in-Bio,

</h2>
<div className={styles.flex_div}>

<h2 className={styles.word}>Reimagined</h2>
  <img src="./img/star.webp" className={styles.main_img}></img>
</div>
    
            </div>
        </div>
        <h3 className={styles.text}>
            With Hopp, you get a customizable Link in Bio solution to turn followers into customers, drive traffic from social media and track your performance.
        </h3>
        <div className={styles.black_div}>
            <h3 className={styles.white_word}>
                Start for Free
            </h3>
             <img src="./img/arro.png" className={styles.arro_img}></img>
        </div>
    </div>
    <div className={styles.display_div}>
        <div className={styles.block_div}>
             <img src="./img/Hero - Insragram Card.avif" className={styles.img}></img>
              <img src="./img/Hero - New Collab Card.avif" className={styles.img}></img>
        </div>
        <div className={styles.wite_div}>

         <img src="./img/Hero - Mobile Card.avif" className={styles.big_img}></img>
        </div>
    </div>
</div>
     

    )
}

export default Navigation;
