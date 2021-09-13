<template>
  <div class="back-top" @click="getTop()">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>
<script>
export default {
  name: "backTop",
  methods: {
    getTop() {
      window.scroll(0, 0);
    },
  },
};
</script>
<style scoped>
.back-top {
  position: fixed;
  right: 10px;
  bottom: 50px;
}
.back-top img {
  width: 43px;
  height: 43px;
}
</style>