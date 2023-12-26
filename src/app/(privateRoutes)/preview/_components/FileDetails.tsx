import React from "react";

function FileDetails({ data }: any) {
  return (
    <div>
      <div>
        <>
          <label
            htmlFor="email"
            className=" text-sm font-semibold text-gray-500"
          >
            Short Url
          </label>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="example link"
            className="mb-2 px-2 py-1 w-full rounded border-2 border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-50 focus:outline-none"
          />
        </>
        <>
          <label
            htmlFor="password"
            className=" text-sm font-semibold text-gray-500"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password..."
            className="mb-2 px-2 py-1 w-full rounded border-2 border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-50 focus:outline-none"
          />
        </>
        <>
          <label
            htmlFor="email"
            className=" text-sm font-semibold text-gray-500"
          >
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
      </div>
    </div>
  );
}
export default FileDetails;
