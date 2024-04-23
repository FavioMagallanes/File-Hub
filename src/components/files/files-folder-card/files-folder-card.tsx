import { FC } from "react";
import { Link } from "react-router-dom";
import { FilesFolderCardProps } from "../../../types/interfaces";
import { FilesUploadForm } from "../files-upload-form/files-upload-form";
import { Dialog, DialogContent, DialogTrigger } from "../../ui/dialog";
import { Button } from "../../ui/button";

import  Icon  from '../../icon/icon'

export const FilesFolderCard: FC<FilesFolderCardProps> = ({
  name,
  filesCount,
  filesTypes,
  icon,
}) => {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden">
      <Link to="/files">
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              {icon}
              <p className="font-medium text-gray-900 dark:text-gray-50 hover:underline">
                {name}
              </p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {filesCount} files
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {filesTypes}
          </p>
        </div>
      </Link>
      <div className="border-t border-gray-200 dark:border-gray-800 px-2 py-3 flex gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="w-full justify-start"
              size="sm"
              variant="outline"
            >
              <Icon name="Upload" className="w-4 h-4 mr-2" />
              Upload File
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <FilesUploadForm />
          </DialogContent>
        </Dialog>
        <Button className="ml-auto" size="sm" variant="outline">
          <Icon name="Trash" className="w-4 h-4 mr-2" />
          Delete
        </Button>
      </div>
    </div>
  );
};
