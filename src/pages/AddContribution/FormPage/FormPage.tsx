import { useState } from "react";
import * as S from "./FormPage.styled";
import ReactQuill from "react-quill";
import { IAddContributionPayload } from "@interfaces/contribution.interfaces";
import FileSelector from "../FilesSelector/FileSelector";
import service from "@service/contribution";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";

const FormPage = () => {
  const [params] = useSearchParams();

  const [payload, setPayload] = useState<IAddContributionPayload>({
    title: "",
    description: "",
    eventId: "",
    documents: [],
    images: [],
  });

  const addContribiution = () => {
    const eventId = params.get("eventId");
    if (!eventId) return;
    service.addContribution({ ...payload, eventId });
  };

  return (
    <S.Container>
      <S.ItemInput>
        <S.Text>Title</S.Text>
        <S.InputTitle>
          <input
            value={payload.title}
            onChange={(e) => setPayload({ ...payload, title: e.target.value })}
            type="text"
            placeholder="Enter event title"
          />
        </S.InputTitle>
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
          <FileSelector
            type="images"
            onChange={(files) => setPayload({ ...payload, images: files })}
          />
        </S.Input>
        <S.Description>Specify where to submit image files</S.Description>
      </S.ItemInput>
      <S.ItemInput>
        <S.Text>Word Files</S.Text>
        <S.Input>
          <FileSelector
            type="documents"
            onChange={(files) => setPayload({ ...payload, documents: files })}
          />
        </S.Input>
        <S.Description>Specify where to submit image files</S.Description>
      </S.ItemInput>
      <S.ItemInput>
        <S.InputCheckbox>
          <input type="checkbox" /> i agree with term and privacy
        </S.InputCheckbox>
      </S.ItemInput>
      <S.Submit>
        <S.BtnSubmit onClick={addContribiution}>Submit</S.BtnSubmit>
      </S.Submit>
    </S.Container>
  );
};

export default FormPage;
