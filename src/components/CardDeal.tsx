import { card } from '../assets'
import Button from './Button'

const CardDeal = () => (
  <section className="section">
    <div className="section-info">
      <h2 className="heading-2">
        Encontre uma oferta de cartão melhor <br className="sm:block hidden" />{' '}
        em algumas etapas fáceis.
      </h2>
      <p className="paragraph max-w-[470px] mt-5">
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles="mt-10" />
    </div>

    <div className="section-img">
      <img src={card} alt="card" className="w-full h-full" />
    </div>
  </section>
)

export default CardDeal
