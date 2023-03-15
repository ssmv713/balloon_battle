import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@mui/material";
export const PlayGameMobile = () => {
  const [swiper, setSwiper] = useState(null);
  const toPrev = () => {
    swiper.slidePrev();
  };
  const toNext = () => {
    swiper.slideNext();
  };
  return (
    <div css={st.root}>
      <div css={st.container}>
        <p css={st.gamePlay}>GAME PLAY</p>
        <div css={st.title}>
          <Image src={"/gameplay/title-m.png"} alt="title" fill />
        </div>
      </div>
      <div css={st.swiperContainer}>
        <div css={st.iphone}>
          <Image src={"/gameplay/iphone.png"} alt="iphone" fill />
        </div>

        <Swiper
          onSwiper={(s: any) => {
            console.log("initialize swiper", s);
            setSwiper(s);
          }}
          loop={true}
          spaceBetween={1}
          slidesPerView={2}
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
          <div onClick={toPrev} css={st.leftBtn}>
            <Image fill src={"/gameplay/leftBtn.png"} alt="btn" />
          </div>
          <div onClick={toNext} css={st.leftBtn}>
            <Image fill src={"/gameplay/rightBtn.png"} alt="btn" />
          </div>
        </div>
      </div>
      <div>
        <Button css={st.modeBtn}></Button>
      </div>
      <div>
        <Image src={"/gameplay/bg-m.png"} alt="bg" fill />
      </div>
    </div>
  );
};

const st = {
  modeBtn: css`
    background: url(gameplay/pvp-mode-btn.png);
    width: 100px;
    height: 40px;
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
    font-size: 2.6vw;
    margin-top: 0.7vw;
  `,
  cardTitle: css`
    color: white;
    font-family: Changa;
    font-size: 5.817vw;
    margin-top: 4vw;
  `,
  cardContainer: css`
    display: flex;
    flex-direction: column;
  `,
  btnContainer: css`
    width: 29%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: -23%;
    left: 35%;
  `,
  leftBtn: css`
    position: relative;
    width: 11vw;
    height: 9vw;

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
    left: 4.5%;
    z-index: 99;
    width: 88vw;
    height: 46vw;
  `,
  title: css`
    width: 60vw;
    height: 16vw;
    position: relative;
    margin-top: 1.5vw;
  `,
  gamePlay: css`
    color: white;
    font-size: 2.7vw;
    width: 15.3vw;
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
    width: 70.333vw;
    height: 40.667vw;
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
      P,
      div:nth-child(2) {
        display: none;
      }
      transform: translateX(-21px) scale(0.9) !important;
    }
    .swiper-slide-prev {
      P,
      div:nth-child(2) {
        display: none;
      }
      transform: translateX(21px) scale(0.9) !important;
    }
    .swiper-slide {
      text-align: center;
      height: 83%;
    }
    .swiper-slide-active {
      margin-left: -10.5vw;
      width: 70.333vw !important;
    }
    .swiper {
      height: 58vw;
      margin-top: 16vw;
    }
  `,
};
