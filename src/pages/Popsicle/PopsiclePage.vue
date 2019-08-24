<template>
  <div class="md-layout md-size-100" style="border: 1px solid blue">
    <div style="border: 1px solid red;">
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
#generate-button-container {
  position: fixed;
  bottom: 50px;
  right: 50px;
}

</style>
