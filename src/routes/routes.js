import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import State from "@/pages/State.vue";
import Updates from "@/pages/Updates.vue";
import Exceptions from "@/pages/Exceptions.vue";
import Interface from "@/pages/Interface.vue";
// import Popsicle from "@/pages/Popsicle.vue";
import PopsiclePage from "@/pages/Popsicle/PopsiclePage";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/popsicle",
    children: [
      {
        path: "state",
        name: "State",
        component: State
      },
      {
        path: "popsicle",
        name: "Popsicle",
        component: PopsiclePage
      },
      {
        path: "interface",
        name: "Interface",
        component: Interface
      },
      {
        path: "updates",
        name: "Updates",
        component: Updates
      },
      {
        path: "exceptions",
        name: "Exceptions",
        component: Exceptions
      },


    ]
  }
];

export default routes;
