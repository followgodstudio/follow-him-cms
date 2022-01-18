import React from "react";
import { Heading, Text, Center } from "@chakra-ui/react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import queryString from "query-string";
// import { logIn } from "redux/slices/userSlice";
import { useFormik } from "formik";
import TextField from "components/TextField/TextField";
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
  const history = useHistory();
  const DEFAULT_RETURN_UTL = "/";
  // TODO: upgrade to react router v6 and use useSearchParams
  // const { searchParams } = useSearchParams();
  // searchParams.get("returnUrl", DEFAULT_RETURN_UTL);
  const { search } = useLocation();
  const query = queryString.parse(search);
  const returnUrl = query.returnUrl ?? DEFAULT_RETURN_UTL;

  // const dispatch = useDispatch();
  const formId = "sign-in-form";

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // onSubmit: (values) => {
    //   dispatch(logIn(values))
    //     .then(() => history.push(returnUrl))
    //     .catch((e) => {
    //       if (e.response.status === 401) {
    //         formik.setFieldError(
    //           "email",
    //           "Please enter a valid email and password."
    //         );
    //       }
    //     });
    // },
    validate,
  });

  const signInWithEmail = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        history.push(returnUrl);
        // ...
      })
      .catch((error) => {
        formik.setFieldError(
          "email",
          "Please enter a valid email and password."
        );
      });
  };

  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: returnUrl,
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
