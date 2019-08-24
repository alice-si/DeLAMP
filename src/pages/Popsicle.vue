<template>
  <div class="content">
    <div class="md-layout md-size-50 drag-area">
      <div class="md-layout-item md-size-50">
        <h3>Clauses</h3>
          <draggable
           class="dragArea list-group"
           :list="clauses"
           :group="{ name: 'clauses', pull: 'clone', put: false }"
           @change="log">
           <transition-group>
             <div class="list-group-item md-button clause"
                  v-for="element in clauses"
                  :key="element.name">
                  {{ element.name }}
             </div>
           </transition-group>
         </draggable>
      </div>
      <div class="md-layout-item md-size-50">
        <h3>Contract</h3>
        <draggable class="dragArea list-group"
                   :list="chosenClauses"
                   group="clauses"
                   :move="removeClause">
                   <!-- @change="removeClause" -->
                   <div class="list-group-item"
                        v-for="element in chosenClauses"
                        :key="element.name">
                        {{ element.name }}
                  </div>
        </draggable>
      </div>
      <!-- <rawDisplayer class="md-size-50" :value="list1" title="List 1" />
      <rawDisplayer class="md-size-50" :value="list2" title="List 2" /> -->
    </div>
  </div>
</template>

<script>
let id = 3;
import draggable from "vuedraggable";

export default {
  order: 5,
  components: {
    draggable
  },
  data() {
    return {
      clauses: [
        { name: "Funding", fixed: true, id: 1 },
        { name: "Investment", fixed: true, id: 2 },
        { name: "Issuance Protocol", fixed: true, id: 3 },
        { name: "Validation", fixed: true, id: 4 }
      ],
      chosenClauses: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 },
      ],
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
  }
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

.clause {
  margin: 5px 0 !important;
  padding: 10px;
  width: 100%;

}
</style>
