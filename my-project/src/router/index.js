import Vue from 'vue'
import Router from 'vue-router'
import FirstTask from '@/components/FirstTask'
import SecondTask from '@/components/SecondTask'
import ThirdTask from '@/components/ThirdTask'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstTask',
      component: FirstTask
    },
    {
      path: '/ft',
      name: 'FirstTask',
      component: FirstTask
    },
    {
      path: '/st',
      name: 'SecondTask',
      component: SecondTask
    },
    {
      path: '/tt',
      name: 'ThirdTask',
      component: ThirdTask
    }
  ]
})
