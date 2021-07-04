import { memo, useCallback, VFC } from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Flex, Heading, Link } from "@chakra-ui/layout";

import { MenuIconButton } from "../../atom/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { useHistory } from "react-router";
import { useAuthTwitter } from "../../hooks/useAuthTwitter";
import { useLogout } from "../../hooks/useLogout";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const onClickHome = useCallback(() => history.push("/home"), [history]);
  const onClickTimeline = useCallback(() => history.push("/home/timeline"), [history]);
  const onClickFavorites = useCallback(() => history.push("/home/favorites"), [history]);

  const { logout } = useLogout();
  const onClickLogoust = () => logout();

  const { authTwitter } = useAuthTwitter();
  const onClickAuthTwitter = () => authTwitter();

  return (
    <>
      <Flex as="nav" bg="teal.500" color="gray.50" align="center" justify="space-between" padding={{ base: 3, md: 5 }}>
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} onClick={onClickHome}>
          <Heading as="h1" fontSize={{ base: "lg", md: "2xl" }}>
            Pocketter
          </Heading>
        </Flex>
        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
          <Box pr={4}>
            <Link onClick={onClickTimeline}>TimeLine</Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickFavorites}>Favorites</Link>
          </Box>
          {/* <Box pr={4}>
            <Link onClick={onClickAuthTwitter}>twitter認証</Link>
          </Box> */}
          <Box pr={4}>
            <Link onClick={onClickLogoust}>ログアウト</Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickTimeLine={onClickTimeline}
        onClickFavorites={onClickFavorites}
      />
    </>
  );
});
