import html2canvas from "html2canvas";

export const captureElementAsImage = async (element: HTMLElement): Promise<Blob | null> => {
  try {
    const canvas = await html2canvas(element);
    return new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"));
  } catch (err) {
    console.error("화면 캡처 실패:", err);
    return null;
  }
};
