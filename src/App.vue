<template>
  <div id="app" :style="{ overflow: full.full ? 'hidden' : 'auto' }">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    full() {
      return this.$store.state.full;
    },
  },
};
</script>
