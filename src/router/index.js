import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/index' },
    {
      path: '/index',
      name: 'index',
      component: ()=>import("../pages/index")
    },
    {
      name:"Error404",
      path:"*",
      component:()=>import("../pages/Error404")
    },
    {
      name:"login",
      path:"/login",
      component:()=>import("../pages/login"),
    },
    {
      name:"register",
      path:"/register",
      component:()=>import("../pages/register"),
    },
    {
      name:"cart",
      path:"/cart",
      component:()=>import("../pages/cart"),
    },
    ,
    {
      name:"detail",
      path:"/detail",
      component:()=>import("../pages/detail"),
    }
  ]
})
