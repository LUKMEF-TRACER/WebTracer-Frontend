import Vue from 'vue';
import Router from 'vue-router';
import { HomePage,SignupPage,ReportPage,PageNotFound } from '../components/'

Vue.use(Router);
export default new Router({
    routes:[
        {
            name:'Welcome',
            path:'/',
            component: HomePage
        },
        {
            name:'Report A Case',
            path:'/report',
            component:ReportPage
        },
        {
            name:'SignIn',
            path:'/login',
            component:SignupPage
        },
        /*
        {
            path: '**',
            name: '404',
            component: PageNotFound
      }*/   
    ],
})
