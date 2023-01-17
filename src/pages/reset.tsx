import { Button, HStack, Image, Input, Text, VStack } from "@chakra-ui/react";
import { ArrowLeft } from "phosphor-react";
import { Logo } from "../components/Logo";
import { navigateTo } from "../utils/navigateTo";

export default function Reset() {
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
          Resetar sua senha
        </Text>
        <VStack w="full">
          <Input border="1px" type="password" placeholder="Senha" />
          <Input border="1px" type="password" placeholder="Confirmar Senha" />
        </VStack>
        <Button
          onClick={() => navigateTo("/course")}
          w="full"
          colorScheme="blue"
        >
          Salvar nova senha
        </Button>
        <Button
          onClick={() => navigateTo("/")}
          colorScheme="blue"
          variant={"link"}
          w="full"
          leftIcon={<ArrowLeft />}
          size="sm"
        >
          Voltar para login
        </Button>
      </VStack>
    </HStack>
  );
}
