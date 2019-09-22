import bindData from '../../bindData';

import template from './contact.txt';

const TemplateContactPage = (options) => {
  return bindData(template, options);
};

export default TemplateContactPage;
