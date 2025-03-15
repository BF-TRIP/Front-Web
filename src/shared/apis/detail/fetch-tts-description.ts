import { api } from "../config/instance";

export const fetchTtsDescription = async (imageBlob: Blob): Promise<string | null> => {
  try {
    const formData = new FormData();
    formData.append("image", imageBlob, "capture.png");

    const response = await api.post<string>("/api/image", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data;
  } catch (err) {
    console.error("TTS API 요청 중 오류 발생:", err);
    return null;
  }
};
