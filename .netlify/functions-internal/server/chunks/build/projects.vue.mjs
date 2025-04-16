import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    const projects2 = [
      {
        title: "IMY 110 Website",
        description: "I made a website in one of my previous modules called IMY110, this Website was made for the rapper Dave, I had a signup form for his newsletter and a gallery of photos."
      },
      {
        title: "3D Room",
        description: "I made a 3D room in Blender, this is to date one of my favorite projects. I made the room with lighting and all sorts of smaller objects around the room, this took a while and I loved it."
      },
      {
        title: "Turing machine",
        description: "I  once had the bright idea of trying to code a turing machine, This was a very stupid idea but I worked through it and in the end I was able to add and change the variables to fit almost any truing machine."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-cbf9d4d3><h1 data-v-cbf9d4d3>My Projects</h1><div class="projects-grid" data-v-cbf9d4d3><!--[-->`);
      ssrRenderList(projects2, (project, index) => {
        _push(`<div class="project-card" data-v-cbf9d4d3><h2 data-v-cbf9d4d3>${ssrInterpolate(project.title)}</h2><p data-v-cbf9d4d3>${ssrInterpolate(project.description)}</p></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cbf9d4d3"]]);

export { projects as default };
//# sourceMappingURL=projects.vue.mjs.map
