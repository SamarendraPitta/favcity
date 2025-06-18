import './Videopage.css';

const VideoPage = () => {
  return (
    <div className="video-container">
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/20xyj1DnM7c"
        title="Maldives Scenic Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPage;
