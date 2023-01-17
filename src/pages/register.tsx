import {
  Button,
  Checkbox,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowLeft } from "phosphor-react";
import { Logo } from "../components/Logo";
import { navigateTo } from "../utils/navigateTo";

export default function Register() {
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
        maxW="500px"
        bgColor="#ffffff"
        borderRadius="lg"
        p={12}
        spacing={8}
        align="center"
        justifyContent={"center"}
      >
        <Logo />
        <Text fontWeight="bold" fontSize="lg">
          Preencha os dados e prepare-se para alavancar sua carreira.
        </Text>
        <VStack w="full">
          <Input border="1px" placeholder="Nome" type="text" />
          <Input border="1px" placeholder="Whatsapp" type="text" />
          <Input border="1px" placeholder="E-mail" type="email" />
          <Input border="1px" type="password" placeholder="Senha" />
          <Checkbox colorScheme="blue" defaultChecked size="md">
            <Text fontSize={"small"} fontWeight="hairline">
              Ao informar seus dados a seguir para a próxima etapa. Você
              automaticamente con- corda com nossa Política de privacidade.
            </Text>
          </Checkbox>
        </VStack>
        <Button
          onClick={() => navigateTo("/course")}
          w="full"
          colorScheme="blue"
        >
          Cadastrar
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
