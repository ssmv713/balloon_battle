import { css } from "@emotion/react";
import Image from "next/image";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import { HeaderUse } from "./headerUse";

export const HeaderMobileWrapper = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <HeaderUse isOpen={false} onMenuClick={handleClickOpen} />
      {/* <header css={st.root}>
        <div css={st.container}>
          <div css={st.logo}>
            <Image fill src={"/logo.png"} alt="image" />
          </div>

          <Button onClick={handleClickOpen}>
            <div css={st.menu}>
              <Image src={"/menu-m.png"} fill alt="menu" />
            </div>
          </Button>
        </div>
      </header> */}
      <Dialog
        fullScreen
        css={st.dialog}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div>
          <Image src={"/mobile_menu/bg_mobile-menu.png"} alt="bg" fill />
        </div>

        <HeaderUse isOpen={true} onMenuClick={handleClose} />

        <div css={st.btnsContainer}>
          <a href="#" onClick={handleClose}>
            <Button css={st.menuBtn}>
              <div css={st.menuBtnWrap}>
                <Image
                  src={"/mobile_menu/about.png"}
                  width={60}
                  height={25}
                  alt="about"
                />
              </div>
            </Button>
          </a>
          <a href="">
            <Button css={st.menuBtn}>
              <div css={st.menuBtnWrap}>
                <Image
                  src={"/mobile_menu/game-play.png"}
                  width={100}
                  height={25}
                  alt="about"
                />
              </div>
            </Button>
          </a>
          <a href="">
            <Button css={st.menuBtn}>
              <div css={st.menuBtnWrap}>
                <Image
                  src={"/mobile_menu/tokenomics.png"}
                  width={110}
                  height={25}
                  alt="about"
                />
              </div>
            </Button>
          </a>
        </div>
        <div css={st.whiteContainer}>
          <a href="#">
            <div css={st.whitepaper}>
              <Image
                src={"/mobile_menu/white-paper-btn.png"}
                alt="paper"
                //   width={200}
                //   height={200}
                fill
              />
            </div>
          </a>
        </div>
      </Dialog>
    </div>
  );
};

const st = {
  whitepaper: css`
    position: relative;
    width: 190px;
    height: 80px;
    margin-left: 10px;
    margin-top: 90px;
  `,
  whiteContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  btnsContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    gap: 30px;
  `,
  menuBtnWrap: css`
    display: flex;
    align-items: center;
  `,
  menuBtn: css`
    background: rgba(255, 255, 255, 0.19);
    box-shadow: inset 0px 0px 14px 2px rgba(255, 255, 255, 0.7);
    border: solid 3px rgba(255, 255, 255, 0.9);
    padding: 10px 0;
    width: 32vw;
    border-radius: 28px;
  `,
  close: css`
    width: 1vw;
    height: 2vw;
  `,
  dialog: css`
    .MuiPaper-root {
      margin: 0;
      max-height: 100%;
      background-color: #fff;
    }
  `,
  menu: css`
    width: 4vw;
    height: 3.3vw;
    position: relative;
  `,
  btn: css`
    color: white;
    background: rgba(255, 255, 255, 0.19);
    box-shadow: inset 0px 0px 14px 8px rgba(255, 255, 255, 0.1);
    border: solid 1px white;
    cursor: pointer;
    border-radius: 18px;
    font-size: 0.79vw;
    font-weight: 600;
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
    width: 15.208vw;
    height: 9.25vw;
    position: relative;
    transition: all ease-in-out 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  `,
  container: css`
    width: 91.667vw;
    margin: 2vw auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
};
