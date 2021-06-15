import { Grid, GridItem, Fade } from "@chakra-ui/react";
import React from "react";
import { MainGridProps } from "./MainGridTypes";

export const MainGrid: React.FC<MainGridProps> = (props: MainGridProps) => {
  const { compLeft, compMid, compRight } = props;
  return (
    <Grid templateColumns="200px 1fr 250px" gap={5}>
      <GridItem colSpan={1}>{compLeft}</GridItem>
      <GridItem colSpan={2}>
        <Fade in={true}>{compMid}</Fade>
      </GridItem>
      {/* <GridItem colSpan={1}>{compRight}</GridItem> */}
    </Grid>
  );
};
