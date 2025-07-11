import React from "react";
import styles from "./New_Article.module.css";
import New_Article from "./New_Article";

const data = [
  {
    image: "./img/1.jpg",
    title:
      "Ấn tượng đầu tiên Samsung Galaxy A32 4G: Với hơn 6 triệu đã có màn hình Super AMOLED 90Hz",
    views: "127 lượt xem",
  },
  
  {
    image: "./img/2.jpg",
    title:
      "Google Pixel 5a dự kiến sẽ được ra mắt cùng thời điểm với Android 12",
    views: "127 lượt xem",
  },

    {
    image: "./img/3.jpg",
    title:
      "Galaxy A52 4G lộ diện trên Google Play Console Xác nhận dùng chip Snapdragon 720",
    views: "55 lượt xem",
  },

    {
    image: "./img/4.jpg",
    title:
      "Galaxy A82 5G chuẩn bị ra mắt với chip flagship và màn hình trượt độc đáo, Samfans gom lúa đi là vừa",
    views: "55 lượt xem",
  },


];

const ArticleList: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <h2>TIN MỚI</h2>
        <a>Xem thêm</a>
    </div>
    <div className={styles.grid}>
      {data.map((item, i) => (
        <New_Article
          key={i}
          image={item.image}
          title={item.title}
          views={typeof item.views === "string" ? item.views : parseInt(item.views)}
        />
      ))}
    </div>
  </div>
);

export default ArticleList;