import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/login/index.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/login"
  },
  {
    path:"/login",
    name:"Login",
    component:Login,
    meta:{
      Login:false
    }
  },
  {
    path:"/regist",
    name:"Regist",
    component:() => import ("@/views/regist/index.vue")
  },
  {
    path:"/input",
    name:"Input",
    component:() => import("../views/Home/input.vue")
  },
  {
    path:"/home",
    name:"Home",
    component:() => import("../views/Home/index.vue"),
  }
]

const router = new VueRouter({
  routes
})

export default router
