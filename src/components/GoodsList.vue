<template>
  <div class="goodslist">
    <NavBarPublic v-if="getNavBar"/>
    <ul v-if="list.length">
      <li v-for="item in list" :key="item.goodsId" @click="handleInfo(item.goods_id)">
        <div class="pic">
          <img v-lazy="item.thumb_url" width="100%" height="100%" alt />
        </div>
        <p class="title">{{item.short_name}}</p>
        <div class="info">
          <p>
            <span class="symbol">￥</span>
            <span class="price">{{item.normal_price}}</span>
          </p>
          <span class="pay">点击购买</span>
        </div>
      </li>

      <li></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "goodsList",
  props: ["keyword"],
  methods: {
    getList(keyword, page) {
      this.Axios.get(
        "http://pddapi.h5sm.com/index/index/getgoodssearch?keyword=" +
          keyword +
          "&page=" +
          page
      ).then(res => (this.list = res.data.data));
    },
    handleInfo(itemid) {
      this.$router.push({
        name: "goodsBuy",
        query: {
          itemid
        }
      });
    }
  },
  computed: {
    getNavBar(){
       const path = this.$route.path.includes("home")
       if(path) return false
       return true
    }
  },

  created() {
    const keyword = this.$route.query.keyword || this.keyword || "笔记本电脑";
    const page = this.$route.query.page;
    this.getList(keyword, 1);
  },
  data() {
    return {
      img: [],
      list: []
    };
  },
  components: {}
};
</script>

<style scoped lang="less">
.goodslist {
  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    li {
      width: 374px;
      height: 500px;
      .pic {
        height: 370px;
      }
      .title {
        height: 54px;
        line-height: 54px;
        font-size: 25px;
        color: #151516;
        padding: 0 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .info {
        color: red;
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        align-items: center;
        line-height: 50px;
        p {
          font-weight: bold;
          .symbol {
            font-size: 22px;
          }
          .price {
            font-size: 30px;
          }
        }
        .pay {
          font-size: 24px;
          line-height: 50px;
        }
      }
    }
  }
}
</style>
