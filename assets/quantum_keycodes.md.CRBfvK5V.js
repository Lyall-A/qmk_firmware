import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.Clpp4x2N.js";
const __pageData = JSON.parse('{"title":"Quantum Keycodes","description":"","frontmatter":{},"headers":[],"relativePath":"quantum_keycodes.md","filePath":"quantum_keycodes.md"}');
const _sfc_main = { name: "quantum_keycodes.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="quantum-keycodes" tabindex="-1">Quantum Keycodes <a class="header-anchor" href="#quantum-keycodes" aria-label="Permalink to &quot;Quantum Keycodes&quot;">​</a></h1><p>Quantum keycodes allow for easier customization of your keymap than the basic ones provide, without having to define custom actions.</p><p>All keycodes within quantum are numbers between <code>0x0000</code> and <code>0xFFFF</code>. Within your <code>keymap.c</code> it may look like you have functions and other special cases, but ultimately the C preprocessor will translate those into a single 4 byte integer. QMK has reserved <code>0x0000</code> through <code>0x00FF</code> for standard keycodes. These are keycodes such as <code>KC_A</code>, <code>KC_1</code>, and <code>KC_LCTL</code>, which are basic keys defined in the USB HID specification.</p><p>On this page we have documented keycodes between <code>0x00FF</code> and <code>0xFFFF</code> which are used to implement advanced quantum features. If you define your own custom keycodes they will be put into this range as well.</p><h2 id="qmk-keycodes" tabindex="-1">QMK Keycodes <a class="header-anchor" href="#qmk-keycodes" aria-label="Permalink to &quot;QMK Keycodes {#qmk-keycodes}&quot;">​</a></h2><table><thead><tr><th>Key</th><th>Aliases</th><th>Description</th></tr></thead><tbody><tr><td><code>QK_BOOTLOADER</code></td><td><code>QK_BOOT</code></td><td>Put the keyboard into bootloader mode for flashing</td></tr><tr><td><code>QK_DEBUG_TOGGLE</code></td><td><code>DB_TOGG</code></td><td>Toggle debug mode</td></tr><tr><td><code>QK_CLEAR_EEPROM</code></td><td><code>EE_CLR</code></td><td>Reinitializes the keyboard&#39;s EEPROM (persistent memory)</td></tr><tr><td><code>QK_MAKE</code></td><td></td><td>Sends <code>qmk compile -kb (keyboard) -km (keymap)</code>, or <code>qmk flash</code> if shift is held. Puts keyboard into bootloader mode if shift &amp; control are held</td></tr><tr><td><code>QK_REBOOT</code></td><td><code>QK_RBT</code></td><td>Resets the keyboard. Does not load the bootloader</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Note: <code>QK_MAKE</code> requires <code>#define ENABLE_COMPILE_KEYCODE</code> in your config.h to function.</p></div>', 7);
const _hoisted_8 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_8);
}
const quantum_keycodes = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  quantum_keycodes as default
};
