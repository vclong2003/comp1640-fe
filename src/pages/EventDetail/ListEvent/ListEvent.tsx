import * as S from "./ListEvent.styled";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import Item from "@components/ContributionItem/ContributionItem";
import { IEvent } from "@interfaces/event.interfaces";

interface IListEventProps {
  event?: IEvent;
}

const ListEvent = ({ event }: IListEventProps) => {
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
            <S.Icon>
              <FaSearch />
            </S.Icon>
          </S.Input>
        </S.Search>
      </S.Header>
      <S.ListItem>
        <S.Item>
          <Item />
        </S.Item>
        <S.Item>
          <Item />
        </S.Item>
        <S.Item>
          <Item />
        </S.Item>
        <S.Item>
          <Item />
        </S.Item>
      </S.ListItem>
      <S.BtnLoadMore>Load More</S.BtnLoadMore>
    </S.Container>
  );
};

export default ListEvent;
