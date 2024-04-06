import { useState } from "react";
import * as S from "./FileSelector.styled";
import { CiCircleRemove } from "react-icons/ci";

interface IFilesSelectorProps {
  type: "images" | "documents";
}

export default function FileSelector() {
  const [files, setFiles] = useState<File[]>([]);
  const addFile = (file: File | null) => {
    if (!file) return;
    setFiles([...files, file]);
  };

  const removeFile = (file: File) => {
    setFiles(files.filter((item) => item.name !== file.name));
  };

  return (
    <>
      <S.FilesContainer>
        {files.map((item) => (
          <FileItem file={item} onRemove={removeFile} />
        ))}
      </S.FilesContainer>
      <S.AddButton>
        <input
          type="file"
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
