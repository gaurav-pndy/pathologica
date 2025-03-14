"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      x: 50, // Moves 50px to the right
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom", // Animation starts when the image enters the viewport
        scrub: true, // Smooth animation effect
      },
    });
  }, []);

  return (
    <section className="flex flex-col md:flex-row  h-[630px]">
      {/* Image Section */}
      <div className="w-full md:w-1/2 relative overflow-hidden">
        <img
          ref={imageRef}
          src="https://static.wixstatic.com/media/e6f22e_e5e78d0836d34599aaa943e2abfd29a6~mv2.jpg"
          alt="Microscope"
          className="absolute inset-0 w-full h-full object-cover scale-125"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 bg-[#336776] text-white p-12 pr-36 flex flex-col justify-center">
        <h2 className="text-6xl font-bold mb-14">PathoLogica Service</h2>
        <p className="mb-4 text-lg text-justify">
          &nbsp; &nbsp; PathoLogica Service — это общественно направленный
          проект, созданный с целью повышения доступности качественной
          диагностики онкологических заболеваний в России и странах СНГ.
          Эксперты PathoLogica Service выполняют исследования на современном
          оборудовании и коллегиально устанавливают диагноз в самых сложных
          случаях.
        </p>
        <p className="mb-4 text-lg text-justify">
          &nbsp; На нашем сайте Вы можете заказать проведение цитологического
          или гистологического исследований, а также консультативный пересмотр
          готовых препаратов. Для этого Вам не придётся выходить из дома: после
          оформления заявки курьер доставит материал нашим экспертам, а затем
          привезет его назад вместе с готовым заключением. Скан заключения Вы
          получите на электронную почту сразу после завершения исследования.
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-full shadow-md hover:bg-gray-200">
          Подробнее
        </button>
      </div>
    </section>
  );
};

export default Hero;
