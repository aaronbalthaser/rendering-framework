import { Component } from '../Component';

import './Carousel.scss';

import constants from '../../constants';

const DEFAULTS = {
  containerId: 'main',
  name: 'carousel'
};

export class Carousel extends Component {
  constructor(options) {
    super(options);

    const { auto, timeout, delay } = options;

    this.auto = auto;
    this.timeout = timeout || 0
    this.delay = delay || constants.delay;
    this.index = 0;
    this.side = null;
    this.interval = null;
    this.intervalTimeout = timeout || 0;
  }

  render() {
    super.render.apply(this, arguments);

    this.slides = this.container.querySelectorAll(constants.slidesSelector);
    this.slides[this.index].classList.add(constants.active);
    this.dots = this.container.querySelectorAll(constants.slideDotSelector);
    this.dots[this.index].classList.add(constants.active);
    this.length = this.slides.length;
  }

  show() {
    super.show.apply(this, arguments);

    if (this.auto) {
      this.autoSlide();
    }

    if (this.intervalTimeout) {
      this.autoStop();
    }
  }

  initializeEvents() {
    console.log(constants.slideControlsSelector);
    this.controlesContainer = this.container.querySelector(constants.slideControlsSelector);
    this.controlesContainer.addEventListener('click', this.controlsHandler.bind(this));

    this.dotsContainer = this.container.querySelector(constants.slideDotsSelector);
    this.dotsContainer.addEventListener('click', this.dotNavigationHandler.bind(this));
  }

  // Carousel methods:
  autoSlide() {
    this.interval = setInterval(() => {
      this.goForward();
    }, this.delay);
  }

  autoStop() {
    this.intervalTimeout = setTimeout(() => {
      window.clearInterval(this.interval);
      window.clearTimeout(this.intervalTimeout);
    }, this.intervalTimeout);
  }

  controlsHandler(event) {
    if (event && event.target) {
      let direction = event.target.dataset[constants.direction];

      if (direction === constants.slideControlDirLt) {
        this.goBack();
      }

      if (direction === constants.slideControlDirRt) {
        this.goForward();
      }
    }
  }

  dotNavigationHandler(event) {
    if (event && event.target && event.target.getAttribute('data-index')) {
      this.index = parseInt(event.target.dataset[constants.index]);

      this.removeSlideActiveClass();
      this.updateSlideActiveClass(this.index);

      this.removeDotActiveClass();
      this.updateDotActiveClass(this.index);
    }
  }

  goBack() {
    if (this.index < 1) {
      this.index = this.length - 1;
    } else {
      this.index--;
    }

    this.removeSlideActiveClass();
    this.updateSlideActiveClass(this.index);

    this.removeDotActiveClass();
    this.updateDotActiveClass(this.index);
  }

  goForward() {
    if (this.index === this.length - 1) {
      this.index = 0;
    } else {
      this.index++;
    }

    this.removeSlideActiveClass();
    this.updateSlideActiveClass(this.index);

    this.removeDotActiveClass();
    this.updateDotActiveClass(this.index);
  }

  removeDotActiveClass() {
    this.dots.forEach(dot => {
      dot.classList.remove(constants.active);
    });
  }

  updateDotActiveClass(dot) {
    this.dots[dot].classList.add(constants.active)
  }

  removeSlideActiveClass() {
    this.slides.forEach(slide => {
      slide.classList.remove(constants.active);
    });
  }

  updateSlideActiveClass(slide) {
    this.slides[slide].classList.add(constants.active);
  }
}

Carousel.DEFAULTS = DEFAULTS;
