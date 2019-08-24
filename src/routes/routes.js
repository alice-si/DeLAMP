import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import Conditions from "@/pages/ConditionsDashboard/Conditions.vue";
import Wallet from "@/pages/Wallet.vue";
// import Popsicle from "@/pages/Popsicle.vue";
import PopsiclePage from "@/pages/Popsicle/PopsiclePage";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "popsicle",
        name: "Popsicle",
        component: PopsiclePage
      },
      {
        path: "conditions",
        name: "Conditions",
        component: Conditions
      },
      {
        path: "wallet",
        name: "Wallet",
        component: Wallet
      },

    ]
  }
];

export default routes;
