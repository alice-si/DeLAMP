<template>
    <div class="md-layout">
        <div
                class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
        >
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
                        Last 24 Hours
                    </div>
                </template>
            </stats-card>
        </div>
        <div
                class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
        >
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
        <div
                class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
        >
            <stats-card data-background-color="red">
                <template slot="header">
                    <md-icon>info_outline</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Fixed Issues</p>
                    <h3 class="title">75</h3>
                </template>

                <template slot="footer">
                    <div class="stats">
                        <md-icon>local_offer</md-icon>
                        Tracked from Github
                    </div>
                </template>
            </stats-card>
        </div>
        <div
                class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
        >
            <stats-card data-background-color="blue">
                <template slot="header">
                    <i class="fab fa-twitter"></i>
                </template>

                <template slot="content">
                    <p class="category">Folowers</p>
                    <h3 class="title">+245</h3>
                </template>

                <template slot="footer">
                    <div class="stats">
                        <md-icon>update</md-icon>
                        Just Updated
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
