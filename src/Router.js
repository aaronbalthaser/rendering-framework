export class Router {
  constructor() {
    this.routes = Object.create(null);
  }

  route(path, templateId, controller) {
    this.routes[path] = this.routes[path] || {
      templateId: templateId,
      controller: controller
    }
  }

  get(path, callback) {
    callback(this.routes[path]);
  }
}
