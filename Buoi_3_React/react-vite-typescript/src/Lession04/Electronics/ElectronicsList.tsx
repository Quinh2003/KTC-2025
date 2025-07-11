import React from "react";
import styles from "./Electronics.module.css";
import Electronics from "./Electronics";

const data= [
  {
    img: "./img/5.jpg",
    name: "Cáp chuyển đổi USB-C sang SD",
    newPrice: "1.290.000đ",
    oldPrice: "1.790.000đ",
    discount: "-25%",
  },

  {
    img: "./img/6.jpg",
    name: "Adapter sạc Apple Type C 20W",
    newPrice: "520.000đ",
  },

  {
    img: "./img/7.jpg",
    name: "Cáp sạc Lightning 2m",
    newPrice: "840.000đ",
  },

  {
    img: "./img/8.jpg",
    name: "AirPods 3",
    newPrice: "890.000đ",
    oldPrice: "1.450.000đ",
    discount: "-20%",
  },
];

const ElectronicsList: React.FC = () => {
  return (
    <div>
      <h2 className={styles.title}>Phụ kiện tương thích</h2>
      <div className={styles.list}>
        {data.map((item, index) => (
          <Electronics
            key={index}
            img={item.img}
            name={item.name}
            newPrice={item.newPrice}
            oldPrice={item.oldPrice}
            discount={item.discount ? item.discount : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default ElectronicsList;
