import { FC } from "react";
import { Button } from "../../ui/button";
import Icon from "../../icon/icon";
import { FilesCardProps } from "../../../types/interfaces";

export const FilesCard: FC<FilesCardProps> = ({
  name,
  size,
  type,
  date,
  icon,
}) => {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden  hover:shadow-lg border">
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            {icon}
            <p className="font-medium text-gray-900 dark:text-gray-50 hover:underline">
              {name}
            </p>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {size}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">{type}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{date}</p>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800 px-4 py-3 flex justify-center space-x-2">
        <Button size="sm" variant="ghost">
          <Icon name="Download" className="w-4 h-4 mr-1" />
          Download
        </Button>
        <Button size="sm" variant="ghost">
          <Icon name="Share" className="w-4 h-4 mr-1" />
          Share
        </Button>

        <Button color="red" size="sm" variant="ghost">
          <Icon name="Trash" className="w-4 h-4 mr-1" />
          Delete
        </Button>
      </div>
    </div>
  );
};
