import { useState } from "react";

export const useToast = () => {
  const [toast, setToast] = useState<{ message: string; type: "success" | "cancel" } | null>(null);

  const showToast = (message: string, type: "success" | "cancel") => {
    setToast({ message, type });

    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  return { toast, showToast };
};
