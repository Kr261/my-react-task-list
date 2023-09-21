import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Flex,
} from "@chakra-ui/react";

const SobreNosotros = () => {
  return (  
    <div> 
    <h1 className="welcome" style={{ textAlign: "center" }}>
    Sobre Nosotros
  </h1> 
    <Box>  
    <Flex className="d-flex justify-content-center align-items-center">
      <Accordion
        defaultIndex={[]}
        allowMultiple
        w="60%"
        marginTop="40px"
        borderColor="gray.400"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="h4" flex="1" textAlign="left">
               ¿Que es este producto?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            En un mundo en constante movimiento, la organización es clave para alcanzar tus metas y objetivos. 
            Nuestra aplicación de tareas está diseñada para ayudarte a administrar y organizar tus actividades 
            diarias de manera eficiente y efectiva. Con un enfoque en la simplicidad y la practicidad, hemos 
            creado una herramienta que se adapta perfectamente a tu estilo de vida ocupado.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="h4" flex="1" textAlign="left">
                Nuestras funcionalidades destacadas
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
           En nuestra aplicación, te ofrecemos una serie de funciones esenciales para mantener 
           tus tareas y notas organizadas de manera eficiente. Puedes crear nuevas tareas, ya sean 
           cruciales o simples recordatorios, proporcionándoles un nombre y, si lo deseas, una descripción. 
           La flexibilidad es primordial, y estamos aquí para ayudarte a mantener tus ideas en orden. Además,
            puedes mantener un control completo sobre tus actividades al marcarlas como completadas o pendientes
             con un simple checkbox, lo que te permite visualizar rápidamente el estado de cada tarea y enfocarte
              en lo que más importa. Si las circunstancias cambian, no hay problema, puedes editar los nombres y 
              descripciones de tus tareas existentes o eliminar las que ya no son relevantes. Nuestra aplicación 
              también cuenta con una validación inteligente que garantiza que cada tarea tenga al menos 3 caracteres,
               lo que te ayuda a mantener listas limpias y coherentes. Y, por supuesto, valoramos tus datos; por eso,
                utilizamos el almacenamiento local del navegador para garantizar que tus tareas se guarden de manera 
                segura y sean accesibles incluso después de cerrar la aplicación.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="h4" flex="1" textAlign="left">
              Tecnologías Utilizadas 
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ul>
              <li>React JS</li>
              <li>Chakra UI</li>
              <li>CSS</li>
            </ul>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  </Box>
  </div>
);
};

export default SobreNosotros;
