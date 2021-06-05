import React, { memo, VFC } from "react";
import Linkify from "react-linkify";

type Props = {
  str: string;
};

export const ArticleText: VFC<Props> = memo((props) => {
  const { str } = props;

  const texts = str.split(/(\n)/).map((item, index) => {
    return <React.Fragment key={index}>{item.match(/\n/) ? <br /> : item}</React.Fragment>;
  });

  return (
    <Linkify
      componentDecorator={(decoratedHref, decoratedText, key) => (
        <>
          <br />
          <a target="blank" href={decoratedHref} key={key} style={{ color: "red" }}>
            {decoratedText}
          </a>
        </>
      )}
    >
      {texts}
    </Linkify>
  );
});
