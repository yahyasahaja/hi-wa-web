const Button = ({children, onClick, type, className}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      style={{background: '#9DCB66'}}
      className={`rounded px-10 py-2 text-white ${className}`}
    >
      {children}
    </button>
  )
}

export default Button;