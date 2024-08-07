import { SectionAnimted } from "../animationsection/animationSection"
import { Button } from "../button/defaut"

export const Sec8 = () => {
  return (
    <section className="bg-backgroundLight pb-52 text-white">
      <SectionAnimted className='max-w-7xl m-auto flex flex-col items-center gap-12 pt-24 pb-24 bg-background rounded-xl'>
        <h2 className="text-center max-w-4xl text-5xl font-bold">Hora de tomar uma atitude e otimizar o seu negócio!</h2>
        <Button children={"Contratar serviço"} />
      </SectionAnimted>
    </section>
  )
}