import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.Clpp4x2N.js";
const __pageData = JSON.parse('{"title":"US ANSI Shifted Symbols","description":"","frontmatter":{},"headers":[],"relativePath":"keycodes_us_ansi_shifted.md","filePath":"keycodes_us_ansi_shifted.md"}');
const _sfc_main = { name: "keycodes_us_ansi_shifted.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="us-ansi-shifted-symbols" tabindex="-1">US ANSI Shifted Symbols <a class="header-anchor" href="#us-ansi-shifted-symbols" aria-label="Permalink to &quot;US ANSI Shifted Symbols&quot;">​</a></h1><p>These keycodes correspond to characters that are &quot;shifted&quot; on a standard US ANSI keyboard. They do not have keycodes of their own but are simply shortcuts for <code>LSFT(kc)</code>, and as such send a Left Shift with the unshifted keycode, not the symbol itself.</p><h2 id="caveats" tabindex="-1">Caveats <a class="header-anchor" href="#caveats" aria-label="Permalink to &quot;Caveats&quot;">​</a></h2><p>Unfortunately, these keycodes cannot be used in Mod-Taps or Layer-Taps, since any modifiers specified in the keycode are ignored.</p><p>Additionally, you may run into issues when using Remote Desktop Connection on Windows. Because these codes send shift very fast, Remote Desktop may miss the codes.</p><p>To fix this, open Remote Desktop Connection, click on &quot;Show Options&quot;, open the &quot;Local Resources&quot; tab. In the keyboard section, change the drop down to &quot;On this Computer&quot;. This will fix the issue, and allow the characters to work correctly.</p><h2 id="keycodes" tabindex="-1">Keycodes <a class="header-anchor" href="#keycodes" aria-label="Permalink to &quot;Keycodes&quot;">​</a></h2><table><thead><tr><th>Key</th><th>Aliases</th><th>Description</th></tr></thead><tbody><tr><td><code>KC_TILDE</code></td><td><code>KC_TILD</code></td><td><code>~</code></td></tr><tr><td><code>KC_EXCLAIM</code></td><td><code>KC_EXLM</code></td><td><code>!</code></td></tr><tr><td><code>KC_AT</code></td><td></td><td><code>@</code></td></tr><tr><td><code>KC_HASH</code></td><td></td><td><code>#</code></td></tr><tr><td><code>KC_DOLLAR</code></td><td><code>KC_DLR</code></td><td><code>$</code></td></tr><tr><td><code>KC_PERCENT</code></td><td><code>KC_PERC</code></td><td><code>%</code></td></tr><tr><td><code>KC_CIRCUMFLEX</code></td><td><code>KC_CIRC</code></td><td><code>^</code></td></tr><tr><td><code>KC_AMPERSAND</code></td><td><code>KC_AMPR</code></td><td><code>&amp;</code></td></tr><tr><td><code>KC_ASTERISK</code></td><td><code>KC_ASTR</code></td><td><code>*</code></td></tr><tr><td><code>KC_LEFT_PAREN</code></td><td><code>KC_LPRN</code></td><td><code>(</code></td></tr><tr><td><code>KC_RIGHT_PAREN</code></td><td><code>KC_RPRN</code></td><td><code>)</code></td></tr><tr><td><code>KC_UNDERSCORE</code></td><td><code>KC_UNDS</code></td><td><code>_</code></td></tr><tr><td><code>KC_PLUS</code></td><td></td><td><code>+</code></td></tr><tr><td><code>KC_LEFT_CURLY_BRACE</code></td><td><code>KC_LCBR</code></td><td><code>{</code></td></tr><tr><td><code>KC_RIGHT_CURLY_BRACE</code></td><td><code>KC_RCBR</code></td><td><code>}</code></td></tr><tr><td><code>KC_PIPE</code></td><td></td><td><code>|</code></td></tr><tr><td><code>KC_COLON</code></td><td><code>KC_COLN</code></td><td><code>:</code></td></tr><tr><td><code>KC_DOUBLE_QUOTE</code></td><td><code>KC_DQUO</code>, <code>KC_DQT</code></td><td><code>&quot;</code></td></tr><tr><td><code>KC_LEFT_ANGLE_BRACKET</code></td><td><code>KC_LABK</code>, <code>KC_LT</code></td><td><code>&lt;</code></td></tr><tr><td><code>KC_RIGHT_ANGLE_BRACKET</code></td><td><code>KC_RABK</code>, <code>KC_GT</code></td><td><code>&gt;</code></td></tr><tr><td><code>KC_QUESTION</code></td><td><code>KC_QUES</code></td><td><code>?</code></td></tr></tbody></table>', 8);
const _hoisted_9 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_9);
}
const keycodes_us_ansi_shifted = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  keycodes_us_ansi_shifted as default
};
