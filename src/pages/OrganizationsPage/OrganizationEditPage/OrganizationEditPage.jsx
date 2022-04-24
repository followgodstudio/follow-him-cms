import {
  CustomizeButton,
  FormBox,
  InputGroup,
} from "../../shared/SigninPage/SigninForm/SigninForm.styles";
import { NotificationType, sendNotification } from "utils/notification";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import React from "react";
import TextField from "components/TextField/TextField";
import { getAuth } from "firebase/auth";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

const OrganizationEditPage = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const formId = "organization-edit-form";
  const db = getFirestore();
  const auth = getAuth();

  const handleCreateNewOrganization = async (name, description) => {
    try {
      await addDoc(collection(db, "organizations"), {
        name,
        description,
        owners: [auth.currentUser.uid],
      });
      sendNotification(
        NotificationType.SUCCESS,
        t("organizations.messages.createOrganizationSucceeded")
      );
      history.push("/organizations/view");
    } catch (error) {
      sendNotification(
        NotificationType.DANGER,
        t("common.messages.unknownError"),
        error.toString()
      );
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.organizationName) {
      errors.organizationName = t("common.messages.required");
    }
    if (!values.organizationDescription) {
      errors.organizationDescription = t("common.messages.required");
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      organizationName: "",
      organizationDescription: "",
    },
    validate,
    onSubmit: (values) => {
      handleCreateNewOrganization(
        values.organizationName,
        values.organizationDescription
      );
    },
  });

  return (
    <div>
      <div>{t("organizations.createOrganization")}</div>
      <div>{t("organizations.createOrganizationDescription")}</div>
      <div>{t("organizations.organizationLogo")}</div>
      <div>{t("organizations.organizationLogoDescription")}</div>
      <FormBox id={formId} onSubmit={formik.handleSubmit}>
        <InputGroup>
          <TextField
            label={t("organizations.organizationName")}
            id="organizationName"
            type="text"
            errorMessage={
              formik.touched.organizationName && formik.errors.organizationName
                ? formik.errors.organizationName
                : null
            }
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.organizationName}
          />
          <TextField
            label={t("organizations.organizationDescription")}
            id="organizationDescription"
            type="text"
            errorMessage={
              formik.touched.organizationDescription &&
              formik.errors.organizationDescription
                ? formik.errors.organizationDescription
                : null
            }
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.organizationDescription}
          />
        </InputGroup>
      </FormBox>
      <CustomizeButton form={formId} type="submit">
        {t("organizations.createNewOrganization")}
      </CustomizeButton>
    </div>
  );
};

export default OrganizationEditPage;
