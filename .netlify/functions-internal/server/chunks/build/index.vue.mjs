import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';

const _imports_0 = "" + __buildAssetsURL("ProfilePic.BxCs0Du5.JPG");

const _sfc_main$2 = {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CatFactWidget.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CatFactWidget = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3ac03656"]]);

const _sfc_main$1 = {
  __name: "WeatherWidget",
  __ssrInlineRender: true,
  setup(__props) {
    const weatherData = ref(null);
    const loading = ref(true);
    const error = ref(null);
    const city = ref("Pretoria");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "weather-widget" }, _attrs))} data-v-5d19ac7e>`);
      if (loading.value) {
        _push(`<div data-v-5d19ac7e>Loading weather data...</div>`);
      } else if (error.value) {
        _push(`<div data-v-5d19ac7e>${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<div class="weather-content" data-v-5d19ac7e><div class="location-input" data-v-5d19ac7e><input type="text"${ssrRenderAttr("value", city.value)} placeholder="Enter city name" data-v-5d19ac7e><button data-v-5d19ac7e>Search</button></div>`);
        if (weatherData.value) {
          _push(`<div class="weather-info" data-v-5d19ac7e><div class="temperature" data-v-5d19ac7e>${ssrInterpolate(Math.round(weatherData.value.main.temp))}°C</div><div data-v-5d19ac7e>${ssrInterpolate(weatherData.value.weather[0].main)}</div><div data-v-5d19ac7e>Humidity: ${ssrInterpolate(weatherData.value.main.humidity)}%</div><div data-v-5d19ac7e>Wind: ${ssrInterpolate(Math.round(weatherData.value.wind.speed * 3.6))} km/h</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WeatherWidget.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const WeatherWidget = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5d19ac7e"]]);

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

export { index as default };
//# sourceMappingURL=index.vue.mjs.map
