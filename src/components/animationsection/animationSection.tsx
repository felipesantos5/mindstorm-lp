import { ReactNode } from "react"
import { motion } from 'framer-motion';

interface SectionAnimtedProps {
  children: ReactNode;
  className?: string;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const SectionAnimted = (props: SectionAnimtedProps) => {
  return (
    <motion.section className={props.className}
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      viewport={{ once: true, amount: 0.8 }}
    >
      {props.children}
    </motion.section>
  )
}