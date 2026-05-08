"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.45;
    }
  }, []);

  return (
    <main className="global-gpi-poster">
      <img
        src="/images/background_image.png"
        alt="Global GPI Background"
        className="global-gpi-image"
      />

      <div className="earth-video-wrap">
        <video
          ref={videoRef}
          className="earth-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/earth_01.mp4" type="video/mp4" />
        </video>

        <img
          src="/images/overlay_video.png"
          alt=""
          className="earth-overlay"
        />
      </div>
    </main>
  );
}
