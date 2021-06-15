import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSidebarNav } from "./hooks";

export const SidebarNav: React.FC<any> = (props: any) => {
  const {
    state: { navs, navActive },
    styles,
  } = useSidebarNav(props);

  return (
    <Box>
      <nav>
        {navs.map((nav) => (
          <Link
            to={nav.url}
            className={
              navActive === nav.url ? styles.navLinkActive : styles.navLink
            }
          >
            <Text>{nav.name}</Text>
          </Link>
        ))}
      </nav>
    </Box>
  );
};
