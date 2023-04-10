import { Box, Center, Heading, Text, Link } from "@chakra-ui/react";

function NosotrosPage() {

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

                <Text fontSize='30px' color='tomato' >
                    Autor
                </Text>

                <Text fontSize='30px' color='tomato' >
                    Yesid Camilo Mora Barbosa
                </Text>

                <Text fontSize='20px' color='white' textAlign="center">
                    Para ver el codigo fuente de este proyecto abra el siguiente link:
                    <br></br>
                    <Link>https://github.com/Camilomora117/IETI-TaskList</Link>
                </Text>

            </Heading>
          </Center>
        </Box>
      );
}

export default NosotrosPage;