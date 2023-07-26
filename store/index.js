export const state = () => ({
    popup: false,
    dark: false,
  })
  
  export const getters = {}
  
  export const mutations = {
    togglePopup(state) {
      state.popup = !state.popup
    },
  }
  
  export const actions = {
    togglePopup(context) {
      context.commit('togglePopup')
    },
  }
  