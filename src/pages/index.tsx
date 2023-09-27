import AppBarComponent from "@/ components/appbar";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        margin: 0,
      }}
    >
      <AppBarComponent/>

      {/* 背景画像 */}
      <img
        src="/images/bg.jpg" // 画像のパスを適切に設定
        alt="背景"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          maxWidth: "100%",
          display: "block",
          margin: 0,
        }}
      />
    </div>
  );
};

export default Home;
