import { Center, Text, Heading } from "@chakra-ui/react";
import TextField from "components/TextField/TextField";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import validator from "validator";
import { NotificationType, sendNotification } from "utils/notification";
import {
  Footer,
  FormBox,
  Link,
  CustomizeButton,
} from "../SigninForm/SigninForm.styles";

const ForgotPasswordForm = () => {
  const auth = getAuth();
  const history = useHistory();
  const { t } = useTranslation();
  const formId = "forgot-password-form";

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = t("common.messages.required");
    } else if (!validator.isEmail(values.email)) {
      errors.email = t("signin.messages.emailinvalid");
    }
    return errors;
  };

  const handleForgotPasswordSubmit = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(async () => {
        sendNotification(
          NotificationType.SUCCESS,
          t("signin.messages.passwordResetEmailSent"),
          t("signin.messages.emailSent", { email })
        );
        history.push("./signin");
      })
      .catch((error) => {
        sendNotification(
          NotificationType.DANGER,
          t("common.messages.unknownError"),
          error.toString()
        );
      });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      handleForgotPasswordSubmit(values.email);
    },
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
      <Heading size="xl" marginBottom="8px" color="#00CBFE">
        {t("signin.followHim")}
      </Heading>
      <FormBox id={formId} onSubmit={formik.handleSubmit}>
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
          <CustomizeButton type="submit" form={formId}>
            {t("signin.resetPassword")}
          </CustomizeButton>
        </Center>
        <Text size="medium" lineHeight="24px" mb="24px">
          <Link to="/signin">{t("signin.goBackToSignIn")}</Link>
        </Text>
      </Footer>
    </Center>
  );
};

export default ForgotPasswordForm;
