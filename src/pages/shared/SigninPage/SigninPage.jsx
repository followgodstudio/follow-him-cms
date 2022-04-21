import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Heading, Flex, Image, VStack } from "@chakra-ui/react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandGoogle,
  IconBrandTwitter,
} from "@tabler/icons";
import LanguageSelector from "components/LanguageSelector/LanguageSelector";
import ForgotPasswordForm from "./ForgotPasswordForm/ForgotPasswordForm";
import SignInForm from "./SigninForm/SigninForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import {
  ImageBox,
  HorizontalContainer,
  VerticalContainer,
  SuixingLogo,
  SocialMediaBox,
  LanguageSelectorBox,
} from "./SigninPage.styles";

function SigninPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const isSignUp = location.pathname.includes("signup");
  const isForgotPassword = location.pathname.includes("forgot-password");

  return (
    <HorizontalContainer>
      <ImageBox>
        <VStack mb="400px">
          <SuixingLogo />
        </VStack>
        <VStack>
          <Heading ml="12px">
            {process.env.REACT_APP_ENV === "production"
              ? t("signin.followHim")
              : t("signin.followHimDev")}
          </Heading>
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
          <LanguageSelectorBox>
            <LanguageSelector />
          </LanguageSelectorBox>
        </Flex>
        {isSignUp && <SignUpForm />}
        {isForgotPassword && <ForgotPasswordForm />}
        {!isSignUp && !isForgotPassword && <SignInForm />}
        <Flex
          bg="lightgray"
          w="100%"
          h="56px"
          justifyContent="center"
          alignItems="center"
          marginRight="16px"
        >
          <Heading variant="h5" fontSize="12px" color="black" fontWeight="800">
            {t("common.copyRight")}
          </Heading>
        </Flex>
      </VerticalContainer>
    </HorizontalContainer>
  );
}

export default SigninPage;
