import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const unimallRef = useRef(null);
  const mikadoRef = useRef(null);
  const medischedRef = useRef(null);
  const felixbestRef = useRef(null);
  const quickcartRef = useRef(null);
  const felixfoodsRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [
      unimallRef.current,
      mikadoRef.current,
      medischedRef.current,
      felixbestRef.current,
      quickcartRef.current,
      felixfoodsRef.current,
    ];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* UniMall */}
          <div ref={unimallRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/unimall.png" alt="UniMall App Interface" />
            </div>
            <div className="text-content">
              <h2>UniMall – Empowering UG Students to Sell with Ease</h2>
              <p className="text-white-50 md:text-xl">
                A web and mobile app tailored for University of Ghana students to upload and showcase products for visibility and increased sales.
              </p>
            </div>
          </div>

          {/* Other Projects */}
          <div className="project-list-wrapper overflow-hidden">
            {/* MikadoCommerce */}
            <div className="project" ref={mikadoRef}>
              <div className="image-wrapper bg-[#FDE6F1]">
                <img src="/images/mikado.png" alt="MikadoCommerce App" />
              </div>
              <h2>MikadoCommerce – Ghana-Wide Online Marketplace</h2>
              <p className="text-white-50 md:text-base mt-2">
                A scalable web app that allows entrepreneurs across Ghana to reach customers and grow their digital businesses.
              </p>
            </div>

            {/* MediSched */}
            <div className="project" ref={medischedRef}>
              <div className="image-wrapper bg-[#D9F3F2]">
                <img src="/images/medisched.png" alt="MediSched App" />
              </div>
              <h2>MediSched – Access Health Professionals Online</h2>
              <p className="text-white-50 md:text-base mt-2">
                A platform that connects users to licensed doctors and health experts for consultation and treatment online.
              </p>
            </div>

            {/* FelixBestHommez */}
            <div className="project" ref={felixbestRef}>
              <div className="image-wrapper bg-[#FFF5E0]">
                <img src="/images/hommez.png" alt="FelixBestHommez App" />
              </div>
              <h2>FelixBestHommez – Real Estate Made Easy</h2>
              <p className="text-white-50 md:text-base mt-2">
                A real estate web platform where users can browse, rent, or buy properties easily and securely.
              </p>
            </div>

            {/* QuickCart */}
            <div className="project" ref={quickcartRef}>
              <div className="image-wrapper bg-[#EAF0FF]">
                <img src="/images/quickcart.png" alt="QuickCart App" />
              </div>
              <h2>QuickCart – Electronics Shopping Made Effortless</h2>
              <p className="text-white-50 md:text-base mt-2">
                A sleek electronics web app where users can shop phones, laptops, consoles, and accessories at their convenience.
              </p>
            </div>

            {/* FelixBest Foods */}
            <div className="project" ref={felixfoodsRef}>
              <div className="image-wrapper bg-[#FFF2F2]">
                <img src="/images/restaurant.png" alt="FelixBest Foods App" />
              </div>
              <h2>FelixBest Foods – Order Your Favorite Meals Fast</h2>
              <p className="text-white-50 md:text-base mt-2">
                A restaurant web app that enables users to browse menus and order food from a variety of local dishes — quick, easy, and delicious.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
