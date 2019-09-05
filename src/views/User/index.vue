<template>
<div>
    <NavBarPublic keyword="个人中心" />
  <div class="user">
    <van-tabs 
      v-model="active"
      swipeable
      animated>
      <van-tab title="登录">
        <van-cell-group>
          <van-field
            v-model="username"
            required
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
          />
          <van-field 
            v-model="password" 
            type="password" 
            label="密码" 
            placeholder="请输入密码" 
            required />
          <van-button 
            type="primary" 
            size="large"
            @click="handleLogin">登录</van-button>
          <!-- <van-button 
            type="info" 
            size="large"
            @click="handleToken">验证token</van-button> -->
        </van-cell-group>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field
            v-model="username"
            required
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
          />

          <van-field 
            v-model="password" 
            type="password" 
            label="密码" 
            placeholder="请输入密码" 
            required />
          <van-button 
            type="primary" 
            size="large"
            @click="handleRegister">注册</van-button>
        </van-cell-group>
      </van-tab>
    </van-tabs>
  </div>
  </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  name: "user",
  data() {
    return {
      username: "",
      password: "",
      active: 0
    };
  },
  methods:{
    //根据实际情况进行验证
    usernameValidate(){
      const username = this.username
      if(username==="")return this.$toast("请输入用户名")
    },
    passwordValidate(){
      const password = this.password
      if(password==="") return this.$toast("请输入密码")
    },
    handleLogin(){
      this.usernameValidate()
      this.passwordValidate()
      const username = this.username
      const password = this.password
      this.Axios.post("http://pddapi.h5sm.com/index/pdduser/getpddlogin",{
        username,
        password 
      }).then(res=>{
        console.log(res)
        if(res.data.status ==1 && res.status ==200){
           this.Cookies.set("token",res.data.token,{expires: 7})
          this.$toast('登录成功')
          this.$router.replace('/')
        }else{
          this.$toast(res.data.msg)
        }
      })
    },
    handleRegister(){
      this.usernameValidate()
      this.passwordValidate()
      const username = this.username
      const password = this.password
      this.Axios.post("http://pddapi.h5sm.com/index/pdduser/getpddregister",{
        username,
        password,
      }).then(res=>{
        if(res.data.status ==1 && res.status==200){
          this.$toast(res.data.msg)
          this.username = ''
          this.password = ''
          this.active = 0
        }
      })
    },
    handleToken(){
      const token = this.Cookies.get('token');
      
      this.Axios.post('http://pddapi.h5sm.com/index/pdduser/getToken',{
        token
      }).then(res=>console.log(res))
    },
  },
  components: {}
};
</script>

<style scoped lang="less">
.user {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
