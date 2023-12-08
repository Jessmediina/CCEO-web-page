import WebLayout from '/src/layouts/WebLayout.vue';
import ErrorLayout from '/src/layouts/ErrorLayout.vue';
import {shallowRef} from "vue";

const webLayout = shallowRef(WebLayout);
const errorLayout = shallowRef(ErrorLayout);

export default {
    namespaced: true,
    modules: {},
    state: {
        current: webLayout,
    },
    actions: {
        setWebLayout(store) {
            store.state.current = webLayout;
        },
        setErrorLayout(store) {
            store.state.current = errorLayout;
        },
    },
};
