"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        x: -90, // Start position (shifted left)
      },
      {
        x: 90, // Moves 100px to the right
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom", // Starts when image enters viewport
          end: "bottom top", // Ends when image leaves viewport
          scrub: 1, // Smooth scrolling effect
        },
      }
    );
  }, []);

  return (
    <section className="flex flex-col md:flex-row  h-[42rem] border border-[#2f606c]">
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
      <div className="w-full md:w-1/2 bg-[#2f606c] text-white p-12 pr-36 flex flex-col justify-center">
        <h2 className="text-6xl font-bold mb-14">PathoLogica Service</h2>
        <p className="mb-4 text-lg text-justify">
          &nbsp; &nbsp; PathoLogica Service — это общественно направленный
          проект, созданный с целью повышения доступности качественной
          диагностики онкологических заболеваний в России и странах СНГ.
          Эксперты PathoLogica Service выполняют исследования на современном
          оборудовании и коллегиально устанавливают диагноз в самых сложных
          случаях.
        </p>
        <p className="mb-6 text-lg text-justify">
          &nbsp; На нашем сайте Вы можете заказать проведение цитологического
          или гистологического исследований, а также консультативный пересмотр
          готовых препаратов. Для этого Вам не придётся выходить из дома: после
          оформления заявки курьер доставит материал нашим экспертам, а затем
          привезет его назад вместе с готовым заключением. Скан заключения Вы
          получите на электронную почту сразу после завершения исследования.
        </p>
        <div>
          <button className="bg-white float-end text-xl font-bold text-[#323232] px-3 py-1.5 w-fit cursor-pointer hover:bg-[#323232] hover:text-white transition-all duration-500 rounded-3xl border border-[#323232] shadow-md ">
            Подробнее
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
