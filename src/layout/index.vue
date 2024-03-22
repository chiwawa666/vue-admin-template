<template>
  <div :class="classObj" class="app-wrapper">
    <div
      v-if="device === 'mobile' && sidebar.opened && !full.full"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <sidebar class="sidebar-container" v-if="!full.full" />
    <div class="main-container" :class="{ 'main-container--full': full.full }">
      <div :class="{ 'fixed-header': fixedHeader }" v-if="!full.full">
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from "./components";
// import BigScreen from "@/components/BigScreen";
import ResizeMixin from "./mixin/ResizeHandler";

export default {
  name: "Layout",
  components: {
    Navbar,
    Sidebar,
    AppMain,
    // BigScreen,
  },
  data() {
    return {
      showGlobalComponent: false,
      // full: false,
    };
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    full() {
      return this.$store.state.full;
    },
    device() {
      return this.$store.state.app.device;
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile",
      };
    },
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.main-container {
  // 默认样式
  margin-left: 210px;
  // overflow: auto; // 或其他默认 overflow 值
  // transition: margin-left 0.3s ease; // 添加过渡效果（可选）
}

.main-container--full {
  // 当 full.full 为真时的样式
  margin-left: 0 !important;
  overflow: hidden !important;
}
#app {
  overflow: hidden;
}
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
/* WebKit (Chrome, Safari, Opera) */
::-webkit-scrollbar {
  width: 0;
}

/* Firefox */
/* 需要使用 !important 来覆盖默认样式 */
html {
  scrollbar-width: none !important;
}

/* Internet Explorer 10+ */
/* 需要使用 -ms- 前缀 */
@-ms-viewport {
  width: auto !important;
}
</style>
