import React from "react";
import Styles from "./Container.module.css";

export default function Container(Component) {
  const CommonComponents = (props) => {
    return (
      <div className={Styles.mainContainer}>
        <div className={Styles.componentContainer}>
          <Component {...props} />
        </div>
      </div>
    );
  };
  return CommonComponents;
}