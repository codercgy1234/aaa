<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tab-bar class="main-tab-bar" />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar.vue";
import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "app",
  components: {
    MainTabBar,
  },
  // created() {
  //   this.getHomeMultidata();
  //   this.getHomeMultidata();
  // },
  // methods: {
  //   getHomeMultidata() {
  //     getHomeMultidata().then((res) => {
  //       console.log(res);
  //       this.banners = res.data.banner.list;
  //       this.recommends = res.data.recommend.list;
  //     });
  //   },
  // },
};
</script>

<style>
@import "assets/css/base.css";
/* #app {
  position: relative;
} */
/* .main-tab-bar {
  width: 375px;
} */
</style>
