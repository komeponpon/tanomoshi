import * as React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Visiontext = () => {

  return (
    <div>
      <h1
        style={{ color:'#43d9d9', 
                 margin: 'auto 0', 
                 fontWeight: 'normal', 
                 fontSize:'56px',
                 fontFamily:"マキナス"
                }}
      >
        リアルとデジタルの {' '}
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
            onLoop={(loopCount: any) =>
              console.log(`Just completed loop ${loopCount}`)
            }
          />
        </span>
      </h1>
    </div>
  );
};

export default Visiontext;