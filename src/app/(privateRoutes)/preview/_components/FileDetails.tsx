"use client";

import Button from "@/components/Button";
import { doc, updateDoc } from "firebase/firestore";
import { Copy, Check } from "lucide-react";
import { useCallback, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function FileDetails({ data, id, db }: any) {
  const [enablePassField, setEnablePassField] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const handlePassword = async () => {
    const docRef = doc(db, "upshare", id);
    await updateDoc(docRef, { password })
      .then((res) => {
        toast.success("Password saved successfully.");
      })
      .catch((err) => {
        toast.error("Failed to save password.");
      });
  };

  const handleSendEmail = async (e: any) => {
    e.preventDefault();
    await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fileType: data?.fileType,
        fileName: data?.fileName,
        userName: data?.userName,
        shortUrl: data?.shortUrl,
      }),
    })
      .then((res) => {
        toast.success("Email sent successfully.");
        console.log(res);
      })
      .catch((err) => {
        toast.error("Failed to send email.");
        console.log(err);
      });
  };

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(data?.shortUrl);
    setCopied(true);
    const timeoutId = setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="lg:w-1/2 min-w-[40%] lg:max-w-[500px]">
      <div className="relative">
        <label htmlFor="email" className=" text-sm font-semibold text-gray-500">
          Short Url
        </label>
        <input
          type="text"
          name="text"
          id="text"
          placeholder={data?.shortUrl || "file url..."}
          className="mb-2 px-2 py-1 w-full rounded border-2 border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-50 focus:outline-none"
        />
        {copied ? (
          <Check className="text-green-500 absolute top-[30px] right-1.5 cursor-pointer bg-white" />
        ) : (
          <Copy
            onClick={handleCopy}
            className="text-gray-400 absolute top-[30px] right-1.5 cursor-pointer bg-white"
          />
        )}
      </div>
      <>
        <div className="font-semibold flex gap-1 mt-5">
          <input
            type="checkbox"
            placeholder="."
            onClick={() => setEnablePassField(!enablePassField)}
          />
          <span>Enable Password?</span>
        </div>

        <div
          className={`mb-2 transition-all ${
            enablePassField ? "h-[60px]" : "h-[0px] "
          }`}
        >
          <label
            htmlFor="password"
            className={`${
              !enablePassField && "hidden"
            } text-sm font-semibold text-gray-500`}
          >
            Password
          </label>
          <div className="mb-2 flex items-center gap-2">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="password..."
              className={`${
                !enablePassField && "hidden"
              } px-2 py-1 w-full rounded border-2 border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-50 focus:outline-none`}
            />
            <button
              onClick={handlePassword}
              className={`${
                !enablePassField && "hidden"
              } rounded bg-purple-600 px-3 py-[7px] text-sm font-medium text-white transition hover:bg-purple-700 disabled:bg-gray-300`}
            >
              Save
            </button>
          </div>
        </div>
      </>
      <>
        <label htmlFor="email" className=" text-sm font-semibold text-gray-500">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@email.com"
          className="mb-2 px-2 py-1 w-full rounded border-2 border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-50 focus:outline-none"
        />
      </>
      {/* <button className="block w-full rounded bg-purple-600 my-5 px-6 lg:px-16 py-2.5 text-sm font-medium text-white transition hover:bg-purple-700 disabled:bg-gray-300">
        Send Email
      </button> */}
      <Button onClick={handleSendEmail} label="Send Email" />
      <Toaster position="bottom-right" />
    </div>
  );
}
export default FileDetails;
