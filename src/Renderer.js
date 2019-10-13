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

  /**
   * !! IMPORTANT !!
   * Kicks off the rendering process. If the associated template requires any
   * options such and data retrieved from api requests, this is where it's 
   * passed in when instantiating the object and can be found on the arguments 
   * object.
   * 
   * Example:
   * const someComponent = SomeCompnent();
   * someComponent.render({ data }).show();
   * 
   */
  render() {
    this.hide();

    this.renderTemplate.apply(this, arguments);
    this.postRender.apply(this, arguments);
    this.rendered = true;
  }

  /**
   * Called after rendering process is complete.
   */
  postRender() {
    if (!this.rendered) {
      this.componentDidRender.apply(this, arguments);
    }
  }

  /**
   * Handles constructing the component templates and passing data for template
   * data bindings. Template data bindings required data to be passed into the
   * render method after object instantiation.
   */
  renderTemplate() {
    /* template data for data binding */
    const { data } = arguments[0] || {};

    if (!this.template) {
      this.template = this._bindData(templates[this.namespace].default, {
        data: data || null,
        nodes: this.base ? true : false
      });
    }

    /**
     * If the base is true the component was marked as a base component to be
     * rendered within the container using append child to prevent wiping out 
     * other base components. 
     * 
     * Examples of base components are Header, Footer, etc.
     */
    if (this.base) {
      this.container.appendChild(this.template);
    } else {
      this.container.innerHTML = this.template;
    }
  }

  /**
   * Called after rendering is done to initialize events. The initialize events
   * method will fire down the inheritance chain binding any of the associated event
   * listeners. The initialize events method should not be called in the case of 
   * any re-renders so this method is reset to an empty function after firing 
   * once.
   */
  componentDidRender() {
    this.initializeEvents();
    this.componentDidRender = () => { };
  }

  initializeEvents() { }

  /**
   * Show method must be called after the render method during the object
   * instantiation process. Prior to being called this ensures the component
   * and nested components are finished rendering and ready for display.
   * 
   * Example:
   * const someComponent = SomeCompnent();
   * someComponent.render(data).show();
   */
  show() {
    this.container.classList.remove(this.options.hiddenClass);
    this.container.setAttribute('aria-hidden', false);
  }

  /**
   * Utility method to hide the component.
   */
  hide() {
    this.container.classList.add(this.options.hiddenClass);
    this.container.setAttribute('aria-hidden', true);
  }

  /**
   * Handles constructing or overriding the optional settings.
   * 
   * @param {Object} options : optional defaults
   */
  _options(options) {
    this.options = Object.assign({}, DEFAULTS, this._defaults(), options || {});
  }

  _defaults() {
    return Object.getPrototypeOf(this).constructor.DEFAULTS;
  }

  /**
   * Constructs the template string including any data binding when data is 
   * found. The return value can either be a template string or actual DOM
   * nodes if the optional nodes value is set to true.
   * 
   * @param {String} template : dot js template string used for data binding
   * @param {Object} options : options object
   */
  _bindData(template, options = {}) {
    const { data, nodes } = options;
    const templateFn = dot.template(template);

    return nodes
      ? document.createRange().createContextualFragment(templateFn(data))
      : templateFn(data);
  }
}

Renderer.DEFAULTS = DEFAULTS;
