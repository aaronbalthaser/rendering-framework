## Vanilla Javascript SPA Rendering Framework

This project is a Vanilla JS (simple) single page application framework including base classes for rendering pages and components utilizing class inheritance. It also contains a simple API for routing.

My inspiration for this project was seeded from a recollection of some work I saw done awhile back in some depreciated code at one of my jobs as a Frontend Developer. I never had the time to learn what the code was actually doing but one of my work associates was able to explain conceptually the developers intent. The project was my attempt to mirror the same concepts since I always regretted not having the time to really learn her code.

## Installation

Make your life easier and setup NVM for managing node versions. By doing that all you need to do is run "nvm use" to avoid npm version issues.

## Run Development
```
nvm use
```
```
yarn install OR npm install
```
```
yarn dev OR npm dev
```

## Production
```
yarn build OR npm build
```

## ESLint
```
yarn lint OR npm lint
```

## Pages & Routing

The page and routing API is simple. A current example is illustrated in the app.js file and was setup using routes for the home, about and contact pages. Adding a new page and route is simple:

### Route

Add the new route to the app.js file.
```
router.route('/whatever', 'whatever', () => {
  WhateverPage();
});
```

### Route Function
Add an associated file to the pages directory with the following code.

```
export const WhateverPage = () => {

  const page = new Page({
    name: 'whatever'
  });

  page.render();

  
  /**  Inside here do any page related stuff including rendering sub components. An example of this can be seen in the home.js file found in the pages directory. **/
  
  page.show();
};

```

### Route Access
Somewhere in the application add a link.

```
<a href="#/whatever">Whatever Page Access by clicking Me :)</a>
```

## Components

Adding a new component is also simple. In the components file there are several examples. Mainly all you need to do is make sure the new component extends the component class and has an associated template for HTML rendering and data binding. The below steps show how the carousel component was created.

Add the required HTML. I used Dot JS as a templating system since my reasons for this project was not to learn how to build a JavaScript templating library.

```
<div class="slide-container">
{{ for(let obj of it) { }}
  <div class="slide">
    <img class="slide-image" src="{{=obj.urls.full}}" alt="{{=obj.id}}" />
  </div>
{{ } }}
  <div class="slide-controls">
    <div data-direction="lt" class="lt-slide-control-container">
      <span data-direction="lt" class="lt">
        <i data-direction="lt" class="fas fa-chevron-left"></i>
      </span>
    </div>
    <div data-direction="rt" class="rt-slide-control-container">
      <span data-direction="rt" class="rt">
        <i data-direction="rt" class="fas fa-chevron-right"></i>
      </span>
    </div>
  </div>
  <div class="slide-dots">
    {{ for(var i=0; i < it.length; i++) { }}
      <span data-index="{{=i}}" class="slide-dot"></span>
    {{ } }}
  </div>
</div>
```

Create a component with the required method overrides. The render, show and initializeEvents methods are required as overrides. When the component is instantiated the render method must be called for template rendering and data binding to occur. See step 3 below for the instantiation process. !! IMPORTANT !! Take note that the DEFAULTS object for the component class has a name key. This name key must have a value that matches the name of the template file in the templates directory because the renderer class will use that value to find the proper template file.

Typically all the event listeners would be initialized in the initializeEvents method but this is not a hard rule.

```
import { Component } from '../Component';

import './Carousel.scss';

const DEFAULTS = {
  containerId: 'main',
  name: 'carousel'
};

export class Carousel extends Component {
  constructor(options) {
    super(options);
  }

  render() {
    super.render.apply(this, arguments);
  }

  show() {
    super.show.apply(this, arguments);
  }

  initializeEvents() {
    // Initialize event listeners
  }

  // Carousel specific methods below:
}

Carousel.DEFAULTS = DEFAULTS;

```

Instantiating the class as follows is all that is left. An important thing to note is the container id is part of the home page component. Because the home page component is rendered first and the carousel component is a sub component this id can be found in the DOM when the renderer class queries the DOM and is then used as the components container. 

When the render method is called on the class instance the carousel data is passed into the method which is handled in the renderer class when data binding occurs. The show method must be called following the render method as it will allow the components to be displayed in the DOM after the rendering process has completed.

```
const carousel = new Carousel({
  containerId: 'carousel'
});

carousel.render({ data });
carousel.show();

```

## End

This was only a weekend project for fun and learning. I wanted to play around with class inheritance and finding a way to render HTML in the DOM. This was the result. 

This system has many limitations and issues I found along the way. Maybe if I have time, God willing at some point I will express my experiences with what I've learned.