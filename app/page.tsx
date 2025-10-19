import styles from "./page.module.css";
import Navigation from "./home/componets/navigation";
import Main from "./home/componets/main";
import Cards from "./home/componets/cards";
import Open from "./home/componets/open";
import Cards1 from "./home/componets/cards1";
import Bio from "./home/componets/bio";
import Cuestion from "./home/componets/cuestion";
import Footer from "./home/componets/footer";
import Me from "./home/componets/me";
import Treecub from "./home/componets/treecub";
export default function Home() {
  return (
    <div className={styles.page}>
      <Navigation />
      <Main />
      <Cards />
      <Open />
      <Cards1 />
      <Bio/>
      <Cuestion/>
      <Footer/>
      <Me/>
      <Treecub/>
    </div>
  );
}
