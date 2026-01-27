export default function IconButton(props) {
  const { icon, label, ariaLabel, className } = props

  return (
    <button
      className={`${className} w-10 h-10 rounded-full scale-100 hover:scale-95 transition-all duration-500 flex items-center justify-center`}
      aria-label={ariaLabel || label}
    >
      {icon && <span className="flex items-center justify-center">{icon}</span>}
    </button>
  )
}
