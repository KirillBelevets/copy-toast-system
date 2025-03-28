"use client";
import { useClipboard } from "../hooks/useClipboard";
import { useToast } from "../context/ToastContext";

export default function CopyButton({ text }) {
  const { copy, copied } = useClipboard();
  const { showToast } = useToast();

  const handleClick = async () => {
    if (!text) {
      showToast("Nothing to show");
      return;
    }

    const success = await copy(text);

    if (success) {
      showToast("Copied to clipboard");
    } else {
      showToast("Failed to copy");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        copied
          ? "bg-green-600 text-white hover:bg-green-700"
          : "bg-blue-600 text-white hover:bg-blue-700"
      } px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition`}
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
