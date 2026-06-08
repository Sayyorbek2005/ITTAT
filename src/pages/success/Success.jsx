import React, { useRef, useState, useEffect } from "react";
import "./success.css";
import YouTube from "react-youtube";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { Title } from "../../style/StyleComponent";

const videos = [
  { id: 1, videoId: "E2e7t4vlwuc", name: "Esther Howard", desc: "Frontend" },
  { id: 2, videoId: "6Of9y32PzUI", name: "Saidazimjon", desc: "React" },
  { id: 3, videoId: "E2e7t4vlwuc", name: "Sayyor", desc: "JS" },
  { id: 4, videoId: "dQw4w9WgXcQ", name: "Jaxongir", desc: "Frontend" },
  { id: 5, videoId: "E2e7t4vlwuc", name: "Nuriddin", desc: "React" },
];

export default function Success() {
  const playersRef = useRef({});
  const [activeId, setActiveId] = useState(null);

  const stopOtherVideos = (currentId) => {
    Object.keys(playersRef.current).forEach((id) => {
      if (Number(id) !== currentId) {
        const player = playersRef.current[id];

        if (
          player &&
          typeof player.pauseVideo === "function"
        ) {
          try {
            player.pauseVideo();
          } catch (e) {
            console.log(e);
          }
        }
      }
    });
  };

  useEffect(() => {
    const stopAllVideos = () => {
      Object.values(playersRef.current).forEach((player) => {
        if (
          player &&
          typeof player.pauseVideo === "function"
        ) {
          try {
            player.pauseVideo();
          } catch (e) {
            console.log(e);
          }
        }
      });
    };

    window.addEventListener("blur", stopAllVideos);

    return () => {
      window.removeEventListener("blur", stopAllVideos);
    };
  }, []);

  const opts = {
    width: "100%",
    height: "500",
    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 0,
      modestbranding: 1,
      fs: 1,
    },
  };

  return (
    <div className="success">
      <Title>O‘quvchilar muvaffaqiyati</Title>

      <Swiper
        modules={[Navigation]}
        navigation
        observer={true}
        observeParents={true}
        spaceBetween={30}
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
                videoId={item.videoId}
                opts={opts}
                onReady={(event) => {
                  playersRef.current[item.id] = event.target;
                }}
                onStateChange={(event) => {
                  const state = event.data;

                  // 1 = PLAYING
                  if (state === 1) {
                    setActiveId(item.id);
                    stopOtherVideos(item.id);
                  }

                  // 0 = ENDED
                  // 2 = PAUSED
                  if (state === 0 || state === 2) {
                    setActiveId((prev) =>
                      prev === item.id ? null : prev
                    );
                  }
                }}
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