import { motion } from 'framer-motion'
import Logo from '../../assets/logo-5.png'
import { SectionAnimted } from '../animationsection/animationSection'

export const Sec5 = () => {
  return (
    <section className="bg-backgroundLight pt-52 relative text-white lg:px-4" id='sobre-nos'>
      <SectionAnimted className='max-w-7xl m-auto flex items-center gap-20 lg:gap-0 lg:flex-col xl:px-4 '>
        <div className='flex flex-col gap-10 text-primary'>
          <h2 className='text-5xl font-bold'>Quem é a Mindstorm?</h2>
          <p className='text-2xl text-black/90'>Somos especialistas em tecnologia e inovação. Com anos de experiência no desenvolvimento de softwares personalizados, ajudamos empresas a escalarem seus negócios com soluções eficientes, inteligentes e seguras.</p>
        </div>
        <motion.img src={Logo} alt="logo MindStorm" className='w-[509px]'
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }} />
      </SectionAnimted>
    </section>
  )
}