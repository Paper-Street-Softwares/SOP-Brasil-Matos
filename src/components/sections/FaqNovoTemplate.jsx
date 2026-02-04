import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../interactives/FaqNovo'
import content from '../../content/content'
import MotionDivDownToUp from '../animation/MotionDivDownToUp'

function FaqNovoTemplate({ colorMode }) {
  const faqs = Object.values(content.texts.faq.questions)

  // Classes dinâmicas conforme colorMode
  let text, textOpacity, hoverText, backgroundMode
  switch (colorMode) {
    case 'light':
      text = 'text-corTitulosPreto'
      text = 'text-corTitulosPreto'
      hoverText = 'hover:text-primaryDark'
      backgroundMode = 'bg-white'

      break
    case 'dark':
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      hoverText = 'hover:text-primaryLight'
      backgroundMode = 'bg-darkOpacity'
      break
    default:
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      hoverText = 'hover:text-primaryDark'
      backgroundMode = 'bg-white'
  }

  return (
    <SectionArea className={`${backgroundMode}`} id="faq">
      <SectionWrapper>
        <section className={` w-full`}>
          <div className="container mx-auto max-w-3xl">
            <MotionDivDownToUp>
              <div className="text-center mb-6">
                <span
                  className={`text-xs mb-2 block font-bold font-secondFont tracking-wider uppercase ${
                    colorMode === 'dark'
                      ? 'text-primaryLight'
                      : 'text-primaryDark'
                  }`}
                >
                  {content.texts.faq.miniTag}
                </span>
                <h2
                  className={`text-3xl md:text-4xl font-mainFont font-medium mb-2 ${text}`}
                >
                  {content.texts.faq.title}
                </h2>
                <p
                  className={`text-sm font-secondFont font-light opacity-90 text-justify ${textOpacity}`}
                >
                  {content.texts.faq.subtitle}
                </p>
              </div>
            </MotionDivDownToUp>
            {/* Header */}

            <MotionDivDownToUp>
              {/* Accordion */}
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-0"
              >
                {faqs.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="border-b border-border"
                  >
                    <AccordionTrigger
                      colorMode={colorMode}
                      className={`text-lg font-medium font-secondFont py-6 text-justify ${text}`}
                    >
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent
                      className={`font-secondFont font-light pb-6 leading-relaxed text-justify ${textOpacity}`}
                    >
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </MotionDivDownToUp>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  )
}

export default FaqNovoTemplate
