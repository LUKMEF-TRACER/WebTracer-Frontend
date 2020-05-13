<template>
  <div>
      <ul>
          <li v-for="(item,index) in navitems" :key="index">
             <router-link :to="item.link">{{ item.name }}</router-link>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'AppHeader',
    data:function(){
        var navitems = [
            {
                name:'home',
                link:'/'
            },
            {
                name:'report a case',
                link:'/report'
            },
            {
                name:'covid-19',
                link:'/about-covid-19'
            },
            {
                name:'contact us',
                link:'/'

            },
            {
                name:'login',
                link:'/login'
            }
        ]
        return{
            navitems
        }
    }

}
</script>