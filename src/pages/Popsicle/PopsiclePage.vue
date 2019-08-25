<template>
  <div class="md-layout md-size-100"
       id="popsiclePage">
    <div class="md-layout-item md-size-60">
      <Editor id="editor" />
    </div>

    <div>
      <Preview id="preview" class="md-layout-item md-size-35" />
    </div>

    <div id="generate-button-container">
      <GenerateButton />
    </div>
  </div>
</template>

<script>
import Editor from './Editor';
import Preview from './Preview';
import GenerateButton from './GenerateButton';

export default {
  order: 5,
  components: {
    Editor,
    Preview,
    GenerateButton,
  },
  data() {
    return {};
  },
  computed: {
  },
  methods: {
  }
};
</script>

<style>
#popsiclePage {
  min-height: 92vh;
}

.highlighted {
  
  /* font-size: 16px !important; */
  /* transition: all 1s ease-in-out;
  transition-property: all;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s; */
  animation: blinker 2s linear normal;
}

@keyframes blinker {  
  50% { background-color: yellow; }
}

/* #generate-button-container {
  position: fixed;
  bottom: 50px;
  right: 50px;
} */

</style>
