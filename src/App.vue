<template>
  <div id="app">
    <a-layout>
      <a-layout-header>
        <m-header />
      </a-layout-header>
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import Header from "./components/Header"
export default {
  data() {
    return {};
  },
  components: {
    [Header.name]:Header
  },
  mounted() {
  },
};
</script>

<style scoped>
#app {
  width: 100%;
  min-height: 100%;
}
.ant-layout{
  background: #fff;
}
.ant-layout-content{
  height: calc(100vh - 64px);
}

</style>
