import React, { useState, useRef } from "react";
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
  { id: 3, videoId: "E2e7t4vlwuc", name: "Sayyor", desc: "JavaScript" },
  { id: 4, videoId: "dQw4w9WgXcQ", name: "Jaxongir", desc: "Frontend" },
  { id: 5, videoId: "E2e7t4vlwuc", name: "Nuriddin", desc: "React" },
];

export default function Success() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const modalPlayerRef = useRef(null);

  const closeModal = () => {
    try {
      if (
        modalPlayerRef.current &&
        typeof modalPlayerRef.current.stopVideo === "function"
      ) {
        modalPlayerRef.current.stopVideo();
      }
    } catch (err) {
      console.log(err);
    }

    setSelectedVideo(null);
  };

  const modalOpts = {
    width: "100%",
    height: "700",
    playerVars: {
      autoplay: 1,
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
        className="mySwiper"
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
            <div className="sw-cont-card">
              <div className="card">
                <div
                  className="thumb"
                  style={{
                    backgroundImage: `url(https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg)`,
                  }}
                  onClick={() => setSelectedVideo(item)}
                >
                  <div className="overlay">
                    <div>
                      <h2>{item.name}</h2>
                      <p>{item.desc}</p>
                    </div>

                    <button
                      className="playBtn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedVideo(item);
                      }}
                    >
                      ▶
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedVideo && (
        <div className="modalOverlay" onClick={closeModal}>
          <div
            className="modalContent"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="closeModalBtn"
              onClick={closeModal}
            >
              ✕
            </button>

            <YouTube
              videoId={selectedVideo.videoId}
              opts={modalOpts}
              onReady={(event) => {
                modalPlayerRef.current = event.target;
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}