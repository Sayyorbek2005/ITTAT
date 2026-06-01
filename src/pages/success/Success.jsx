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
  const [setActiveId] = useState(null);

  // 🎯 boshqa videolarni pause
  const handlePlay = (id) => {
    Object.entries(players.current).forEach(([key, player]) => {
      if (player && key !== String(id)) {
        try {
          player.pauseVideo();
        } catch {}
      }
    });

    setActiveId(id);
  };

  // 🎯 tabdan chiqsa stop
  useEffect(() => {
    const stopAll = () => {
      Object.values(players.current).forEach((player) => {
        try {
          if (player) player.pauseVideo();
        } catch {}
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
        navigation
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1100: { slidesPerView: 3 },
        }}
      >
        {videos.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="card">

              <YouTube
                videoId={item.videoId}
                opts={{
                  width: "100%",
                  height: "500",
                  playerVars: {
                    autoplay: 0,
                    controls: 1,
                  },
                }}
                onReady={(e) => {
                  players.current[item.id] = e.target;
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