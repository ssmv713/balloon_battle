import { css } from "@emotion/react";
import Image from "next/image";

export const Video = () => {
  return (
    <div css={st.root}>
      <div>
        <Image src={"/video/bg.png"} alt="bg" fill />
      </div>
      <div css={st.cloud}>
        <Image src={"/video/cloud.png"} alt="bg" fill />
      </div>
      <div>
        <div css={st.title}>
          <Image src={"/video/title.png"} alt="title" fill />
        </div>

        <video css={st.video} src="/video/video.mp4" autoPlay muted loop />
      </div>
    </div>
  );
};

const st = {
  vidoe: css`
    position: relative;
  `,
  title: css`
    width: 42vw;
    height: 6vw;
    position: relative;
  `,
  cloud: css`
    height: 20vw;
    width: 100%;
    position: absolute;
    bottom: 0;
  `,
  root: css`
    position: relative;
    width: 100%;
    height: 100vh;
  `,
};
