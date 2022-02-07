import { Flex, Image, VStack } from "@chakra-ui/react";
import {
  IconBrandFacebook,
  IconBrandGoogle,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons";
import Heading from "components/Heading/Heading";
import Text from "components/Text/Text";
import SignUpForm from "./SignUpForm/SignUpForm";
import {
  HorizontalContainer,
  ImageBox,
  MichaelsLogo,
  SocialMediaBox,
  VerticalContainer,
} from "./SignUpPage.styles";

const SignUpPage = () => {
  return (
    <HorizontalContainer>
      <ImageBox>
        <VStack mb="400px">
          <MichaelsLogo />
        </VStack>
        <VStack>
          <Heading variant="h2">Rec Dash Platform</Heading>
          <Text fontSize="xs" textAlign="center" pt="20px">
            Rec Dash is the single source of truth for Michaels user behavior
            data and recommendation engine performance
          </Text>
          <SocialMediaBox>
            <button
              type="button"
              onClick={() =>
                window.open("https://facebook.com/profile/", "_blank")
              }
            >
              <IconBrandFacebook />
            </button>
            <IconBrandInstagram />
            <IconBrandTwitter />
            <IconBrandGoogle />
          </SocialMediaBox>
        </VStack>
      </ImageBox>

      <VerticalContainer>
        <Flex position="relative" w="100%">
          <Image
            src="https://imgs.maker.michaels.com/image/upload/v1609287096/5003241625413951488.png"
            w="100%"
            h="130px"
          />
        </Flex>
        <SignUpForm />
        <Flex
          bg="lightgray"
          w="100%"
          h="56px"
          justifyContent="center"
          alignItems="center"
          marginRight="16px"
        >
          <Text size="small">
            Copyright information goes here C2020. All rights reserved.
          </Text>
        </Flex>
      </VerticalContainer>
    </HorizontalContainer>
  );
};

export default SignUpPage;
