/**
 * @Date:   2021-03-30T22:12:06+01:00
 * @Last modified time: 2021-04-07T15:16:10+01:00
 */
import Vue from 'vue'

import Router from 'vue-router'

import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Courses from './views/Courses'
// import Testing from './views/Testing'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/courses',
      name: 'courses',
      component: Courses
    },
    // {
    //   path: '/testing/:id',
    //   // path: '/testing/:myparam/:second',
    //   name: 'testing',
    //   component: Testing
    // },

  ]

});
