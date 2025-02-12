import { SectionAnimted } from "../animationsection/animationSection"
import Carousel from "../carousel/carousel"

export const Sec2 = () => {
  return (
    <section className="bg-backgroundLight pt-[631px] md:pt-[390px]">
      <SectionAnimted className="max-w-6xl m-auto flex flex-col items-center justify-center gap-12">
        <h2 className="text-primary text-4xl font-bold text-center mb-6">QUEM JÁ ESTÁ CRESCENDO COM A MINDSTORM? </h2>
        <Carousel />
      </SectionAnimted>
    </section>
  )
}