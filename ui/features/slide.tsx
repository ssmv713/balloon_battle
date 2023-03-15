import { Swiper, SwiperSlide } from "swiper/react";
import title from "../../public/features/title-m.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
// import required modules
import { Pagination } from "swiper";
import { css } from "@emotion/react";
import { Card } from "./component/card";
import { CardMobile } from "./component/CardMobile";

export const Slide = () => {
  const cards = [
    {
      number: 1,
      cardImg: "/features/card-1.png",
      title: "Easy to Play",
      text: "Much easier to play battle game\nresults in a more entertaining\nBalloon Battle!",
    },
    {
      number: 2,
      cardImg: "/features/card-2.png",
      title: "Daily Quest",
      text: "After every level-based mission,\nrewards may be attained proportionally to difficulty level.",
    },
    {
      number: 3,
      cardImg: "/features/card-3.png",
      title: "PvP Mode",
      text: "A competitive system in which the\nmain content focuses on winners and their rewards.",
    },
    {
      number: 4,
      cardImg: "/features/card-4.png",
      title: "NFT Character",
      text: "Entertainment appeal of collecting NFTs of various charms with different abilities.",
    },
  ];
  return (
    <div css={st.root}>
      <div css={st.top}>
        <span css={st.features}>FEATURES</span>
        <div css={st.title}>
          <Image fill src={title} alt="title" />
        </div>
      </div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {cards.map((card) => (
          <SwiperSlide>
            <CardMobile
              number={card.number}
              cardImg={card.cardImg}
              title={card.title}
              text={card.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div>
        <Image fill src={"/features/bg.png"} alt="bg" />
      </div>
    </div>
  );
};

const st = {
  cardContainer: css`
    display: flex;
    gap: 5vw;
    width: 100%;
    height: 25vw;
    justify-content: center;
    margin-top: 2.5vw;
    position: relative;
    z-index: 55;
  `,
  cardWrapper: css`
    position: relative;
    width: 14vw;
  `,
  img: css`
    width: 80%;
    margin-left: 8vw;
  `,
  top: css`
    position: relative;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  features: css`
    font-size: 2.833vw;
    width: 14.3vw;
    padding-bottom: 7px;
    border-bottom: solid 3px #eedf10;
    letter-spacing: 0.1vw;
    margin-bottom: 1vw;
  `,
  container: css`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    justify-content: center;
  `,
  title: css`
    width: 88vw;
    height: 22vw;
    position: relative;
  `,
  root: css`
    height: 100vh;
    padding-top: 10vw;
    position: relative;
    .swiper-wrapper {
      padding-top: 10px;
    }
    .swiper-slide {
      height: 120vw;
      padding: 4.167vw;
    }
    .swiper {
      padding-bottom: 9.333vw;
    }
    .swiper-pagination {
      bottom: 0.25vw !important;
    }
    .swiper-pagination-bullet {
      background-color: white;
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background-color: #3079e9;
      width: 25px;
      border-radius: 8px;
    }
  `,
};
