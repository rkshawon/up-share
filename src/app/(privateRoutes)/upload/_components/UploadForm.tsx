import React, { useState } from "react";
import FilePreview from "./FilePreview";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../../../../firebaseConfig";
import ProgressBar from "./ProgressBar";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useUser } from "@clerk/nextjs";
import generateRandomString from "@/utils/randomString";
import { useRouter } from "next/navigation";

function UploadForm() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const storage = getStorage(app);
  const db = getFirestore(app);
  const { user } = useUser();
  const route = useRouter();

  const selectFile = (e: any) => {
    const data = e.target.files[0];
    if (data?.size > 2000000) {
      console.log("file size is larger");
      return;
    }

    setFile(data);
    e.target.value = null;
  };

  const uploadFile = (file: any) => {
    const storageRef = ref(storage, "upshare/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file.type);

    uploadTask.on("state_changed", (snapshot) => {
      const fileProgress =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

      setProgress(fileProgress);
      console.log("Upload is " + fileProgress + "% done");

      fileProgress == 100 &&
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            console.log("File available at", downloadURL);
            saveFile(file, downloadURL);
          })
          .catch((err) => {
            setFile(null);
            setProgress(0);
            console.log(err);
          });
    });
    // setFile(null);
  };

  const saveFile = async (file: any, downloadURL: string) => {
    const docId = generateRandomString();

    await setDoc(doc(db, "upshare", docId), {
      id: docId,
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      fileUrl: downloadURL,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      password: "",
      shortUrl: "http://localhost:3000/upload" + docId,
    })
      .then((res) => {
        console.log(res);
        route.push("/preview/" + docId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center w-1/2 mt-5">
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
        onClick={() => uploadFile(file)}
        disabled={!file}
        className="block rounded-3xl bg-purple-600 my-5 px-6 lg:px-16 py-2.5 text-sm font-medium text-white transition hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Upload
      </button>
      {progress > 0 && file && <ProgressBar progress={progress} />}
    </div>
  );
}

export default UploadForm;
