//TODO: reusable buttons
const Button = ({ type, text, link }) => {
  const getStyles = () => {
    if (type === "primary") {
      return "cursor-pointer border-[#2A3744] border bg-[#2A3744] text-xs text-white py-2 px-4"
    } else {
      return "cursor-pointer border-[#2A3744] border text-xs text-[#2A3744] py-2 px-4"
    }
  }

  return (
    <a onClick={type === "primary" ? () => window.print() : null} className={getStyles(type)} href={link} target="_blank" rel="noreferrer">
      {text}
    </a>
  )
}

export default Button
