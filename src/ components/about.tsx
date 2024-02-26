import * as React from 'react';
import { Typography, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';

export default function About() {
  const ProfileImage = { label: 'profile', image: '/images/profile.jpg' };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Typography
        variant='h6'
        style={{
          fontSize: isMobile ? '18px' : '28px', // モバイル時はフォントサイズを小さくする
          color: '#9223FF',
          marginBottom: '40px',
          textAlign: 'center', // モバイル時は中央寄せにするかもしれない
        }}
      >
        About Me
      </Typography>

      <div style={{
  display: 'flex',
  flexDirection: isMobile ? 'column' : 'row', // モバイル時は縦配置にする
  alignItems: isMobile ? 'center' : 'flex-start', // モバイル時は中央寄せ、デスクトップ時は左揃え
  textAlign: isMobile ? 'center' : 'left', // モバイル時はテキストを中央寄せにする
}}>
  <div style={{ marginBottom: isMobile ? '16px' : '0', display: 'flex', justifyContent: 'center' }}>
    <Image
      src={ProfileImage.image}
      alt={ProfileImage.label}
      width={isMobile ? 200 : 266} // モバイル時は画像サイズを小さくする
      height={isMobile ? 282 : 354}
      style={{ borderRadius: '4px' }}
    />
  </div>

  <div style={{
    maxWidth: isMobile ? '300px' : '600px', // テキストブロックの最大幅を設定
    width: '100%',
    margin: isMobile ? '0 auto' : '0',
  }}>
    <Typography
      variant='body1'
      style={{
        color: 'white',
        fontSize: isMobile ? '14px' : '16px', // モバイル時とデスクトップ時でフォントサイズを調整
        lineHeight: '1.6', // 行間を広げる
        letterSpacing: '0.00938em', // 文字間隔を調整
        marginLeft: isMobile ? '0' : '16px', // モバイル時は左マージンを無くす
        marginRight: isMobile ? '0' : '16px', // モバイル時は右マージンを無くす
        padding: isMobile ? '0 10px' : '0', // モバイル時にはサイドパディングをさらに減らす
        textAlign: isMobile ? 'justify' : 'justify', // デスクトップ時は両端揃えで読みやすくする
      }}
    >
      1997年、山梨県富士河口湖町生まれ。<br/>
      大学卒業後、某電話会社へ入社し、ビジネスホンやNW環境のコンサルティング営業を担当。企業だけでなく官公庁のDXコンサルティングやプロジェクトマネジメント業務にも従事。<br/>
      現在は太陽光発電システム販売会社にてバックオフィス全般とシステム開発を担当。<br/><br/>
      趣味：ポーカー/スノーボード/阿波踊り<br/>
      好きな食べ物：杏仁豆腐<br/>
      好きな飲み物：ドクターペッパー<br/>
    </Typography>
  </div>
</div>

    </div>
  );
}
