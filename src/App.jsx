import TopLinks from "./components/TopLinks";
import Header from "./components/Header";
import ColorfulLine from "./components/ColorfulLine";
import MenuBar from "./components/MenuBar";
import Opportunities from "./components/Opportunities";

export default function App() {
  const topLinkItems = [
    "Siparişlerim",
    "Süper Fiyat, Süper Teklif",
    "Yurt Dışından",
    "Kampanyalar",
    "Girişimci Kadınlar",
    "Müşteri Hizmetleri",
    "Hepsiburada Premium",
    "Hepsiburada'da Satıcı Ol",
  ];
  const menuItems = [
    "Elektronik",
    "Moda",
    "Ev, Yaşam, Kırtasiye, Ofis",
    "Oto, Bahçe, Yapı Market",
    "Anne, Bebek, Oyuncak",
    "Spor, Outdoor",
    "Kozmetik, Kişisel Bakım",
    "Süpermarket, Pet Shop",
    "Kitap, Müzik, Film, Hobi",
  ];
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
