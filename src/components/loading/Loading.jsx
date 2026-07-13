import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loading = ({ isLoading = true }) => {
  if (!isLoading) return null;

  // Keshda qolib ketmasligi uchun havola oxiriga vaqt tamg'asi (timestamp) qo'shamiz
  const lottieUrl = `https://lottie.host/187a5cbd-5753-4b7c-a027-d6c0c1111756/B1xfukClm1.lottie?v=${new Date().getTime()}`;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0, // top: 0, left: 0, right: 0, bottom: 0 degani (eng toza usul)
        width: '100vw',
        height: '100vh',
        backgroundColor: 'white',
        zIndex: 999999, // Footer yoki boshqa elementlar ustiga chiqishi uchun
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <DotLottieReact
        src={lottieUrl}
        loop
        autoplay
        style={{
          width: '250px',
          height: '250px',
        }}
      />
    </div>
  );
};

export default Loading;