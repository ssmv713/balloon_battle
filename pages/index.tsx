import { useCustomMediaQuery } from "common/useCustomMediaQuery";
import { About, Features } from "ui";
import { AboutMobile } from "ui/about/aboutMobile";
import { Header } from "ui/header/header";
import { HeaderMobileWrapper } from "ui/header/header-m";
import { Main } from "ui/main/main";
import { MainMobile } from "ui/main/main-m";
import { Slide } from "ui/features/slide";
import { PlayGame } from "ui/playgame/playgame";
import { PlayGameMobile } from "ui/playgame/playgameMobile";
import { Characters } from "ui/character/character";
import { Video } from "ui/video/video";
export default function Home() {
  const { isMobile } = useCustomMediaQuery();
  return (
    <div>
      {isMobile ? <HeaderMobileWrapper /> : <Header />}
      {isMobile ? <MainMobile /> : <Main />}
      {isMobile ? <AboutMobile /> : <About />}
      {isMobile ? <Slide /> : <Features />}
      {isMobile ? <PlayGameMobile /> : <PlayGame />}
      <Characters />
      <Video />
    </div>
  );
}
