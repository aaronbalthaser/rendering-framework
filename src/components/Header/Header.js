import { Component } from '../Component';

import './Header.scss';

const DEFAULTS = {
  containerId: 'body',
  name: 'header',
  base: true
};

export class Header extends Component {
  constructor(options) {
    super(options);
  }

  render() {
    super.render.apply(this, arguments);

    return this;
  }

  show() {
    super.show.apply(this, arguments);
  }
}

Header.DEFAULTS = DEFAULTS;
