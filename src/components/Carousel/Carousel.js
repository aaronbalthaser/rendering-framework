import { Component } from '../Component';

const DEFAULTS = {
  containerId: 'carousel-container'
};

export class Carousel extends Component {
  constructor(options) {
    super(options);
  }

  render() {
    super.render.apply(this, arguments);
  }

  show() {
    super.show.apply(this, arguments);
  }
}

Carousel.DEFAULTS = DEFAULTS;
