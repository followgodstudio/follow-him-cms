import { Center, Divider, Heading } from "@chakra-ui/react";
import TextField from "components/TextField/TextField";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { NotificationType, sendNotification } from "utils/notification";
import { CustomizeButton, FormBox } from "./ForgotPasswordPage.styles";

const ForgotPasswordPage = () => {
    const { t } = useTranslation();
    const formId = "forgot-password-form";

    const validate = (values) => {
        const errors = {};
      
        if (!values.email) {
          errors.email = t("forgotpassword.emailrequired");
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = t("forgotpassword.emailinvalid");
        }
      
        return errors;
      };

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validate,
        onSubmit: (values) => {
            handleForgotPasswordSubmit(values);
        }
    });

    const handleForgotPasswordSubmit = (values) => {
        // TODO: connect API and handle exception
        sendNotification(NotificationType.WARNING, "Feature Not Implemented", "This forgot password feature has not been implemented yet, please check back shortly");
    }

    return (
        <Center
            display="flex"
            justifyContent="start"
            flexDirection="column">
            <Heading size="xl" mb="8px" color="#00CBFE">
                {t("forgotpassword.forgotpassword")}
            </Heading>
            <Divider />
            <FormBox id={formId} onSubmit={formik.handleSubmit}>
                <TextField
                    label={t("forgotpassword.email")}
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
                <CustomizeButton type="submit">
                    {t("forgotpassword.submit")}
                </CustomizeButton>
            </FormBox>
        </Center>
    )
}

export default ForgotPasswordPage;