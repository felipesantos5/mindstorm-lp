import circleLeft from "../../assets/circle-cta-left.svg"
import { Button } from "../button/defaut"
import { motion } from "framer-motion"


export const Sec1 = () => {
  return (
    <section className="bg-background pt-16 pb-72 relative flex justify-center font-UniteaSans">
      <motion.section className="max-w-5xl m-auto text-center text-white flex flex-col justify-center items-center lg:mx-4 z-40"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 100, damping: 25, stiffness: 70 }}>
        <h1 className="text-6xl sm:text-5xl font-bold mb-9 max-w-4xl font-UniteaSans">Soluções de tecnologia adaptadas às necessidades da sua empresa</h1>
        <p className="text-[#ACAEB6] text-xl mb-14 max-w-4xl ">Transformamos suas ideias em tecnologia de ponta. Soluções personalizadas para o crescimento do seu negócio.</p>
        <a href="https://api.whatsapp.com/send/?phone=554888196362&text=Ola+gostaria+de+saber+mais&type=phone_number&app_absent=0" className="w-full">
          <Button children={"Solicitar orçamento"} />
        </a>
      </motion.section>
      {/* <img src={card} alt="" className="absolute -bottom-[600px] md:-bottom-[300px] z-30" /> */}
      <img src={circleLeft} alt="" className="absolute top-32 -left-16 md:-left-48 z-20 pointer-events-none" />
    </section>
  )
}