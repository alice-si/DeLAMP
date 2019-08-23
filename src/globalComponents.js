import DropDown from "./components/Dropdown.vue";
import Metamask from "./components/Metamask.vue"

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component("drop-down", DropDown);
    Vue.component("metamask", Metamask);
  }
};

export default GlobalComponents;
