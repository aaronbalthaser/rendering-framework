import "@fortawesome/fontawesome-free/css/all.min.css";

import { element } from './utils';
import { Router } from './Router';

import { Header } from './components/Header';
import { Navigation } from './components/Navigation';

import { HomePage, AboutPage, ContactPage } from './pages';

import './app.scss';

(function () {
  const body = document.querySelector('body');

  body.id = 'body';

  const header = new Header();
  header.render().show();

  const navigation = new Navigation();
  navigation.render().show();

  const main = element({
    name: 'main',
    id: 'main'
  });

  body.append(main)

  // Router:
  const router = new Router();

  router.route('/', 'home', () => {
    HomePage();
  });

  router.route('/about', 'about', () => {
    AboutPage();
  });

  router.route('/contact', 'contact', () => {
    ContactPage();
  });

  function routerHandler() {
    const path = location.hash.slice(1) || '/';

    router.get(path, (route) => {
      if (route && route.controller) {
        route.controller();
      }
    });
  }

  window.addEventListener('load', routerHandler);
  window.addEventListener('hashchange', routerHandler);
}());
