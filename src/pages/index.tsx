import AppBarComponent from "@/ components/appbar";
import Visiontext from "@/ components/vision";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: "url('/images/bg.jpg')", // 背景画像のパス
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        margin: 0,
        position: "relative",
      }}
    >
      <AppBarComponent />
      <Visiontext />
    </div>
  );
};

export default Home;
