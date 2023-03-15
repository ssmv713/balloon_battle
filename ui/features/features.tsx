import { css } from "@emotion/react";

import "aos/dist/aos.css";
import Image from "next/image";
import title from "../../public/features/title.png";
import { Card } from "./component/card";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export const Features = () => {
  useEffect(() => {
    AOS.init();
  });
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
      <div css={st.container}>
        <span css={st.features}>FEATURES</span>

        <div css={st.title}>
          <Image fill src={title} alt="title" />
        </div>
        <ul css={st.cardContainer}>
          {cards.map((card, index) => (
            <li
              css={st.cardWrapper}
              key={index}
              data-aos={"fade-up"}
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <Card
                number={card.number}
                cardImg={card.cardImg}
                title={card.title}
                text={card.text}
              />
            </li>
          ))}
        </ul>
      </div>
      <div css={st.bg}>
        <Image fill src={"/features/bg.png"} alt="bg" />
      </div>
    </div>
  );
};

const st = {
  cardWrapper: css`
    position: relative;
    width: 14vw;
  `,
  cardContainer: css`
    display: flex;
    gap: 5vw;
    width: 100%;
    height: 25vw;
    justify-content: center;
    margin-top: 2.5vw;
  `,
  title: css`
    width: 61vw;
    height: 5vw;
    position: relative;
  `,
  features: css`
    font-size: 0.833vw;
    width: 4.3vw;
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
  root: css`
    position: relative;
    width: 100%;
    height: 100vh;
  `,
  bg: css``,
};
