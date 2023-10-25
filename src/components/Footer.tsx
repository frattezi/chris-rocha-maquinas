import {
  Box,
  Flex,
  FlexProps,
  HStack,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
import { MdAlternateEmail, MdLocationOn, MdPhoneAndroid } from 'react-icons/md'

const FooterText = ({ children, Icon }) => {
  return (
    <HStack>
      <Icon color="white" />
      <Text color="white">{children}</Text>
    </HStack>
  )
}

const FooterHeading = ({ children }) => {
  return <Heading color="white">{children}</Heading>
}

export function Footer(props: FlexProps) {
  return (
    <Flex as="footer" py="8rem" backgroundColor="#5A60FF">
      <HStack justifyContent="space-around" minW="100%">
        <VStack gap={8}>
          <FooterHeading>Atendimento</FooterHeading>

          <VStack gap={5}>
            <FooterText Icon={MdPhoneAndroid}>(31) 3021-3187</FooterText>
            <FooterText Icon={MdAlternateEmail}>
              chrisrochamaq@gmail.com
            </FooterText>
            <FooterText Icon={MdLocationOn}>
              Rua Jacuí 2730 - Renascença
            </FooterText>
          </VStack>
        </VStack>

        <VStack justifyContent="center" gap={8}>
          <FooterHeading>Siga nossas redes</FooterHeading>

          <VStack gap={5}>
            <FooterText Icon={MdPhoneAndroid}>(31) 3021-3187</FooterText>
            <FooterText Icon={MdAlternateEmail}>
              chrisrochamaq@gmail.com
            </FooterText>
            <FooterText Icon={MdLocationOn}>
              Rua Jacuí 2730 - Renascença
            </FooterText>
          </VStack>
        </VStack>
      </HStack>
    </Flex>
  )
}
