<template>
  <div class="tabbar">
    <van-tabbar 
      v-model="active" 
      @change="handleSwitch" 
      active-color="red">
      <van-tabbar-item
        v-for="item in Tabbar"
        :key="item.id"
        :name="item.linkTo"
        :icon="item.icon"
      >{{item.name}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "tabbar",
  ele:'',
  data() {
    return {
      active: "home",
      Tabbar: [
        { id: 0, name: "首页", icon: "wap-home", linkTo: "home" },
        { id: 1, name: "推荐", icon: "hot-o", linkTo: "recomend" },
        { id: 2, name: "购物车", icon: "cart-o", linkTo: "cart" },
        { id: 3, name: "聊天", icon: "chat-o", linkTo: "chat" },
        { id: 4, name: "个人中心", icon: "user-o", linkTo: "user" }
      ]
    };
  },
  mounted(){
    this.ele = document.querySelectorAll(".van-tabbar-item").item(0)
    
  },
  methods:{
      handleSwitch(){
          // console.log(this.active)
          //编程式导航
          this.$router.push({
            name:this.active
          })
      }
  },
 watch:{
   $route(to,from){
      const path = to.path.includes("home")
      if(path) this.ele.classList.add("van-tabbar-item--active")
      else this.ele.classList.remove("van-tabbar-item--active") ;
      
   }
 }
};
</script>

<style scoped>
</style>
