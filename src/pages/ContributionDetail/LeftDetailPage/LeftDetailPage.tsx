import * as S from "./LeftDetailPage.styled";
import Detail from "../../../assets/images/detail.png";
import { IoMdPerson } from "react-icons/io";
import { IoSend } from "react-icons/io5";

import Avatar from "@components/Avatar/Avatar";
import LeftComment from "../CommentItem/LeftComment/LeftComment";
import CommentItem from "../CommentItem/CommentItem";
import { IContribution } from "@interfaces/contribution.interfaces";
import { toLocaleDateTime } from "@utils/date.utils";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { useEffect } from "react";
import { findComments } from "@store/contribution";

interface ILeftDetailPageProps {
  contribution: IContribution;
}

const LeftDetailPage = ({ contribution }: ILeftDetailPageProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { comments } = useSelector(
    (state: RootState) => state.contributionState,
  );
  useEffect(() => {
    dispatch(findComments({ contributionId: contribution._id }));
  }, [dispatch, contribution._id]);

  return (
    <S.Container>
      <S.TopContainer>
        <S.Image src={contribution?.banner_image_url || Detail} />
        <S.Text>
          <S.Status>
            {contribution?.is_publication && (
              <S.TextStatus>Published</S.TextStatus>
            )}
          </S.Status>
        </S.Text>
        <S.Bottom>
          <S.Description>
            {contribution && toLocaleDateTime(contribution.submitted_at)}
          </S.Description>
          <S.Author>
            <LeftComment />
          </S.Author>
        </S.Bottom>
      </S.TopContainer>
      <S.BottomContainer>
        {contribution?.description}
        {/* <ReactQuill
            value={test}
            onChange={setTest}
            placeholder="Test rich text editor"
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "italic"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image"],
                ["clean"],
              ],
            }}
          /> */}
        <S.Title>
          <S.Person>
            <IoMdPerson />
          </S.Person>
          <S.TextCmt>Comments</S.TextCmt>
        </S.Title>
        <S.ContainerComment>
          {comments.map((comment) => (
            <S.CmtItem key={comment._id}>
              <CommentItem comment={comment} />
            </S.CmtItem>
          ))}
        </S.ContainerComment>
        {/* Add Comment */}
        <S.AddCmt>
          <S.ImageAva>
            <Avatar isUpdateable={true} />
          </S.ImageAva>
          <S.InputCmt placeholder="Add Comment"></S.InputCmt>
          <S.IconSent>
            <IoSend />
          </S.IconSent>
        </S.AddCmt>
      </S.BottomContainer>
    </S.Container>
  );
};

export default LeftDetailPage;
