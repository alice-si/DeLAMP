<template lang="html">
  <div>
    <draggable class="dragArea list-group"
               v-bind:style="{ 'background-color': color[0] }"
               :list="clauses"
               :group="{ name: 'clauses', pull: 'clone', put: false }"
               @change="log">
               <transition-group>
                 <div class="list-group-item md-button clause"
                      v-bind:style="{ 'background-color': color[1] + '!important' }"
                      v-for="clause in clauses"
                      :key="clause.id">
                      {{ clause.title }}
                      <div class="popularity">
                        {{ clause.popularity }} contracts
                      </div>
                 </div>
               </transition-group>
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import ClausesConfig from "@/clausesConfig";
import state from "@/state";

export default {
  props: {
    clauses: {
      required: true,
      type: Array,
    },
    color: {
      required: true,
      type: Array,
    }
  },
  data: function() {
    return {
      selectedClauses: [],
    }
  },
  components: {
    draggable
  },
  methods: {
    fetchClauses() {
      this.clauseKeys = ClausesConfig.types;
      console.log(this.clauseKeys);
    },
    log: function(evt) {
      window.console.log(evt);
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
.popularity {
  font-size: 8px;
  position: absolute;
  right: 5px;
  top: 5px;
}
</style>
