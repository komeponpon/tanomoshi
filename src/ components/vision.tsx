import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Visiontext = () => {
  const handleLoop = (loopCount: number) => {
    console.log(`Just completed loop ${loopCount}`);
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <h1
        style={{
          color: '#43d9d9',
          margin: 'auto 0',
          fontWeight: 'normal',
          fontSize: '48px',
          fontFamily: 'マキナス',
          whiteSpace: 'nowrap'
        }}
      >
        リアルとデジタルの{' '}
        <span style={{ color: '#D93BCE', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
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
