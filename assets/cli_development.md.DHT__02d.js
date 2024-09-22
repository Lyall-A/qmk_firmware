import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode, l as createBaseVNode, a as createTextVNode } from "./chunks/framework.Clpp4x2N.js";
const __pageData = JSON.parse('{"title":"QMK CLI Development","description":"","frontmatter":{},"headers":[],"relativePath":"cli_development.md","filePath":"cli_development.md"}');
const _sfc_main = { name: "cli_development.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="qmk-cli-development" tabindex="-1">QMK CLI Development <a class="header-anchor" href="#qmk-cli-development" aria-label="Permalink to &quot;QMK CLI Development&quot;">​</a></h1><p>This document has useful information for developers wishing to write new <code>qmk</code> subcommands.</p><h1 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h1><p>The QMK CLI operates using the subcommand pattern made famous by git. The main <code>qmk</code> script is simply there to setup the environment and pick the correct entrypoint to run. Each subcommand is a self-contained module with an entrypoint (decorated by <code>@cli.subcommand()</code>) that performs some action and returns a shell returncode, or None.</p><h2 id="developer-mode" tabindex="-1">Developer mode: <a class="header-anchor" href="#developer-mode" aria-label="Permalink to &quot;Developer mode:&quot;">​</a></h2><p>If you intend to maintain keyboards and/or contribute to QMK, you can enable the CLI&#39;s &quot;Developer&quot; mode:</p><p><code>qmk config user.developer=True</code></p><p>This will allow you to see all available subcommands.<br><strong>Note:</strong> You will have to install additional requirements:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>python3 -m pip install -r requirements-dev.txt</span></span></code></pre></div><h1 id="subcommands" tabindex="-1">Subcommands <a class="header-anchor" href="#subcommands" aria-label="Permalink to &quot;Subcommands&quot;">​</a></h1><p><a href="https://github.com/clueboard/milc" target="_blank" rel="noreferrer">MILC</a> is the CLI framework <code>qmk</code> uses to handle argument parsing, configuration, logging, and many other features. It lets you focus on writing your tool without wasting your time writing glue code.</p><p>Subcommands in the local CLI are always found in <code>qmk_firmware/lib/python/qmk/cli</code>.</p><p>Let&#39;s start by looking at an example subcommand. This is <code>lib/python/qmk/cli/hello.py</code>:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;QMK Python Hello World</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">This is an example QMK CLI script.</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> milc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cli</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@cli.argument</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;-n&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;--name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;World&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">help</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Name to greet.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@cli.subcommand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;QMK Hello World.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> hello</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cli):</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;Log a friendly greeting.</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cli.log.info(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Hello, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cli.config.hello.name)</span></span></code></pre></div><p>First we import the <code>cli</code> object from <code>milc</code>. This is how we interact with the user and control the script&#39;s behavior. We use <code>@cli.argument()</code> to define a command line flag, <code>--name</code>. This also creates a configuration variable named <code>hello.name</code> (and the corresponding <code>user.name</code>) which the user can set so they don&#39;t have to specify the argument. The <code>cli.subcommand()</code> decorator designates this function as a subcommand. The name of the subcommand will be taken from the name of the function.</p><p>Once inside our function we find a typical &quot;Hello, World!&quot; program. We use <code>cli.log</code> to access the underlying <a href="https://docs.python.org/3.7/library/logging.html#logger-objects" target="_blank" rel="noreferrer">Logger Object</a>, whose behavior is user controllable. We also access the value for name supplied by the user as <code>cli.config.hello.name</code>. The value for <code>cli.config.hello.name</code> will be determined by looking at the <code>--name</code> argument supplied by the user, if not provided it will use the value in the <code>qmk.ini</code> config file, and if neither of those is provided it will fall back to the default supplied in the <code>cli.argument()</code> decorator.</p><h1 id="user-interaction" tabindex="-1">User Interaction <a class="header-anchor" href="#user-interaction" aria-label="Permalink to &quot;User Interaction&quot;">​</a></h1><p>MILC and the QMK CLI have several nice tools for interacting with the user. Using these standard tools will allow you to colorize your text for easier interactions, and allow the user to control when and how that information is displayed and stored.</p><h2 id="printing-text" tabindex="-1">Printing Text <a class="header-anchor" href="#printing-text" aria-label="Permalink to &quot;Printing Text&quot;">​</a></h2><p>There are two main methods for outputting text in a subcommand- <code>cli.log</code> and <code>cli.echo()</code>. They operate in similar ways but you should prefer to use <code>cli.log.info()</code> for most general purpose printing.</p><p>You can use special tokens to colorize your text, to make it easier to understand the output of your program. See <a href="#colorizing-text">Colorizing Text</a> below.</p><p>Both of these methods support built-in string formatting using python&#39;s <a href="https://docs.python.org/3.7/library/stdtypes.html#old-string-formatting" target="_blank" rel="noreferrer">printf style string format operations</a>. You can use tokens such as <code>%s</code> and <code>%d</code> within your text strings then pass the values as arguments. See our Hello, World program above for an example.</p><p>You should never use the format operator (<code>%</code>) directly, always pass values as arguments.</p><h3 id="logging-cli-log" tabindex="-1">Logging (<code>cli.log</code>) <a class="header-anchor" href="#logging-cli-log" aria-label="Permalink to &quot;Logging (`cli.log`)&quot;">​</a></h3><p>The <code>cli.log</code> object gives you access to a <a href="https://docs.python.org/3.7/library/logging.html#logger-objects" target="_blank" rel="noreferrer">Logger Object</a>. We have configured our log output to show the user a nice emoji for each log level (or the log level name if their terminal does not support unicode.) This way the user can tell at a glance which messages are most important when something goes wrong.</p><p>The default log level is <code>INFO</code>. If the user runs <code>qmk -v &lt;subcommand&gt;</code> the default log level will be set to <code>DEBUG</code>.</p><table><thead><tr><th>Function</th><th>Emoji</th></tr></thead><tbody><tr><td>cli.log.critical</td><td><code>{bg_red}{fg_white}¬_¬{style_reset_all}</code></td></tr><tr><td>cli.log.error</td><td><code>{fg_red}☒{style_reset_all}</code></td></tr><tr><td>cli.log.warning</td><td><code>{fg_yellow}⚠{style_reset_all}</code></td></tr><tr><td>cli.log.info</td><td><code>{fg_blue}Ψ{style_reset_all}</code></td></tr><tr><td>cli.log.debug</td><td><code>{fg_cyan}☐{style_reset_all}</code></td></tr><tr><td>cli.log.notset</td><td><code>{style_reset_all}¯\\\\_(o_o)_/¯</code></td></tr></tbody></table><h3 id="printing-cli-echo" tabindex="-1">Printing (<code>cli.echo</code>) <a class="header-anchor" href="#printing-cli-echo" aria-label="Permalink to &quot;Printing (`cli.echo`)&quot;">​</a></h3><p>Sometimes you simply need to print text outside of the log system. This is appropriate if you are outputting fixed data or writing out something that should never be logged. Most of the time you should prefer <code>cli.log.info()</code> over <code>cli.echo</code>.</p><h3 id="colorizing-text" tabindex="-1">Colorizing Text <a class="header-anchor" href="#colorizing-text" aria-label="Permalink to &quot;Colorizing Text&quot;">​</a></h3><p>You can colorize the output of your text by including color tokens within text. Use color to highlight, not to convey information. Remember that the user can disable color, and your subcommand should still be usable if they do.</p><p>You should generally avoid setting the background color, unless it&#39;s integral to what you are doing. Remember that users have a lot of preferences when it comes to their terminal color, so you should pick colors that work well against both black and white backgrounds.</p><p>Colors prefixed with &#39;fg&#39; will affect the foreground (text) color. Colors prefixed with &#39;bg&#39; will affect the background color.</p>', 33);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("table", { fg_lightyellow_ex: "" }, [
  /* @__PURE__ */ createBaseVNode("thead", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("th", null, "Color"),
      /* @__PURE__ */ createBaseVNode("th", null, "Background"),
      /* @__PURE__ */ createBaseVNode("th", null, "Extended Background"),
      /* @__PURE__ */ createBaseVNode("th", null, "Foreground"),
      /* @__PURE__ */ createBaseVNode("th", null, "Extended Foreground")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("tbody", null, [
    /* @__PURE__ */ createBaseVNode("tr", { fg_lightblack_ex: "" }, [
      /* @__PURE__ */ createBaseVNode("td", null, "Black"),
      /* @__PURE__ */ createBaseVNode("td", { bg_black: "" }),
      /* @__PURE__ */ createBaseVNode("td", { bg_lightblack_ex: "" }),
      /* @__PURE__ */ createBaseVNode("td", { fg_black: "" }),
      /* @__PURE__ */ createBaseVNode("td")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", { fg_lightblue_ex: "" }, [
      /* @__PURE__ */ createBaseVNode("td", null, "Blue"),
      /* @__PURE__ */ createBaseVNode("td", { bg_blue: "" }),
      /* @__PURE__ */ createBaseVNode("td", { bg_lightblue_ex: "" }),
      /* @__PURE__ */ createBaseVNode("td", { fg_blue: "" }),
      /* @__PURE__ */ createBaseVNode("td")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", { fg_lightcyan_ex: "" }, [
      /* @__PURE__ */ createBaseVNode("td", null, "Cyan"),
      /* @__PURE__ */ createBaseVNode("td", { bg_cyan: "" }),
      /* @__PURE__ */ createBaseVNode("td", { bg_lightcyan_ex: "" }),
      /* @__PURE__ */ createBaseVNode("td", { fg_cyan: "" }),
      /* @__PURE__ */ createBaseVNode("td")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", { fg_lightgreen_ex: "" }, [
      /* @__PURE__ */ createBaseVNode("td", null, "Green"),
      /* @__PURE__ */ createBaseVNode("td", { bg_green: "" }),
      /* @__PURE__ */ createBaseVNode("td", { bg_lightgreen_ex: "" }),
      /* @__PURE__ */ createBaseVNode("td", { fg_green: "" }),
      /* @__PURE__ */ createBaseVNode("td")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", { fg_lightmagenta_ex: "" }, [
      /* @__PURE__ */ createBaseVNode("td", null, "Magenta"),
      /* @__PURE__ */ createBaseVNode("td", { bg_magenta: "" }),
      /* @__PURE__ */ createBaseVNode("td", { bg_lightmagenta_ex: "" }),
      /* @__PURE__ */ createBaseVNode("td", { fg_magenta: "" }),
      /* @__PURE__ */ createBaseVNode("td")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", { fg_lightred_ex: "" }, [
      /* @__PURE__ */ createBaseVNode("td", null, "Red"),
      /* @__PURE__ */ createBaseVNode("td", { bg_red: "" }),
      /* @__PURE__ */ createBaseVNode("td", { bg_lightred_ex: "" }),
      /* @__PURE__ */ createBaseVNode("td", { fg_red: "" }),
      /* @__PURE__ */ createBaseVNode("td")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", { fg_lightwhite_ex: "" }, [
      /* @__PURE__ */ createBaseVNode("td", null, "White"),
      /* @__PURE__ */ createBaseVNode("td", { bg_white: "" }),
      /* @__PURE__ */ createBaseVNode("td", { bg_lightwhite_ex: "" }),
      /* @__PURE__ */ createBaseVNode("td", { fg_white: "" }),
      /* @__PURE__ */ createBaseVNode("td")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "Yellow"),
      /* @__PURE__ */ createBaseVNode("td", { bg_yellow: "" }),
      /* @__PURE__ */ createBaseVNode("td", { bg_lightyellow_ex: "" }),
      /* @__PURE__ */ createBaseVNode("td", { fg_yellow: "" }),
      /* @__PURE__ */ createBaseVNode("td")
    ])
  ])
], -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("p", null, "There are also control sequences that can be used to change the behavior of ANSI output:", -1);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("table", null, [
  /* @__PURE__ */ createBaseVNode("thead", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("th", null, "Control Sequences"),
      /* @__PURE__ */ createBaseVNode("th", null, "Description")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("tbody", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", { style_bright: "" }),
      /* @__PURE__ */ createBaseVNode("td", null, "Make the text brighter")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", { style_dim: "" }),
      /* @__PURE__ */ createBaseVNode("td", null, "Make the text dimmer")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", { style_normal: "" }),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createTextVNode("Make the text normal (neither "),
        /* @__PURE__ */ createBaseVNode("code", null, "{style_bright}"),
        /* @__PURE__ */ createTextVNode(" nor "),
        /* @__PURE__ */ createBaseVNode("code", null, "{style_dim}"),
        /* @__PURE__ */ createTextVNode(")")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", { style_reset_all: "" }),
      /* @__PURE__ */ createBaseVNode("td", null, "Reset all text attributes to default. (This is automatically added to the end of every string.)")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", { bg_reset: "" }),
      /* @__PURE__ */ createBaseVNode("td", null, "Reset the background color to the user's default")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", { fg_reset: "" }),
      /* @__PURE__ */ createBaseVNode("td", null, "Reset the foreground color to the user's default")
    ])
  ])
], -1);
const _hoisted_37 = /* @__PURE__ */ createStaticVNode('<h1 id="arguments-and-configuration" tabindex="-1">Arguments and Configuration <a class="header-anchor" href="#arguments-and-configuration" aria-label="Permalink to &quot;Arguments and Configuration&quot;">​</a></h1><p>QMK handles the details of argument parsing and configuration for you. When you add a new argument it is automatically incorporated into the config tree based on your subcommand&#39;s name and the long name of the argument. You can access this configuration in <code>cli.config</code>, using either attribute-style access (<code>cli.config.&lt;subcommand&gt;.&lt;argument&gt;</code>) or dictionary-style access (<code>cli.config[&#39;&lt;subcommand&gt;&#39;][&#39;&lt;argument&gt;&#39;]</code>).</p><p>Under the hood QMK uses <a href="https://docs.python.org/3/library/configparser.html" target="_blank" rel="noreferrer">ConfigParser</a> to store configurations. This gives us an easy and straightforward way to represent the configuration in a human-editable way. We have wrapped access to this configuration to provide some nicities that ConfigParser does not normally have.</p><h2 id="reading-configuration-values" tabindex="-1">Reading Configuration Values <a class="header-anchor" href="#reading-configuration-values" aria-label="Permalink to &quot;Reading Configuration Values&quot;">​</a></h2><p>You can interact with <code>cli.config</code> in all the ways you&#39;d normally expect. For example the <code>qmk compile</code> command gets the keyboard name from <code>cli.config.compile.keyboard</code>. It does not need to know whether that value came from the command line, an environment variable, or the configuration file.</p><p>Iteration is also supported:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>for section in cli.config:</span></span>\n<span class="line"><span>    for key in cli.config[section]:</span></span>\n<span class="line"><span>        cli.log.info(&#39;%s.%s: %s&#39;, section, key, cli.config[section][key])</span></span></code></pre></div><h2 id="setting-configuration-values" tabindex="-1">Setting Configuration Values <a class="header-anchor" href="#setting-configuration-values" aria-label="Permalink to &quot;Setting Configuration Values&quot;">​</a></h2><p>You can set configuration values in the usual ways.</p><p>Dictionary style:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cli.config[&#39;&lt;section&gt;&#39;][&#39;&lt;key&gt;&#39;] = &lt;value&gt;</span></span></code></pre></div><p>Attribute style:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cli.config.&lt;section&gt;.&lt;key&gt; = &lt;value&gt;</span></span></code></pre></div><h2 id="deleting-configuration-values" tabindex="-1">Deleting Configuration Values <a class="header-anchor" href="#deleting-configuration-values" aria-label="Permalink to &quot;Deleting Configuration Values&quot;">​</a></h2><p>You can delete configuration values in the usual ways.</p><p>Dictionary style:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>del(cli.config[&#39;&lt;section&gt;&#39;][&#39;&lt;key&gt;&#39;])</span></span></code></pre></div><p>Attribute style:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>del(cli.config.&lt;section&gt;.&lt;key&gt;)</span></span></code></pre></div><h2 id="writing-the-configuration-file" tabindex="-1">Writing The Configuration File <a class="header-anchor" href="#writing-the-configuration-file" aria-label="Permalink to &quot;Writing The Configuration File&quot;">​</a></h2><p>The configuration is not written out when it is changed. Most commands do not need to do this. We prefer to have the user change their configuration deliberately using <code>qmk config</code>.</p><p>You can use <code>cli.save_config()</code> to write out the configuration.</p><h2 id="excluding-arguments-from-configuration" tabindex="-1">Excluding Arguments From Configuration <a class="header-anchor" href="#excluding-arguments-from-configuration" aria-label="Permalink to &quot;Excluding Arguments From Configuration&quot;">​</a></h2><p>Some arguments should not be propagated to the configuration file. These can be excluded by adding <code>arg_only=True</code> when creating the argument.</p><p>Example:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@cli.argument(&#39;-o&#39;, &#39;--output&#39;, arg_only=True, help=&#39;File to write to&#39;)</span></span>\n<span class="line"><span>@cli.argument(&#39;filename&#39;, arg_only=True, help=&#39;Configurator JSON file&#39;)</span></span>\n<span class="line"><span>@cli.subcommand(&#39;Create a keymap.c from a QMK Configurator export.&#39;)</span></span>\n<span class="line"><span>def json_keymap(cli):</span></span>\n<span class="line"><span>    pass</span></span></code></pre></div><p>You will only be able to access these arguments using <code>cli.args</code>. For example:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cli.log.info(&#39;Reading from %s and writing to %s&#39;, cli.args.filename, cli.args.output)</span></span></code></pre></div><h1 id="testing-and-linting-and-formatting-oh-my" tabindex="-1">Testing, and Linting, and Formatting (oh my!) <a class="header-anchor" href="#testing-and-linting-and-formatting-oh-my" aria-label="Permalink to &quot;Testing, and Linting, and Formatting (oh my!)&quot;">​</a></h1><p>We use nose2, flake8, and yapf to test, lint, and format code. You can use the <code>pytest</code> and <code>format-python</code> subcommands to run these tests:</p><h3 id="testing-and-linting" tabindex="-1">Testing and Linting <a class="header-anchor" href="#testing-and-linting" aria-label="Permalink to &quot;Testing and Linting&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>qmk pytest</span></span></code></pre></div><h3 id="formatting" tabindex="-1">Formatting <a class="header-anchor" href="#formatting" aria-label="Permalink to &quot;Formatting&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>qmk format-python</span></span></code></pre></div><h2 id="formatting-details" tabindex="-1">Formatting Details <a class="header-anchor" href="#formatting-details" aria-label="Permalink to &quot;Formatting Details&quot;">​</a></h2><p>We use <a href="https://github.com/google/yapf" target="_blank" rel="noreferrer">yapf</a> to automatically format code. Our configuration is in the <code>[yapf]</code> section of <code>setup.cfg</code>.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Many editors can use yapf as a plugin to automatically format code as you type.</p></div><h2 id="testing-details" tabindex="-1">Testing Details <a class="header-anchor" href="#testing-details" aria-label="Permalink to &quot;Testing Details&quot;">​</a></h2><p>Our tests can be found in <code>lib/python/qmk/tests/</code>. You will find both unit and integration tests in this directory. We hope you will write both unit and integration tests for your code, but if you do not please favor integration tests.</p><p>If your PR does not include a comprehensive set of tests please add comments like this to your code so that other people know where they can help:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">TODO</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">(unassigned/&lt;your_github_username&gt;): Write &lt;unit|integration&gt; tests</span></span></code></pre></div><p>We use <a href="https://nose2.readthedocs.io/en/latest/getting_started.html" target="_blank" rel="noreferrer">nose2</a> to run our tests. You can refer to the nose2 documentation for more details on what you can do in your test functions.</p><h2 id="linting-details" tabindex="-1">Linting Details <a class="header-anchor" href="#linting-details" aria-label="Permalink to &quot;Linting Details&quot;">​</a></h2><p>We use flake8 to lint our code. Your code should pass flake8 before you open a PR. This will be checked when you run <code>qmk pytest</code> and by CI when you submit a PR.</p>', 44);
const _hoisted_81 = [
  _hoisted_1,
  _hoisted_34,
  _hoisted_35,
  _hoisted_36,
  _hoisted_37
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_81);
}
const cli_development = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  cli_development as default
};
