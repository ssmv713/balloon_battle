import { css } from "@emotion/react";
import { MediaQueries } from "common/Limits";
import Image from "next/image";
export const FreeBtn = () => {
  return (
    <div css={st.btnContainer}>
      <div css={st.btn}>
        <Image fill src={"/main/btn.png"} alt="btn" />
      </div>
      <div css={st.text}>
        <Image fill src={"/main/free-to-play.png"} alt="btn" />
      </div>
    </div>
  );
};

const st = {
  text: css`
    width: 6.5vw;
    height: 1.4vw;
    position: absolute;
    top: 1.2vw;
    left: 1.9vw;
    @media ${MediaQueries.md} {
      width: 100px;
      height: 22px;
      top: 13px;
      left: 28px;
    }
  `,

  btnContainer: css`
    width: 10.5vw;
    height: 4vw;
    position: relative;
    transition: all ease-in-out 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  `,
  btn: css`
    width: 10.5vw;
    height: 4vw;
    position: absolute;
    @media ${MediaQueries.md} {
      width: 160px;

      height: 52px;
      padding-bottom: 10px;
    }
  `,
};
