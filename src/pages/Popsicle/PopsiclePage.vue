<template>
  <div class="md-layout md-size-100"
       id="popsiclePage"
       style="border: 1px solid blue">
    <div class="md-layout-item md-size-50" style="border: 1px solid red;">
      <Editor id="editor" />
    </div>

    <div style="border: 1px solid red;">
      <Preview id="preview" />
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

#generate-button-container {
  position: fixed;
  bottom: 50px;
  right: 50px;
}

</style>
