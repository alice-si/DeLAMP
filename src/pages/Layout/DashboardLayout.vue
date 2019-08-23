<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>

      <sidebar-link to="/social-projects">
        <md-icon>bubble_chart</md-icon>
        <p>Social Projects</p>
      </sidebar-link>
      <sidebar-link to="/conditions">
        <md-icon>person</md-icon>
        <p>Conditions</p>
      </sidebar-link>
      <sidebar-link to="/wallet">
        <md-icon>unarchive</md-icon>
        <p>Wallet</p>
      </sidebar-link>
      <!--<sidebar-link to="/table">-->
        <!--<md-icon>content_paste</md-icon>-->
        <!--<p>Table list</p>-->
      <!--</sidebar-link>-->
      <!--<sidebar-link to="/typography">-->
        <!--<md-icon>library_books</md-icon>-->
        <!--<p>Typography</p>-->
      <!--</sidebar-link>-->
      <!--<sidebar-link to="/icons">-->
        <!--<md-icon>bubble_chart</md-icon>-->
        <!--<p>Icons</p>-->
      <!--</sidebar-link>-->
      <!--<sidebar-link to="/maps">-->
        <!--<md-icon>location_on</md-icon>-->
        <!--<p>Maps</p>-->
      <!--</sidebar-link>-->
      <!--<sidebar-link to="/notifications">-->
        <!--<md-icon>notifications</md-icon>-->
        <!--<p>Notifications</p>-->
      <!--</sidebar-link>-->
      <!--<sidebar-link to="/upgrade" class="active-pro">-->
        <!--<md-icon>unarchive</md-icon>-->
        <!--<p>Upgrade to PRO</p>-->
      <!--</sidebar-link>-->
    </side-bar>

    <div class="main-panel">

      <!--<top-navbar></top-navbar>-->

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  }
};
</script>
