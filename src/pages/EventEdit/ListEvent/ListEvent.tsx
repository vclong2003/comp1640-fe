import * as S from "./ListEvent.styled";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import Item from "@components/Item/Item";

const ListEvent = () => {
  const [isPublish, setIsPublish] = useState(true);

  return (
    <S.Container>
      <S.Header>
        <S.Button>
          <S.BtnPublish $active={isPublish} onClick={() => setIsPublish(true)}>
            Published
          </S.BtnPublish>
          <S.BtnMyContribution
            $active={!isPublish}
            onClick={() => setIsPublish(false)}
          >
            My Contribution
          </S.BtnMyContribution>
        </S.Button>
        <S.Search>
          <S.Input>
            <input type="search" placeholder="Search Anything" />
          </S.Input>
          <S.Icon>
            <FaSearch />
          </S.Icon>
        </S.Search>
      </S.Header>
      <S.ListItem>
        <Item />
        <Item />
        <Item />
        <Item />
      </S.ListItem>
    </S.Container>
  );
};

export default ListEvent;
