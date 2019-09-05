<template>
  <div class="notfound">
      <div class="pic">
          <img src="https://www-cdn-res.shiguangkey.com/static/img/404.60320ab.png" alt="">
      </div>
      <div class="buttons">
          <button @click="handleBack">返回上一级 </button>
          <button @click="handleIndex">返回首页 </button>
      </div>
  </div>
</template>
<script>
export default {
  name: "notfound",
  data() {
    return {};
  },
  methods:{
      handleBack(){
          console.log(1);
          
          this.$router.go(-1)
      },
      handleIndex(){
          this.$router.replace("/")
      }
  },
  components: {}
};
</script>

<style scoped lang="less">
.notfound{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-content:center;
    flex-wrap: wrap;
    .pic{
        img{
        width: 420px;
        height: 420px;
    }
    }
    .buttons {
        width: 420px;
        display: flex;
        justify-content: space-around;
        button{
            color: #3073f4;
            line-height: 50px;
            font-size: 22px;
            margin-top: 6px;
            padding: 0 25px;
            background: transparent;
            border: 1px solid #3073f4;
            border-radius: 13px;
                }
    }
}
</style>
