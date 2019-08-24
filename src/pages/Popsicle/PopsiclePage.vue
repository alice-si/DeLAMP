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

<style scoped>
#popsiclePage {
  min-height: 92vh;
}

/* #generate-button-container {
  position: fixed;
  bottom: 50px;
  right: 50px;
} */

</style>
