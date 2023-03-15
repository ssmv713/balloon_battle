import { css } from "@emotion/react";
import Image from "next/image";
import { Typography } from "@mui/material";
import { MediaQueries } from "common/Limits";
import { FreeBtn } from "components/free-to-play";
export const Main = () => {
  return (
    <div css={st.root}>
      <div css={st.container}>
        <div css={st.title}>
          <Image fill src={"/main/title.png"} alt="title"></Image>
        </div>
        <Typography css={st.subtitle}>
          PLAY IN BALLOON BATTLE AND WIN REWARDS TO BE <br /> THE ONE AND ONLY
          STRONGEST WINNER.
        </Typography>

        <div css={st.freeBtnContainer}>
          <FreeBtn />
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
  freeBtnContainer: css`
    margin-top: 3.5vw;
  `,
  text: css`
    width: 6.5vw;
    height: 1.4vw;
    position: absolute;
    top: 1.2vw;
    left: 1.9vw;
  `,

  btnContainer: css`
    width: 10.5vw;
    height: 4vw;
    position: relative;
    margin-top: 3.5vw;
  `,
  btn: css`
    width: 10.5vw;
    height: 4vw;
    position: absolute;
  `,
  subtitle: css`
    font-size: 1.458vw;
    line-height: 2.083vw;
    letter-spacing: 0.05em;
    color: white;
    margin-top: 2vw;
  `,
  title: css`
    width: 36vw;
    height: 8vw;
    position: relative;
    margin-top: 24vw;
    transition: all ease-in-out 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  `,
  container: css`
    width: 66.667vw;
    height: 100vw;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 16.7vw;
    z-index: 55;
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
    height: 100vh;
    position: relative;
    @media ${MediaQueries.md} {
      height: 56.25vw;
    }
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
