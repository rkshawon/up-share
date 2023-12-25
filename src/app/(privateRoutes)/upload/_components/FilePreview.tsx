import { X } from "lucide-react";
import Image from "next/image";

function FilePreview({ file, setFile }: any) {
  return (
    <div className="flex items-center justify-between w-full border border-purple-300 rounded mt-5 px-5 py-2">
      <div className="flex items-center">
        <Image src="/file.png" alt="" height={50} width={50} />
        <div className="ml-2">
          <p className="text-semibold">Name: {file?.name}</p>

          <p className="text-gray-500 text-xs">
            Type: {file?.type} Size: {(file?.size / 1024 / 1024).toFixed(2)}mb
          </p>
        </div>
      </div>
      <X
        className="text-red-600 cursor-pointer"
        onClick={() => setFile(null)}
      />
    </div>
  );
}

export default FilePreview;
