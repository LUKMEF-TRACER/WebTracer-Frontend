 <template>
    <div class="ui grid padded stackable">
        <div class="row">
            <div>
                <img :src="image" class="image tiny ui centered avatar"/>
            </div>
            <div class="fifteen wide column">
                <div class="ui top attached tabular menu inverted">
                    <div v-for="route in routes" :key="route.path">
                     <router-link :to="route.path" :class="[getClass(route.name)? 'active blue' : '','item']">{{ route.name }}</router-link>
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
            image:image
     }
    } ,
    methods:{
        getClass: function(param){
            if(param == this.$route.name){
               return true;
            }
        }
    },
    props:{
        routes:{}
    }
}
</script>