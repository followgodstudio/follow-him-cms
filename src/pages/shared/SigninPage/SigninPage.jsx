import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { Text, Heading, Box, Flex, Image, VStack } from "@chakra-ui/react";
import {
  IconCircleX,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandGoogle,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons";
import SignInForm from "./SigninForm/SigninForm";
import {
  ImageBox,
  HorizontalContainer,
  VerticalContainer,
  SuixingLogo,
  CloseLink,
  SocialMediaBox,
} from "./SigninPage.styles";

function SigninPage() {
  const { search } = useLocation();
  const { returnUrl } = queryString.parse(search);

  return (
    <HorizontalContainer>
      <ImageBox>
        <VStack mb="400px">
          <SuixingLogo />
        </VStack>
        <VStack>
          <Heading>Follow Him CMS</Heading>
          <Text fontSize="xs" textAlign="center" pt="20px">
            This is the Follow Him CMS
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
          />
          <CloseLink
            to={!returnUrl || returnUrl === "undefined" ? "/" : returnUrl}
          >
            <IconCircleX />
          </CloseLink>
        </Flex>
        <SignInForm />
        <Flex
          bg="lightgray"
          w="100%"
          h="56px"
          justifyContent="center"
          alignItems="center"
          marginRight="16px"
        >
          <Heading variant="h5" fontSize="10px" color="black" fontWeight="800">
            Copyright information goes here C2020. All rights reserved.
          </Heading>
        </Flex>
      </VerticalContainer>
    </HorizontalContainer>
  );
}

export default SigninPage;
