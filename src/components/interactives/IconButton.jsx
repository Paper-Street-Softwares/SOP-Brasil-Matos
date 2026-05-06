export default function IconButton(props) {
  const { icon, label, ariaLabel, className } = props;

  return (
    <button
      className={`${className} w-12 h-12 rounded-full hover:scale-110 hover:text-white transition-all duration-100 flex items-center justify-center`}
      aria-label={ariaLabel}
    >
      <div className="flex items-center text-center">
        <div className="flex flex-col justify-end text-colorBlack">{icon}</div>
      </div>
    </button>
  );
}
