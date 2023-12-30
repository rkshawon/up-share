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
        setData(docsData);
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
  }, [user]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="rounded-lg border border-gray-200">
        <div className="overflow-x-auto rounded-t-lg">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                {tableHeader.map((header) => {
                  return (
                    <th
                      key={header.id}
                      className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start"
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
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {item.fileName.length > 10
                        ? `${item.fileName.substring(0, 10)}...`
                        : item.fileName}
                    </td>

                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {item.fileType}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {(item.fileSize / 1000 / 1000).toFixed(2)}mb
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      <Link
                        href={item?.shortUrl}
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
          <ol className="flex justify-end gap-1 text-xs font-medium">
            <li>
              <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span className="sr-only">Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                1
              </a>
            </li>

            <li className="block h-8 w-8 rounded border-purple-600 bg-purple-600 text-center leading-8 text-white">
              2
            </li>

            <li>
              <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                3
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                4
              </a>
            </li>

            <li>
              <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span className="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default File;
