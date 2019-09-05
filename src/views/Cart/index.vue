<template>
  <div class="cart">
    <NavBarPublic keyword="购物车" />
    <div>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      >
        <div slot="tags">
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </div>
        <div slot="footer">
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </div>
      </van-card>
      <van-submit-bar
        disabled
        :price="3050"
        button-text="提交订单"
        tip="有营业执照才能申请微信支付宝支付接口"
        tip-icon="info-o"
        
/>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "cart",
  computed: {
    ...mapGetters(["getGoodsData"])
  },
  created() {
    console.log(this.getGoodsData);
    let shop = this.getGoodsData
    let idArr = Object.keys(shop)
    console.log(idArr);
    idArr.forEach((item,index)=>{
      this.Axios.get("http://pddapi.h5sm.com/index/index/getgoodsinfo",{
        itemid:item
      }).then(res=>{
        console.log(res)
        })
    })
    
  },
  data() {
    return {
      shopIdlist:[]
    };
  },

  components: {}
};
</script>

<style scoped lang="less">
</style>
