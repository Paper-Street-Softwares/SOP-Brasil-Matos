import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import content from '../../content/content'
import { Instagram, ArrowRight } from 'lucide-react'
import iconTikTok from '../../assets/imgs/icons/tiktok.png'

function SocialMediaTemplate({ colorMode }) {
  let backgroundMode,
    text,
    textOpacity,
    cardBg,
    borderCard,
    arrowColor,
    imageBorder,
    miniTag

  switch (colorMode) {
    case 'light':
      backgroundMode = 'bg-secondary/60'
      text = 'text-corTitulosPreto'
      textOpacity = 'text-corOutrosTextosPreto'
      cardBg = 'bg-white'
      borderCard = 'border-border'
      arrowColor = 'text-mutedForeground group-hover:text-primaryDark'
      imageBorder = 'border-white'
      miniTag = 'text-primaryDark'
      break

    case 'dark':
      backgroundMode = 'bg-black'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      cardBg = 'bg-gray-900'
      borderCard = 'border-gray-700'
      arrowColor = 'text-mutedForeground group-hover:text-primaryLight'
      imageBorder = 'border-borderImage'
      miniTag = 'text-primaryLight'
      break

    default:
      backgroundMode = 'bg-white'
      text = 'text-corTitulosPreto'
      textOpacity = 'text-corOutrosTextosPreto'
      cardBg = 'bg-white'
      borderCard = 'border-border'
      arrowColor = 'text-mutedForeground group-hover:text-primaryDark'
      imageBorder = 'border-white'
      miniTag = 'text-primaryLight'
  }

  return (
    <SectionArea className={backgroundMode}>
      <SectionWrapper>
        <section>
          <div className="container mx-auto">
            {/* Cabeçalho */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span
                className={`font-bold font-secondFont tracking-wider uppercase text-xs mb-2 block ${miniTag}`}
              >
                {content.texts.about.aboutSocial.miniTag}
              </span>

              <h2
                className={`text-3xl md:text-4xl font-mainFont font-medium mb-4 ${text}`}
              >
                {content.texts.about.aboutSocial.title}
              </h2>

              <p className={`font-secondFont font-light ${textOpacity}`}>
                {content.texts.about.aboutSocial.subtitle}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Imagem */}
              <div className="flex justify-center overflow-visible">
                <div
                  className={`relative max-w-md w-full rounded-[2.5rem] shadow-2xl border-[8px] ${imageBorder}`}
                >
                  {/* GLOW */}
                  <div
                    className="absolute -inset-4 rounded-[3rem]
                 bg-gradient-to-tr from-purple-500 to-orange-400
                 opacity-20 blur-2xl pointer-events-none"
                  />

                  {/* CLIP DA IMAGEM */}
                  <div className="relative rounded-[2rem] overflow-hidden">
                    <img
                      src={content.texts.about.aboutSocial.img.img}
                      alt={content.texts.about.aboutSocial.img.alt}
                      className="w-full scale-105 hover:scale-100 transition-transform duration-700 rounded-[1.5rem]"
                      width={448}
                      height={618}
                    />
                  </div>
                </div>
              </div>

              {/* Cards sociais */}
              <div className="space-y-8">
                {content.texts.links.instagram?.trim() && (
                  <a
                    href={content.texts.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Link para Instagram"
                    className={`group flex items-center gap-6 p-6 rounded-2xl border ${borderCard} hover:border-primary/30 hover:shadow-lg transition-all ${cardBg}`}
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 to-orange-500 text-white flex items-center justify-center shrink-0">
                      <Instagram className="w-7 h-7" />
                    </div>

                    <div>
                      <h1
                        className={`font-bold font-secondFont text-lg ${text}`}
                      >
                        Instagram
                      </h1>
                      <p
                        className={`font-secondFont font-light text-sm ${textOpacity}`}
                      >
                        Dicas diárias e bastidores
                      </p>
                    </div>

                    <ArrowRight
                      className={`ml-auto w-5 h-5 transition-colors ${arrowColor}`}
                    />
                  </a>
                )}

                {/* {content.texts.links.tiktok?.trim() && (
                  <a
                    href={content.texts.links.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Link para TikTok"
                    className={`group flex items-center gap-6 p-6 rounded-2xl border ${borderCard} hover:border-primary/30 hover:shadow-lg transition-all ${cardBg}`}
                  >
                    <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center shrink-0">
                      <img src={iconTikTok} className="invert w-8" alt="" />
                    </div>

                    <div>
                      <h1 className={`font-bold font-mainFont text-lg ${text}`}>
                        TikTok
                      </h1>
                      <p
                        className={`font-secondFont font-light text-sm ${textOpacity}`}
                      >
                        Conteúdo corporativo
                      </p>
                    </div>

                    <ArrowRight
                      className={`ml-auto w-5 h-5 transition-colors ${arrowColor}`}
                    />
                  </a>
                )} */}
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  )
}

export default SocialMediaTemplate
