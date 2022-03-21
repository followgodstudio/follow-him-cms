import React from "react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { Heading, Text, Center } from "@chakra-ui/react";
import TextField from "components/TextField/TextField";
import { NotificationType, sendNotification } from "utils/notification";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import {
  Footer,
  FormBox,
  InputGroup,
  Link,
  CustomizeButton,
} from "../SignInForm/SignInForm.styles";
import validate from "./validate";

const SignUpForm = () => {
  const { t } = useTranslation();
  const formId = "sign-up-form";
  const auth = getAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
  });

  const createUserWithEmail = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await auth.signOut();
        sendEmailVerification(userCredential.user)
          .then(() => {
            sendNotification(
              NotificationType.SUCCESS,
              "Sign up succeeded",
              `We just sent an email to ${email}. Please click the link to verify then come back to sign in.`
            );
          })
          .catch((error) => {
            sendNotification(
              NotificationType.DANGER,
              "Send Email failed",
              error.toString()
            );
          });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          sendNotification(
            NotificationType.DANGER,
            "Email address has already been associated with an account.",
            "Please go to sign in or forget password."
          );
        } else {
          sendNotification(
            NotificationType.DANGER,
            `Unknown Error`,
            error.toString()
          );
        }
      });
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
      <FormBox id={formId} onSubmit={formik.handleSubmit}>
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
          <TextField
            label={t("signin.confirmPassword")}
            id="confirmPassword"
            type="password"
            errorMessage={
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? formik.errors.confirmPassword
                : null
            }
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
        </InputGroup>
      </FormBox>
      <Footer>
        <Center
          display="flex"
          justifyContent="space-between"
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
              createUserWithEmail(formik.values.email, formik.values.password);
            }}
          >
            {t("signin.signup")}
          </CustomizeButton>
        </Center>
        <Text size="medium" lineHeight="24px" mb="24px">
          <Link to="/signin">{t("signin.routeToSignIn")}</Link>
        </Text>
      </Footer>
    </Center>
  );
};

export default SignUpForm;
