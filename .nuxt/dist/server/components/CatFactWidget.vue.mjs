import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "CatFactWidget",
  __ssrInlineRender: true,
  setup(__props) {
    const catFact = ref("");
    const loading = ref(true);
    const error = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cat-fact-widget" }, _attrs))} data-v-3ac03656>`);
      if (loading.value) {
        _push(`<div data-v-3ac03656>Loading cat fact...</div>`);
      } else if (error.value) {
        _push(`<div data-v-3ac03656>${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<div data-v-3ac03656><p data-v-3ac03656>${ssrInterpolate(catFact.value)}</p><button data-v-3ac03656>Get New Fact</button></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CatFactWidget.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CatFactWidget = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3ac03656"]]);
export {
  CatFactWidget as default
};
//# sourceMappingURL=CatFactWidget.vue.mjs.map
