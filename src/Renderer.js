import dot from 'dot';

import templates from './templates';

const DEFAULTS = {
  containerId: '',
  template: '',
  hiddenClass: 'hidden',
  base: false
};

export class Renderer {
  constructor(options) {
    this._options(options);

    this.containerId = this.options.containerId;
    this.container = document.getElementById(this.containerId);
    this.name = this.options.name || Object.getPrototypeOf(this).constructor.name;
    this.namespace = this.options.namespace || this.name.toLowerCase();
    this.template = this.options.template;
    this.base = this.options.base;

    this.rendered = false;
  }

  render(data) {
    this.hide();

    this.renderTemplate.apply(this, arguments);
    this.postRender.apply(this, arguments);
    this.rendered = true;
  }

  postRender() {
    if (!this.rendered) {
      this.componentDidRender.apply(this, arguments);
    }
  }

  renderTemplate() {
    if (!this.template) {
      this.template = this._bindData(templates[this.namespace].default, {
        data: arguments[0] || null,
        nodes: this.base ? true : false
      });
    }

    /**
     * If the base is true the component was marked as a base component to be
     * rendered within the container using append child to prevent wiping out 
     * other base components.
     */
    if (this.base) {
      this.container.appendChild(this.template);
    } else {
      this.container.innerHTML = this.template;
    }
  }

  componentDidRender() {
    this.initializeEvents();
    this.componentDidRender = () => { };
  }

  initializeEvents() { }

  show() {
    this.container.classList.remove(this.options.hiddenClass);
    this.container.setAttribute('aria-hidden', false);
  }

  hide() {
    this.container.classList.add(this.options.hiddenClass);
    this.container.setAttribute('aria-hidden', true);
  }

  _options(options) {
    this.options = Object.assign({}, DEFAULTS, this._defaults(), options || {});
  }

  _defaults() {
    return Object.getPrototypeOf(this).constructor.DEFAULTS;
  }

  _bindData(template, options = {}) {
    const { data, nodes } = options;
    const templateFn = dot.template(template);

    return nodes
      ? document.createRange().createContextualFragment(templateFn(data))
      : templateFn(data);
  }
}

Renderer.DEFAULTS = DEFAULTS;
