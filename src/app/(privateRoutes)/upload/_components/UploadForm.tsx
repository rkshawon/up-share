import React, { useState } from "react";
import FilePreview from "./FilePreview";

function UploadForm() {
  const [file, setFile] = useState();

  const selectFile = (e: any) => {
    const data = e.target.files[0];
    if (data?.size > 2000000) {
      console.log("file size is larger");
      return;
    }
    setFile(data);
  };

  const uploadFile = () => {};

  return (
    <div className="flex flex-col items-center justify-center w-1/2">
      <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-purple-300 border-dashed rounded-lg cursor-pointer bg-purple-50 dark:hover:bg-bray-800 dark:bg-purple-700 hover:bg-purple-100 dark:border-purple-600 dark:hover:border-purple-500 dark:hover:bg-purple-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-purple-500 dark:text-purple-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 lg:text-2xl text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">
              Click to upload or drag and drop
            </span>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (max size: 2MB)
          </p>
        </div>
        <input
          onChange={selectFile}
          id="dropzone-file"
          type="file"
          className="hidden"
        />
      </label>
      {file && <FilePreview file={file} setFile={setFile} />}
      <button
        onClick={uploadFile}
        disabled={!file}
        className="block rounded-3xl bg-purple-600 my-5 px-6 lg:px-16 py-2.5 text-sm font-medium text-white transition hover:bg-purple-700 disabled:bg-gray-300"
      >
        Upload
      </button>
    </div>
  );
}

export default UploadForm;
