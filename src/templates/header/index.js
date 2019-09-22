import bindData from '../bindData';

import template from './header.txt';

const TemplateHeader = (options) => {
  return bindData(template, options);
};

export default TemplateHeader;