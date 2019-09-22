import bindData from '../bindData';

import template from './navigation.txt';

const TemplateNavigation = (options) => {
  return bindData(template, options);
};

export default TemplateNavigation;
