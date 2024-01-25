window.onload = function() {
   console.log('Router has loaded');
   // create a Router constructor 
   var view = document.getElementById('main');
   // grab all active attribute routes  
   var activeRoutes = Array.from(document.querySelectorAll('[route]'));
   
  function navigate(event) {

    var route = event.target.attributes[0].value;
    var routeInfo = websiteRouter.routes.filter(function(r) {
     return r.path === route;
    })[0];

    if(!routeInfo) {
     window.history.pushState({}, '', 'error')
     view.innerHTML = 'No route exists with this path'
    }
    else {
      window.history.pushState({}, '', routeInfo.link);
      console.log(window.history);
      view.innerHTML = routeInfo.link;
      //window.location.hash = routeInfo.link;
    }

 };
  

   // add event listeners
   activeRoutes.forEach(function(route) {
    route.addEventListener('click', navigate, false);
   });
  
   var Router = function(name, routes) {
    return {
     name: name,
     routes: routes,
    }
   };
  
   /* navigation 관리 */
   var websiteRouter = new Router('websiteRouter', [
     {
      path: '/',
      name: 'Root',
      link: './index.html',
     },
     {
      path: '/about',
      name: 'About',
      link: './include/header.html',
     },
     {
      path: '/contact',
      name: 'Contact',
      link: '../footer.html',
     },
     {
      path: '/users',
      name: 'Users'
     }
    ]);
  
  //  var currentPath = window.location.pathname;
  //  if(currentPath === '/') {
  //   view.innerHTML = 'You are on the root page';
  //  }
  //  else {
  //   var route = websiteRouter.routes.filter(function(r) {
  //    return r.path === currentPath
  //   })[0];
  //   if(route) {
  //    view.innerHTML = 'You are on the ' + route.name + ' path'
  //   }
  //   else {
  //    view.innerHTML = '404!';
  //   }
    
  //  }
  }