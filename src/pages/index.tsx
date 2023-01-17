import { Button, HStack, Image, Input, Text, VStack } from "@chakra-ui/react";
import { Lock } from "phosphor-react";
import { Logo } from "../components/Logo";
import { navigateTo } from "../utils/navigateTo";

export default function Index() {
  return (
    <HStack
      w="full"
      bgGradient="linear(to-b, gray.900, gray.700)"
      backgroundImage={"url(/loginbg.webp)"}
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      minH="100vh"
      align={"flex-end"}
      justifyContent={"flex-end"}
    >
      <VStack
        w="full"
        minH="100vh"
        maxW="450px"
        bgColor="#ffffff"
        borderRadius="lg"
        p={12}
        spacing={8}
        align="center"
        justifyContent={"center"}
      >
        <Logo />
        <Text fontWeight="bold" fontSize="lg">
          Acesse
        </Text>
        <VStack w="full">
          <Input border="1px" placeholder="E-mail" type="email" />
          <Input border="1px" type="password" placeholder="Senha" />
        </VStack>

        <Button
          onClick={() => navigateTo("/forgot")}
          colorScheme="blue"
          variant={"link"}
          leftIcon={<Lock />}
        >
          Esqueceu a senha?
        </Button>
        <Button
          onClick={() => navigateTo("/course")}
          w="full"
          colorScheme="blue"
        >
          Acessar
        </Button>
        <Button
          onClick={() => navigateTo("/register")}
          w="full"
          colorScheme="blue"
          variant={"outline"}
        >
          Cadastre-se
        </Button>
      </VStack>
    </HStack>
  );
}
