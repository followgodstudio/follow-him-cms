import { Center } from "@chakra-ui/react";
import Heading from "components/Heading/Heading";
import Text from "components/Text/Text";
import TextField from "components/TextField/TextField";
import { NotificationType, sendNotification } from "utils/notification";
import { useFormik } from "formik";
import React from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import {
  Footer,
  FormBox,
  HorizontalLine,
  InputGroup,
  Link,
  CustomizeButton,
} from "./SignUpForm.styles";
import validate from "./validate";

const SignUpForm = () => {
  const formId = "sign-up-form";
  const auth = getAuth();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
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
      <Heading variant="h2">Let’s Start. Tell Us About You.</Heading>

      <Text size="medium" lineHeight="24px" mt="12px">
        Need to sign in?&nbsp;
        <Link to="/signin">Click Here</Link>
      </Text>
      <HorizontalLine />
      <FormBox id={formId} onSubmit={formik.handleSubmit}>
        <Heading variant="h3" my="24px">
          Tell us about you
        </Heading>
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
            marginRight="20px"
          />
        </InputGroup>
        <HorizontalLine />
        <Heading variant="h3" my="24px">
          Create your Password
        </Heading>

        <InputGroup>
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
            width="439px"
            marginRight="20px"
          />
          <TextField
            label="Confirm Password"
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
            Sign up
          </CustomizeButton>
        </Center>
      </Footer>
    </Center>
  );
};

export default SignUpForm;
