import state from './core.state'
import * as getters from './core.getters'
import * as mutations from './core.mutations'
import * as actions from './core.actions'

const coreModule = {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}

export default coreModule
