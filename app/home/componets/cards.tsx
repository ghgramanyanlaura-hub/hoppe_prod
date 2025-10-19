
import { FC } from 'react';
import styles from '../style/cards.module.scss';


const Cards: FC = () => {

    return (
        <div className={styles.container}>
            <h2 className={styles.mainn_word}>Hopp to it with awesome tools</h2>
            <div className={styles.main_flexDiv}>

   <div className={styles.block_div}>
          <img src="./img/Fold 2 - Card 1.avif" className={styles.img}></img>
          <h2 className={styles.main_word}>
            Shorten links

          </h2>
          <h3  className={styles.text}>Make your URL shorter, customize it to match your brand name, index it in your own link in bio search engine, set up automatic promotions and see performance analytics.

</h3>
   </div>


    <div className={styles.block_div}>
          <img src="./img/Fold 2 - Card 2.avif" className={styles.img3}></img>
          <h2 className={styles.main_word2}>
         Landing page

          </h2>
          <h3  className={styles.text2}>Design a mobile landing page in just a few clicks. Choose what you want to promote, instantly get a shareable URL and track all its performance.



</h3>
   </div>


    <div className={styles.block_div}>
          <img src="./img/Fold 2 - Card 3.avif" className={styles.img2}></img>
          <h2 className={styles.main_word2}>
          Pre-rolls


          </h2>
          <h3  className={styles.text2}>Monetize your traffic with smart promotions that can be assigned to any URL you share so that when someone clicks they'll see your pre-roll first.
</h3>
   </div>
            </div>
            <div className={styles.black_div}>
                <h3 className={styles.white_word}>Try it Free</h3>
                 <img src="./img/arro.png" className={styles.arro_img}></img>
            </div>
</div>
     

    )
}

export default Cards;
