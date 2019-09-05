import Vue from 'vue'
import Router from 'vue-router'
//tabbar组件
//路由懒加载
const Home = ()=>import("../views/Home/")
//主页下二级路由
  // const Hot= ()=>import("../views/Home/subpage/Hot")
  // const Dress= ()=>import("../views/Home/subpage/Dress")
  // const DepartmentStore= ()=>import("../views/Home/subpage/DepartmentStore")
  // const Mom= ()=>import("../views/Home/subpage/Mom")
  // const Phone= ()=>import("../views/Home/subpage/Phone")
  // const ShoeBag= ()=>import("../views/Home/subpage/ShoeBag")
  // const Appliancee= ()=>import("../views/Home/subpage/Appliancee")
const Recomend = ()=>import("../views/Recomend")
const Cart = ()=>import("../views/Cart")
const Chat = ()=>import("../views/Chat")
const User= ()=>import("../views/User")
const GoodsBuy= ()=>import("../views/GoodsBuy")
const GoodsList= ()=>import("../components/GoodsList")
const NotFound= ()=>import("../views/NotFound")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home",
     
    },
    {
      path:"/home",
      name:"home",
      component:Home,
      // redirect:{
      //   name:"hot"
      // },
      children:[
        // {
        //   path:"",
        //   name:"hot",
        //   component:Hot
        // },
        // {
        //   path:"dress",// /home/dress
        //   name:"dress",
        //   component:Dress
        // },
        // {
        //   path:"departmentstore",
        //   name:"departmentstore",
        //   component:DepartmentStore
        // },
        // {
        //   path:"mom",
        //   name:"mom",
        //   component:Mom
        // },
        // {
        //   path:"phone",
        //   name:"phone",
        //   component:Phone
        // },
        // {
        //   path:"shoebag",
        //   name:"shoebag",
        //   component:ShoeBag
        // },
        // {
        //   path:"appliancee",
        //   name:"appliancee",
        //   component:Appliancee
        // },
      
      ]
    },
    {
      path:"/recomend",
      name:"recomend",
      component:Recomend
    },
   
    {
      path:"/cart",
      name:"cart",
      component:Cart
    },
    {
      path:"/chat",
      name:"chat",
      component:Chat
    },
    {
      path:"/user",
      name:"user",
      component:User
    },
    {
      path:"/goodsBuy",
      name:"goodsBuy",
      component:GoodsBuy
    },
    {
      path:"/goodslist",
      name:"goodslist",
      component:GoodsList
    },
    {
      path:"*",
      component:NotFound
    },
  ]
})
