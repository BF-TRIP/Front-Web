import { useState } from "react";
import { captureElementAsImage } from "@shared/utils/capture";
import { fetchTtsDescription } from "@shared/apis/detail/fetch-tts-description";

export const useTTS = () => {
  const [ttsLoading, setTtsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTtsToggle = async (element: HTMLElement) => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    setTtsLoading(true);

    try {
      const imageBlob = await captureElementAsImage(element);
      if (!imageBlob) throw new Error("이미지 캡처 실패");

      const descriptionText = await fetchTtsDescription(imageBlob);
      if (!descriptionText) throw new Error("TTS 변환 실패");

      const utterance = new SpeechSynthesisUtterance(descriptionText);
      utterance.lang = "ko-KR";
      window.speechSynthesis.speak(utterance);

      setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
    } catch (err) {
      console.error("TTS 처리 중 오류 발생:", err);
    } finally {
      setTtsLoading(false);
    }
  };

  return { ttsLoading, isPlaying, handleTtsToggle };
};
