import React, { useRef, useState } from 'react';

function Home() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      if (!videoRef.current.muted) {
        videoRef.current.volume = 0.6;
      }
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current && videoRef.current.muted) {
      videoRef.current.muted = false;
      videoRef.current.volume = 0.6;
      setIsMuted(false);
    }
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onClick={handleVideoClick}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/media/hero-original.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
      <div className="video-controls">
        <button onClick={togglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={toggleMute}>
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
      </div>
    </div>
  );
}

export default Home;