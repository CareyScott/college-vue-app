/**
 * @Date:   2021-03-30T22:12:06+01:00
 * @Last modified time: 2021-04-14T22:12:54+01:00
 */
import Vue from 'vue'

import Router from 'vue-router'

import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Login from './views/HomeLogin'

import CoursesIndex from './views/Courses/Index'
import CoursesShow from './views/Courses/Show'
import CoursesCreate from './views/Courses/Create'
import CoursesEdit from './views/Courses/Edit'

import LecturersIndex from './views/Lecturers/Index'
import LecturersShow from './views/Lecturers/Show'
import LecturersCreate from './views/Lecturers/Create'
import LecturersEdit from './views/Lecturers/Edit'

import EnrolmentsIndex from './views/Enrolments/Index'
import EnrolmentsShow from './views/Enrolments/Show'
import EnrolmentsCreate from './views/Enrolments/Create'
import EnrolmentsEdit from './views/Enrolments/Edit'
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
    {
      path: '/courses/:id',
      name: 'courses_show',
      component: CoursesShow
    },
    {
      path: '/courses/create',
      name: 'courses_create',
      component: CoursesCreate
    },
    {
      path: '/courses/edit/:id',
      name: 'courses_edit',
      component: CoursesEdit
    },
    {
      path: '/lecturers',
      name: 'lecturers_index',
      component: LecturersIndex
    },
    {
      path: '/lecturers/:id',
      name: 'lecturers_show',
      component: LecturersShow
    },
    {
      path: '/lecturers/create',
      name: 'lecturers_create',
      component: LecturersCreate
    },
    {
      path: '/lecturers/edit/:id',
      name: 'lecturers_edit',
      component: LecturersEdit
    },
    {
      path: '/enrolments',
      name: 'enrolments_index',
      component: EnrolmentsIndex
    },
    {
      path: '/enrolments/:id',
      name: 'enrolments_show',
      component: EnrolmentsShow
    },
    {
      path: '/enrolments/create',
      name: 'enrolments_create',
      component: EnrolmentsCreate
    },
    {
      path: '/enrolments/edit/:id',
      name: 'enrolments_edit',
      component: EnrolmentsEdit
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
