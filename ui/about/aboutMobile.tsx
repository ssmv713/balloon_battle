import { css } from "@emotion/react";
import { MediaQueries } from "common/Limits";
import { FreeBtn } from "components/free-to-play";
import Image from "next/image";
export const AboutMobile = () => {
  return (
    <div css={st.root}>
      <div css={st.container}>
        <p css={st.abtTheGame}>ABOUT THE GAME</p>
        <div css={st.title}>
          <Image src={"/about/title-m.png"} alt="title" fill />
        </div>
        <p css={st.text}>
          Join the bumper-car Balloon Battle in the sky! {"\n"}Burst your
          opponent's balloons from all sides!{"\n"}Breathtaking suspense to
          avoid enemies from all sides...{"\n"}Let the Balloon Battle
          festivities begin!
        </p>
        <div css={st.freeBtnContainer}>
          <FreeBtn />
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
      </div>

      <div>
        <Image src={"/about/bg_m.png"} alt="bg" fill />
      </div>
    </div>
  );
};

const st = {
  balloon: css`
    position: absolute;
    width: 45px;
    height: 45px;
    left: 55vw;
    top: 3vw;
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
    width: 40px;
    height: 40px;
    left: 43vw;
    top: -5vw;
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
    width: 45px;
    height: 45px;
    left: 34vw;
    top: 27.5vw;
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
    width: 45px;
    height: 45px;
    left: 15vw;
    top: 1vw;
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
    width: 105px;
    height: 200px;
    left: 44vw;
    top: 28vw;
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
    left: 11vw;
    top: 0.5vw;
    z-index: 20;
    background-color: black;
    width: 360px;
    height: 200px;
    mask-image: url("/about/mask_phone-inner.png");
    mask-repeat: no-repeat;
    mask-size: 83% 70%;
  `,

  game: css`
    transform: skew(333.5deg, 11deg) scale(0.75);
    position: absolute;
    width: 343px;
    height: 200px;
    z-index: 55;
    left: -5vw;
    top: -4vw;
  `,
  iphone: css`
    position: absolute;
    width: 350px;
    height: 200px;
    top: -0.7vw;
    left: 9vw;
  `,
  iphoneContainer: css`
    position: absolute;
    top: 6vw;
    left: -6vw;
    width: fit-content;
  `,
  right: css`
    position: relative;
    top: 5%;
    left: 1%;
    z-index: 55;
  `,
  abtTheGame: css`
    font-size: 12px;
    border-bottom: solid 3px #fde665;
    width: 118px;
    padding-bottom: 7px;
    margin-bottom: 2vw;
    letter-spacing: 1px;
  `,
  text: css`
    font-size: 14px;
    word-wrap: "break-word";
    white-space: pre-wrap;
    color: #2d2f31;
    line-height: 20px;
    margin-top: 6vw;
  `,
  freeBtnContainer: css`
    margin-top: 50px;
  `,
  title: css`
    position: relative;
    width: 100%;
    max-width: 285px;
    aspect-ratio: 2.26;
    z-index: 1;
  `,
  container: css`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
  root: css`
    width: 100%;
    height: 100vh;
    position: relative;
    padding: 70px 20px;
  `,
};
