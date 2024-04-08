import * as S from "./LeftDetailPage.styled";
import Detail from "@assets/images/detail.png";
import { IoSend } from "react-icons/io5";

import Avatar from "@components/Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import { FaHeart } from "react-icons/fa";
import { IContribution } from "@interfaces/contribution.interfaces";
import { toLocaleDateTime } from "@utils/date.utils";
import { useSelector } from "react-redux";
import { RootState } from "@store/index";

interface ILeftDetailPageProps {
  contribution: IContribution;
}

const LeftDetailPage = ({ contribution }: ILeftDetailPageProps) => {
  const { user } = useSelector((state: RootState) => state.userState);

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
        <S.Bottom>
          <S.DescriptionContribute>
            Dream Weekends #2 on the edge world
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
          <S.ContainerLike>
            <FaHeart />
            <S.Like>{contribution.likes}</S.Like>
          </S.ContainerLike>
        </S.ContainerDescription>
      </S.MiddleContainer>
      <S.BottomContainer>
        {true && (
          <>
            <S.Title>
              <S.Person>
                <Avatar imageUrl={user?.avatar_url} />
              </S.Person>
              <S.TextCmt>Comments</S.TextCmt>
            </S.Title>
            <S.ContainerComment>
              {/* <S.CmtItem>
            <UserInfo />
          </S.CmtItem>
          <S.CmtItem>
            <UserInfo />
          </S.CmtItem> */}
            </S.ContainerComment>
            {/* Add Comment */}
            <S.AddCmt>
              <S.ImageAva>
                <Avatar imageUrl={user?.avatar_url} />
              </S.ImageAva>
              <S.InputCmt placeholder="Add Comment"></S.InputCmt>
              <S.IconSent>
                <IoSend />
              </S.IconSent>
            </S.AddCmt>
          </>
        )}
      </S.BottomContainer>
    </S.Container>
  );
};

export default LeftDetailPage;
