import * as S from "./LeftDetailPage.styled";
import Detail from "../../../assets/images/detail.png";
import { FiEdit } from "react-icons/fi";
import { IoMdPerson } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { useState } from "react";
import ReactQuill from "react-quill";
import Avatar from "@components/Avatar/Avatar";
import LeftComment from "../CommentItem/LeftComment/LeftComment";
import CommentItem from "../CommentItem/CommentItem";

const LeftDetailPage = () => {
  const [test, setTest] = useState("");

  return (
    <S.Container>
      <S.TopContainer>
        <S.Image src={Detail} />
        <S.Text>
          <S.Status>
            <S.TextStatus>Published</S.TextStatus>
          </S.Status>
        </S.Text>
        <S.Icon>
          <FiEdit />
        </S.Icon>
        <S.Bottom>
          <S.Description>Dream Weekends #2 on the edge world</S.Description>
          <S.Author>
            <LeftComment />
          </S.Author>
        </S.Bottom>
      </S.TopContainer>
      <S.BottomContainer>
        <div>
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
        </div>
        <S.Title>
          <S.Person>
            <IoMdPerson />
          </S.Person>
          <S.TextCmt>Comments</S.TextCmt>
        </S.Title>
        <S.ContainerComment>
          <S.CmtItem>
            <CommentItem />
          </S.CmtItem>
          <S.CmtItem>
            <CommentItem />
          </S.CmtItem>
        </S.ContainerComment>
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
