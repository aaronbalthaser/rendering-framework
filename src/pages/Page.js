import { Renderer } from '../components';

const DEFAULTS = {
  containerId: 'main',
};

export class Page extends Renderer {
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

Page.DEFAULTS = DEFAULTS;
