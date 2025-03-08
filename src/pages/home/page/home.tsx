import { useEffect, useState } from "react";
import { getUserFromURL } from "@shared/utils/get-user-from-url";
import HeaderSection from "../components/header-section/header-section";
import RecommendSection from "../components/recommend-section/recommend-section";
import NearbySection from "../components/nearby-section/nearby-section";

const Home = () => {
  const [user, setUser] = useState<{ userNumber: number; userName: string; gpsX: number; gpsY: number } | null>(null);

  useEffect(() => {
    const userData = getUserFromURL();
    if (userData) {
      setUser(userData);
    }
  }, []);

  if (!user) {
    return (
      <>
        <HeaderSection />
        <RecommendSection userNumber={32} userName="모행" />
        <NearbySection gpsX={128.1} gpsY={36.1} />
      </>
    );
  }

  return (
    <>
      <HeaderSection />
      <RecommendSection userNumber={user.userNumber} userName={user.userName} />
      <NearbySection gpsX={user.gpsX} gpsY={user.gpsY} />
    </>
  );
};

export default Home;
