<template>
  <div>

    <md-button
      v-if="canBeDeployed"
      class="add-condition md-fab" 
      style="background-color: #1CB8C4 !important;"
      v-on:click="deploy" id="deploy-button">
      <md-icon style="margin-left: -18px">cloud_upload</md-icon>
    </md-button>

    
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
      selected: state.selected,
    };
  },
  computed: {
    canBeDeployed() {
      return this.selected.length >= clausesConfig.types.length;
    }
  },
  methods: {
    deploy() {
      alert('Deploy will be implemented');
    }
  }
};
</script>

<style scoped>

#deploy-button {
  position: fixed;
  bottom: 20px;
  right: 70px;
  cursor: pointer;
}

</style>
