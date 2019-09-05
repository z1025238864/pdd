import  axios from 'axios'
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data.data;
  });
//请求tagBags组件的数据接口
export let getTagsBag = ()=>{
    return axios.get('/static/mock/tagsBag.json')
  }  
