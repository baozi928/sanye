import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '@/views/Money.vue';
import Statistics from '@/views/Statistics.vue.vue';
import Labels from '@/views/Labels.vue';
import NotFound from '@/views/NotFound.vue'
import EditLabel from '@/components/EditLabel.vue';

Vue.use(VueRouter)




const routes = [
  {
    path: '/',
    component: Money
  },
  {
    path: '/Money',
    component: Money,
  },
  {
    path: '/Labels',
    component: Labels,
  },
  {
    path: '/Statistics',
    component: Statistics,
  },
  {
    path:'/labels/edit/:id', //占位，edit后面会有个字符串，但目前还不确定
    component:EditLabel
  },
  {
    path: '*',
    component: NotFound,
  },
]

const router = new VueRouter({
  routes
})

export default router
