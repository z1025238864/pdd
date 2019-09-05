import Vue from 'vue'
import "amfe-flexible"
import App from './App.vue'
import router from './router'
import store from './store'
import { 
  Tabbar, TabbarItem,//标签栏
  Tab, Tabs,  //标签页
  Swipe, SwipeItem,//轮播图
  Lazyload,//懒加载指令
  ImagePreview,//图片预览
  Grid, GridItem,//宫格
  Card,//商品卡片
  Field,
  Button,
  Toast,
  Cell,//类
  CellGroup,//组
  Divider,//分割线
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  NavBar,
  Tag,
  SubmitBar

} from 'vant';
import Axios from"axios"
import Cookies from 'js-cookie'
import 'mint-ui/lib/style.css'
const GoodsList = ()=> import ("./components/GoodsList") 
const Banner = ()=> import ("./components/Banner") 
const Content = ()=> import ("./components/Content") 
const Categroy = ()=> import ("./components/Categroy") 
const NavBarPublic = ()=> import ("./components/NavBarPublic") 
Vue.component("GoodsList",GoodsList)
Vue.component("Banner",Banner)
Vue.component("Content",Content)
Vue.component("Categroy",Categroy)
Vue.component("NavBarPublic",NavBarPublic)
Vue.use(Tabbar).use(TabbarItem)
  .use(Tab).use(Tabs)
  .use(Swipe).use(SwipeItem)
  .use(Lazyload)
  .use(ImagePreview)
  .use(Grid)
  .use(GridItem)
  .use(Card)
  .use(Field)
  .use(Button)
  .use(Toast)
  .use(Cell)
  .use(CellGroup)
  .use(Divider)
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
  .use(NavBar)
  .use(Tag)
  .use(SubmitBar);
Vue.prototype.Axios = Axios
Vue.prototype.Cookies = Cookies
import { Indicator } from 'mint-ui';
Axios.interceptors.request.use(function (config) {
  Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  });
  return config;
}, function (error) {
  return Promise.reject(error);
});

Axios.interceptors.response.use(function (response) {
  Indicator.close();
  return response;
}, function (error) {

  return Promise.reject(error);
});

Vue.config.productionTip = false
router.beforeEach((to,from,next)=>{
  const token = Cookies.get("token")
  if(token){
    next()
    if(to.name =='user'){
        return next('/')
    }
  }else{
    if(to.name=='user'){
      return next()
    }else{
      return next({path:'/user'})
    }
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
