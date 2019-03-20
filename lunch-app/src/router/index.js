import Vue from 'vue'
import Router from 'vue-router'
import DetailPage from 'components/DetailPage'
import FeedPage from 'components/FeedPage'
import CreatePage from 'components/CreatePage'
import DraftsPage from 'components/DraftsPage'
import NotFoundPage from 'components/NotFoundPage'
import Menu from 'components/Menu'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    /*
    {
      path: '/',
      name: 'Feed',
      component: FeedPage
    },*/
    {
      path: '/',
      name: 'Menu',
      component: Menu,
      meta: {
        title: 'Menu'
      }
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: DetailPage
    },
    {
        path: '/create',
        name: 'Create',
        component: CreatePage
    },
    {
        path: '/drafts',
        name: 'Drafts',
        component: DraftsPage
    },
    {   path: '*', 
        component: NotFoundPage 
    }
  ]
})