<template lang="html">
  <div>
    <draggable class="dragArea list-group"
               v-bind:style="{ 'background-color': color[0] }"
               :list="selectedClauses"
               group="clauses"
               @change="addClause">
             <div class="list-group-item md-button clause-large"
                  v-bind:style="{ 'background-color': color[1] + '!important' }"
                  v-for="(clause, name, clauseIdx) in selectedClauses"
                  :key="clause.id + 'lg'">
                  <h4>{{ clause.title }}</h4>
                  <md-field class="arg-field"
                            v-for="(arg, arg_name, idx) in clause.arguments">
                    <label style="color: rgba(255, 255, 255, 0.65) !important">
                      {{arg_name}}
                    </label>
                    <md-input style="color: #fff !important"
                              v-model="clause.arguments[arg_name]"></md-input>
                  </md-field>
             </div>
             <span>Selected Clauses: {{ selectedClauses }}</span>
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import ClausesConfig from "@/clausesConfig";
import state from "@/state";

export default {
  props: {
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
    addClause: function(evt) {
      if(evt.added) {
        console.log("in cond");
        console.log(evt);
      }
    }
  },
  computed: {
        selectedClauses () {
            return parse(this.userInput)
        }
  },
  methods: {
    process () {
      serverProcess(this.parsedInput);
    }
  },
  watch: {
    selectedClauses() {
      this.process();
    }
  },
  name: "ClausesLarge",
};
</script>
<style scoped>
.dragArea {
  min-height: 50px;
  border-radius: 4px;
  padding: 5px;
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

.clause-large {
  margin: 5px 0 !important;
  padding: 2px 10px;
  min-height: 250px;
  width: 100%;
  word-wrap: break-word !important;
}

.arg-field {
  margin-top: 10px;
}
</style>
