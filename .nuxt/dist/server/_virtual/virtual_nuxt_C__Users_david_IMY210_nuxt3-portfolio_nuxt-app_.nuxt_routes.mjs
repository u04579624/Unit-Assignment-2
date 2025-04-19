function handleHotUpdate(_router, _generateRoutes) {
}
const _routes = [
  {
    name: "index",
    path: "/",
    component: () => import("../pages/index.vue.mjs")
  },
  {
    name: "contact",
    path: "/contact",
    component: () => import("../pages/contact.vue.mjs")
  },
  {
    name: "projects",
    path: "/projects",
    component: () => import("../pages/projects.vue.mjs")
  }
];
export {
  _routes as default,
  handleHotUpdate
};
//# sourceMappingURL=virtual_nuxt_C__Users_david_IMY210_nuxt3-portfolio_nuxt-app_.nuxt_routes.mjs.map
