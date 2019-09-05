let shopTools = {};
let shops = JSON.parse(window.localStorage.getItem("shopInfo")|| '{}')
//更新并存储商品 {id:234.num：5}
shopTools.addUpdate = function(goods){
    if(shops[goods.id]){
        shops[goods.id] += goods.num
    }else{
        shops[goods.id] = goods.num
    }
    this.saveShops()
}
shopTools.delete = function(id){
    delete shops[id]
    this.saveShops()
}
shopTools.getShops = function(){
    return JSON.parse(window.localStorage.getItem("shopInfo")||"{}")
}

shopTools.saveShops = function(){
    window.localStorage.setItem("shopInfo",JSON.stringify(shops))
}
export default shopTools