<template>
  <div>
    <!-- <h3>{{ type }} !-->
    <p class="clause-text" v-bind:class="{ highlighted }">
      <!-- {{ text || 'Empty' }} -->
      <VueTyper v-if="text" :typeDelay="0" :pre-type-delay="1" :text="text" :repeat="0" caret-animation='blink'  />
    </p>
  </div>
  
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
  name: "LegalClausePreview",
  components: {
    VueTyper,
  },
  props: {
    type: '',
    text: '',
    highlighted: false,
  },
  data() {

    return {
    };
  },
};
</script>

<style scoped>
/* Uncomment css to enable highlighting */
.clause-text {
    /* transition: all 1s ease-out;
    transition-property: all;
    transition-duration: 1s;
    transition-timing-function: ease-out;
    transition-delay: 0s; */
}

.highlighted {
  /* background-color: lightgreen; */
}

span.caret {
  /* display: none; */
}
</style>
