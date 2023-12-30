"use client";

import UploadForm from "@/app/(privateRoutes)/upload/_components/UploadForm";

function Upload() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-2xl xl:text-3xl font-semibold py-5 text-center">
        Start <strong className="text-purple-600">Uploading</strong> file and
        <strong className="text-purple-600"> Share </strong> it
      </h1>
      <UploadForm />
    </div>
  );
}

export default Upload;
