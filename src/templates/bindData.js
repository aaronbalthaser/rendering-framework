import dot from 'dot';

const bindData = (template, options = {}) => {
  const { data, nodes } = options;
  const templateFn = dot.template(template);

  return nodes
    ? document.createRange().createContextualFragment(templateFn(data))
    : templateFn(data);
};

export default bindData;
