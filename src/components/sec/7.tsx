import { SocialProofCard } from "../card/socialProofCard"
import profile1 from "../../assets/card/profile1.jpeg"
import profile2 from "../../assets/card/profile2.jpeg"
import profile3 from "../../assets/card/profile3.jpeg"
import profile4 from "../../assets/card/profile4.jpeg"
import profile5 from "../../assets/card/profile5.jpeg"
import profile6 from "../../assets/card/profile6.jpeg"

export const Sec7 = () => {
  return (
    <section className="bg-backgroundLight pt-32 pb-32" id="clientes">
      <section className='max-w-[1640px] m-auto flex flex-col items-center gap-20 xsm:px-4'>
        <h2 className="text-primary text-4xl font-bold text-center">Veja quem já  está usufruindo da Mindstorm</h2>
        <div className="grid grid-cols-3 gap-8 lg:grid-cols-2 md:grid-cols-1">
          <SocialProofCard name={"Augusto"} profession={"Empresário"} profileImg={profile1} mensage={"Trabalhar com a MindStorm foi um divisor de águas para meus projetos. Eles entenderam exatamente o que eu precisava e entregaram uma solução que melhorou a performance dos meus aplicativos. Agora, posso focar mais no desenvolvimento e menos nos problemas técnicos"} />
          <SocialProofCard name={"Pedro"} profession={"Fundador de Startup"} profileImg={profile2} mensage={"O que mais me impressionou foi o suporte da equipe. Sempre que preciso de algo, eles estão lá para ajudar. Além disso, as ferramentas que criaram para nosso time facilitaram muito nosso fluxo de trabalho. Valeu cada centavo!"} />
          <SocialProofCard name={"Caio"} profession={"Consultor de Growth"} profileImg={profile3} mensage={"Já testei várias soluções no mercado, mas a MindStorm foi a única que realmente entregou o que prometeu. A integração foi simples, o desempenho é excelente e o suporte sempre responde rápido. Recomendo para qualquer desenvolvedor."} />
          <SocialProofCard name={"Lucas"} profession={"Empreendedor digital"} profileImg={profile4} mensage={"A escalabilidade era um problema na minha empresa até conhecermos a MindStorm. Eles criaram uma solução personalizada que suportou o crescimento do nosso sistema sem dores de cabeça. Agora, temos muito mais confiança para expandir."} />
          <SocialProofCard name={"Bernardo"} profession={"CEO"} profileImg={profile5} mensage={"Nossa empresa precisava agilizar processos internos sem perder qualidade, e a MindStorm entregou exatamente isso. A implementação foi rápida e sem complicações. Hoje, conseguimos entregar projetos com muito mais eficiência."} />
          <SocialProofCard name={"Roberto"} profession={"CTO"} profileImg={profile6} mensage={"Se você busca inovação e confiabilidade, a MindStorm é a escolha certa. O impacto da tecnologia deles no nosso negócio foi imediato: menos custos, mais produtividade e um suporte técnico excepcional."} />
        </div>
      </section>
    </section>
  )
}