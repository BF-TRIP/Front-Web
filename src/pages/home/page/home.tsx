import { useEffect, useState } from "react";
import { getUserFromURL } from "@shared/utils/get-user-from-url";
import HeaderSection from "../components/header-section/header-section";
import RecommendSection from "../components/recommend-section/recommend-section";
import NearbySection from "../components/nearby-section/nearby-section";

const Home = () => {
  const [user, setUser] = useState<{ userNumber: number; userName: string; gpsX: number; gpsY: number } | null>(null);

  useEffect(() => {
    const userInfo = getUserFromURL();
    if (userInfo) {
      setUser(userInfo);
    }
  }, []);

  if (!user) return <div>유저 정보를 불러오는 중...</div>; // 로딩 ui 필요할 듯

  return (
    <>
      <HeaderSection />
      <RecommendSection userNumber={user.userNumber} userName={user.userName} />
      <NearbySection gpsX={user.gpsX} gpsY={user.gpsY} />
    </>
  );
};

export default Home;
