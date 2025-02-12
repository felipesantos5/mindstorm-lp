import logo from '../../assets/logo-header.png'
import circleRight from "../../assets/circle-cta-right.svg"
import { motion } from 'framer-motion';
import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-background py-20 text-white relative xmd:py-12">
      <div className="max-w-6xl m-auto flex justify-between items-center xl:px-4">
        <div className="flex gap-2 items-center">
          <img src={logo} alt="logo MindStorm" />
          <h2>MindStorm</h2>
        </div>
        <nav className="lg:hidden z-40">
          <ul className="flex gap-10 hover:font-medium">
            <li>
              <a href="#clientes">Clientes</a>
            </li>
            <li>
              <a href="#sobre-nos">Sobre nós</a>
            </li>
            <li>
              <a href="https://api.whatsapp.com/send/?phone=554888196362&text=Ola+gostaria+de+saber+mais&type=phone_number&app_absent=0">Fale conosco</a>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:block">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`fixed top-0 right-0 w-full h-full bg-background z-50 flex-col items-center justify-center space-y-10 text-2xl hidden lg:flex`}
      >
        <button onClick={toggleMenu} className="absolute top-[60px] right-4 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <ul className="flex flex-col items-center space-y-10">
          <li>
            <a href="/">Soluções</a>
          </li>
          <li>
            <a href="/about">Método</a>
          </li>
          <li>
            <a href="/about">Sobre nós</a>
          </li>
          <li>
            <a href="/about">Suporte</a>
          </li>
          <li>
            <a href="/about">Contato</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </motion.div>
      <img src={circleRight} alt="" className="absolute top-0 right-24 z-20 pointer-events-none overflow-hidden" />
    </header>
  );
};