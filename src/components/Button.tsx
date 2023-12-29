import { MouseEventHandler } from "react";

interface IButton {
  label: string;
  disable?: boolean;
  onClick?: MouseEventHandler;
}

function Button({ label, disable = false, onClick }: IButton) {
  return (
    <button
      disabled={disable}
      onClick={onClick}
      className="block w-full rounded bg-purple-600 my-5 px-6 lg:px-16 py-2.5 text-sm font-medium text-white transition hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
    >
      {label}
    </button>
  );
}

export default Button;
