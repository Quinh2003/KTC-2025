import React from "react";
import styles from "./New_Article.module.css";

type Props = {
  image: string;
  title: string;
  views: string | number;
};

const New_Article: React.FC<Props> = ({ image, title, views }) => (
  <div className={styles.card}>
    <img src={image} className={styles.image} />
    <p className={styles.title}>{title}</p>
    <p className={styles.views}>{views}</p>
  </div>
);

export default New_Article;
