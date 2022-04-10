import React from "react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { Heading, Text, Center } from "@chakra-ui/react";
import TextField from "components/TextField/TextField";
import { NotificationType, sendNotification } from "utils/notification";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {
  GoogleAuthProvider,
  PhoneAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import {
  Footer,
  FormBox,
  InputGroup,
  Link,
  CustomizeButton,
} from "./SigninForm.styles";
import validate from "./validate";

function SigninForm() {
  const { t } = useTranslation();
  const formId = "sign-in-form";
  const auth = getAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
  });

  const signInWithEmail = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const { user } = userCredential;
        if (!user.emailVerified) {
          await auth.signOut();
          sendEmailVerification(user)
            .then(() => {
              sendNotification(
                NotificationType.WARNING,
                t("signin.messages.emailNotVerified"),
                t("signin.messages.emailSent", { email })
              );
            })
            .catch((error) => {
              sendNotification(
                NotificationType.DANGER,
                t("signin.messages.sendEmailFailed"),
                error.toString()
              );
            });
        }
      })
      .catch((error) => {
        sendNotification(
          NotificationType.DANGER,
          t("common.messages.unknownError"),
          error.toString()
        );
      });
  };

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      GoogleAuthProvider.PROVIDER_ID,
      PhoneAuthProvider.PROVIDER_ID,
    ],
  };

  return (
    <Center
      display="flex"
      justifyContent="start"
      flexDirection="column"
      ml="200px"
      minHeight="calc(100vh - 180px)"
      maxWidth="900px"
    >
      <Heading size="xl" marginBottom="8px" color="#00CBFE">
        {t("signin.followHim")}
      </Heading>
      <FormBox id={formId}>
        <InputGroup>
          <TextField
            label={t("signin.email")}
            id="email"
            type="text"
            errorMessage={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : null
            }
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <TextField
            label={t("signin.password")}
            id="password"
            type="password"
            errorMessage={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : null
            }
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </InputGroup>
      </FormBox>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      <Footer>
        <Center
          display="flex"
          justifyContent="space-between"
          flexDir="column"
          paddingY="16px"
          alignItems="center"
          position="relative"
          zIndex={0}
        >
          <CustomizeButton
            form={formId}
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              signInWithEmail(formik.values.email, formik.values.password);
            }}
          >
            {t("signin.signin")}
          </CustomizeButton>
        </Center>
        <Text size="medium" lineHeight="24px" mb="24px">
          <Link to="/forgot-password">{t("signin.forgotYourPassword")}</Link>
        </Text>
        <Text size="medium" lineHeight="24px" mt="24px">
          <Link to="/signup">{t("signin.routeToSignUp")}</Link>
        </Text>
      </Footer>
    </Center>
  );
}

export default SigninForm;
