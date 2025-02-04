const VideoCard = ({ videoKey }) => {
    const url = "https://www.youtube.com/embed/" + videoKey;
    return (
      <div>
        <iframe
          width="320"
          height="200"
          className="rounded-[10px] ml-[30px] mt-[70px]"
          src={url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    );
  };
  
  export default VideoCard;
  
