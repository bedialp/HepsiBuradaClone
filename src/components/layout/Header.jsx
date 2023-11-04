import HeaderLogo from "./header/HeaderLogo";
import HeaderSearch from "./header/HeaderSearch";
import HeaderButtons from "./header/HeaderButtons";

import TopLinks from "./header/TopLinks";
import { topLinkItems } from "../../assets/data/topLinkItems";
import ColorfulLine from "./header/ColorfulLine";
import { menuItems } from "../../assets/data/menuItems";
import MenuBar from "./header/MenuBar";

// HeaderLogo, HeaderSearch, HeaderButtons bileşenlerini önceki gibi ayrı dosyalarda tanımlayabilirsiniz.

export default function Header() {

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col max-w-[1400px]">
          <TopLinks items={topLinkItems} />
          <div className="flex flex-row">
            {/* Header Logo */}
            <HeaderLogo />

            {/* Header Search */}
            <HeaderSearch />

            {/* Header Buttons */}
            <HeaderButtons />
          </div>
        </div>
      </div>
      <ColorfulLine />
      <MenuBar items={menuItems} />
    </>
  );
}
