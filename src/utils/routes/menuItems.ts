import {
    SummarySVG,
    BillSvg,
    AnalyticsSvg,
    ReportSvg,
    BenefitsSvg,
    SettingsSvg,
    SupportSvg,
    DashboardSvg,
  } from "../../assets/SidebarAssets/SVGs/index";
  
  interface SubRoute {
    route: string;
    label: string;
    icon: React.ElementType
  }
  
  interface MenuItem {
    id: number;
    slug?: string;
    label: string;
    icon: React.ElementType
    subRoute: SubRoute[];
    otherSubRoute: SubRoute[];
  }
  
  export const mainMenuItems: MenuItem[] = [
    {
      id: 1,
      slug: "master",
      label: "Master",
      icon: DashboardSvg,
      subRoute: [{ route: "/task", label: "Task", icon: DashboardSvg }],
      otherSubRoute: [],
    },
  ];
  