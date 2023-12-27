"use client";

import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { app } from "../../../../../firebaseConfig";
import Link from "next/link";
import FileImage from "../_components/FileImage";
import FileDetails from "../_components/FileDetails";
import { ChevronLeftCircle } from "lucide-react";

function Preview({ params }: { params: { id: string } }) {
  const [data, setData] = useState({});
  const db = getFirestore(app);

  const getInfo = async () => {
    const docRef = doc(db, "upshare", params?.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const file = docSnap.data();
      setData(file);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    params?.id && getInfo();
  }, []);

  return (
    <div className="flex flex-col items-center p-20 my-5 max-w-[2100px]">
      <Link
        href="/upload"
        className="font-semibold w-full flex justify-start items-center gap-1"
      >
        <ChevronLeftCircle color="#7c3aed" />
        <span> Go to upload</span>
      </Link>
      <div className="flex justify-center mt-5 gap-20">
        <FileImage data={data} />
        <FileDetails data={data} />
      </div>
    </div>
  );
}

export default Preview;
