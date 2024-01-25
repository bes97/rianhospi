window.onload = function() {   
   
   import createRouter from "./script.js";
   const createR = createRouter();
   // add event listeners
   createR.activeRoutes.forEach(function(route) {
    route.addEventListener('click', navigate, false);
   });
  
   var Router = function(name, routes) {
    return {
     name: name,
     routes: routes,
    }
   };
  
   var myFirstRouter = new Router('myFirstRouter', [
     {
      path: '/',
      name: 'Root'
     },
     {
      path: '/about',
      name: 'About'
     },
     {
      path: '/contact',
      name: 'Contact'
     },
     {
      path: '/users',
      name: 'Users'
     }
    ]);
  
   var currentPath = window.location.pathname;
   if(currentPath === '/') {
    view.innerHTML = 'You are on the root page';
   }
   else {
    var route = myFirstRouter.routes.filter(function(r) {
     return r.path === currentPath
    })[0];
    if(route) {
     view.innerHTML = 'You are on the ' + route.name + ' path'
    }
    else {
     view.innerHTML = '404!';
    }
    
   }
  }