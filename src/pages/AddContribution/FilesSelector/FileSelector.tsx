import { useState } from "react";
import * as S from "./FileSelector.styled";

interface IFilesSelectorProps {
  type: "images" | "documents";
}

export default function FileSelector() {
  const [files, setFiles] = useState<File[]>([]);
}

function FileItem() {
  return <></>;
}
