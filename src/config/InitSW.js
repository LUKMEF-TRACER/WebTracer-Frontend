export default{
    startRegistration: async function(){
        if('serviceWorker' in navigator){
            addEventListener('load',function(event){                               
                  this.navigator.serviceWorker.register('./workers.js').then(function(registration){
                  }).catch(function(err){
                      console.log(err);  
                  })  
            })
        }
    }
}