import Vue from 'vue'
import Router from 'vue-router'
import ShareInvite from '@/components/ShareInvite'
import ShareInviteDetail from '@/components/ShareInviteDetail'
import Ticket from '@/components/Ticket'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ShareInvite
    },
    {
      path: '/detail',
      component: ShareInviteDetail
    },
    {
      path: '/ticket',
      component: Ticket
    }
  ]
})
