import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@mui/material";
export const PlayGame = () => {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const slideNext = () => swiper?.slideNext();
  const slidePrev = () => swiper?.slidePrev();
  const onSlideNext = () => {
    slideNext();
  };

  const onSlidePrev = () => {
    slidePrev();
  };
  return (
    <div css={st.root}>
      <div css={st.container}>
        <p css={st.gamePlay}>GAME PLAY</p>
        <div css={st.title}>
          <Image src={"/gameplay/title.png"} alt="title" fill />
        </div>
      </div>
      <div css={st.swiperContainer}>
        <div css={st.iphone}>
          <Image src={"/gameplay/iphone.png"} alt="iphone" fill />
        </div>

        <Swiper
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
          loop={true}
          spaceBetween={1}
          slidesPerView={3}
          centeredSlides={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div css={st.cardContainer}>
              <div css={st.gameCard}>
                <Image src={"/gameplay/game1.png"} alt="game" fill />
              </div>
              <div css={st.cardTitle}>Multi-Play 1 VS 1</div>
              <p css={st.cardText}>
                Variety network balloon competition in the sky.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div css={st.gameCard}>
              <Image src={"/gameplay/dodge-arrow.png"} alt="game" fill />
            </div>
            <div css={st.cardTitle}>Multi-Play 1 VS 1</div>
            <p css={st.cardText}>
              Variety network balloon competition in the sky.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div css={st.gameCard}>
              <Image src={"/gameplay/fly-away.png"} alt="game" fill />
            </div>
            <div css={st.cardTitle}>Multi-Play 1 VS 1</div>
            <p css={st.cardText}>
              Variety network balloon competition in the sky.
            </p>
          </SwiperSlide>
        </Swiper>

        <div css={st.btnContainer}>
          <div onClick={onSlidePrev} css={st.leftBtn}>
            <Image fill src={"/gameplay/leftBtn.png"} alt="btn" />
          </div>
          <div onClick={onSlideNext} css={st.leftBtn}>
            <Image fill src={"/gameplay/rightBtn.png"} alt="btn" />
          </div>
        </div>
      </div>
      <div>
        <Button css={st.modeBtn}></Button>
      </div>
      <div>
        <Image src={"/gameplay/bg.png"} alt="bg" fill />
      </div>
    </div>
  );
};

const st = {
  modeBtn: css`
    background: url(gameplay/pvp-mode-btn.png);
    width: 100px;
    height: 5vw;
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
    z-index: 20;
    display: flex;
    margin: 0 auto;
    transition: all ease-in-out 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  `,
  cardText: css`
    color: white;
    font-size: 0.833vw;
    margin-top: 0.7vw;
  `,
  cardTitle: css`
    color: white;
    font-family: Changa;
    font-size: 1.817vw;
    margin-top: 1vw;
  `,
  cardContainer: css`
    display: flex;
    flex-direction: column;
  `,
  btnContainer: css`
    width: 77%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 25%;
    left: 12%;
  `,
  leftBtn: css`
    position: relative;
    width: 4vw;
    height: 4vw;

    z-index: 10;
  `,
  nextBtn: css`
    position: relative;
    z-index: 55;
  `,
  swiperContainer: css`
    position: relative;
  `,
  iphone: css`
    position: absolute;
    top: -6%;
    left: 33%;
    z-index: 99;
    width: 34vw;
    height: 17vw;
  `,
  title: css`
    width: 57vw;
    height: 4vw;
    position: relative;
    margin-top: 1.5vw;
  `,
  gamePlay: css`
    color: white;
    font-size: 0.95vw;
    width: 5.3vw;
    text-align: center;
    padding-bottom: 1vw;
    border-bottom: solid 3px #ffe77d;
  `,
  container: css`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    z-index: 5;
    margin-bottom: 3vw;
    padding-top: 23vh;
    justify-content: center;
  `,
  gameCard: css`
    width: 25.333vw;
    height: 14.667vw;
    position: relative;
    margin: 0 auto;
  `,
  root: css`
    width: 100%;
    height: 100vh;
    position: relative;
    .swiper-slide-active {
      z-index: 55;
    }
    .swiper-slide-next {
      transform: translateX(-10vw) scale(0.849924) !important;

      P {
        display: none;
      }
    }
    .swiper-slide-prev {
      transform: translateX(11vw) scale(0.849924) !important;
      P {
        display: none;
      }
    }
    .swiper-slide {
      text-align: center;
      height: 83%;
    }
    .swiper {
      height: 300px;
    }
  `,
};
