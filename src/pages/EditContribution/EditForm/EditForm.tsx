import ReactQuill from "react-quill";
import * as S from "./EditForm.styled";
import {
  IContribution,
  IContributionFile,
  IUpdateContriButionPayload,
} from "@interfaces/contribution.interfaces";
import { useState } from "react";
import FileList from "../FileList/FileList";
import service from "@service/contribution";

interface IEditFormProps {
  contribution: IContribution;
}

export default function EditForm({ contribution }: IEditFormProps) {
  const [currentFiles, setCurrentFiles] = useState({
    documents: contribution.documents,
    images: contribution.images,
  });
  const [payload, setPayload] = useState<IUpdateContriButionPayload>({
    _id: contribution._id,
    title: contribution.title,
    description: contribution.description,
    images: [],
    documents: [],
  });

  const removeFile = (file: IContributionFile) => {
    service
      .removeContributionFile({
        contributionId: contribution._id,
        file_url: file.file_url,
      })
      .then(() =>
        setCurrentFiles({
          ...currentFiles,
          documents: currentFiles.documents.filter(
            (item) => item.file_url !== file.file_url,
          ),
          images: currentFiles.images.filter(
            (item) => item.file_url !== file.file_url,
          ),
        }),
      );
  };

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
          <FileList files={currentFiles.images} onRemove={removeFile} />
        </S.Input>
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
          <FileList files={currentFiles.documents} onRemove={removeFile} />
        </S.Input>
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
