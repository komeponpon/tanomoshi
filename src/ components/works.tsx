import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
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
      name: 'コーポレートサイト(仮）',
      description: 'ポートフォリオ初めて作りました。',
      technologies: '使用技術：Next.js/TypeScript・MUI',
      image: '/images/works/tanomoshi.png',
    },

    {
      name: 'POWERWALL Booster',
      description: 'APIを定時処理させるアプリです。',
      technologies: '使用技術：Flutter/Dart',
      image: '/images/works/powerwall.png',
    },
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {projects.map((project, index) => (
          <a key={index} href={project.link} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card sx={{ maxWidth: 345, minHeight:354.87 , marginBottom: '20px',marginLeft:'60px' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  width="100%"
                  image={project.image}
                  alt={project.name}
                />
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
        ))}
      </div>
    </ThemeProvider>
  );
}
