"use client";
import React from "react";

const services = [
  {
    title: "ЦИТОЛОГИЧЕСКИЕ ИССЛЕДОВАНИЯ",
    description: [
      "Первичное цитологическое исследование",
      "Консультативный пересмотр цитологических препаратов",
      "Экспертное мнение",
    ],
    price: "9 000 руб.",
    image:
      "https://static.wixstatic.com/media/0422b59ac8e7469ab21b05a8ceba25ca.jpg",
  },
  {
    title: "ГИСТОЛОГИЧЕСКИЕ ИССЛЕДОВАНИЯ",
    description: [
      "Первичное гистологическое исследование",
      "Консультативный пересмотр гистологических препаратов",
      "Экспертное мнение",
    ],
    price: "15 000 руб.",
    image:
      "https://static.wixstatic.com/media/nsplsh_4c394556334f6f674c6830~mv2.jpg",
  },
  {
    title: "КОМПЛЕКСНЫЕ ИССЛЕДОВАНИЯ",
    description: [
      "Гистологическое исследование препарата",
      "Консультативный пересмотр гистологических препаратов",
      "Экспертное мнение",
    ],
    price: "20 500 руб.",
    image:
      "https://static.wixstatic.com/media/e6f22e_6c9d7d7880a744f580a2a121406b2a22~mv2.jpeg",
  },
];

const OurServicesHome = () => {
  return (
    <section className="text-[#333333] py-10">
      <div className=" mx-auto px-6 md:px-20">
        <h2 className="text-5xl  font-bold text-center mb-8">Наши услуги</h2>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg overflow-hidden">
              <div className="h-52 w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 ">
                <h3 className="text-xl text-center  font-bold my-2">
                  {service.title}
                </h3>
                <ul className=" text-sm leading-6 font-semibold my-4">
                  {service.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="text-lg font-semibold">
                  От: <span className="text-black">{service.price}</span>
                </p>
                <button className="mt-4 px-4 py-2 border border-gray-600 rounded-xl text-black font-semibold hover:bg-gray-200 transition">
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <button className="bg-[#5ebac5] text-white text-xl md:text-3xl font-semibold px-16 py-3 rounded-full shadow-md shadow-[#b1b0b0] hover:bg-[#8c91b7] transition cursor-pointer">
            СТОИМОСТЬ УСЛУГ
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurServicesHome;
