<template>
  <div class="goodsBuy">
    <NavBarPublic keyword="商品详情"/>
    <div class="pic">
      <!--轮播图预览-->
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in banner" :key="index" @click="handlePreview(index)">
          <img :src="image" height="100%" width="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="info">
      <p class="price-group">
        <span>￥</span>
        <span>{{price.maxNormalPrice}}</span>
      </p>
      <p class="title">{{price.goodsName}}</p>
      <van-divider />
      <p class="ems">
        <span>极速退款 .</span>
        <span>全场包邮 .</span>
        <span>七天退换 .</span>
        <span>48小时发货</span>
      </p>
      <div class="shoppingcart">
        <span class="text">购买数量</span>
        <p class="num">
          <van-button type="default" @click="reduceGoods">-</van-button>
          <van-button type="default">{{num}}</van-button>
          <van-button type="default" @click="addGoods">+</van-button>
        </p>
      </div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="主页" @click="onClickIcon" />
        <van-goods-action-button type="warning" text="加入购物车" @click="handleAddToCart" />
        <van-goods-action-button type="danger" text="立即购买" @click="handleToChart" />
      </van-goods-action>
    </div>
  </div>
</template>
<script>
import { ImagePreview } from "vant";
import {mapMutations} from 'vuex'
export default {
  name: "goodsBuy",

  activated() {
    this.num = 0
    this.id=0
    const itemid = this.$route.query.itemid;
    this.getInfo(itemid);
  },
  data() {
    return {
      banner: [],
      item: {},
      seller: {},
      detail: [],
      price: {},
      num:0,
      id:0,
    };
  },
  methods: {
    getInfo(itemid) {
      this.id = itemid
      
      this.Axios.get(
        "http://pddapi.h5sm.com/index/index/getgoodsinfo?itemid=" + itemid
      ).then(res => {
        const item = res.data.data.item;
        const seller = res.data.data.seller;
        (this.item = item), (this.seller = seller);
        this.detil = item.detail;
        this.banner = item.banner;
        this.price = {
          goodsId: item.goodsId,
          goodsName: item.goodsName,
          maxNormalPrice: item.maxNormalPrice,
          salesTip: item.salesTip
        };
      });
    },
    ...mapMutations(['addToCart']),
    handleAddToCart(){
      const {num,id} = this
      num && this.addToCart({
        num,id
      })
    },
    reduceGoods(){
      let num = this.num
      num = num?num-1:num
      num--
      this.num = num
    },
    addGoods(){
     let num = this.num
      num++
       this.num = num
      
    },
    onClickIcon() {
      this.$router.push({
        name: "home"
      });
    },
    handleToChart() {
      this.$router.push({
        name: "cart"
      });
    },
    handlePreview(index) {
      ImagePreview({
        images: this.banner,
        startPosition: index,
        onClose() {}
      });
    }
  },

  components: {}
};
</script>

<style scoped lang="less">
.goodsBuy {
  
  .pic {
    width: 750px;
    height: 750px;
  }
  .info {
    padding: 0 20px;
    .price-group {
      font-weight: bold;
      font-size: 24px;
      color: #f60;
      margin-bottom: 25px;
      span:last-child {
        font-size: 45px;
      }
    }
    .title {
      font-size: 30px;
      font-weight: bold;
    }
    .ems {
      font-size: 22px;
      color: #58595b;
    }
    .shoppingcart {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .text {
        font-size: 30px;
      }
    }
  }
  .button {
    position: absolute;
    // display: inline-block;
    top: 5px;
    left: 5px;
    width: 60px;
    height: 60px;
    line-height: 50px;
    text-align: center;
    color: white;
    border-radius: 50%;
    background-color: #58595b;
  }
}
</style>
