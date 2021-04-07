/**
 * @Date:   2021-03-30T22:12:06+01:00
 * @Last modified time: 2021-04-07T18:00:55+01:00
 */
import Vue from 'vue'

import Router from 'vue-router'

import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Login from './views/HomeLogin'

import CoursesIndex from './views/Courses/Index'
// import CoursesShow from './views/Courses/show'
// import CoursesEdit from './views/Courses/edit'

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
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/courses',
      name: 'courses_index',
      component: CoursesIndex
    },
    // {
    //   path: '/courses/show',
    //   name: 'courses_show',
    //   component: CoursesShow
    // },
    // {
    //   path: '/courses/edit ',
    //   name: 'courses_edit',
    //   component: CoursesEdit
    // },
    // {
    //   path: '/testing/:id',
    //   // path: '/testing/:myparam/:second',
    //   name: 'testing',
    //   component: Testing
    // },

  ]

});
