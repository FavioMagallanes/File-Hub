import { ReactNode } from "react";

export interface FilesFolderCardProps {
  name: string;
  filesCount: number;
  filesTypes: string;
  icon: ReactNode;
}

export interface FilesCardProps {
  name: string;
  size: string;
  type: string;
  date: string;
  icon: ReactNode;
}
