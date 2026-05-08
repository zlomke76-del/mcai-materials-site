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

      <section className="materials-panel">
        <div className="materials-header">
          <div className="materials-icon">◌</div>
          <h2>SUSTAINABLE MATERIALS</h2>
          <p>Advanced materials for a cleaner, healthier world.</p>
        </div>

        <a className="material-card" href="/materials/biosyntar">
          <img src="/images/biosyntar_hero.png" alt="BioSyntar" />
          <div>
            <h3>BioSyntar</h3>
            <p>
              Biodegradable antibacterial microfilms for food safety and
              food-contact packaging.
            </p>
          </div>
        </a>

        <a className="material-card" href="/materials/polyverdia">
          <img src="/images/polyverdia_hero.png" alt="PolyVerdia" />
          <div>
            <h3>PolyVerdia</h3>
            <p>
              Moisture-active protection for HVAC systems. Helps reduce
              microbial growth where it starts.
            </p>
          </div>
        </a>

        <a className="material-card" href="/materials/single-use-plastics">
          <img src="/images/single_use_hero.png" alt="Single-Use Plastics" />
          <div>
            <h3>Single-Use Plastics</h3>
            <p>
              Designed for performance in use and rapid end-of-life.
              Biodegradable or recyclable solutions.
            </p>
          </div>
        </a>

        <a className="material-card phantom-card" href="/materials/phantomfiber">
          <img src="/images/phantomfiber_hero.png" alt="PhantomFiber" />
          <div>
            <h3>PhantomFiber™</h3>
            <p>
              Proprietary platform technology that delivers embedded
              antibacterial performance at the material level.
            </p>
          </div>
        </a>
      </section>

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
