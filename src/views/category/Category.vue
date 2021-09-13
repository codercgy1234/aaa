<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="center">分类</div>
    </nav-bar>
    <div class="content">
      <tab-menu :categoriess="categories" @selectItemm="selectItem" />
      <tab-content-category :subcategories="showSubcategory" />
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { getCategory, getSubcategory } from "network/category";
import TabMenu from "./childComps/TabMenu.vue";
import TabContentCategory from "./childComps/TabContentCategory.vue";

export default {
  name: "Category",
  components: {
    NavBar,
    TabMenu,
    TabContentCategory,
  },
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1,
    };
  },
  created() {
    this._getCategory();
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) {
        return {};
      }
      return this.categoryData[this.currentIndex].subcategories;
    },
  },
  methods: {
    _getCategory() {
      getCategory().then((res) => {
        // console.log(res);
        // 获取保存分类数据
        this.categories = res.data.category.list;
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
          };
        }
        this._getSubcategories(0);
        console.log(this.categories);
      });
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then((res) => {
        this.categoryData[index].subcategories = res.data;
        this.categoryData = { ...this.categoryData };
        this._getCategoryDetail(POP);
        this._getCategoryDetail(SELL);
        this._getCategoryDetail(NEW);
      });
    },
    selectItem(index) {
      this._getSubcategories(index);
    },
  },
};
</script>

<style scoped>
.nav-bar {
  /* background-color: var(--color-tint); */
  background-color: skyblue;
}
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;

  display: flex;
}
</style>
