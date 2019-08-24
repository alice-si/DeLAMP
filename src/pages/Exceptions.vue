<template>
    <div class="content">

        <div class="md-layout">
            <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                <md-card>
                    <md-card-header data-background-color="green">
                        <h4 class="title">Exceptions</h4>
                        <p class="category">Here is a list of failed operations</p>
                    </md-card-header>
                    <md-card-content>
                        <md-table v-model="exceptions">
                            <md-table-row slot="md-table-row" slot-scope="{ item }">
                                <md-table-cell md-label="Id">{{ item.id }}</md-table-cell>
                                <md-table-cell md-label="Clause">{{ item.clause }}</md-table-cell>
                                <md-table-cell md-label="Value">{{ item.value }}</md-table-cell>
                                <md-table-cell md-label="Resolved">{{ item.resolved }}</md-table-cell>
                                <md-table-cell md-label="Actions">
                                    <md-button v-if="item.canResolve && !item.resolved" class="md-round md-success" @click="resolve(item.id)">Resolve</md-button>
                                </md-table-cell>
                            </md-table-row>
                        </md-table>
                    </md-card-content>
                </md-card>
            </div>

        </div>

    </div>
</template>

<script>


  import {state} from "../state.js";
  import {contracts} from "../utils/contracts.js";

  export default {
    name: "conditions-dashboard",
    data: function () {
      return {
        exceptions: state.exceptions,
        showSidepanel: false,
        sending: false
      }
    },
    methods: {
      resolve: async function(index) {
        await contracts.resolve(index);
      },
    },
    mounted: function () {
      contracts.fetchExceptions();
    }

  }
</script>

<style media="screen">
    .add-condition {
    }
</style>
