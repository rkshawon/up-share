"use client";

import UploadForm from "@/app/(privateRoutes)/upload/_components/UploadForm";

function Upload() {
  return (
    <div className="flex flex-col justify-center items-center p-10 my-5">
      <h2 className="text-3xl font-semibold py-5">
        Start <strong className="texts-purple-600">Uploading</strong> file and
        <strong className="text-purple-600"> Share </strong> it
      </h2>
      <UploadForm />
    </div>
  );
}

export default Upload;
