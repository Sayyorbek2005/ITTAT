import React, { useRef, useState, useEffect } from "react";
import "./success.css";
import YouTube from "react-youtube";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const videos = [
  { id: 1, videoId: "E2e7t4vlwuc", name: "Esther Howard", desc: "Frontend" },
  { id: 2, videoId: "dQw4w9WgXcQ", name: "Saidazimjon", desc: "React" },
  { id: 3, videoId: "E2e7t4vlwuc", name: "Sayyor", desc: "JS" },
  { id: 4, videoId: "dQw4w9WgXcQ", name: "Jaxongir", desc: "Frontend" },
  { id: 5, videoId: "E2e7t4vlwuc", name: "Nuriddin", desc: "React" },
];

export default function Success() {
  const players = useRef({});
  const [activeId, setActiveId] = useState(null);

  const handlePlay = (id) => {
    Object.entries(players.current).forEach(([key, player]) => {
      if (Number(key) !== id && player?.pauseVideo) {
        try {
          player.pauseVideo();
        } catch (error) {
          console.log(error);
        }
      }
    });

    setActiveId(id);
  };

  useEffect(() => {
    const stopAll = () => {
      Object.values(players.current).forEach((player) => {
        if (player?.pauseVideo) {
          try {
            player.pauseVideo();
          } catch (error) {
            console.log(error);
          }
        }
      });
    };

    window.addEventListener("blur", stopAll);
    window.addEventListener("beforeunload", stopAll);

    return () => {
      window.removeEventListener("blur", stopAll);
      window.removeEventListener("beforeunload", stopAll);
    };
  }, []);

  return (
    <div className="success">
      <h1>O‘quvchilar muvaffaqiyati</h1>

      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        loop={false}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
        }}
      >
        {videos.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className={`card ${
                activeId === item.id ? "active-video" : ""
              }`}
            >
              <YouTube
                id={`youtube-${item.id}`}
                videoId={item.videoId}
                opts={{
                  width: "100%",
                  height: "500",
                  playerVars: {
                    autoplay: 0,
                    controls: 1,
                    rel: 0,
                  },
                }}
                
                onReady={(event) => {
                  players.current[item.id] = event.target;
                }}
                onPlay={() => handlePlay(item.id)}
              />

              <div className="info">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}