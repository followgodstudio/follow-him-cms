import { useTranslation } from "react-i18next";
import {
  IconChartLine,
  IconFilePlus,
  IconFiles,
  IconHome,
  IconUsers,
} from "@tabler/icons";

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
      title: t("homepage.manageMembers"),
      icon: <IconUsers />,
      link: "/organizations",
    },
  ];
}
