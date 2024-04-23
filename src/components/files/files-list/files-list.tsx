import { FC } from "react";
import { FilesCard } from "../files-card/files-card";

import  Icon  from "../../icon/icon";

export const FilesList: FC = () => {
  const FILES = [
    {
      name: "document.pdf",
      size: "2.3 MB",
      type: "PDF Document",
      date: "12-09-2021",
      icon: <Icon name="File" className="w-5 h-5 mr-2" />,
    },
    {
      name: "image.png",
      size: "1.5 MB",
      type: "PNG Image",
      date: "12-09-2021",
      icon: <Icon name="Image" className="w-5 h-5 mr-2" />,
    },
    {
      name: "video.mp4",
      size: "5.3 MB",
      type: "MP4 Video",
      date: "12-09-2021",
      icon: <Icon name="Video" className="w-5 h-5 mr-2" />,
    },
    {
      name: "music.mp3",
      size: "3.2 MB",
      type: "MP3 Music",
      date: "12-09-2021",
      icon: <Icon name="Music" className="w-5 h-5 mr-2" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {FILES.map((file, index) => (
          <FilesCard
            key={index}
            name={file.name}
            size={file.size}
            type={file.type}
            date={file.date}
            icon={file.icon}
          />
        ))}
      </div>
    </div>
  );
};
