<template>
  <div>
    <button v-on:click="print">Print</button>

    <div id="preview-content">
      <h3>Legal contract</h3>
      <LegalClausePreview
        v-for="clauseType in clausesTypes"
        :key="clauseType"
        :type="rendered[clauseType].type"
        :text="rendered[clauseType].text"
        :highlighted="rendered[clauseType].highlighted" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import {state} from '@/state';
import clausesConfig from '@/clausesConfig';
import LegalClausePreview from './LegalClausePreview';
import { setInterval } from 'timers';
import Mustache from 'mustache';
import printContract from '@/utils/printContract';

const INTERVAL_MS = 1000;
const HIGHLIGHTING_MS = 1000;

function getClauseDetails(id) {
  for (let clauseType of clausesConfig.types) {
    let details = clausesConfig.clauses[clauseType].find(clause => clause.id == id);
    if (details) {
      details.type = clauseType;
      return details;
    }
  }
}

function createNewLegalClause(clauseDetails, args) {
  let result = Object.assign({}, clauseDetails);
  result.args = args;
  result.text = renderText(result.legalContent, result.args);
  return result;
}

function renderText(template, args) {
  return Mustache.render(template, args);
}

function clausesEqual(oldClause, newClause) {
  return oldClause.text === newClause.text;
}

// Update with highlighting
function updateClause(type, clause, data) {
  clause.highlighted = true;
  clause.highlightingStarted = Date.now();
  Vue.set(data.rendered, type, clause);
  setTimeout(function () {
    if (Date.now() - data.rendered[type].highlightingStarted > HIGHLIGHTING_MS) {
      Vue.set(data.rendered[type], 'highlighted', false);
    }
  }, HIGHLIGHTING_MS);
}

function watchChanges(data) {
  setInterval(function () {
    for (let selectedClause of state.selected) {
      let clauseDetails = getClauseDetails(selectedClause.id);
      let oldLegalClause = data.rendered[clauseDetails.type];
      let newLegalClause = createNewLegalClause(clauseDetails, selectedClause.args);
      if (!clausesEqual(oldLegalClause, newLegalClause)) {
        updateClause(clauseDetails.type, newLegalClause, data);
      }
    }
  }, INTERVAL_MS);
};

export default {
  name: "preview",
  props: {
  },
  components: {
    LegalClausePreview
  },
  methods: {
    print() {
      printContract.print();
    }
  },
  data() {
    let rendered = {};
    for (let type of clausesConfig.types) {
      rendered[type] = {
        text: '',
        type,
        highlighted: false,
      };
    }

    let result = {
      selected: state.selected,
      clausesTypes: clausesConfig.types,
      rendered,
    };

    watchChanges(result);

    return result;
  }
};
</script>

<style scoped>
h3 {
  text-align: center;
  margin-bottom: 20px;
}

#preview-content {
  /* width: 80%; */
  width: 400px;
  height: 600px;
  background-color: white;
  box-shadow: inset 0 0 1px grey;
  text-align: center;
  margin: 20px;
  padding: 10px;
}
</style>
