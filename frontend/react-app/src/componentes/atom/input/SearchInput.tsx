import { Button } from "@chakra-ui/button";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box, Flex } from "@chakra-ui/layout";
import { ChangeEvent, memo, useState, VFC } from "react";

type Props = {
  onClick: (keyword: string) => void;
};

export const SearchInput: VFC<Props> = memo((props) => {
  const { onClick } = props;

  const [keyWord, setKeyWord] = useState<string>("");

  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => setKeyWord(e.target.value);

  return (
    <Flex justifyContent="center">
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
        <Input value={keyWord} onChange={onChangeKeyword} width="md" placeholder="キーワードを検索" />
        <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }} ml="md" onClick={() => onClick(keyWord)}>
          検索
        </Button>
      </InputGroup>
    </Flex>
  );
});
