import { useEffect, useState } from "react";
import * as S from "./FileSelector.styled";
import { CiCircleRemove } from "react-icons/ci";

interface IFilesSelectorProps {
  type: "images" | "documents";
  onChange(files: File[]): void;
}

export default function FileSelector({ type, onChange }: IFilesSelectorProps) {
  const [files, setFiles] = useState<File[]>([]);
  const addFile = (file: File | null) => {
    if (!file) return;
    setFiles([...files, file]);
  };

  const removeFile = (file: File) => {
    setFiles(files.filter((item) => item.name !== file.name));
  };

  useEffect(() => {
    onChange(files);
  }, [files]);

  return (
    <>
      <S.FilesContainer>
        {files.map((item, index) => (
          <FileItem key={index} file={item} onRemove={removeFile} />
        ))}
      </S.FilesContainer>
      <S.AddButton>
        <input
          type="file"
          accept={
            (type === "images" && "image/*") ||
            (type === "documents" && ".doc, .docx") ||
            ""
          }
          hidden
          onChange={(e) => addFile(e.target?.files && e.target.files[0])}
        />
        Choose File
      </S.AddButton>
    </>
  );
}

function FileItem({
  file,
  onRemove,
}: {
  file: File;
  onRemove(file: File): void;
}) {
  return (
    <S.Container>
      <S.Title>{file.name}</S.Title>
      <CiCircleRemove onClick={() => onRemove(file)} />
    </S.Container>
  );
}
