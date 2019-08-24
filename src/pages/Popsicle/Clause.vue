<template lang="html">
  <div>
    <h4>{{ type }}</h4>
    <div class="">
      {{ clauseType[type] }}
    </div>
    <!-- <div class="dragArea list-group"
         :list="clause"
         group="clause"
         :move="removeClause">
         @change="removeClause"
         <div class="list-group-item"
              v-for="element in clause"
              :key="element.id">
              {{ element.title }}
         </div>
    </div> -->
    <draggable
           class="dragArea list-group"
           :list="clauseType"
           :group="{ name: 'clauseType', pull: 'clone', put: false }"
           @change="log">
           <!-- <transition-group> -->
             <div class="list-group-item md-button clause"
                  v-for="element in clauseType"
                  :key="element.id">
                  {{ element.title }}
             </div>
           <!-- </transition-group> -->
         </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";

export default {
  props: {
    clauseType: {
      required: true,
      type: Array,
    },
    type: {
      required: true,
      type: String,
    }
  },
  components: {
    draggable
  },
};
</script>
<style scoped>
.dragArea {
  min-height: 50px;
  outline: 1px dashed;
}
</style>
