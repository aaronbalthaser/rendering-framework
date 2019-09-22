import { Page } from './';

export const ContactPage = (template) => {

  const page = new Page({
    template: template
  });

  page.render();

  page.show();
};