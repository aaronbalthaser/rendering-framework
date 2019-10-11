import { Page } from './';

const DEFAULTS = {
  containerId: 'main',
  name: 'page-about'
};

export const AboutPage = (template) => {

  const page = new Page({
    name: 'about'
  });

  page.render();

  page.show();
};
