<template>
  <div class="swiper-container" ref="swiperContainer">
    <!-- 分类宫格 -->
    <div class="swiper-wrapper">
      <div class="swiper-slide" 
          v-for="(value,key,index) in cate" 
          :key="index">
        <van-grid 
          :column-num="4"
          square
          >
          <van-grid-item
            v-for="item in value"
            :key="item.optId"
            icon="photo-o"
            :text="item.optName"
            @click="handleRoute(item.optName)"
            
          />
        </van-grid>
      </div>
    </div>
    <!--滚动条-->
    <div class="swiper-scrollbar"></div>
  </div>
</template>
<script>
export default {
  name: "category",
  data() {
    return {};
  },
  computed: {
    cate() {
      const categroys = {};
      const page1 = [];
      const page2 = [];
      const data = this.categroy;
      const len = data.length;
      data.forEach((item, index) => {
        index > len / 2 ? page2.push(item) : page1.push(item);
      });
      categroys.page1 = page1;
      categroys.page2 = page2;
      return categroys;
    }
  },
  props: ["categroy"],
  methods: {
    handleRoute( keyword ) {
      this.$router.push({
        name: "goodslist",
        query:{
          keyword,
          
        }
      });
    }
  },
  mounted() {
    const ele = this.$refs.swiperContainer;

    const mySwiper = new Swiper(ele, {
      autoplay: false, //可选选项，自动滑动
      freeMode: true,
      scrollbar: {
        el: ".swiper-scrollbar"
      }
    });
    //获取滚动条的HTML元素，还可通过$el获取DOM7。
    mySwiper.scrollbar.$el.css("width", "100px");
    //获取滚动条的HTML元素，还可通过$el获取DOM7。
    mySwiper.scrollbar.$dragEl.css("background", "#ff6600");
    //更新滚动条
    mySwiper.scrollbar.updateSize();
  }
};
</script>

<style scoped lang="less">
.swiper-container {
  .swiper-scrollbar {
    left: calc(50% - 50px);
  }
  .van-card__content {
    justify-content: space-around;
  }
  .van-card:not(:first-child) {
    margin-top: 1px;
    
  }
}
</style>
