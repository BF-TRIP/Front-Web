export const getUserFromURL = () => {
  const params = new URLSearchParams(window.location.search);
  const userNumber = params.get("userNumber");
  const userName = params.get("userName");
  const gpsX = params.get("gpsX");
  const gpsY = params.get("gpsY");

  if (!userNumber || isNaN(Number(userNumber))) {
    console.error("userNumber가 올바르지 않습니다:", userNumber);
    return null;
  }

  return {
    userNumber: Number(userNumber),
    userName: userName || "알 수 없음",
    gpsX: gpsX ? Number(gpsX) : null,
    gpsY: gpsY ? Number(gpsY) : null,
  };
};
