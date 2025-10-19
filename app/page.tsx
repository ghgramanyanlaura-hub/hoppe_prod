import styles from "./page.module.css";
import Navigation from "./home/componets/navigation";
import Main from "./home/componets/main";
import Cards from "./home/componets/cards";
import Open from "./home/componets/open";
import Cards1 from "./home/componets/cards1";
export default function Home() {
  return (
    <div className={styles.page}>
      <Navigation />
      <Main />
      <Cards />
      <Open />
      <Cards1 />
    </div>
  );
}
