const DEFAULTS = {
  containerId: '',
  template: '',
  hiddenClass: 'hidden'
};

export class Renderer {
  constructor(options) {
    this._options(options);

    this.containerId = this.options.containerId;
    this.container = document.getElementById(this.containerId);
    this.name = this.options.name || Object.getPrototypeOf(this).constructor.name;
    this.namespace = this.options.namespace || this.name.toLowerCase();
    this.template = this.options.template;

    this.rendered = false;
  }

  render() {
    this.hide();

    this.renderTemplate.apply(this, arguments);
    this.postRender.apply(this, arguments);
    this.rendered = true;
  }

  postRender() {
    if (!this.rendered) {
      this.renderOnce.apply(this, arguments);
    }
  }

  renderTemplate() {
    this.container.innerHTML = this.template;
  }

  renderOnce() {
    this.initializeEvents();
    this.renderOnce = () => { };
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
}

Renderer.DEFAULTS = DEFAULTS;
