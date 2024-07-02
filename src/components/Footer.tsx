import { Flex, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { MdAlternateEmail, MdLocationOn, MdPhoneAndroid } from "react-icons/md";

const FooterText = ({ children, Icon }) => {
  return (
    <HStack>
      <Icon color="white" />
      <Text color="white">{children}</Text>
    </HStack>
  );
};

const FooterHeading = ({ children }) => {
  return <Heading color="white">{children}</Heading>;
};

export function Footer() {
  return (
    <Flex as="footer" py="8rem" backgroundColor="primaryBlue400" w="full">
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        gap={{ base: 8, sm: 0 }}
        justifyContent="space-around"
        minW="100%"
      >
        <VStack justifyContent="start" gap={8}>
          <FooterHeading>Atendimento</FooterHeading>

          <VStack gap={5}>
            <FooterText Icon={MdPhoneAndroid}>(31) 3021-3187</FooterText>
            <Link
              href="mailto:chrisrochamaq@gmail.com"
              aria-label="Envie um email para o contato"
            >
              <FooterText Icon={MdAlternateEmail}>
                chrisrochamaq@gmail.com
              </FooterText>
            </Link>

            <Link
              href="https://www.google.com/maps/place/Chris+Rocha+M%C3%A1quinas/@-19.8898799,-43.9385409,17z/data=!4m8!3m7!1s0xa69a72509b94b7:0x9793a3d49e406ba8!8m2!3d-19.889885!4d-43.935966!9m1!1b1!16s%2Fg%2F11h7n7ft7w?entry=ttu"
              aria-label="Veja o endereço da loja no Google Maps"
              target="_blank"
            >
              <FooterText Icon={MdLocationOn}>
                Rua Jacuí 2730 - Renascença
              </FooterText>
            </Link>
          </VStack>
        </VStack>

        <VStack justifyContent="start" gap={8}>
          <FooterHeading>Siga nossas redes</FooterHeading>

          <VStack gap={5}>
            <Link
              href="https://web.facebook.com/p/Chris-Rocha-M%C3%A1quinas-100027589797277/?paipv=0&eav=AfYs3Fkx0VZWNem7qJjpQz7ZA9tVhMSjdfu02tNKt_Q2vlA1q4pybovcH7KUmlIx6jo&_rdc=1&_rdr"
              aria-label="Siga-nos no Facebook"
              target="_blank"
            >
              <FooterText Icon={BsFacebook}>Facebook</FooterText>
            </Link>
          </VStack>
        </VStack>
      </Flex>
    </Flex>
  );
}
