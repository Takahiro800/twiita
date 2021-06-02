import { SearchIcon } from "@chakra-ui/icons";
import { Button, ChakraProvider, Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { ChangeEvent, memo, useEffect, useState, VFC } from "react";
import theme from "../../theme/theme";
import { ArticleCard } from "../ArticleCard";
import { SearchInput } from "../atom/input/SearchInput";
import { useSearch } from "../hooks/useSearch";

export const Home: VFC = memo(() => {
  const { search, articles, loading, error } = useSearch();

  const onClickSearch = (keyword: string) => search(keyword);

  useEffect(() => onClickSearch(""), []);

  const [keyWord, setKeyWord] = useState<string>("");

  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => setKeyWord(e.target.value);

  return (
    <>
      <p>HOMEページです</p>
      <Flex justifyContent="center">
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
          <Input value={keyWord} onChange={onChangeKeyword} width="md" placeholder="キーワードを検索" />
          <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }} ml="md" onClick={() => onClickSearch(keyWord)}>
            検索
          </Button>
        </InputGroup>
      </Flex>
      <ChakraProvider theme={theme}>
        {error ? (
          <p style={{ color: "red" }}>データの読み込みに失敗しました</p>
        ) : loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {articles.map((article) => (
              <ArticleCard key={article.twitter_id} article={article} />
            ))}
          </>
        )}
      </ChakraProvider>
    </>
  );
});
