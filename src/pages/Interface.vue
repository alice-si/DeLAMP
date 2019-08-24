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
                                        <h6 class="category text-gray">Execute donation (MIN: {{s.min}} MAX: {{s.max}})</h6>
                                        <h4 class="card-title">Send funds to the contract escrow</h4>

                                        <md-field>
                                            <label for="oracle">How much you want to donate?</label>
                                            <md-input name="oracle" id="oracle" v-model="form.value" />
                                        </md-field>

                                        <md-button class="md-round md-success" @click="donate()">Donate</md-button>

                                        <md-snackbar :md-active.sync="success">Your funding has been successfully recorded!</md-snackbar>
                                        <md-snackbar :md-active.sync="failure">Your funding failed!</md-snackbar>
                                    </md-card-content>
                                </md-card>
                            </md-tab>

                            <md-tab md-label="Investment" md-icon="swap_horiz">
                                <md-card class="md-card-profile">
                                    <md-card-content>
                                        <h6 class="category text-gray">Hedge against the risk</h6>
                                        <h4 class="card-title">Select a new condition</h4>

                                        <md-button class="md-round md-success" @click="test()">Deploy</md-button>
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

                                        <md-button class="md-round md-success" @click="deployRegistry()">Deploy registry</md-button>
                                        <md-button class="md-round md-success" @click="deployClause()">Deploy clause</md-button>
                                        <md-button class="md-round md-success" @click="deployContract()">Deploy contract</md-button>
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
      deployContract: async function() {
        console.log("DEPLOYING legal contract");
        await contracts.deployLegalContract();
      },
      deployRegistry: async function() {
        await contracts.deployClausesRegistry();
      },
      deployClause: async function() {
        await contracts.deployFundingClause();
      },
      donate: async function() {
        console.log("Donating: " + this.form.value);
        let result = await contracts.fund(this.form.value);
        if (result) {
          this.success = true;
        } else {
          this.failure = true;
        }
        console.log("Result: " + result);
      }
    },
    data() {
      return {
        success: false,
        failure: false,
        form: {
          value: null
        },
        s: state.contract
      };
    }
  };
</script>
