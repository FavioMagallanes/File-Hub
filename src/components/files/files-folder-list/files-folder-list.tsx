import { FC } from "react";
import { Button } from "../../ui/button";
import { FilesFolderCard } from "../files-folder-card/files-folder-card";
import { Dialog, DialogTrigger, DialogContent } from "../../ui/dialog";
import { FilesCreateFolderForm } from "../files-create-folder-form/files-create-folder-form";

import Icon from "../../icon/icon";

export const FilesFolderList: FC = () => {
  const FOLDERS = [
    {
      name: "Documents",
      filesCount: 20,
      filesTypes: "PDF, DOCX, PPTX",
      icon: <Icon name="File" className="w-5 h-5 mr-2" />,
    },
    {
      name: "Images",
      filesCount: 30,
      filesTypes: "JPG, PNG, SVG",
      icon: <Icon name="Image" className="w-5 h-5 mr-2" />,
    },
    {
      name: "Videos",
      filesCount: 15,
      filesTypes: "MP4, AVI, MKV",
      icon: <Icon name="Video" className="w-5 h-5 mr-2" />,
    },
    {
      name: "Music",
      filesCount: 10,
      filesTypes: "MP3, WAV, FLAC",
      icon: <Icon name="Music" className="w-5 h-5 mr-2" />,
    },
    {
      name: "Others",
      filesCount: 5,
      filesTypes: "ZIP, RAR, PSD",
      icon: <Icon name="File" className="w-5 h-5 mr-2" />,
    },
  ];

  return (
    <div key="1" className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">File Manager</h1>
        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Icon name="FolderPlus" className="w-4 h-4 mr-2" />
                New Folder
              </Button>
            </DialogTrigger>
            <DialogContent>
              <FilesCreateFolderForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {FOLDERS.map(folder => (
          <FilesFolderCard
            key={folder.name}
            name={folder.name}
            filesCount={folder.filesCount}
            filesTypes={folder.filesTypes}
            icon={folder.icon}
          />
        ))}
      </div>
    </div>
  );
};
