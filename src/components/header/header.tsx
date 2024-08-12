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
            <li className="flex items-center gap-2">
              <a href="/">Soluções</a>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                <path d="M7.28498 5.63281C7.67725 6.03401 8.32275 6.03401 8.71502 5.63282L13.5075 0.731288C13.8997 0.330098 14.5453 0.330098 14.9375 0.731288L15.3164 1.11884C15.6964 1.50747 15.6964 2.12843 15.3164 2.51706L8.71502 9.26871C8.32275 9.6699 7.67725 9.6699 7.28498 9.26871L0.683551 2.51705C0.303573 2.12843 0.303574 1.50746 0.683552 1.11884L1.06248 0.731287C1.45474 0.330097 2.10025 0.330097 2.49251 0.731287L7.28498 5.63281Z" fill="white" />
              </svg>
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
      <img src={circleRight} alt="" className="absolute top-0 right-32 z-20 pointer-events-none overflow-hidden" />
    </header>
  );
};