import { MoreHorizontal } from "lucide-react";
import Card from "./Card";
import styles from "./Card.module.css";

const Card_4 = () => {
  return (
    <Card>
      <div className={styles.tags}>
        <div>
          <span className={`${styles.tag} ${styles.green}`}>Highlight</span>
          <span className={`${styles.tag} ${styles.pink}`}>Feeds</span>
        </div>
        <MoreHorizontal size={18} />
      </div>
      <strong>Dashboard</strong>
      <div className={styles.desc}>Business management service</div>
      <div className={styles.progressWrapper}>
        <div className={styles.progressBar}></div>
        <div className={styles.progressPercent}>80%</div>
      </div>
    </Card>
  );
};

export default Card_4;
