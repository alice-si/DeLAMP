<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item">
                <nav-tabs-card>
                    <template slot="content">

                        <md-tabs class="md-success" md-alignment="left">

                            <md-tab md-label="Funding" md-icon="cloud_upload">
                                <md-card class="md-card-profile">
                                    <md-card-content>
                                        <h6 class="category text-gray">Hedge against the risk</h6>
                                        <h4 class="card-title">Select a new condition</h4>

                                        <md-button class="md-round md-success" @click="test()">Split</md-button>
                                    </md-card-content>
                                </md-card>
                            </md-tab>

                            <md-tab md-label="Investment" md-icon="swap_horiz">
                                <md-card class="md-card-profile">
                                    <md-card-content>
                                        <h6 class="category text-gray">Hedge against the risk</h6>
                                        <h4 class="card-title">Select a new condition</h4>

                                        <md-button class="md-round md-success" @click="test()">Split</md-button>
                                    </md-card-content>
                                </md-card>
                            </md-tab>

                            <md-tab md-label="Validation" md-icon="check_circle">
                                <md-card class="md-card-profile">
                                    <md-card-content>
                                        <h6 class="category text-gray">Hedge against the risk</h6>
                                        <h4 class="card-title">Select a new condition</h4>

                                        <md-button class="md-round md-success" @click="test()">Deploy</md-button>
                                    </md-card-content>
                                </md-card>
                            </md-tab>

                            <md-tab md-label="Redemption" md-icon="cloud_download">
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
  import {contracts} from "../utils/contracts.js";
  import UserCard from "./UserProfile/UserCard";

  export default {
    components: {
      UserCard,
      NavTabsCard,
      NavTabsTable
    },
    methods: {
      test: async function() {
        console.log("TEST");
        await contracts.deployClausesRegistry();
      }
    },
    data() {
      return {
        //projects: state.projects,
      };
    }
  };
</script>
