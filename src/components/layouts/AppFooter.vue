<template>
  <div class="container fluid" id="footer">
      <div class="ui center aligned container">
        <img :src="image" class="ui image large centered"/>
        <p>Non governmental organisation(NGO) promoting peace, nonviolence, social justice and sustainable development</p>
       <a href="https://facebook.com/lukmefcameroon/"><i class=" circular icon facebook blue large"></i></a>
        <a href="https://twitter.com/lukmefcameroon"><i class=" circular icon twitter  large" style="color:#1da1f2"></i></a>
        <a href="#"><i class=" circular inverted icon whatsapp green large" style="color:#25d366"></i></a>
        <a href="#"><i class=" circular icon instagram large" style="color:#c32aa3"></i></a>
      </div>
  </div>
</template>

<script>
import image from '../../assets/img/logo-footer.png';
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
        background-color: rgba(0, 128, 0, 0.493);
    }
</style>