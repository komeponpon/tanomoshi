import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useTheme, useMediaQuery } from '@mui/material';

const Visiontext = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}>
      <h1 style={{
        color: '#43d9d9',
        margin: 'auto 0',
        fontWeight: 'normal',
        fontSize: isMobile ? '20px' : '48px', // スマホ時は16px、それ以外は48px
        fontFamily: 'マキナス',
        whiteSpace: 'nowrap'
      }}>
        リアルとバーチャルの{' '}
        <span style={{ color: '#D93BCE', fontWeight: 'bold' }}>
          <Typewriter
            loop
            cursor
            cursorStyle='_'
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
            words={['境界線をなくす', '融合']}
          />
        </span>
      </h1>
    </div>
  );
};

export default Visiontext;
