import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            theme: 'light'
        }
    },
    mutations: {
        toggleTheme(state, value) {
            state.theme = value
        }
    }
});
