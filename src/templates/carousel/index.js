import bindData from '../bindData';

import template from './carousel.txt';

const TemplateCarousel = (options) => {
  return bindData(template, options);
};

export default TemplateCarousel;
