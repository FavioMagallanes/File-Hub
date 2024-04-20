import { FC } from "react";
import { Button } from "../ui/button";
import Icon from "../icon/icon";

export const FilesCard: FC = () => {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden transition-all duration-100 ease-in-out hover:shadow-lg hover:scale-105 hover:border">
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Icon
              name="File"
              className="w-6 h-6 mr-2 text-gray-500 dark:text-gray-400"
            />
            <p className="font-medium text-gray-900 dark:text-gray-50 hover:underline">
              document.pdf
            </p>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            2.3 MB
          </span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            PDF Document
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">12-09-2021</p>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800 px-4 py-3 flex justify-center space-x-2">
        <Button
          size="sm"
          variant="outline"
          className="group hover:text-gray-600"
        >
          <Icon
            name="Download"
            className="w-4 h-4 mr-1 group-hover:text-green-500"
          />
          Download
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="group hover:text-gray-600"
        >
          <Icon
            name="File"
            className="w-4 h-4 mr-1 group-hover:text-blue-300"
          />
          Edit name
        </Button>
        <Button
          color="red"
          size="sm"
          variant="outline"
          className="group hover:text-gray-600"
        >
          <Icon
            name="Trash"
            className="w-4 h-4 mr-1 group-hover:text-red-300"
          />
          Delete
        </Button>
      </div>
    </div>
  );
};
