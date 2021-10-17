import { IconChartLine, IconHome, IconReportAnalytics } from "@tabler/icons";

export const NAV_ITEMS = [
  {
    title: "Dashboard",
    link: "/",
    icon: <IconHome />,
  },
  {
    title: "Articles",
    icon: <IconChartLine />,
    subNavList: [
      {
        title: "View Articles",
        link: "/articles/view",
      },
      {
        title: "Create New Article",
        link: "/articles/create",
      },
    ],
  },
  {
    title: "Organizations",
    icon: <IconReportAnalytics />,
    subNavList: [
      {
        title: "View all members",
        link: "/organizations/view",
      },
    ],
  },
];
