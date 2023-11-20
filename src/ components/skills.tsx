import * as React from 'react';
import { Typography } from '@mui/material';

export default function Skills() {
  const LanguageData = [
    { label: 'Python', image: 'images/skills/python-logo-only.svg', link: 'https://www.python.org/' },
    { label: 'TypeScript', image: 'images/skills/ts-logo-128.svg', link: 'https://www.typescriptlang.org/' },
    { label: 'JavaScript', image: 'images/skills/js.svg', link: 'https://developer.mozilla.org/ja/docs/Web/JavaScript' },
    { label: 'Dart', image: 'images/skills/dart-icon.svg', link: 'https://dart.dev/' },
  ];

  const FrameworkData = [
    { label: 'Django', image: 'images/skills/django-logo-negative.svg', link: 'https://www.djangoproject.com/' },
    { label: 'Next.js', image: 'images/skills/nextjs-icon-dark-background.svg', link: 'https://nextjs.org/' },
    { label: 'React', image: 'images/skills/react-logo.svg', link: 'https://react.dev/' },
    { label: 'Flutter', image: 'images/skills/Flutter-icon.svg', link: 'https://flutter.dev/' },
  ];

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    justifyContent:'center',
    alignItems:'center'
  };

  return (
    <div>
      <div style={{ padding: '40px' }}>
        <Typography style={{ fontSize: '36px', color: '#FB23FF' }}>
          Language
        </Typography>
      </div>
      <div style={gridStyle}>
        {LanguageData.map((language, index) => (
          <div key={index}>
            <a href={language.link}>
              <img src={language.image} alt={language.label} style={{ height: '128px', cursor: 'pointer' }} />
            </a>
          </div>
        ))}
      </div>
      <div style={{ padding: '40px' }}>
        <Typography style={{ fontSize: '36px', color: '#23F2FF' }}>
          Framework/Library
        </Typography>
      </div>
      <div style={gridStyle}>
        {FrameworkData.map((framework, index) => (
          <div key={index}>
            <a href={framework.link}>
              <img src={framework.image} alt={framework.label} style={{ height: '128px', cursor: 'pointer' }} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
