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

export interface InputField {
  id: string;
  label: string;
  placeholder: string;
  type: string;
}

export interface FormCardProps {
  title: string;
  description: string;
  textRoute: string;
  textButton: string;
  path: string;
  inputs: InputField[];
}
