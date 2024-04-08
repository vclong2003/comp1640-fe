import { CiCircleRemove } from "react-icons/ci";
import * as S from "./FileList.styled";
import { IContributionFile } from "@interfaces/contribution.interfaces";

interface IFileListProps {
  files: IContributionFile[];
  onRemove(file: IContributionFile): void;
}
export default function FileList({ files, onRemove }: IFileListProps) {
  return (
    <S.FileList>
      <S.FilesContainer>
        {files.map((item, index) => (
          <FileItem key={index} file={item} onRemove={onRemove} />
        ))}
      </S.FilesContainer>
    </S.FileList>
  );
}

interface IFileItemProps {
  file: IContributionFile;
  onRemove(file: IContributionFile): void;
}
function FileItem({ file, onRemove }: IFileItemProps) {
  return (
    <S.Container>
      <S.Title>{file.file_name}</S.Title>
      <CiCircleRemove onClick={() => onRemove(file)} />
    </S.Container>
  );
}
