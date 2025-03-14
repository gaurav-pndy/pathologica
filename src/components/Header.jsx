import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { LuMail, LuPhone } from "react-icons/lu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-100 ">
      {/* Top Strip */}
      <div className="bg-[#5ebac5]   px-4 py-2.5   text-blue-700 ">
        <div className="max-w-7xl flex justify-end items-center space-x-4 mx-auto">
          <BsTelephone className="cursor-pointer text-3xl" />
          <CiMail className="cursor-pointer text-4xl" />
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[#e0e0e0] p-1 pb-5 ">
        {/* Logo Section */}
        <div className="flex  space-x-3 items-center max-w-[84rem] mx-auto">
          <div className="flex items-center ">
            <div className="w-[26rem]  ">
              <img
                src="https://static.wixstatic.com/media/e6f22e_26677178adb448a9a9816ef76b9020b9~mv2.png/v1/fill/w_529,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%20%D0%BF%D0%B0%D1%82%D0%BE%D0%BB%D0%BE%D0%B4%D0%B6%D0%B8%D0%BA%D0%B8%20%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9.png"
                alt="Logo"
                className=""
              />
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="overflow-hidden rounded-3xl shadow-md shadow-black/30 w-full mr-10 border border-gray-300">
            <ul className="flex w-full">
              {[
                { name: "О нас", path: "/about" },
                { name: "Эксперты сервиса", path: "/experts" },
                { name: "Наши услуги", path: "/services" },
                { name: "Стоимость услуг", path: "/pricing" },
                { name: "Подать заявку", path: "/apply" },
                { name: "Доставка и оплата", path: "/shipping" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex-grow bg-gradient-to-b from-[#f7f7f7] to-[#c4c4c4] transition-all duration-500 
                   hover:shadow-[inset_0px_-16px_12px_rgba(0,0,0,0.15)] 
                   border-l border-gray-400 first:border-l-0 last:border-r-0"
                >
                  <Link
                    to={item.path}
                    className="block text-center text-lg py-3 text-black cursor-pointer w-full"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
