import React, { useMemo } from "react";
import { Button, Flex, Spacer, Image, Center, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Wrapper } from "@/components/base";
import { AccountDropdown, MainLogo } from "@/components/app";
import wopLogo from "@/assets/images/wop_logo.webp";
import { useHeader } from "./hooks";

export const Header: React.FC<any> = (props: any) => {
  const {
    state: {
      accountDropdown,
      isLogoFullSize,
      isShowAuthButtons,
      isShowAccountButtons,
    },
    method: { handleBtnLoginClick },
    styles,
  } = useHeader(props);

  return (
    <header className={styles.header}>
      <Wrapper>
        <Flex h="100%">
          <Center mr="10px" cursor="pointer">
            <Image
              src={wopLogo}
              w={isLogoFullSize ? "23px" : "30px"}
              h={isLogoFullSize ? "23px" : "30px"}
            />
            <MainLogo isFullSize={isLogoFullSize} />
            <Heading
              padding="5px"
              paddingLeft="0px"
              fontSize={props.fontSize || (isLogoFullSize ? "22px" : "25px")}
              fontWeight="600"
              fontFamily="Inter"
              color="#333"
            >
              CMS
            </Heading>
          </Center>
          {/* {isShowNavs && <Navs />} */}
          <Spacer />
          {isShowAuthButtons && (
            <Center>
              <Button
                bgColor="#38b2ac"
                color="white"
                onClick={handleBtnLoginClick}
              >
                Log in
              </Button>
            </Center>
          )}
          {isShowAccountButtons && (
            <Center>
              <AccountDropdown avatar={accountDropdown.avatar} />
            </Center>
          )}
        </Flex>
      </Wrapper>
    </header>
  );
};
