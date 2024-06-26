import ItemDocumentFile from "./ItemDocumentFile/ItemDocumentFile";
import ItemImageFile from "./ItemImageFile/ItemImageFile";
import * as S from "./RightDetailPage.styled";
import { BsPersonFillLock } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import { IContribution } from "@interfaces/contribution.interfaces";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import AuthorizedComponent from "@components/AuthorizedComponent/AuthorizedComponent";
import { ERole } from "@interfaces/user.interfaces";
import { useEffect, useState } from "react";
import { addPrivateComment, findPrivateComments } from "@store/contribution";
import { toIsoDate } from "@utils/date.utils";
import Avatar from "@components/Avatar/Avatar";

interface IRightDeatilPageProps {
  contribution: IContribution;
}

export default function RightDetailPage({
  contribution,
}: IRightDeatilPageProps) {
  const { user } = useSelector((state: RootState) => state.userState);

  const { images, documents, author } = contribution;

  return (
    <S.Container>
      <S.TopContainer>
        <S.ContainerDocument>
          <S.DocumentFile>
            <S.Title>Files</S.Title>
            <S.Content>
              {documents.map((item, index) => (
                <ItemDocumentFile
                  key={index}
                  file_name={item.file_name}
                  file_access_url={item.file_access_url}
                />
              ))}
            </S.Content>
            <S.Divider></S.Divider>
          </S.DocumentFile>
          <S.DocumentImg>
            {images.map((item, index) => (
              <ItemImageFile
                key={index}
                file_name={item.file_name}
                file_access_url={item.file_access_url}
              />
            ))}
          </S.DocumentImg>
        </S.ContainerDocument>
        <AuthorizedComponent
          allowedRoles={[
            ERole.Admin,
            ERole.MarketingManager,
            ERole.MarketingCoordinator,
            ERole.Student,
          ]}
        >
          {(user?.role !== ERole.Student || user?._id === author._id) && (
            <PrivateComment contribution={contribution} />
          )}
        </AuthorizedComponent>
      </S.TopContainer>
    </S.Container>
  );
}

// Private Comment ------------------------------------------------------------
interface IPrivateCommentProps {
  contribution: IContribution;
}
function PrivateComment({ contribution }: IPrivateCommentProps) {
  const { privateComments } = useSelector(
    (state: RootState) => state.contributionState,
  );
  const dispatch = useDispatch<AppDispatch>();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const onAdd = () => {
    if (loading) return;
    if (input.trim() === "") return;
    setLoading(true);
    dispatch(
      addPrivateComment({ contributionId: contribution._id, content: input }),
    )
      .unwrap()
      .then(() => setInput(""))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    dispatch(findPrivateComments({ contributionId: contribution._id }));
  }, [contribution._id, dispatch]);

  return (
    <S.PrivateCmt>
      <S.TitleComment>
        <BsPersonFillLock />
        <S.TextTitle>1 Private Comments</S.TextTitle>
      </S.TitleComment>
      {/* Comment item: user info, content */}
      {privateComments.map((comments, index) => (
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
      <S.InputAddCmt>
        <S.Input
          placeholder="Add Comment"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <S.IconSent onClick={onAdd}>
          <IoSend />
        </S.IconSent>
      </S.InputAddCmt>
    </S.PrivateCmt>
  );
}
