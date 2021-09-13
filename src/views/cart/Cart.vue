<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <cart-list class="cart-list"></cart-list>
    <bottom-bar></bottom-bar>
    <!-- <h2>{{ test }}</h2> -->
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import Scroll from "../../components/common/scroll/Scroll.vue";
import BottomBar from "./childComps/BottomBar.vue";
export default {
  name: "Cart",
  // data() {
  //   return {
  //     test: "sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  //   };
  // },
  components: {
    NavBar,
    CartList,
    Scroll,
    BottomBar,
  },
  computed: {
    cartLength() {
      return this.$store.state.cartList.length;
    },
  },
};
</script>

<style scoped>
.nav-bar {
  /* background-color: var(--color-tint); */
  background-color: skyblue;
  color: #fff;
  font-weight: 700;
}
#cart {
  /* position: absolute; */
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
/* .cart-list {
  position: absolute;
  top: 44px;
  bottom: 49px;
  width: 100%;
} */
</style>
