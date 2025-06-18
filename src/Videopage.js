import './Videopage.css';
import sampleVideo from './maldives.mp4';
const VideoPage = () => {
  return (
    <div className="video-container">
      <video
        src={sampleVideo}
        width="100%"
        height="400"
        autoPlay
        muted
        loop
        playsInline
        className="looped-video"
      />
    </div>
  );
};

export default VideoPage;
