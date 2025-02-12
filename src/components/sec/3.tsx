import { motion } from "framer-motion"

export const Sec3 = () => {
  return (
    <section className="bg-backgroundLight relative pt-52">
      <motion.section className="max-w-4xl m-auto lg:px-4"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 100, damping: 25, stiffness: 70 }}>
        <div className="text-center flex flex-col justify-center items-center">
          <h2 className="pb-8 text-4xl text-primary font-bold">Não espere os problemas aparecerem! Com suporte contínuo e otimização proativa, garantimos que sua empresa nunca pare.</h2>
          <p className="pb-16 text-primary text-xl">Com a MindStorm, você ganha softwares sob medida para otimizar seus processos. Nosso sistema adaptativo e planejamento estratégico garantem que sua empresa funcione de forma mais ágil e eficiente, sem complicações.</p>
        </div>
      </motion.section>
    </section>
  )
}