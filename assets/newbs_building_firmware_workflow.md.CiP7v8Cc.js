import { _ as _export_sfc, D as resolveComponent, c as createElementBlock, I as createVNode, w as withCtx, a8 as createStaticVNode, o as openBlock, l as createBaseVNode, a as createTextVNode } from "./chunks/framework.Clpp4x2N.js";
const __pageData = JSON.parse('{"title":"Building QMK with GitHub Userspace","description":"","frontmatter":{},"headers":[],"relativePath":"newbs_building_firmware_workflow.md","filePath":"newbs_building_firmware_workflow.md"}');
const _sfc_main = { name: "newbs_building_firmware_workflow.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="building-qmk-with-github-userspace" tabindex="-1">Building QMK with GitHub Userspace <a class="header-anchor" href="#building-qmk-with-github-userspace" aria-label="Permalink to &quot;Building QMK with GitHub Userspace&quot;">​</a></h1><p>This is an intermediate QMK tutorial to setup an out-of-tree build environment with a personal GitHub repository. It avoids using a fork of the QMK firmware to store and build your keymap within its source tree. Keymap files will instead be stored in your own personal GitHub repository, in <a href="./feature_userspace">Userspace</a> format, and built with an action workflow. Unlike the <a href="./newbs">default tutorial</a>, this guide requires some familiarity with using Git.</p><div class="tip custom-block"><p class="custom-block-title">Is This Guide For Me?</p><p>This is a lean setup to avoid space-consuming local build environment in your computer. Troubleshooting compile-time errors will be slower with commit uploads to GitHub for the compiler workflow.</p></div><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><p>The following are required to get started:</p><ul><li><a href="https://github.com/new" target="_blank" rel="noreferrer">GitHub Account</a><ul><li>A working account is required to setup and host your repository for GitHub Actions to build QMK firmware.</li></ul></li><li><a href="./newbs_learn_more_resources#text-editor-resources">Text editor</a><ul><li>You’ll need a program that can edit and save plain text files. The default editor that comes with many OS&#39;s does not save plain text files, so you&#39;ll need to make sure that whatever editor you chose does.</li></ul></li><li><a href="https://github.com/qmk/qmk_toolbox" target="_blank" rel="noreferrer">Toolbox</a><ul><li>A graphical program for Windows and macOS that allows you to both program and debug your custom keyboard.</li></ul></li></ul><h2 id="environment-setup" tabindex="-1">Environment Setup <a class="header-anchor" href="#environment-setup" aria-label="Permalink to &quot;Environment Setup&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you are familiar with using <a href="https://docs.github.com/en/codespaces/the-githubdev-web-based-editor" target="_blank" rel="noreferrer">github.dev</a>, you can skip to <a href="#_2-create-github-repository">step 2</a> and commit the code files that follows directly on GitHub using the web-based VSCode editor.</p></div><h3 id="_1-install-git" tabindex="-1">1. Install Git <a class="header-anchor" href="#_1-install-git" aria-label="Permalink to &quot;1. Install Git&quot;">​</a></h3><p>A working Git client is required for your local operating system to commit and push changes to GitHub.</p>', 10);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("QMK maintains a bundle of MSYS2, the CLI and all necessary dependencies including Git. Install "),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://msys.qmk.fm/",
    target: "_blank",
    rel: "noreferrer"
  }, "QMK MSYS"),
  /* @__PURE__ */ createTextVNode(" with the latest release "),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://github.com/qmk/qmk_distro_msys/releases/latest",
    target: "_blank",
    rel: "noreferrer"
  }, "here"),
  /* @__PURE__ */ createTextVNode(". Git will be part of the bundle.")
], -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Install Homebrew following the instructions on "),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://brew.sh",
    target: "_blank",
    rel: "noreferrer"
  }, "https://brew.sh"),
  /* @__PURE__ */ createTextVNode(". Git will be part of the bundle.")
], -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("p", null, "It's very likely that you already have Git installed. If not, use one of the following commands:", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("Debian / Ubuntu / Devuan: "),
    /* @__PURE__ */ createBaseVNode("code", null, "sudo apt install -y git")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("Fedora / Red Hat / CentOS: "),
    /* @__PURE__ */ createBaseVNode("code", null, "sudo yum -y install git")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("Arch / Manjaro: "),
    /* @__PURE__ */ createBaseVNode("code", null, "sudo pacman --needed --noconfirm -S git")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("Void: "),
    /* @__PURE__ */ createBaseVNode("code", null, "sudo xbps-install -y git")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("Solus: "),
    /* @__PURE__ */ createBaseVNode("code", null, "sudo eopkg -y install git")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("Sabayon: "),
    /* @__PURE__ */ createBaseVNode("code", null, "sudo equo install dev-vcs/git")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("Gentoo: "),
    /* @__PURE__ */ createBaseVNode("code", null, "sudo emerge dev-vcs/git")
  ])
], -1);
const _hoisted_15 = /* @__PURE__ */ createStaticVNode('<h3 id="_2-github-authentication" tabindex="-1">2. GitHub authentication <a class="header-anchor" href="#_2-github-authentication" aria-label="Permalink to &quot;2. GitHub authentication&quot;">​</a></h3><p>If your GitHub account is not configured for <a href="https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/" target="_blank" rel="noreferrer">authenticated Git operations</a>, you will need to setup at least one of the following:</p><ul><li><a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token" target="_blank" rel="noreferrer">Personal access token</a></li><li><a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh" target="_blank" rel="noreferrer">Connecting with SSH</a></li></ul><h3 id="_3-create-a-repository" tabindex="-1">3. Create a repository <a class="header-anchor" href="#_3-create-a-repository" aria-label="Permalink to &quot;3. Create a repository&quot;">​</a></h3><p>You will need a personal GitHub repository to host your QMK code. Follow <a href="https://docs.github.com/en/get-started/quickstart/create-a-repo#create-a-repository" target="_blank" rel="noreferrer">this guide</a> to create one named <code>qmk_keymap</code>. Do not proceed to commit any files just yet.</p><h2 id="initial-code-commit" tabindex="-1">Initial Code Commit <a class="header-anchor" href="#initial-code-commit" aria-label="Permalink to &quot;Initial Code Commit&quot;">​</a></h2><h3 id="create-template-files" tabindex="-1">Create template files <a class="header-anchor" href="#create-template-files" aria-label="Permalink to &quot;Create template files&quot;">​</a></h3><p>Run the following commands in your computer to create a folder with a few template files:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mkdir -p ~/qmk_keymap/.github/workflows</span></span>\n<span class="line"><span>touch ~/qmk_keymap/.github/workflows/build.yml</span></span>\n<span class="line"><span>touch ~/qmk_keymap/config.h</span></span>\n<span class="line"><span>echo &quot;SRC += source.c&quot; &gt; ~/qmk_keymap/rules.mk</span></span>\n<span class="line"><span>echo &quot;#include QMK_KEYBOARD_H&quot; &gt; ~/qmk_keymap/source.c</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>For Windows user running MSYS, those commands will create the folder <code>qmk_keymap/</code> and its content in the <code>C:\\Users\\&lt;windows_username&gt;\\qmk_keymap\\</code> path location.</p></div><h3 id="add-a-json-keymap" tabindex="-1">Add a JSON keymap <a class="header-anchor" href="#add-a-json-keymap" aria-label="Permalink to &quot;Add a JSON keymap&quot;">​</a></h3><p>Visit the <a href="https://config.qmk.fm/#/" target="_blank" rel="noreferrer">QMK Configurator</a> to create a keymap file:</p><ol><li>Select your keyboard from the drop-down list (and choose a layout if required).</li><li>Use your GitHub username for the <strong>Keymap Name</strong> field.</li><li>Customise the key layout according to your preference.</li><li>Select download next to <strong>KEYMAP.JSON</strong> and save the JSON file into the <code>~/qmk_keymap/</code> folder.</li></ol><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>Important:</strong> Make sure that the GitHub username you use in step 2 is correct. If it is not, the build process will fail to locate your files in the right folder.</p></div><h3 id="add-a-github-action-workflow" tabindex="-1">Add a GitHub Action workflow <a class="header-anchor" href="#add-a-github-action-workflow" aria-label="Permalink to &quot;Add a GitHub Action workflow&quot;">​</a></h3><p>Open the file <code>~/qmk_keymap/.github/workflows/build.yml</code> with your favorite <a href="./newbs_learn_more_resources#text-editor-resources">text editor</a>, paste the following workflow content, and save it:</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Build QMK firmware</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">workflow_dispatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">jobs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu-latest</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ghcr.io/qmk/qmk_cli</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    strategy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      fail-fast</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      matrix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># List of keymap json files to build</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">username.json</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># End of json file list</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Disable git safe directory checks</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">git config --global --add safe.directory &#39;*&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Checkout QMK</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/checkout@v3</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        repository</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">qmk/qmk_firmware</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        submodules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">recursive</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Checkout userspace</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/checkout@v3</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">users/${{ github.actor }}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Build firmware</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">qmk compile &quot;users/${{ github.actor }}/${{ matrix.file }}&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Archive firmware</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/upload-artifact@v3</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      continue-on-error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">${{ matrix.file }}_${{ github.actor }}</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          *.hex</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          *.bin</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          *.uf2</span></span></code></pre></div><p>Replace <code>username.json</code> with the JSON file name that was downloaded from <a href="https://config.qmk.fm/#/" target="_blank" rel="noreferrer">QMK Configurator</a> in the previous step.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Do note that the <code>build.yml</code> file requires <em><strong>proper indentation</strong></em> for every line. Incorrect spacing will trigger workflow syntax errors.</p></div><h3 id="commit-files-to-github" tabindex="-1">Commit files to GitHub <a class="header-anchor" href="#commit-files-to-github" aria-label="Permalink to &quot;Commit files to GitHub&quot;">​</a></h3><p>If you have completed all steps correctly, the folder <code>qmk_keymap/</code> will contain the following files:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>├── .github</span></span>\n<span class="line"><span>│   └── workflows</span></span>\n<span class="line"><span>│       └── build.yml</span></span>\n<span class="line"><span>├── rules.mk</span></span>\n<span class="line"><span>├── config.h</span></span>\n<span class="line"><span>├── source.c</span></span>\n<span class="line"><span>└── username.json</span></span></code></pre></div><p>To commit and push them into GitHub, run the following commands (replacing <code>gh-username</code> with your GitHub user name):</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cd ~/qmk_keymap</span></span>\n<span class="line"><span>git init</span></span>\n<span class="line"><span>git add -A</span></span>\n<span class="line"><span>git commit -m &quot;Initial QMK keymap commit&quot;</span></span>\n<span class="line"><span>git branch -M main</span></span>\n<span class="line"><span>git remote add origin https://github.com/gh-username/qmk_keymap.git</span></span>\n<span class="line"><span>git push -u origin main</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Use your GitHub personal access token at the password prompt. If you have setup SSH access, replace <code>https://github.com/gh-username/qmk_keymap.git</code> with <code>git@github.com:gh-username/qmk_keymap.git</code> in the remote origin command above.</p></div><h3 id="review-workflow-output" tabindex="-1">Review workflow output <a class="header-anchor" href="#review-workflow-output" aria-label="Permalink to &quot;Review workflow output&quot;">​</a></h3><p>Files committed to GitHub in the previous step will automatically trigger the workflow to build the JSON file listed in <code>build.yml</code>. To review its output:</p><ol><li>Visit your &quot;<strong>qmk_keymap</strong>&quot; repository page on <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>.</li><li>Select <strong>Actions</strong> tab to display the &quot;<strong>Build QMK Firmware</strong>&quot; workflow.</li><li>Select that workflow to display its run from the last commit.</li><li>Successfully compiled firmware will be under the &quot;<strong>Artifacts</strong>&quot; section.</li><li>If there are build errors, review the job log for details.</li></ol><p>Download and flash the firmware file into your keyboard using <a href="./newbs_flashing#flashing-your-keyboard-with-qmk-toolbox">QMK Toolbox</a>.</p><h2 id="customising-your-keymap" tabindex="-1">Customising your keymap <a class="header-anchor" href="#customising-your-keymap" aria-label="Permalink to &quot;Customising your keymap&quot;">​</a></h2><p>This setup and workflow relies on the QMK <a href="./feature_userspace">Userspace</a> feature. The build process will copy the QMK source codes and clone your repository into its <code>users/</code> folder in a container. You must adhere to the following guidelines when customising your keymaps:</p><ul><li>Keymap layout files must be retained in JSON format and cannot be converted to <code>keymap.c</code>.</li><li>User callback and functions (e.g. <code>process_record_user()</code>) can be placed in the <code>source.c</code> file.</li><li>Multiple keymap JSON files can be built in the same workflow. List them under <code>matrix.file:</code>, e.g.:</li></ul><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">planck.json</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">crkbd.json</span></span></code></pre></div><ul><li>Code changes will require Git commit into GitHub to trigger the build workflow.</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>See <a href="https://docs.github.com/en/actions/learn-github-actions" target="_blank" rel="noreferrer">GitHub Actions guide</a> to learn more about development workflow.</p></div>', 35);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PluginTabsTab = resolveComponent("PluginTabsTab");
  const _component_PluginTabs = resolveComponent("PluginTabs");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_PluginTabs, null, {
      default: withCtx(() => [
        createVNode(_component_PluginTabsTab, { label: "Windows" }, {
          default: withCtx(() => [
            _hoisted_11
          ]),
          _: 1
        }),
        createVNode(_component_PluginTabsTab, { label: "macOS" }, {
          default: withCtx(() => [
            _hoisted_12
          ]),
          _: 1
        }),
        createVNode(_component_PluginTabsTab, { label: "Linux/WSL" }, {
          default: withCtx(() => [
            _hoisted_13,
            _hoisted_14
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    _hoisted_15
  ]);
}
const newbs_building_firmware_workflow = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  newbs_building_firmware_workflow as default
};
