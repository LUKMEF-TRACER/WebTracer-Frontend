<template>
    <div class="ui grid padded stackable">
        <div class="row">
            <div class="">
                <img :src="image" class="image tiny ui centered avatar"/>
            </div>
            <div class="fifteen wide column">
                <div class="ui top attached tabular menu">
                    <div v-for="(route ,index) in routes" :key="index">
                     <router-link :to="route.path" :class="[getClass(route.name),'item']" >{{ route.name }}</router-link>
                    </div>
                </div>     
            </div>
        </div> 
   </div>
</template>

<script>
import image from '../../assets/img/logo.png'; //TODO: look for way to just import without relative paths e.g import image from 'img/logo.png should work
export default {
    name:'AppHeader',

    data:function(){
        return{
            image:image,
            routes:null, //Dynamically get all routes to use in link tags(router-link element).
        }
    },
    methods: {
         
        getClass: function(name){ 
            var classAttrs='active red'
            if (name !== this.$route.name) {
                return ''
            }
            return classAttrs;
        }
        // console.log('created!!!')
    },
    mounted(){
        console.log('mounted!!!')
    },
    created(){
         // this comp func rsponsible to check if current route matches that of our links
        var k = this.$router.options.routes.map(function(route) {
            return route
        })
        console.log(k)
    }

}
</script>