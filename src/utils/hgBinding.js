import Vue from 'vue';
import Blockchain from "@/Blockchain";
import State from '@/state';

let hgBinding = {
  getContract() {
    let hg = Blockchain.getHGContract();
    Vue.set(State, 'hgContract', hg);
  },
  async getHGRegistry() {
    let hgRegistry = await State.hgContract.createRegistry();
    Vue.set(State, 'hgRegistry', hgRegistry);
  },
  async getConditions() {
    await State.hgRegistry.getConditions();
    console.log("got conditions!");
    console.log(State.hgRegistry);
    Vue.set(State, 'conditions', State.hgRegistry.conditions);
  },
  async addCondition(condition) {
    if(State.hgContract && condition) {
      let hg = State.hgContract;
      await hg.prepareCondition(condition.question, condition.oracle, condition.outcomesSlotsCount);
      console.log("made new condition");
      await this.getConditions();
      console.log(State.conditions);
    }
  }
}

export default hgBinding;
