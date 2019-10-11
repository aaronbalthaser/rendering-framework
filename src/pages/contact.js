import { Page } from './';

const DEFAULTS = {
  containerId: 'main',
  name: 'page-contact'
};

export const ContactPage = (template) => {

  const page = new Page({
    name: 'contact'
  });

  page.render();

  page.show();
};
