//导入axios

import axios from 'axios'

//设置基地质
axios.defaults.baseURL='http://localhost:8888/api/private/v1/'

//用install方法
//把axios添加到vue的原型上
//暴露出去
export default{
   install(Vue){
     Vue.prototype.$http = axios 
   }
}