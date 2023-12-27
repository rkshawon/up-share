import { Copy } from "lucide-react";

function FileDetails({ data }: any) {
  return (
    <div className="w-1/2 ">
      <div className="relative">
        <label htmlFor="email" className=" text-sm font-semibold text-gray-500">
          Short Url
        </label>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="example link"
          className="mb-2 px-2 py-1 w-full rounded border-2 border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-50 focus:outline-none"
        />
        <Copy className="text-gray-400 absolute top-[30px] right-1.5 cursor-pointer" />
      </div>
      <>
        <div className="font-semibold flex gap-1 mt-5">
          <input type="checkbox" />
          <span>Enable Password?</span>
        </div>

        <label
          htmlFor="password"
          className=" text-sm font-semibold text-gray-500"
        >
          Password
        </label>
        <div className="mb-2 flex items-center gap-2">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password..."
            className="px-2 py-1 w-full rounded border-2 border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-50 focus:outline-none"
          />
          <button className="rounded bg-purple-600 px-3 py-[7px] text-sm font-medium text-white transition hover:bg-purple-700 disabled:bg-gray-300">
            Save
          </button>
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
      <button className="block w-full rounded bg-purple-600 my-5 px-6 lg:px-16 py-2.5 text-sm font-medium text-white transition hover:bg-purple-700 disabled:bg-gray-300">
        Send Email
      </button>
    </div>
  );
}
export default FileDetails;
