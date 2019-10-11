import { Renderer } from '../Renderer';

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

  componentDidRender() {
    super.componentDidRender();
  }

  show() {
    super.show.apply(this, arguments);
  }
}

Page.DEFAULTS = DEFAULTS;
