import { css } from "@emotion/react";
import Image from "next/image";

export const Header = () => {
  return (
    <header css={st.root}>
      <div css={st.container}>
        {/* <img src="logo.png" alt="" /> */}
        <div css={st.logo}>
          <Image fill src={"/logo.png"} alt="image" />
        </div>

        <nav>
          <ul css={st.lists}>
            <li>
              <a css={st.list} href="">
                ABOUT
              </a>
            </li>
            <li>
              <a css={st.list} href="">
                GAME PLAY
              </a>
            </li>
            <li>
              <a css={st.list} href="">
                TOKENOMICS
              </a>
            </li>
          </ul>
        </nav>
        <button css={st.btn}>WHITE PAPER</button>
      </div>
    </header>
  );
};

const st = {
  btn: css`
    color: white;
    background: rgba(255, 255, 255, 0.19);
    box-shadow: inset 0px 0px 14px 2px rgba(255, 255, 255, 0.3);
    border: solid 1px white;
    padding: 10px 12px;
    cursor: pointer;
    border-radius: 18px;
    font-size: 0.79vw;
    font-weight: 600;
    transition: all ease-in-out 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  `,
  list: css`
    display: block;
    color: white;
    font-size: 0.833vw;
    font-weight: 600;
    transition: all ease-in-out 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  `,
  lists: css`
    display: flex;
    gap: 2.083vw;
  `,
  root: css`
    position: fixed;
    z-index: 99;
    width: 100%;
  `,
  logo: css`
    width: 10.208vw;
    height: 6.25vw;
    position: relative;
    transition: all ease-in-out 0.3s;
    animation: ani 3.5s infinite alternate;
    @keyframes ani {
      0% {
        transform: translate(0, -5px);
      }
      100% {
        transform: translate(0, 5px);
      }
    }
    &:hover {
      transform: scale(1.1);
    }
  `,
  container: css`
    width: 66.667vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
};
