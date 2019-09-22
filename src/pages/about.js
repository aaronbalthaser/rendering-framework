import { Page } from './';

export const AboutPage = (template) => {

  const page = new Page({
    template: template
  });

  page.render();

  page.show();
};