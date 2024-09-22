import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.Clpp4x2N.js";
const __pageData = JSON.parse('{"title":"Haptic Feedback","description":"","frontmatter":{},"headers":[],"relativePath":"features/haptic_feedback.md","filePath":"features/haptic_feedback.md"}');
const _sfc_main = { name: "features/haptic_feedback.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="haptic-feedback" tabindex="-1">Haptic Feedback <a class="header-anchor" href="#haptic-feedback" aria-label="Permalink to &quot;Haptic Feedback&quot;">​</a></h1><h2 id="haptic-feedback-rules-mk-options" tabindex="-1">Haptic feedback rules.mk options <a class="header-anchor" href="#haptic-feedback-rules-mk-options" aria-label="Permalink to &quot;Haptic feedback rules.mk options&quot;">​</a></h2><p>The following options are currently available for haptic feedback in <code>rules.mk</code>:</p><div class="language-make vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">make</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HAPTIC_ENABLE = yes</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HAPTIC_DRIVER = drv2605l</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HAPTIC_DRIVER = solenoid</span></span></code></pre></div><p>The following <code>config.h</code> settings are available for all types of haptic feedback:</p><table><thead><tr><th>Settings</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>HAPTIC_ENABLE_PIN</code></td><td><em>Not defined</em></td><td>Configures a pin to enable a boost converter for some haptic solution, often used with solenoid drivers.</td></tr><tr><td><code>HAPTIC_ENABLE_PIN_ACTIVE_LOW</code></td><td><em>Not defined</em></td><td>If defined then the haptic enable pin is active-low.</td></tr><tr><td><code>HAPTIC_ENABLE_STATUS_LED</code></td><td><em>Not defined</em></td><td>Configures a pin to reflect the current enabled/disabled status of haptic feedback.</td></tr><tr><td><code>HAPTIC_ENABLE_STATUS_LED_ACTIVE_LOW</code></td><td><em>Not defined</em></td><td>If defined then the haptic status led will be active-low.</td></tr><tr><td><code>HAPTIC_OFF_IN_LOW_POWER</code></td><td><code>0</code></td><td>If set to <code>1</code>, haptic feedback is disabled before the device is configured, and while the device is suspended.</td></tr></tbody></table><h2 id="known-supported-hardware" tabindex="-1">Known Supported Hardware <a class="header-anchor" href="#known-supported-hardware" aria-label="Permalink to &quot;Known Supported Hardware&quot;">​</a></h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a href="https://www.digikey.com/product-detail/en/jinlong-machinery-electronics-inc/LV061228B-L65-A/1670-1050-ND/7732325" target="_blank" rel="noreferrer">LV061228B-L65-A</a></td><td>z-axis 2v LRA</td></tr><tr><td><a href="https://www.adafruit.com/product/1201" target="_blank" rel="noreferrer">Mini Motor Disc</a></td><td>small 2-5v ERM</td></tr></tbody></table><h2 id="haptic-keycodes" tabindex="-1">Haptic Keycodes <a class="header-anchor" href="#haptic-keycodes" aria-label="Permalink to &quot;Haptic Keycodes&quot;">​</a></h2><p>Not all keycodes below will work depending on which haptic mechanism you have chosen.</p><table><thead><tr><th>Key</th><th>Aliases</th><th>Description</th></tr></thead><tbody><tr><td><code>QK_HAPTIC_ON</code></td><td><code>HF_ON</code></td><td>Turn haptic feedback on</td></tr><tr><td><code>QK_HAPTIC_OFF</code></td><td><code>HF_OFF</code></td><td>Turn haptic feedback off</td></tr><tr><td><code>QK_HAPTIC_TOGGLE</code></td><td><code>HF_TOGG</code></td><td>Toggle haptic feedback on/off</td></tr><tr><td><code>QK_HAPTIC_RESET</code></td><td><code>HF_RST</code></td><td>Reset haptic feedback config to default</td></tr><tr><td><code>QK_HAPTIC_FEEDBACK_TOGGLE</code></td><td><code>HF_FDBK</code></td><td>Toggle feedback to occur on keypress, release or both</td></tr><tr><td><code>QK_HAPTIC_BUZZ_TOGGLE</code></td><td><code>HF_BUZZ</code></td><td>Toggle solenoid buzz on/off</td></tr><tr><td><code>QK_HAPTIC_MODE_NEXT</code></td><td><code>HF_NEXT</code></td><td>Go to next DRV2605L waveform</td></tr><tr><td><code>QK_HAPTIC_MODE_PREVIOUS</code></td><td><code>HF_PREV</code></td><td>Go to previous DRV2605L waveform</td></tr><tr><td><code>QK_HAPTIC_CONTINUOUS_TOGGLE</code></td><td><code>HF_CONT</code></td><td>Toggle continuous haptic mode on/off</td></tr><tr><td><code>QK_HAPTIC_CONTINUOUS_UP</code></td><td><code>HF_CONU</code></td><td>Increase DRV2605L continous haptic strength</td></tr><tr><td><code>QK_HAPTIC_CONTINUOUS_DOWN</code></td><td><code>HF_COND</code></td><td>Decrease DRV2605L continous haptic strength</td></tr><tr><td><code>QK_HAPTIC_DWELL_UP</code></td><td><code>HF_DWLU</code></td><td>Increase Solenoid dwell time</td></tr><tr><td><code>QK_HAPTIC_DWELL_DOWN</code></td><td><code>HF_DWLD</code></td><td>Decrease Solenoid dwell time</td></tr></tbody></table><h3 id="solenoids" tabindex="-1">Solenoids <a class="header-anchor" href="#solenoids" aria-label="Permalink to &quot;Solenoids&quot;">​</a></h3><p>The solenoid code supports relay switches, and similar hardware, as well as solenoids.</p><p>For a regular solenoid, you will need a build a circuit to drive the solenoid through a mosfet as most MCU will not be able to provide the current needed to drive the coil in the solenoid.</p><p><a href="https://cdn-shop.adafruit.com/product-files/412/solenoid_driver.pdf" target="_blank" rel="noreferrer">Wiring diagram provided by Adafruit</a></p><p>For relay switches, the hardware may already contain all of that ciruitry, and just require VCC, GND and a data pin.</p><table><thead><tr><th>Settings</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>SOLENOID_PIN</code></td><td><em>Not defined</em></td><td>Configures the pin that the switch is connected to.</td></tr><tr><td><code>SOLENOID_PIN_ACTIVE_LOW</code></td><td><em>Not defined</em></td><td>If defined then the switch trigger pin is active low.</td></tr><tr><td><code>SOLENOID_PINS</code></td><td><em>Not defined</em></td><td>Configures an array of pins to be used for switch activation.</td></tr><tr><td><code>SOLENOID_PINS_ACTIVE_LOW</code></td><td><em>Not defined</em></td><td>Allows you to specify how each pin is pulled for activation.</td></tr><tr><td><code>SOLENOID_RANDOM_FIRE</code></td><td><em>Not defined</em></td><td>When there are multiple solenoids, will select a random one to fire.</td></tr><tr><td><code>SOLENOID_DEFAULT_DWELL</code></td><td><code>12</code> ms</td><td>Configures the default dwell time for the switch.</td></tr><tr><td><code>SOLENOID_MIN_DWELL</code></td><td><code>4</code> ms</td><td>Sets the lower limit for the dwell.</td></tr><tr><td><code>SOLENOID_MAX_DWELL</code></td><td><code>100</code> ms</td><td>Sets the upper limit for the dwell.</td></tr><tr><td><code>SOLENOID_DWELL_STEP_SIZE</code></td><td><code>1</code> ms</td><td>The step size to use when <code>HF_DWL*</code> keycodes are sent.</td></tr><tr><td><code>SOLENOID_DEFAULT_BUZZ</code></td><td><code>0</code> (disabled)</td><td>On <code>HF_RST</code> buzz is set &quot;on&quot; if this is &quot;1&quot;</td></tr><tr><td><code>SOLENOID_BUZZ_ACTUATED</code></td><td><code>SOLENOID_MIN_DWELL</code></td><td>Actuated-time when the switch is in buzz mode.</td></tr><tr><td><code>SOLENOID_BUZZ_NONACTUATED</code></td><td><code>SOLENOID_MIN_DWELL</code></td><td>Non-Actuated-time when the switch is in buzz mode.</td></tr></tbody></table><ul><li>If solenoid buzz is off, then dwell time is how long the &quot;plunger&quot; stays activated. The dwell time changes how the solenoid sounds.</li><li>If solenoid buzz is on, then dwell time sets the length of the buzz, while <code>SOLENOID_BUZZ_ACTUATED</code> and <code>SOLENOID_BUZZ_NONACTUATED</code> set the (non-)actuation times withing the buzz period.</li><li>With the current implementation, for any of the above time settings, the precision of these settings may be affected by how fast the keyboard is able to scan the matrix. Therefore, if the keyboards scanning routine is slow, it may be preferable to set <code>SOLENOID_DWELL_STEP_SIZE</code> to a value slightly smaller than the time it takes to scan the keyboard.</li></ul><p>Beware that some pins may be powered during bootloader (ie. A13 on the STM32F303 chip) and will result in the solenoid kept in the on state through the whole flashing process. This may overheat and damage the solenoid. If you find that the pin the solenoid is connected to is triggering the solenoid during bootloader/DFU, select another pin.</p><h3 id="drv2605l" tabindex="-1">DRV2605L <a class="header-anchor" href="#drv2605l" aria-label="Permalink to &quot;DRV2605L&quot;">​</a></h3><p>DRV2605L is controlled over i2c protocol, and has to be connected to the SDA and SCL pins, these varies depending on the MCU in use.</p><h4 id="feedback-motor-setup" tabindex="-1">Feedback motor setup <a class="header-anchor" href="#feedback-motor-setup" aria-label="Permalink to &quot;Feedback motor setup&quot;">​</a></h4><p>This driver supports 2 different feedback motors. Set the following in your <code>config.h</code> based on which motor you have selected.</p><h5 id="erm" tabindex="-1">ERM <a class="header-anchor" href="#erm" aria-label="Permalink to &quot;ERM&quot;">​</a></h5><p>Eccentric Rotating Mass vibration motors (ERM) is motor with a off-set weight attached so when drive signal is attached, the off-set weight spins and causes a sinusoidal wave that translate into vibrations.</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DRV2605L_FB_ERM_LRA</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DRV2605L_FB_BRAKEFACTOR</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /* For 1x:0, 2x:1, 3x:2, 4x:3, 6x:4, 8x:5, 16x:6, Disable Braking:7 */</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DRV2605L_FB_LOOPGAIN</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /* For  Low:0, Medium:1, High:2, Very High:3 */</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Please refer to your datasheet for the optimal setting for your specific motor. */</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DRV2605L_RATED_VOLTAGE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DRV2605L_V_PEAK</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span></span></code></pre></div><h5 id="lra" tabindex="-1">LRA <a class="header-anchor" href="#lra" aria-label="Permalink to &quot;LRA&quot;">​</a></h5><p>Linear resonant actuators (LRA, also know as a linear vibrator) works different from a ERM. A LRA has a weight and magnet suspended by springs and a voice coil. When the drive signal is applied, the weight would be vibrate on a single axis (side to side or up and down). Since the weight is attached to a spring, there is a resonance effect at a specific frequency. This frequency is where the LRA will operate the most efficiently. Refer to the motor&#39;s datasheet for the recommanded range for this frequency.</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DRV2605L_FB_ERM_LRA</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DRV2605L_FB_BRAKEFACTOR</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /* For 1x:0, 2x:1, 3x:2, 4x:3, 6x:4, 8x:5, 16x:6, Disable Braking:7 */</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DRV2605L_FB_LOOPGAIN</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /* For  Low:0, Medium:1, High:2, Very High:3 */</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Please refer to your datasheet for the optimal setting for your specific motor. */</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DRV2605L_RATED_VOLTAGE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DRV2605L_V_PEAK</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2.8</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DRV2605L_V_RMS</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DRV2605L_V_PEAK</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2.1</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DRV2605L_F_LRA</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 205</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /* resonance freq */</span></span></code></pre></div><h4 id="drv2605l-waveform-library" tabindex="-1">DRV2605L waveform library <a class="header-anchor" href="#drv2605l-waveform-library" aria-label="Permalink to &quot;DRV2605L waveform library&quot;">​</a></h4><p>DRV2605L comes with preloaded library of various waveform sequences that can be called and played. If writing a macro, these waveforms can be played using <code>DRV_pulse(*sequence name or number*)</code></p><p>List of waveform sequences from the datasheet:</p><table><thead><tr><th>seq#</th><th>Sequence name</th><th>seq#</th><th>Sequence name</th><th>seq#</th><th>Sequence name</th></tr></thead><tbody><tr><td>1</td><td>strong_click</td><td>43</td><td>lg_dblclick_med_60</td><td>85</td><td>transition_rampup_med_smooth2</td></tr><tr><td>2</td><td>strong_click_60</td><td>44</td><td>lg_dblsharp_tick</td><td>86</td><td>transition_rampup_short_smooth1</td></tr><tr><td>3</td><td>strong_click_30</td><td>45</td><td>lg_dblsharp_tick_80</td><td>87</td><td>transition_rampup_short_smooth2</td></tr><tr><td>4</td><td>sharp_click</td><td>46</td><td>lg_dblsharp_tick_60</td><td>88</td><td>transition_rampup_long_sharp1</td></tr><tr><td>5</td><td>sharp_click_60</td><td>47</td><td>buzz</td><td>89</td><td>transition_rampup_long_sharp2</td></tr><tr><td>6</td><td>sharp_click_30</td><td>48</td><td>buzz_80</td><td>90</td><td>transition_rampup_med_sharp1</td></tr><tr><td>7</td><td>soft_bump</td><td>49</td><td>buzz_60</td><td>91</td><td>transition_rampup_med_sharp2</td></tr><tr><td>8</td><td>soft_bump_60</td><td>50</td><td>buzz_40</td><td>92</td><td>transition_rampup_short_sharp1</td></tr><tr><td>9</td><td>soft_bump_30</td><td>51</td><td>buzz_20</td><td>93</td><td>transition_rampup_short_sharp2</td></tr><tr><td>10</td><td>dbl_click</td><td>52</td><td>pulsing_strong</td><td>94</td><td>transition_rampdown_long_smooth1_50</td></tr><tr><td>11</td><td>dbl_click_60</td><td>53</td><td>pulsing_strong_80</td><td>95</td><td>transition_rampdown_long_smooth2_50</td></tr><tr><td>12</td><td>trp_click</td><td>54</td><td>pulsing_medium</td><td>96</td><td>transition_rampdown_med_smooth1_50</td></tr><tr><td>13</td><td>soft_fuzz</td><td>55</td><td>pulsing_medium_80</td><td>97</td><td>transition_rampdown_med_smooth2_50</td></tr><tr><td>14</td><td>strong_buzz</td><td>56</td><td>pulsing_sharp</td><td>98</td><td>transition_rampdown_short_smooth1_50</td></tr><tr><td>15</td><td>alert_750ms</td><td>57</td><td>pulsing_sharp_80</td><td>99</td><td>transition_rampdown_short_smooth2_50</td></tr><tr><td>16</td><td>alert_1000ms</td><td>58</td><td>transition_click</td><td>100</td><td>transition_rampdown_long_sharp1_50</td></tr><tr><td>17</td><td>strong_click1</td><td>59</td><td>transition_click_80</td><td>101</td><td>transition_rampdown_long_sharp2_50</td></tr><tr><td>18</td><td>strong_click2_80</td><td>60</td><td>transition_click_60</td><td>102</td><td>transition_rampdown_med_sharp1_50</td></tr><tr><td>19</td><td>strong_click3_60</td><td>61</td><td>transition_click_40</td><td>103</td><td>transition_rampdown_med_sharp2_50</td></tr><tr><td>20</td><td>strong_click4_30</td><td>62</td><td>transition_click_20</td><td>104</td><td>transition_rampdown_short_sharp1_50</td></tr><tr><td>21</td><td>medium_click1</td><td>63</td><td>transition_click_10</td><td>105</td><td>transition_rampdown_short_sharp2_50</td></tr><tr><td>22</td><td>medium_click2_80</td><td>64</td><td>transition_hum</td><td>106</td><td>transition_rampup_long_smooth1_50</td></tr><tr><td>23</td><td>medium_click3_60</td><td>65</td><td>transition_hum_80</td><td>107</td><td>transition_rampup_long_smooth2_50</td></tr><tr><td>24</td><td>sharp_tick1</td><td>66</td><td>transition_hum_60</td><td>108</td><td>transition_rampup_med_smooth1_50</td></tr><tr><td>25</td><td>sharp_tick2_80</td><td>67</td><td>transition_hum_40</td><td>109</td><td>transition_rampup_med_smooth2_50</td></tr><tr><td>26</td><td>sharp_tick3_60</td><td>68</td><td>transition_hum_20</td><td>110</td><td>transition_rampup_short_smooth1_50</td></tr><tr><td>27</td><td>sh_dblclick_str</td><td>69</td><td>transition_hum_10</td><td>111</td><td>transition_rampup_short_smooth2_50</td></tr><tr><td>28</td><td>sh_dblclick_str_80</td><td>70</td><td>transition_rampdown_long_smooth1</td><td>112</td><td>transition_rampup_long_sharp1_50</td></tr><tr><td>29</td><td>sh_dblclick_str_60</td><td>71</td><td>transition_rampdown_long_smooth2</td><td>113</td><td>transition_rampup_long_sharp2_50</td></tr><tr><td>30</td><td>sh_dblclick_str_30</td><td>72</td><td>transition_rampdown_med_smooth1</td><td>114</td><td>transition_rampup_med_sharp1_50</td></tr><tr><td>31</td><td>sh_dblclick_med</td><td>73</td><td>transition_rampdown_med_smooth2</td><td>115</td><td>transition_rampup_med_sharp2_50</td></tr><tr><td>32</td><td>sh_dblclick_med_80</td><td>74</td><td>transition_rampdown_short_smooth1</td><td>116</td><td>transition_rampup_short_sharp1_50</td></tr><tr><td>33</td><td>sh_dblclick_med_60</td><td>75</td><td>transition_rampdown_short_smooth2</td><td>117</td><td>transition_rampup_short_sharp2_50</td></tr><tr><td>34</td><td>sh_dblsharp_tick</td><td>76</td><td>transition_rampdown_long_sharp1</td><td>118</td><td>long_buzz_for_programmatic_stopping</td></tr><tr><td>35</td><td>sh_dblsharp_tick_80</td><td>77</td><td>transition_rampdown_long_sharp2</td><td>119</td><td>smooth_hum1_50</td></tr><tr><td>36</td><td>sh_dblsharp_tick_60</td><td>78</td><td>transition_rampdown_med_sharp1</td><td>120</td><td>smooth_hum2_40</td></tr><tr><td>37</td><td>lg_dblclick_str</td><td>79</td><td>transition_rampdown_med_sharp2</td><td>121</td><td>smooth_hum3_30</td></tr><tr><td>38</td><td>lg_dblclick_str_80</td><td>80</td><td>transition_rampdown_short_sharp1</td><td>122</td><td>smooth_hum4_20</td></tr><tr><td>39</td><td>lg_dblclick_str_60</td><td>81</td><td>transition_rampdown_short_sharp2</td><td>123</td><td>smooth_hum5_10</td></tr><tr><td>40</td><td>lg_dblclick_str_30</td><td>82</td><td>transition_rampup_long_smooth1</td><td></td><td></td></tr><tr><td>41</td><td>lg_dblclick_med</td><td>83</td><td>transition_rampup_long_smooth2</td><td></td><td></td></tr><tr><td>42</td><td>lg_dblclick_med_80</td><td>84</td><td>transition_rampup_med_smooth1</td><td></td><td></td></tr></tbody></table><h3 id="optional-drv2605l-defines" tabindex="-1">Optional DRV2605L defines <a class="header-anchor" href="#optional-drv2605l-defines" aria-label="Permalink to &quot;Optional DRV2605L defines&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DRV2605L_GREETING</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sequence name or number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span></span></code></pre></div><p>If haptic feedback is enabled, the keyboard will vibrate to a specific sequence during startup. That can be selected using the following define:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DRV2605L_DEFAULT_MODE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sequence name or number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span></span></code></pre></div><p>This will set what sequence <code>HF_RST</code> will set as the active mode. If not defined, mode will be set to 1 when <code>HF_RST</code> is pressed.</p><h3 id="drv2605l-continuous-haptic-mode" tabindex="-1">DRV2605L Continuous Haptic Mode <a class="header-anchor" href="#drv2605l-continuous-haptic-mode" aria-label="Permalink to &quot;DRV2605L Continuous Haptic Mode&quot;">​</a></h3><p>This mode sets continuous haptic feedback with the option to increase or decrease strength.</p><h2 id="haptic-key-exclusion" tabindex="-1">Haptic Key Exclusion <a class="header-anchor" href="#haptic-key-exclusion" aria-label="Permalink to &quot;Haptic Key Exclusion&quot;">​</a></h2><p>The Haptic Exclusion is implemented as <code>__attribute__((weak)) bool get_haptic_enabled_key(uint16_t keycode, keyrecord_t *record)</code> in haptic.c. This allows a re-definition at the required level with the specific requirement / exclusion.</p><h3 id="no-haptic-mod" tabindex="-1">NO_HAPTIC_MOD <a class="header-anchor" href="#no-haptic-mod" aria-label="Permalink to &quot;NO_HAPTIC_MOD&quot;">​</a></h3><p>With the entry of <code>#define NO_HAPTIC_MOD</code> in config.h, the following keys will not trigger feedback:</p><ul><li>Usual modifier keys such as Control/Shift/Alt/Gui (For example <code>KC_LCTL</code>)</li><li><code>MO()</code> momentary keys. See also <a href="./../feature_layers">Layers</a>.</li><li><code>LM()</code> momentary keys with mod active.</li><li><code>LT()</code> layer tap keys, when held to activate a layer. However when tapped, and the key is quickly released, and sends a keycode, haptic feedback is still triggered.</li><li><code>TT()</code> layer tap toggle keys, when held to activate a layer. However when tapped <code>TAPPING_TOGGLE</code> times to permanently toggle the layer, on the last tap haptic feedback is still triggered.</li><li><code>MT()</code> mod tap keys, when held to keep a usual modifier key pressed. However when tapped, and the key is quickly released, and sends a keycode, haptic feedback is still triggered. See also <a href="./../mod_tap">Mod-Tap</a>.</li></ul><h3 id="no-haptic-alpha" tabindex="-1">NO_HAPTIC_ALPHA <a class="header-anchor" href="#no-haptic-alpha" aria-label="Permalink to &quot;NO_HAPTIC_ALPHA&quot;">​</a></h3><p>With the entry of <code>#define NO_HAPTIC_ALPHA</code> in config.h, none of the alpha keys (A ... Z) will trigger a feedback.</p><h3 id="no-haptic-punctuation" tabindex="-1">NO_HAPTIC_PUNCTUATION <a class="header-anchor" href="#no-haptic-punctuation" aria-label="Permalink to &quot;NO_HAPTIC_PUNCTUATION&quot;">​</a></h3><p>With the entry of <code>#define NO_HAPTIC_PUNCTUATION</code> in config.h, none of the following keys will trigger a feedback: Enter, ESC, Backspace, Space, Minus, Equal, Left Bracket, Right Bracket, Backslash, Non-US Hash, Semicolon, Quote, Grave, Comma, Slash, Dot, Non-US Backslash.</p><h3 id="no-haptic-lockkeys" tabindex="-1">NO_HAPTIC_LOCKKEYS <a class="header-anchor" href="#no-haptic-lockkeys" aria-label="Permalink to &quot;NO_HAPTIC_LOCKKEYS&quot;">​</a></h3><p>With the entry of <code>#define NO_HAPTIC_LOCKKEYS</code> in config.h, none of the following keys will trigger a feedback: Caps Lock, Scroll Lock, Num Lock.</p><h3 id="no-haptic-nav" tabindex="-1">NO_HAPTIC_NAV <a class="header-anchor" href="#no-haptic-nav" aria-label="Permalink to &quot;NO_HAPTIC_NAV&quot;">​</a></h3><p>With the entry of <code>#define NO_HAPTIC_NAV</code> in config.h, none of the following keys will trigger a feedback: Print Screen, Pause, Insert, Delete, Page Down, Page Up, Left Arrow, Up Arrow, Right Arrow, Down Arrow, End, Home.</p><h3 id="no-haptic-numeric" tabindex="-1">NO_HAPTIC_NUMERIC <a class="header-anchor" href="#no-haptic-numeric" aria-label="Permalink to &quot;NO_HAPTIC_NUMERIC&quot;">​</a></h3><p>With the entry of <code>#define NO_HAPTIC_NUMERIC</code> in config.h, none of the following keys between 0 and 9 (KC_1 ... KC_0) will trigger a feedback.</p>', 55);
const _hoisted_56 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_56);
}
const haptic_feedback = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  haptic_feedback as default
};
