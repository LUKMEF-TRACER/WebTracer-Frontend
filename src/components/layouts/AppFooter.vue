<template>
  <div class="container" id="footer">
      <div class="ui center aligned container">
        <img :src="image" class="ui image large centered"/>
        <p>{{$t('Non governmental organisation(NGO) promoting peace, nonviolence, social justice and sustainable development')}}</p>
        <!-- Factorise this into footerIcon component to dynamiaclly insert media icons-->
       <a href="https://facebook.com/lukmefcameroon/"><i class=" circular icon facebook blue large"></i></a>
        <a href="https://twitter.com/lukmefcameroon"><i class=" circular icon twitter  large" style="color:#1da1f2"></i></a>
        <a href="#"><i class=" circular inverted icon whatsapp green large" style="color:#25d366"></i></a>
        <a href="#"><i class=" circular icon instagram large" style="color:#c32aa3"></i></a>
      </div>
  </div>
</template>

<script>
import image from '../../assets/img/logo-footer.png'; //TODO: Eliminate relative paths e.g import image from 'img/logo.png should work
export default {
    name:"AppFooter",
    data: function(){
        return{
            image:image,
        }
    }
}
</script>
<style scoped>
    #footer{
        background-color: #4e9738dc /** TODO: get a better nice color for this*/
    }
</style>