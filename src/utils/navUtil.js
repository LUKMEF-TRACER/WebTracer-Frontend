import router from '../config/router';
export default{
    blacklist: function(blacklist=[]){
        var newRoutes = [];
        /* TODO: Re-implement this util to handle single passed variable and add support for case insensitivity
        if(typeof blacklist === "string" && blacklist!=''){
            if(router.options.routes.some(route => route.name === blacklist)){
                console.log(route.name);
                
               var filtered = router.options.routes.filter(function(value, index, arr,route){ return ''});
             //  newRoutes = router.options.routes
              // return newRoutes
              console.log(filtered);
              
              console.log(router.options.routes);
              
            }else return router.options.routes
        } */
            router.options.routes.forEach(function(processed){
                blacklist.map(function(i){
                    return i.toLowerCase ()
                })
                if(blacklist.indexOf(processed.name.toLowerCase ()) !== -1 == false){
                  newRoutes.push(processed)
               }
           })
        return newRoutes
    }
}