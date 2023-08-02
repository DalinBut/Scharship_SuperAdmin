// store/auth.js

export const state = () => ({
    loggedIn: false,
  });
  
  export const mutations = {
    setLoggedIn(state, value) {
      state.loggedIn = value;
    },
  };
  
  export const actions = {
    login({ commit }) {
      // Perform login logic here
      // Example: Update the loggedIn state after successful login
      commit('setLoggedIn', true);
    },
    
    logout({ commit }) {
      // Perform logout logic here
      // Example: Update the loggedIn state after logout
      commit('setLoggedIn', false);
    },
  };
  