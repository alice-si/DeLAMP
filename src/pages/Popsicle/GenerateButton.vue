<template>
  <div>
    <button disabled="disabled" v-if="!canBeDeployed">
      Can't be deployed yet
    </button>

    <button v-if="canBeDeployed" id="generate-button">
      Deploy and print
    </button>
  </div>
</template>
<script>

import {state} from '@/state';
import clausesConfig from '@/clausesConfig';

export default {
  name: "generate-button",
  props: {
  },
  data() {
    return {
      state,
    };
  },
  computed: {
    canBeDeployed() {
      this.state.selected.length == clausesConfig.types.length;
    }
  },
  methods: {
  }
};
</script>

<style scoped>
#generate-button {
  background-color: lightgreen;
  cursor: pointer;
}

button {
  padding: 10px;
  border-radius: 5px;
  font-size: large;
}
</style>
