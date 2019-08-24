<template lang="html">
  <div>
    <draggable class="dragArea list-group"
               :list="clauses"
               :group="{ name: 'clauses', pull: 'clone', put: false }"
               @change="log">
               <transition-group>
                      <stats-card v-for="clause in clauses"
                                  :key="clause.id"
                                  :header-color="color[1]">
                        <template slot="header">
                          <md-icon>{{icon}}</md-icon>
                        </template>

                        <template slot="content">
                          <p class="category">Executions</p>
                          <h3 class="title"><span style="color: #5cb85c">{{clause.tracking['successCount']}}</span> |
                                            <span style="color: #d9534f">{{ clause.tracking['failureCount'] }}</span>
                                          </h3>
                        </template>

                        <template slot="footer">
                          <div class="stats">
                            <div class="stats-row" style="font-size: 14px; text-transform: capitalize; font-weight: 600;">
                              {{ clause.title }}
                            </div>
                            <div class="stats-row">
                              <md-icon>attach_money</md-icon>
                              Price: ${{ clause.tracking['price'] }}
                            </div>

                            <div class="stats-row">
                              <md-icon>create</md-icon>
                              Author: {{ makeShorter(clause.tracking['author']) }}
                            </div>

                            <div class="stats-row">
                              <md-icon>how_to_reg</md-icon>
                              Auditor: {{ makeShorter(clause.tracking['auditor']) }}
                            </div>
                          </div>
                        </template>
                      </stats-card>

               </transition-group>
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import ClausesConfig from "@/clausesConfig";
import state from "@/state";
import { StatsCard } from "@/components";
import MarqueeText from 'vue-marquee-text-component';

export default {
  props: {
    clauses: {
      required: true,
      type: Array,
    },
    color: {
      required: true,
      type: Array,
    },
    icon: {
      required: true,
      type: String,
    }
  },
  data: function() {
    return {
      selectedClauses: [],
      clauseIcons: null,
      trackingFields: [
        ['Author', 'author'],
        ['Auditor', 'auditor'],
        ['Author fee', 'authorFee'],
        ['Auditor fee', 'auditorFee'],
        ['Registry fee', 'registryFee'],
        ['Price', 'price'],
        ['Success count', 'successCount'],
        ['Failure count', 'failureCount'],

      ]
    }
  },
  components: {
    draggable,
    StatsCard,
    MarqueeText,
  },
  methods: {
    fetchClauses() {
      this.clauseKeys = ClausesConfig.types;
    },
    log: function(evt) {
      window.console.log(evt);
    },
    makeShorter(value) {
      if (value && value.length > 20) {
        return value.substring(0, 7) + '...' + value.substring(value.length - 7);
      }
      return value;
    }
  },
  beforeMount() {
    this.fetchClauses();
  }
};
</script>
<style scoped>
.dragArea {
  min-height: 50px;
  border-radius: 4px;
  padding: 5px 5px;
}

.button {
  margin-top: 35px;
}
.handle {
  float: left;
  padding-top: 8px;
  padding-bottom: 8px;
}
.close {
  float: right;
  padding-top: 8px;
  padding-bottom: 8px;
}
input {
  display: inline-block;
  width: 50%;
}
.text {
  margin: 20px;
}
/* Draggy */
.drag-area {
  width: 50%;
}
.clause {
  margin: 5px 0 !important;
  padding: 20px;
  width: 100%;
}

h6 {
  font-weight: 1000;
}



.tracking-info {
  font-size: 8px;
  /* position: absolute; */
  /* right: 5px; */
  /* top: 5px; */
}

.stats-row {
  width: 100%;
}
</style>
