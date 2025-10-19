
import styles from "./page.module.css";
import Navigation from "./home/componets/navigation";
import Main from "./home/componets/main";
import Cards from "./home/componets/cards";
export default function Home() {
  return (
    <div className={styles.page}>
  <Navigation/>
    <Main/>
<Cards/>
     
    </div>
  );
}
