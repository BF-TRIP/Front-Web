import { useEffect, useState } from "react";
import { getUserFromURL } from "@shared/utils/get-user-from-url";
import HeaderSection from "../components/header-section/header-section";
import RecommendSection from "../components/recommend-section/recommend-section";
import NearbySection from "../components/nearby-section/nearby-section";

const Home = () => {
  const [user, setUser] = useState(() => getUserFromURL());

  useEffect(() => {
    const userData = getUserFromURL();
    if (userData) {
      setUser(userData);
    }
  }, []);

  return (
    <>
      <HeaderSection />
      <RecommendSection 
        userNumber={user?.userNumber || 32} 
        userName={user?.userName || "모행"} 
      />
      <NearbySection 
        gpsX={user?.gpsX || 128.1} 
        gpsY={user?.gpsY || 36.1} 
        userNumber={user?.userNumber || 32} 
      />
    </>
  );
};

export default Home;
