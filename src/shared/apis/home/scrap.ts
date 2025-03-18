import { api } from "../config/instance";

interface ScrapRequest {
  userNumber: number;
  contentId: number;
}

export const saveScrap = async ({ userNumber, contentId }: ScrapRequest) => {
  try {
    const response = await api.post("/api/course/save", { userNumber, contentId });
    return response.data;
  } catch (error) {
    console.error("스크랩 저장 실패:", error);
    throw error;
  }
};

export const deleteScrap = async ({ userNumber, contentId }: ScrapRequest) => {
  try {
    const response = await api.delete(`/api/course/save/${userNumber}/${contentId}`);
    return response.data;
  } catch (error) {
    console.error("스크랩 삭제 실패:", error);
    throw error;
  }
};

export const fetchSavedScraps = async (userNumber: number): Promise<number[]> => {
  try {
    const response = await api.get<{ contentId: number }[]>(`/api/course/save/${userNumber}`);
    return response.data.map((item) => item.contentId);
  } catch (error) {
    console.error("스크랩 목록 가져오기 실패:", error);
    return [];
  }
};
