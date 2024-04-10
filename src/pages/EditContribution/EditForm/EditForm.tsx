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
import FileSelector from "../FilesSelector/FileSelector";
import { useNavigate } from "react-router";

interface IEditFormProps {
  contribution: IContribution;
}

export default function EditForm({ contribution }: IEditFormProps) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
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

  const onChageBannerImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPayload({ ...payload, bannerImage: e.target.files[0] });
    }
  };

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

  const updateContribution = () => {
    setLoading(true);
    service
      .updateContribution(payload)
      .then(() => navigate(`/contribution/${contribution._id}`))
      .finally(() => setLoading(false));
  };

  const cancel = () => {
    navigate(`/contribution/${contribution._id}`);
  };

  return (
    <S.Container>
      {/* Title ----------------------------------------------------------- */}
      <S.ItemInput>
        <S.Text>Title</S.Text>
        <S.InputTitle>
          <input
            type="text"
            placeholder="Enter event title"
            value={payload.title}
            onChange={(e) => setPayload({ ...payload, title: e.target.value })}
          />
        </S.InputTitle>
      </S.ItemInput>
      {/* Description ----------------------------------------------------------- */}
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
            value={payload.description}
            onChange={(value) => setPayload({ ...payload, description: value })}
          />
        </S.Input>
      </S.ItemInput>
      {/* BannerImage ----------------------------------------------------------- */}
      <S.ItemInput>
        <S.Text>BannerImage</S.Text>
        {/* preview */}
        <img
          style={{
            width: "100%",
            height: "auto",
            aspectRatio: "21/9",
            objectFit: "cover",
            borderRadius: "var(--br-md)",
            marginBottom: "var(--s-1)",
          }}
          src={
            (payload.bannerImage && URL.createObjectURL(payload.bannerImage)) ||
            contribution.banner_image_url ||
            ""
          }
          alt="Select an image"
        />
        <S.InputFile>
          <label>
            <input
              type="file"
              accept="image/*"
              onChange={onChageBannerImage}
              hidden
            />
            Select new banner image
          </label>
        </S.InputFile>
      </S.ItemInput>
      {/* Image Files ----------------------------------------------------------- */}
      <S.ItemInput>
        <S.Text>Image Files</S.Text>
        {/* current files ---------------------------- */}
        <S.Input>
          <S.StatusFile>Current file</S.StatusFile>
          <FileList files={currentFiles.images} onRemove={removeFile} />
        </S.Input>
        {/* upload new files ---------------------------- */}
        <S.Input>
          <S.StatusFile>Upload new file</S.StatusFile>
          <FileSelector
            type="images"
            onChange={(files) => setPayload({ ...payload, images: [...files] })}
          />
        </S.Input>
      </S.ItemInput>
      {/* Word Files ----------------------------------------------------------- */}
      <S.ItemInput>
        <S.Text>Word Files</S.Text>
        {/* current files ---------------------------- */}
        <S.Input>
          <S.StatusFile>Current file</S.StatusFile>
          <FileList files={currentFiles.documents} onRemove={removeFile} />
        </S.Input>
        {/* upload new files ---------------------------- */}
        <S.Input>
          <S.StatusFile>Upload new file</S.StatusFile>
          <FileSelector
            type="documents"
            onChange={(files) =>
              setPayload({ ...payload, documents: [...files] })
            }
          />
        </S.Input>
      </S.ItemInput>
      {/* Save btn -------------------------------------------------------------- */}
      <S.Submit>
        <S.BtnSubmit onClick={updateContribution} disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </S.BtnSubmit>
        {/* Cancel btn ------------------------------------------------------------ */}
      <S.BtnSubmit onClick={cancel}>Cancel</S.BtnSubmit>
      </S.Submit>
      
    </S.Container>
  );
}
