/**
 * @Date:   2021-03-30T22:12:06+01:00
 * @Last modified time: 2021-04-20T18:33:04+01:00
 */
import Vue from 'vue'

import Router from 'vue-router'

import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Login from './views/HomeLogin'
import Profile from './views/Profile'
import Register from './views/Register'

import CoursesIndex from './views/courses/Index'
import CoursesShow from './views/courses/Show'
import CoursesCreate from './views/courses/Create'
import CoursesEdit from './views/courses/Edit'

import LecturersIndex from './views/lecturers/Index'
import LecturersShow from './views/lecturers/Show'
import LecturersCreate from './views/lecturers/Create'
import LecturersEdit from './views/lecturers/Edit'

import EnrolmentsIndex from './views/enrolments/Index'
import EnrolmentsShow from './views/enrolments/Show'
import EnrolmentsCreate from './views/enrolments/Create'
import EnrolmentsEdit from './views/enrolments/Edit'
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
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },

    {
      path: '/courses',
      name: 'courses_index',
      component: CoursesIndex
    },

    {
      path: '/courses/create',
      name: 'courses_create',
      component: CoursesCreate
    },
    {
      path: '/courses/:id',
      name: 'courses_show',
      component: CoursesShow
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
      path: '/lecturers/create',
      name: 'lecturers_create',
      component: LecturersCreate
    },
    {
      path: '/lecturers/:id',
      name: 'lecturers_show',
      component: LecturersShow
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
      path: '/enrolments/create',
      name: 'enrolments_create',
      component: EnrolmentsCreate
    },
    {
      path: '/enrolments/:id',
      name: 'enrolments_show',
      component: EnrolmentsShow
    },
    {
      path: '/enrolments/edit/:id',
      name: 'enrolments_edit',
      component: EnrolmentsEdit
    },

  ]

});
