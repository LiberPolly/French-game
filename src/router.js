import Vue from 'vue'
import Router from 'vue-router'
import StartPage from '../views/StartPage'
import GamePage from '../views/GamePage'
import TotalStatistics from '../views/TotalStatistics'
import CheatSheet from '../views/CheatSheet'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: StartPage
    },
    {
      path: '/GamePage',
      component: GamePage
    },
    {
      path: '/TotalStatistics',
      component: TotalStatistics
    },
    {
      path: '/CheatSheet',
      component: CheatSheet
    }
  ]

})