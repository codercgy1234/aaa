<template>
  <div class="goods-item" @click="itemClick">
    <!-- <img :src="goodsItems.show.img" alt="" /> -->
    <!-- 因为goodslist里的数据是show里的img(res.data.list.show.img)，而recommend的数据是image（ res.data.recommend.list里的是image），所以用计算属性来保存 -->
    <img :src="showImage" alt="" />
    <div class="goods-info">
      <p>{{ goodsItems.title }}</p>
      <span class="price">{{ goodsItems.price }}</span>
      <span class="collect">{{ goodsItems.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItems: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImage() {
      // 因为后台接口的问题，一个是img一个是image
      return this.goodsItems.image || this.goodsItems.show.img;
    },
  },
  methods: {
    itemClick() {
      console.log(this.goodsItems.iid);
      this.$router.push("/detail/" + this.goodsItems.iid);
    },
  },
};
</script>
<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;

  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>