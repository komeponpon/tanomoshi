import * as React from 'react';
import { Typography } from '@mui/material';

export default function About() {
  const ProfileImage = { label: 'profile', image: 'images/profile.jpg' };

  return (
    <div>
      <div>
        <Typography
          variant='h6'
          style={{ fontSize: '28px', color: '#9223FF', marginBottom: '40px' }}
        >
          About Me
        </Typography>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* プロフィール画像 */}
        <div>
          <img
            src={ProfileImage.image}
            alt={ProfileImage.label}
            style={{ height: 354.87, borderRadius: '4px', marginRight: '16px' }}
          />
        </div>

        {/* 経歴のテキスト */}
        <div>
          <Typography
            variant='body1'
            style={{ color: 'white', textAlign: 'left' , marginLeft: '16px'}}>
              1997年、山梨県富士河口湖町生まれ。<br/>
              <br/>
              大学卒業後、某電話会社へ入社し、ビジネスホンやNW環境のコンサルティング営業を担当。企業だけでなく官公庁のDXコンサルティングやプロジェクトマネジメント業務にも従事。<br/>
              現在は太陽光発電システム販売会社にてバックオフィス全般とシステム開発を担当。<br/><br/>
              趣味：ポーカー/スノーボード/阿波踊り<br/>
              好きな食べ物：杏仁豆腐<br/>
              好きな飲み物：ウイスキー/ドクターペッパー<br/>

          </Typography>
        </div>
      </div>
    </div>
  );
}
