import React from 'react'
import { motion } from 'framer-motion'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import content from '../../content/content'

function StepsNovoTemplate({ colorMode }) {
  const steps = Object.values(content.texts.steps.cards)

  // Classes dinâmicas conforme colorMode
  let text,
    textOpacity,
    backgroundMode,
    stepNumberBg,
    stepNumberText,
    lineColor,
    textDestaque,
    image

  switch (colorMode) {
    case 'light':
      backgroundMode = 'bg-secondary/60'
      text = 'text-corTitulosPreto'
      textOpacity = 'text-corOutrosTextosPreto'
      stepNumberBg = 'bg-white'
      stepNumberText = 'text-primaryDark'
      lineColor = 'bg-primaryDark/20'
      textDestaque = 'text-primaryDark'
      image = ' border-[8px] border-white'
      break
    case 'dark':
      backgroundMode = 'bg-darkOpacity'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      backgroundMode = 'bg-dark'
      stepNumberBg = 'bg-dark'
      stepNumberText = 'text-primaryLight'
      lineColor = 'bg-primaryLight/20'
      textDestaque = 'text-primaryLight'
      image = ' border-[8px] border-borderImage'

      break
    default:
      backgroundMode = 'bg-secondary/60'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      backgroundMode = 'bg-secondary/60'
      stepNumberBg = 'bg-white'
      stepNumberText = 'text-primaryDark'
      lineColor = 'bg-primaryDark/20'
      textDestaque = 'text-primaryDark'
      image = ' border-[8px] border-white'
  }

  return (
    <SectionArea className={backgroundMode} data-theme={colorMode}>
      <SectionWrapper>
        <section>
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Imagem */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="order-2 lg:order-1 relative"
              >
                {/* <div
                  className={`absolute inset-0 ${
                    colorMode === 'dark'
                      ? 'bg-primaryLight/20'
                      : 'bg-primaryDark/20'
                  } rounded-[3rem] rotate-3 scale-100`}
                /> */}
                <div
                  className={`relative rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-black/5 bg-gray-100 ${image}`}
                >
                  {' '}
                  <img
                    src={content.texts.steps.img}
                    alt={content.texts.steps.alt}
                    className={`relative rounded-[2rem] shadow-xl w-full m-auto scale-105 hover:scale-100 transition-transform duration-700`}
                    width={726}
                    height={726}
                  />
                </div>
              </motion.div>

              {/* Passos */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className="order-1 lg:order-2 space-y-12"
              >
                <div>
                  <span
                    className={`text-xs mb-2 block font-bold font-secondFont tracking-wider uppercase ${
                      colorMode === 'dark'
                        ? 'text-primaryLight'
                        : 'text-primaryDark'
                    }`}
                  >
                    {content.texts.steps.miniTag}
                  </span>
                  <h1
                    className={` text-3xl md:text-4xl font-mainFont font-medium mb-4 ${text}`}
                  >
                    {content.texts.steps.title}
                  </h1>
                </div>

                <div className="space-y-8">
                  {steps.map((item, idx) => (
                    <div key={idx} className="flex gap-6 relative">
                      {idx !== steps.length - 1 && (
                        <div
                          className={`absolute left-[1.65rem] top-12 bottom-0 w-0.5 ${lineColor}`}
                        />
                      )}
                      <div
                        className={`w-14 h-14 rounded-full ${stepNumberBg} border-2 border-primary ${stepNumberText} flex items-center justify-center text-xl font-bold font-mainFont shrink-0 shadow-sm z-10`}
                      >
                        {item.stepNumber}
                      </div>
                      <div className="pt-2">
                        <h1
                          className={`text-xl font-bold font-mainFont mb-2 ${text}`}
                        >
                          {item.cardTitle}
                        </h1>
                        <p
                          className={`text-sm font-secondFont font-light ${textOpacity}`}
                        >
                          {item.cardDescription}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  )
}

export default StepsNovoTemplate
