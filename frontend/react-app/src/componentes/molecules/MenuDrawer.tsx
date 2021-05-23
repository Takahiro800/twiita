import { memo, VFC } from "react";
import { Button } from "@chakra-ui/button";
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/modal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickHome: () => void;
  onClickTimeLine: () => void;
  onClickFavorites: () => void;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { isOpen, onClose, onClickHome, onClickTimeLine, onClickFavorites } = props;
  return (
    <Drawer placement="left" size="xs" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={onClickHome}>
              TOP
            </Button>
            <Button w="100%" onClick={onClickTimeLine}>
              TimeLine
            </Button>
            <Button w="100%" onClick={onClickFavorites}>
              Favorites
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
