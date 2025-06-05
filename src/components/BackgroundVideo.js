import React, { useState } from 'react';
import styled from 'styled-components';

const VideoWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
  object-fit: cover;
`;

const FallbackWrapper = styled.div`
  background: url('/assets/VideoBackround/background.jpg') center/cover no-repeat;
  height: 100%;
  width: 100%;
`;

const BackgroundVideo = ({ children }) => {
  const [videoError, setVideoError] = useState(false);
  
  return (
    <>
      <VideoWrapper>
        {!videoError ? (
          <VideoBackground
            autoPlay
            loop
            muted
            playsInline
            onError={() => setVideoError(true)}
          >
            <source src="/assets/VideoBackround/background_video.webm" type="video/webm" />
          </VideoBackground>
        ) : (
          <FallbackWrapper />
        )}
      </VideoWrapper>
      {children}
    </>
  );
};

export default BackgroundVideo;
