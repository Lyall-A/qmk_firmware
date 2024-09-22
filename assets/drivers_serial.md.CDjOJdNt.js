import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.Clpp4x2N.js";
const __pageData = JSON.parse(`{"title":"'serial' Driver","description":"","frontmatter":{},"headers":[],"relativePath":"drivers/serial.md","filePath":"drivers/serial.md"}`);
const _sfc_main = { name: "drivers/serial.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="serial-driver" tabindex="-1">&#39;serial&#39; Driver <a class="header-anchor" href="#serial-driver" aria-label="Permalink to &quot;&#39;serial&#39; Driver&quot;">​</a></h1><p>The Serial driver powers the <a href="./../features/split_keyboard">Split Keyboard</a> feature. Several implementations are available that cater to the platform and capabilities of MCU in use. Note that none of the drivers support split keyboards with more than two halves.</p><table><thead><tr><th>Driver</th><th>AVR</th><th>ARM</th><th>Connection between halves</th></tr></thead><tbody><tr><td><a href="#bitbang">Bitbang</a></td><td>✔️</td><td>✔️</td><td>Single wire communication. One wire is used for reception and transmission.</td></tr><tr><td><a href="#usart-half-duplex">USART Half-duplex</a></td><td></td><td>✔️</td><td>Efficient single wire communication. One wire is used for reception and transmission.</td></tr><tr><td><a href="#usart-full-duplex">USART Full-duplex</a></td><td></td><td>✔️</td><td>Efficient two wire communication. Two distinct wires are used for reception and transmission.</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Serial in this context should be read as <strong>sending information one bit at a time</strong>, rather than implementing UART/USART/RS485/RS232 standards.</p></div><hr><h2 id="bitbang" tabindex="-1">Bitbang <a class="header-anchor" href="#bitbang" aria-label="Permalink to &quot;Bitbang&quot;">​</a></h2><p>This is the Default driver, absence of configuration assumes this driver. It works by <a href="https://en.wikipedia.org/wiki/Bit_banging" target="_blank" rel="noreferrer">bit banging</a> a GPIO pin using the CPU. It is therefore not as efficient as a dedicated hardware peripheral, which the Half-duplex and Full-duplex drivers use.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>On ARM platforms the bitbang driver causes connection issues when using it together with the bitbang WS2812 driver. Choosing alternate drivers for both serial and WS2812 (instead of bitbang) is strongly recommended.</p></div><h3 id="pin-configuration" tabindex="-1">Pin configuration <a class="header-anchor" href="#pin-configuration" aria-label="Permalink to &quot;Pin configuration&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>  LEFT                      RIGHT</span></span>\n<span class="line"><span>+-------+      SERIAL     +-------+</span></span>\n<span class="line"><span>|   SSP |-----------------| SSP   |</span></span>\n<span class="line"><span>|       |       VDD       |       |</span></span>\n<span class="line"><span>|       |-----------------|       |</span></span>\n<span class="line"><span>|       |       GND       |       |</span></span>\n<span class="line"><span>|       |-----------------|       |</span></span>\n<span class="line"><span>+-------+                 +-------+</span></span></code></pre></div><p>One GPIO pin is needed for the bitbang driver, as only one wire is used for receiving and transmitting data. This pin is referred to as the <code>SOFT_SERIAL_PIN</code> (SSP) in the configuration. A TRS or USB cable provides enough conductors for this driver to function.</p><h3 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h3><p>To use the bitbang driver follow these steps to activate it.</p><ol><li>Change the <code>SERIAL_DRIVER</code> to <code>bitbang</code> in your keyboards <code>rules.mk</code> file:</li></ol><div class="language-make vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">make</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SERIAL_DRIVER = bitbang</span></span></code></pre></div><ol start="2"><li>Configure the GPIO pin of your keyboard via the <code>config.h</code> file:</li></ol><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SOFT_SERIAL_PIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> D0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // or D1, D2, D3, E6</span></span></code></pre></div><ol start="3"><li>On ARM platforms you must turn on ChibiOS <code>PAL_USE_CALLBACKS</code> feature:</li></ol><ul><li>In <code>halconf.h</code> add the line <code>#define PAL_USE_CALLBACKS TRUE</code>.</li></ul><hr><h2 id="usart-half-duplex" tabindex="-1">USART Half-duplex <a class="header-anchor" href="#usart-half-duplex" aria-label="Permalink to &quot;USART Half-duplex&quot;">​</a></h2><p>Targeting ARM boards based on ChibiOS, where communication is offloaded to a USART hardware device that supports Half-duplex operation. The advantages over bitbanging are fast, accurate timings and reduced CPU usage. Therefore it is advised to choose Half-duplex over Bitbang if MCU is capable of utilising Half-duplex, and Full-duplex can&#39;t be used instead (e.g. lack of available GPIO pins, or imcompatible PCB design).</p><h3 id="pin-configuration-1" tabindex="-1">Pin configuration <a class="header-anchor" href="#pin-configuration-1" aria-label="Permalink to &quot;Pin configuration&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>  LEFT                      RIGHT  </span></span>\n<span class="line"><span>+-------+  |           |  +-------+</span></span>\n<span class="line"><span>|       |  R           R  |       |</span></span>\n<span class="line"><span>|       |  |   SERIAL  |  |       |</span></span>\n<span class="line"><span>|    TX |-----------------| TX    |</span></span>\n<span class="line"><span>|       |       VDD       |       |</span></span>\n<span class="line"><span>|       |-----------------|       |</span></span>\n<span class="line"><span>|       |       GND       |       |</span></span>\n<span class="line"><span>|       |-----------------|       |</span></span>\n<span class="line"><span>+-------+                 +-------+</span></span></code></pre></div><p>Only one GPIO pin is needed for the Half-duplex driver, as only one wire is used for receiving and transmitting data. This pin is referred to as the <code>SERIAL_USART_TX_PIN</code> in the configuration. Ensure that the pin chosen for split communication can operate as the TX pin of the contoller&#39;s USART peripheral. A TRS or USB cable provides enough conductors for this driver to function. As the split connection is configured to operate in open-drain mode, an <strong>external pull-up resistor is needed to keep the line high</strong>. Resistor values of 1.5kΩ to 8.2kΩ are known to work.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><em><strong>Note:</strong></em> A pull-up resistor isn&#39;t required for RP2040 controllers configured with PIO subsystem.</p></div><h3 id="setup-1" tabindex="-1">Setup <a class="header-anchor" href="#setup-1" aria-label="Permalink to &quot;Setup&quot;">​</a></h3><p>To use the Half-duplex driver follow these steps to activate it. If you target the Raspberry Pi RP2040 PIO implementation, start at step 2.</p><ol><li>Change the <code>SERIAL_DRIVER</code> to <code>usart</code> in your keyboards <code>rules.mk</code> file:</li></ol><div class="language-make vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">make</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SERIAL_DRIVER = usart</span></span></code></pre></div><p>Skip to step 3.</p><ol start="2"><li>(RP2040 + PIO only!) Change the <code>SERIAL_DRIVER</code> to <code>vendor</code> in your keyboards <code>rules.mk</code> file:</li></ol><div class="language-make vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">make</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SERIAL_DRIVER = vendor</span></span></code></pre></div><ol start="3"><li>Configure the hardware of your keyboard via the <code>config.h</code> file:</li></ol><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SERIAL_USART_TX_PIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> B6</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // The GPIO pin that is used split communication.</span></span></code></pre></div><p>For STM32 MCUs several GPIO configuration options can be changed as well. See the section <a href="#alternate-functions-for-selected-stm32-mcus">&quot;Alternate Functions for selected STM32 MCUs&quot;</a>.</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> USART1_REMAP</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">               // Remap USART TX and RX pins on STM32F103 MCUs, see table below.</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SERIAL_USART_TX_PAL_MODE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // Pin &quot;alternate function&quot;, see the respective datasheet for the appropriate values for your MCU. default: 7</span></span></code></pre></div><ol start="4"><li>Decide either for <code>SERIAL</code>, <code>SIO</code>, or <code>PIO</code> subsystem. See section <a href="#choosing-a-driver-subsystem">&quot;Choosing a driver subsystem&quot;</a>.</li></ol><hr><h2 id="usart-full-duplex" tabindex="-1">USART Full-duplex <a class="header-anchor" href="#usart-full-duplex" aria-label="Permalink to &quot;USART Full-duplex&quot;">​</a></h2><p>Targeting ARM boards based on ChibiOS where communication is offloaded to an USART hardware device. The advantages over bitbanging are fast, accurate timings and reduced CPU usage; therefore it is advised to choose this driver over all others where possible. Due to its internal design Full-duplex is slightly more efficient than the Half-duplex driver, but Full-duplex should be primarily chosen if Half-duplex operation is not supported by the controller&#39;s USART peripheral.</p><h3 id="pin-configuration-2" tabindex="-1">Pin configuration <a class="header-anchor" href="#pin-configuration-2" aria-label="Permalink to &quot;Pin configuration&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>  LEFT                      RIGHT</span></span>\n<span class="line"><span>+-------+                 +-------+</span></span>\n<span class="line"><span>|       |      SERIAL     |       |</span></span>\n<span class="line"><span>|    TX |-----------------| RX    |</span></span>\n<span class="line"><span>|       |      SERIAL     |       |</span></span>\n<span class="line"><span>|    RX |-----------------| TX    |</span></span>\n<span class="line"><span>|       |       VDD       |       |</span></span>\n<span class="line"><span>|       |-----------------|       |</span></span>\n<span class="line"><span>|       |       GND       |       |</span></span>\n<span class="line"><span>|       |-----------------|       |</span></span>\n<span class="line"><span>+-------+                 +-------+</span></span></code></pre></div><p>Two GPIO pins are needed for the Full-duplex driver, as two distinct wires are used for receiving and transmitting data. The pin transmitting data is the <code>TX</code> pin and refereed to as the <code>SERIAL_USART_TX_PIN</code>, the pin receiving data is the <code>RX</code> pin and refereed to as the <code>SERIAL_USART_RX_PIN</code> in this configuration. Please note that <code>TX</code> pin of the master half has to be connected with the <code>RX</code> pin of the slave half and the <code>RX</code> pin of the master half has to be connected with the <code>TX</code> pin of the slave half! Usually this pin swap has to be done outside of the MCU e.g. with cables or on the PCB. Some MCUs like the STM32F303 used on the Proton-C allow this pin swap directly inside the MCU. A TRRS or USB cable provides enough conductors for this driver to function.</p><p>To use this driver the USART peripherals <code>TX</code> and <code>RX</code> pins must be configured with the correct Alternate-functions. If you are using a Proton-C development board everything is already setup, same is true for STM32F103 MCUs. For MCUs which are using a modern flexible GPIO configuration you have to specify these by setting <code>SERIAL_USART_TX_PAL_MODE</code> and <code>SERIAL_USART_RX_PAL_MODE</code>. Refer to the corresponding datasheets of your MCU or find those settings in the section <a href="#alternate-functions-for-selected-stm32-mcus">&quot;Alternate Functions for selected STM32 MCUs&quot;</a>.</p><h3 id="setup-2" tabindex="-1">Setup <a class="header-anchor" href="#setup-2" aria-label="Permalink to &quot;Setup&quot;">​</a></h3><p>To use the Full-duplex driver follow these steps to activate it. If you target the Raspberry Pi RP2040 PIO implementation, start at step 2</p><ol><li>Change the <code>SERIAL_DRIVER</code> to <code>usart</code> in your keyboards <code>rules.mk</code> file:</li></ol><div class="language-make vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">make</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SERIAL_DRIVER = usart</span></span></code></pre></div><p>Skip to step 3</p><ol start="2"><li>(RP2040 + PIO only!) Change the <code>SERIAL_DRIVER</code> to <code>vendor</code> in your keyboards <code>rules.mk</code> file:</li></ol><div class="language-make vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">make</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SERIAL_DRIVER = vendor</span></span></code></pre></div><ol start="3"><li>Configure the hardware of your keyboard via the <code>config.h</code> file:</li></ol><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SERIAL_USART_FULL_DUPLEX</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   // Enable full duplex operation mode.</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SERIAL_USART_TX_PIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> B6</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // USART TX pin</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SERIAL_USART_RX_PIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> B7</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // USART RX pin</span></span></code></pre></div><p>For STM32 MCUs several GPIO configuration options, including the ability for <code>TX</code> to <code>RX</code> pin swapping, can be changed as well. See the section <a href="#alternate-functions-for-selected-stm32-mcus">&quot;Alternate Functions for selected STM32 MCUs&quot;</a>.</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SERIAL_USART_PIN_SWAP</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // Swap TX and RX pins if keyboard is master halve. (Only available on some MCUs)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> USART1_REMAP</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">               // Remap USART TX and RX pins on STM32F103 MCUs, see table below.</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SERIAL_USART_TX_PAL_MODE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // Pin &quot;alternate function&quot;, see the respective datasheet for the appropriate values for your MCU. default: 7</span></span></code></pre></div><ol start="4"><li>Decide either for <code>SERIAL</code>, <code>SIO</code>, or <code>PIO</code> subsystem. See section <a href="#choosing-a-driver-subsystem">&quot;Choosing a driver subsystem&quot;</a>.</li></ol><hr><h2 id="choosing-a-driver-subsystem" tabindex="-1">Choosing a driver subsystem <a class="header-anchor" href="#choosing-a-driver-subsystem" aria-label="Permalink to &quot;Choosing a driver subsystem&quot;">​</a></h2><h3 id="the-serial-driver" tabindex="-1">The <code>SERIAL</code> driver <a class="header-anchor" href="#the-serial-driver" aria-label="Permalink to &quot;The `SERIAL` driver&quot;">​</a></h3><p>The <code>SERIAL</code> Subsystem is supported for the majority of ChibiOS MCUs and should be used whenever supported. Follow these steps in order to activate it:</p><ol><li>In your keyboards <code>halconf.h</code> add:</li></ol><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HAL_USE_SERIAL</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> TRUE</span></span></code></pre></div><ol start="2"><li>In your keyboards <code>mcuconf.h</code>: activate the USART peripheral that is used on your MCU. The shown example is for an STM32 MCU, so this will not work on MCUs by other manufacturers. You can find the correct names in the <code>mcuconf.h</code> files of your MCU that ship with ChibiOS.</li></ol><p>Just below <code>#include_next &lt;mcuconf.h&gt;</code> add:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include_next</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;mcuconf.h&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> STM32_SERIAL_USE_USARTn</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> STM32_SERIAL_USE_USARTn</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> TRUE</span></span></code></pre></div><p>Where &#39;n&#39; matches the peripheral number of your selected USART on the MCU.</p><ol start="3"><li>In you keyboards <code>config.h</code>: override the default USART <code>SERIAL</code> driver if you use a USART peripheral that does not belong to the default selected <code>SD1</code> driver. For instance, if you selected <code>STM32_SERIAL_USE_USART3</code> the matching driver would be <code>SD3</code>.</li></ol><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> #define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SERIAL_USART_DRIVER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SD3</span></span></code></pre></div><h3 id="the-sio-driver" tabindex="-1">The <code>SIO</code> driver <a class="header-anchor" href="#the-sio-driver" aria-label="Permalink to &quot;The `SIO` driver&quot;">​</a></h3><p>The <code>SIO</code> Subsystem was added to ChibiOS with the 21.11 release and is only supported on selected MCUs. It should only be chosen when the <code>SERIAL</code> subsystem is not supported by your MCU.</p><p>Follow these steps in order to activate it:</p><ol><li>In your keyboards <code>halconf.h</code> add:</li></ol><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HAL_USE_SIO</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> TRUE</span></span></code></pre></div><ol start="2"><li>In your keyboards <code>mcuconf.h:</code> activate the USART peripheral that is used on your MCU. The shown example is for an STM32 MCU, so this will not work on MCUs by other manufacturers. You can find the correct names in the <code>mcuconf.h</code> files of your MCU that ship with ChibiOS.</li></ol><p>Just below <code>#include_next &lt;mcuconf.h&gt;</code> add:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include_next</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;mcuconf.h&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> STM32_SIO_USE_USARTn</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> STM32_SIO_USE_USARTn</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> TRUE</span></span></code></pre></div><p>Where &#39;n&#39; matches the peripheral number of your selected USART on the MCU.</p><ol start="3"><li>In the keyboard&#39;s <code>config.h</code> file: override the default USART <code>SIO</code> driver if you use a USART peripheral that does not belong to the default selected <code>SIOD1</code> driver. For instance, if you selected <code>STM32_SERIAL_USE_USART3</code> the matching driver would be <code>SIOD3</code>.</li></ol><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> #define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SERIAL_USART_DRIVER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SIOD3</span></span></code></pre></div><h3 id="the-pio-driver" tabindex="-1">The <code>PIO</code> driver <a class="header-anchor" href="#the-pio-driver" aria-label="Permalink to &quot;The `PIO` driver&quot;">​</a></h3><p>The <code>PIO</code> subsystem is a Raspberry Pi RP2040 specific implementation, using an integrated PIO peripheral and is therefore only available on this MCU. Because of the flexible nature of PIO peripherals, <strong>any</strong> GPIO pin can be used as a <code>TX</code> or <code>RX</code> pin. Half-duplex and Full-duplex operation modes are fully supported with this driver. Half-duplex uses the built-in pull-ups and GPIO manipulation of the RP2040 to drive the line high by default, thus an external pull-up resistor <strong>is not required</strong>.</p><p>Optionally, the PIO peripheral utilized for split communication can be changed with the following define in config.h:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SERIAL_PIO_USE_PIO1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // Force the usage of PIO1 peripheral, by default the Serial implementation uses the PIO0 peripheral</span></span></code></pre></div><p>The Serial PIO program uses 2 state machines, 13 instructions and the complete interrupt handler of the PIO peripheral it is running on.</p><hr><h2 id="advanced-configuration" tabindex="-1">Advanced Configuration <a class="header-anchor" href="#advanced-configuration" aria-label="Permalink to &quot;Advanced Configuration&quot;">​</a></h2><p>There are several advanced configuration options that can be defined in your keyboards <code>config.h</code> file:</p><h3 id="baudrate" tabindex="-1">Baudrate <a class="header-anchor" href="#baudrate" aria-label="Permalink to &quot;Baudrate&quot;">​</a></h3><p>If you&#39;re having issues or need a higher baudrate with serial communication, you can change the baudrate which in turn controls the communication speed for serial. You want to lower the baudrate if you experience failed transactions.</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SELECT_SOFT_SERIAL_SPEED</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {#}</span></span></code></pre></div><table><thead><tr><th>Speed</th><th>Bitbang</th><th>Half-duplex and Full-duplex</th></tr></thead><tbody><tr><td><code>0</code></td><td>189000 baud (experimental)</td><td>460800 baud</td></tr><tr><td><code>1</code></td><td>137000 baud (default)</td><td>230400 baud (default)</td></tr><tr><td><code>2</code></td><td>75000 baud</td><td>115200 baud</td></tr><tr><td><code>3</code></td><td>39000 baud</td><td>57600 baud</td></tr><tr><td><code>4</code></td><td>26000 baud</td><td>38400 baud</td></tr><tr><td><code>5</code></td><td>20000 baud</td><td>19200 baud</td></tr></tbody></table><p>Alternatively you can specify the baudrate directly by defining <code>SERIAL_USART_SPEED</code>.</p><h3 id="timeout" tabindex="-1">Timeout <a class="header-anchor" href="#timeout" aria-label="Permalink to &quot;Timeout&quot;">​</a></h3><p>This is the default time window in milliseconds in which a successful communication has to complete. Usually you don&#39;t want to change this value. But you can do so anyways by defining an alternate one in your keyboards <code>config.h</code> file:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SERIAL_USART_TIMEOUT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // USART driver timeout. default 20</span></span></code></pre></div><hr><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting&quot;">​</a></h2><p>If you&#39;re having issues withe serial communication, you can enable debug messages that will give you insights which part of the communication failed. The enable these messages add to your keyboards <code>config.h</code> file:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SERIAL_DEBUG</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The messages will be printed out to the <code>CONSOLE</code> output. For additional information, refer to <a href="./../faq_debug">Debugging/Troubleshooting QMK</a>.</p></div><h2 id="alternate-functions-for-selected-stm32-mcus" tabindex="-1">Alternate Functions for selected STM32 MCUs <a class="header-anchor" href="#alternate-functions-for-selected-stm32-mcus" aria-label="Permalink to &quot;Alternate Functions for selected STM32 MCUs&quot;">​</a></h2><p>Pins for USART Peripherals with</p><h3 id="stm32f303-proton-c-datasheet" tabindex="-1">STM32F303 / Proton-C <a href="https://www.st.com/resource/en/datasheet/stm32f303cc.pdf" target="_blank" rel="noreferrer">Datasheet</a> <a class="header-anchor" href="#stm32f303-proton-c-datasheet" aria-label="Permalink to &quot;STM32F303 / Proton-C [Datasheet](https://www.st.com/resource/en/datasheet/stm32f303cc.pdf)&quot;">​</a></h3><p>Pin Swap available: ✔️</p><table><thead><tr><th>Pin</th><th>Function</th><th>Mode</th></tr></thead><tbody><tr><td><strong>USART1</strong></td><td></td><td></td></tr><tr><td>PA9</td><td>TX</td><td>AF7</td></tr><tr><td>PA10</td><td>RX</td><td>AF7</td></tr><tr><td>PB6</td><td>TX</td><td>AF7</td></tr><tr><td>PB7</td><td>RX</td><td>AF7</td></tr><tr><td>PC4</td><td>TX</td><td>AF7</td></tr><tr><td>PC5</td><td>RX</td><td>AF7</td></tr><tr><td>PE0</td><td>TX</td><td>AF7</td></tr><tr><td>PE1</td><td>RX</td><td>AF7</td></tr><tr><td><strong>USART2</strong></td><td></td><td></td></tr><tr><td>PA2</td><td>TX</td><td>AF7</td></tr><tr><td>PA3</td><td>RX</td><td>AF7</td></tr><tr><td>PA14</td><td>TX</td><td>AF7</td></tr><tr><td>PA15</td><td>RX</td><td>AF7</td></tr><tr><td>PB3</td><td>TX</td><td>AF7</td></tr><tr><td>PB4</td><td>RX</td><td>AF7</td></tr><tr><td>PD5</td><td>TX</td><td>AF7</td></tr><tr><td>PD6</td><td>RX</td><td>AF7</td></tr><tr><td><strong>USART3</strong></td><td></td><td></td></tr><tr><td>PB10</td><td>TX</td><td>AF7</td></tr><tr><td>PB11</td><td>RX</td><td>AF7</td></tr><tr><td>PC10</td><td>TX</td><td>AF7</td></tr><tr><td>PC11</td><td>RX</td><td>AF7</td></tr><tr><td>PD8</td><td>TX</td><td>AF7</td></tr><tr><td>PD9</td><td>RX</td><td>AF7</td></tr></tbody></table><h3 id="stm32f072-datasheet" tabindex="-1">STM32F072 <a href="https://www.st.com/resource/en/datasheet/stm32f072c8.pdf" target="_blank" rel="noreferrer">Datasheet</a> <a class="header-anchor" href="#stm32f072-datasheet" aria-label="Permalink to &quot;STM32F072 [Datasheet](https://www.st.com/resource/en/datasheet/stm32f072c8.pdf)&quot;">​</a></h3><p>Pin Swap available: ✔️</p><table><thead><tr><th>Pin</th><th>Function</th><th>Mode</th></tr></thead><tbody><tr><td>USART1</td><td></td><td></td></tr><tr><td>PA9</td><td>TX</td><td>AF1</td></tr><tr><td>PA10</td><td>RX</td><td>AF1</td></tr><tr><td>PB6</td><td>TX</td><td>AF0</td></tr><tr><td>PB7</td><td>RX</td><td>AF0</td></tr><tr><td>USART2</td><td></td><td></td></tr><tr><td>PA2</td><td>TX</td><td>AF1</td></tr><tr><td>PA3</td><td>RX</td><td>AF1</td></tr><tr><td>PA14</td><td>TX</td><td>AF1</td></tr><tr><td>PA15</td><td>RX</td><td>AF1</td></tr><tr><td>USART3</td><td></td><td></td></tr><tr><td>PB10</td><td>TX</td><td>AF4</td></tr><tr><td>PB11</td><td>RX</td><td>AF4</td></tr><tr><td>PC4</td><td>TX</td><td>AF1</td></tr><tr><td>PC5</td><td>RX</td><td>AF1</td></tr><tr><td>PC10</td><td>TX</td><td>AF1</td></tr><tr><td>PC11</td><td>RX</td><td>AF1</td></tr><tr><td>PD8</td><td>TX</td><td>AF0</td></tr><tr><td>PD9</td><td>RX</td><td>AF0</td></tr><tr><td>USART4</td><td></td><td></td></tr><tr><td>PA0</td><td>TX</td><td>AF4</td></tr><tr><td>PA1</td><td>RX</td><td>AF4</td></tr></tbody></table><h3 id="stm32f103-medium-density-c8-cb-datasheet" tabindex="-1">STM32F103 Medium Density (C8-CB) <a href="https://www.st.com/resource/en/datasheet/stm32f103c8.pdf" target="_blank" rel="noreferrer">Datasheet</a> <a class="header-anchor" href="#stm32f103-medium-density-c8-cb-datasheet" aria-label="Permalink to &quot;STM32F103 Medium Density (C8-CB) [Datasheet](https://www.st.com/resource/en/datasheet/stm32f103c8.pdf)&quot;">​</a></h3><p>Pin Swap available: N/A</p><p>TX Pin is always Alternate Function Push-Pull, RX Pin is always regular input pin for any USART peripheral. <strong>For STM32F103 no additional Alternate Function configuration is necessary. QMK is already configured.</strong></p><p>Pin remapping:</p><p>The pins of USART Peripherals use default Pins that can be remapped to use other pins using the AFIO registers. Default pins are marked <strong>bold</strong>. Add the appropriate defines to your config.h file.</p><table><thead><tr><th>Pin</th><th>Function</th><th>Mode</th><th>USART_REMAP</th></tr></thead><tbody><tr><td><strong>USART1</strong></td><td></td><td></td><td></td></tr><tr><td><strong>PA9</strong></td><td>TX</td><td>AFPP</td><td></td></tr><tr><td><strong>PA10</strong></td><td>RX</td><td>IN</td><td></td></tr><tr><td>PB6</td><td>TX</td><td>AFPP</td><td>USART1_REMAP</td></tr><tr><td>PB7</td><td>RX</td><td>IN</td><td>USART1_REMAP</td></tr><tr><td><strong>USART2</strong></td><td></td><td></td><td></td></tr><tr><td><strong>PA2</strong></td><td>TX</td><td>AFPP</td><td></td></tr><tr><td><strong>PA3</strong></td><td>RX</td><td>IN</td><td></td></tr><tr><td>PD5</td><td>TX</td><td>AFPP</td><td>USART2_REMAP</td></tr><tr><td>PD6</td><td>RX</td><td>IN</td><td>USART2_REMAP</td></tr><tr><td><strong>USART3</strong></td><td></td><td></td><td></td></tr><tr><td><strong>PB10</strong></td><td>TX</td><td>AFPP</td><td></td></tr><tr><td><strong>PB11</strong></td><td>RX</td><td>IN</td><td></td></tr><tr><td>PC10</td><td>TX</td><td>AFPP</td><td>USART3_PARTIALREMAP</td></tr><tr><td>PC11</td><td>RX</td><td>IN</td><td>USART3_PARTIALREMAP</td></tr><tr><td>PD8</td><td>TX</td><td>AFPP</td><td>USART3_FULLREMAP</td></tr><tr><td>PD9</td><td>RX</td><td>IN</td><td>USART3_FULLREMAP</td></tr></tbody></table>', 115);
const _hoisted_116 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_116);
}
const serial = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  serial as default
};
