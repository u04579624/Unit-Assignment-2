import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import _imports_0 from "../assets/ProfilePic.JPG.mjs";
import CatFactWidget from "../components/CatFactWidget.vue.mjs";
import WeatherWidget from "../components/WeatherWidget.vue.mjs";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-0ef900c8><section class="hero" data-v-0ef900c8><div class="hero-content" data-v-0ef900c8><h1 data-v-0ef900c8>David</h1><p class="subtitle" data-v-0ef900c8>Web Developer &amp; Designer</p><p data-v-0ef900c8> I&#39;m a passionate web developer specializing in modern frontend technologies. Currently studying at the University of Pretoria, I focus on creating accessible and performant web experiences. </p></div><div class="hero-image" data-v-0ef900c8><img${ssrRenderAttr("src", _imports_0)} alt="My Profile Picture" data-v-0ef900c8></div></section><section class="api-section" data-v-0ef900c8><h2 data-v-0ef900c8>API Integrations</h2><div class="api-grid" data-v-0ef900c8>`);
      _push(ssrRenderComponent(CatFactWidget, null, null, _parent));
      _push(ssrRenderComponent(WeatherWidget, null, null, _parent));
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0ef900c8"]]);
export {
  index as default
};
//# sourceMappingURL=index.vue.mjs.map
