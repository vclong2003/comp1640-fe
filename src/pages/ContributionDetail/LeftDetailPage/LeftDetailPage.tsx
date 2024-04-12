import * as S from "./LeftDetailPage.styled";
import Detail from "@assets/images/detail.png";
import { IoSend } from "react-icons/io5";
import { MdEditSquare } from "react-icons/md";
import Avatar from "@components/Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import { FaHeart } from "react-icons/fa";
import { IContribution } from "@interfaces/contribution.interfaces";
import { toIsoDate, toLocaleDateTime } from "@utils/date.utils";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { addComment, findComments } from "@store/contribution";
import { useEffect, useState } from "react";
import AuthorizedComponent from "@components/AuthorizedComponent/AuthorizedComponent";
import { ERole } from "@interfaces/user.interfaces";
import { useNavigate } from "react-router";

interface ILeftDetailPageProps {
  contribution: IContribution;
  onLike: () => void;
}

export default function LeftDetailPage({
  contribution,
  onLike,
}: ILeftDetailPageProps) {
  const { user } = useSelector((state: RootState) => state.userState);
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.TopContainer>
        <S.Image src={contribution.banner_image_url || Detail} />
        <S.Text>
          <S.Status>
            {contribution.is_publication && (
              <S.TextStatus>Published</S.TextStatus>
            )}
          </S.Status>
        </S.Text>
        {/* Edit Btn ----------------------------------------------------- */}
        <AuthorizedComponent
          allowedRoles={[ERole.MarketingCoordinator, ERole.Student]}
        >
          {(user?.role === ERole.MarketingCoordinator ||
            contribution.author._id === user?._id) && (
            <S.Icon onClick={() => navigate("edit")}>
              <MdEditSquare />
            </S.Icon>
          )}
        </AuthorizedComponent>
        <S.Bottom>
          <S.DescriptionContribute>
            {contribution.title}
          </S.DescriptionContribute>
          <S.Author>
            <UserInfo
              name={contribution.author.name}
              avatar_url={contribution.author.avatar_url}
              additionalInfo={toLocaleDateTime(contribution.submitted_at)}
            />
          </S.Author>
        </S.Bottom>
      </S.TopContainer>
      <S.MiddleContainer>
        <S.ContainerDescription>
          <S.Description
            dangerouslySetInnerHTML={{ __html: contribution.description }}
          />
          <S.ContainerLike onClick={onLike}>
            <FaHeart />
            <S.Like>{contribution.likes}</S.Like>
          </S.ContainerLike>
        </S.ContainerDescription>
      </S.MiddleContainer>
      <S.BottomContainer>
        {contribution.is_publication && (
          <>
            <Commnet contribution={contribution} />
          </>
        )}
      </S.BottomContainer>
    </S.Container>
  );
}

// Comment ------------------------------------------------------------------------
interface ICommentProps {
  contribution: IContribution;
}

function Commnet({ contribution }: ICommentProps) {
  const { comments } = useSelector(
    (state: RootState) => state.contributionState,
  );
  const dispatch = useDispatch<AppDispatch>();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state: RootState) => state.userState);

  const onAdd = () => {
    if (loading) return;
    if (input.trim() === "") return;
    setLoading(true);
    dispatch(addComment({ contributionId: contribution._id, content: input }))
      .unwrap()
      .then(() => setInput(""))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    dispatch(findComments({ contributionId: contribution._id }));
  }, [contribution._id, dispatch]);
  return (
    <S.Comment>
      <S.Title>
        <S.TextCmt>Comments</S.TextCmt>
      </S.Title>
      {comments.map((comments, index) => (
        <S.ContainerComment key={index}>
          <S.CmtItem>
            <S.LeftItem>
              <Avatar imageUrl={comments.author.avatar_url} />
            </S.LeftItem>
            <S.RightItem>
              <S.User>
                <S.NameUser>{comments.author.name}</S.NameUser>
                <S.Date>{toIsoDate(comments.posted_at)}</S.Date>
              </S.User>
              <S.CommentContent>{comments.content}</S.CommentContent>
            </S.RightItem>
          </S.CmtItem>
        </S.ContainerComment>
      ))}
      <S.AddCmt>
        <S.ImageAva>
          <Avatar imageUrl={user?.avatar_url} />
        </S.ImageAva>
        <S.InputCmt
          placeholder="Add Comment"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></S.InputCmt>
        <S.IconSent onClick={onAdd}>
          <IoSend />
        </S.IconSent>
      </S.AddCmt>
    </S.Comment>
  );
}
