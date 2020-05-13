import Vue from 'vue';
import Router from 'vue-router';
import { HomePage,SignupPage,ReportPage,PageNotFound } from '../components/'

Vue.use(Router);
export default new Router({
    routes:[
        {
            name:'HomePage',
            path:'/',
            component: HomePage
        },
        {
            name:'ReportPage',
            path:'/report',
            component:ReportPage
        },
        {
            name:'SignupPage',
            path:'/login',
            component:SignupPage
        },
        {
            path: '**',
            name: '404',
            component: PageNotFound
      }
    ]
})
