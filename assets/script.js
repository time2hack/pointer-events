const routes = 
  {
    'home': {
      name: 'home',
      partial: '/partials/home.html',
      content: null,
    },
    'products': {
      name: 'products',
      partial: '/partials/products.html',
      content: null,
    },
    'services': {
      name: 'services',
      partial: '/partials/services.html',
      content: null,
    }
  }

const getTemplate = path => fetch(path).then(res => res.text());

const fetchTemplateForRoute = route => {
  return getTemplate(route.partial).then(template => {
    routes[route.name].content = template;
    return template;
  });
}

const getActiveRoute = () => window.location.hash.replace('#', '') || 'home';
