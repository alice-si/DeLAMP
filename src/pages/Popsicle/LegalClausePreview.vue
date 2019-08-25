<template>
  <div>
    <h4 style="font-weight: 600;">&#167; {{ type }}</h4>
    <p class="clause-text" v-html="getContentHtml" style="margin-top: -5px;">
      <!-- {{ text || 'Empty' }} -->
      <!-- <VueTyper v-if="text" :typeDelay="0" :pre-type-delay="1" :text="text" :repeat="0" caret-animation='blink'  /> -->
      <!-- {{ JSON.stringify(template) }}
      {{ JSON.stringify(passedArguments) }} -->
    </p>
  </div>

</template>

<script>
import { VueTyper } from 'vue-typer'
import { setTimeout } from 'timers';

const HIGHLIGHTING_MS = 3000;

function replace(str, oldVal, newVal) {
  return str.split(oldVal).join(newVal);
}

// function setTimerToDisableHighlighting(elemHtml) {
  // TODO
// }

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
        if (updated) {
          // setTimerToDisableHighlighting(passedArgumentVal);
        }
        result = replace(result, '{{ ' + passedArgumentName + ' }}', passedArgumentVal);
        result = replace(result, '{{' + passedArgumentName + '}}', passedArgumentVal);
        result = replace(result, '{{ ' + passedArgumentName + '}}', passedArgumentVal);
        result = replace(result, '{{' + passedArgumentName + ' }}', passedArgumentVal);
      }
      
      // setTimeout(function() {
      //   var elems = document.querySelectorAll(".highlighted");

      //   [].forEach.call(elems, function(el) {
      //       el.classList.remove("highlighted");
      //   });
      // }, HIGHLIGHTING_MS);


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
    margin-top: 0;
}

</style>
