import { ChevronDown } from "lucide-react";
import { MapPin, User2, ShoppingCart } from "lucide-react";
import PropTypes from "prop-types";
import {  useAuthContext } from "../../../contexts/authContext";

export default function HeaderButtons() {
  const {auth, setAuth} = useAuthContext();

  const onLoginClick = () => {
    setAuth(true);
  }

  const onLogoutClick = () => {
    setAuth(false);
  }

    HeaderButtons.propTypes = {
      isAuthenticated: PropTypes.bool.isRequired,
      onLogin: PropTypes.func.isRequired,
      onLogout: PropTypes.func.isRequired,
    };
    return (
      <div className="flex flex-row gap-4 ps-4 items-end">
        {/* KONUM */}
        <button className="flex flex-row pe-6">
          <div className="py-2 px-3">
            <MapPin />
          </div>
          <div className="flex flex-col items-start">
            <div className="w-100">Konum</div>
            <div className="font-light text-xs text-premium">Konum Seç</div>
          </div>
        </button>
  
        {/* GİRİŞ YAP / ÇIKIŞ YAP */}
        {auth ? (
          <button
            className="flex flex-row pe-2 border-2 rounded-md border-gray-500"
            onClick={onLogoutClick}
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
            className="flex flex-row pe-2 border-2 rounded-md border-gray-500 px-1 items-center"
            onClick={onLoginClick}
          >
            <div className="py-2 px-2">
              <User2 size={20} />
            </div>
            <div className="flex flex-col items-start">
              <div className="w-100 leading-3 font-semibold">Giriş Yap</div>
              <div className="font-light text-xs">veya üye ol</div>
            </div>
            <ChevronDown size={20} className="text-zinc-800 px-1" />
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