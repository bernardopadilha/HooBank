/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
import { features } from '../constants'
import Button from './Button'
interface FeatureCardProps {
  id: string
  icon: string
  title: string
  content: string
  index: number
}

const FeatureCard = ({ icon, title, content, index }: FeatureCardProps) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}
  >
    <div className="w-16 h-16 rounded-full flex-center bg-dimBlue">
      <img src={icon} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[23px] mb-1">
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id="features" className="section">
      <div className="section-info">
        <h2 className="heading-2">
          Você faz o negócio, <br className="sm:block hidden" /> nós cuidaremos
          do dinheiro.
        </h2>

        <p className="paragraph max-w-[470px] mt-5">
          Com o cartão de crédito certo, você pode melhorar sua vida financeira
          construindo crédito, ganhando recompensas e economizando dinheiro. Mas
          com centenas de cartões de crédito no mercado.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className="section-img flex-col">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business
