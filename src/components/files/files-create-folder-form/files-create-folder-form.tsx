import { FC } from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../ui/select";
import { Button } from "../../ui/button";

export const FilesCreateFolderForm: FC = () => {
  const fileExtensions: { value: string; label: string }[] = [
    { value: "pdf", label: "PDF" },
    { value: "doc", label: "Microsoft Word Document" },
    { value: "docx", label: "Microsoft Word Document (Open XML)" },
    { value: "xls", label: "Microsoft Excel Spreadsheet" },
    { value: "xlsx", label: "Microsoft Excel Spreadsheet (Open XML)" },
    { value: "ppt", label: "Microsoft PowerPoint Presentation" },
    { value: "pptx", label: "Microsoft PowerPoint Presentation (Open XML)" },
    { value: "txt", label: "Plain Text Document" },
    { value: "jpg", label: "JPEG Image" },
    { value: "jpeg", label: "JPEG Image" },
    { value: "png", label: "Portable Network Graphics Image" },
    { value: "gif", label: "Graphics Interchange Format Image" },
    { value: "mp3", label: "MP3 Audio" },
    { value: "wav", label: "Waveform Audio" },
    { value: "mp4", label: "MP4 Video" },
    { value: "avi", label: "Audio Video Interleave Video" },
  ];

  return (
    <div className="mx-auto max-w-md space-y-6 py-12">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Create Folder</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Add a new folder to your file storage.
        </p>
      </div>
      <form className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="name">Folder Name</Label>
          <Input id="name" placeholder="Enter folder name" required />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="file-type">File Type</Label>
          <Select defaultValue="document">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select file type" />
            </SelectTrigger>
            <SelectContent>
              {fileExtensions.map(extension => (
                <SelectItem key={extension.value} value={extension.value}>
                  {extension.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full" type="submit">
          Create Folder
        </Button>
      </form>
    </div>
  );
};
