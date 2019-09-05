<template>
  <div id="content1">
      <!-- 轮播图 -->
      <Banner v-if="showbanner === 0"/>
      <!-- 分类 -->
      <Categroy :categroy="categroy" />
      <!-- 商品列表 -->
      <GoodsList :keyword="goodsList" />
  </div>
</template>
<script>
export default {
  name: "content1",
  props:['showbanner','categroy','goodsList'],
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
</style>
