import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { X, MapPin, Phone, Mail } from "lucide-react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import { Link } from "react-scroll";
import FooterSocialIcons from "../sectionElements/footer/FooterSocialIcons";
import content from "../../content/content";

function FooterNovoTemplate({
  mapa,
  colorMode,
  phoneSecond,
  expediente,
  adress,
  email,
  emailSecond,
}) {
  const labels = content.texts.navbar.menuItems;
  const ids = content.texts.navbar.menuId;
  const [visible, setVisible] = useState(false);

  const openDialog = async () => {
    await import("primereact/resources/themes/lara-light-cyan/theme.css");
    setVisible(true);
  };

  const grid = mapa ? "lg:grid-cols-4" : "lg:grid-cols-3";

  // Classes dinâmicas de acordo com colorMode
  let text, textOpacity, iconColor, backgroundMode;
  switch (colorMode) {
    case "light":
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      iconColor = "text-primaryDark/60";
      backgroundMode = "bg-secondary/60";
      break;
    case "dark":
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      iconColor = "text-primaryLight/80";
      backgroundMode = "bg-black";
      break;
    default:
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      iconColor = "text-primaryDark/60";
      backgroundMode = "bg-secondary/60";
  }

  return (
    <SectionArea className={`${backgroundMode} pb-4`} paddingbot={false}>
      <SectionWrapper>
        <footer className={`${textOpacity}`}>
          <div className="container mx-auto">
            <div
              className={`grid sm:grid-cols-2 lg:grid-cols-3 ${grid} items-start gap-12 tablet2:gap-2 desktop1:gap-12 mb-8 w-full text-justify`}
            >
              {/* Logo e infos */}
              <div className="space-y-6">
                <div className="w-fit">
                  <a
                    href="https://brasilmatos.com.br/"
                    target="_blank"
                    aria-label="Link para site principal das Advogadas"
                    className="cursor-pointer w-fit"
                  >
                    <img
                      src={content.texts.navbar.logo.img}
                      alt={content.texts.navbar.logo.alt}
                      className="w-[187px]"
                      width={187}
                      height={119}
                    />
                  </a>
                </div>

                <p
                  className={`leading-relaxed font-secondFont font-light ${textOpacity}`}
                >
                  {content.texts.footer.footerText}
                </p>
                <p
                  className={`leading-relaxed font-secondFont font-light ${textOpacity}`}
                >
                  {expediente && (
                    <>
                      <h1 className={`font-bold font-secondFont ${text}`}>
                        Horário de expediente:
                      </h1>
                      {content.texts.infos.footerexpediente}
                    </>
                  )}
                </p>
              </div>

              {/* Links rápidos */}
              <div className="flex flex-col justify-center gap-8 sm:items-center tablet2:justify-center ">
                <div className="w-fit ">
                  <h1
                    className={`font-bold font-secondFont text-lg mb-6 ${text}`}
                  >
                    Links Rápidos
                  </h1>
                  <ul className="space-y-4 font-light font-secondFont">
                    {labels.map((item, index) => (
                      <li key={item}>
                        <Link
                          to={ids[index]}
                          aria-label={`Link para ${item}`}
                          smooth={true}
                          duration={500}
                          offset={-90}
                          spy={true}
                          hashSpy={true}
                          tag="a"
                          href={`#${ids[index]}`}
                          className="cursor-pointer bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat bg-left-bottom transition-[background-size] duration-300 hover:bg-[length:100%_2px]"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-1 mt-6 ">
                    <FooterSocialIcons
                      instagram
                      facebook
                      linkedin
                      tiktok
                      x
                      youtube
                    />
                  </div>
                </div>
              </div>

              {/* Contato */}
              <div className="flex flex-col justify-start gap-6 tablet2:justify-start">
                <div className="w-fit">
                  <h1
                    className={`font-bold font-secondFont text-lg mb-6 ${text}`}
                  >
                    Contato
                  </h1>
                  <ul className="space-y-4">
                    {adress && (
                      <li className="flex items-start gap-3">
                        <MapPin
                          className={`w-5 h-5 shrink-0 ${iconColor} mt-[1px]`}
                        />
                        <span className="font-light font-secondFont">
                          {content.texts.infos.adress}
                        </span>
                      </li>
                    )}
                    <li className="flex items-center gap-3">
                      <Phone className={`w-5 h-5 shrink-0 ${iconColor}`} />
                      <span className="font-light font-secondFont">
                        {content.texts.infos.phone}
                      </span>
                    </li>
                    {phoneSecond && (
                      <li className="flex items-center gap-3">
                        <Phone className={`w-5 h-5 shrink-0 ${iconColor}`} />
                        <span className="font-light font-secondFont">
                          {content.texts.infos.phoneSecundario}
                        </span>
                      </li>
                    )}
                    {email && (
                      <li className="flex items-center gap-3">
                        <Mail className={`w-5 h-5 shrink-0 ${iconColor}`} />
                        <span className="font-light font-secondFont text-paragraph4">
                          {content.texts.infos.email}
                        </span>
                      </li>
                    )}
                    {emailSecond && (
                      <li className="flex items-center gap-3">
                        <Mail className={`w-5 h-5 shrink-0 ${iconColor}`} />
                        <span className="font-light font-secondFont text-paragraph3 tablet2:text-paragraph3 desktop1:text-paragraph3">
                          {content.texts.infos.emailSecundario}
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Mapa */}
              {mapa && (
                <div className="h-64 overflow-hidden rounded-xl">
                  <iframe
                    src={content.texts.maps.embedsrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className=""
                  ></iframe>
                </div>
              )}
            </div>

            <hr
              className={`pb-6 border-t border-black ${
                colorMode === "light" ? "opacity-10 " : "opacity-20"
              } w-full`}
            />

            {/* Footer Bottom */}
            <div
              className={` text-center font-secondFont text-sm ${textOpacity}`}
            >
              <p>&copy; {content.texts.footer.copyrightLine}</p>
              <br />
              <div>
                <button
                  onClick={openDialog}
                  aria-label="Abre um Modal com os termos da Política de privacidade"
                  className="underline cursor-pointer"
                >
                  Políticas de privacidade
                </button>{" "}
                - Desenvolvido com excelência por{" "}
                <a
                  target="_blank"
                  href="https://paperstreet.com.br"
                  className="underline"
                >
                  Paper Street
                </a>
              </div>
              <p
                className={`font-secondFont text-paragraph2 desktop1:text-paragraph3 mt-4 ${textOpacity}`}
              >
                Esse site não faz parte do Google LLC nem do Facebook Inc. e não
                oferecemos nenhum tipo de serviço oficial do governo.
                Trabalhamos exclusivamente com serviços jurídicos.
              </p>
            </div>
          </div>

          {/* Modal de privacidade */}
          <Dialog
            className="font-secondFont"
            closeIcon={<X size={20} />}
            visible={visible}
            onHide={() => setVisible(false)}
            style={{ width: "50vw" }}
            breakpoints={{
              "4000px": "641px",
              "1024px": "641px",
              "641px": "85vw",
            }}
          >
            {content.texts.footer.privacidade}
          </Dialog>
        </footer>
      </SectionWrapper>
    </SectionArea>
  );
}

export default FooterNovoTemplate;
