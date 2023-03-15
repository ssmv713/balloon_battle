import { css } from "@emotion/react";
import Image from "next/image";
import { Typography } from "@mui/material";
import { MediaQueries } from "common/Limits";
export const MainMobile = () => {
  return (
    <div css={st.root}>
      <div css={st.container}>
        <div css={st.title}>
          <Image fill src={"/main/title-m.png"} alt="title"></Image>
        </div>
        <Typography css={st.subtitle}>
          PLAY IN BALLOON BATTLE AND {"\n"}
          WIN REWARDS TO BE THE ONE AND{"\n"}
          ONLY STRONGEST WINNER.
        </Typography>
        <div css={st.btnContainer}>
          <div css={st.btn}>
            <Image fill src={"/main/btn.png"} alt="btn" />
          </div>
          <div css={st.text}>
            <Image fill src={"/main/free-to-play.png"} alt="btn" />
          </div>
        </div>
      </div>
      <video
        autoPlay
        muted
        loop
        css={st.video}
        src="main/game-video.mp4"
      ></video>
      <div css={st.shadow}></div>
    </div>
  );
};

const st = {
  text: css`
    position: absolute;
    width: 20vw;
    height: 3.2vw;
    top: 3.5vw;
    left: 4.4vw;
  `,

  btnContainer: css`
    width: 10.5vw;
    height: 4vw;
    position: relative;
    margin-top: 11.5vw;
  `,
  btn: css`
    width: 29.5vw;
    height: 11vw;
    position: absolute;
  `,
  subtitle: css`
    font-size: 14px;
    line-height: 1.5rem;
    color: white;
    margin-top: 5vw;
    max-width: 245px;
    /* word-wrap: "break-word";
    white-space: pre-wrap; */
  `,
  title: css`
    width: 48vw;
    height: 30vw;
    position: relative;
    margin-top: 53vw;
  `,
  container: css`
    width: 100%;
    height: 100vw;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0 100px 0 20px;
    z-index: 55;
    max-width: 66.667vw;
  `,
  shadow: css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 18, 35, 0.7) 0%,
      rgba(0, 18, 35, 0.392) 100%,
      rgba(0, 18, 35, 0.7) 100%
    );
  `,
  root: css`
    width: 100%;
    height: auto;
    aspect-ratio: 0.6;
    position: relative;
  `,
  video: css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    object-fit: cover;
  `,
};
