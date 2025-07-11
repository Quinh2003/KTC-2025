import { MoreHorizontal } from "lucide-react";
import Card from "./Card";
import styles from "./Card.module.css";

const Card_2 = () => {
  return (
    <Card>
      <div className={styles.teamCard}>
        <img src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg" width="28" />
        <strong>Manchester United</strong>
        <MoreHorizontal size={18} />
      </div>
    </Card>
  );
};

export default Card_2;
