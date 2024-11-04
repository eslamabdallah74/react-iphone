
import { useEffect, useState } from "react";
import { highlightsSlides } from "../constants";
const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    Start: false,
    VideoId: 0,
    isLast: false,
    isPlaying: false
  });

  const {isEnd, Start, VideoId, isLast, isPlaying} = video;

  useEffect(() => {
    const currentProgress = 0;
    let span = videoSpanRef.current;

    if(span[VideoId]){
      let anim = gsap.to(span[VideoId], {
        onUpdate: () => {
          
        },
        onComplete: () => {
          
        }
      })
    }

  }, [VideoId,Start])

  return (
    <>
      <div className="flex items-center">
        {highlightsSlides.map((slide, index) => (
          <div key={index} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video id="video" muted playsInline={true}>
                  <source src={slide.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {slide.textLists.map((text, index) => (
                  <p key={index} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default VideoCarousel