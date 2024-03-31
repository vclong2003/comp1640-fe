import { FormButton } from "@components/formComponents";
import ReactCrop from "react-image-crop";
import styled from "styled-components";

export const ImageCropper = styled.div`
  padding: var(--s-3) 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageCrop = styled(ReactCrop)`
  border-radius: var(--br-md);
  overflow: hidden;
`;

export const Image = styled.img`
  min-width: 250px;
  width: 100%;
  height: auto;
`;

export const FileInputLabel = styled.label`
  cursor: pointer;
  background-color: var(--blue-gray);
  color: var(--white);
  font-size: var(--fs-md);
  padding: var(--s-2) var(--s-5);
  display: flex;
  align-items: center;
  gap: var(--s-2);
  margin: 0;
  border-radius: var(--br-md);
  margin: var(--s-2) 0;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: var(--s-2);
`;
export const SaveBtn = styled(FormButton)`
  padding: var(--s-2) var(--s-5);
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-normal);
`;
export const ResetBtn = styled(FormButton)`
  padding: var(--s-2) var(--s-5);
  margin: 0;
  font-size: var(--fs-md);
  background-color: var(--light-gray-2);
  font-weight: var(--fw-normal);
`;
export const CancelBtn = styled(FormButton)`
  padding: var(--s-2) var(--s-5);
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-normal);
  background-color: var(--light-gray-2);
`;
