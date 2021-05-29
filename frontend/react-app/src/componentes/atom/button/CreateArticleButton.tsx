import { IconButton } from "@chakra-ui/button";
import { CheckIcon } from "@chakra-ui/icons";
import { memo, VFC } from "react";

export const CreateArticleButton: VFC = memo((props) => {
  return <IconButton aria-label="保存ボタン" icon={<CheckIcon />} size="sm" />;
});
