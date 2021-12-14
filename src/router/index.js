import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import signup from '../views/signup.vue'
import forgetPassword from '../views/forgetPassword.vue'
import signin from '../views/signin.vue'
import footer from '../components/footer.vue'
import navigation from '../components/navigation.vue'
import updateprofile from '../views/updateprofile.vue'
import updatePassword from '../views/updatePassword.vue'
import gallery from '../views/gallery.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'signup',
    component: signup
  },
  {
    path: '/signin',
    name: 'signin',
    component: signin
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: gallery
  },
  {
    path: '/updatePassword',
    name: 'updatePassword',
    component: updatePassword
  },
  {
    path: '/updateprofile',
    name: 'updateprofile',
    component: updateprofile
  },
  {
    path: '/forgetPassword',
    name: 'forgetPassword',
    component: forgetPassword
  },
  {
    path: '/navigation',
    name: 'navigation',
    component: navigation
  },
  {
    path: '/footer',
    name: 'footer',
    component: footer
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
