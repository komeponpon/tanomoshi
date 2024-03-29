import * as React from 'react';
import { Typography, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';

export default function Skills() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs')); //スマートフォン
  const isSm = useMediaQuery(theme.breakpoints.down('sm')); //タブレット
  const isMd = useMediaQuery(theme.breakpoints.up('md')); //デスクトップ

  const LanguageData = [
    { label: 'Python', image: '/images/skills/python-logo-only.svg', link: 'https://www.python.org/' },
    { label: 'TypeScript', image: '/images/skills/ts-logo-128.svg', link: 'https://www.typescriptlang.org/' },
    { label: 'JavaScript', image: '/images/skills/js.svg', link: 'https://developer.mozilla.org/ja/docs/Web/JavaScript' },
    { label: 'Dart', image: '/images/skills/dart-icon.svg', link: 'https://dart.dev/' },
  ];

  const FrameworkData = [
    { label: 'Django', image: '/images/skills/django-logo-negative.svg', link: 'https://www.djangoproject.com/' },
    { label: 'Next.js', image: '/images/skills/nextjs-icon-dark-background.svg', link: 'https://nextjs.org/' },
    { label: 'React', image: '/images/skills/react-logo.svg', link: 'https://react.dev/' },
    { label: 'Flutter', image: '/images/skills/Flutter-icon.svg', link: 'https://flutter.dev/' },
  ];

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isXs? 'repeat(2, 1fr)': isSm? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
  };

  const typographyStyle = {
    fontSize: isXs? '18px' : isSm? '18px' : '28px',
  };

  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <Typography variant='h6' style={{ ...typographyStyle, color: '#FB23FF' }}>
          Language
        </Typography>
      </div>
      <div style={gridStyle}>
        {LanguageData.map((language, index) => (
          <div key={index}>
            <a href={language.link}>
              <Image
                src={language.image}
                alt={language.label}
                width={96}
                height={96}
                style={{ cursor: 'pointer' }}
              />
            </a>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '40px', marginBottom:'40px'}}>
        <Typography variant='h6' style={{ ...typographyStyle, color: '#23F2FF' }}>
          FW/Library
        </Typography>
      </div>
      <div style={gridStyle}>
        {FrameworkData.map((framework, index) => (
          <div key={index}>
            <a href={framework.link}>
              <Image
                src={framework.image}
                alt={framework.label}
                width={96}
                height={96}
                style={{ cursor: 'pointer' }}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
