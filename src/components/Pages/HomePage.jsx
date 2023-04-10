import { Box, Center, Heading , Text} from "@chakra-ui/react";

function HomePage() {

    return (
        <Box
          bgImage="url('https://fondosmil.com/fondo/17010.jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          w="100%"
          h="100vh"
          overflow="hidden"
          position="fixed"
          top={0}
          left={0}
          zIndex={-1}
        >
          <Center h="100%">
            <Heading textAlign="center" color="white">


            <Text fontSize='50px' color='tomato' >
                Bienvenidos a mi sitio web
            </Text>

            <Text fontSize='20px' color='white' w="50%" textAlign="center" ml="25%">
                ¿Qué es mi producto y para que sirve?
                <br></br>
                La aplicación permite al usuario llevar una lista de tareas
                y realizar las operaciones básicas de agregar,
                editar y eliminar tareas de manera fácil e intuitiva.
            </Text>

            </Heading>
          </Center>
        </Box>
      );
}

export default HomePage;