import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.Clpp4x2N.js";
const __pageData = JSON.parse('{"title":"AW20216S Driver","description":"","frontmatter":{},"headers":[],"relativePath":"drivers/aw20216s.md","filePath":"drivers/aw20216s.md"}');
const _sfc_main = { name: "drivers/aw20216s.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="aw20216s-driver" tabindex="-1">AW20216S Driver <a class="header-anchor" href="#aw20216s-driver" aria-label="Permalink to &quot;AW20216S Driver {#aw20216s-driver}&quot;">​</a></h1><p>SPI 18x12 LED matrix driver by Awinic. Supports a maximum of four drivers, each controlling up to 216 single-color LEDs, or 72 RGB LEDs.</p><p><a href="https://doc.awinic.com/doc/20230609wm/b6a9c70b-e1bd-495b-925f-bcbed3fc2620.pdf" target="_blank" rel="noreferrer">AW20216S Datasheet</a></p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage {#usage}&quot;">​</a></h2><p>The AW20216S driver code is automatically included if you are using the <a href="./../features/rgb_matrix">RGB Matrix</a> feature with the <code>aw20216s</code> driver set, and you would use those APIs instead.</p><p>However, if you need to use the driver standalone, add this to your <code>rules.mk</code>:</p><div class="language-make vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">make</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">COMMON_VPATH += </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DRIVER_PATH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/led</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SRC += aw20216s.c</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SPI_DRIVER_REQUIRED = yes</span></span></code></pre></div><h2 id="basic-configuration" tabindex="-1">Basic Configuration <a class="header-anchor" href="#basic-configuration" aria-label="Permalink to &quot;Basic Configuration {#basic-configuration}&quot;">​</a></h2><p>Add the following to your <code>config.h</code>:</p><table><thead><tr><th>Define</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>AW20216S_CS_PIN_1</code></td><td><em>Not defined</em></td><td>The GPIO pin connected to the first driver&#39;s Chip Select pin</td></tr><tr><td><code>AW20216S_CS_PIN_2</code></td><td><em>Not defined</em></td><td>The GPIO pin connected to the second driver&#39;s Chip Select pin</td></tr><tr><td><code>AW20216S_EN_PIN</code></td><td><em>Not defined</em></td><td>The GPIO pin connected to the drivers&#39; Enable pins</td></tr><tr><td><code>AW20216S_SPI_MODE</code></td><td><code>0</code></td><td>The SPI mode to use</td></tr><tr><td><code>AW20216S_SPI_DIVISOR</code></td><td><code>4</code></td><td>The SPI divisor to use</td></tr><tr><td><code>AW20216S_SCALING_MAX</code></td><td><code>150</code></td><td>The scaling value</td></tr><tr><td><code>AW20216S_GLOBAL_CURRENT_MAX</code></td><td><code>150</code></td><td>The global current control value</td></tr></tbody></table><h3 id="global-current-control" tabindex="-1">Global Current Control <a class="header-anchor" href="#global-current-control" aria-label="Permalink to &quot;Global Current Control {#global-current-control}&quot;">​</a></h3><p>This setting controls the current sunk by the <code>CSx</code> pins, from 0 to 255. To adjust it, add the following to your <code>config.h</code>:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AW20216S_GLOBAL_CURRENT_MAX</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 150</span></span></code></pre></div><h2 id="arm-configuration" tabindex="-1">ARM/ChibiOS Configuration <a class="header-anchor" href="#arm-configuration" aria-label="Permalink to &quot;ARM/ChibiOS Configuration {#arm-configuration}&quot;">​</a></h2><p>Depending on the ChibiOS board configuration, you may need to <a href="./spi#arm-configuration">enable and configure SPI</a> at the keyboard level.</p><h2 id="led-mapping" tabindex="-1">LED Mapping <a class="header-anchor" href="#led-mapping" aria-label="Permalink to &quot;LED Mapping {#led-mapping}&quot;">​</a></h2><p>In order to use this driver, each output must be mapped to an LED index, by adding the following to your <code>&lt;keyboardname&gt;.c</code>:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> aw20216s_led_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PROGMEM </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">g_aw20216s_leds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[AW20216S_LED_COUNT] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Driver</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *   |  R          G          B */</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, SW1_CS1,   SW1_CS2,   SW1_CS3},</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // etc...</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>In this example, the first LED index on driver 0 has its red channel on <code>SW1_CS1</code>, green on <code>SW1_CS2</code> and blue on <code>SW1_CS3</code>.</p><p>These values correspond to the matrix locations as shown in the datasheet on page 16, figure 16.</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API {#api}&quot;">​</a></h2><h3 id="api-aw20216s-led-t" tabindex="-1"><code>struct aw20216s_led_t</code> <a class="header-anchor" href="#api-aw20216s-led-t" aria-label="Permalink to &quot;`struct aw20216s_led_t` {#api-aw20216s-led-t}&quot;">​</a></h3><p>Contains the PWM register addresses for a single RGB LED.</p><h4 id="api-aw20216s-led-t-members" tabindex="-1">Members <a class="header-anchor" href="#api-aw20216s-led-t-members" aria-label="Permalink to &quot;Members {#api-aw20216s-led-t-members}&quot;">​</a></h4><ul><li><code>uint8_t driver</code><br> The driver index of the LED, from 0 to 3.</li><li><code>uint8_t r</code><br> The output PWM register address for the LED&#39;s red channel.</li><li><code>uint8_t g</code><br> The output PWM register address for the LED&#39;s green channel.</li><li><code>uint8_t b</code><br> The output PWM register address for the LED&#39;s blue channel.</li></ul><hr><h3 id="api-aw20216s-init" tabindex="-1"><code>void aw20216s_init(pin_t cs_pin)</code> <a class="header-anchor" href="#api-aw20216s-init" aria-label="Permalink to &quot;`void aw20216s_init(pin_t cs_pin)` {#api-aw20216s-init}&quot;">​</a></h3><p>Initialize the LED driver. This function should be called first.</p><h4 id="api-aw20216s-init-arguments" tabindex="-1">Arguments <a class="header-anchor" href="#api-aw20216s-init-arguments" aria-label="Permalink to &quot;Arguments {#api-aw20216s-init-arguments}&quot;">​</a></h4><ul><li><code>pin_t cs_pin</code><br> The GPIO connected to the Chip Select pin of the LED driver to initialize.</li></ul><hr><h3 id="api-aw20216s-set-color" tabindex="-1"><code>void aw20216s_set_color(int index, uint8_t red, uint8_t green, uint8_t blue)</code> <a class="header-anchor" href="#api-aw20216s-set-color" aria-label="Permalink to &quot;`void aw20216s_set_color(int index, uint8_t red, uint8_t green, uint8_t blue)` {#api-aw20216s-set-color}&quot;">​</a></h3><p>Set the color of a single LED. This function does not immediately update the LEDs; call <code>aw20216s_update_pwm_buffers()</code> after you are finished.</p><h4 id="api-aw20216s-set-color-arguments" tabindex="-1">Arguments <a class="header-anchor" href="#api-aw20216s-set-color-arguments" aria-label="Permalink to &quot;Arguments {#api-aw20216s-set-color-arguments}&quot;">​</a></h4><ul><li><code>int index</code><br> The LED index (ie. the index into the <code>g_aw20216s_leds</code> array).</li><li><code>uint8_t red</code><br> The red value to set.</li><li><code>uint8_t green</code><br> The green value to set.</li><li><code>uint8_t blue</code><br> The blue value to set.</li></ul><hr><h3 id="api-aw20216s-set-color-all" tabindex="-1"><code>void aw20216s_set_color_all(uint8_t red, uint8_t green, uint8_t blue)</code> <a class="header-anchor" href="#api-aw20216s-set-color-all" aria-label="Permalink to &quot;`void aw20216s_set_color_all(uint8_t red, uint8_t green, uint8_t blue)` {#api-aw20216s-set-color-all}&quot;">​</a></h3><p>Set the color of all LEDs.</p><h4 id="api-aw20216s-set-color-all-arguments" tabindex="-1">Arguments <a class="header-anchor" href="#api-aw20216s-set-color-all-arguments" aria-label="Permalink to &quot;Arguments {#api-aw20216s-set-color-all-arguments}&quot;">​</a></h4><ul><li><code>uint8_t red</code><br> The red value to set.</li><li><code>uint8_t green</code><br> The green value to set.</li><li><code>uint8_t blue</code><br> The blue value to set.</li></ul><hr><h3 id="api-aw20216s-update-pwm-buffers" tabindex="-1"><code>void aw20216s_update_pwm_buffers(pin_t cs_pin, uint8_t index)</code> <a class="header-anchor" href="#api-aw20216s-update-pwm-buffers" aria-label="Permalink to &quot;`void aw20216s_update_pwm_buffers(pin_t cs_pin, uint8_t index)` {#api-aw20216s-update-pwm-buffers}&quot;">​</a></h3><p>Flush the PWM values to the LED driver.</p><h4 id="api-aw20216s-update-pwm-buffers-arguments" tabindex="-1">Arguments <a class="header-anchor" href="#api-aw20216s-update-pwm-buffers-arguments" aria-label="Permalink to &quot;Arguments {#api-aw20216s-update-pwm-buffers-arguments}&quot;">​</a></h4><ul><li><code>pin_t cs_pin</code><br> The GPIO connected to the Chip Select pin of the driver.</li><li><code>uint8_t index</code><br> The index of the driver.</li></ul>', 45);
const _hoisted_46 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_46);
}
const aw20216s = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  aw20216s as default
};
