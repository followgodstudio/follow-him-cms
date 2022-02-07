import { Center } from "@chakra-ui/react";
import Button from "components/Button/Button";
import Checkbox from "components/CheckBox/CheckBox";
import Heading from "components/Heading/Heading";
import Text from "components/Text/Text";
import TextField from "components/TextField/TextField";
import { useFormik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  Footer,
  FormBox,
  HorizontalLine,
  InputGroup,
  Link,
} from "./SignUpForm.styles";
import validate from "./validate";

const getFormattedPhoneNumber = (phoneNumberInput) => {
  let formattedPhoneNumber = "";
  phoneNumberInput.replace(
    /^\D*(\d{0,3})\D*(\d{0,3})\D*(\d{0,4})/,
    function formatPhoneNumber(
      _match,
      numberGroup1,
      numberGroup2,
      numberGroup3
    ) {
      if (numberGroup1.length) {
        formattedPhoneNumber += numberGroup1;

        if (numberGroup2.length) {
          formattedPhoneNumber += "-";
          formattedPhoneNumber += `${numberGroup2}`;

          if (numberGroup3.length) {
            formattedPhoneNumber += "-";
            formattedPhoneNumber += numberGroup3;
          }
        }
      }
    }
  );
  return formattedPhoneNumber;
};

const SignUpForm = () => {
  const history = useHistory();
  const formId = "sign-up-form";
  const auth = getAuth();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      keepSignedIn: false,
    },
    onSubmit: async (values) => {
      // TODO:
      // eslint-disable-next-line no-alert
      // alert(JSON.stringify(values, null, 2));
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // Signed in
          history.push("/");
        })
        .catch((e) => {
          if (e.code === "auth/email-already-in-use") {
            formik.setFieldError(
              "email",
              "Email address has already been associated with an account."
            );
          }
        });
    },
    validate,
  });

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
            label="First Name"
            id="firstName"
            type="text"
            errorMessage={
              formik.touched.firstName && formik.errors.firstName
                ? formik.errors.firstName
                : null
            }
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.firstName}
            marginRight="20px"
          />
          <TextField
            label="Last Name"
            id="lastName"
            type="text"
            errorMessage={
              formik.touched.lastName && formik.errors.lastName
                ? formik.errors.lastName
                : null
            }
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
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
          <TextField
            label="Phone Number (optional)"
            id="phoneNumber"
            type="text"
            errorMessage={
              formik.touched.phoneNumber && formik.errors.phoneNumber
                ? formik.errors.phoneNumber
                : null
            }
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={getFormattedPhoneNumber(formik.values.phoneNumber)}
            maxLength="12"
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
        <Checkbox
          id="signup-keep-sign-in"
          name="keepSignIn"
          onChange={() => {
            formik.setFieldValue("keepSignedIn", !formik.values.keepSignedIn);
          }}
          isChecked={formik.values.keepSignedIn}
          mt="12px"
        >
          Keep me signed in.
        </Checkbox>
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
          <Button form={formId} type="submit" width="440px">
            Sign up
          </Button>
        </Center>
      </Footer>
    </Center>
  );
};

export default SignUpForm;
