import React, { Props } from "react";
import styles from "./css/main.module.css";

export const Main: React.FC<any> = (props: Props<any>) => {
  return <main className={styles.main}>{props.children}</main>;
};
