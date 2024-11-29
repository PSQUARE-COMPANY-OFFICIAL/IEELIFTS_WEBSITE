import React from "react";
import style from "./style.module.css";

function HeroSection({ img, title, text }) {
  return (
    <div className={style.heroSection}>
      <img src={img} className={style.heroImage} alt="" />
      <div className={style.heroContent}>
        <h1 className={style.h1}>{title}</h1>
        <p className={style.p}>{text}</p>
      </div>
    </div>
  );
}

export default HeroSection;
