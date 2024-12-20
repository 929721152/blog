import {
	_ as c,
	c as y,
	a as d,
	b as n,
	w as e,
	d as s,
	e as a,
	t as u,
	r,
	o as v,
} from './app-B_7CxFr0.js'
const m = {
		__name: 'index.html',
		setup(o, { expose: i }) {
			i()
			const k = { vuepressVersion: '2.0.0-rc.19' }
			return Object.defineProperty(k, '__isScriptSetup', { enumerable: !1, value: !0 }), k
		},
	},
	A = { class: 'vp-steps' },
	b = { class: 'hint-container warning' }
function D(o, i, g, k, B, f) {
	const p = r('VPIcon'),
		h = r('CodeTabs')
	return (
		v(),
		y('div', null, [
			i[57] ||
				(i[57] = d(
					'<h2 id="依赖环境" tabindex="-1"><a class="header-anchor" href="#依赖环境"><span>依赖环境</span></a></h2><ul><li><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js v18.20.0+</a></li><li><a href="https://pnpm.io/zh/" target="_blank" rel="noopener noreferrer">pnpm 8+</a> 或 <a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">Yarn 2+</a></li></ul><details class="hint-container details"><summary>怎么安装依赖环境？</summary><div class="vp-steps"><ol><li><p><strong>请前往 <a href="https://nodejs.org/zh-cn" target="_blank" rel="noopener noreferrer">Node.js 官网</a> 下载最新稳定版本</strong></p><p>请根据指引完成安装，一般而言，在安装过程中，您只需要保持其默认设置，直接选择下一步即可。</p></li><li><p><strong>安装 PNPM</strong></p><p>在您安装完成 node.js 后，请打开 终端，执行如下命令：</p><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">corepack</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> enable</span></span></code></pre></div><p>主题推荐您使用 pnpm 作为项目管理器。</p></li><li><p><strong>完成</strong></p></li></ol></div></details><h2 id="命令行安装" tabindex="-1"><a class="header-anchor" href="#命令行安装"><span>命令行安装</span></a></h2><p>主题提供了一个 命令行工具，帮助您构建一个基本项目。您可以通过运行以下命令，启动 安装向导。</p>',
					5
				)),
			n(
				h,
				{ id: '0', data: [{ id: 'pnpm' }, { id: 'yarn' }, { id: 'npm' }], 'tab-id': 'npm-to-53' },
				{
					title0: e(({ value: t, isActive: l }) => [
						n(p, { name: 'vscode-icons:file-type-light-pnpm' }),
						i[0] || (i[0] = s('span', null, 'pnpm', -1)),
					]),
					title1: e(({ value: t, isActive: l }) => [
						n(p, { name: 'vscode-icons:file-type-yarn' }),
						i[1] || (i[1] = s('span', null, 'yarn', -1)),
					]),
					title2: e(({ value: t, isActive: l }) => [
						n(p, { name: 'logos:npm-icon' }),
						i[2] || (i[2] = s('span', null, 'npm', -1)),
					]),
					tab0: e(
						({ value: t, isActive: l }) =>
							i[3] ||
							(i[3] = [
								s(
									'div',
									{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
									[
										s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										s('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											s('code', null, [
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'pnpm'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' create'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' vuepress-theme-plume@latest'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab1: e(
						({ value: t, isActive: l }) =>
							i[4] ||
							(i[4] = [
								s(
									'div',
									{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
									[
										s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										s('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											s('code', null, [
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'yarn'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' create'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' vuepress-theme-plume@latest'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab2: e(
						({ value: t, isActive: l }) =>
							i[5] ||
							(i[5] = [
								s(
									'div',
									{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
									[
										s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										s('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											s('code', null, [
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'npm'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' create'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' vuepress-theme-plume@latest'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					_: 1,
				}
			),
			i[58] ||
				(i[58] = d(
					`<p>启动向导后，您只需要回答几个简单的问题：</p><div class="language-ansi has-collapsed collapsed" data-ext="ansi" data-title="ansi" style="--vp-collapsed-lines:15;"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777;">┌</span><span style="--shiki-light:#2993a3;--shiki-light-font-weight:bold;--shiki-dark:#5eaab5;--shiki-dark-font-weight:bold;">  Welcome to VuePress and vuepress-theme-plume !</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777;">│</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375;">◇</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;">  Select a language to display / 选择显示语言</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777;">│</span><span style="--shiki-light:#393a3480;--shiki-dark:#dbd7ca77;">  简体中文</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777;">│</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375;">◇</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;">  您想在哪里初始化 VuePress？</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777;">│</span><span style="--shiki-light:#393a3480;--shiki-dark:#dbd7ca77;">  ./my-project</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777;">│</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375;">◇</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;">  站点名称：</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777;">│</span><span style="--shiki-light:#393a3480;--shiki-dark:#dbd7ca77;">  My Vuepress Site</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777;">│</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375;">◇</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;">  站点描述信息：</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777;">│</span><span style="--shiki-light:#393a3480;--shiki-dark:#dbd7ca77;">  My Vuepress Site Description</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777;">│</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375;">◇</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;">  是否使用多语言？</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777;">│</span><span style="--shiki-light:#393a3480;--shiki-dark:#dbd7ca77;">  No</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777;">│</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375;">◇</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;">  请选择站点默认语言</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777;">│</span><span style="--shiki-light:#393a3480;--shiki-dark:#dbd7ca77;">  简体中文</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777;">│</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375;">◇</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;">  是否使用 TypeScript？</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777;">│</span><span style="--shiki-light:#393a3480;--shiki-dark:#dbd7ca77;">  Yes</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777;">│</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375;">◇</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;">  请选择打包工具</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777;">│</span><span style="--shiki-light:#393a3480;--shiki-dark:#dbd7ca77;">  Vite</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777;">│</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375;">◇</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;">  部署方式：</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777;">│</span><span style="--shiki-light:#393a3480;--shiki-dark:#dbd7ca77;">  Custom</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777;">│</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375;">◇</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;">  是否初始化 git 仓库？</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777;">│</span><span style="--shiki-light:#393a3480;--shiki-dark:#dbd7ca77;">  Yes</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777;">│</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375;">◇</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;">  是否安装依赖？</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777;">│</span><span style="--shiki-light:#393a3480;--shiki-dark:#dbd7ca77;">  Yes</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777;">│</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375;">◇</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;">   🎉 创建成功!</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777;">│</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777;">└</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;">  🔨 执行以下命令即可启动：</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375;">      cd ./my-project</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375;">      pnpm run docs:dev</span></span></code></pre><div class="collapsed-lines"></div></div><details class="hint-container details"><summary>怎么使用命令行工具？</summary><p>以 Windows 系统为例，你可以使用以下方法来启动 CMD 命令行工具：</p><ol><li>按下 <code>Win + R</code> 键打开 “运行” 对话框。</li><li>输入 <code>cmd</code> 并按下 Enter 键。 （也可以输入 <code>powershell</code> 来打开 PowerShell）</li></ol><p>注意此时 <code>cmd</code> 可能不在你期望的目录位置，你可以使用如下命令来切换到正确的目录：</p><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">D:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 此命令将切换到 D: 分区，进入其他分区请按照实际情况修改</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> open-source</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 进入 D: 分区下的 open-source 目录</span></span></code></pre></div><p>此时，你就可以在这里输入 <code>pnpm create vuepress-theme-plume@latest</code> 来创建一个基本的项目了。</p><p>创建的项目将位于 <code>D:\\open-source\\my-project</code> 目录下。</p></details><h2 id="手动安装" tabindex="-1"><a class="header-anchor" href="#手动安装"><span>手动安装</span></a></h2><div class="hint-container info"><p class="hint-container-title">提示</p><ul><li>使用 <a href="https://pnpm.io/zh/" target="_blank" rel="noopener noreferrer">pnpm</a> 时，你需要安装 <code>vue</code> 作为 peer-dependencies 。</li><li>使用 <a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">Yarn 2+</a> 时，你需要在 <code>.yarnrc.yml</code> 文件中设置 <code>nodeLinker: &#39;node-modules&#39;</code> 。</li></ul></div><p>使用本主题，你需要首先新建一个项目，并安装<code>vuepress@next</code>以及本主题</p>`,
					6
				)),
			s('div', A, [
				s('ul', null, [
					i[49] ||
						(i[49] = d(
							`<li><h3 id="新建文件夹并进入目录" tabindex="-1"><a class="header-anchor" href="#新建文件夹并进入目录"><span>新建文件夹并进入目录</span></a></h3><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mkdir</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> my-blog</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> my-blog</span></span></code></pre></div></li>`,
							1
						)),
					s('li', null, [
						i[12] ||
							(i[12] = s(
								'h3',
								{ id: '初始化项目', tabindex: '-1' },
								[
									s('a', { class: 'header-anchor', href: '#初始化项目' }, [
										s('span', null, '初始化项目'),
									]),
								],
								-1
							)),
						n(
							h,
							{
								id: '0',
								data: [{ id: 'pnpm' }, { id: 'yarn' }, { id: 'npm' }],
								'tab-id': 'npm-to-121',
							},
							{
								title0: e(({ value: t, isActive: l }) => [
									n(p, { name: 'vscode-icons:file-type-light-pnpm' }),
									i[6] || (i[6] = s('span', null, 'pnpm', -1)),
								]),
								title1: e(({ value: t, isActive: l }) => [
									n(p, { name: 'vscode-icons:file-type-yarn' }),
									i[7] || (i[7] = s('span', null, 'yarn', -1)),
								]),
								title2: e(({ value: t, isActive: l }) => [
									n(p, { name: 'logos:npm-icon' }),
									i[8] || (i[8] = s('span', null, 'npm', -1)),
								]),
								tab0: e(
									({ value: t, isActive: l }) =>
										i[9] ||
										(i[9] = [
											s(
												'div',
												{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
												[
													s('button', {
														class: 'copy',
														title: '复制代码',
														'data-copied': '已复制',
													}),
													s(
														'pre',
														{ class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' },
														[
															s('code', null, [
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#59873A',
																				'--shiki-dark': '#80A665',
																			},
																		},
																		'git'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' init'
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#59873A',
																				'--shiki-dark': '#80A665',
																			},
																		},
																		'pnpm'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' init'
																	),
																]),
															]),
														]
													),
												],
												-1
											),
										])
								),
								tab1: e(
									({ value: t, isActive: l }) =>
										i[10] ||
										(i[10] = [
											s(
												'div',
												{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
												[
													s('button', {
														class: 'copy',
														title: '复制代码',
														'data-copied': '已复制',
													}),
													s(
														'pre',
														{ class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' },
														[
															s('code', null, [
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#59873A',
																				'--shiki-dark': '#80A665',
																			},
																		},
																		'git'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' init'
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#59873A',
																				'--shiki-dark': '#80A665',
																			},
																		},
																		'yarn'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' init'
																	),
																]),
															]),
														]
													),
												],
												-1
											),
										])
								),
								tab2: e(
									({ value: t, isActive: l }) =>
										i[11] ||
										(i[11] = [
											s(
												'div',
												{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
												[
													s('button', {
														class: 'copy',
														title: '复制代码',
														'data-copied': '已复制',
													}),
													s(
														'pre',
														{ class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' },
														[
															s('code', null, [
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#59873A',
																				'--shiki-dark': '#80A665',
																			},
																		},
																		'git'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' init'
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#59873A',
																				'--shiki-dark': '#80A665',
																			},
																		},
																		'npm'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' init'
																	),
																]),
															]),
														]
													),
												],
												-1
											),
										])
								),
								_: 1,
							}
						),
					]),
					s('li', null, [
						i[22] ||
							(i[22] = s(
								'h3',
								{ id: '安装相关依赖', tabindex: '-1' },
								[
									s('a', { class: 'header-anchor', href: '#安装相关依赖' }, [
										s('span', null, '安装相关依赖'),
									]),
								],
								-1
							)),
						i[23] ||
							(i[23] = s(
								'p',
								null,
								[
									a('安装 '),
									s('code', null, 'vuepress@next'),
									a(' 和 '),
									s('code', null, 'vuepress-theme-plume'),
									a(' 作为本地依赖。'),
								],
								-1
							)),
						n(
							h,
							{
								id: '0',
								data: [{ id: 'pnpm' }, { id: 'yarn' }, { id: 'npm' }],
								'tab-id': 'npm-to-132',
							},
							{
								title0: e(({ value: t, isActive: l }) => [
									n(p, { name: 'vscode-icons:file-type-light-pnpm' }),
									i[13] || (i[13] = s('span', null, 'pnpm', -1)),
								]),
								title1: e(({ value: t, isActive: l }) => [
									n(p, { name: 'vscode-icons:file-type-yarn' }),
									i[14] || (i[14] = s('span', null, 'yarn', -1)),
								]),
								title2: e(({ value: t, isActive: l }) => [
									n(p, { name: 'logos:npm-icon' }),
									i[15] || (i[15] = s('span', null, 'npm', -1)),
								]),
								tab0: e(
									({ value: t, isActive: l }) =>
										i[16] ||
										(i[16] = [
											s(
												'div',
												{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
												[
													s('button', {
														class: 'copy',
														title: '复制代码',
														'data-copied': '已复制',
													}),
													s(
														'pre',
														{ class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' },
														[
															s('code', null, [
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#A0ADA0',
																				'--shiki-dark': '#758575DD',
																			},
																		},
																		'# 安装 vuepress'
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#59873A',
																				'--shiki-dark': '#80A665',
																			},
																		},
																		'pnpm'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' add'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#A65E2B',
																				'--shiki-dark': '#C99076',
																			},
																		},
																		' -D'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' vuepress@nextvue'
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#A0ADA0',
																				'--shiki-dark': '#758575DD',
																			},
																		},
																		'# 安装 主题和打包工具'
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#59873A',
																				'--shiki-dark': '#80A665',
																			},
																		},
																		'pnpm'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' add'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#A65E2B',
																				'--shiki-dark': '#C99076',
																			},
																		},
																		' -D'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' vuepress-theme-plume@vuepress/bundler-vite@next'
																	),
																]),
															]),
														]
													),
												],
												-1
											),
										])
								),
								tab1: e(
									({ value: t, isActive: l }) =>
										i[17] ||
										(i[17] = [
											s(
												'div',
												{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
												[
													s('button', {
														class: 'copy',
														title: '复制代码',
														'data-copied': '已复制',
													}),
													s(
														'pre',
														{ class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' },
														[
															s('code', null, [
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#A0ADA0',
																				'--shiki-dark': '#758575DD',
																			},
																		},
																		'# 安装 vuepress'
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#59873A',
																				'--shiki-dark': '#80A665',
																			},
																		},
																		'yarn'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' add'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#A65E2B',
																				'--shiki-dark': '#C99076',
																			},
																		},
																		' -D'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' vuepress@nextvue'
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#A0ADA0',
																				'--shiki-dark': '#758575DD',
																			},
																		},
																		'# 安装 主题和打包工具'
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#59873A',
																				'--shiki-dark': '#80A665',
																			},
																		},
																		'yarn'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' add'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#A65E2B',
																				'--shiki-dark': '#C99076',
																			},
																		},
																		' -D'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' vuepress-theme-plume@vuepress/bundler-vite@next'
																	),
																]),
															]),
														]
													),
												],
												-1
											),
										])
								),
								tab2: e(
									({ value: t, isActive: l }) =>
										i[18] ||
										(i[18] = [
											s(
												'div',
												{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
												[
													s('button', {
														class: 'copy',
														title: '复制代码',
														'data-copied': '已复制',
													}),
													s(
														'pre',
														{ class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' },
														[
															s('code', null, [
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#A0ADA0',
																				'--shiki-dark': '#758575DD',
																			},
																		},
																		'# 安装 vuepress'
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#59873A',
																				'--shiki-dark': '#80A665',
																			},
																		},
																		'npm'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' i'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#A65E2B',
																				'--shiki-dark': '#C99076',
																			},
																		},
																		' -D'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' vuepress@next'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' vue'
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#A0ADA0',
																				'--shiki-dark': '#758575DD',
																			},
																		},
																		'# 安装 主题和打包工具'
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#59873A',
																				'--shiki-dark': '#80A665',
																			},
																		},
																		'npm'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' i'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#A65E2B',
																				'--shiki-dark': '#C99076',
																			},
																		},
																		' -D'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' vuepress-theme-plume'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' @vuepress/bundler-vite@next'
																	),
																]),
															]),
														]
													),
												],
												-1
											),
										])
								),
								_: 1,
							}
						),
						s('div', b, [
							i[21] || (i[21] = s('p', { class: 'hint-container-title' }, '注意', -1)),
							s('p', null, [
								i[19] || (i[19] = a('主题当前版本 已适配至 ')),
								s('code', null, 'vuepress@' + u(k.vuepressVersion), 1),
								i[20] ||
									(i[20] = a(
										'，你应该安装这个版本的 VuePress。 高于或低于这个版本，可能会存在潜在的兼容性问题。'
									)),
							]),
						]),
					]),
					s('li', null, [
						i[26] ||
							(i[26] = s(
								'h3',
								{ id: '在-package-json-中添加-script', tabindex: '-1' },
								[
									s('a', { class: 'header-anchor', href: '#在-package-json-中添加-script' }, [
										s('span', null, [
											a('在 '),
											s('code', null, 'package.json'),
											a(' 中添加 '),
											s('code', null, 'script'),
										]),
									]),
								],
								-1
							)),
						n(
							h,
							{ id: '145', data: [{ id: 'package.json' }] },
							{
								title0: e(({ value: t, isActive: l }) => [
									n(p, { name: 'vscode-icons:file-type-node' }),
									i[24] || (i[24] = s('span', null, 'package.json', -1)),
								]),
								tab0: e(
									({ value: t, isActive: l }) =>
										i[25] ||
										(i[25] = [
											s(
												'div',
												{ class: 'language-json', 'data-ext': 'json', 'data-title': 'json' },
												[
													s('button', {
														class: 'copy',
														title: '复制代码',
														'data-copied': '已复制',
													}),
													s(
														'pre',
														{ class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' },
														[
															s('code', null, [
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#999999',
																				'--shiki-dark': '#666666',
																			},
																		},
																		'{'
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#99841877',
																				'--shiki-dark': '#B8A96577',
																			},
																		},
																		'  "'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#998418',
																				'--shiki-dark': '#B8A965',
																			},
																		},
																		'scripts'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#99841877',
																				'--shiki-dark': '#B8A96577',
																			},
																		},
																		'"'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#999999',
																				'--shiki-dark': '#666666',
																			},
																		},
																		':'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#999999',
																				'--shiki-dark': '#666666',
																			},
																		},
																		' {'
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#99841877',
																				'--shiki-dark': '#B8A96577',
																			},
																		},
																		'    "'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#998418',
																				'--shiki-dark': '#B8A965',
																			},
																		},
																		'docs:dev'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#99841877',
																				'--shiki-dark': '#B8A96577',
																			},
																		},
																		'"'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#999999',
																				'--shiki-dark': '#666666',
																			},
																		},
																		':'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B5695977',
																				'--shiki-dark': '#C98A7D77',
																			},
																		},
																		' "'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		'vuepress dev docs'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B5695977',
																				'--shiki-dark': '#C98A7D77',
																			},
																		},
																		'"'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#999999',
																				'--shiki-dark': '#666666',
																			},
																		},
																		','
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#99841877',
																				'--shiki-dark': '#B8A96577',
																			},
																		},
																		'    "'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#998418',
																				'--shiki-dark': '#B8A965',
																			},
																		},
																		'docs:build'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#99841877',
																				'--shiki-dark': '#B8A96577',
																			},
																		},
																		'"'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#999999',
																				'--shiki-dark': '#666666',
																			},
																		},
																		':'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B5695977',
																				'--shiki-dark': '#C98A7D77',
																			},
																		},
																		' "'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		'vuepress build docs'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B5695977',
																				'--shiki-dark': '#C98A7D77',
																			},
																		},
																		'"'
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#999999',
																				'--shiki-dark': '#666666',
																			},
																		},
																		'  }'
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#999999',
																				'--shiki-dark': '#666666',
																			},
																		},
																		'}'
																	),
																]),
															]),
														]
													),
												],
												-1
											),
										])
								),
								_: 1,
							}
						),
						i[27] ||
							(i[27] = s(
								'p',
								null,
								[
									s('code', null, 'vuepress'),
									a(' 默认将文档源码放在 '),
									s('code', null, 'docs'),
									a(' 目录下。'),
								],
								-1
							)),
					]),
					s('li', null, [
						i[32] ||
							(i[32] = s(
								'h3',
								{ id: '将默认的临时目录和缓存目录添加到-gitignore-文件中', tabindex: '-1' },
								[
									s(
										'a',
										{
											class: 'header-anchor',
											href: '#将默认的临时目录和缓存目录添加到-gitignore-文件中',
										},
										[
											s('span', null, [
												a('将默认的临时目录和缓存目录添加到'),
												s('code', null, '.gitignore'),
												a(' 文件中'),
											]),
										]
									),
								],
								-1
							)),
						n(
							h,
							{ id: '158', data: [{ id: '.gitignore' }, { id: 'sh' }] },
							{
								title0: e(({ value: t, isActive: l }) => [
									n(p, { name: 'vscode-icons:file-type-git' }),
									i[28] || (i[28] = s('span', null, '.gitignore', -1)),
								]),
								title1: e(({ value: t, isActive: l }) => [
									n(p, { name: 'vscode-icons:file-type-shell' }),
									i[29] || (i[29] = s('span', null, 'sh', -1)),
								]),
								tab0: e(
									({ value: t, isActive: l }) =>
										i[30] ||
										(i[30] = [
											s(
												'div',
												{ class: 'language-txt', 'data-ext': 'txt', 'data-title': 'txt' },
												[
													s('button', {
														class: 'copy',
														title: '复制代码',
														'data-copied': '已复制',
													}),
													s(
														'pre',
														{ class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' },
														[
															s('code', null, [
																s('span', { class: 'line' }, [s('span', null, 'node_modules')]),
																a(`
`),
																s('span', { class: 'line' }, [s('span', null, '.temp')]),
																a(`
`),
																s('span', { class: 'line' }, [s('span', null, '.cache')]),
															]),
														]
													),
												],
												-1
											),
										])
								),
								tab1: e(
									({ value: t, isActive: l }) =>
										i[31] ||
										(i[31] = [
											s(
												'div',
												{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
												[
													s('button', {
														class: 'copy',
														title: '复制代码',
														'data-copied': '已复制',
													}),
													s(
														'pre',
														{ class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' },
														[
															s('code', null, [
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#998418',
																				'--shiki-dark': '#B8A965',
																			},
																		},
																		'echo'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B5695977',
																				'--shiki-dark': '#C98A7D77',
																			},
																		},
																		" '"
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		'node_modules'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B5695977',
																				'--shiki-dark': '#C98A7D77',
																			},
																		},
																		"'"
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#AB5959',
																				'--shiki-dark': '#CB7676',
																			},
																		},
																		' >>'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' .gitignore'
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#998418',
																				'--shiki-dark': '#B8A965',
																			},
																		},
																		'echo'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B5695977',
																				'--shiki-dark': '#C98A7D77',
																			},
																		},
																		" '"
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		'.temp'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B5695977',
																				'--shiki-dark': '#C98A7D77',
																			},
																		},
																		"'"
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#AB5959',
																				'--shiki-dark': '#CB7676',
																			},
																		},
																		' >>'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' .gitignore'
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#998418',
																				'--shiki-dark': '#B8A965',
																			},
																		},
																		'echo'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B5695977',
																				'--shiki-dark': '#C98A7D77',
																			},
																		},
																		" '"
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		'.cache'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B5695977',
																				'--shiki-dark': '#C98A7D77',
																			},
																		},
																		"'"
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#AB5959',
																				'--shiki-dark': '#CB7676',
																			},
																		},
																		' >>'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' .gitignore'
																	),
																]),
															]),
														]
													),
												],
												-1
											),
										])
								),
								_: 1,
							}
						),
					]),
					s('li', null, [
						i[35] ||
							(i[35] = s(
								'h3',
								{ id: '在-docs-vuepress-config-js-ts-中配置主题', tabindex: '-1' },
								[
									s(
										'a',
										{ class: 'header-anchor', href: '#在-docs-vuepress-config-js-ts-中配置主题' },
										[
											s('span', null, [
												a('在 '),
												s('code', null, 'docs/.vuepress/config.{js,ts}'),
												a(' 中配置主题'),
											]),
										]
									),
								],
								-1
							)),
						n(
							h,
							{ id: '171', data: [{ id: 'docs/.vuepress/config.ts' }] },
							{
								title0: e(({ value: t, isActive: l }) => [
									n(p, { name: 'vscode-icons:file-type-typescript' }),
									i[33] || (i[33] = s('span', null, 'docs/.vuepress/config.ts', -1)),
								]),
								tab0: e(
									({ value: t, isActive: l }) =>
										i[34] ||
										(i[34] = [
											s(
												'div',
												{ class: 'language-ts', 'data-ext': 'ts', 'data-title': 'ts' },
												[
													s('button', {
														class: 'copy',
														title: '复制代码',
														'data-copied': '已复制',
													}),
													s(
														'pre',
														{ class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' },
														[
															s('code', null, [
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#1E754F',
																				'--shiki-dark': '#4D9375',
																			},
																		},
																		'import'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#999999',
																				'--shiki-dark': '#666666',
																			},
																		},
																		' {'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B07D48',
																				'--shiki-dark': '#BD976A',
																			},
																		},
																		' viteBundler'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#999999',
																				'--shiki-dark': '#666666',
																			},
																		},
																		' }'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#1E754F',
																				'--shiki-dark': '#4D9375',
																			},
																		},
																		' from'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B5695977',
																				'--shiki-dark': '#C98A7D77',
																			},
																		},
																		" '"
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		'@vuepress/bundler-vite'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B5695977',
																				'--shiki-dark': '#C98A7D77',
																			},
																		},
																		"'"
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#1E754F',
																				'--shiki-dark': '#4D9375',
																			},
																		},
																		'import'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#999999',
																				'--shiki-dark': '#666666',
																			},
																		},
																		' {'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B07D48',
																				'--shiki-dark': '#BD976A',
																			},
																		},
																		' defineUserConfig'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#999999',
																				'--shiki-dark': '#666666',
																			},
																		},
																		' }'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#1E754F',
																				'--shiki-dark': '#4D9375',
																			},
																		},
																		' from'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B5695977',
																				'--shiki-dark': '#C98A7D77',
																			},
																		},
																		" '"
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		'vuepress'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B5695977',
																				'--shiki-dark': '#C98A7D77',
																			},
																		},
																		"'"
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#1E754F',
																				'--shiki-dark': '#4D9375',
																			},
																		},
																		'import'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#999999',
																				'--shiki-dark': '#666666',
																			},
																		},
																		' {'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B07D48',
																				'--shiki-dark': '#BD976A',
																			},
																		},
																		' plumeTheme'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#999999',
																				'--shiki-dark': '#666666',
																			},
																		},
																		' }'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#1E754F',
																				'--shiki-dark': '#4D9375',
																			},
																		},
																		' from'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B5695977',
																				'--shiki-dark': '#C98A7D77',
																			},
																		},
																		" '"
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		'vuepress-theme-plume'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B5695977',
																				'--shiki-dark': '#C98A7D77',
																			},
																		},
																		"'"
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#1E754F',
																				'--shiki-dark': '#4D9375',
																			},
																		},
																		'export'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#1E754F',
																				'--shiki-dark': '#4D9375',
																			},
																		},
																		' default'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#59873A',
																				'--shiki-dark': '#80A665',
																			},
																		},
																		' defineUserConfig'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#999999',
																				'--shiki-dark': '#666666',
																			},
																		},
																		'({'
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#A0ADA0',
																				'--shiki-dark': '#758575DD',
																			},
																		},
																		'  // 请不要忘记设置默认语言'
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#998418',
																				'--shiki-dark': '#B8A965',
																			},
																		},
																		'  lang'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#999999',
																				'--shiki-dark': '#666666',
																			},
																		},
																		': '
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B5695977',
																				'--shiki-dark': '#C98A7D77',
																			},
																		},
																		"'"
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		'zh-CN'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B5695977',
																				'--shiki-dark': '#C98A7D77',
																			},
																		},
																		"'"
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#999999',
																				'--shiki-dark': '#666666',
																			},
																		},
																		','
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#998418',
																				'--shiki-dark': '#B8A965',
																			},
																		},
																		'  theme'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#999999',
																				'--shiki-dark': '#666666',
																			},
																		},
																		': '
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#59873A',
																				'--shiki-dark': '#80A665',
																			},
																		},
																		'plumeTheme'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#999999',
																				'--shiki-dark': '#666666',
																			},
																		},
																		'({'
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#A0ADA0',
																				'--shiki-dark': '#758575DD',
																			},
																		},
																		'    // more...'
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#999999',
																				'--shiki-dark': '#666666',
																			},
																		},
																		'  }),'
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#998418',
																				'--shiki-dark': '#B8A965',
																			},
																		},
																		'  bundler'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#999999',
																				'--shiki-dark': '#666666',
																			},
																		},
																		': '
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#59873A',
																				'--shiki-dark': '#80A665',
																			},
																		},
																		'viteBundler'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#999999',
																				'--shiki-dark': '#666666',
																			},
																		},
																		'(),'
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#999999',
																				'--shiki-dark': '#666666',
																			},
																		},
																		'})'
																	),
																]),
															]),
														]
													),
												],
												-1
											),
										])
								),
								_: 1,
							}
						),
						i[36] ||
							(i[36] = s(
								'div',
								{ class: 'hint-container warning' },
								[
									s('p', { class: 'hint-container-title' }, '注意'),
									s('p', null, [
										a('无论是否需要使用 '),
										s('strong', null, '多语言'),
										a(' ，你都应该为 VuePress 配置 正确 '),
										s('code', null, 'lang'),
										a(' 选项值。 主题需要根据 '),
										s('code', null, 'lang'),
										a(' 选项来确定语言环境文本。'),
									]),
								],
								-1
							)),
					]),
					s('li', null, [
						i[39] ||
							(i[39] = s(
								'h3',
								{ id: '在-docs-目录下新建-readme-md-文件', tabindex: '-1' },
								[
									s('a', { class: 'header-anchor', href: '#在-docs-目录下新建-readme-md-文件' }, [
										s('span', null, [
											a('在 '),
											s('code', null, 'docs'),
											a(' 目录下新建 '),
											s('code', null, 'README.md'),
											a(' 文件'),
										]),
									]),
								],
								-1
							)),
						i[40] || (i[40] = s('p', null, '声明首页配置。', -1)),
						n(
							h,
							{ id: '189', data: [{ id: 'README.md' }] },
							{
								title0: e(({ value: t, isActive: l }) => [
									n(p, { name: 'flat-color-icons:info' }),
									i[37] || (i[37] = s('span', null, 'README.md', -1)),
								]),
								tab0: e(
									({ value: t, isActive: l }) =>
										i[38] ||
										(i[38] = [
											s(
												'div',
												{ class: 'language-md', 'data-ext': 'md', 'data-title': 'md' },
												[
													s('button', {
														class: 'copy',
														title: '复制代码',
														'data-copied': '已复制',
													}),
													s(
														'pre',
														{ class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' },
														[
															s('code', null, [
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#999999',
																				'--shiki-dark': '#666666',
																			},
																		},
																		'---'
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#998418',
																				'--shiki-dark': '#B8A965',
																			},
																		},
																		'home'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#999999',
																				'--shiki-dark': '#666666',
																			},
																		},
																		':'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#1E754F',
																				'--shiki-dark': '#4D9375',
																			},
																		},
																		' true'
																	),
																]),
																a(`
`),
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#999999',
																				'--shiki-dark': '#666666',
																			},
																		},
																		'---'
																	),
																]),
															]),
														]
													),
												],
												-1
											),
										])
								),
								_: 1,
							}
						),
					]),
					s('li', null, [
						i[47] ||
							(i[47] = s(
								'h3',
								{ id: '在本地服务器启动你的文档站点', tabindex: '-1' },
								[
									s('a', { class: 'header-anchor', href: '#在本地服务器启动你的文档站点' }, [
										s('span', null, '在本地服务器启动你的文档站点'),
									]),
								],
								-1
							)),
						n(
							h,
							{
								id: '0',
								data: [{ id: 'pnpm' }, { id: 'yarn' }, { id: 'npm' }],
								'tab-id': 'npm-to-199',
							},
							{
								title0: e(({ value: t, isActive: l }) => [
									n(p, { name: 'vscode-icons:file-type-light-pnpm' }),
									i[41] || (i[41] = s('span', null, 'pnpm', -1)),
								]),
								title1: e(({ value: t, isActive: l }) => [
									n(p, { name: 'vscode-icons:file-type-yarn' }),
									i[42] || (i[42] = s('span', null, 'yarn', -1)),
								]),
								title2: e(({ value: t, isActive: l }) => [
									n(p, { name: 'logos:npm-icon' }),
									i[43] || (i[43] = s('span', null, 'npm', -1)),
								]),
								tab0: e(
									({ value: t, isActive: l }) =>
										i[44] ||
										(i[44] = [
											s(
												'div',
												{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
												[
													s('button', {
														class: 'copy',
														title: '复制代码',
														'data-copied': '已复制',
													}),
													s(
														'pre',
														{ class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' },
														[
															s('code', null, [
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#59873A',
																				'--shiki-dark': '#80A665',
																			},
																		},
																		'pnpm'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' docs:dev'
																	),
																]),
															]),
														]
													),
												],
												-1
											),
										])
								),
								tab1: e(
									({ value: t, isActive: l }) =>
										i[45] ||
										(i[45] = [
											s(
												'div',
												{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
												[
													s('button', {
														class: 'copy',
														title: '复制代码',
														'data-copied': '已复制',
													}),
													s(
														'pre',
														{ class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' },
														[
															s('code', null, [
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#59873A',
																				'--shiki-dark': '#80A665',
																			},
																		},
																		'yarn'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' docs:dev'
																	),
																]),
															]),
														]
													),
												],
												-1
											),
										])
								),
								tab2: e(
									({ value: t, isActive: l }) =>
										i[46] ||
										(i[46] = [
											s(
												'div',
												{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
												[
													s('button', {
														class: 'copy',
														title: '复制代码',
														'data-copied': '已复制',
													}),
													s(
														'pre',
														{ class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' },
														[
															s('code', null, [
																s('span', { class: 'line' }, [
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#59873A',
																				'--shiki-dark': '#80A665',
																			},
																		},
																		'npm'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' run'
																	),
																	s(
																		'span',
																		{
																			style: {
																				'--shiki-light': '#B56959',
																				'--shiki-dark': '#C98A7D',
																			},
																		},
																		' docs:dev'
																	),
																]),
															]),
														]
													),
												],
												-1
											),
										])
								),
								_: 1,
							}
						),
						i[48] ||
							(i[48] = s(
								'p',
								null,
								[
									a('Vuepress 会在 '),
									s(
										'a',
										{ href: 'http://localhost:8080', target: '_blank', rel: 'noopener noreferrer' },
										'http://localhost:8080'
									),
									a(
										' 。启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。'
									),
								],
								-1
							)),
					]),
					i[50] ||
						(i[50] = s(
							'li',
							null,
							[
								s('h3', { id: '完成', tabindex: '-1' }, [
									s('a', { class: 'header-anchor', href: '#完成' }, [s('span', null, '完成')]),
								]),
							],
							-1
						)),
				]),
			]),
			i[59] ||
				(i[59] = s(
					'h2',
					{ id: '更新主题', tabindex: '-1' },
					[s('a', { class: 'header-anchor', href: '#更新主题' }, [s('span', null, '更新主题')])],
					-1
				)),
			i[60] || (i[60] = s('p', null, '您可以直接在项目中运行以下命令检查是否有可用的更新：', -1)),
			n(
				h,
				{ id: '0', data: [{ id: 'pnpm' }, { id: 'yarn' }, { id: 'npm' }], 'tab-id': 'npm-to-219' },
				{
					title0: e(({ value: t, isActive: l }) => [
						n(p, { name: 'vscode-icons:file-type-light-pnpm' }),
						i[51] || (i[51] = s('span', null, 'pnpm', -1)),
					]),
					title1: e(({ value: t, isActive: l }) => [
						n(p, { name: 'vscode-icons:file-type-yarn' }),
						i[52] || (i[52] = s('span', null, 'yarn', -1)),
					]),
					title2: e(({ value: t, isActive: l }) => [
						n(p, { name: 'logos:npm-icon' }),
						i[53] || (i[53] = s('span', null, 'npm', -1)),
					]),
					tab0: e(
						({ value: t, isActive: l }) =>
							i[54] ||
							(i[54] = [
								s(
									'div',
									{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
									[
										s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										s('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											s('code', null, [
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'pnpm'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' dlx'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' vp-update'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab1: e(
						({ value: t, isActive: l }) =>
							i[55] ||
							(i[55] = [
								s(
									'div',
									{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
									[
										s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										s('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											s('code', null, [
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'yarn'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' dlx'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' vp-update'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab2: e(
						({ value: t, isActive: l }) =>
							i[56] ||
							(i[56] = [
								s(
									'div',
									{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
									[
										s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										s('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											s('code', null, [
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'npx'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' vp-update'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					_: 1,
				}
			),
		])
	)
}
const x = c(m, [
		['render', D],
		['__file', 'index.html.vue'],
	]),
	j = JSON.parse(
		'{"path":"/blog/guide/quick-start/","title":"安装/使用","lang":"zh-CN","frontmatter":{"title":"安装/使用","author":"pengzhanbo","icon":"grommet-icons:install","createTime":"2024/03/04 09:50:07","permalink":"/blog/guide/quick-start/","tags":["指南","快速开始"],"description":"依赖环境 Node.js v18.20.0+ pnpm 8+ 或 Yarn 2+ 怎么安装依赖环境？ 请前往 Node.js 官网 下载最新稳定版本 请根据指引完成安装，一般而言，在安装过程中，您只需要保持其默认设置，直接选择下一步即可。 安装 PNPM 在您安装完成 node.js 后，请打开 终端，执行如下命令： 主题推荐您使用 pnpm 作为项目...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/quick-start/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"安装/使用"}],["meta",{"property":"og:description","content":"依赖环境 Node.js v18.20.0+ pnpm 8+ 或 Yarn 2+ 怎么安装依赖环境？ 请前往 Node.js 官网 下载最新稳定版本 请根据指引完成安装，一般而言，在安装过程中，您只需要保持其默认设置，直接选择下一步即可。 安装 PNPM 在您安装完成 node.js 后，请打开 终端，执行如下命令： 主题推荐您使用 pnpm 作为项目..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:tag","content":"指南"}],["meta",{"property":"article:tag","content":"快速开始"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安装/使用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":3.1,"words":929},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/安装与使用.md","bulletin":false}'
	)
export { x as comp, j as data }
