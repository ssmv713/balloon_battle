import { css } from "@emotion/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay } from "swiper";
import { BtmBox } from "./btm";
import { useCustomMediaQuery } from "common/useCustomMediaQuery";
import { MediaQueries } from "common/Limits";

export const Characters = () => {
  SwiperCore.use([Autoplay]);
  const { isMobile } = useCustomMediaQuery();
  const { isTablet } = useCustomMediaQuery();
  const title = isMobile ? "/character/title_m.png" : "/character/title.png";
  const darkBg = isMobile
    ? "/character/dark-bg-m.png"
    : "/character/dark-bg.png";
  const slidesPerView = isMobile ? 4.5 : 8;
  return (
    <div css={st.root}>
      <div css={st.container}>
        <div css={st.titleContainer}>
          <span css={st.gamePlay}>GAME PLAY</span>
          <div css={st.title}>
            <Image src={title} fill alt="title" />
          </div>
        </div>
        <Swiper
          loopedSlides={15}
          loop={true}
          pagination={{
            clickable: true,
          }}
          slidesPerView={slidesPerView}
          spaceBetween={30}
          freeMode={true}
          className="mySwiper"
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={3500}
        >
          <SwiperSlide>
            <div css={st.ch}>
              <Image src={"/character/char-1.png"} alt="character1" fill />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div css={st.ch}>
              <Image src={"/character/char-2.png"} alt="character2" fill />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div css={st.ch}>
              <Image src={"/character/char-3.png"} alt="character3" fill />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div css={st.chaContainer}>
              <div css={st.characterBg}>
                <Image src={"/character/char-4_bg.png"} alt="character4" fill />
              </div>
              <div css={st.movingCharacter}>
                <Image src={"/character/char-4.gif"} alt="character10" fill />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div css={st.ch}>
              <Image src={"/character/char-5.png"} alt="character5" fill />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div css={st.ch}>
              <Image src={"/character/char-6.png"} alt="character6" fill />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div css={st.ch}>
              <Image src={"/character/char-7.png"} alt="character7" fill />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div css={st.ch}>
              <Image src={"/character/char-8.png"} alt="character8" fill />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div css={st.chaContainer}>
              <div css={st.characterBg}>
                <Image
                  src={"/character/char-10_bg.png"}
                  alt="character4"
                  fill
                />
              </div>
              <div css={st.movingCharacter}>
                <Image src={"/character/char-10.gif"} alt="character10" fill />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div css={st.ch}>
              <Image src={"/character/char-11.png"} alt="character11" fill />
            </div>
          </SwiperSlide>
        </Swiper>
        <div css={st.bannerContainer}>
          <div css={st.banner}>
            <Image src={darkBg} alt="banner" fill />
          </div>
          <div css={st.bannerInner}>
            <div css={st.top}>
              <span>VARIOUS ANIMAL FRIENDS</span>
              <span css={st.wordbreak}>
                {isTablet
                  ? "THE CUTEST SKINS\n(4 SKINS OF EACH CHARACTER)"
                  : "THE CUTEST SKINS (4 SKINS OF EACH CHARACTER)"}
              </span>
              <span>SEASON OF SPECIAL CHARACTERS</span>
            </div>
            <BtmBox />
          </div>
        </div>
      </div>

      <BG />
    </div>
  );
};

const BG = () => {
  const { isTablet } = useCustomMediaQuery();
  const bg = isTablet ? "/character/bg_m.png" : "/character/bg.png";
  return <Image src={bg} alt="bg" fill />;
};
const st = {
  wordbreak: css`
    word-wrap: "break-word";
    white-space: pre-wrap;
    text-align: center;
  `,
  top: css`
    font-size: 0.88vw;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-family: "Exo", sans-serif;
    @media ${MediaQueries.xs} {
      flex-direction: column;
      font-size: 3.78vw;
      font-weight: 500;
      word-wrap: break-word;
      align-items: center;
      gap: 8vw;
      margin: 7vw 0;
      line-height: 5vw;
    }
  `,
  bannerInner: css`
    position: absolute;
    color: white;
    padding: 4vw 12vw;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  banner: css`
    position: absolute;
    width: 100%;
    height: 22vw;
    @media ${MediaQueries.xs} {
      height: 209vw;
    }
  `,
  bannerContainer: css`
    width: 100%;
    height: 22vw;
    position: relative;
    margin-top: 6vw;
    @media ${MediaQueries.xs} {
      height: 209vw;
    }
  `,
  titleContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15vw;
    margin-bottom: 6vw;
  `,

  gamePlay: css`
    font-size: 0.95vw;
    letter-spacing: 0.1vw;
    width: 7.3vw;
    text-align: center;
    padding-bottom: 1vw;
    border-bottom: solid 3px #ffe77d;
    @media ${MediaQueries.xs} {
      font-size: 3vw;
      width: 18vw;
      font-weight: 500;
    }
  `,
  title: css`
    position: relative;
    width: 55vw;
    height: 4vw;
    @media ${MediaQueries.xs} {
      height: 30vw;
      width: 70vw;
      margin-top: 3vw;
    }
  `,
  chaContainer: css`
    position: relative;
    width: 100%;
    height: 15vw;
  `,
  characterBg: css`
    position: absolute;
    width: 10vw;
    height: 12vw;
    z-index: 5;
    @media ${MediaQueries.xs} {
      width: 16vw;
      height: 20vw;
    }
  `,
  movingCharacter: css`
    position: absolute;
    width: 15vw;
    height: 17vw;
    z-index: 65;
    top: -17%;
    left: -23%;
    @media ${MediaQueries.xs} {
      width: 26vw;
      height: 28vw;
      top: -22%;
      left: -27%;
    }
  `,
  ch: css`
    position: relative;
    width: 10vw;
    height: 12vw;
    z-index: 55;
    @media ${MediaQueries.xs} {
      width: 16vw;
      height: 20vw;
    }
  `,
  container: css`
    position: relative;
    z-index: 2;
    width: 100%;
  `,
  root: css`
    position: relative;
    width: 100%;
    height: 100vh;
    @media ${MediaQueries.xs} {
      height: 100%;
    }
    .swiper-wrapper {
      transition-timing-function: linear;
    }
  `,
};
