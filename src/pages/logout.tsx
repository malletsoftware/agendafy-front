import { Button, Image, Text, VStack } from "@chakra-ui/react";
import { ArrowLeft } from "phosphor-react";
import { Logo } from "../components/Logo";
import { navigateTo } from "../utils/navigateTo";

export default function Index() {
  return (
    <VStack
      w="full"
      bgGradient="linear(to-b, gray.900, gray.700)"
      backgroundImage={"url(/loginbg.webp)"}
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      minH="100vh"
      align={"center"}
      justifyContent={"center"}
    >
      <VStack
        w="full"
        bgColor="#ffffff"
        borderRadius="lg"
        p={12}
        spacing={8}
        align="center"
        justifyContent={"center"}
      >
        <Logo />
        <Text
          fontSize="4xl"
          fontWeight="bold"
          lineHeight={1.15}
          textTransform={"uppercase"}
        >
          Sua jornada chegou ao fim!
        </Text>
        <Text fontSize="2xl" fontWeight={"hairline"}>
          Esperamos que sua experiência conosco, tenha sido boa!
        </Text>

        <Button
          variant={"link"}
          colorScheme="blue"
          onClick={() => navigateTo("/")}
          leftIcon={<ArrowLeft />}
        >
          Voltar para a Home
        </Button>
      </VStack>
    </VStack>
  );
}
