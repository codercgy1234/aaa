<template>
  <div>
    <div class="shop-item" v-for="item in cartList">
      <div class="item-img">
        <img :src="item.image" />
      </div>

      <div class="item-info">
        <div class="item-title">{{ item.title }}</div>
        <div class="item-desc">商品描述：{{ item.desc }}</div>
        <div class="info-bottom">
          <div class="item-price left">{{ item.price }}</div>
          <div class="item-count right">x{{ item.count }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CartList",
  computed: {
    cartList() {
      return this.$store.state.cartList;
    },
  },
};
</script>
<style scoped>
.shop-item {
  display: flex;
  width: 100%;
  /* font-size: 0; */
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-img {
  padding: 5px;
}
.item-img img {
  width: 80px;
  height: 150px;
  display: block;
  border-radius: 5px;
}

.item-title,
.item-desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-info {
  position: relative;
  overflow: hidden;
}
.info-bottom {
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  margin-left: 20px;
}
/* .info-bottom .item-price {
  color: orangered;
} */
</style>