import __nuxt_component_0$1 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar" }, _attrs))} data-v-baced89c><div class="container navbar-container" data-v-baced89c>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "logo"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`My Portfolio`);
      } else {
        return [
          createTextVNode("My Portfolio")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="nav-links" data-v-baced89c>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/projects",
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Projects`);
      } else {
        return [
          createTextVNode("Projects")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></nav>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-baced89c"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=Navbar.vue.mjs.map
