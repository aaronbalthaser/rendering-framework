import { Page } from './';

import { element } from '../utils';

import hero from '../images/smurf-girl.png';

const DEFAULTS = {
  containerId: 'main',
  name: 'page-about'
};

export const AboutPage = (template) => {

  const page = new Page({
    name: 'about'
  });

  page.render();

  const image = element({
    name: 'img',
    id: 'hero'
  });

  image.src = hero;

  const el = document.getElementById('about-page');
  el.appendChild(image);

  page.show();
};
