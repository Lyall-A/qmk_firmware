import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.Clpp4x2N.js";
const __pageData = JSON.parse('{"title":"How to Contribute","description":"","frontmatter":{},"headers":[],"relativePath":"contributing.md","filePath":"contributing.md"}');
const _sfc_main = { name: "contributing.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="how-to-contribute" tabindex="-1">How to Contribute <a class="header-anchor" href="#how-to-contribute" aria-label="Permalink to &quot;How to Contribute&quot;">​</a></h1><p>👍🎉 First off, thanks for taking the time to read this and contribute! 🎉👍</p><p>Third-party contributions help us grow and improve QMK. We want to make the pull request and contribution process useful and easy for both contributors and maintainers. To this end we&#39;ve put together some guidelines for contributors to help your pull request be accepted without major changes.</p><ul><li><a href="#project-overview">Project Overview</a></li><li><a href="#coding-conventions">Coding Conventions</a></li><li><a href="#general-guidelines">General Guidelines</a></li><li><a href="#what-does-the-code-of-conduct-mean-for-me">What does the Code of Conduct mean for me?</a></li></ul><h2 id="i-don-t-want-to-read-this-whole-thing-i-just-have-a-question" tabindex="-1">I Don&#39;t Want to Read This Whole Thing! I Just Have a Question! <a class="header-anchor" href="#i-don-t-want-to-read-this-whole-thing-i-just-have-a-question" aria-label="Permalink to &quot;I Don&#39;t Want to Read This Whole Thing! I Just Have a Question!&quot;">​</a></h2><p>If you&#39;d like to ask questions about QMK you can do so on the <a href="https://reddit.com/r/olkb" target="_blank" rel="noreferrer">OLKB Subreddit</a> or on <a href="https://discord.gg/qmk" target="_blank" rel="noreferrer">Discord</a>.</p><p>Please keep these things in mind:</p><ul><li>It may take several hours for someone to respond to your question. Please be patient!</li><li>Everyone involved with QMK is donating their time and energy. We don&#39;t get paid to work on or answer questions about QMK.</li><li>Try to ask your question so it&#39;s as easy to answer as possible. If you&#39;re not sure how to do that these are some good guides: <ul><li><a href="https://opensource.com/life/16/10/how-ask-technical-questions" target="_blank" rel="noreferrer">https://opensource.com/life/16/10/how-ask-technical-questions</a></li><li><a href="http://www.catb.org/esr/faqs/smart-questions.html" target="_blank" rel="noreferrer">http://www.catb.org/esr/faqs/smart-questions.html</a></li></ul></li></ul><h1 id="project-overview" tabindex="-1">Project Overview <a class="header-anchor" href="#project-overview" aria-label="Permalink to &quot;Project Overview&quot;">​</a></h1><p>QMK is largely written in C, with specific features and parts written in C++. It targets embedded processors found in keyboards, particularly AVR (<a href="https://www.fourwalledcubicle.com/LUFA.php" target="_blank" rel="noreferrer">LUFA</a>) and ARM (<a href="https://www.chibios.org" target="_blank" rel="noreferrer">ChibiOS</a>). If you are already well versed in Arduino programming you&#39;ll find a lot of the concepts and limitations familiar. Prior experience with Arduino is not required to successfully contribute to QMK.</p><h1 id="where-can-i-go-for-help" tabindex="-1">Where Can I Go for Help? <a class="header-anchor" href="#where-can-i-go-for-help" aria-label="Permalink to &quot;Where Can I Go for Help?&quot;">​</a></h1><p>If you need help you can <a href="https://github.com/qmk/qmk_firmware/issues" target="_blank" rel="noreferrer">open an issue</a> or <a href="https://discord.gg/qmk" target="_blank" rel="noreferrer">chat on Discord</a>.</p><h1 id="how-do-i-make-a-contribution" tabindex="-1">How Do I Make a Contribution? <a class="header-anchor" href="#how-do-i-make-a-contribution" aria-label="Permalink to &quot;How Do I Make a Contribution?&quot;">​</a></h1><p>Never made an open source contribution before? Wondering how contributions work in QMK? Here&#39;s a quick rundown!</p><ol start="0"><li>Sign up for a <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a> account.</li><li><a href="https://github.com/qmk/qmk_firmware/issues" target="_blank" rel="noreferrer">Find an issue</a> you are interested in addressing, or <a href="https://github.com/qmk/qmk_firmware/issues?q=is%3Aopen+is%3Aissue+label%3Afeature" target="_blank" rel="noreferrer">a feature</a> you would like to add.</li><li>Fork the repository associated with the issue to your GitHub account. This means that you will have a copy of the repository under <code>your-GitHub-username/qmk_firmware</code>.</li><li>Clone the repository to your local machine using <code>git clone https://github.com/github-username/repository-name.git</code>.</li><li>If you&#39;re working on a new feature consider opening an issue to talk with us about the work you&#39;re about to undertake.</li><li>Create a new branch for your fix using <code>git checkout -b branch-name-here</code>.</li><li>Make the appropriate changes for the issue you are trying to address or the feature that you want to add.</li><li>Use <code>git add insert-paths-of-changed-files-here</code> to add the file contents of the changed files to the &quot;snapshot&quot; git uses to manage the state of the project, also known as the index.</li><li>Use <code>git commit -m &quot;Insert a short message of the changes made here&quot;</code> to store the contents of the index with a descriptive message.</li><li>Push the changes to your repository on GitHub using <code>git push origin branch-name-here</code>.</li><li>Submit a pull request to <a href="https://github.com/qmk/qmk_firmware/pull/new/master" target="_blank" rel="noreferrer">QMK Firmware</a>.</li><li>Title the pull request with a short description of the changes made and the issue or bug number associated with your change. For example, you can title an issue like so &quot;Added more log outputting to resolve #4352&quot;.</li><li>In the description of the pull request explain the changes that you made, any issues you think exist with the pull request you made, and any questions you have for the maintainer. It&#39;s OK if your pull request is not perfect (no pull request is), the reviewer will be able to help you fix any problems and improve it!</li><li>Wait for the pull request to be reviewed by a maintainer.</li><li>Make changes to the pull request if the reviewing maintainer recommends them.</li><li>Celebrate your success after your pull request is merged!</li></ol><h1 id="coding-conventions" tabindex="-1">Coding Conventions <a class="header-anchor" href="#coding-conventions" aria-label="Permalink to &quot;Coding Conventions&quot;">​</a></h1><p>Most of our style is pretty easy to pick up on. If you are familiar with either C or Python you should not have too much trouble with our local styles.</p><ul><li><a href="./coding_conventions_c">Coding Conventions - C</a></li><li><a href="./coding_conventions_python">Coding Conventions - Python</a></li></ul><h1 id="general-guidelines" tabindex="-1">General Guidelines <a class="header-anchor" href="#general-guidelines" aria-label="Permalink to &quot;General Guidelines&quot;">​</a></h1><p>We have a few different types of changes in QMK, each requiring a different level of rigor. We&#39;d like you to keep the following guidelines in mind no matter what type of change you&#39;re making.</p><ul><li><strong>Before you contribute:</strong> Please make sure your fork is up to date with the upstream <code>qmk_firmware</code> repo. This will help minimize CI failures that may not occur for you when compiling locally.</li><li>Separate PRs into logical units. For example, do not submit one PR covering two separate features, instead submit a separate PR for each feature.</li><li>Check for unnecessary whitespace with <code>git diff --check</code> before committing.</li><li>Make sure your code change actually compiles. <ul><li>Keymaps: Make sure that <code>make keyboard:keymap</code> does not return any errors.</li><li>Keyboards: Make sure that <code>make keyboard:all</code> does not return any errors.</li><li>Core: Make sure that <code>make all</code> does not return any errors.</li></ul></li><li>Note that user-keymap and userspace contributions are no longer accepted.</li><li>Make sure commit messages are understandable on their own. You should put a short description (no more than 70 characters) on the first line, the second line should be empty, and on the 3rd and later lines you should describe your commit in detail, if required. Example:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Adjust the fronzlebop for the kerpleplork</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>The kerpleplork was intermittently failing with error code 23. The root cause was the fronzlebop setting, which causes the kerpleplork to activate every N iterations.</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>Limited experimentation on the devices I have available shows that 7 is high enough to avoid confusing the kerpleplork, but I&#39;d like to get some feedback from people with ARM devices to be sure.</span></span></code></pre></div><h2 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h2><p>Documentation is one of the easiest ways to get started contributing to QMK. Finding places where the documentation is wrong or incomplete and fixing those is easy! We also very badly need someone to edit our documentation, so if you have editing skills but aren&#39;t sure where or how to jump in please <a href="#where-can-i-go-for-help">reach out for help</a>!</p><p>You&#39;ll find all our documentation in the <code>qmk_firmware/docs</code> directory, or if you&#39;d rather use a web based workflow you can click the &quot;Edit this page&quot; link at the bottom of each page on <a href="https://docs.qmk.fm/" target="_blank" rel="noreferrer">https://docs.qmk.fm/</a>.</p><p>When providing code examples in your documentation, try to observe naming conventions used elsewhere in the docs. For example, standardizing enums as <code>my_layers</code> or <code>my_keycodes</code> for consistency:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">enum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> my_layers {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  _FIRST_LAYER,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  _SECOND_LAYER</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">enum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> my_keycodes {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FIRST_LAYER </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SAFE_RANGE,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SECOND_LAYER</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h3 id="previewing-the-documentation" tabindex="-1">Previewing the Documentation <a class="header-anchor" href="#previewing-the-documentation" aria-label="Permalink to &quot;Previewing the Documentation {#previewing-the-documentation}&quot;">​</a></h3><p>Before opening a pull request, you can preview your changes if you have set up the development environment by running this command from the <code>qmk_firmware/</code> folder:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>qmk docs</span></span></code></pre></div><p>and navigating to <code>http://localhost:5173/</code>.</p><h2 id="keyboards" tabindex="-1">Keyboards <a class="header-anchor" href="#keyboards" aria-label="Permalink to &quot;Keyboards&quot;">​</a></h2><p>Keyboards are the raison d&#39;être for QMK. Some keyboards are community maintained, while others are maintained by the people responsible for making a particular keyboard. The <code>readme.md</code> should tell you who maintains a particular keyboard. If you have questions relating to a particular keyboard you can <a href="https://github.com/qmk/qmk_firmware/issues" target="_blank" rel="noreferrer">Open An Issue</a> and tag the maintainer in your question.</p><p>We also ask that you follow these guidelines:</p><ul><li>Write a <code>readme.md</code> using <a href="./documentation_templates">the template</a>.</li><li>Include a <code>default</code> keymap that provides a clean slate for users to start with when creating their own keymaps.</li><li>Do not lump core features in with new keyboards. Submit the feature first and then submit a separate PR for the keyboard.</li><li>Name <code>.c</code>/<code>.h</code> file after the immediate parent folder, eg <code>/keyboards/&lt;kb1&gt;/&lt;kb2&gt;/&lt;kb2&gt;.[ch]</code></li><li>Do not include <code>Makefile</code>s in your keyboard folder (they&#39;re no longer used)</li><li>Update copyrights in file headers (look for <code>%YOUR_NAME%</code>)</li></ul><h2 id="quantum-tmk-core" tabindex="-1">Quantum/TMK Core <a class="header-anchor" href="#quantum-tmk-core" aria-label="Permalink to &quot;Quantum/TMK Core&quot;">​</a></h2><p>Before you put a lot of work into building your new feature you should make sure you are implementing it in the best way. You can get a basic understanding of QMK by reading <a href="./understanding_qmk">Understanding QMK</a>, which will take you on a tour of the QMK program flow. From here you should talk to us to get a sense of the best way to implement your idea. There are two main ways to do this:</p><ul><li><a href="https://discord.gg/qmk" target="_blank" rel="noreferrer">Chat on Discord</a></li><li><a href="https://github.com/qmk/qmk_firmware/issues/new" target="_blank" rel="noreferrer">Open an Issue</a></li></ul><p>Feature and Bug Fix PRs affect all keyboards. We are also in the process of restructuring QMK. For this reason it is especially important for significant changes to be discussed before implementation has happened. If you open a PR without talking to us first please be prepared to do some significant rework if your choices do not mesh well with our planned direction.</p><p>Here are some things to keep in mind when working on your feature or bug fix.</p><ul><li><strong>Disabled by default</strong> - memory is a pretty limited on most chips QMK supports, and it&#39;s important that current keymaps aren&#39;t broken, so please allow your feature to be turned <strong>on</strong>, rather than being turned off. If you think it should be on by default, or reduces the size of the code, please talk with us about it.</li><li><strong>Compile locally before submitting</strong> - hopefully this one is obvious, but things need to compile! You should always make sure your changes compile before opening a pull request.</li><li><strong>Consider revisions and different chip-bases</strong> - there are several keyboards that have revisions that allow for slightly different configurations, and even different chip-bases. Try to make a feature supported in ARM and AVR, or automatically disabled on platforms it doesn&#39;t work on.</li><li><strong>Explain your feature</strong> - Document it in <code>docs/</code>, either as a new file or as part of an existing file. If you don&#39;t document it other people won&#39;t be able to benefit from your hard work.</li></ul><p>We also ask that you follow these guidelines:</p><ul><li>Keep the number of commits reasonable or we will squash your PR</li><li>Do not lump keyboards or keymaps in with core changes. Submit your core changes first.</li><li>Write <a href="./unit_testing">Unit Tests</a> for your feature</li><li>Follow the style of the file you are editing. If the style is unclear or there are mixed styles you should conform to the <a href="#coding-conventions">coding conventions</a> above.</li></ul><h2 id="refactoring" tabindex="-1">Refactoring <a class="header-anchor" href="#refactoring" aria-label="Permalink to &quot;Refactoring&quot;">​</a></h2><p>To maintain a clear vision of how things are laid out in QMK we try to plan out refactors in-depth and have a collaborator make the changes. If you have an idea for refactoring, or suggestions, <a href="https://github.com/qmk/qmk_firmware/issues" target="_blank" rel="noreferrer">open an issue</a>, we&#39;d love to talk about how QMK can be improved.</p><h1 id="what-does-the-code-of-conduct-mean-for-me" tabindex="-1">What Does the Code of Conduct Mean for Me? <a class="header-anchor" href="#what-does-the-code-of-conduct-mean-for-me" aria-label="Permalink to &quot;What Does the Code of Conduct Mean for Me?&quot;">​</a></h1><p>Our <a href="https://qmk.fm/coc/" target="_blank" rel="noreferrer">Code of Conduct</a> means that you are responsible for treating everyone on the project with respect and courtesy regardless of their identity. If you are the victim of any inappropriate behavior or comments as described in our Code of Conduct, we are here for you and will do the best to ensure that the abuser is reprimanded appropriately, per our code.</p>', 47);
const _hoisted_48 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_48);
}
const contributing = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  contributing as default
};
