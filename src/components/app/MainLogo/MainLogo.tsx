import { routerPaths } from "@/routers";
import { Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/mainLogo.module.css";
import { MainLogoProps } from "./MainLogoProps";

export const MainLogo = (props: MainLogoProps) => {
  const { isFullSize } = props;
  return (
    <Link to={routerPaths.home}>
      <Heading
        padding="5px"
        fontSize={props.fontSize || (isFullSize ? "22px" : "25px")}
        fontWeight="600"
        fontFamily="Inter"
        color="#333"
        className={styles.logo}
      >
        {isFullSize ? "World of Plants" : "WOP"}
      </Heading>
    </Link>
  );
};
