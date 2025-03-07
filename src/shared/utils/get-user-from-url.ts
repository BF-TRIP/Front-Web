export const getUserFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    const userNumber = params.get("userNumber");
    const userName = params.get("userName");
    const gpsX = params.get("gpsX");
    const gpsY = params.get("gpsY");
  
    if (!userNumber || !userName || !gpsX || !gpsY) {
      console.error("URL 파라미터에서 유저 정보를 찾을 수 없습니다.");
      return null;
    }
  
    return {
      userNumber: Number(userNumber),
      userName,
      gpsX: Number(gpsX),
      gpsY: Number(gpsY),
    };
  };
  