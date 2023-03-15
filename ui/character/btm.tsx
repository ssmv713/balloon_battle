import { css } from "@emotion/react";
import Image from "next/image";
import { MediaQueries } from "common/Limits";
const classes = [
  {
    label: "NORMAL",
    color: "#31bc6e",
  },
  {
    label: "RARE",
    color: "#3079e9",
  },
  {
    label: "EPIC",
    color: "#901CEC",
  },
  {
    label: "UNIQUE",
    color: "#ffbb0e",
  },
];

const abilities = [
  {
    label: "SKY",
    color: "#299FFF",
    img: "/character/wing.png",
  },
  {
    label: "LAND",
    color: "#93CE6C",
    img: "/character/land.png",
  },
  {
    label: "SKY",
    color: "#F4CD7A",
    img: "/character/stamina.png",
  },
  {
    label: "PUMPING",
    color: "#F77F8E",
    img: "/character/pumping.png",
  },
];

export const BtmBox = () => {
  return (
    <div css={st.root}>
      <div>
        <div css={st.smContainer}>
          <span css={st.title}>CHARACTER'S CLASS</span>
          <div css={st.gridContainer}>
            {classes.map((it) => (
              <span key={it.label} css={st.classesChip(it.color)}>
                {it.label}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div css={st.smContainer}>
          <span css={st.title}>CHARACTER'S ABILITY</span>
          <div css={st.abilityContainer}>
            {abilities.map((it) => (
              <div css={st.chipContainer}>
                <div css={st.chipImg}>
                  <Image src={it.img} fill alt="sky" />
                </div>
                <span css={st.abilityChip(it.color)}>{it.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const st = {
  abilityChip: (color: string) => css`
    background-color: ${color};
    height: 2vw;
    font-weight: 700;
    width: 5.5vw;
    padding: 0 0.5vw;
    text-align: center;
    border-radius: 1.5vw;
    font-size: 1vw;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${MediaQueries.xs} {
      width: 25vw;
      height: 9vw;
      border-radius: 15px;
      font-size: 4vw;
    }
  `,
  chipContainer: css`
    display: flex;
    align-items: center;
    @media ${MediaQueries.xs} {
      gap: 10px;
    }
  `,
  chipImg: css`
    position: relative;
    width: 3vw;
    height: 3vw;
    margin-right: 0.5vw;
    @media ${MediaQueries.xs} {
      width: 14vw;
      height: 14vw;
    }
  `,
  classesChip: (color: string) => css`
    line-height: 2vw;
    font-weight: 700;
    width: 5.5vw;
    padding: 0 0.5vw;
    text-align: center;
    border-radius: 1.5vw;
    font-size: 1vw;
    background-color: ${color};
    @media ${MediaQueries.xs} {
      line-height: 9vw;
      width: 22vw;
      font-size: 3.5vw;
      border-radius: 4.5vw;
    }
  `,
  title: css`
    font-size: 1.2vw;
    height: 2vw;
    font-weight: 700;
    margin: 0 3vw 0 3vw;
    border-bottom: solid 2px #ffe607;
    font-family: "Exo", sans-serif;
    @media ${MediaQueries.xs} {
      font-size: 4vw;
      height: 7vw;
      width: 44vw;
      text-align: center;
      border-bottom: solid 3px #ffe607;
    }
  `,
  red: css`
    background-color: #ffbb0e;
    line-height: 2vw;
    font-weight: 700;
    width: 5.5vw;
    padding: 0 0.5vw;
    text-align: center;
    border-radius: 1.5vw;
    font-size: 1vw;
  `,
  yellow: css`
    background-color: #ffbb0e;
    line-height: 2vw;
    font-weight: 700;
    width: 5.5vw;
    padding: 0 0.5vw;
    text-align: center;
    border-radius: 1.5vw;
    font-size: 1vw;
  `,
  purple: css`
    background-color: #901cec;
    line-height: 2vw;
    font-weight: 700;
    width: 5.5vw;
    padding: 0 0.5vw;
    text-align: center;
    border-radius: 1.5vw;
    font-size: 1vw;
  `,

  green: css`
    background-color: #31bc6e;
    line-height: 2vw;
    font-weight: 700;
    width: 5.5vw;
    padding: 0 0.5vw;
    text-align: center;
    border-radius: 1.5vw;
    font-size: 1vw;
  `,
  gridContainer: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 0.9vw;
    column-gap: 0.9vw;
    font-size: 1.1vw;
    @media ${MediaQueries.xs} {
      column-gap: 2px;
      row-gap: 10px;
      margin: 6vw 0 10vw 0;
      justify-items: center;
    }
  `,
  abilityContainer: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 0.9vw;
    column-gap: 0.9vw;
    font-size: 1.1vw;
    @media ${MediaQueries.xs} {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      margin-top: 5vw;
    }
  `,
  smContainer: css`
    display: flex;
    @media ${MediaQueries.xs} {
      flex-direction: column;
    }
  `,
  root: css`
    width: 94%;
    display: flex;
    margin-top: 3vw;
    border: 2px solid white;
    display: flex;
    padding: 1.5vw 0;
    @media ${MediaQueries.xs} {
      flex-direction: column;
      width: 105%;
      padding: 7vw 6vw;
      align-items: center;
    }
  `,
};
