<template>
    <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
        <deposit-panel :active="showPanel" v-on:success="deposited()"></deposit-panel>
        <stats-card data-background-color="green">
            <template slot="header">
                <md-icon>account_balance_wallet</md-icon>
            </template>

            <template slot="content">
                <p class="category">Your balance</p>
                <h3 class="title">${{balance.value}}</h3>
            </template>

            <template slot="footer">
                <md-button class="md-round md-success" @click="deposit()">Deposit cash</md-button>
            </template>
        </stats-card>
    </div>
</template>

<script>
  import {StatsCard} from "@/components";
  import DepositPanel from "./DepositPanel";
  import {state} from "../../state.js";

  export default {
    components: {
      StatsCard,
      DepositPanel
    },
    methods: {
      async deposit() {
        this.showPanel = true;
      },
      deposited() {
        console.log("Deposited!");
        this.showPanel = false;
      }
    },
    data() {
      return {
        balance: state.balance,
        showPanel: false
      };
    }
  };
</script>
