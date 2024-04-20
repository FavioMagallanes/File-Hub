import { FC } from "react";
import { Button } from "../ui/button";
import { FilesCard } from "./files-card";
import { FilesUploadForm } from "./files-upload-form";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

import Icon from "../icon/icon";

export const FilesList: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">File Manager</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Icon name="Upload" className="w-4 h-4 mr-1" />
              Upload File{" "}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <FilesUploadForm />
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <FilesCard />
      </div>
    </div>
  );
};
