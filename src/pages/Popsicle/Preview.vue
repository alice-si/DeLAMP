<template>
  <div>
    <!-- <i class="material-icons" id="print-icon" v-on:click="print">print</i> -->
    <md-button
      class="add-condition md-fab" 
      style="background-color: #1CB8C4 !important;"
      v-on:click="print" id="print-button">
      <md-icon style="margin-left: -18px">print</md-icon>
    </md-button>

    <div id="preview-content">
      <h3>Legal contract</h3>
      <LegalClausePreview
        v-for="clauseType in clausesTypes"
        :key="clauseType"
        :type="rendered[clauseType].type"
        :template="rendered[clauseType].legalContent"
        :passedArguments="rendered[clauseType].arguments"
        :changedArguments="rendered[clauseType].changedArguments"
        :highlighted="rendered[clauseType].highlighted" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import {state} from '@/state';
import clausesConfig from '@/clausesConfig';
import LegalClausePreview from './LegalClausePreview';
import Mustache from 'mustache';
import printContract from '@/utils/printContract';

const INTERVAL_MS = 1000;


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
  let result = JSON.parse(JSON.stringify(clauseDetails));
  result.arguments = args || {};
  result.text = renderText(result.legalContent, result.arguments);
  return result;
}

function renderText(template, args) {
  return Mustache.render(template, args);
}

function clausesEqual(oldClause, newClause) {
  return JSON.stringify(oldClause.arguments) == JSON.stringify(newClause.arguments);
  // return oldClause.text != newClause.text;
}

// Update with highlighting
function updateClause(type, clause, data) {
  // clause.highlighted = true;
  // clause.highlightingStarted = Date.now();
  Vue.set(data.rendered, type, JSON.parse(JSON.stringify(clause)));
  // setTimeout(function () {
  //   if (Date.now() - data.rendered[type].highlightingStarted > HIGHLIGHTING_MS) {
  //     Vue.set(data.rendered[type], 'highlighted', false);
  //   }
  // }, HIGHLIGHTING_MS);
}

function getChangedArguments(oldClause, newClause) {
  let changed = [];
  for (let argName in oldClause.arguments) {
    if (oldClause.arguments[argName] != newClause.arguments[argName]) {
      changed.push(argName);
    }
  }
  return changed;
}

function watchChanges(data) {
  setInterval(function () {
    for (let selectedClause of state.selected) {
      let clauseDetails = getClauseDetails(selectedClause.id);
      let oldLegalClause = data.rendered[clauseDetails.type];
      let newLegalClause = createNewLegalClause(clauseDetails, selectedClause.arguments);
      if (!clausesEqual(oldLegalClause, newLegalClause)) {
        newLegalClause.changedArguments = getChangedArguments(oldLegalClause, newLegalClause);
        // newLegalClause.isNew = newLegalClause.id != oldLegalClause.id;
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
        id: '',
        arguments: {},
        changedArguments: [],
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
  /* text-align: center; */
  margin: 10px;
  margin-top: 103px;
  padding: 10px;
  overflow: scroll;
}

#print-button {
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
