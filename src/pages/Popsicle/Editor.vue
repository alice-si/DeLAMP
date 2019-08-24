<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-50 editor-section">
      <h3>Clauses</h3>
      <div v-for="(clauses, typeOfClause, idx) in clauseGroups">
        <h4>{{ typeOfClause }}</h4>
        <ClausesSmall :clauses="clauses" :color="clauseColours[typeOfClause]"/>
      </div>

    </div>
    <div class="md-layout-item md-size-50 editor-section">
      <h3>Contract</h3>
      <div v-for="(clauses, typeOfClause, idx) in clauseGroups">
        <h4>{{ typeOfClause }}</h4>
        <ClausesLarge :color="clauseColours[typeOfClause]"/>
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
        // dragging: false
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
  border: 1px solid blue;
}

.clause {
  margin: 5px 0 !important;
  padding: 10px;
  width: 100%;
  background-color: red;

}
</style>
