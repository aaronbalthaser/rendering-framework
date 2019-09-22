import { Page } from './';

import { Carousel } from '../components/Carousel';

import TemplateCarousel from '../templates/carousel';

import constants from '../constants';

export const HomePage = (template) => {

  const page = new Page({
    template: template
  });

  page.render();

  const imagesData = [];
  const url = constants.imageUrl;

  for (let i = 0; i < 8; i++) {
    imagesData.push({
      url: url,
      author: 'Aaron Balthaser'
    });
  }

  const carousel = new Carousel({
    template: TemplateCarousel({ data: imagesData }),
    containerId: 'carousel'
  });

  carousel.render();
  carousel.show();

  page.show();
};
