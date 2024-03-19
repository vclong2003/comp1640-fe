import React from "react";
import * as S from "./ItemEvent.styled";
import Event from "../../../../assets/images/Event.png";

const ItemEvent = () => {
  return (
    <S.Container>
      <S.ImageDocument>
        <img src={Event} alt="" />
      </S.ImageDocument>
      <S.TitleEvent>Event 1</S.TitleEvent>
      <S.StartDateEvent>Friday, March 3, 2023</S.StartDateEvent>
      <S.EndDateEvent>Friday, March 3, 2023</S.EndDateEvent>
    </S.Container>
  );
};

export default ItemEvent;
