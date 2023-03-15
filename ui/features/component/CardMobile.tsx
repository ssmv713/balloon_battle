import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
export const CardMobile = (props: any) => {
  return (
    <div>
      {/* <div css={st.card}>
        <Image fill alt="card" src={props.cardImg} />
      </div> */}
      <img css={st.img} src={props.cardImg} />
      <div css={st.textContainer}>
        <p css={st.number}>{props.number}</p>
        <div css={st.textBox}>
          <p css={st.cardTitle}>{props.title}</p>
          <Typography css={st.text}>{props.text}</Typography>
        </div>
      </div>
    </div>
  );
};

const st = {
  img: css`
    width: 90%;

    position: absolute;
  `,
  textBox: css`
    position: absolute;
    width: 75vw;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin-top: 17vw;
    align-items: center;
  `,
  cardTitle: css`
    color: white;
    font-weight: 800;
    font-family: "Changa", sans-serif;
    font-size: 7.8vw;
    text-shadow: 4px 4px 0px rgb(0 0 0 / 25%);
    text-align: center;
    border-bottom: 2px solid white;
    width: 64vw;
    padding-bottom: 4.3vw;
  `,
  number: css`
    color: white;
    font-weight: 800;
    font-family: "Changa", sans-serif;
    font-size: 8.667vw;
    text-shadow: 4px 4px 0px rgb(0 0 0 / 25%);
  `,
  text: css`
    font-size: 3vw;
    color: white;
    text-align: center;
    padding: 5vw 1vw;
    white-space: pre-wrap;
  `,
  textContainer: css`
    position: absolute;
    width: 75vw;
    margin: 6.3vw 0 0 8.8vw;
  `,

  card: css`
    width: 18vw;
    height: 23vw;
    position: absolute;
  `,
  cardContainer: css`
    display: flex;
    gap: 5vw;
    width: 100%;
    height: 25vw;
    justify-content: center;
  `,
};
