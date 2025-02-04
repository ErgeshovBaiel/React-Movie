const Button = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`rounded-[36px] bg-[#EF4234] text-white ${className}`}>
      {children}
    </button>
  )
}

export default Button
