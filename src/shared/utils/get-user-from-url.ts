export const getUserFromURL = () => {
  const params = new URLSearchParams(window.location.search);
  const userNumber = params.get("userNumber");
  const userName = params.get("userName");
  const gpsX = params.get("gpsX");
  const gpsY = params.get("gpsY");

  if (userNumber && !isNaN(Number(userNumber))) {
    // URL에 정보가 있을 때는 localStorage에 저장
    const userData = {
      userNumber: Number(userNumber),
      userName: userName || "알 수 없음",
      gpsX: gpsX ? Number(gpsX) : null,
      gpsY: gpsY ? Number(gpsY) : null,
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    return userData;
  }

  // URL에 정보가 없을 경우 localStorage에서 불러오기
  const saved = localStorage.getItem("be-trip-user");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("localStorage 파싱 실패:", e);
    }
  }

  // 아예 정보가 없을 경우
  console.error("userNumber를 URL과 localStorage 모두에서 찾을 수 없습니다.");
  return null;
};
