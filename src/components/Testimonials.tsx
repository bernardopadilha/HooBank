import { feedback } from '../constants'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => (
  <section id="clients" className="padding-y flex-center flex-col relative">
    <div className="absolute z-[0] w-3/5 h-3/5 -right-1/2 rounded-full blue__gradient" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:bm-16 mb-6 relative z-[1]">
      <h1 className="heading-2">
        O que as pessoas <br className="sm:block hidden" /> dizem sobre nós.
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className="paragraph text-left max-w-[450px]">
          Tudo o que você precisa para aceitar pagamentos com cartão e expandir
          seus negócios em qualquer lugar do planeta.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
)
export default Testimonials
