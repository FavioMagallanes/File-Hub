import { ReactNode } from "react";
import { z } from "zod";
import { formSchema } from "@/constants/form-schema";

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

export type FormSchemaType = z.infer<typeof formSchema>;
