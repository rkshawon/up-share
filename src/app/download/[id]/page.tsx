"use client";

import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import { DocumentData, doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import { app } from "../../../../firebaseConfig";

function Download({ params }: { params: { id: string } }) {
  const [data, setData] = useState<DocumentData>();
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const db = getFirestore(app);

  const getInfo = async () => {
    const docRef = doc(db, "upshare", params?.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const file = docSnap.data();
      setData(file);
      setIsLoading(false);
    } else {
      setIsError(true);
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    params?.id && getInfo();
  }, []);

  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = data?.fileUrl || "";
    anchor.download = data?.fileName || "downloaded-file";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen m-w-[380px] px-2">
      <Image src="/logo.png" alt="" height={100} width={150} />
      <div className="border shadow rounded text-center flex flex-col items-center p-5 mt-5">
        <h2 className="font-semibold text-2xl mb-1">
          <span className="text-purple-600">{data?.userName}</span> Shared file
          with you
        </h2>
        <p className="text-gray-500 text-xs mb-5">Get file details below</p>
        <Image src="/download.gif" alt="" width={100} height={100} />
        <div className="ml-3 mt-5 mb-3 text-start">
          <p className="text-semibold">Name: {data?.fileName}</p>
          <p className="text-gray-500 text-xs">Type: {data?.fileType}</p>
          <p className="text-gray-500 text-xs">
            Size: {(data?.fileSize / 1024 / 1024).toFixed(2)}mb
          </p>
        </div>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          placeholder="Enter password..."
          className={`px-2 py-1 w-full rounded border-2 border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-50 focus:outline-none`}
        />
        <Button
          disable={password === data?.password ? false : true}
          label="Download"
          onClick={handleDownload}
        />
      </div>
    </div>
  );
}

export default Download;
