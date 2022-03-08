const routes = 
  {
    'home': {
      name: 'home',
      partial: '/partials/home.html',
    },
    'products.html': {
      name: 'products',
      partial: '/partials/products.html',
    },
    'services.html': {
      name: 'services',
      partial: '/partials/services.html',
    }
  }

const getTemplate = path => fetch(path).then(res => res.text());

const getActiveRoute = () => window.location.hash.replace('#', '') || 'home';

document.addEventListener('DOMContentLoaded', () => {
  const active = getActiveRoute();

  const main = document.querySelector('#main');

  getTemplate(routes[active].partial).then(res => (main.innerHTML = res));

  window.addEventListener("hashchange", () => {
    getTemplate(routes[getActiveRoute()].partial).then(res => (main.innerHTML = res));
  }, false);

})