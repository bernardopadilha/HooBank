/* eslint-disable @typescript-eslint/no-explicit-any */
const Button = ({ styles }: any) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-md hover:brightness-75 transition-all`}
    >
      Iniciar
    </button>
  )
}

export default Button
