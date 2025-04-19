import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WeatherWidget.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WeatherWidget = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5d19ac7e"]]);
export {
  WeatherWidget as default
};
//# sourceMappingURL=WeatherWidget.vue.mjs.map
