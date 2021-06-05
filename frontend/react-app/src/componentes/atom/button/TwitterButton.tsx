import Icon from "@chakra-ui/icon";
import { AiFillTwitterCircle } from "react-icons/ai";
import { memo, VFC } from "react";

export const TwitterButton: VFC = memo((props) => {
  return <Icon as={AiFillTwitterCircle} w={8} h={8} color="blue.400" />;
});
