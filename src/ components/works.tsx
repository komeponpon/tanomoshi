import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define a dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Change this to your desired primary color
    },
  },
});

export default function WorksCard() {
  const projects = [
    {
      name: 'スキアリ',
      description: '飲食店のリアルタイム空席確認サービス',
      technologies: '使用技術：React/TypeScript・Laravel/PHP',
      image: '/images/works/sukiari.jpg',
      link: 'https://sukiari.jp',
    },
    // Add two more projects here
    {
      name: 'POWERWALL Booster',
      description: 'APIを定時処理させるアプリです。',
      technologies: '使用技術：Flutter/Dart',
      image: '/images/works/powerwall.png',
      link: 'https://play.google.com/store/apps/details?id=sisirelease.powerwall_booster&pcampaignid=web_share',
    },
    {
      name: 'ECサイト',
      description: 'Anker製品のオンラインショップです。',
      technologies: '使用技術：Shopify/GemPages',
      image: '/images/works/anker.sisolar.co.jp.png',
      link: 'https://anker.sisolar.co.jp',
    },
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <Grid container spacing={5} justifyContent="space-around">
        {projects.map((project, index) => (
          <Grid item key={index}>
            <a href={project.link} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card sx={{ maxWidth: 345, minHeight: 354.87, marginBottom: '20px' }}>
                <CardActionArea>
                  <CardMedia component="img" width="100%" image={project.image} alt={project.name} />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" fontWeight="bold">
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.technologies}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </a>
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
}
