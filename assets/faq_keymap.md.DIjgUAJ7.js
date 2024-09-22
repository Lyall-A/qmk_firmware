import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.Clpp4x2N.js";
const __pageData = JSON.parse('{"title":"Keymap FAQ","description":"","frontmatter":{},"headers":[],"relativePath":"faq_keymap.md","filePath":"faq_keymap.md"}');
const _sfc_main = { name: "faq_keymap.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="keymap-faq" tabindex="-1">Keymap FAQ <a class="header-anchor" href="#keymap-faq" aria-label="Permalink to &quot;Keymap FAQ&quot;">​</a></h1><p>This page covers questions people often have about keymaps. If you haven&#39;t you should read <a href="./keymap">Keymap Overview</a> first.</p><h2 id="what-keycodes-can-i-use" tabindex="-1">What Keycodes Can I Use? <a class="header-anchor" href="#what-keycodes-can-i-use" aria-label="Permalink to &quot;What Keycodes Can I Use?&quot;">​</a></h2><p>See <a href="./keycodes">Keycodes</a> for an index of keycodes available to you. These link to more extensive documentation when available.</p><p>Keycodes are actually defined in <a href="https://github.com/qmk/qmk_firmware/blob/master/quantum/keycode.h" target="_blank" rel="noreferrer">quantum/keycode.h</a>.</p><h2 id="what-are-the-default-keycodes" tabindex="-1">What Are the Default Keycodes? <a class="header-anchor" href="#what-are-the-default-keycodes" aria-label="Permalink to &quot;What Are the Default Keycodes?&quot;">​</a></h2><p>There are 3 standard keyboard layouts in use around the world- ANSI, ISO, and JIS. North America primarily uses ANSI, Europe and Africa primarily use ISO, and Japan uses JIS. Regions not mentioned typically use either ANSI or ISO. The keycodes corresponding to these layouts are shown here:</p><p><img src="https://i.imgur.com/5wsh5wM.png" alt="Keyboard Layout Image"></p><h2 id="how-can-i-make-custom-names-for-complex-keycodes" tabindex="-1">How Can I Make Custom Names For Complex Keycodes? <a class="header-anchor" href="#how-can-i-make-custom-names-for-complex-keycodes" aria-label="Permalink to &quot;How Can I Make Custom Names For Complex Keycodes?&quot;">​</a></h2><p>Sometimes, for readability&#39;s sake, it&#39;s useful to define custom names for some keycodes. People often define custom names using <code>#define</code>. For example:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FN_CAPS</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_FL, KC_CAPS)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ALT_TAB</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LALT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(KC_TAB)</span></span></code></pre></div><p>This will allow you to use <code>FN_CAPS</code> and <code>ALT_TAB</code> in your keymap, keeping it more readable.</p><h2 id="my-keymap-doesn-t-update-when-i-flash-it" tabindex="-1">My Keymap Doesn&#39;t Update When I Flash It <a class="header-anchor" href="#my-keymap-doesn-t-update-when-i-flash-it" aria-label="Permalink to &quot;My Keymap Doesn&#39;t Update When I Flash It&quot;">​</a></h2><p>This is usually due to VIA, and has to do with how it deals with keymaps.</p><p>On first run, the VIA code in the firmware will copy the keymap from flash memory into EEPROM so that it can be rewritten at runtime by the VIA app. From this point QMK will use the keymap stored in EEPROM instead of flash, and so updates to your <code>keymap.c</code> will not be reflected.</p><p>The simple fix for this is to clear the EEPROM. You can do this in several ways:</p><ul><li>Hold the Bootmagic key (usually top left/Escape) while plugging the board in, which will also place the board into bootloader mode; then unplug and replug the board.</li><li>Press the <code>QK_CLEAR_EEPROM</code>/<code>EE_CLR</code> keycode if it is accessible on your keymap.</li><li>Place the board into bootloader mode and hit the &quot;Clear EEPROM&quot; button. This may not be available for all bootloaders, and you may need to reflash the board afterwards.</li></ul><h2 id="some-of-my-keys-are-swapped-or-not-working" tabindex="-1">Some Of My Keys Are Swapped Or Not Working <a class="header-anchor" href="#some-of-my-keys-are-swapped-or-not-working" aria-label="Permalink to &quot;Some Of My Keys Are Swapped Or Not Working&quot;">​</a></h2><p>QMK has a couple of features which allow you to change the behavior of your keyboard on the fly. This includes, but is not limited to, swapping Ctrl/Caps, disabling GUI, swapping Alt/GUI, swapping Backspace/Backslash, disabling all keys, and other behavioral modifications.</p><p>Refer to the EEPROM clearing methods above, which should return those keys to normal operation. If that doesn&#39;t work, look here:</p><ul><li><a href="./keycodes_magic">Magic Keycodes</a></li><li><a href="./features/command">Command</a></li></ul><h2 id="the-menu-key-isn-t-working" tabindex="-1">The Menu Key Isn&#39;t Working <a class="header-anchor" href="#the-menu-key-isn-t-working" aria-label="Permalink to &quot;The Menu Key Isn&#39;t Working&quot;">​</a></h2><p>The key found on most modern keyboards that is located between <code>KC_RGUI</code> and <code>KC_RCTL</code> is actually called <code>KC_APP</code>. This is because when the key was invented, there was already a key named &quot;Menu&quot; in the HID specification, so for whatever reason, Microsoft chose to create a new key and call it &quot;Application&quot;.</p><h2 id="power-keys-aren-t-working" tabindex="-1">Power Keys Aren&#39;t Working <a class="header-anchor" href="#power-keys-aren-t-working" aria-label="Permalink to &quot;Power Keys Aren&#39;t Working&quot;">​</a></h2><p>Somewhat confusingly, there are two &quot;Power&quot; keycodes in QMK: <code>KC_KB_POWER</code> in the Keyboard/Keypad HID usage page, and <code>KC_SYSTEM_POWER</code> (or <code>KC_PWR</code>) in the Consumer page.</p><p>The former is only recognized on macOS, while the latter, <code>KC_SLEP</code> and <code>KC_WAKE</code> are supported by all three major operating systems, so it is recommended to use those instead. Under Windows, these keys take effect immediately, however on macOS they must be held down until a dialog appears.</p><h2 id="one-shot-modifier" tabindex="-1">One Shot Modifier <a class="header-anchor" href="#one-shot-modifier" aria-label="Permalink to &quot;One Shot Modifier&quot;">​</a></h2><p>Solves my personal &#39;the&#39; problem. I often got &#39;the&#39; or &#39;THe&#39; wrongly instead of &#39;The&#39;. One Shot Shift mitigates this for me. <a href="https://github.com/tmk/tmk_keyboard/issues/67" target="_blank" rel="noreferrer">https://github.com/tmk/tmk_keyboard/issues/67</a></p><h2 id="modifier-layer-stuck" tabindex="-1">Modifier/Layer Stuck <a class="header-anchor" href="#modifier-layer-stuck" aria-label="Permalink to &quot;Modifier/Layer Stuck&quot;">​</a></h2><p>Modifier keys or layers can be stuck unless layer switching is configured properly. For Modifier keys and layer actions you have to place <code>KC_TRNS</code> on same position of destination layer to unregister the modifier key or return to previous layer on release event.</p><ul><li><a href="https://github.com/tmk/tmk_core/blob/master/doc/keymap.md#31-momentary-switching" target="_blank" rel="noreferrer">https://github.com/tmk/tmk_core/blob/master/doc/keymap.md#31-momentary-switching</a></li><li><a href="https://geekhack.org/index.php?topic=57008.msg1492604#msg1492604" target="_blank" rel="noreferrer">https://geekhack.org/index.php?topic=57008.msg1492604#msg1492604</a></li><li><a href="https://github.com/tmk/tmk_keyboard/issues/248" target="_blank" rel="noreferrer">https://github.com/tmk/tmk_keyboard/issues/248</a></li></ul><h2 id="mechanical-lock-switch-support" tabindex="-1">Mechanical Lock Switch Support <a class="header-anchor" href="#mechanical-lock-switch-support" aria-label="Permalink to &quot;Mechanical Lock Switch Support&quot;">​</a></h2><p>This feature is for <em>mechanical lock switch</em> like <a href="https://deskthority.net/wiki/Alps_SKCL_Lock" target="_blank" rel="noreferrer">this Alps one</a>. You can enable it by adding this to your <code>config.h</code>:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LOCKING_SUPPORT_ENABLE</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LOCKING_RESYNC_ENABLE</span></span></code></pre></div><p>After enabling this feature use keycodes <code>KC_LCAP</code>, <code>KC_LNUM</code> and <code>KC_LSCR</code> in your keymap instead.</p><p>Old vintage mechanical keyboards occasionally have lock switches but modern ones don&#39;t have. <em><strong>You don&#39;t need this feature in most case and just use keycodes <code>KC_CAPS</code>, <code>KC_NUM</code> and <code>KC_SCRL</code>.</strong></em></p><h2 id="input-special-characters-other-than-ascii-like-cedille-c" tabindex="-1">Input Special Characters Other Than ASCII like Cédille &#39;Ç&#39; <a class="header-anchor" href="#input-special-characters-other-than-ascii-like-cedille-c" aria-label="Permalink to &quot;Input Special Characters Other Than ASCII like Cédille &#39;Ç&#39;&quot;">​</a></h2><p>See the <a href="./features/unicode">Unicode</a> feature.</p><h2 id="fn-key-on-macos" tabindex="-1"><code>Fn</code> Key on macOS <a class="header-anchor" href="#fn-key-on-macos" aria-label="Permalink to &quot;`Fn` Key on macOS&quot;">​</a></h2><p>Unlike most Fn keys, the one on Apple keyboards actually has its own keycode... sort of. It takes the place of the sixth keycode in a basic 6KRO HID report -- so an Apple keyboard is in fact only 5KRO.</p><p>It is technically possible to get QMK to send this key. However, doing so requires modification of the report format to add the state of the Fn key. Even worse, it is not recognized unless the keyboard&#39;s VID and PID match that of a real Apple keyboard. The legal issues that official QMK support for this feature may create mean it is unlikely to happen.</p><p>See <a href="https://github.com/qmk/qmk_firmware/issues/2179" target="_blank" rel="noreferrer">this issue</a> for detailed information.</p><h2 id="keys-supported-in-mac-osx" tabindex="-1">Keys Supported in Mac OSX? <a class="header-anchor" href="#keys-supported-in-mac-osx" aria-label="Permalink to &quot;Keys Supported in Mac OSX?&quot;">​</a></h2><p>You can know which keycodes are supported in OSX from this source code.</p><p><code>usb_2_adb_keymap</code> array maps Keyboard/Keypad Page usages to ADB scancodes(OSX internal keycodes).</p><p><a href="https://opensource.apple.com/source/IOHIDFamily/IOHIDFamily-606.1.7/IOHIDFamily/Cosmo_USB2ADB.c" target="_blank" rel="noreferrer">https://opensource.apple.com/source/IOHIDFamily/IOHIDFamily-606.1.7/IOHIDFamily/Cosmo_USB2ADB.c</a></p><p>And <code>IOHIDConsumer::dispatchConsumerEvent</code> handles Consumer page usages.</p><p><a href="https://opensource.apple.com/source/IOHIDFamily/IOHIDFamily-606.1.7/IOHIDFamily/IOHIDConsumer.cpp" target="_blank" rel="noreferrer">https://opensource.apple.com/source/IOHIDFamily/IOHIDFamily-606.1.7/IOHIDFamily/IOHIDConsumer.cpp</a></p><h2 id="jis-keys-in-mac-osx" tabindex="-1">JIS Keys in Mac OSX <a class="header-anchor" href="#jis-keys-in-mac-osx" aria-label="Permalink to &quot;JIS Keys in Mac OSX&quot;">​</a></h2><p>Japanese JIS keyboard specific keys like <code>無変換(Muhenkan)</code>, <code>変換(Henkan)</code>, <code>ひらがな(hiragana)</code> are not recognized on OSX. You can use <strong>Seil</strong> to enable those keys, try following options.</p><ul><li>Enable NFER Key on PC keyboard</li><li>Enable XFER Key on PC keyboard</li><li>Enable KATAKANA Key on PC keyboard</li></ul><p><a href="https://pqrs.org/osx/karabiner/seil.html" target="_blank" rel="noreferrer">https://pqrs.org/osx/karabiner/seil.html</a></p><h2 id="rn-42-bluetooth-doesn-t-work-with-karabiner" tabindex="-1">RN-42 Bluetooth Doesn&#39;t Work with Karabiner <a class="header-anchor" href="#rn-42-bluetooth-doesn-t-work-with-karabiner" aria-label="Permalink to &quot;RN-42 Bluetooth Doesn&#39;t Work with Karabiner&quot;">​</a></h2><p>Karabiner - Keymapping tool on Mac OSX - ignores inputs from RN-42 module by default. You have to enable this option to make Karabiner working with your keyboard. <a href="https://github.com/tekezo/Karabiner/issues/403#issuecomment-102559237" target="_blank" rel="noreferrer">https://github.com/tekezo/Karabiner/issues/403#issuecomment-102559237</a></p><p>See these for the detail of this problem. <a href="https://github.com/tmk/tmk_keyboard/issues/213" target="_blank" rel="noreferrer">https://github.com/tmk/tmk_keyboard/issues/213</a><a href="https://github.com/tekezo/Karabiner/issues/403" target="_blank" rel="noreferrer">https://github.com/tekezo/Karabiner/issues/403</a></p><h2 id="esc-and-on-a-single-key" tabindex="-1">Esc and <code>`</code> on a Single Key <a class="header-anchor" href="#esc-and-on-a-single-key" aria-label="Permalink to &quot;Esc and &lt;code&gt;&amp;#96;&lt;/code&gt; on a Single Key&quot;">​</a></h2><p>See the <a href="./features/grave_esc">Grave Escape</a> feature.</p><h2 id="eject-on-mac-osx" tabindex="-1">Eject on Mac OSX <a class="header-anchor" href="#eject-on-mac-osx" aria-label="Permalink to &quot;Eject on Mac OSX&quot;">​</a></h2><p><code>KC_EJCT</code> keycode works on OSX. <a href="https://github.com/tmk/tmk_keyboard/issues/250" target="_blank" rel="noreferrer">https://github.com/tmk/tmk_keyboard/issues/250</a> It seems Windows 10 ignores the code and Linux/Xorg recognizes but has no mapping by default.</p><p>Not sure what keycode Eject is on genuine Apple keyboard actually. HHKB uses <code>F20</code> for Eject key(<code>Fn+F</code>) on Mac mode but this is not same as Apple Eject keycode probably.</p><h2 id="what-are-real-and-weak-modifiers" tabindex="-1">What are &quot;Real&quot; and &quot;Weak&quot; modifiers? <a class="header-anchor" href="#what-are-real-and-weak-modifiers" aria-label="Permalink to &quot;What are &quot;Real&quot; and &quot;Weak&quot; modifiers?&quot;">​</a></h2><p>Real modifiers refer to the state of the real/physical modifier keys, while weak modifiers are the state of &quot;virtual&quot; or temporary modifiers which should not interfere with the internal state of the real modifier keys.</p><p>The real and weak modifier states are ORed together when the keyboard report is sent, so if you release a weak modifier while the same real modifier is still held, the report does not change:</p><ol><li><strong>Hold down physical Left Shift:</strong> Real mods now contains Left Shift, final state is Left Shift</li><li><strong>Add weak Left Shift:</strong> Weak mods now contains Left Shift, final state is Left Shift</li><li><strong>Remove weak Left Shift:</strong> Weak mods now contains nothing, final state is Left Shift</li><li><strong>Release physical Left Shift:</strong> Real mods now contains nothing, final state is nothing</li></ol>', 64);
const _hoisted_65 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_65);
}
const faq_keymap = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  faq_keymap as default
};
