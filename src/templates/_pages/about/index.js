import bindData from '../../bindData';

import template from './about.txt';

const TemplateAboutPage = (options) => {
  return bindData(template, options);
};

export default TemplateAboutPage;
