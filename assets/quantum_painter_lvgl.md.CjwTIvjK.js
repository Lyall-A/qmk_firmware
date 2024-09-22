import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.Clpp4x2N.js";
const __pageData = JSON.parse('{"title":"Quantum Painter LVGL Integration","description":"","frontmatter":{},"headers":[],"relativePath":"quantum_painter_lvgl.md","filePath":"quantum_painter_lvgl.md"}');
const _sfc_main = { name: "quantum_painter_lvgl.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="lvgl" tabindex="-1">Quantum Painter LVGL Integration <a class="header-anchor" href="#lvgl" aria-label="Permalink to &quot;Quantum Painter LVGL Integration {#lvgl}&quot;">​</a></h1><p>LVGL (Light and Versatile Graphics Library) is an open-source graphics library providing everything you need to create an embedded GUI for your board with easy-to-use graphical elements.</p><p>LVGL integrates with <a href="./quantum_painter">Quantum Painter&#39;s</a> API and drivers to render to the display, the hardware supported by Quantum Painter is also supported by LVGL.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Keep in mind that enabling the LVGL integration has a big impact in firmware size, it is recommeded to use a supported MCU with &gt;256 kB of flash space.</p></div><p>To learn more about LVGL and how to use it please take a look at their <a href="https://docs.lvgl.io/8.2/intro/" target="_blank" rel="noreferrer">official documentation</a></p><h2 id="lvgl-enabling" tabindex="-1">Enabling LVGL <a class="header-anchor" href="#lvgl-enabling" aria-label="Permalink to &quot;Enabling LVGL {#lvgl-enabling}&quot;">​</a></h2><p>To enable LVGL to be built into your firmware, add the following to <code>rules.mk</code>:</p><div class="language-make vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">make</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">QUANTUM_PAINTER_ENABLE = yes</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">QUANTUM_PAINTER_DRIVERS = ......</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">QUANTUM_PAINTER_LVGL_INTEGRATION = yes</span></span></code></pre></div><p>To configure the Quantum Painter Display Drivers please read the <a href="./quantum_painter#quantum-painter-drivers">Quantum Painter Display Drivers</a> section.</p><h2 id="lvgl-api" tabindex="-1">Quantum Painter LVGL API <a class="header-anchor" href="#lvgl-api" aria-label="Permalink to &quot;Quantum Painter LVGL API {#lvgl-api}&quot;">​</a></h2><h3 id="lvgl-api-init" tabindex="-1">Quantum Painter LVGL Attach <a class="header-anchor" href="#lvgl-api-init" aria-label="Permalink to &quot;Quantum Painter LVGL Attach {#lvgl-api-init}&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> qp_lvgl_attach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">painter_device_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> device</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>The <code>qp_lvgl_attach</code> function is used to set up LVGL with the supplied display, and requires an already configured display.</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">static</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> painter_device_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> display;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> keyboard_post_init_kb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    display </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> qp_make_.......;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         // Create the display</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    qp_init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(display, QP_ROTATION_0);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   // Initialise the display</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">qp_lvgl_attach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(display)) {</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // Attach LVGL to the display</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ...Your code to draw</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">           // Run LVGL specific code to draw</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>To init. the display please read the <a href="./quantum_painter#quantum-painter-api-init">Display Initialisation</a> section.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Attaching LVGL to a display means LVGL subsequently &quot;owns&quot; the display. Using standard Quantum Painter drawing operations with the display after LVGL attachment will likely result in display artifacts.</p></div><h3 id="lvgl-api-detach" tabindex="-1">Quantum Painter LVGL Detach <a class="header-anchor" href="#lvgl-api-detach" aria-label="Permalink to &quot;Quantum Painter LVGL Detach {#lvgl-api-detach}&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> qp_lvgl_detach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>The <code>qp_lvgl_detach</code> function stops the internal LVGL ticks and releases resources related to it.</p><h2 id="lvgl-configuring" tabindex="-1">Enabling/Disabling LVGL features <a class="header-anchor" href="#lvgl-configuring" aria-label="Permalink to &quot;Enabling/Disabling LVGL features {#lvgl-configuring}&quot;">​</a></h2><p>You can overwrite LVGL specific features in your <code>lv_conf.h</code> file.</p><h2 id="changing-the-lvgl-task-frequency" tabindex="-1">Changing the LVGL task frequency <a class="header-anchor" href="#changing-the-lvgl-task-frequency" aria-label="Permalink to &quot;Changing the LVGL task frequency&quot;">​</a></h2><p>When LVGL is running, your keyboard&#39;s responsiveness may decrease, causing missing keystrokes or encoder rotations, especially during the animation of dynamically-generated content. This occurs because LVGL operates as a scheduled task with a default task rate of five milliseconds. While a fast task rate is advantageous when LVGL is responsible for detecting and processing inputs, it can lead to excessive recalculations of displayed content, which may slow down QMK&#39;s matrix scanning. If you rely on QMK instead of LVGL for processing inputs, it can be beneficial to increase the time between calls to the LVGL task handler to better match your preferred display update rate. To do this, add this to your <code>config.h</code>:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> QP_LVGL_TASK_PERIOD</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 40</span></span></code></pre></div>', 24);
const _hoisted_25 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_25);
}
const quantum_painter_lvgl = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  quantum_painter_lvgl as default
};
