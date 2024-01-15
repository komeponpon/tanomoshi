import BasicTabs from "@/ components/tab";
import Head from "next/head";
import AppBarComponent from "@/ components/appbar";
import Visiontext from "@/ components/vision";
import WorksCard from "@/ components/works";
import { NextPage } from "next";
import { Typography } from "@mui/material";
import { title } from "process";

//import Contact from "@/ components/contact";

const text = {
  title: "タノモシ",
  description: "モダン技術を組み合わせたシステム開発を提供します。ウェブアプリからモバイルアプリまで、お客様のビジネス目標を実現するためお手伝いします。"
}

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
    <div>
      <Head>
        <title>{text.title}</title>
        <meta name="description" content={text.description}/>
      </Head>
    </div>
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
      <Typography
        variant="h6"
        style={{
        fontSize:"28px",
        color:"#9223FF",
        marginBottom:"40px"
      }}>
        Works
      </Typography>
      <WorksCard/>
    </div>
    <div id="contact"
          style={{
            width: "100%",
            padding: "30px",
            }}>
      <Typography
        variant="h6"
        style={{
        fontSize:"28px",
        color:"#9223FF",
        marginBottom:"40px",
      }}>
        Contact
      </Typography>
    </div>
  </div>
  );
};

export default Home;
