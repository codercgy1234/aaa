<template>
  <div>
    <grid-view
      :cols="3"
      :lineSpace="10"
      :v-margin="10"
      v-if="subcategories.list"
    >
      <div class="item" v-for="(item, index) in subcategories.list">
        <a :href="item.link">
          <img class="item-img" :src="item.image" alt="" />
          <div class="item-text">{{ item.title }}</div>
        </a>
      </div>
    </grid-view>
  </div>
</template>



<script>
import GridView from "components/common/gridview/GridView.vue";
export default {
  components: { GridView },
  name: "TabContentCategory",
  props: {
    subcategories: {
      type: Object,
      default() {
        return [];
      },
    },
  },
};
</script>



<style scoped>
.panel img {
  width: 100%;
}

.item {
  text-align: center;
  font-size: 12px;
}

.item-img {
  width: 50px;
}

.item-text {
  margin-top: 15px;
}
</style>