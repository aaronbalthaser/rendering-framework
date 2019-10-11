import { Component } from '../Component';

import './Navigation.scss';

const DEFAULTS = {
  containerId: 'body',
  name: 'navigation',
  base: true
};

export class Navigation extends Component {
  constructor(optons) {
    super(optons);
  }

  render() {
    super.render.apply(this, arguments);

    return this;
  }

  show() {
    super.show.apply(this, arguments);
  }
}

Navigation.DEFAULTS = DEFAULTS;
