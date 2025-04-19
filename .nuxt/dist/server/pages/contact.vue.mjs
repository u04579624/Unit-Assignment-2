import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-1cb05256><h1 data-v-1cb05256>Contact Me</h1><form name="contact" method="POST" data-netlify="true" data-v-1cb05256><input type="hidden" name="form-name" value="contact" data-v-1cb05256><div class="form-group" data-v-1cb05256><label for="name" data-v-1cb05256>Name</label><input type="text" id="name" name="name" required data-v-1cb05256></div><div class="form-group" data-v-1cb05256><label for="email" data-v-1cb05256>Email</label><input type="email" id="email" name="email" required data-v-1cb05256></div><div class="form-group" data-v-1cb05256><label for="message" data-v-1cb05256>Message</label><textarea id="message" name="message" rows="5" required data-v-1cb05256></textarea></div><button type="submit" data-v-1cb05256>Send Message</button></form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1cb05256"]]);
export {
  contact as default
};
//# sourceMappingURL=contact.vue.mjs.map
