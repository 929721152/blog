import {
	_ as k,
	c,
	a as p,
	d as s,
	b as i,
	w as n,
	e as t,
	r as d,
	o as m,
} from './app-B_7CxFr0.js'
const f = {},
	u = { class: 'vp-file-tree' },
	y = { class: 'tree-node folder' },
	g = { class: 'tree-node folder' },
	v = { class: 'tree-node file' },
	A = { class: 'tree-node file' },
	E = { class: 'tree-node file' },
	D = { class: 'tree-node folder' },
	b = { class: 'tree-node folder' },
	B = { class: 'tree-node folder' },
	C = { class: 'tree-node file' },
	x = { class: 'tree-node folder' },
	_ = { class: 'tree-node file' },
	w = { class: 'tree-node folder' },
	M = { class: 'tree-node file' },
	T = { class: 'tree-node file' },
	N = { class: 'tree-node folder' },
	q = { class: 'tree-node file' },
	R = { class: 'tree-node file' },
	j = { class: 'tree-node file' },
	V = { class: 'tree-node file' },
	P = { class: 'vp-file-tree' },
	z = { class: 'tree-node folder' },
	F = { class: 'tree-node folder' },
	I = { class: 'tree-node file' },
	Z = { class: 'tree-node file' },
	S = { class: 'tree-node file' },
	U = { class: 'tree-node file' }
function J(O, e) {
	const a = d('VPIcon'),
		l = d('FileTreeItem'),
		o = d('CodeTabs')
	return (
		m(),
		c('div', null, [
			e[29] ||
				(e[29] = p(
					`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>在 Markdown 中，你可以使用 <code>file-tree</code> 容器 来显示带有文件图标和可折叠子目录的目录结构。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><p>在 <code>::: file-tree</code> 容器，使用内置的 <strong>Markdown 无序列表语法</strong> 指定文件和目录的组织结构。 使用嵌套的列表项创建子目录；若希望某个目录不显示具体内容，只需在列表项末尾添加斜杠 <code>/</code> 即可。</p><p>以下语法可用于自定义文件树的外观：</p><ul><li>通过加粗文件名或目录名来突出显示，例如 <code>**README.md**</code></li><li>通过在名称后添加更多文本来为文件或目录添加注释</li><li>使用 <code>...</code> 或 <code>…</code> 作为名称来添加占位符文件和目录。</li><li>在 <code>:::file-tree</code> 后添加 <code>icon=&quot;simple&quot;</code> 或 添加 <code>icon=&quot;colored&quot;</code> 可以切换为简单图标或彩色图标，默认为彩色图标。</li></ul><p><strong>输入：</strong></p><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: file-tree</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> docs</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">  -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> .vuepress</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">    -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> config.ts</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">  -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> page1.md</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">  -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> README.md</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> theme  一个 </span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">主题</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 目录</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">  -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> client</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">    -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> components</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">      -</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">Navbar.vue</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">    -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> composables</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">      -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> useNavbar.ts</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">    -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> styles</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">      -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> navbar.css</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">    -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> config.ts</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">  -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> node/</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> package.json</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> pnpm-lock.yaml</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> .gitignore</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> README.md</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> …</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>`,
					9
				)),
			s('div', u, [
				s('ul', null, [
					i(
						l,
						{ type: 'folder', expanded: !0, empty: !1 },
						{
							default: n(() => [
								s('span', y, [
									i(a, { name: 'vscode-icons:folder-type-docs' }),
									e[0] || (e[0] = s('span', { class: 'name' }, 'docs', -1)),
								]),
								s('ul', null, [
									i(
										l,
										{ type: 'folder', expanded: !0, empty: !1 },
										{
											default: n(() => [
												s('span', g, [
													i(a, { name: 'vscode-icons:default-folder' }),
													e[1] || (e[1] = s('span', { class: 'name' }, '.vuepress', -1)),
												]),
												s('ul', null, [
													i(
														l,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: n(() => [
																s('span', v, [
																	i(a, { name: 'vscode-icons:file-type-typescript' }),
																	e[2] || (e[2] = s('span', { class: 'name' }, 'config.ts', -1)),
																]),
															]),
															_: 1,
														}
													),
												]),
											]),
											_: 1,
										}
									),
									i(
										l,
										{ type: 'file', expanded: !1, empty: !0 },
										{
											default: n(() => [
												s('span', A, [
													i(a, { name: 'vscode-icons:file-type-markdown' }),
													e[3] || (e[3] = s('span', { class: 'name' }, 'page1.md', -1)),
												]),
											]),
											_: 1,
										}
									),
									i(
										l,
										{ type: 'file', expanded: !1, empty: !0 },
										{
											default: n(() => [
												s('span', E, [
													i(a, { name: 'flat-color-icons:info' }),
													e[4] || (e[4] = s('span', { class: 'name' }, 'README.md', -1)),
												]),
											]),
											_: 1,
										}
									),
								]),
							]),
							_: 1,
						}
					),
					i(
						l,
						{ type: 'folder', expanded: !0, empty: !1 },
						{
							default: n(() => [
								s('span', D, [
									i(a, { name: 'vscode-icons:folder-type-theme' }),
									e[5] || (e[5] = s('span', { class: 'name' }, 'theme', -1)),
									e[6] ||
										(e[6] = s(
											'span',
											{ class: 'comment' },
											[t(' 一个 '), s('strong', null, '主题'), t(' 目录')],
											-1
										)),
								]),
								s('ul', null, [
									i(
										l,
										{ type: 'folder', expanded: !0, empty: !1 },
										{
											default: n(() => [
												s('span', b, [
													i(a, { name: 'vscode-icons:folder-type-client' }),
													e[7] || (e[7] = s('span', { class: 'name' }, 'client', -1)),
												]),
												s('ul', null, [
													i(
														l,
														{ type: 'folder', expanded: !0, empty: !1 },
														{
															default: n(() => [
																s('span', B, [
																	i(a, { name: 'vscode-icons:folder-type-component' }),
																	e[8] || (e[8] = s('span', { class: 'name' }, 'components', -1)),
																]),
																s('ul', null, [
																	i(
																		l,
																		{ type: 'file', expanded: !1, empty: !0 },
																		{
																			default: n(() => [
																				s('span', C, [
																					i(a, { name: 'vscode-icons:file-type-vue' }),
																					e[9] ||
																						(e[9] = s(
																							'span',
																							{ class: 'name focus' },
																							[s('strong', null, 'Navbar.vue')],
																							-1
																						)),
																				]),
																			]),
																			_: 1,
																		}
																	),
																]),
															]),
															_: 1,
														}
													),
													i(
														l,
														{ type: 'folder', expanded: !0, empty: !1 },
														{
															default: n(() => [
																s('span', x, [
																	i(a, { name: 'vscode-icons:folder-type-hook' }),
																	e[10] ||
																		(e[10] = s('span', { class: 'name' }, 'composables', -1)),
																]),
																s('ul', null, [
																	i(
																		l,
																		{ type: 'file', expanded: !1, empty: !0 },
																		{
																			default: n(() => [
																				s('span', _, [
																					i(a, { name: 'vscode-icons:file-type-typescript' }),
																					e[11] ||
																						(e[11] = s(
																							'span',
																							{ class: 'name' },
																							'useNavbar.ts',
																							-1
																						)),
																				]),
																			]),
																			_: 1,
																		}
																	),
																]),
															]),
															_: 1,
														}
													),
													i(
														l,
														{ type: 'folder', expanded: !0, empty: !1 },
														{
															default: n(() => [
																s('span', w, [
																	i(a, { name: 'vscode-icons:folder-type-style' }),
																	e[12] || (e[12] = s('span', { class: 'name' }, 'styles', -1)),
																]),
																s('ul', null, [
																	i(
																		l,
																		{ type: 'file', expanded: !1, empty: !0 },
																		{
																			default: n(() => [
																				s('span', M, [
																					i(a, { name: 'vscode-icons:file-type-css' }),
																					e[13] ||
																						(e[13] = s(
																							'span',
																							{ class: 'name' },
																							'navbar.css',
																							-1
																						)),
																				]),
																			]),
																			_: 1,
																		}
																	),
																]),
															]),
															_: 1,
														}
													),
													i(
														l,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: n(() => [
																s('span', T, [
																	i(a, { name: 'vscode-icons:file-type-typescript' }),
																	e[14] || (e[14] = s('span', { class: 'name' }, 'config.ts', -1)),
																]),
															]),
															_: 1,
														}
													),
												]),
											]),
											_: 1,
										}
									),
									i(
										l,
										{ type: 'folder', expanded: !1, empty: !0 },
										{
											default: n(() => [
												s('span', N, [
													i(a, { name: 'vscode-icons:default-folder' }),
													e[15] || (e[15] = s('span', { class: 'name' }, 'node', -1)),
												]),
											]),
											_: 1,
										}
									),
								]),
							]),
							_: 1,
						}
					),
					i(
						l,
						{ type: 'file', expanded: !1, empty: !0 },
						{
							default: n(() => [
								s('span', q, [
									i(a, { name: 'vscode-icons:file-type-node' }),
									e[16] || (e[16] = s('span', { class: 'name' }, 'package.json', -1)),
								]),
							]),
							_: 1,
						}
					),
					i(
						l,
						{ type: 'file', expanded: !1, empty: !0 },
						{
							default: n(() => [
								s('span', R, [
									i(a, { name: 'vscode-icons:file-type-light-pnpm' }),
									e[17] || (e[17] = s('span', { class: 'name' }, 'pnpm-lock.yaml', -1)),
								]),
							]),
							_: 1,
						}
					),
					i(
						l,
						{ type: 'file', expanded: !1, empty: !0 },
						{
							default: n(() => [
								s('span', j, [
									i(a, { name: 'vscode-icons:file-type-git' }),
									e[18] || (e[18] = s('span', { class: 'name' }, '.gitignore', -1)),
								]),
							]),
							_: 1,
						}
					),
					i(
						l,
						{ type: 'file', expanded: !1, empty: !0 },
						{
							default: n(() => [
								s('span', V, [
									i(a, { name: 'flat-color-icons:info' }),
									e[19] || (e[19] = s('span', { class: 'name' }, 'README.md', -1)),
								]),
							]),
							_: 1,
						}
					),
					i(
						l,
						{ type: 'file', expanded: !1, empty: !0 },
						{
							default: n(
								() =>
									e[20] ||
									(e[20] = [
										s('span', { class: 'tree-node file' }, [s('span', { class: 'name' }, '…')], -1),
									])
							),
							_: 1,
						}
					),
				]),
			]),
			e[30] ||
				(e[30] = p(
					`<h2 id="使用简单图标" tabindex="-1"><a class="header-anchor" href="#使用简单图标"><span>使用简单图标</span></a></h2><p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: file-tree icon=&quot;simple&quot;</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> docs</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">  -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> .vuepress</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">    -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> config.ts</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">  -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> page1.md</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">  -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> README.md</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> package.json</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::</span></span></code></pre></div><p><strong>输出：</strong></p>`,
					4
				)),
			s('div', P, [
				s('ul', null, [
					i(
						l,
						{ type: 'folder', expanded: !0, empty: !1 },
						{
							default: n(() => [
								s('span', z, [
									i(a, { name: 'vscode-icons:default-folder' }),
									e[21] || (e[21] = s('span', { class: 'name' }, 'docs', -1)),
								]),
								s('ul', null, [
									i(
										l,
										{ type: 'folder', expanded: !0, empty: !1 },
										{
											default: n(() => [
												s('span', F, [
													i(a, { name: 'vscode-icons:default-folder' }),
													e[22] || (e[22] = s('span', { class: 'name' }, '.vuepress', -1)),
												]),
												s('ul', null, [
													i(
														l,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: n(() => [
																s('span', I, [
																	i(a, { name: 'vscode-icons:default-file' }),
																	e[23] || (e[23] = s('span', { class: 'name' }, 'config.ts', -1)),
																]),
															]),
															_: 1,
														}
													),
												]),
											]),
											_: 1,
										}
									),
									i(
										l,
										{ type: 'file', expanded: !1, empty: !0 },
										{
											default: n(() => [
												s('span', Z, [
													i(a, { name: 'vscode-icons:default-file' }),
													e[24] || (e[24] = s('span', { class: 'name' }, 'page1.md', -1)),
												]),
											]),
											_: 1,
										}
									),
									i(
										l,
										{ type: 'file', expanded: !1, empty: !0 },
										{
											default: n(() => [
												s('span', S, [
													i(a, { name: 'vscode-icons:default-file' }),
													e[25] || (e[25] = s('span', { class: 'name' }, 'README.md', -1)),
												]),
											]),
											_: 1,
										}
									),
								]),
							]),
							_: 1,
						}
					),
					i(
						l,
						{ type: 'file', expanded: !1, empty: !0 },
						{
							default: n(() => [
								s('span', U, [
									i(a, { name: 'vscode-icons:default-file' }),
									e[26] || (e[26] = s('span', { class: 'name' }, 'package.json', -1)),
								]),
							]),
							_: 1,
						}
					),
				]),
			]),
			e[31] ||
				(e[31] = s(
					'h2',
					{ id: '配置', tabindex: '-1' },
					[s('a', { class: 'header-anchor', href: '#配置' }, [s('span', null, '配置')])],
					-1
				)),
			e[32] ||
				(e[32] = s(
					'p',
					null,
					[
						t('你可以在 '),
						s('code', null, 'plugins.mdPower.fileTree'),
						t(' 选项中配置 文件树的图标默认类型：'),
					],
					-1
				)),
			i(
				o,
				{ id: '216', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: n(({ value: r, isActive: h }) => [
						i(a, { name: 'vscode-icons:file-type-typescript' }),
						e[27] || (e[27] = s('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: n(
						({ value: r, isActive: h }) =>
							e[28] ||
							(e[28] = [
								s(
									'div',
									{ class: 'language-ts line-numbers-mode', 'data-ext': 'ts', 'data-title': 'ts' },
									[
										s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										s('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											s('code', null, [
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'export'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' default'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' defineUserConfig'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'({'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'  theme'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'plumeTheme'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'({'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'    plugins'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': {'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      markdownPower'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': {'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'        fileTree'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': {'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'          icon'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': '
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'simple'
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														', '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														"// 'simple' | 'colored'"
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'        }'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'      },'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    }'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  })'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'})'
													),
												]),
											]),
										]),
										s(
											'div',
											{
												class: 'line-numbers',
												'aria-hidden': 'true',
												style: { 'counter-reset': 'line-number 0' },
											},
											[
												s('div', { class: 'line-number' }),
												s('div', { class: 'line-number' }),
												s('div', { class: 'line-number' }),
												s('div', { class: 'line-number' }),
												s('div', { class: 'line-number' }),
												s('div', { class: 'line-number' }),
												s('div', { class: 'line-number' }),
												s('div', { class: 'line-number' }),
												s('div', { class: 'line-number' }),
												s('div', { class: 'line-number' }),
												s('div', { class: 'line-number' }),
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
			e[33] ||
				(e[33] = s(
					'div',
					{ class: 'hint-container tip' },
					[
						s('p', { class: 'hint-container-title' }, '担心彩色图标会影响构建包体积？'),
						s('p', null, [
							t('您无需担心，文件树的彩色图标 也是从 '),
							s('code', null, 'iconify'),
							t(' 解析获取，推荐您在本地安装 '),
							s('code', null, '@iconify/json'),
							t(' 项目， 主题会自动将 '),
							s('code', null, '@iconify/json'),
							t(
								' 中的图标数据解析为本地图标资源，即使您在不同的页面 多次使用，这包括了 导航栏、侧边栏、图标组件等，相同图标仅会存在一份资源！'
							),
						]),
						s('p', null, [
							t('每个彩色图标的大小约在 '),
							s('code', null, '1kb ~ 2kb'),
							t(
								' 之间，即使您的文件树非常夸张的使用了 100+ 不同的图标，对最终的构建包体积影响 也不会很大。'
							),
						]),
					],
					-1
				)),
		])
	)
}
const H = k(f, [
		['render', J],
		['__file', 'index.html.vue'],
	]),
	K = JSON.parse(
		'{"path":"/blog/guide/markdown/file-tree/","title":"文件树","lang":"zh-CN","frontmatter":{"title":"文件树","createTime":"2024/09/30 14:41:57","icon":"mdi:file-tree","permalink":"/blog/guide/markdown/file-tree/","description":"概述 在 Markdown 中，你可以使用 file-tree 容器 来显示带有文件图标和可折叠子目录的目录结构。 语法 在 ::: file-tree 容器，使用内置的 Markdown 无序列表语法 指定文件和目录的组织结构。 使用嵌套的列表项创建子目录；若希望某个目录不显示具体内容，只需在列表项末尾添加斜杠 / 即可。 以下语法可用于自定义文件树...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/markdown/file-tree/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"文件树"}],["meta",{"property":"og:description","content":"概述 在 Markdown 中，你可以使用 file-tree 容器 来显示带有文件图标和可折叠子目录的目录结构。 语法 在 ::: file-tree 容器，使用内置的 Markdown 无序列表语法 指定文件和目录的组织结构。 使用嵌套的列表项创建子目录；若希望某个目录不显示具体内容，只需在列表项末尾添加斜杠 / 即可。 以下语法可用于自定义文件树..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文件树\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":1.76,"words":528},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/markdown/文件树.md","bulletin":false}'
	)
export { H as comp, K as data }
