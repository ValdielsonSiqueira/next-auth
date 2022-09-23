import { FormEvent, useContext, useState } from 'react';
import { withSSRGuest } from '../../utils/withSSRGuest';
import { AuthContext } from '../contexts/AuthContext';
import { Text, Input as ChakraInput, Button, Stack, Flex, FormLabel } from "@chakra-ui/react";
import Image from 'next/image'



export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);
  
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = { email, password };

    await signIn(data);
    
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      backgroundImage="/background.svg"
      backgroundPosition="center"
      backgroundSize="cover"
      justify="center"
    >
      <Flex
        w="622px"
        h="100%"
        bg="white"
        boxShadow="1px 1px 8px gray;"
        align="center"
        p="4.75rem"
        justify="center"
        flexDir="column"
      >
        <Image
          src="/SNEAKER.svg"
          alt="Picture of the author"
          width={420}
          height={220}
        />
        <Text
          fontSize="4.5rem" 
          fontWeight="bold" 
          letterSpacing="right"
          color="#000000"
          fontStyle="SemiBold"
        >  
          WORLD
        </Text>
        <Image
          src="/Waves.svg"
          alt="Picture of the author"
          width={110}
          height={25}
        />
        <Text
          mt="1rem"
          fontSize="1.25rem" 
          fontWeight="Regular" 
          letterSpacing="right"
          color="#000000"
          textAlign="center"
          fontStyle="SemiBold"
        >  
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        </Text>
        <Flex
          as="form"
          w="100%"
          h="100%"
          align="center"
          justify="center"
          bg="white"
          p="3"
          flexDir="column"
          onSubmit={handleSubmit}
        >
          <Stack width="100%" spacing="5">
            <Flex flexDir="column">
              <FormLabel>Email</FormLabel>
              <ChakraInput
                placeholder="Insira seu email" 
                focusBorderColor="black"
                borderRadius="1px"
                border="2px solid black"
                size="lg"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Flex>
            <Flex flexDir="column">
              <FormLabel>Password</FormLabel>
              <ChakraInput
                placeholder="Insira seu email" 
                focusBorderColor="black"
                borderRadius="1px"
                border="2px solid black"
                size="lg"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Flex>
            <Stack>
              <Button
                type="submit"
                color="black"
                bg="yellow.400"
                size="lg"
                border="2px solid black"
                borderRadius="1px"
                _hover={{
                  bgColor: "yellow.300"
                }}
              >
                Sign up
              </Button>
            </Stack>
        </Stack>
      </Flex>
      </Flex>
    </Flex>
  );
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return { 
    props: {}
  }
})