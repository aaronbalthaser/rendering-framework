import { Renderer } from '../Renderer';

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

  componentDidRender() {
    super.componentDidRender();
  }

  show() {
    super.show.apply(this, arguments);
  }
}

Component.DEFAULTS = DEFAULTS;
