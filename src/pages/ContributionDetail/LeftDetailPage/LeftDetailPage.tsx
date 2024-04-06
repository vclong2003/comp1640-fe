import * as S from "./LeftDetailPage.styled";
import Detail from "../../../assets/images/detail.png";
import { IoMdPerson } from "react-icons/io";
import { IoSend } from "react-icons/io5";
// import { useState } from "react";
// import ReactQuill from "react-quill";
import Avatar from "@components/Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import { FaHeart } from "react-icons/fa";

const LeftDetailPage = () => {
  // const [test, setTest] = useState("");

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
          <S.DescriptionContribute>
            Dream Weekends #2 on the edge world
          </S.DescriptionContribute>
          <S.Author>
            <UserInfo />
          </S.Author>
        </S.Bottom>
      </S.TopContainer>
      <S.MiddleContainer>
        {/* <div>
          <ReactQuill
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
          />
        </div> */}
        <S.ContainerDescription>
          <S.Description>
            It is shown by default, until the collapse plugin adds the
            appropriate classes that we use to style each element. These classes
            control the overall appearance, as well as the showing and hiding
            via CSS transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the .accordion-body, though the
            transition does limit overflow. It is shown by default, until the
            collapse plugin adds the appropriate classes that we use to style
            each element. These classes control the overall appearance, as well
            as the showing and hiding via CSS transitions. You can modify any of
            this with custom CSS or overriding our default variables. It's also
            worth noting that just about any HTML can go within
            the .accordion-body, though the transition does limit overflow.
          </S.Description>
          <S.ContainerLike>
            <FaHeart />
            <S.Like>100</S.Like>
          </S.ContainerLike>
        </S.ContainerDescription>
      </S.MiddleContainer>
      <S.BottomContainer>
        <S.Title>
          <S.Person>
            <IoMdPerson />
          </S.Person>
          <S.TextCmt>Comments</S.TextCmt>
        </S.Title>
        <S.ContainerComment>
          <S.CmtItem>
            <UserInfo />
          </S.CmtItem>
          <S.CmtItem>
            <UserInfo />
          </S.CmtItem>
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
