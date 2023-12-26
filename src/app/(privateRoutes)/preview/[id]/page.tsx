"use client";

import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { app } from "../../../../../firebaseConfig";
import Link from "next/link";
import FileImage from "../_components/FileImage";
import FileDetails from "../_components/FileDetails";

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
    <div className="flex flex-col justify-center items-center p-10 my-5">
      <Link href="/upload" className=" font-semibold">
        Go to upload
      </Link>
      <div className="flex flex-col justify-center items-center p-5">
        <FileImage data={data} />
        <FileDetails data={data} />
      </div>
    </div>
  );
}

export default Preview;
