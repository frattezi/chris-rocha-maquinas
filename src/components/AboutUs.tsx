import { Divider, Flex, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import { MdBalance } from 'react-icons/md'
import { PiEyeLight, PiTarget } from 'react-icons/pi'

const AboutCard = ({ title, description, Icon }) => {
  return (
    <VStack
      border="1px solid #5A60FF"
      borderRadius="1rem"
      justifyContent={{ base: 'center', md: 'flex-start' }}
      p={5}
      flex={1}
      minH={{ base: '21rem', md: '17rem' }}
      maxW={{ base: '100%', md: '15rem' }}
      boxShadow="15px 10px 15px 0px rgba(0,0,0,0.2)"
    >
      <HStack>
        <Heading size="md">{title}</Heading>
        <Icon />
      </HStack>
      <Text>{description}</Text>
    </VStack>
  )
}
export default function AboutUs() {
  return (
    <Flex
      w="100vw"
      justifyContent="center"
      gap={0}
      p={16}
      //   background="linear-gradient(45deg, transparent 40px, #5A60FF 40px)"
      //   clipPath="polygon(0 1%, 100% 0%, 100% 18%, 0 47%)"
    >
      <VStack alignItems="center" gap={16} textAlign="center">
        <Heading color="#5A60FF">Quem Somos</Heading>
        <Text w={{ base: '100%', md: '60%' }}>
          Somos a CRIS ROCHA MÁQUINAS LTDA. Um a Empresa inserida a mais de 20
          anos no mercado de Máquinas de Costura Industrias convencionais e
          eletrônicas. Tendo como parceiros, fornecedores das marcas mais
          consolidadas no mercado de máquinas de costura do pais. Atuamos no
          mercado também dando assistência técnica, com uma equipe de
          colaboradores especializados que atendem tanto no pós venda quanto na
          assistência técnica.
        </Text>

        <Divider />

        <Flex
          w="80%"
          gap={8}
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
        >
          <AboutCard
            Icon={PiTarget}
            title="OBJETIVO"
            description="Oferecer aos nossos clientes excelência no atendimento tanto na venda
          de nossos produtos, quanto na assistência técnica."
          />

          <AboutCard
            Icon={MdBalance}
            title="VALORES"
            description="Amor ao que nos propusemos a fazer. Satisfação em constatar que o
          cliente foi bem atendido. Respeito e cordialidade no tratamento aos
          clientes , fornecedores e colaboradores."
          />

          <AboutCard
            Icon={PiEyeLight}
            title="VISÃO"
            description="          Sermos referência no mercado de máquinas de costura, buscando sempre
          soluções específicas para cada consumidor."
          />
        </Flex>
      </VStack>
    </Flex>
  )
}
