const Footer = () => {
  return (
    <footer className="bg-[#64B5C5] text-white text-center pt-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-2 uppercase">КОНТАКТНЫЕ ДАННЫЕ</h2>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between text-2xl items-center">
          {/* Left Section - Address & Contact */}
          <div className="md:text-left text-center">
            <p className="mb-1">Адрес: г. Москва,</p>
            <p className="mb-1">Волоколамское шоссе д.1 стр. 1, офис 606С</p>
            <p className="mb-3">+7 (915) 129-09-27 | office@pathologica.ru</p>
            <p className="mb-1">График работы: пн-пт 10:00 - 18:00</p>
          </div>

          {/* Middle Section - Location Icon */}
          <div className="my-6 md:my-0">
            <div className="bg-white p-3 rounded-md shadow-md">
              <img
                src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                alt="Location"
                className="w-6 h-6"
              />
            </div>
          </div>

          {/* Right Section - Links */}
          <div className="md:text-right text-center">
            <ul className=" font-medium">
              {[
                "Прайс-лист",
                "Договор оферты",
                "PathoLogica Service",
                "Условия использования",
                "Политика конфиденциальности",
              ].map((item, index) => (
                <li key={index} className="mb-1 hover:underline cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-4  text-blue-950 bg-white py-2 font-bold text-sm">
        © 2023 Все права защищены
      </div>
    </footer>
  );
};

export default Footer;
