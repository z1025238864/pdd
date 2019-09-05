<template>
  <div class="navbar">
    <van-nav-bar
      :title="getKeyword"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>
<script>
export default {
  name: "navbar",
  props:['keyword'],
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
   
  },
   computed: {
    getKeyword() {
      if (!this.keyword) {
        return "推荐";
      }else{
        return this.keyword
      }
    }
  },
};
</script>

<style scoped>
</style>
