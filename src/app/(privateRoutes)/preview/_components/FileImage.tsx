import Image from "next/image";
import React from "react";

function FileImage({ data }: any) {
  return (
    <div className="border shadow border-purple-200 p-5 rounded flex justify-center items-center h-[90%]">
      <Image
        src={data?.fileUrl}
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
