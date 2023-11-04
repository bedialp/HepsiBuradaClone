import TopLinks from "./components/TopLinks";
import Header from "./components/Header";
import ColorfulLine from "./components/ColorfulLine";
import MenuBar from "./components/MenuBar";
import Opportunities from "./components/Opportunities";

export default function App() {
  return (
    <>
      {/* toplinks */}
      <TopLinks items={topLinkItems} />
      {/* HEADERS */}
      <Header />
      {/* COLORFULL LINE */}
      <ColorfulLine />
      {/* MENU BAR */}
      <MenuBar items={menuItems} />
      {/* APPORTUNITIES */}
      <Opportunities />
    </>
  );
}
