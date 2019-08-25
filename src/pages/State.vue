<template>
    <div class="md-layout">
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25" >
            <stats-card data-background-color="green">
                <template slot="header">
                    <md-icon>cloud_upload</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Funded</p>
                    <h3 class="title">${{s.funded}}</h3>
                </template>

                <template slot="footer">
                    <div class="stats">
                        <md-icon>date_range</md-icon>
                        Impact investment contract
                    </div>
                </template>
            </stats-card>
        </div>

        <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25" >
            <stats-card data-background-color="orange">
                <template slot="header">
                    <md-icon>swap_horiz</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Invested</p>
                    <h3 class="title">$0</h3>
                </template>

                <template slot="footer">
                    <div class="stats">
                        <md-icon>date_range</md-icon>
                        Impact investment contract
                    </div>
                </template>
            </stats-card>
        </div>

        <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25" >
            <stats-card data-background-color="blue">
                <template slot="header">
                    <md-icon>attach_money</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Fees earned</p>
                    <h3 class="title">${{s.fees}}</h3>
                </template>

                <template slot="footer">
                    <div class="stats">
                        <md-icon>date_range</md-icon>
                        Contract registry
                    </div>
                </template>
            </stats-card>
        </div>

    </div>
</template>

<script>
  import {NavTabsCard, NavTabsTable, StatsCard} from "@/components";
  import {state} from "../state.js";
  import {contracts} from "../utils/contracts.js";
  import UserCard from "./UserProfile/UserCard";

  export default {
    components: {
      UserCard,
      NavTabsCard,
      NavTabsTable,
      StatsCard
    },
    data() {
      return {
        s: state.contract
      };
    }
  };
</script>
