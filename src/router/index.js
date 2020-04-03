import Vue from 'vue'
import VueRouter from 'vue-router'
import PeerEight from '@/components/PeerEight'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PeerEight',
    component: PeerEight
  },
]

const router = new VueRouter({
  routes
})

export default router
