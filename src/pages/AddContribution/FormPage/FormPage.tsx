import { useState } from "react";
import * as S from "./FormPage.styled";
import ReactQuill from "react-quill";
import { IAddContributionPayload } from "@interfaces/contribution.interfaces";

const FormPage = () => {
  const [payload, setPayload] = useState<IAddContributionPayload>({
    title: "",
    description: "",
    eventId: "",
    documents: [],
    images: [],
  });

  return (
    <S.Container>
      <S.ItemInput>
        <S.Text>Title</S.Text>
        <S.Input>
          <input
            value={payload.title}
            onChange={(e) => setPayload({ ...payload, title: e.target.value })}
            type="text"
            placeholder="Enter event title"
          />
        </S.Input>
      </S.ItemInput>
      <S.ItemInput>
        <S.Text>Description</S.Text>
        <S.Input>
          <ReactQuill
            value={payload.description}
            onChange={(value) => setPayload({ ...payload, description: value })}
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
        </S.Input>
      </S.ItemInput>
      <S.ItemInput>
        <S.Text>Image Files</S.Text>
        <S.Input>
          <input type="text" />
        </S.Input>
        <S.Description>Specify where to submit image files</S.Description>
      </S.ItemInput>
      <S.ItemInput>
        <S.Text>Word Files</S.Text>
        <S.Input>
          <input type="text" />
        </S.Input>
        <S.Description>Specify where to submit image files</S.Description>
      </S.ItemInput>
      <S.ItemInput>
        <S.InputCheckbox>
          <input type="checkbox" /> i agree with term and privacy
        </S.InputCheckbox>
      </S.ItemInput>
      <S.Submit>
        <S.BtnSubmit>Submit</S.BtnSubmit>
      </S.Submit>
    </S.Container>
  );
};

export default FormPage;
