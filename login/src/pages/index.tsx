import { FormEvent, useContext, useState } from 'react';
import { withSSRGuest } from '../../utils/withSSRGuest';
import { AuthContext } from '../contexts/AuthContext';
import { Text, Input as ChakraInput, Button, Stack, Flex } from "@chakra-ui/react";
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
      justify="center"
      >
      <Flex
        as="form"
        w="100%"
        h="100%"
        maxWidth={900}
        bg="#FFD6B9"
        p="8"
        flexDir="column"
        onSubmit={handleSubmit}
      >
        <h1>Turn your ideas into reality.</h1>
      </Flex>
      <Flex
        as="form"
        w="100%"
        h="100%"
        maxWidth={500}
        align="center"
        justify="center"
        bg="white"
        p="8"
        flexDir="column"
        onSubmit={handleSubmit}
      >
        <Stack spacing="1">
          <Flex pb="2rem">
            <Image
              src="/logo.svg"
              alt="Picture of the author"
              width={72}
              height={72}
            />
          </Flex>
          <Text
            fontSize="2rem" 
            fontWeight="bold" 
            letterSpacing="right"
            color="text.900"
          >
            Login to your Account
          </Text>
          <Text
            fontSize="1rem"    
            color="text.900"
          >
            See what is going on with your business
          </Text>
        </Stack>
        <Stack spacing="4" mt="2rem">
          <ChakraInput
            placeholder="Insira seu email" 
            focusBorderColor="purple.900"
            bg="gray.900"
            variant="filled"
            _hover={{
              bgColor: "#FFD6B9"
            }}
            size="lg"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
          <ChakraInput
            placeholder="Insira seu email" 
            focusBorderColor="purple.900"
            bg="gray.900"
            variant="filled"
            _hover={{
              bgColor: "#FFD6B9"
            }}
            size="lg"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button type="submit" mt="6" colorScheme="pink" size="lg">Entrar</Button>
        </Stack>
        </Flex>
    </Flex>
  );
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return { 
    props: {}
  }
})