<template>
  <div class="home">
    <!-- 标签页 -->
    <van-tabs 
      animated 
      sticky 
      swipeable 
      lazy-render 
      @change="handleSwipeable">
      <van-tab 
        v-for="(item,index) in tagsBar" 
        :key="item.optId" 
        :name="index" 
        :title="item.optName">
      <Content 
        :showbanner="index"
        :categroy="item.opts"
        :goodsList="item.optName"/>
      </van-tab>
    </van-tabs>
      <TabBar />
  </div>
</template>
<script>
import TabBar from "@/components/TabBar";
// import {getTagsBag} from "@/api";//mock数据

export default {
  name: "home",
  data() {
    return {
      tagsBar: []
    };
  },
  created(){
    this.Axios.get("http://pddapi.h5sm.com/index/index/getgoodscategory")
    .then(res=>{
      this.tagsBar = res.data.data})
    // this.getData()
    
  },
  methods: {
    handleSwipeable(linkTo, title) {
      // console.log(linkTo,title);

      // this.$router.push({
      //   name: linkTo
      // });
    },
    // async getData(){
    //   let tatagsBar = await getTagsBag()
    //   this.tagsBar = tatagsBar
    // }
  },
  components: {
    TabBar
  }
};
</script>

<style scoped>
.home {
  height: 100vh;
}
</style>
