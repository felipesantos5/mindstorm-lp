import Logo from '../../assets/logo-5.png'
import { SectionAnimted } from '../animationsection/animationSection'

export const Sec5 = () => {
  return (
    <section className="bg-backgroundLight pb-52 relative text-white">
      <SectionAnimted className='max-w-7xl m-auto flex items-center gap-20'>
        <div className='flex flex-col gap-10 text-primary'>
          <h2 className='text-5xl font-bold'>Quem é a Mindstorm?</h2>
          <p className='text-2xl'>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged.</p>
        </div>
        <img src={Logo} alt="logo MindStorm" className='w-[509px]' />
      </SectionAnimted>
    </section>
  )
}