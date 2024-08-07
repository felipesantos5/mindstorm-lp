import { SocialProofCard } from "../card/socialProofCard"
import profile1 from "../../assets/card/profile1.jpeg"
import profile2 from "../../assets/card/profile2.jpeg"
import profile3 from "../../assets/card/profile3.jpeg"
import profile4 from "../../assets/card/profile4.jpeg"
import profile5 from "../../assets/card/profile5.jpeg"
import profile6 from "../../assets/card/profile6.jpeg"
import { SectionAnimted } from "../animationsection/animationSection"

export const Sec7 = () => {
  return (
    <section className="bg-backgroundLight pb-36">
      <SectionAnimted className='max-w-7xl m-auto flex flex-col items-center gap-20'>
        <h2 className="text-primary text-4xl font-bold text-center">Veja quem já  está usufruindo da Mindstorm</h2>
        <div className="grid grid-cols-3 gap-8">
          <SocialProofCard name={"Augusto"} profession={"Mobile Developer"} profileImg={profile1} />
          <SocialProofCard name={"Pedro"} profession={"Designer "} profileImg={profile2} />
          <SocialProofCard name={"Caio"} profession={"Front-end Developer"} profileImg={profile3} />
          <SocialProofCard name={"Lucas"} profession={"Software Engineer"} profileImg={profile4} />
          <SocialProofCard name={"Bernardo"} profession={"Project Manager"} profileImg={profile5} />
          <SocialProofCard name={"Roberto"} profession={"CTO"} profileImg={profile6} />
        </div>
      </SectionAnimted>
    </section>
  )
}