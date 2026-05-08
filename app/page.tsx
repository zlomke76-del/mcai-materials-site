export default function Home() {
  return (
    <main className="global-gpi-poster">
      <img
        src="/images/background_image.png"
        alt="Global GPI Background"
        className="global-gpi-image"
      />

      <div className="earth-video-wrap">
        <video
          className="earth-video"
          autoPlay
          muted
          loop
          playsInline
          ref={(video) => {
            if (video) {
              video.playbackRate = 0.45;
            }
          }}
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
