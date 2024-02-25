import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { Typography, useTheme, useMediaQuery } from '@mui/material';

import BasicTabs from '@/ components/tab';
import AppBarComponent from '@/ components/appbar';
import Visiontext from '@/ components/vision';
import WorksCard from '@/ components/works';

const text = {
  title: "タノモシ",
  description: "モダン技術を組み合わせたシステム開発を提供します。"
};

const Home: NextPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      backgroundColor: "#121212"
    }}>
      <Head>
        <title>{text.title}</title>
        <meta name="description" content={text.description} />
      </Head>
      <div style={{
        width: "100%",
        height: "100vh",
        backgroundImage: "url('/images/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}>
        <AppBarComponent />
        <Visiontext />
      </div>
      <div id="about" style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#121212"
      }}>
        <BasicTabs />
      </div>
      <div id="works" style={{
        padding: isMobile ? "30px" : "60px",
      }}>
        <Typography variant="h6" style={{
          fontSize: isMobile ? "20px" : "28px",
          color: "#9223FF",
          marginBottom: "40px"
        }}>
          Works
        </Typography>
        <WorksCard />
      </div>
      <div id="contact" style={{
        width: "100%",
        padding: isMobile ? "20px" : "30px",
      }}>
        <Typography variant="h6" style={{
          fontSize: isMobile ? "20px" : "28px",
          color: "#9223FF",
          marginBottom: "40px",
        }}>
          Contact
        </Typography>
      </div>
    </div>
  );
};

export default Home;
