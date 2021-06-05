import React, { memo, VFC } from "react";

type Props = {
  str: string;
};

export const ArticleText: VFC<Props> = memo((props) => {
  const { str } = props;

  const texts = str.split(/(\n)/).map((item, index) => {
    return <React.Fragment key={index}>{item.match(/\n/) ? <br /> : item}</React.Fragment>;
  });
  return <div>{texts}</div>;
});
