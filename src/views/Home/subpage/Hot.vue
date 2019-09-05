<template>
  <div class="hot">
    <!--轮播图预览-->
    <div class="banner">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(image, index) in images" :key="index" @click="handlePreview(index)">
          <img :src="image" height="100%" width="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!--分类宫格图-->
    <div class="swiper-container" ref="swiperContainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(ite,idex) in categorys" :key="idex">
          <van-grid :column-num="4">
            <van-grid-item 
                v-for="item in ite" 
                :key="item.id" 
                :icon="item.img" 
                :text="item.title"
                @click="handleRoute" />
          </van-grid>
        </div>
        <!--滚动条-->
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
    <!--热门商品列表-->
    <div class="hotlist">
      <van-card
        v-for="(item,index) in 5"
        :key="index"
        num="2"
        price="2.00"
        tag="标签"
        origin-price="10.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      />
    </div>
  </div>
</template>
<script>
import { ImagePreview } from "vant";
export default {
  name: "hot",
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
      ],
      categorys: {
        page1: [
          {
            id: 1,
            title: "限时秒杀",
            linkTo: "",
            img:
              "//t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50"
          },
          {
            id: 2,
            title: "断码清仓",
            linkTo: "",
            img:
              "//t00img.yangkeduo.com/goods/images/2018-12-22/b9851773573d1d682aa46d896de7f4fa.png?imageMogr2/format/webp/quality/50"
          },
          {
            id: 3,
            title: "品牌馆",
            linkTo: "",
            img:
              "//t00img.yangkeduo.com/goods/images/2018-08-29/119a4937b493cc0fcc968a4545657922.png?imageMogr2/format/webp/quality/50"
          },
          {
            id: 4,
            title: "多多果园",
            linkTo: "",
            img:
              "//t00img.yangkeduo.com/goods/images/2019-01-30/5667b3f1eaa8bb379303afb3934d1bc8.png?imageMogr2/format/webp/quality/50"
          },
          {
            id: 5,
            title: "9块9特卖",
            linkTo: "",
            img:
              "//t00img.yangkeduo.com/goods/images/2019-08-08/e8cb0bbd39355543de0825c9590f74ca.gif"
          },
          {
            id: 6,
            title: "助力享免单",
            linkTo: "",
            img:
              "//t00img.yangkeduo.com/goods/images/2019-02-15/b329c4673337e18030f1211df38a543b.png?imageMogr2/format/webp/quality/50"
          },
          {
            id: 7,
            title: "天天领现金",
            linkTo: "",
            img:
              "//t10img.yangkeduo.com/images/2018-05-16/712fc1e7f4f7b0572257ef162b5185a9.png?imageMogr2/format/webp/quality/50"
          },
          {
            id: 8,
            title: "1分抽大奖",
            linkTo: "",
            img:
              "//t05img.yangkeduo.com/images/2018-05-04/c71c9acd8b48203a704f6c0951caddc0.png?imageMogr2/format/webp/quality/50"
          }
        ],
        page2: [
          {
            id: 1,
            title: "省钱月卡",
            linkTo: "",
            img:
              "//t00img.yangkeduo.com/goods/images/2019-01-27/76826abcd09fe76657f07a901db83698.png?imageMogr2/format/webp/quality/50"
          },
          {
            id: 2,
            title: "充值中心",
            linkTo: "",
            img:
              "//t05img.yangkeduo.com/images/2018-05-16/801ae189938526cdaf40935d07034c5e.png?imageMogr2/format/webp/quality/50"
          },
          {
            id: 3,
            title: "百亿补贴",
            linkTo: "",
            img:
              "//t00img.yangkeduo.com/goods/images/2019-06-13/d3fd3a5b187bca651f8e65ae8a25c296.png?imageMogr2/format/webp/quality/50"
          },
          {
            id: 4,
            title: "现金签到",
            linkTo: "",
            img:
              "//t01img.yangkeduo.com/images/2018-05-16/c2ba677bcd16ecad6c335e5e04a1cf1e.png?imageMogr2/format/webp/quality/50"
          },
          {
            id: 5,
            title: "金猪赚大钱",
            linkTo: "",
            img:
              "//t00img.yangkeduo.com/goods/images/2019-02-05/1351e256a0319a6885761b937d06d581.png?imageMogr2/format/webp/quality/50"
          },
          {
            id: 6,
            title: "电器城",
            linkTo: "",
            img:
              "//t00img.yangkeduo.com/goods/images/2018-10-28/27e48ad452991eeb8fd0559a0d3b60ff.png?imageMogr2/format/webp/quality/50"
          },
          {
            id: 7,
            title: "爱逛街",
            linkTo: "",
            img:
              "//t03img.yangkeduo.com/images/2018-05-16/a666ac01e718dd06231a722baa6fa935.png?imageMogr2/format/webp/quality/50"
          },
          {
            id: 8,
            title: "每日好店",
            linkTo: "",
            img:
              "//t00img.yangkeduo.com/goods/images/2019-02-15/1ddd6e21a8281e794dec6ef736867290.png?imageMogr2/format/webp/quality/50"
          }
        ]
      }
    };
  },
  methods: {
    handlePreview(index) {
      ImagePreview({
        images: this.images,
        startPosition: index,
        onClose() {}
      });
    },
    handleRoute(){
      this.$router.push({
        name:"goodsBuy"
      })
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
  },
  components: {}
};
</script>

<style scoped lang="less">
.hot {
  .banner {
    height: 280px;
    overflow: hidden;
  }
  .swiper-scrollbar {
    left: calc(50% - 50px);
  }
  .van-card__content{
    justify-content: space-around;
  }
  .van-card:not(:first-child) {
    margin-top: 1px;
}
}
</style>
