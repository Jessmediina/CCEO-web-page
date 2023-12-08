<template>
	<component
		:is="layout" />
</template>

<script setup>
    import { computed, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import { useStore } from 'vuex';

    const route = useRoute();
    const store = useStore();

    const layout = computed(() => store.state.layout.current);

    watch(
        () => route.name,
        () => {
            if (route.name === 'Error404') {
                store.dispatch('layout/setErrorLayout');
            } else {
                store.dispatch('layout/setWebLayout');
            }
        }
    );
</script>
