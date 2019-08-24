<template>
  <div
    class="sidebar"
    :data-color="activeColor"
    :data-image="backgroundImage"
    :style="sidebarStyle"
  >
    <div class="logo" style="padding-top: 0">
      <!--<a href="#" class="simple-text logo-mini">-->
        <!--<div class="logo-img">-->
         <!---->
        <!--</div>-->
      <!--</a>-->
      <div>
        <!-- <img src="https://s3.eu-west-2.amazonaws.com/alice-res/alice-white.png" style="height:30px;" /> -->
        <div style="width: 100%; height: 150px; background: radial-gradient(rgba(80, 80, 80, 0.01),  rgba(82, 82, 82, 1)), url('https://alex-s3-hatskier.s3.eu-west-2.amazonaws.com/deLamp.gif') center center" />
      </div>
      <div class="head-title"> deLAMP </div>

    </div>
    <div class="sidebar-wrapper">
      <slot name="content"></slot>
      <md-list class="nav">
        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
        <slot>
          <sidebar-link
            v-for="(link, index) in sidebarLinks"
            :key="link.name + index"
            :to="link.path"
            :link="link"
          >
          </sidebar-link>
        </slot>
      </md-list>
    </div>
  </div>
</template>
<script>
import SidebarLink from "./SidebarLink.vue";

export default {
  components: {
    SidebarLink
  },
  props: {
    title: {
      type: String,
      default: "Vue MD"
    },
    backgroundImage: {
      type: String,
      default: require("@/assets/img/sidebar-2.jpg")
    },
    activeColor: {
      type: String,
      default: "green",
      validator: value => {
        let acceptedValues = ["", "purple", "blue", "green", "orange", "red"];
        return acceptedValues.indexOf(value) !== -1;
      }
    },
    sidebarLinks: {
      type: Array,
      default: () => []
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  provide() {
    return {
      autoClose: this.autoClose
    };
  },
  computed: {
    sidebarStyle() {
      return {
        backgroundImage: `url(${this.backgroundImage})`
      };
    }
  }
};
</script>
<style>
  .logo {
    text-align: center;
  }
  .head-title {
    width: 100%;
    color: white;
    font-size: 30px;
    margin-top: 15px;
  }
</style>
