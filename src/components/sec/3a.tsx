import { CardPoroducts } from '../card/products'

export const Sec3a = () => {
  return (
    <section className='bg-backgroundLight pt-64 lg:pt-32'>
      <div className='max-w-7xl m-auto lg:px-4'>

        <h2 className="mb-10 text-5xl font-bold text-center m-auto">Conheça nossos produtos:</h2>
        {/* <p className="">Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book.</p> */}

        <div className='grid grid-cols-2 gap-16 lg:grid-cols-2 xmd:grid-cols-1 lg:gap-16'>

          <CardPoroducts title={"Planejamento e criação de software"} paragraph={"Desenvolva seu projeto de software conosco. Utilizamos um método de planejamento de projetos eficaz para que você possa viabilizar sua solução de software. Seja ela um App, sistema ou marketplace."} image={'https://ubistart.com/wp-content/uploads/2022/05/planejamento-criacao-de-software-ubistart.png'} />
          <CardPoroducts title={"Alocação de times para projetos ágeis"} paragraph={"Contrate uma equipe para a construção de aplicativos, portais, sistemas e migração para nuvem. Tudo isso unindo as boas práticas de Design UX/UI e a Metodologia Ágil de desenvolvimento de software."} image={'https://ubistart.com/wp-content/uploads/2022/05/alocacao-squads-desenvolvimento-ubistart.png'} />
          <CardPoroducts title={"Alocação/Outsourcing de desenvolvedores"} paragraph={"Com um processo de análise de cultura, perfil comportamental e entrevistas técnicas, alocamos ótimos profissionais para integrar o seu time de desenvolvimento e acelerar as entregas de software."} image={'https://ubistart.com/wp-content/uploads/2022/05/alocacao-outsourcing-desenvolvedores-ubistart.png'} />
          <CardPoroducts title={"Sustentação e melhorias"} paragraph={"Conte com a MindStorm para desenvolver ajustes, melhorias ou novos escopos para sua solução de software. Quer este software seja desenvolvido na ubistart ou seja um projeto já existente."} image={'https://ubistart.com/wp-content/uploads/2022/05/suporte-sustentacao-melhorias-ubistart.png'} />
        </div>
      </div>
    </section>
  )
}