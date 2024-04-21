import { FC } from "react";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { DialogDescription, DialogHeader, DialogTitle } from "../../ui/dialog";

export const FilesUploadForm: FC = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Upload a File</DialogTitle>
        <DialogDescription>
          Choose a file from your computer to upload.
        </DialogDescription>
      </DialogHeader>
      <form className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="file">File</Label>
          <Input id="file" type="file" />
        </div>
        <div className="flex gap-2">
          <Button className="w-full" type="submit">
            Upload
          </Button>
        </div>
      </form>
    </>
  );
};
