import React from "react";
import { Container, ContainerProps } from "@chakra-ui/react";

export const Wrapper: React.FC = (props: ContainerProps) => {
  const { children } = props;
  return (
    <Container maxW="100%" h={"100%"}>
      {children}
    </Container>
  );
};
