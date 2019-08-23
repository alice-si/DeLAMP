<template>
    <div class="content">
        <div v-if="conditions.length > 0" class="md-layout">
            <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
                <stats-card data-background-color="orange">
                    <template slot="header">
                        <md-icon>content_copy</md-icon>
                    </template>

                    <template slot="content">
                        <p class="category">Used Space</p>
                        <h3 class="title">
                            49/50
                            <small>GB</small>
                        </h3>
                    </template>

                    <template slot="footer">
                        <div class="stats">
                            <md-icon class="text-danger">warning</md-icon>
                            <a href="#pablo">Get More Space...</a>
                        </div>
                    </template>
                </stats-card>
            </div>
        </div>
        <div v-else class="md-layout">
            <!-- <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"> -->
                <h3>There are currently no conditions, create one!</h3>
            <!-- </div> -->
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
                  <h3 class="md-title" style="color: #fff;">Create a condition</h3>
                </md-card-header>

                <md-card-content>
                    <div class="md-layout-item md-small-size-100">
                      <md-field>
                        <label for="question">Question</label>
                        <md-input name="question" id="question" v-model="form.question" :disabled="sending"/>
                      </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100">
                      <md-field>
                        <label for="oracle">Oracle Address</label>
                        <md-input name="oracle" id="oracle" v-model="form.oracle" :disabled="sending"/>
                      </md-field>
                    </div>
                    <!-- <div class="md-layout-item md-small-size-50">
                      <md-field>
                        <label for="Outcome 1">First Outcome</label>
                        <md-input name="Outcome 1" v-model="form.outcome1" :disabled="sending"/>
                      </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-50">
                      <md-field>
                        <label for="Outcome 2">Outcome 2</label>
                        <md-input name="Outcome 2" id="oracle" v-model="form.outcome2" :disabled="sending"/>
                      </md-field>
                    </div> -->
                </md-card-content>
                <md-progress-bar md-mode="indeterminate" v-if="sending"/>
                <md-card-actions>
                  <md-button type="submit"
                             class="md-primary"
                             :disabled="sending"
                             @click="addCondition">Create condition</md-button>
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

  import hgBinding from '@/utils/hgBinding';
  import Chain from '@/Blockchain';
  import state from '@/state';

  export default {
    name: "conditions-dashboard",
    data: function () {
        return {
            conditions: [],
            showSidepanel: false,
            form: {
              question: null,
              oracle: null,
              outcomesSlotsCount: 2,
            },
            sending: false,
            conditionAdded: false,
        }
    },
    components: {
      StatsCard,
    },
    methods: {
      getContract: function() {
          hgBinding.getContract();
      },
      getConditions: function() {
          hgBinding.getHGRegistry();
          console.log(state.hgRegistry);
          this.conditions = state.conditions;
      },
      addCondition: function() {
          this.sending = true;
          hgBinding.addCondition(this.form);
          this.conditionAdded = true;
      },
    },
    beforeMount() {
      this.getContract();
      this.getConditions();
    },
  }
</script>

<style media="screen">
    .add-condition {
    }
</style>
