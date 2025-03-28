import { useState } from "react";
export function useClipboard(timeout = 1500) {
  const [copied, setCopied] = useState(false);

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
      return true;
    } catch (err) {
      console.error("Copy failed:", err);
      return false;
    }
  };

  return { copied, copy };
}
