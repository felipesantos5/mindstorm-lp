import { SectionAnimted } from "../animationsection/animationSection"
import { Button } from "../button/defaut"

export const Sec3 = () => {
  return (
    <section className="bg-backgroundLight pb-64 relative">
      <SectionAnimted className="max-w-4xl m-auto lg:px-4">
        <div className="text-center flex flex-col justify-center items-center">
          <h2 className="pb-8 text-5xl text-primary font-bold">Está cansado dos processos da sua empresa estarem mal otimizados?</h2>
          <p className="pb-16 text-primary text-xl">Com o Mindstorm, você obtém muitos ótimos softwares para ajudá-lo a  otimizar os processos da sua empresa. Nosso sistema adaptativo, combinado com nosso planejamento, garante que você nunca mais passe por problemas como estes.</p>
          <Button children={"Contratar serviço"} className="" />
        </div>
      </SectionAnimted>
    </section>
  )
}