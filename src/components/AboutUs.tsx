import {
  Box,
  Divider,
  Flex,
  HStack,
  Heading,
  Hide,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { GiArcheryTarget, GiInjustice, GiSpyglass } from "react-icons/gi";

interface AboutCardProps {
  title: string;
  description: string;
  Icon: IconType;
}

const aboutCardConfiguration: AboutCardProps[] = [
  {
    title: "OBJETIVO",
    description:
      "Oferecer aos nossos clientes excelência no atendimento tanto na venda de nossos produtos, quanto na assistência técnica.",
    Icon: GiArcheryTarget,
  },
  {
    title: "VALORES",
    description:
      "Amor ao que nos propusemos a fazer. Satisfação em constatar que o cliente foi bem atendido. Respeito e cordialidade no tratamento aos clientes, fornecedores e colaboradores.",
    Icon: GiInjustice,
  },
  {
    title: "VISÃO",
    description:
      "Sermos referência no mercado de máquinas de costura, buscando sempre soluções específicas para cada consumidor.",
    Icon: GiSpyglass,
  },
];

const AboutCard = ({ title, description, Icon }: AboutCardProps) => {
  return (
    <Flex
      p={4}
      gap={4}
      flex={1}
      color="white"
      alignItems="center"
      borderRadius="1rem"
      backgroundColor="primaryBlue400"
      maxW={{ base: "unset", md: "lg" }}
      flexDir={{ base: "row", md: "column" }}
      boxShadow="15px 10px 15px 0px rgba(0,0,0,0.2)"
    >
      <VStack gap={2} minW={{ base: "6rem", lg: "unset" }}>
        <Icon size={46} fontWeight="normal" />
        <Heading size="md">{title}</Heading>
      </VStack>

      <Show below="md">
        <Divider orientation="vertical" />
      </Show>

      <Text color="white">{description}</Text>
    </Flex>
  );
};

export default function AboutUs() {
  return (
    <Flex justifyContent="center" gap={0} px={{ base: 2, md: 8 }}>
      <VStack alignItems="center" gap={16} textAlign="center">
        <Heading color="primaryBlue400">Quem Somos</Heading>

        <Text w={{ base: "100%", md: "60%" }}>
          Somos a CRIS ROCHA MÁQUINAS LTDA. Um a Empresa inserida a mais de 20
          anos no mercado de Máquinas de Costura Industrias convencionais e
          eletrônicas. Tendo como parceiros, fornecedores das marcas mais
          consolidadas no mercado de máquinas de costura do pais. Atuamos no
          mercado também dando assistência técnica, com uma equipe de
          colaboradores especializados que atendem tanto no pós venda quanto na
          assistência técnica.
        </Text>

        <Divider borderWidth="2px" w="70%" />

        <Flex
          gap={8}
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          {aboutCardConfiguration.map((card, index) => (
            <AboutCard key={`${index}.${card.title}`} {...card} />
          ))}
        </Flex>
      </VStack>
    </Flex>
  );
}
