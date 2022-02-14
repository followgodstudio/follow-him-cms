import React from "react";
import { Heading, Text, Center } from "@chakra-ui/react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useFormik } from "formik";
import TextField from "components/TextField/TextField";
import { NotificationType, sendNotification } from "utils/notification";
import {
  HorizontalLine,
  FormBox,
  InputGroup,
  Link,
  CheckBoxContainer,
  CheckBoxButton,
  UncheckedIcon,
  CheckedIcon,
  CheckBoxText,
  Footer,
  CustomizeButton,
} from "./SigninForm.styles";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please specify a valid email address.";
  }
  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};

function SigninForm() {
  const auth = getAuth();
  const formId = "sign-in-form";

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
                `Email not verified`,
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
        }
      })
      .catch((error) => {
        sendNotification(
          NotificationType.DANGER,
          `Unknown Error`,
          error.toString()
        );
      });
  };

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      GoogleAuthProvider.PROVIDER_ID,
      // EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD,
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
        Welcome to Follow Him CMS
      </Heading>
      <Heading size="md" mt="10px">
        Sign in by entering information below
      </Heading>

      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      <HorizontalLine />

      <FormBox id={formId}>
        <InputGroup>
          <TextField
            label="Email Address"
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
            label="Password"
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
          <Text size="medium" lineHeight="24px" mb="24px">
            <Link to="/forgot-password">Forgot your password?</Link>
          </Text>
          <CheckBoxContainer>
            <CheckBoxButton
              id="rememberMe"
              name="rememberMe"
              type="button"
              onChange={() =>
                formik.setFieldValue("rememberMe", !formik.values.rememberMe)
              }
              onClick={() =>
                formik.setFieldValue("rememberMe", !formik.values.rememberMe)
              }
            >
              {formik.values.rememberMe ? <CheckedIcon /> : <UncheckedIcon />}
            </CheckBoxButton>
            <CheckBoxText size="small">Remember Me</CheckBoxText>
          </CheckBoxContainer>
        </InputGroup>
      </FormBox>
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
            Sign in
          </CustomizeButton>
          <Text size="medium" lineHeight="24px" mt="24px">
            Need to create an account? <Link to="/signup">Sign up Here</Link>
          </Text>
        </Center>
      </Footer>
    </Center>
  );
}

export default SigninForm;
