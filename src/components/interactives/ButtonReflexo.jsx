import { useColorMode } from '../../context/UseContextArchive'
import { whatsAppThemes } from '../../context/UseContextArchive'

export default function ButtonReflexo({
  link,
  icon,
  label,
  reflexAnimation = true,
  padding,
  className,
  bgClass,
  id,
  ...props
}) {
  const { colorMode, whatsAppColor } = useColorMode()
  const isLigar = id === 'ligar'
  const effectiveWhatsAppColor = isLigar ? false : whatsAppColor

  const themes = {
    light: 'bg-primaryDark text-corTitulosBranca border border-primaryDark/20',
    dark: 'bg-primaryLight text-corTitulosPreto',
    default: 'bg-secondary text-corTitulosPreto border border-primaryDark/20',
  }

  const shineThemes = {
    light: 'bg-white/40',
    dark: 'bg-white/40',
    default: 'bg-black/40',
  }

  const colors = effectiveWhatsAppColor
    ? whatsAppThemes[colorMode]
    : bgClass ?? themes[colorMode]

  const shineColor = shineThemes[colorMode]
  const spacing = padding || 'px-6 py-3'

  const { showGlobalButton } = useColorMode()

  if (id === 'ligar' && !showGlobalButton) {
    return null
  }
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      aria-label="Botão de contato"
      className={`${className}
          relative
          overflow-hidden
          inline-flex
          items-center
          justify-center
          ${colors} 
          ${spacing}
          font-normal font-secondFont rounded-full text-lg 
          transition-all scale-100 hover:scale-90 duration-500 shadow-lg ${
            colorMode === 'dark' ? 'shadow-black' : 'shadow-primaryDark/20'
          } gap-3 text-paragraph3 tablet1:text-paragraph4
          min-w-[10px] 
          text-center 
        `}
    >
      {reflexAnimation && (
        <span
          className={`
              absolute top-0 left-0 w-full h-full 
              ${shineColor} animate-shine-loop
              z-0
              pointer-events-none
            `}
        />
      )}

      <span className="relative z-10 flex items-center gap-3 ">
        {icon}
        {label}
      </span>
    </a>
  )
}
