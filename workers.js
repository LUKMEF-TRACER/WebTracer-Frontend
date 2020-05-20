function InitCache(cacheName){
    caches.open(cacheName).then(function(cache){        
       return  cache.addAll(
            [ './','./index.html']);              
    })
}
addEventListener('install',function(event){
    event.waitUntil(InitCache('lukmef-cache'))
}),

addEventListener('activate',function(event){
    
})
//Todo: fetch event return error
/*
addEventListener('fetch',function(event){
        event.respondWith(
          caches.match(event.request)
            .then(function(response) {
              // Cache hit - return response
              if (response) {                  
                return response;
              }
              return fetch(event.request);
            }
          ))
      
})
*/