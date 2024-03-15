import React from "react";
import * as S from "./SecondaryContribution.styled";

const SecondaryContribution = () => {
  return (
    <S.Container>
      <S.Image src="https://placehold.co/800x450" alt="placeholder" />
      <S.Divider />
      <S.Title>Secondary Contribution</S.Title>
      <S.Description>
        This is a secondary contribution. It could be a blog post, a video, a
        podcast, or anything else that we want to highlight.
      </S.Description>
    </S.Container>
  );
};

export default SecondaryContribution;
