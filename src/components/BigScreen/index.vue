<template>
  <div>
    <img src="@/assets/map.png" alt="" @click="click" />
    <el-button class="clickBtn" style="display: none" @click="click">
      添加
    </el-button>
  </div>
</template>

<script>
import screenfull from "screenfull";

export default {
  name: "BigScreen",
  data() {
    return {
      isscreenfull: true,
    };
  },
  mounted() {
    this.init();
    setTimeout(() => {
      const btn = document.querySelector(".clickBtn"); // 模拟点击按钮
      if (btn.webkitRequestFullscreen) {
        console.log(btn);
        console.log("btn.requestFullscreen");
        btn.requestFullscreen();
      } else if (screen.mozRequestFullscreen) {
        screen.mozRequestFullscreen();
      } else if (screen.webkitRequestFullscreen) {
        screen.webkitRequestFullscreen();
      }
      // this.click(); // 自动触发全屏
    }, 100);
  },
  methods: {
    click() {
      if (!screenfull.enabled) {
        this.$message({
          message: "Your browser does not support fullscreen mode",
          type: "warning",
        });
        return false;
      }
      screenfull.toggle();
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen;
    },
    init() {
      if (screenfull.enabled) {
        screenfull.on("change", this.change);
      }
    },
    destroy() {
      if (screenfull.enabled) {
        screenfull.off("change", this.change);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>