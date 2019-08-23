<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item">
                <nav-tabs-card>
                    <template slot="content">
                        <span class="md-nav-tabs-title">Projects:</span>
                        <md-tabs class="md-success" md-alignment="left">

                            <md-tab v-for="project in projects" :md-label="project.code" md-icon="bug_report">
                                <md-card class="md-card-profile">
                                    <md-card-content>
                                        <h6 class="category text-gray">Hedge against the risk</h6>
                                        <h4 class="card-title">Select a new condition</h4>

                                        <md-button class="md-round md-success" @click="test()">Split</md-button>
                                    </md-card-content>
                                </md-card>
                            </md-tab>
                        </md-tabs>
                    </template>
                </nav-tabs-card>
            </div>
        </div>
    </div>
</template>

<script>
  import {NavTabsCard, NavTabsTable} from "@/components";
  import {state} from "../state.js";
  import {projects} from "../utils/social-projects.js";
  import UserCard from "./UserProfile/UserCard";

  export default {
    components: {
      UserCard,
      NavTabsCard,
      NavTabsTable
    },
    methods: {
      test: async function() {
        // console.log("TEST");
        // await projects.deployDemoToken();
      }
    },
    data() {
      return {
        projects: state.projects,
      };
    }
  };
</script>
