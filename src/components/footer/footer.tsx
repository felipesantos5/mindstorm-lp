import { AccordionFooter } from "./acordion";
import { NavFooter } from "./navFooter"


export const Footer = () => {
  const navigation = ['Início', 'Clientes', 'Sobre Nós', 'Fale conosco'];
  const socialMidias = ['Instagram', 'LinkedIn'];
  const legal = ['Termos', 'Privacidade', 'Cookies', 'Licenças', 'Contato'];

  const getCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear;
  };

  return (
    <footer className="bg-[#1D2939] font-inter">
      <section className="max-w-7xl m-auto flex flex-col py-16 xl:px-4">
        <div className="flex justify-between lg:gap-12 md:flex-col">
          <div className="flex flex-col gap-5">
            <h3 className="text-white text-2xl">MindStorm</h3>
            <p className="text-[#EAECF0] max-w-96">O próximo passo para o sucesso do seu negócio está aqui. Soluções digitais inteligentes para empresas que querem crescer rápido e com eficiência.</p>
          </div>
          <div className="flex gap-16 md:hidden">
            <div>
              <NavFooter title={"Navegação"} items={navigation} href="" />
            </div>
            <div>
              <NavFooter title={"Redes Sociais"} items={socialMidias} />
            </div>
            <div>
              <NavFooter title={"Legal"} items={legal} />
            </div>
          </div>
        </div>
      </section>
      <AccordionFooter />
      <section className="bg-[#101828] py-12 lg:px-4">
        <div className="flex justify-between items-center max-w-7xl m-auto">
          <p className="text-[#98A2B3] mr-4">© {getCurrentYear()} Mindstorm. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#98A2B3" xmlns="http://www.w3.org/2000/svg">
                <g id="Social icon" clipPath="url(#clip0_1_405)">
                  <g id="Group">
                    <path id="Vector" d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1_405">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>

          </div>
        </div>
      </section>
    </footer>
  )
}