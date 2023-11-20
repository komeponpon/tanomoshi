import BasicTabs from "@/ components/tab";
import AppBarComponent from "@/ components/appbar";
import Visiontext from "@/ components/vision";
import WorksCard from "@/ components/works";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div
    style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      backgroundColor: "#121212"
    }}
  >
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: "url('/images/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <AppBarComponent />
      <Visiontext />
    </div>
    {/* 新しい領域を追加 */}
    <div id="about"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: "#121212"
          }}>
      <BasicTabs/>
    </div>
    <div id="works"
          style={{
            padding: "60px",
            }}>
      <p
      style={{
        fontSize:"36px",
        color:"#9223FF"
      }}>
        Works
      </p>
      <WorksCard/>
    </div>
    <div id="contact"
          style={{
            padding: "30px",
            }}>
      <p
      style={{
        fontSize:"36px",
        color:"#9223FF"
      }}>
        Contact
      </p>
    </div>
  </div>
  );
};

export default Home;
