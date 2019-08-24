<template>
    <div class="content">

        <div class="md-layout">
            <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                <md-card>
                    <md-card-header data-background-color="green">
                        <h4 class="title">Updates</h4>
                        <p class="category">Here is a list of proposed updated</p>
                    </md-card-header>
                    <md-card-content>
                        <md-table v-model="updates">
                            <md-table-row slot="md-table-row" slot-scope="{ item }">
                                <md-table-cell md-label="Parameter">{{ item.symbol }}</md-table-cell>
                                <md-table-cell md-label="Suggested value">{{ item.value }}</md-table-cell>
                                <md-table-cell md-label="Actions">
                                    <md-button class="md-round md-success" @click="approve(item)">Approve</md-button>
                                </md-table-cell>
                            </md-table-row>
                        </md-table>
                    </md-card-content>
                </md-card>
            </div>

        </div>


        <md-button class="add-condition md-fab-top-center md-fab"
                   style="background-color: #1CB8C4 !important;"
                   @click="showSidepanel = true">
            <md-icon style="margin-left: -19px">add</md-icon>
        </md-button>
        <md-drawer class="md-right" :md-active.sync="showSidepanel">
          <div>
            <form novalidate class="md-layout">
              <md-card class="md-layout-item ">
                <md-card-header style="background-color: rgb(80, 174, 84);">
                  <h3 class="md-title" style="color: #fff;">Propose an update</h3>
                </md-card-header>

                <md-card-content>
                    <div class="md-layout-item md-small-size-100">
                      <md-field>
                        <label for="question">Parameter</label>
                        <md-input name="question" id="question" v-model="form.parameter" :disabled="sending"/>
                      </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100">
                      <md-field>
                        <label for="oracle">Value</label>
                        <md-input name="oracle" id="oracle" v-model="form.oracle" :disabled="sending"/>
                      </md-field>
                    </div>
                </md-card-content>
                <md-progress-bar md-mode="indeterminate" v-if="sending"/>
                <md-card-actions>
                  <md-button type="submit"
                             class="md-primary"
                             :disabled="sending"
                             @click="propose()">Propose update</md-button>
                </md-card-actions>
              </md-card>

              <md-snackbar :md-active.sync="conditionAdded">Your condition has been deployed with success!</md-snackbar>
            </form>
          </div>
        </md-drawer>
    </div>
</template>

<script>
  import { StatsCard } from "@/components";

  // import ConditionCard from '@/components/Cards/ConditionCard';

  import Chain from '@/Blockchain';
  import {state} from "../state.js";

  export default {
    name: "conditions-dashboard",
    data: function () {
        return {
            updates: state.updates,
            parameters: state.parameters,
            showSidepanel: false,
            form: {
              parameter: null,
              value: null
            },
            sending: false,
            conditionAdded: false,
        }
    },
    components: {
      StatsCard,
    },
    methods: {
      propose: function() {
          this.sending = true;
          //hgBinding.addCondition(this.form);
          this.conditionAdded = true;
      },
    }

  }
</script>

<style media="screen">
    .add-condition {
    }
</style>
