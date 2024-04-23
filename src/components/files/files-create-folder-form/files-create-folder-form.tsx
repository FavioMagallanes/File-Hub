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
import { FILE_EXTENSIONS_OPTIONS } from "../../../constants/constants";

export const FilesCreateFolderForm: FC = () => {
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
              {FILE_EXTENSIONS_OPTIONS.map(extension => (
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
