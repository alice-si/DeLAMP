<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--1-col">
      <Editor id="editor" />
    </div>

    <div class="mdl-cell mdl-cell--1-col">
      <Preview id="preview" />
    </div>
    
    <div id="generate-button-container">
      <GenerateButton />
    </div>
  </div>
</template>

<script>
import Editor from '@/components/Popsicle/Editor';
import Preview from '@/components/Popsicle/Preview';
import GenerateButton from '@/components/Popsicle/GenerateButton';

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
