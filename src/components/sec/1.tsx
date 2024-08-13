import circleLeft from "../../assets/circle-cta-left.svg"
import { Button } from "../button/defaut"
import card from "../../assets/testando.svg"
import { motion } from "framer-motion"


export const Sec1 = () => {
  return (
    <section className="bg-background pt-40 pb-72 relative flex justify-center font-UniteaSans">
      <motion.section className="max-w-5xl m-auto text-center text-white flex flex-col justify-center items-center lg:mx-4 z-40"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 100, damping: 25, stiffness: 70 }}>
        <h1 className="text-6xl sm:text-5xl font-bold mb-9 max-w-4xl font-UniteaSans">Soluções de Tecnologia Adaptadas às Necessidades da Sua Empresa</h1>
        <p className="text-[#ACAEB6] text-xl mb-14 max-w-4xl ">Combinamos expertise em tecnologia e conhecimento de mercado para oferecer soluções personalizadas que atendem às necessidades únicas da sua empresa.</p>
        <Button children={"Contratar serviço"} />
      </motion.section>
      <img src={card} alt="" className="absolute -bottom-[600px] md:-bottom-[300px] z-30" />
      <img src={circleLeft} alt="" className="absolute top-32 -left-16 md:-left-48 z-20 pointer-events-none" />
    </section>
  )
}