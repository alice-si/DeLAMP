<template>
  <div>
    <!-- <h3>{{ type }} !-->
    <p class="clause-text" v-bind:class="{ highlighted }">
      <!-- {{ text || 'Empty' }} -->
      <VueTyper v-if="text" :typeDelay=20 :text="text" :repeat=0  />
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
    if (this.highlighted) {
      var typed = new Typed(".element", {
        strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
        typeSpeed: 40
      });
    }

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
  display: none;
}
</style>
