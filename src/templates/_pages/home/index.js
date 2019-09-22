import bindData from '../../bindData';

import template from './home.txt';

const TemplateHomePage = (options) => {
  return bindData(template, options);
};

export default TemplateHomePage;
