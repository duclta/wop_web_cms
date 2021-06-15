import { Center } from "@chakra-ui/react";
import React from "react";
import styles from "./css/mainHeading.module.css";

export const MainHeading = (props: any) => {
  return (
    <Center mb="30px">
      <h1 className={styles.mainHeading}>World of Plants</h1>
    </Center>
  );
};
