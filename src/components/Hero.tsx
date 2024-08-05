import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id="home" className="flex md:flex-row flex-col padding-y">
      <div className="flex-1 flex-start flex-col xl:px-0 sm:px-16 px-6">
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 text-nowrap">
          <img src={discount} alt="discount" className="w-8 h-8" />
          <p className="paragraph ml-2">
            <span className="text-white">20%</span> DE DESCONTO PARA SUA CONTA
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            A Próxima <br className="sm:block hidden" />{' '}
            <span className="text-gradient whitespace-nowrap">Geração de</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          Métodos de <br /> Pagamento.
        </h1>
        <p className="paragraph max-w-[470px]">
          Nossa equipe de especialistas utiliza uma metodologia para identificar
          os cartões de crédito com maior probabilidade de atender às suas
          necessidades. Examinamos taxas percentuais anuais e taxas anuais.
        </p>
      </div>

      <div className="flex-1 flex flex-center md:my-0 my-10 relative">
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        <div className="absolute z-0 w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-0 w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-0 w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className="ss:hidden flex-center ">
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero
