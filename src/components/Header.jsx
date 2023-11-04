import { useState } from "react";
import { MapPin, User2, ShoppingCart } from "lucide-react";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
import PropTypes from "prop-types";

// HeaderLogo, HeaderSearch, HeaderButtons bileşenlerini önceki gibi ayrı dosyalarda tanımlayabilirsiniz.

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Giriş yapma işlemi gerçekleştiğinde bu fonksiyon tetiklenebilir.
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Çıkış yapma işlemi gerçekleştiğinde bu fonksiyon tetiklenebilir.
    setIsAuthenticated(false);
  };

  return (
    <div className="flex">
      {/* Header Logo */}
      <HeaderLogo />

      {/* Header Search */}
      <HeaderSearch />

      {/* Header Buttons */}
      <HeaderButtons
        isAuthenticated={isAuthenticated}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
    </div>
  );
}

// HeaderButtons bileşeni
function HeaderButtons({ isAuthenticated, onLogin, onLogout }) {
  HeaderButtons.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
  };
  return (
    <div className="flex flex-row gap-4 px-4 items-end">
      {/* KONUM */}
      <button className="flex flex-row">
        <div className="py-2 px-3">
          <MapPin />
        </div>
        <div className="flex flex-col items-start">
          <div className="w-100">Konum</div>
          <div className="font-light text-xs text-premium">Konum Seç</div>
        </div>
      </button>

      {/* GİRİŞ YAP / ÇIKIŞ YAP */}
      {isAuthenticated ? (
        <button
          className="flex flex-row pe-2 border-2 rounded-md border-gray-500"
          onClick={onLogout}
        >
          <div className="py-2 px-3">
            <User2 size={20} />
          </div>
          <div className="flex flex-col items-start">
            <div className="w-100">Çıkış Yap</div>
            <div className="font-light text-xs">Hesabım</div>
          </div>
        </button>
      ) : (
        <button
          className="flex flex-row pe-2 border-2 rounded-md border-gray-500"
          onClick={onLogin}
        >
          <div className="py-2 px-3">
            <User2 size={20} />
          </div>
          <div className="flex flex-col items-start">
            <div className="w-100">Giriş Yap</div>
            <div className="font-light text-xs">veya üye ol</div>
          </div>
        </button>
      )}

      {/* SEPETİM */}
      <button className="flex flex-row border-2 rounded-md bg-gray-500 text-white">
        <div className="py-2 px-3">
          <ShoppingCart size={20} />
        </div>
        <div className="w-100 py-2 px-4 font-bold">Sepetim</div>
      </button>
    </div>
  );
}
