<template>
  <div>
    <!-- <h3>{{ type }} !-->
    <p class="clause-text" v-html="getContentHtml">
      <!-- {{ text || 'Empty' }} -->
      <!-- <VueTyper v-if="text" :typeDelay="0" :pre-type-delay="1" :text="text" :repeat="0" caret-animation='blink'  /> -->
      <!-- {{ JSON.stringify(template) }}
      {{ JSON.stringify(passedArguments) }} -->
    </p>
  </div>
  
</template>

<script>
import { VueTyper } from 'vue-typer'

function replace(str, oldVal, newVal) {
  return str.split(oldVal).join(newVal);
}

export default {
  name: "LegalClausePreview",
  components: {
    VueTyper,
  },
  props: {
    type: String,
    template: String,
    passedArguments: Object,
    // highlighted: Boolean,
    changedArguments: Array,
  },
  computed: {
    getContentHtml() {
      let result = this.template;
      for (let passedArgumentName in this.passedArguments) {
        let updated = this.oldArguments[passedArgumentName] == this.passedArguments[passedArgumentName];
        let className = this.changedArguments.includes(passedArgumentName) ? 'highlighted' : '';
        let passedArgumentVal = `<span class="${className}">${this.passedArguments[passedArgumentName]}</span>`;
        result = replace(result, '{{ ' + passedArgumentName + ' }}', passedArgumentVal);
      }
      return result;
    }
  },
  data() {
    return {
      oldArguments: {}
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

</style>
