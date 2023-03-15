import { css } from "@emotion/react";
import Button from "@mui/material/Button";
import Image from "next/image";

export type HeaderUseProps = {
  isOpen: boolean;
  onMenuClick: () => void;
};

export const HeaderUse = (p: HeaderUseProps) => {
  const menuImage = p.isOpen ? (
    <p>
      <Image
        src={"/mobile_menu/ic_close.png"}
        alt="close"
        width={18}
        height={18}
      />
    </p>
  ) : (
    <Image src={"/menu-m.png"} fill alt="menu" />
  );

  return (
    <header css={st.root}>
      <div css={st.container}>
        <div css={st.logo}>
          <Image fill src={"/logo.png"} alt="image" />
        </div>
        <Button onClick={p.onMenuClick}>
          <div css={st.menu}>{menuImage}</div>
        </Button>
      </div>
    </header>
  );
};

const st = {
  menu: css`
    width: 4vw;
    height: 3.3vw;
    position: relative;
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
