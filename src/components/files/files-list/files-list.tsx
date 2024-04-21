import { FC } from "react";
import { FilesCard } from "../files-card/files-card";

export const FilesList: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <FilesCard />
      </div>
    </div>
  );
};
