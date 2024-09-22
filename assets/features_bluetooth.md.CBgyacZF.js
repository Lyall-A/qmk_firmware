import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.Clpp4x2N.js";
const __pageData = JSON.parse('{"title":"Bluetooth","description":"","frontmatter":{},"headers":[],"relativePath":"features/bluetooth.md","filePath":"features/bluetooth.md"}');
const _sfc_main = { name: "features/bluetooth.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="bluetooth" tabindex="-1">Bluetooth <a class="header-anchor" href="#bluetooth" aria-label="Permalink to &quot;Bluetooth&quot;">​</a></h1><h2 id="bluetooth-known-supported-hardware" tabindex="-1">Bluetooth Known Supported Hardware <a class="header-anchor" href="#bluetooth-known-supported-hardware" aria-label="Permalink to &quot;Bluetooth Known Supported Hardware&quot;">​</a></h2><p>Currently Bluetooth support is limited to AVR based chips. For Bluetooth 2.1, QMK has support for RN-42 modules. For more recent BLE protocols, currently only the Adafruit Bluefruit SPI Friend is directly supported. BLE is needed to connect to iOS devices. Note iOS does not support mouse input.</p><table><thead><tr><th>Board</th><th>Bluetooth Protocol</th><th>Connection Type</th><th>rules.mk</th><th>Bluetooth Chip</th></tr></thead><tbody><tr><td>Roving Networks RN-42 (Sparkfun Bluesmirf)</td><td>Bluetooth Classic</td><td>UART</td><td><code>BLUETOOTH_DRIVER = rn42</code></td><td>RN-42</td></tr><tr><td><a href="https://www.adafruit.com/product/2633" target="_blank" rel="noreferrer">Bluefruit LE SPI Friend</a></td><td>Bluetooth Low Energy</td><td>SPI</td><td><code>BLUETOOTH_DRIVER = bluefruit_le</code></td><td>nRF51822</td></tr></tbody></table><p>Not Supported Yet but possible:</p><ul><li><a href="https://www.adafruit.com/product/2479" target="_blank" rel="noreferrer">Bluefruit LE UART Friend</a>. <a href="https://github.com/tmk/tmk_keyboard/issues/514" target="_blank" rel="noreferrer">Possible tmk implementation found in</a></li><li>HC-05 boards flashed with RN-42 firmware. They apparently both use the CSR BC417 Chip. Flashing it with RN-42 firmware gives it HID capability.</li><li>Sparkfun Bluetooth Mate</li><li>HM-13 based boards</li></ul><h3 id="adafruit-ble-spi-friend" tabindex="-1">Adafruit BLE SPI Friend <a class="header-anchor" href="#adafruit-ble-spi-friend" aria-label="Permalink to &quot;Adafruit BLE SPI Friend&quot;">​</a></h3><p>Currently The only bluetooth chipset supported by QMK is the Adafruit Bluefruit SPI Friend. It&#39;s a Nordic nRF51822 based chip running Adafruit&#39;s custom firmware. Data is transmitted via Adafruit&#39;s SDEP over Hardware SPI. The <a href="https://www.adafruit.com/product/2829" target="_blank" rel="noreferrer">Feather 32u4 Bluefruit LE</a> is supported as it&#39;s an AVR mcu connected via SPI to the Nordic BLE chip with Adafruit firmware. If Building a custom board with the SPI friend it would be easiest to just use the pin selection that the 32u4 feather uses but you can change the pins in the config.h options with the following defines:</p><ul><li><code>#define BLUEFRUIT_LE_RST_PIN D4</code></li><li><code>#define BLUEFRUIT_LE_CS_PIN B4</code></li><li><code>#define BLUEFRUIT_LE_IRQ_PIN E6</code></li></ul><p>A Bluefruit UART friend can be converted to an SPI friend, however this <a href="https://github.com/qmk/qmk_firmware/issues/2274" target="_blank" rel="noreferrer">requires</a> some reflashing and soldering directly to the MDBT40 chip.</p><h2 id="bluetooth-rules-mk-options" tabindex="-1">Bluetooth Rules.mk Options <a class="header-anchor" href="#bluetooth-rules-mk-options" aria-label="Permalink to &quot;Bluetooth Rules.mk Options&quot;">​</a></h2><p>The currently supported Bluetooth chipsets do not support <a href="./../reference_glossary#n-key-rollover-nkro">N-Key Rollover (NKRO)</a>, so <code>rules.mk</code> must contain <code>NKRO_ENABLE = no</code>.</p><p>Add the following to your <code>rules.mk</code>:</p><div class="language-make vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">make</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">BLUETOOTH_ENABLE = yes</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">BLUETOOTH_DRIVER = bluefruit_le </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or rn42</span></span></code></pre></div><h2 id="bluetooth-keycodes" tabindex="-1">Bluetooth Keycodes <a class="header-anchor" href="#bluetooth-keycodes" aria-label="Permalink to &quot;Bluetooth Keycodes&quot;">​</a></h2><p>This is used when multiple keyboard outputs can be selected. Currently this only allows for switching between USB and Bluetooth on keyboards that support both.</p><table><thead><tr><th>Key</th><th>Aliases</th><th>Description</th></tr></thead><tbody><tr><td><code>QK_OUTPUT_NEXT</code></td><td><code>OU_NEXT</code>, <code>OU_AUTO</code></td><td>Automatically switch between USB and Bluetooth</td></tr><tr><td><code>QK_OUTPUT_USB</code></td><td><code>OU_USB</code></td><td>USB only</td></tr><tr><td><code>QK_OUTPUT_BLUETOOTH</code></td><td><code>OU_BT</code></td><td>Bluetooth only</td></tr></tbody></table>', 17);
const _hoisted_18 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_18);
}
const bluetooth = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  bluetooth as default
};
