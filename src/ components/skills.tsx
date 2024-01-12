import * as React from 'react';
import { Typography } from '@mui/material';
import Image from 'next/image';

export default function Skills() {
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
    gridTemplateColumns: 'repeat(4, 1fr)',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <Typography variant='h6' style={{ fontSize: '28px', color: '#FB23FF' }}>
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
      <div style={{ padding: '40px' }}>
        <Typography variant='h6' style={{ fontSize: '28px', color: '#23F2FF' }}>
          Framework/Library
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
