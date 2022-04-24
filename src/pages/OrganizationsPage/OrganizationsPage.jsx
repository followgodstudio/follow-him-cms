import { CustomizeButton } from "../shared/SigninPage/SigninForm/SigninForm.styles";
import { useHistory } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useTranslation } from "react-i18next";
import {
  query,
  where,
  collection,
  getFirestore,
  getDocs,
} from "firebase/firestore";
import { useEffect, useState, useCallback } from "react";

const OrganizationsPage = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const db = getFirestore();
  const auth = getAuth();
  const [allOrganizations, setAllOrganizations] = useState([]);

  const handleGetAllOrgnizations = useCallback(async () => {
    const querySnapshot = await getDocs(
      query(
        collection(db, "organizations"),
        where("owners", "array-contains", auth.currentUser.uid)
      )
    );
    const allOrganizations = [];
    querySnapshot.forEach((doc) => {
      allOrganizations.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    console.log(allOrganizations);
    setAllOrganizations(allOrganizations);
  }, [db, auth]);

  useEffect(() => {
    handleGetAllOrgnizations();
  }, [handleGetAllOrgnizations]);

  return (
    <>
      <CustomizeButton
        type="submit"
        onClick={() => {
          history.push("/organizations/create");
        }}
      >
        {t("organizations.createNewOrganization")}
      </CustomizeButton>
      <div>
        {t("organizations.organizationsOwnedByYou")}
        {allOrganizations.length === 0 ? (
          <div>{t("organizations.noOrganizationFound")}</div>
        ) : (
          <ul>
            {allOrganizations.map((organization) => (
              <li key={organization.id}>
                {organization.name}: {organization.description}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default OrganizationsPage;
