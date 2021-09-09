import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn, signUp } from "redux/slices/userSlice";
import { Text, Heading, Center } from "@chakra-ui/react";
import TextField from "components/TextField/TextField";
import { useFormik } from "formik";
import validate from "./validate";
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
  Wrapper,
  Footer,
  CustomizeButton,
} from "./SignUpForm.styles";

function getFormattedPhoneNumber(phoneNumberInput) {
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
}

function SignUpForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const formId = "sign-up-form";
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
      dispatch(signUp(values))
        .then(async () => {
          dispatch(logIn(values))
            .then(() => history.push("/"))
            .catch((e) => {
              // ToDO:
              if (e.response.status === 401) {
                alert("Please enter a valid email and password.");
              }
            });
        })
        .catch((e) => {
          if (e.response.status === 409) {
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
      <Heading size="lg" marginBottom="8px">
        Let’s Start. Tell Us About You.
      </Heading>

      <Text size="medium" lineHeight="24px" mt="12px">
        Need to sign in?&nbsp;
        <Link to="/signin">Click Here</Link>
      </Text>
      <HorizontalLine />
      <FormBox id={formId} onSubmit={formik.handleSubmit}>
        <Heading size="lg" marginBottom="24px" mt="24px">
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
        <Heading size="lg" marginBottom="24px" marginTop="24px">
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
        <Wrapper>
          <CheckBoxContainer marginBottom="0px">
            <CheckBoxButton
              id="keepSignedIn"
              name="keepSignedIn"
              type="button"
              onChange={() =>
                formik.setFieldValue(
                  "keepSignedIn",
                  !formik.values.keepSignedIn
                )
              }
              onClick={() =>
                formik.setFieldValue(
                  "keepSignedIn",
                  !formik.values.keepSignedIn
                )
              }
            >
              {formik.values.keepSignedIn ? <CheckedIcon /> : <UncheckedIcon />}
            </CheckBoxButton>
            <CheckBoxText size="small">
              Keep me signed in. <Link to="/">Details</Link>
            </CheckBoxText>
          </CheckBoxContainer>
        </Wrapper>
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
          <CustomizeButton form={formId} type="submit">
            Sign up
          </CustomizeButton>
        </Center>
      </Footer>
    </Center>
  );
}

export default SignUpForm;
