import { useState } from "react";

export const useClipboard = (text: string, onCopySuccess?: () => void) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      onCopySuccess?.();
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("주소 복사 실패:", err);
    }
  };

  return { copySuccess, copyToClipboard };
};
