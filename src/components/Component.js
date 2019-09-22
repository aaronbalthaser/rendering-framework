import { Renderer } from '../components';

const DEFAULTS = {};

export class Component extends Renderer {
  constructor(options) {
    super(options);
  }

  render() {
    super.render.apply(this, arguments);
  }

  postRender() {
    super.postRender();
  }

  renderOnce() {
    super.renderOnce();
  }

  show() {
    super.show.apply(this, arguments);
  }
}

Component.DEFAULTS = DEFAULTS;
