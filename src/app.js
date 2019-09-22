import { element } from './utils';
import { Router } from './Router';

import TemplateHeader from './templates/header';
import TemplateNavigation from './templates/navigation';
import TemplateHomePage from './templates/_pages/home';
import TemplateAboutPage from './templates/_pages/about';
import TemplateContactPage from './templates/_pages/contact';

import { HomePage, AboutPage, ContactPage } from './pages';

import './app.scss';

(function () {
  const body = document.querySelector('body');
  const header = TemplateHeader({ nodes: true });
  const navigation = TemplateNavigation({ nodes: true });

  body.id = 'body';
  body.appendChild(header);
  body.appendChild(navigation);

  element({
    name: 'main',
    id: 'main',
    node: body
  });

  // Router:
  const router = new Router();

  router.route('/', 'home', () => {
    HomePage(TemplateHomePage());
  });

  router.route('/about', 'about', () => {
    AboutPage(TemplateAboutPage());
  });

  router.route('/contact', 'contact', () => {
    ContactPage(TemplateContactPage());
  });

  function routerHandler() {
    const path = location.hash.slice(1) || '/';

    router.get(path, (route) => {
      if (route.controller) {
        route.controller();
      }
    });
  }

  window.addEventListener('load', routerHandler);
  window.addEventListener('hashchange', routerHandler);
}());
