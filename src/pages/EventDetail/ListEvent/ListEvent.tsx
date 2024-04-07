import * as S from "./ListEvent.styled";
import { FaSearch } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { IEvent } from "@interfaces/event.interfaces";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { findContributions } from "@store/contribution";
import { IFindContributionsPayload } from "@interfaces/contribution.interfaces";

interface IListEventProps {
  event: IEvent;
}

const ListEvent = ({ event }: IListEventProps) => {
  const [isPublish, setIsPublish] = useState(true);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { contributions } = useSelector(
    (state: RootState) => state.contributionState,
  );
  const { user } = useSelector((state: RootState) => state.userState);

  useEffect(() => {
    if (!event) return;

    const payload: IFindContributionsPayload = { eventId: event._id };
    if (isPublish) {
      payload.is_publication = true;
    } else {
      payload.authorId = user?._id;
    }
    if (title) payload.title = title;
    dispatch(findContributions(payload));
  }, [event, dispatch, isPublish, user, title]);

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
            <input
              type="search"
              placeholder="Search Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <S.Icon>
              <FaSearch />
            </S.Icon>
          </S.Input>
        </S.Search>
      </S.Header>
      <S.ListItem>
        {/* Map here */}
        {contributions.map((contribution) => (
          <S.Item key={contribution._id} contribution={contribution} />
        ))}
      </S.ListItem>
      <S.BtnLoadMore>Load More</S.BtnLoadMore>
    </S.Container>
  );
};

export default ListEvent;
