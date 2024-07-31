import { apple, bill, google } from '../assets'

const Billing = () => (
  <section id="product" className="section-reverse">
    <div className="section-img-reverse">
      <img src={bill} alt="billing" className="w-full h-full relative z-[5]" />

      <div className="absolute z-[3] -left-1/2 w-1/2 h-1/2 rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 w-1/2 h-1/2 bottom-0  rounded-full pink__gradient" />
    </div>

    <div className="section-info">
      <h2 className="heading-2">
        Controle facilmente a <br className="block sm:hidden" /> sua cobrança e
        faturamento.
      </h2>
      <p className="paragraph max-w-[470px] mt-5">
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="appel_store"
          className="w-[128px] h-[42-px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="play_store"
          className="w-[128px] h-[42-px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
)

export default Billing
