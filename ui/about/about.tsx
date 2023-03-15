import { css } from "@emotion/react";
import { MediaQueries } from "common/Limits";
import { FreeBtn } from "components/free-to-play";
import Image from "next/image";
export const About = () => {
  return (
    <div css={st.root}>
      <div css={st.container}>
        <p css={st.abtTheGame}>ABOUT THE GAME</p>
        <div css={st.title}>
          <Image src={"/about/title.png"} alt="title" fill />
        </div>
        <p css={st.text}>
          Join the bumper-car Balloon Battle in the sky!{"\n"}Burst your
          opponent's balloons from all sides!{"\n"} Breathtaking suspense to
          avoid enemies from all sides... {"\n"}Let the Balloon Battle
          festivities begin!
        </p>
        <div css={st.freeBtnContainer}>
          <FreeBtn />
        </div>
      </div>
      <div css={st.right}>
        <div css={st.iphoneContainer}>
          <div>
            <div css={st.mask}>
              <div css={st.game}>
                <Image src={"/about/game.gif"} alt="game" fill />
              </div>
            </div>
          </div>
          <div>
            <div css={st.iphone}>
              <Image src={"/about/iphone.png"} alt="iphone" fill />
            </div>
          </div>
        </div>
        <div css={st.fox}>
          <Image src={"/about/vector_fox-coin.svg"} fill alt="fox" />
        </div>
        <div css={st.coin}>
          <Image src={"/about/ic_coin.png"} fill alt="coin" />
        </div>
        <div css={st.ruby}>
          <Image src={"/about/ruby.png"} fill alt="coin" />
        </div>
        <div css={st.key}>
          <Image src={"/about/key.png"} fill alt="coin" />
        </div>
        <div css={st.balloon}>
          <Image src={"/about/balloon.png"} fill alt="coin" />
        </div>
      </div>

      <div>
        <Image src={"/about/bg.png"} alt="bg" fill />
      </div>
    </div>
  );
};

const st = {
  balloon: css`
    position: absolute;
    width: 49px;
    height: 4vw;
    left: 35vw;
    top: 29vw;
    z-index: 99;
    animation: key 2.5s infinite alternate;
    @keyframes key {
      0% {
        margin-top: -2px;
      }
      100% {
        margin-top: 2px;
      }
    }
  `,
  key: css`
    position: absolute;
    width: 49px;
    height: 4vw;
    left: 26vw;
    top: 24vw;
    z-index: 99;
    animation: key 2.5s infinite alternate;
    @keyframes key {
      0% {
        margin-top: -2px;
      }
      100% {
        margin-top: 2px;
      }
    }
  `,
  ruby: css`
    position: absolute;
    width: 58px;
    height: 5vw;
    left: 20vw;
    top: 46.5vw;
    z-index: 99;
    animation: ruby 2.2s infinite alternate;
    @keyframes ruby {
      0% {
        margin-top: -2px;
      }
      100% {
        margin-top: 2px;
      }
    }
  `,
  coin: css`
    position: absolute;
    width: 58px;
    height: 5vw;
    left: 11vw;
    top: 28vw;
    z-index: 99;
    animation: coin 2s infinite alternate;
    @keyframes coin {
      0% {
        margin-top: -2px;
      }
      100% {
        margin-top: 2px;
      }
    }
  `,
  fox: css`
    position: absolute;
    width: 16vw;
    height: 17vw;
    left: -7vw;
    top: 34vw;
    z-index: 99;
    animation: fox 3.5s infinite alternate;
    @keyframes fox {
      0% {
        margin-top: -10px;
      }
      100% {
        margin-top: 10px;
      }
    }
  `,
  mask: css`
    position: absolute;
    left: 10vw;
    top: 0;
    z-index: 20;
    background-color: black;
    width: 40vw;
    height: 25vw;
    mask-image: url("/about/mask_phone-inner.png");
    mask-repeat: no-repeat;
    mask-size: 83% 70%;
  `,

  game: css`
    transform: skew(333.5deg, 11deg) scale(0.75);
    position: absolute;
    width: 40vw;
    height: 25vw;
    z-index: 55;
    left: -4vw;
    top: -2vw;
  `,
  iphone: css`
    position: absolute;
    width: 38.5vw;
    height: 24.5vw;
    top: -0.7vw;
    left: 9vw;
  `,
  iphoneContainer: css`
    position: absolute;
    top: 31vw;
    left: -6vw;
  `,
  right: css`
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 55;
  `,
  abtTheGame: css`
    font-size: 12px;
    border-bottom: solid 3px #fde665;
    width: 105px;
    padding-bottom: 7px;
    margin-bottom: 2vw;
  `,
  text: css`
    font-size: 1.042vw;
    word-wrap: "break-word";
    white-space: pre-wrap;
    color: #2d2f31;
    line-height: 1.875vw;
    margin-top: 2vw;
  `,
  freeBtnContainer: css`
    margin-top: 3.5vw;
  `,
  title: css`
    position: relative;
    width: 32vw;
    height: 7vw;
    z-index: 1;
  `,
  container: css`
    position: relative;
    z-index: 10;
    max-width: 66.667vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  `,
  root: css`
    width: 100%;
    height: 100vh;
    position: relative;
  `,
};
