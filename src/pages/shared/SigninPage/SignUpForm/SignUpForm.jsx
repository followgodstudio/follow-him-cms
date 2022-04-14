import React from "react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { Heading, Text, Center } from "@chakra-ui/react";
import validator from "validator";
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
} from "../SigninForm/SigninForm.styles";

const SignUpForm = () => {
  const { t } = useTranslation();
  const formId = "sign-up-form";
  const auth = getAuth();

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = t("common.messages.required");
    } else if (!validator.isEmail(values.email)) {
      errors.email = t("signin.messages.emailNotValid");
    }
    if (!values.password) {
      errors.password = t("common.messages.required");
    } else {
      const lowerCaseLettersRegexp = /[a-z]/g;
      const upperCaseLettersRegexp = /[A-Z]/g;
      const numberRegexp = /[0-9]/g;
      if (
        values.password.length < 6 ||
        values.password.length > 14 ||
        !lowerCaseLettersRegexp.test(values.password) ||
        !upperCaseLettersRegexp.test(values.password) ||
        !numberRegexp.test(values.password)
      ) {
        errors.password = t("signin.messages.passwordNotValid");
      }
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = t("common.messages.required");
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = t("signin.messages.passwordNotMatch");
    }

    return errors;
  };

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
              t("signin.messages.signUpSucceeded"),
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
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          sendNotification(
            NotificationType.DANGER,
            t("signin.messages.emailInUse"),
            t("signin.messages.goToSignInOrForgetPassword")
          );
        } else {
          sendNotification(
            NotificationType.DANGER,
            t("common.messages.unknownError"),
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
