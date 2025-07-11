import { EyeOff } from "lucide-react";
import Card from "./Card";
import styles from "./Card.module.css";

const Card_3= () => {
  return (
    <Card>
      <div className={styles.userCard}>
        <img src="https://randomuser.me/api/portraits/men/32.jpg" className={styles.avatar} />
        <div>
          <strong>Wade Warren</strong><br />
          <span><span className={styles.visa}>VISA</span> 4293 3242 ...</span>
        </div>
        <EyeOff size={18} />
      </div>
    </Card>
  );
};

export default Card_3;
