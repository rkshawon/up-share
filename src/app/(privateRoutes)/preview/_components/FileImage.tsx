import Image from "next/image";
import React from "react";

function FileImage({ data }: any) {
  return (
    <div className="w-1/2 border shadow min-w-[200px] max-w-[600px] border-purple-200">
      <Image
        src={data.fileUrl}
        alt=""
        layout="responsive"
        width={600}
        height={600}
        className="rounded"
      />
    </div>
  );
}

export default FileImage;
