import { Button, HStack, Image, Input, Text, VStack } from "@chakra-ui/react";
import { ArrowLeft } from "phosphor-react";
import { Logo } from "../components/Logo";
import { navigateTo } from "../utils/navigateTo";

export default function Forgot() {
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
          Recupere a senha
        </Text>
        <Input border="1px" placeholder="E-mail" type="email" />

        <Button
          onClick={() => navigateTo("/course")}
          w="full"
          colorScheme="blue"
        >
          Recuperar Senha
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
