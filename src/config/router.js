import Vue from 'vue';
import Router from 'vue-router';
import { HomePage,SignupPage,ReportPage,PageNotFound,SignIn, Hospital } from '../components/'

Vue.use(Router);
export default new Router({
    // mode: 'history',
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
            component:SignIn,
            meta: {
                title: "Login",
            }
        },
        {
            name:'Hospital',
            path:'/hospital',
            component:Hospital,
            meta: {
                title: "Hospital",
            }
        },
        {
            path: '**',
            name: '404',
            component: PageNotFound
      }
    ],
})
