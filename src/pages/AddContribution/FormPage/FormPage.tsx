import { useState } from "react";
import * as S from "./FormPage.styled";
import ReactQuill from "react-quill";
import { IAddContributionPayload } from "@interfaces/contribution.interfaces";
import service from "@service/contribution";
import { useNavigate, useSearchParams } from "react-router-dom";
import { notifyInfo } from "@utils/notification.utils";
import FileSelector from "../FilesSelector/FileSelector";

const FormPage = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [isAgreeToTerm, setIsAgreeToTerm] = useState(false);
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
    if (!isAgreeToTerm) {
      return notifyInfo("Please agree to the terms of service");
    }
    setLoading(true);
    service
      .addContribution({ ...payload, eventId })
      .then((res) => navigate(`/contribution/${res._id}`))
      .finally(() => setLoading(false));
  };

  const onChageBannerImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPayload({ ...payload, bannerImage: e.target.files[0] });
    }
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
          <input type="file" accept="image/*" onChange={onChageBannerImage} />
        </S.Input>
      </S.ItemInput>
      <S.ItemInput>
        <S.Text>Image Files</S.Text>
        <S.Input>
          <FileSelector
            type="images"
            onChange={(files) => setPayload({ ...payload, images: [...files] })}
          />
        </S.Input>
      </S.ItemInput>
      <S.ItemInput>
        <S.Text>Word Files</S.Text>
        <S.Input>
          <FileSelector
            type="documents"
            onChange={(files) =>
              setPayload({ ...payload, documents: [...files] })
            }
          />
        </S.Input>
      </S.ItemInput>
      <S.ItemInput>
        <input
          type="checkbox"
          checked={isAgreeToTerm}
          onChange={() => setIsAgreeToTerm(!isAgreeToTerm)}
        />{" "}
        I have read and agree to the terms of service. I understand that this is
        a public platform and that my contribution will be visible to all users
        if approved.
      </S.ItemInput>
      <S.Submit>
        <S.BtnSubmit disabled={loading} onClick={addContribiution}>
          {loading ? "Loading..." : "Upload My Contribution"}
        </S.BtnSubmit>
      </S.Submit>
    </S.Container>
  );
};

export default FormPage;
