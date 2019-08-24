<template>
  <div>

    <md-button

      class="add-condition md-fab"
      style="background-color: #1CB8C4 !important;"
      v-on:click="sign" id="deploy-button">
      <md-icon style="margin-left: -18px">cloud_upload</md-icon>
    </md-button>

    <md-drawer class="md-right" :md-active.sync="showSidepanel">
      <div>
        <form novalidate class="md-layout">
          <md-card class="md-layout-item ">
            <md-card-header style="background-color: rgb(80, 174, 84);">
              <h3 class="md-title" style="color: #fff;">Sign the document to be legally binding</h3>
            </md-card-header>

            <md-card-content>
              <VueSignaturePad
                      id="signature"
                      width="100%"
                      height="400px"
                      ref="signaturePad"
              />
            </md-card-content>

            <md-card-actions>
              <md-button class="md-primary"
                         :disabled="sending"
                         @click="deploy()">Sign</md-button>
            </md-card-actions>
          </md-card>

          <md-snackbar :md-active.sync="contractDeployed">The contract has been deployed!</md-snackbar>
        </form>
      </div>
    </md-drawer>


  </div>
</template>
<script>

import {state} from '@/state';
import clausesConfig from '@/clausesConfig';
import {contracts} from "@/utils/contracts.js";

export default {
  name: "generate-button",
  props: {
  },
  data() {
    return {
      selected: state.selected,
      showSidepanel: false,
      contractDeployed: false,
      sending: false
    };
  },
  computed: {
    canBeDeployed() {
      return this.selected.length >= clausesConfig.types.length;
    }
  },
  methods: {
    sign() {
      this.showSidepanel = true;
    },
    async deploy() {
      console.log('Deploying contract');
      this.sending = true;
      await contracts.deployLegalContract(this.selected[0].arguments);
      this.contractDeployed = true;
      this.showSidepanel = false;
      this.sending = false;
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

#signature {
  border: double 3px transparent;
  border-radius: 5px;
  background-image: linear-gradient(white, white),
  radial-gradient(circle at top left, #4bc5e8, #9f6274);
  background-origin: border-box;
  background-clip: content-box, border-box;
}

</style>
