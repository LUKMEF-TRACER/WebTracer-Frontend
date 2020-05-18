<!--
    * This is the root component of our APP.
    * Here we define how our page(s) will look like(layout).
    * Makes sense to be called a SFC(Single File Component)
 -->

<template>
    <div>
        <AppHeader :routes=routes></AppHeader>
        <router-view></router-view>
        <AppFooter></AppFooter>
    </div>
</template>

<script>
import {AppHeader, AppFooter} from './components'
export default {
    data:function(){
        return{
            routes: this.$nav.blacklist(['404'])
        }
    },
    components:{
        AppFooter,AppHeader
    }
}
</script>