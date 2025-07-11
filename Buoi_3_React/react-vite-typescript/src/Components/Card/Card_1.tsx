import { MoreHorizontal } from "lucide-react";
import Card from "./Card";
import styles from "./Card.module.css";

const Card_1 = () => {
  return (
    <Card>
      <div className={styles.scoreHeader}>
        <span className={styles.minute}>7’</span>
        <MoreHorizontal size={18} />
      </div>
      <div className={styles.scoreInfo}>
        <div className={styles.team}>
          <span>Spain</span>
          <img src="https://flagcdn.com/es.svg" alt="ES" className={styles.flag} />
        </div>

        <div className={styles.scoreBox}>
          <strong>0 : 0</strong>
        </div>

        <div className={styles.team}>
          <img src="https://flagcdn.com/fr.svg" alt="FR" className={styles.flag} />
          <span>France</span>
        </div>
      </div>
    </Card>
  );
};

export default Card_1;
