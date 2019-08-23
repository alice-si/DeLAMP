<template>
    <md-drawer class="md-right" :md-active.sync="active">
        <md-snackbar :md-active.sync="success">Your deposit has been added!</md-snackbar>
        <div>
            <form novalidate class="md-layout">
                <md-card class="md-layout-item ">
                    <md-card-header style="background-color: rgb(80, 174, 84);">
                        <h3 class="md-title" style="color: #fff;">Deposit funds for investment</h3>
                    </md-card-header>

                    <md-card-content>
                        <div class="md-layout-item md-small-size-100">
                            <md-field>
                                <label for="amount">Amount</label>
                                <md-input name="amount" id="amount" v-model="tx.amount" :disabled="sending"/>
                            </md-field>
                        </div>
                    </md-card-content>
                    <md-progress-bar md-mode="indeterminate" v-if="sending"/>
                    <md-card-actions>
                        <md-button type="submit"
                                   class="md-primary"
                                   :disabled="sending"
                                   @click="deposit()">Deposit
                        </md-button>
                    </md-card-actions>
                </md-card>
            </form>
        </div>
    </md-drawer>
</template>

<script>
  import {projects} from "../../utils/social-projects.js";

  export default {
    props: [
      'active'
    ],
    methods: {
      async deposit() {
        this.sending = true;
        await projects.deposit(this.tx.amount);
        this.sending = false;
        this.success = true;
        this.$emit('success');
      }
    },
    data: function () {
      return {
        tx: {
          amount: 100
        },
        sending: false,
        success: false,
        showSidepanel: true
      }
    }
  };
</script>
