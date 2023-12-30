"use client";

import { DocumentData, doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { app } from "../../../../../firebaseConfig";

import FileImage from "../_components/FileImage";
import FileDetails from "../_components/FileDetails";
import { ChevronLeftCircle } from "lucide-react";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";

function Preview({ params }: { params: { id: string } }) {
  const [data, setData] = useState<DocumentData>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const db = getFirestore(app);
  const router = useRouter();

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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center max-w-[2100px]">
      <div
        onClick={() => router.back()}
        role="button"
        className="font-semibold w-full flex justify-start items-center gap-1"
      >
        <ChevronLeftCircle color="#7c3aed" />
        <span> Go Back</span>
      </div>
      <div className="flex flex-col lg:flex-row justify-center mt-5 gap-20 w-full">
        <FileImage data={data} />
        <FileDetails data={data} id={params?.id} db={db} />
      </div>
    </div>
  );
}

export default Preview;
