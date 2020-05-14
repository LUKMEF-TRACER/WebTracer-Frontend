<template>
    <div class="ui grid padded stackable">
        <div class="row">
            <div class="">
                <img :src="image" class="image tiny ui centered avatar"/>
            </div>
            <div class="fifteen wide column">
                <div class="ui top attached tabular menu">
                    <div v-for="route in routes" :key="route.path">
                     <router-link :to="route.path" :class="[getClass.includes(route.name) ? 'active red' : '','item']">{{ route.name }}</router-link>
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
            routes:this.$router.options.routes //Dynamically get all routes to use in link tags(router-link element).
        }
    },
     computed:{
         // this comp func rsponsible to check if current route matches that of our links
        getClass(){            
            return this.$route.name;
        }
    }

}
</script>