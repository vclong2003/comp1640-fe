import ReactQuill from "react-quill";
import * as S from "./EditForm.styled";
import { IContribution } from "@interfaces/contribution.interfaces";

interface IEditFormProps {
  contribution: IContribution;
}

export default function EditForm({ contribution }: IEditFormProps) {
  return (
    <S.Container>
      <S.ItemInput>
        <S.Text>Title</S.Text>
        <S.InputTitle>
          <input type="text" placeholder="Enter event title" />
        </S.InputTitle>
      </S.ItemInput>
      <S.ItemInput>
        <S.Text>Description</S.Text>
        <S.Input>
          <ReactQuill
            placeholder="Test rich text editor"
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "italic"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link"],
                ["clean"],
              ],
            }}
          />
        </S.Input>
      </S.ItemInput>
      <S.ItemInput>
        <S.Text>BannerImage</S.Text>
        <S.Input>
          <input type="file" accept="image/*" />
        </S.Input>
      </S.ItemInput>
      <S.ItemInput>
        <S.Text>Image Files</S.Text>
        <S.Input>
          {/* <FileSelector
            type="images"
            onChange={(files) => setPayload({ ...payload, images: [...files] })}
          /> */}
        </S.Input>
        <S.Description>Specify where to submit image files</S.Description>
      </S.ItemInput>
      <S.ItemInput>
        <S.Text>Word Files</S.Text>
        <S.Input>
          {/* <FileSelector
            type="documents"
            onChange={(files) =>
              setPayload({ ...payload, documents: [...files] })
            }
          /> */}
        </S.Input>
        <S.Description>Specify where to submit image files</S.Description>
      </S.ItemInput>

      <S.Submit>
        <S.BtnSubmit>Save changes</S.BtnSubmit>
      </S.Submit>
    </S.Container>
  );
}
