export const element = ({ name, className, id, classList, attributes, text, node }) => {
  let doc = document;
  let el;

  if (!name) {
    el = null
  } else {
    el = doc.createElement(name);
  }

  if (id) {
    el.id = id;
  }

  if (className) {
    el.classList.add(className);
  }

  if (classList && classList.length) {
    classList.forEach(className => {
      el.classList.add(className);
    });
  }

  if (attributes) {
    for (let property in attributes) {
      el.setAttribute(property, attributes[property]);
    }
  }

  if (text) {
    el.innerHTML = text;
  }

  if (node) {
    node.appendChild(el);
  }

  return el;
};