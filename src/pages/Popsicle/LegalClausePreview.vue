<template>
  <div>
    <h4 style="font-weight: 600;">&#167; {{ type }}</h4>
    <p class="clause-text" v-bind:class="{ highlighted }" style="margin-top: -5px;">
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
    margin-top: 0;
}

.highlighted {
  /* background-color: lightgreen; */
}

span.caret {
  /* display: none; */
}
</style>
