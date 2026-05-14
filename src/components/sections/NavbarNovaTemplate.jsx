import React, { useEffect, useState, useRef } from "react";
import { Menu, Target, X } from "lucide-react";
import { motion } from "framer-motion";
import content from "../../content/content";
// Importamos scroller para scroll manual
import { Link, scroller } from "react-scroll";
import ButtonReflexo from "../interactives/ButtonReflexo";
import SectionWrapper from "../../components/sectionElements/SectionWrapper";

// PrimeReact
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

function NavbarNovaTemplate({
  colorMode,
  backgrondMode,
  textOpacity,
  hoverLinks,
  colorMenu,
  bgOpacitySidebar,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [selectedService, setSelectedService] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const labels = content.texts.navbar.menuItems;
  const ids = content.texts.navbar.menuId;

  const areaAtuacaoLinks = [
    { label: "Direito Família", id: "direito-familia" },
    { label: "Direito Civil", id: "direito-civil" },
    { label: "Direito Consumidor", id: "direito-consumidor" },
    { label: "Direito Imobiliário", id: "direito-imobiliario" },
    { label: "Direito Trabalhista", id: "direito-trabalhista" },
  ];

  // Função para scroll manual ao selecionar no Dropdown
  const handleDropdownChange = (e) => {
    const selectedId = e.value;

    if (selectedId === "direito-familia") {
      window.open("https://divorcio.brasilmatos.com.br/", "_blank");
      setIsMobileMenuOpen(false);
      return;
    }

    if (selectedId === "direito-trabalhista") {
      window.open("https://trabalhista.brasilmatos.com.br/", "_blank");
      setIsMobileMenuOpen(false);
      return;
    }

    if (selectedId === "direito-civil") {
      window.open("https://bloqueios.brasilmatos.com.br/", "_blank");
      setIsMobileMenuOpen(false);
      return;
    }

    const targetId = "feature";
    setSelectedService();

    if (targetId) {
      scroller.scrollTo(targetId, {
        duration: 500,
        smooth: true,
        offset: -90,
      });

      setIsMobileMenuOpen(false);
    }
  };

  // Lógica de cores
  switch (colorMode) {
    case "light":
      backgrondMode = "bg-white";
      textOpacity = "text-corTitulosPreto";
      hoverLinks = " bg-gradient-to-r from-primaryDark to-primaryDark ";
      colorMenu = "text-primaryDark";
      bgOpacitySidebar = "bg-white/70";
      break;
    case "dark":
      backgrondMode = "bg-black";
      textOpacity = "text-corOutrosTextosBranca";
      hoverLinks = " bg-gradient-to-r from-primaryLight to-primaryLight ";
      colorMenu = "text-primaryLight";
      bgOpacitySidebar = "bg-black/70";
      break;
    default:
      backgrondMode = "bg-white";
      textOpacity = "text-corOutrosTextosBranca";
      hoverLinks = " bg-gradient-to-r from-primaryDark to-primaryDark ";
      colorMenu = "text-primaryDark";
      bgOpacitySidebar = "bg-white/70";
  }

  return (
    <SectionWrapper>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
          isScrolled
            ? `${backgrondMode} backdrop-blur-md py-2 shadow-sm h-auto`
            : "bg-transparent py-3"
        }`}
      >
        <div className="container mx-auto flex items-center m-auto max-w-[1215px] h-full w-[90%] justify-between py-2">
          {/* Logo */}
          <div
            className={`flex flex-col z-20 relative ${
              isScrolled
                ? "w-[25%] tablet1:w-[15%] desktop3:w-[10%] duration-500 transition-all"
                : "w-[30%] tablet1:w-[20%] desktop3:w-[15%] duration-500 transition-all"
            }`}
          >
            <img
              src={content.texts.navbar.logo.img}
              alt={content.texts.navbar.logo.alt}
              className="w-[100%]"
            />
          </div>

          {/* Desktop Nav */}
          <div className="items-center hidden gap-8 font-medium desktop1:flex text-md font-secondFont">
            {labels.map((item, index) => {
              if (item === "Áreas de Atuação") {
                return (
                  <div
                    key={item}
                    className="relative py-2"
                    onMouseEnter={() => dropdownRef.current.show()}
                    onMouseLeave={() => dropdownRef.current.hide()}
                  >
                    <label
                      htmlFor="areas-atuacao-desktop"
                      className="sr-only"
                      id="areas-atuacao-label-desktop"
                    >
                      Selecionar área de atuação
                    </label>

                    <Dropdown
                      inputId="areas-atuacao-desktop"
                      aria-labelledby="areas-atuacao-label-desktop"
                      ref={dropdownRef}
                      value={selectedService}
                      aria-label="Selecionar área de atuação"
                      onChange={handleDropdownChange}
                      options={areaAtuacaoLinks}
                      optionLabel="label"
                      optionValue="id"
                      placeholder={item}
                      className="w-full bg-transparent border-none shadow-none md:w-14rem"
                      // style={{ color: 'inherit' }}
                      pt={{
                        root: { className: "bg-transparent border-none" },
                        input: {
                          className: `${textOpacity} p-0 font-secondFont`,
                        },
                        trigger: { className: "hidden" },
                      }}
                    />
                  </div>
                );
              }

              return (
                <Link
                  key={item}
                  to={ids[index]}
                  smooth={true}
                  duration={500}
                  offset={-90}
                  className={`cursor-pointer ${hoverLinks} bg-[length:0%_2px] bg-no-repeat bg-left-bottom transition-[background-size] duration-300 hover:bg-[length:100%_2px] ${textOpacity}`}
                >
                  {item}
                </Link>
              );
            })}

            <ButtonReflexo
              label="Contato"
              link={content.texts.links.ctaWhatsapp}
              colorMode={colorMode}
            />
          </div>

          {/* Mobile Toggle */}
          <button
            className="z-50 p-2 desktop1:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Botão para abrir e fechar a sidebar"
          >
            {isMobileMenuOpen ? (
              <X className={colorMenu} />
            ) : (
              <Menu width={30} height={30} className={colorMenu} />
            )}
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-40 w-full px-6 pt-24 desktop1:hidden">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-50"
              >
                <div
                  className={`flex flex-col gap-6 max-w-[500px] text-center items-center p-8 text-lg mx-auto font-secondFont font-medium border border-primary/20 rounded-md ${backgrondMode}`}
                >
                  {labels.map((item, index) => {
                    if (item === "Áreas de Atuação") {
                      return (
                        <React.Fragment key={item}>
                          <label
                            htmlFor="areas-atuacao-mobile"
                            className="sr-only"
                            id="areas-atuacao-label-mobile"
                          >
                            Selecionar área de atuação
                          </label>

                          <Dropdown
                            inputId="areas-atuacao-mobile"
                            aria-labelledby="areas-atuacao-label-mobile"
                            value={selectedService}
                            onChange={handleDropdownChange}
                            options={areaAtuacaoLinks}
                            optionLabel="label"
                            optionValue="id"
                            placeholder={item}
                            className="w-full bg-transparent border-none shadow-none md:w-14rem"
                            pt={{
                              root: { className: "bg-transparent border-none" },
                              input: {
                                className: `${textOpacity} p-0 font-secondFont text-paragraph5`,
                              },

                              trigger: { className: "hidden" },
                            }}
                          />
                        </React.Fragment>
                      );
                    }

                    return (
                      <Link
                        key={item}
                        to={ids[index]}
                        smooth={true}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`${textOpacity}`}
                      >
                        {item}
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
              <div
                className={`absolute inset-0 ${bgOpacitySidebar} h-screen w-screen top-0 left-0`}
                onClick={() => setIsMobileMenuOpen(false)}
              ></div>
            </div>
          )}
        </div>
      </nav>
    </SectionWrapper>
  );
}

export default NavbarNovaTemplate;
