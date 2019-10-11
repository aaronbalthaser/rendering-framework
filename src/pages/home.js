import { Page } from './';

import { Carousel } from '../components/Carousel';
import { Header } from '../components/Header';

import constants from '../constants';

const DEFAULTS = {
  containerId: 'main',
  name: 'page-home'
};

export const HomePage = (template) => {
  let data = JSON.parse(localStorage.getItem('data'));

  const page = new Page({
    name: 'home'
  });

  page.render();

  if (!data) {
    fetch(constants.apiUrl + constants.accessKey)
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('data', JSON.stringify(data));

        setupCarousel(data)
      });
  } else {
    setupCarousel(data);
  }

  function setupCarousel(data) {
    const carousel = new Carousel({
      componentSelector: '#carousel-container',
      containerId: 'carousel'
    });

    carousel.render(data);
    carousel.show();
  }

  page.show();

  Page.DEFAULTS = DEFAULTS;
};
