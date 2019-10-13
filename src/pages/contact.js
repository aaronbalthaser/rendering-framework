import { Page } from './';

import { element } from '../utils';

import hero from '../images/smurf-nerd.png';

const DEFAULTS = {
  containerId: 'main',
  name: 'page-contact'
};

export const ContactPage = () => {

  const page = new Page({
    name: 'contact'
  });

  page.render();

  const image = element({
    name: 'img',
    id: 'hero'
  });

  image.src = hero;

  const el = document.getElementById('contact-page');
  el.appendChild(image);

  page.show();
};
