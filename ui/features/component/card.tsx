import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
export const Card = (props: any) => {
  return (
    <div>
      <div css={st.card}>
        <Image fill alt="card" src={props.cardImg} />
      </div>
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
  textBox: css`
    position: absolute;
    width: 16vw;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin-top: 3vw;
    align-items: center;
  `,
  cardTitle: css`
    color: white;
    font-weight: 800;
    font-family: "Changa", sans-serif;
    font-size: 1.8vw;
    text-shadow: 4px 4px 0px rgb(0 0 0 / 25%);
    text-align: center;
    border-bottom: 2px solid white;
    width: 13vw;
    padding-bottom: 1.3vw;
  `,
  number: css`
    color: white;
    font-weight: 800;
    font-family: "Changa", sans-serif;
    font-size: 1.667vw;
    text-shadow: 4px 4px 0px rgb(0 0 0 / 25%);
  `,
  text: css`
    font-size: 0.8917vw;
    color: white;
    text-align: center;
    padding: 0 1vw;
    white-space: pre-wrap;
  `,
  textContainer: css`
    position: absolute;
    width: 13vw;
    margin: 1.3vw 0 0 1.8vw;
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
