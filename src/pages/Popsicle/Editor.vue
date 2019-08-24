<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-50 editor-section">
      <h3>Clauses</h3>

      <div v-for="(clauses, typeOfClause, idx) in clauseGroups">
        <h4 style="-moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;-o-user-select:none;" class="md-list-item-text clause-type-header" v-on:click="toggle(typeOfClause)">
          <span>{{ typeOfClause }}
          <i v-if="!expanded[typeOfClause]" class="material-icons arrow-expand">expand_more</i>
          <i v-if="expanded[typeOfClause]" class="material-icons arrow-expand">expand_less</i>
          </span>
        </h4>
        <ClausesSmall :clauses="clauses"
                      :expanded="expanded[typeOfClause]"
                      :color="clauseColours[typeOfClause]"
                      :icon="clauseIcons[typeOfClause]"/>
      </div>

    </div>
    <div class="md-layout-item md-size-50 editor-section">
      <h3>Contract Structure</h3>
      <div style="overflow-y: scroll; max-height: 92vh;">
        <div v-for="(clauses, typeOfClause, idx) in clauseGroups">
          <h4>{{ typeOfClause }}</h4>
          <ClausesLarge :color="clauseColours[typeOfClause]"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import draggable from "vuedraggable";
import Clauses from "@/clausesConfig";
import ClausesSmall from "./ClausesSmall";
import ClausesLarge from "./ClausesLarge";

  export default {
    order: 5,
    components: {
      draggable,
      ClausesSmall,
      ClausesLarge,
    },
    data() {
      return {
        clauseGroups: [],
        chosenClauses: [
          { name: "Juan", id: 5 },
          { name: "Edgard", id: 6 },
          { name: "Johnson", id: 7 },
        ],
        clauseColours: [],
        clauseIcons: null,
        expanded: {
          "Funding": true,
          "Investment": false
        }
      };
    },
    computed: {
      draggingInfo() {
        return this.dragging ? "under drag" : "";
      }
    },
    methods: {
      removeClause(evt) {
        if(evt) {
          console.log(evt);
          // this.chosenClauses.splice(evt.removed.oldIndex, 1);
        }
        // this.list.splice(idx, 1);
      },
      fetchClauses: function() {
        this.clauseGroups = Clauses.clauses;
        this.clauseColours = Clauses.colours;
        this.clauseIcons = Clauses.icons;
        console.log(this.clauseIcons);
      },
      printClauses: function() {
        console.log(this.list);
      },
      add: function() {
        id++;
        this.list.push({ name: "Clause " + (id + 1), id, text: "" });
      },
      log: function(e) {
        console.log(e);
      },
      toggle(typeOfClause) {
        let newVal = !Boolean(this.expanded[typeOfClause]);
        for (let type in this.expanded) {
          this.expanded[type] = false;
        }
        this.expanded[typeOfClause] = newVal;
        // Vue.set(this.expanded, typeOfClause, newVal);
      }
    },
    beforeMount() {
      this.fetchClauses();
    },
    name: "Editor",
  };
</script>
<style scoped>
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

.editor-section {
  min-height: 92vh;
}

.clause {
  margin: 5px 0 !important;
  padding: 10px;
  width: 100%;
  background-color: red;
}

.arrow-expand {
  margin-bottom: -10px;
}

.clause-type-header {
  cursor: pointer;
}
</style>
