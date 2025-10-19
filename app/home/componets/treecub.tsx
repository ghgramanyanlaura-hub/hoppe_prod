import {FC} from "react"
import  styles  from "../style/treecub.module.scss"

const Treecub:FC = () => {
  return (
    <div>
        <h2 className={styles.make_h2}>Make your links work for you</h2>
      <div className={styles.treecub_container}>
        

        <div className={styles.cub}>
            
            <h2 className={styles.make_h21}>Create</h2>
                  <img className={styles.img} src="img/Create Icon.avif" alt="" /><br />

              
        </div>   
         <p className={styles.code_p}>a code for what you <br /> want to promote on <br /> social media and assign <br /> it a URL.</p>
        
        <div className={styles.cub}>
            <h2  className={styles.make_h21}>Share</h2>
            <img className={styles.img} src="img/Share Icon.avif" alt="" />

            
        </div>

        <p className={styles.code_p}>your code anywhere like <br /> your story, reels, TikTok, <br /> and in your bio.</p>


        <div className={styles.cub}>
            <h2  className={styles.make_h21}>Engage</h2>
            <img className={styles.img} src="img/Engage Icon.avif" alt="" /><br />

  
        </div>

                  <p className={styles.code_p}>followers by letting them <br /> search your link in bio to <br /> find just what they’re <br /> looking for.</p>
      </div>
    </div>
  )
}

export default Treecub
