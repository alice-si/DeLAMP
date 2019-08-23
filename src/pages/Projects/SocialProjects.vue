<template>


    <div class="content">
        <div v-if="wallet.active">
            <invest-panel :active="selectedProject != null" :project="selectedProject"
                          v-on:success="invested()"></invest-panel>
            <div class="md-layout">
                <balance-widget></balance-widget>
                <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
                    <stats-card data-background-color="green">
                        <template slot="header">
                            <md-icon>build</md-icon>
                        </template>

                        <template slot="content">
                            <p class="category">Don't touch it :)</p>
                            <h3 class="title">Testing</h3>
                        </template>

                        <template slot="footer">
                            <md-button class="md-round md-success" @click="test()">Test</md-button>
                        </template>
                    </stats-card>
                </div>
            </div>


            <div class="md-layout">
                <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                    <md-card>
                        <md-card-header data-background-color="green">
                            <h4 class="title">Your Projects</h4>
                            <p class="category">Here is a list of social projects that you've invested</p>
                        </md-card-header>
                        <md-card-content>
                            <md-table v-model="projects">
                                <md-table-row slot="md-table-row" slot-scope="{ item }">
                                    <md-table-cell md-label="Code">{{ item.code }}</md-table-cell>
                                    <md-table-cell md-label="Description">{{ item.desc }}</md-table-cell>
                                    <md-table-cell md-label="Interests">{{ item.interests }}</md-table-cell>
                                    <md-table-cell md-label="Holdings">${{ item.holdings }}</md-table-cell>
                                    <md-table-cell md-label="Actions">
                                        <md-button class="md-round md-success" @click="invest(item)">Invest</md-button>
                                    </md-table-cell>
                                </md-table-row>
                            </md-table>
                        </md-card-content>
                    </md-card>
                </div>

            </div>
        </div>
        <div v-else>
            <md-card class="md-card-profile">
                <md-card-content>
                    <h6 class="category text-gray">In order to start investing</h6>
                    <h4 class="card-title">You'll need to</h4>
                    <md-progress-bar md-mode="indeterminate" v-if="creating"/>
                    <md-button class="md-round md-success" @click="createWallet()" :disabled="creating">Create new Wallet</md-button>
                </md-card-content>
            </md-card>
        </div>

    </div>
</template>

<script>
  import {SimpleTable, OrderedTable, StatsCard} from "@/components";
  import BalanceWidget from "./BalanceWidget";
  import InvestPanel from "./InvestPanel";
  import {state} from "../../state.js";
  import {projects} from "../../utils/social-projects.js";
  import hgBinding from "../../utils/hgBinding.js";

  export default {
    components: {
      OrderedTable,
      SimpleTable,
      StatsCard,
      BalanceWidget,
      InvestPanel
    },
    methods: {
      async test() {
        console.log(hgBinding);
        await hgBinding.fetchConditions();
      },

      async createWallet() {
        this.creating = true;
        await projects.deployDemoWallet();
        this.creating = false;
      },

      invest(project) {
        this.selectedProject = project;
      },

      invested() {
        this.selectedProject = null;
      }
    },
    data() {
      return {
        projects: state.projects,
        balance: state.balance,
        selectedProject: null,
        wallet: state.wallet,
        creating: false
      };
    }
  };
</script>
