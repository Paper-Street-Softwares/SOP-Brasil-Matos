import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import { ArrowRight, CheckCircle2, X } from 'lucide-react'
import { Dialog } from 'primereact/dialog'
import content from '../../content/content'
import ButtonReflexo from '../interactives/ButtonReflexo'
import { Button } from '../interactives/ButtonNovoTemplate'
import { Phone } from 'lucide-react'

function AboutNovoTemplate({ ButtonModal, colorMode }) {
  const [visible, setVisible] = useState(false)
  const [modalTitle, setModalTitle] = useState('')

  const onClick = () => {
    setModalTitle(content.texts.about.title)
    setVisible(true)
  }

  // Definindo classes conforme colorMode
  let backgroundMode,
    text,
    textOpacity,
    cardBg,
    iconBg,
    buttonBg,
    textDestaque,
    image

  switch (colorMode) {
    case 'light':
      backgroundMode = 'bg-secondary/60'
      text = 'text-corTitulosPreto'
      textOpacity = 'text-corOutrosTextosPreto'
      textDestaque = 'text-primaryDark'
      cardBg = 'bg-white/10'
      iconBg = 'bg-primaryDark/10 text-primaryDark'
      buttonBg = 'bg-primaryDark'
      image = ' border-[8px] border-white'
      break
    case 'dark':
      backgroundMode = 'bg-black'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      textDestaque = 'text-primaryLight'
      cardBg = 'bg-gray-800/20'
      iconBg = 'bg-primaryLight/20 text-primaryLight'
      buttonBg = 'bg-primaryLight'
      image = ' border-[8px] border-borderImage'
      break
    default:
      backgroundMode = 'bg-white'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      textDestaque = 'text-primaryDark'
      cardBg = 'bg-white/10'
      iconBg = 'bg-primaryDark/10 text-primaryDark'
      buttonBg = 'bg-primaryDark'
      image = ' border-[8px] border-white'
  }

  return (
    <SectionArea id="about" className={`${backgroundMode}`}>
      <SectionWrapper>
        <section className="w-full relative overflow-visible">
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-4 desktop1:gap-16 items-center">
              {/* Conteúdo textual */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="space-y-8"
              >
                <div>
                  {/* <span
                    className={`font-bold font-secondFont tracking-wider uppercase text-xs mb-2 block ${textDestaque}`}
                  >
                    {content.texts.about.miniTag}
                  </span> */}
                  <h2
                    className={`text-3xl md:text-4xl font-mainFont font-medium mb-4 flex flex-wrap gap-2 text-justify ${text}`}
                  >
                    {content.texts.about.FirstPartTitle}
                    <span className={`${textDestaque}`}>
                      {content.texts.about.DestaquePartTitle}
                    </span>
                    {content.texts.about.SecondPartTitle}
                  </h2>
                  <p
                    className={`font-secondFont font-light text-sm tablet1:text-lg leading-relaxed text-justify ${textOpacity}`}
                  >
                    {content.texts.about.subtitle}
                  </p>
                  <p
                    className={`font-secondFont font-light text-sm tablet1:text-lg leading-relaxed mt-6 text-justify ${textOpacity}`}
                  >
                    {content.texts.about.paragraph}
                  </p>

                  {ButtonModal && (
                    <Button
                      onClick={onClick}
                      className={`bg-transparent mt-4 border-none shadow-primary/20 font-secondFont py-0 uppercase font-bold transition-all px-0 hover:underline outline-none flex items-center gap-2 ${textDestaque}`}
                    >
                      {content.texts.about.buttonModalLabelAbout}
                      <ArrowRight width={24} height={24} />
                    </Button>
                  )}
                </div>

                {/* Lista de benefícios */}
                <div className="space-y-4 text-justify">
                  {[
                    {
                      title: 'Defesa Estratégica',
                      desc: 'Táticas sob medida para cada caso.',
                    },
                    {
                      title: 'Transparência Real',
                      desc: 'Tudo claro sobre riscos e andamento.',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg ${iconBg} mt-1`}>
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3
                          className={`font-bold font-secondFont ${text} text-justify`}
                        >
                          {item.title}
                        </h3>
                        <p
                          className={`text-sm font-secondFont font-light ${textOpacity} text-justify`}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-4 pt-4 w-fit justify-center items-start">
                  <ButtonReflexo
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                      </svg>
                    }
                    link={content.texts.links.ctaWhatsapp}
                    label={content.texts.hero.ctaButtonText}
                    colorMode={colorMode}
                  />
                  <ButtonReflexo
                    id="ligar"
                    icon={<Phone width={20} />}
                    link={`tel:${content.texts.infos.phone}`}
                    label="Emergência? Ligue agora!"
                    colorMode={colorMode}
                    bgClass="bg-[#ff2c2c]"
                    className="text-white"
                  />
                </div>
              </motion.div>

              {/* Imagem com destaque */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className="relative w-full mt-10 tablet1:mt-24 desktop1:mt-10 m-auto overflow-visible mb-10"
              >
                <div className="relative rounded-3xl shadow-2xl ring-1 ring-black/5">
                  {/* CLIP DA IMAGEM */}
                  <div
                    className={`relative rounded-3xl overflow-hidden  ${image}`}
                  >
                    <img
                      src={content.texts.about.imagem.img}
                      alt={content.texts.about.imagem.alt}
                      className="w-full scale-105 hover:scale-100 transition-transform duration-700 rounded-[1rem]"
                      width={726}
                      height={726}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Modal */}
          <Dialog
            className="font-secondFont bg-white p-4 rounded-md"
            closeIcon={<X size={20} />}
            header={
              <span className="font-secondFont px-4 text-justify">
                {content.texts.about.titleModal}
              </span>
            }
            visible={visible}
            onHide={() => setVisible(false)}
            style={{ width: '50vw' }}
            breakpoints={{
              '4000px': '641px',
              '1024px': '641px',
              '641px': '85vw',
            }}
          >
            <div className="text-paragraph3 px-4 pb-4">
              <p className={`mt-[15px] mb-[20px] text-justify ${textOpacity}`}>
                {content.texts.about.modal}
              </p>
              <ButtonReflexo
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                  </svg>
                }
                link={content.texts.links.ctaWhatsapp}
                label={content.texts.navbar.ctaButtonText}
                colorMode={colorMode}
              />
            </div>
          </Dialog>
        </section>
      </SectionWrapper>
    </SectionArea>
  )
}

export default AboutNovoTemplate
