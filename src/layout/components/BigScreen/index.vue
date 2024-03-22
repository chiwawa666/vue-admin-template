<template>
  <div><img src="@/assets/map.png" alt="" @click="click" /></div>
</template>

<script>
import screenfull from "screenfull";

export default {
  name: "BigScreen",
  data() {
    return {
      isscreenfull: true,
      // screenfull: screenfull
    };
  },
  created() {
    // console.log("asdasd sad");
  },
  mounted() {
    this.init();
  },
  methods: {
    click() {
      if (!screenfull.enabled) {
        this.$message({
          message: "浏览器不支持",
          type: "warning",
        });
        return false;
      }
      screenfull.toggle();
    },
    init() {
      if (screenfull.enabled) {
        // screenfull.on("change", this.change);
        screenfull.toggle();
        this.click();
      }
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen;
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  overflow: hidden;
}
</style>
