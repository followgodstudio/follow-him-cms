import {
  IconChartLine,
  IconFilePlus,
  IconFiles,
  IconHome,
  IconMessages,
  IconStars,
  IconUsers,
} from "@tabler/icons";

import { useTranslation } from "react-i18next";

export function useNavItems() {
  const { t } = useTranslation();

  return [
    {
      title: t("homepage.home"),
      icon: <IconHome />,
      link: "/",
    },
    {
      title: t("homepage.createArticles"),
      icon: <IconFilePlus />,
      link: "/articles/create",
    },
    {
      title: t("homepage.manageArticles"),
      icon: <IconFiles />,
      link: "/articles/view",
    },
    {
      title: t("homepage.statistics"),
      icon: <IconChartLine />,
      link: "/statistics",
    },
    {
      title: t("homepage.manageOrganizations"),
      icon: <IconStars />,
      link: "/organizations/view",
    },
    {
      title: t("homepage.manageWriters"),
      icon: <IconUsers />,
      link: "/writers",
    },
    {
      title: t("homepage.messages"),
      icon: <IconMessages />,
      link: "/messages",
    },
  ];
}
