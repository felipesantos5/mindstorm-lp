import { SectionAnimted } from "../animationsection/animationSection"
import { Button } from "../button/defaut"

export const Sec8 = () => {
  return (
    <section className="bg-backgroundLight pb-52 text-white xl:px-4 sm:px-0">
      <SectionAnimted className='max-w-7xl m-auto flex flex-col items-center gap-12 pt-24 pb-24 bg-background rounded-xl px-4 sm:rounded-none'>
        <h2 className="text-center max-w-6xl text-4xl font-bold xmd:text-3xl">Cada dia sem inovação é uma oportunidade perdida.<br /> Não fique para trás!</h2>
        <a href="https://api.whatsapp.com/send/?phone=554888196362&text=Ola+gostaria+de+saber+mais&type=phone_number&app_absent=0" className="w-full m-auto max-w-[570px]">
          <Button children={"Contratar serviço"} />
        </a>
      </SectionAnimted>
    </section>
  )
}