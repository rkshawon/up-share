import { MouseEventHandler } from "react";

interface IButton {
  label: string;
  onClick?: MouseEventHandler;
}

function Button({ label, onClick }: IButton) {
  return (
    <button
      onClick={onClick}
      className="block w-full rounded bg-purple-600 my-5 px-6 lg:px-16 py-2.5 text-sm font-medium text-white transition hover:bg-purple-700 disabled:bg-gray-300"
    >
      {label}
    </button>
  );
}

export default Button;
