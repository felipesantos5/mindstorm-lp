import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const AccordionFooter = () => {
  return (
    <div className='hidden md:block pb-20'>
      <Accordion className="!bg-transparent !text-white">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Navegação
        </AccordionSummary>
        <AccordionDetails className='flex flex-col'>
          <a href="">Inicio</a>
          <a href="">Soluções</a>
          <a href="">Suporte</a>
          <a href="">Sobre nós</a>
        </AccordionDetails>
      </Accordion>

      <Accordion className="!bg-transparent !text-white before:!hidden">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Redes Sociais
        </AccordionSummary>
        <AccordionDetails className='flex flex-col'>
          <a href="">Twitter</a>
          <a href="">Linkedin</a>
          <a href="">Facebook</a>
        </AccordionDetails>
      </Accordion>

      <Accordion className='!bg-transparent !text-white'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='!fill-white !#fff' />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Legal
        </AccordionSummary>
        <AccordionDetails className='flex flex-col'>
          <a href="">Termos</a>
          <a href="">Privacidade</a>
          <a href="">Cookies</a>
          <a href="">Licenças</a>
          <a href="">Contato</a>
        </AccordionDetails>
      </Accordion>

    </div >
  );
}