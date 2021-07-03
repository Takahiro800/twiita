import { memo } from "react";
import { VFC } from "react";
import Icon from "@chakra-ui/icon";
import { AiFillTwitterCircle } from "react-icons/ai";

import { Button, Container, VStack, Heading } from "@chakra-ui/react";
import { useAuthTwitter } from "../hooks/useAuthTwitter";

export const Root: VFC = memo(() => {
  const { authTwitter } = useAuthTwitter();
  const onClickAuthTwitter = () => authTwitter();

  return (
    <>
      <Container>
        <VStack h="100vw" mt="100px">
          <Heading as="h1" size="4xl" isTruncated>
            Pocketterへようこそ
          </Heading>
          <p>ログインしてください</p>
          <Button colorScheme="blue" size="lg" onClick={onClickAuthTwitter}>
            <Icon as={AiFillTwitterCircle} w={8} h={8} color="white.400" />
            Twitterでログイン
          </Button>
        </VStack>
      </Container>
    </>
  );
});
