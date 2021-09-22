<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" />
    <detail-swiper :top-images="topImages" />
    <!-- 测试数据在此 -->
    <!-- <div>{{ $store.state.cartList.length }}</div>
    <ul>
      <li v-for="item in $store.state.cartList">{{ item }}</li>
    </ul> -->
    <!-- 测试数据在此 -->
    <detail-base-info :goods="goods" />
    <detail-shop-info :shop="shop" />
    <detail-goods-info :detail-info="detailinfo" />
    <detail-param-info ref="param" :param-info="detailParam" />
    <detail-comment-info ref="comment" :comment-info="commentInfo" />
    <goods-list ref="recommend" :goods="recommend" />
    <detail-bottom-bar @addCart="addToCart" />
  </div>
</template>

<script>
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam,
} from "network/detail";
import DetailNavBar from "./childCamps/DetailNavBar";
import DetailSwiper from "./childCamps/DetailSwiper";
import DetailBaseInfo from "./childCamps/DetailBaseInfo";
import DetailShopInfo from "./childCamps/DetailShopInfo";
import DetailGoodsInfo from "./childCamps/DetailGoodsInfo";
import DetailParamInfo from "./childCamps/DetailParamInfo";
import DetailCommentInfo from "./childCamps/DetailCommentInfo";
import GoodsList from "components/content/goods/GoodsList";
import DetailBottomBar from "./childCamps/DetailBottomBar";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
  },

  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailinfo: {},
      detailParam: {},
      commentInfo: {},
      recommend: [],
      themeTopYs: [0, 1000, 2000, 3000],
      positiony: "",
    };
  },

  created() {
    window.scroll(0, 0);
    // 保存传入的iid
    this.iid = this.$route.params.iid;
    // 根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      console.log(res);
      this.topImages = res.result.itemInfo.topImages;
      // console.log(this.topImages);

      const data = res.result;
      // 传入实参数据
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      getRecommend().then((res) => {
        console.log(res);
        this.recommend = res.data.list;
      });

      this.shop = new Shop(data.shopInfo);

      this.detailinfo = data.detailInfo;

      this.detailParam = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
    });
  },
  methods: {
    titleClick(index) {
      console.log(index);
      // this.themeTopYs = [];
      // this.themeTopYs.push(0);
      // this.themeTopYs.push(this.$refs.param.$el.offsetTop);
      // this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      // window.scroll(0, this.themeTopYs, 200);
      // window.scroll(0, this.themeTopYs[index], 200);
    },
    // handleScroll() {
    //   console.log(111);
    //   for (const k in this.themeTopYs) {
    //     console.log(k);
    //   }
    // },
    addToCart() {
      console.log("---------------------");
      // 获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.newPrice;
      product.iid = this.iid;

      // 将商品加入购物车
      this.$store.commit("addCart", product);
    },
  },
};
</script>
<style scoped>
.detail-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  background-color: #fff;
}
</style>