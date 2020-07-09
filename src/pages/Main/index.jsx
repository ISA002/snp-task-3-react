import React from "react";
import style from "./index.module.scss";
import List from "@/List";
import Header from "@/Header";

const Main = () => {
  return (
    <div className={style["content"]}>
      <Header />
      <List />
    </div>
  );
};

export default Main;