import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.Clpp4x2N.js";
const __pageData = JSON.parse('{"title":"QMK Font Format","description":"","frontmatter":{},"headers":[],"relativePath":"quantum_painter_qff.md","filePath":"quantum_painter_qff.md"}');
const _sfc_main = { name: "quantum_painter_qff.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="qmk-font-format" tabindex="-1">QMK Font Format <a class="header-anchor" href="#qmk-font-format" aria-label="Permalink to &quot;QMK Font Format {#qmk-font-format}&quot;">​</a></h1><p>QMK uses a font format <em>(&quot;Quantum Font Format&quot; - QFF)</em> specifically for resource-constrained systems.</p><p>This format is capable of encoding 1-, 2-, 4-, and 8-bit-per-pixel greyscale- and palette-based images into a font. It also includes RLE for pixel data for some basic compression.</p><p>All integer values are in little-endian format.</p><p>The QFF is defined in terms of <em>blocks</em> -- each <em>block</em> contains a <em>header</em> and an optional <em>blob</em> of data. The <em>header</em> contains the block&#39;s <em>typeid</em>, and the length of the <em>blob</em> that follows. Each block type is denoted by a different <em>typeid</em> has its own block definition below. All blocks are defined as packed structs, containing zero padding between fields.</p><p>The general structure of the file is:</p><ul><li><em>Font descriptor block</em></li><li><em>ASCII glyph block</em> (optional, only if ASCII glyphs are included)</li><li><em>Unicode glyph block</em> (optional, only if Unicode glyphs are included)</li><li><em>Font palette block</em> (optional, depending on frame format)</li><li><em>Font data block</em></li></ul><h2 id="qff-block-header" tabindex="-1">Block Header <a class="header-anchor" href="#qff-block-header" aria-label="Permalink to &quot;Block Header {#qff-block-header}&quot;">​</a></h2><p>The block header is identical to <a href="./quantum_painter_qgf#qgf-block-header">QGF&#39;s block header</a>, and is present for all blocks, including the font descriptor.</p><h2 id="qff-font-descriptor" tabindex="-1">Font descriptor block <a class="header-anchor" href="#qff-font-descriptor" aria-label="Permalink to &quot;Font descriptor block {#qff-font-descriptor}&quot;">​</a></h2><ul><li><em>typeid</em> = 0x00</li><li><em>length</em> = 20</li></ul><p>This block must be located at the start of the file contents, and can exist a maximum of once in an entire QGF file. It is always followed by either the <em>ASCII glyph table</em> or the <em>Unicode glyph table</em>, depending on which glyphs are included in the font.</p><p><em>Block</em> format:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typedef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> struct</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> __attribute__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((packed)) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">qff_font_descriptor_v1_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    qgf_block_header_v1_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> header;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">               // = { .type_id = 0x00, .neg_type_id = (~0x00), .length = 20 }</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    uint24_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              magic;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                // constant, equal to 0x464651 (&quot;QFF&quot;)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    uint8_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">               qff_version;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          // constant, equal to 0x01</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    uint32_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              total_file_size;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // total size of the entire file, starting at offset zero</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    uint32_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              neg_total_file_size;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // negated value of total_file_size, used for detecting parsing errors</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    uint8_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">               line_height;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          // glyph height in pixels</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  has_ascii_table;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // whether the font has an ascii table of glyphs (0x20...0x7E)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    uint16_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              num_unicode_glyphs;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   // the number of glyphs in the unicode table -- no table specified if zero</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    uint8_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">               format;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">               // frame format, see below.</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    uint8_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">               flags;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                // frame flags, see below.</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    uint8_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">               compression_scheme;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   // compression scheme, see below.</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    uint8_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">               transparency_index;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   // palette index used for transparent pixels (not yet implemented)</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">qff_font_descriptor_v1_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// _Static_assert(sizeof(qff_font_descriptor_v1_t) == (sizeof(qgf_block_header_v1_t) + 20), &quot;qff_font_descriptor_v1_t must be 25 bytes in v1 of QFF&quot;);</span></span></code></pre></div><p>The values for <code>format</code>, <code>flags</code>, <code>compression_scheme</code>, and <code>transparency_index</code> match <a href="./quantum_painter_qgf#qgf-frame-descriptor">QGF&#39;s frame descriptor block</a>, with the exception that the <code>delta</code> flag is ignored by QFF.</p><h2 id="qff-ascii-table" tabindex="-1">ASCII glyph table <a class="header-anchor" href="#qff-ascii-table" aria-label="Permalink to &quot;ASCII glyph table {#qff-ascii-table}&quot;">​</a></h2><ul><li><em>typeid</em> = 0x01</li><li><em>length</em> = 290</li></ul><p>If the font contains ascii characters, the <em>ASCII glyph block</em> must be located directly after the <em>font descriptor block</em>.</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> QFF_GLYPH_WIDTH_BITS</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> QFF_GLYPH_WIDTH_MASK</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ((</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">QFF_GLYPH_WIDTH_BITS)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> QFF_GLYPH_OFFSET_BITS</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> QFF_GLYPH_OFFSET_MASK</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (((</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">QFF_GLYPH_OFFSET_BITS)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> QFF_GLYPH_WIDTH_BITS)</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typedef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> struct</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> __attribute__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((packed)) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">qff_ascii_glyph_table_v1_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    qgf_block_header_v1_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> header;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // = { .type_id = 0x01, .neg_type_id = (~0x01), .length = 285 }</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    uint24_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> glyph</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">95</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // 95 glyphs, 0x20..0x7E, see bits/masks above for values</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">qff_ascii_glyph_table_v1_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// _Static_assert(sizeof(qff_ascii_glyph_table_v1_t) == (sizeof(qgf_block_header_v1_t) + 285), &quot;qff_ascii_glyph_table_v1_t must be 290 bytes in v1 of QFF&quot;);</span></span></code></pre></div><h2 id="qff-unicode-table" tabindex="-1">Unicode glyph table <a class="header-anchor" href="#qff-unicode-table" aria-label="Permalink to &quot;Unicode glyph table {#qff-unicode-table}&quot;">​</a></h2><ul><li><em>typeid</em> = 0x02</li><li><em>length</em> = variable</li></ul><p>If this font contains unicode characters, the <em>unicode glyph block</em> must be located directly after the <em>ASCII glyph table block</em>, or the <em>font descriptor block</em> if the font does not contain ASCII characters.</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typedef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> struct</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> __attribute__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((packed)) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">qff_unicode_glyph_table_v1_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    qgf_block_header_v1_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> header;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // = { .type_id = 0x02, .neg_type_id = (~0x02), .length = (N * 6) }</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    struct</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> __attribute__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((packed)) {</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // container for a single unicode glyph</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        uint24_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> code_point;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          // the unicode code point</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        uint24_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> glyph;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">               // the glyph information, as per ASCII glyphs above</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">glyph</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[N];</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                       // N glyphs worth of data</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">qff_unicode_glyph_table_v1_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="qff-palette-descriptor" tabindex="-1">Font palette block <a class="header-anchor" href="#qff-palette-descriptor" aria-label="Permalink to &quot;Font palette block {#qff-palette-descriptor}&quot;">​</a></h2><ul><li><em>typeid</em> = 0x03</li><li><em>length</em> = variable</li></ul><p>The <em>font palette block</em> is identical to <a href="./quantum_painter_qgf#qgf-frame-palette-descriptor">QGF&#39;s frame palette block</a>, retaining the same <em>typeid</em> of 0x03.</p><p>It is only specified in the QFF if the font is palette-based, and follows the <em>unicode glyph block</em> if the font contains any Unicode glyphs, or the <em>ASCII glyph block</em> if the font contains only ASCII glyphs.</p><h2 id="qff-data-descriptor" tabindex="-1">Font data block <a class="header-anchor" href="#qff-data-descriptor" aria-label="Permalink to &quot;Font data block {#qff-data-descriptor}&quot;">​</a></h2><ul><li><em>typeid</em> = 0x04</li><li><em>length</em> = variable</li></ul><p>The <em>font data block</em> is the last block in the file and is identical to <a href="./quantum_painter_qgf#qgf-frame-data-descriptor">QGF&#39;s frame data block</a>, however has a different <em>typeid</em> of 0x04 in QFF.</p>', 30);
const _hoisted_31 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_31);
}
const quantum_painter_qff = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  quantum_painter_qff as default
};
