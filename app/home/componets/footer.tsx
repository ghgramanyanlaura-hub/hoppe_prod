import { FC } from "react";
import styles from "../style/footer.module.scss";
// import { CiLocationOn, CiMail } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import { FaInstagram } from "react-icons/fa";
// import { TiSocialFacebook } from "react-icons/ti";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";

const Footer: FC = () => {
  return (
    <div>
      <div className={styles.footer_container}>
        <h3 className={styles.much_h3}>
          Much more than a link in bio. Hopp on today.
            <button className={styles.button_try}>
          <p className={styles.try_p}>
            Try It Free <FaArrowRightLong className={styles.icon} />
          </p>
        </button>
        </h3>
      
      </div>
      <span className={styles.span_hopp}>
        <h1 className={styles.hopp_h1}>Hopp</h1>{" "}
        <h2 className={styles.wix_h2}>by wix</h2>
      </span>

      <div className={styles.abuse_container}>
      
        <a className={styles.a_reaport} href="">Reaport Abuse <RxDividerVertical className={styles.icone}/></a>
        <a className={styles.a_reaport}  href="">Support<RxDividerVertical  className={styles.icone} /></a>
        <a className={styles.a_reaport}  href="">Privacy Policy<RxDividerVertical  className={styles.icone}/></a>
        <a className={styles.a_reaport}  href="">Tearms of Use</a>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <img className={styles.img} src="./img/footerlogo.svg" alt="Sunny City Logo" />

      <div className={styles.footer_display}>
        {/* Navigation Links */
}
//         <div className={styles.footer_text1}>
//           <p className={styles.footer_text_1_p}>Գլխավոր</p>
//           <p className={styles.footer_text_1_p}>Մեր Մասին</p>
//           <p className={styles.footer_text_1_p}>Պորտֆոլիո</p>
//           <p className={styles.footer_text_1_p}>Հաշվիչ</p>
//         </div>

//         {/* Product Links */}
//         <div className={styles.footer_text2}>
//           <p className={styles.footer_text_2_p}>Արտադրանք</p>
//           <p className={styles.footer_text_2_p}>Հիբրիդ</p>
//           <p className={styles.footer_text_2_p}>Ցանցից անկախ</p>
//           <p className={styles.footer_text_2_p}>Ցանցին միացված</p>
//         </div>

//         {/* Contact Info */}
//         <div className={styles.footer_text3}>
//           <p className={styles.footer_text_3_p_3}>Կապ</p>
//           <div className={styles.footer_text_3_p}>
//             <button className={styles.button_icon}>
//               <CiLocationOn className={styles.icons_footer} />

//             </button>

//               <a className={styles.a_footer_a_footer} href="">Արտաշատի խճուղի 57</a>
//           </div>
//           <div className={styles.footer_text_3_p}>
//             <button className={styles.button_icon}>
//               <CiMail className={styles.icons_footer} />

//             </button>

//             <a className={styles.a_footer_a_footer} href="">info@sunnycity.am</a>
//           </div>
//           <div className={styles.footer_text_3_p}>
//             <button className={styles.button_icon}>
//               <BsTelephone className={styles.icons_footer} />

//             </button>

//           <a className={styles.a_footer_a_footer} href="">+374 96 444900</a>
//           </div>
//           <div className={styles.footer_text_3_p}>
//             <button className={styles.button_icon1}>
//               <FaInstagram className={styles.icons_footer} />
//                 </button>

//               <button className={styles.button_icon2}>  <TiSocialFacebook className={styles.icons_footer} /></button>

//            <a className={styles.a_footer_a_footer} href="">Սոցիալական ցանցեր․</a>

//           </div>
//         </div>
//       </div>

// <div>
//       <div className={styles.border_footer}></div>
//       <span className={styles.creator}>Հեղինակային իրավունք © 2025 Sunny City | Բոլոր իրավունքները պաշտպանված են։</span>

//       <p className={styles.powered}>Powered by <a className={styles.a_footer} href="https://www.itartashat.am/">IT Artashat</a> </p>
//       </div>
