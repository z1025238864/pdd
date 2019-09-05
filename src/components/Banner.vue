<template>
  <div class="banner">
    <!--轮播图预览-->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in images" 
        :key="index" 
        @click="handlePreview(index)">
        <img :src="image" height="100%" width="100%" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { ImagePreview } from "vant";
export default {
  name: "banner",
  data() {
    return {
      images: [
        "//t00img.yangkeduo.com/goods/images/2019-08-26/5ded8abbbfaefb4609d0d6f4b7cb6912.png?imageMogr2/format/webp/quality/50",
        "//t16img.yangkeduo.com/pdd_oms/2019-08-23/e17e7430a7680b140bb5e2b58a5ecc4e.png?imageMogr2/format/webp/quality/50",
        "//t16img.yangkeduo.com/pdd_oms/2019-08-27/2c48a1ee8c6d6beb512a90aa34215daf.jpg?imageMogr2/format/webp/quality/50",
        "//t16img.yangkeduo.com/pdd_oms/2019-08-26/21d93f2f758ca6c2d00eecb0bed56589.jpg?imageMogr2/format/webp/quality/50",
        "//t00img.yangkeduo.com/goods/images/2019-08-26/b1c20bb8-8a37-4169-b89a-06e5f3cab00e.jpg?imageMogr2/format/webp/quality/50",
        "//t16img.yangkeduo.com/pdd_oms/2019-06-14/dafac20ea96c61fa9010fc14598a0eb1.jpeg?imageMogr2/format/webp/quality/50",
        "//t16img.yangkeduo.com/pdd_oms/2019-06-30/1b016f5ed5d943033d2f898a1e976bd8.jpg?imageMogr2/format/webp/quality/50",
        "//t00img.yangkeduo.com/goods/images/2019-08-26/b35828405351ebe9cfb211166af6efd9.jpeg?imageMogr2/format/webp/quality/50",
        "//t00img.yangkeduo.com/goods/images/2019-08-25/42ea7dd3817306bfafdaf9c437a08c92.jpeg?imageMogr2/format/webp/quality/50"
      ]
    };
  },
  methods: {
    handlePreview(index) {
      ImagePreview({
        images: this.images,
        startPosition: index,
        onClose() {}
      });
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.banner {
  height: 280px;
  overflow: hidden;
}
</style>
