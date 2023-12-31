"use client";

import {
  DocumentData,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { app } from "../../../../firebaseConfig";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Loader from "@/components/Loader";
import { tableHeader } from "@/Constant";
import Link from "next/link";

function File() {
  const [data, setData] = useState<DocumentData[]>([]);
  const [next, setNext] = useState(0);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { user } = useUser();
  const db = getFirestore(app);

  const getInfo = async () => {
    try {
      const userEmail = user?.primaryEmailAddress?.emailAddress;

      const q = query(
        collection(db, "upshare"),
        where("userEmail", "==", userEmail)
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const docsData = querySnapshot.docs.map((doc) => doc.data());
        const first10Data = docsData.slice(next, next + 5);
        setTotal(docsData?.length);
        setData(first10Data);
        // setData(docsData);
        setIsLoading(false);
      } else {
        setIsError(true);
        console.log("No documents found!");
      }
    } catch (error) {
      setIsError(true);
      console.error("Error getting documents: ", error);
    }
  };

  useEffect(() => {
    getInfo();
  }, [user, next]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mt-[-50px] mb-5">
      <h1 className="text-2xl xl:text-3xl font-semibold py-5 text-start">
        My Files
      </h1>
      <div className="rounded-lg border border-gray-200">
        <div className="overflow-x-auto rounded-t-lg">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead>
              <tr>
                {tableHeader.map((header) => {
                  return (
                    <th
                      key={header.id}
                      className="whitespace-nowrap px-1 sm:px-5 py-2 font-medium text-gray-900 text-start"
                    >
                      {header.name}
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {data?.map((item) => {
                return (
                  <tr key={item?.id}>
                    <td className="whitespace-nowrap px-1 sm:px-5 py-2 font-medium text-gray-900">
                      {item.fileName.length > 10
                        ? `${item.fileName.substring(0, 10)}...`
                        : item.fileName}
                    </td>

                    <td className="whitespace-nowrap px-1 sm:px-5 py-2 text-gray-700">
                      {item.fileType}
                    </td>
                    <td className="whitespace-nowrap px-1 sm:px-5 py-2 text-gray-700">
                      {(item.fileSize / 1000 / 1000).toFixed(2)}mb
                    </td>
                    <td className="whitespace-nowrap px-1 sm:px-5 py-2">
                      <Link
                        href={`/preview/${item?.id}`}
                        className="inline-block rounded bg-purple-600 px-4 py-2 text-xs font-medium text-white hover:bg-purple-700"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
          <ol className="flex justify-end gap-5 text-xs font-medium">
            <li>
              <button
                onClick={() => next >= 0 && setNext(next - 5)}
                disabled={next === 0}
                className="flex h-8 disabled:cursor-not-allowed disabled:bg-gray-500 items-center justify-center rounded border border-gray-100 bg-purple-600 hover:bg-purple-700 transition-all text-white"
              >
                <span className="px-2">Prev</span>
              </button>
            </li>

            <li>
              <button
                onClick={() => next <= total - 5 && setNext(next + 5)}
                disabled={next >= total - 5}
                className="flex disabled:cursor-not-allowed disabled:bg-gray-500 h-8 items-center justify-center rounded border border-gray-100 bg-purple-600 hover:bg-purple-700 transition-all text-white"
              >
                <span className="px-2">Next</span>
              </button>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default File;
