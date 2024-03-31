import { useState } from "react";
import * as S from "./ImageCropper.styled";
import { FiUpload } from "react-icons/fi";
import { Crop } from "react-image-crop";
import { cropImage } from "@utils/image.utils";

interface IImageCropperProps {
  initialImageUrl: string | undefined | null;
  onSave: (file: File) => void;
  onClose: () => void;
}
export default function ImageCropper({
  initialImageUrl,
  onClose,
  onSave,
}: IImageCropperProps) {
  const [avatarUrl, setAvatarUrl] = useState(initialImageUrl);
  const [crop, setCrop] = useState<Crop | undefined>();
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  const onAvatarFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setAvatarUrl(URL.createObjectURL(e.target.files[0]));
    setCrop(undefined);
  };

  const save = () => {
    if (!image || !crop) return;
    cropImage(image, crop)
      .then((file) => onSave(file))
      .catch((error) => console.error(error));
  };

  const reset = () => setCrop(undefined);

  return (
    <S.ImageCropper>
      <S.ImageCrop crop={crop} onChange={setCrop}>
        <S.Image
          crossOrigin="anonymous"
          src={avatarUrl || ""}
          onLoad={(e) => setImage(e.currentTarget)}
          alt="Please select an image!"
        />
      </S.ImageCrop>
      <S.FileInputLabel htmlFor="imageInput">
        <input
          id="imageInput"
          hidden
          type="file"
          accept="image/*"
          onChange={onAvatarFileChange}
        />
        <FiUpload />
        Select New Image
      </S.FileInputLabel>
      <S.BtnContainer>
        <S.SaveBtn onClick={save}>Save</S.SaveBtn>
        <S.ResetBtn onClick={reset}>Reset</S.ResetBtn>
        <S.CancelBtn onClick={onClose}>Cancel</S.CancelBtn>
      </S.BtnContainer>
    </S.ImageCropper>
  );
}
