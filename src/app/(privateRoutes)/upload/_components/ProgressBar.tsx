"use client";

function Progressbar({ progress }: { progress: number }) {
  progress = Math.floor(progress);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setProgress((prevProgress) =>
  //       prevProgress < 100 ? prevProgress + 30 : 100
  //     );
  //   }, 500);

  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div className="flex h-3 w-[300px] overflow-hidden bg-purple-200 rounded-lg">
      <div
        style={{ width: `${progress}%` }}
        className="shadow-none transition-width duration-500 ease-in-out flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
      >
        <span className="text-xs font-semibold inline-block">
          {`${progress}%`}
        </span>
      </div>
    </div>
  );
}

export default Progressbar;
