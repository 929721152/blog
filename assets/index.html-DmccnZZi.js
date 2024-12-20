import {
	_ as m,
	c as u,
	d as s,
	e as t,
	b as i,
	w as l,
	a as o,
	r,
	o as y,
} from './app-B_7CxFr0.js'
const f = {},
	g = { class: 'vp-file-tree' },
	c = { class: 'tree-node folder' },
	v = { class: 'tree-node folder' },
	A = { class: 'tree-node folder' },
	D = { class: 'tree-node folder' },
	B = { class: 'tree-node file' },
	b = { class: 'tree-node file' },
	x = { class: 'tree-node file' },
	C = { class: 'tree-node file' },
	E = { class: 'tree-node file' },
	F = { class: 'tree-node folder' },
	w = { class: 'tree-node folder' },
	P = { class: 'tree-node file' },
	V = { class: 'tree-node file' },
	q = { class: 'tree-node folder' },
	T = { class: 'tree-node file' },
	N = { class: 'tree-node file' },
	j = { class: 'tree-node file' },
	M = { class: 'tree-node file' },
	R = { class: 'tree-node file' },
	z = { class: 'tree-node file' },
	I = { class: 'tree-node file' },
	U = { class: 'vp-file-tree' },
	Z = { class: 'tree-node folder' },
	L = { class: 'tree-node folder' },
	S = { class: 'tree-node file' },
	J = { class: 'tree-node file' },
	O = { class: 'tree-node file' },
	G = { class: 'tree-node folder' },
	H = { class: 'tree-node folder' },
	K = { class: 'tree-node file' },
	Q = { class: 'tree-node file' },
	W = { class: 'tree-node folder' },
	X = { class: 'tree-node file' },
	Y = { class: 'vp-file-tree' },
	$ = { class: 'tree-node folder' },
	_ = { class: 'tree-node folder' },
	ss = { class: 'tree-node file' },
	es = { class: 'tree-node folder' },
	is = { class: 'tree-node file' },
	ls = { class: 'tree-node folder' },
	ts = { class: 'tree-node file' },
	as = { class: 'tree-node file' },
	ns = { class: 'tree-node file' }
function ds(ps, e) {
	const h = r('RouteLink'),
		n = r('VPIcon'),
		a = r('FileTreeItem'),
		k = r('CodeTabs')
	return (
		y(),
		u('div', null, [
			e[79] ||
				(e[79] = s(
					'p',
					null,
					'本指南将向您说明 VuePress 和 Plume 创建的项目的文件结构，以及如何在项目中使用它们。',
					-1
				)),
			s('p', null, [
				e[1] || (e[1] = t('当您 ')),
				i(
					h,
					{
						to: '/notes/theme/blog/guide/%E5%AE%89%E8%A3%85%E4%B8%8E%E4%BD%BF%E7%94%A8.html#%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%AE%89%E8%A3%85',
					},
					{ default: l(() => e[0] || (e[0] = [t('使用命令行工具创建')])), _: 1 }
				),
				e[2] || (e[2] = t(' 的项目，它的文件结构是这样的：')),
			]),
			s('div', g, [
				s('ul', null, [
					i(
						a,
						{ type: 'folder', expanded: !1, empty: !0 },
						{
							default: l(() => [
								s('span', c, [
									i(n, { name: 'vscode-icons:folder-type-git' }),
									e[3] || (e[3] = s('span', { class: 'name' }, '.git', -1)),
								]),
							]),
							_: 1,
						}
					),
					i(
						a,
						{ type: 'folder', expanded: !0, empty: !1 },
						{
							default: l(() => [
								s('span', v, [
									i(n, { name: 'vscode-icons:folder-type-docs' }),
									e[4] ||
										(e[4] = s('span', { class: 'name focus' }, [s('strong', null, 'docs')], -1)),
									e[5] || (e[5] = s('span', { class: 'comment' }, ' # 文档源目录', -1)),
								]),
								s('ul', null, [
									i(
										a,
										{ type: 'folder', expanded: !0, empty: !1 },
										{
											default: l(() => [
												s('span', A, [
													i(n, { name: 'vscode-icons:default-folder' }),
													e[6] || (e[6] = s('span', { class: 'name' }, '.vuepress', -1)),
													e[7] ||
														(e[7] = s('span', { class: 'comment' }, ' # vuepress 配置文件夹', -1)),
												]),
												s('ul', null, [
													i(
														a,
														{ type: 'folder', expanded: !1, empty: !0 },
														{
															default: l(() => [
																s('span', D, [
																	i(n, { name: 'vscode-icons:folder-type-public' }),
																	e[8] || (e[8] = s('span', { class: 'name' }, 'public', -1)),
																	e[9] ||
																		(e[9] = s('span', { class: 'comment' }, '# 静态资源目录', -1)),
																]),
															]),
															_: 1,
														}
													),
													i(
														a,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: l(() => [
																s('span', B, [
																	i(n, { name: 'vscode-icons:file-type-typescript' }),
																	e[10] || (e[10] = s('span', { class: 'name' }, 'client.ts', -1)),
																	e[11] ||
																		(e[11] = s(
																			'span',
																			{ class: 'comment' },
																			'# 客户端配置 (可选)',
																			-1
																		)),
																]),
															]),
															_: 1,
														}
													),
													i(
														a,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: l(() => [
																s('span', b, [
																	i(n, { name: 'vscode-icons:file-type-typescript' }),
																	e[12] || (e[12] = s('span', { class: 'name' }, 'config.ts', -1)),
																	e[13] ||
																		(e[13] = s(
																			'span',
																			{ class: 'comment' },
																			'# vuepress 配置',
																			-1
																		)),
																]),
															]),
															_: 1,
														}
													),
													i(
														a,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: l(() => [
																s('span', x, [
																	i(n, { name: 'vscode-icons:file-type-typescript' }),
																	e[14] || (e[14] = s('span', { class: 'name' }, 'navbar.ts', -1)),
																	e[15] ||
																		(e[15] = s(
																			'span',
																			{ class: 'comment' },
																			'# 导航栏配置 (可选)',
																			-1
																		)),
																]),
															]),
															_: 1,
														}
													),
													i(
														a,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: l(() => [
																s('span', C, [
																	i(n, { name: 'vscode-icons:file-type-typescript' }),
																	e[16] || (e[16] = s('span', { class: 'name' }, 'notes.ts', -1)),
																	e[17] ||
																		(e[17] = s(
																			'span',
																			{ class: 'comment' },
																			'# notes 配置 (可选)',
																			-1
																		)),
																]),
															]),
															_: 1,
														}
													),
													i(
														a,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: l(() => [
																s('span', E, [
																	i(n, { name: 'vscode-icons:file-type-typescript' }),
																	e[18] ||
																		(e[18] = s('span', { class: 'name' }, 'plume.config.ts', -1)),
																	e[19] ||
																		(e[19] = s(
																			'span',
																			{ class: 'comment' },
																			'# 主题配置文件 (可选)',
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
										a,
										{ type: 'folder', expanded: !0, empty: !1 },
										{
											default: l(() => [
												s('span', F, [
													i(n, { name: 'vscode-icons:default-folder' }),
													e[20] || (e[20] = s('span', { class: 'name' }, 'notes', -1)),
													e[21] ||
														(e[21] = s('span', { class: 'comment' }, '# 系列文档、知识笔记', -1)),
												]),
												s('ul', null, [
													i(
														a,
														{ type: 'folder', expanded: !0, empty: !1 },
														{
															default: l(() => [
																s('span', w, [
																	i(n, { name: 'vscode-icons:default-folder' }),
																	e[22] || (e[22] = s('span', { class: 'name' }, 'demo', -1)),
																]),
																s('ul', null, [
																	i(
																		a,
																		{ type: 'file', expanded: !1, empty: !0 },
																		{
																			default: l(() => [
																				s('span', P, [
																					i(n, { name: 'vscode-icons:file-type-markdown' }),
																					e[23] ||
																						(e[23] = s('span', { class: 'name' }, 'foo.md', -1)),
																				]),
																			]),
																			_: 1,
																		}
																	),
																	i(
																		a,
																		{ type: 'file', expanded: !1, empty: !0 },
																		{
																			default: l(() => [
																				s('span', V, [
																					i(n, { name: 'vscode-icons:file-type-markdown' }),
																					e[24] ||
																						(e[24] = s('span', { class: 'name' }, 'bar.md', -1)),
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
												]),
											]),
											_: 1,
										}
									),
									i(
										a,
										{ type: 'folder', expanded: !0, empty: !1 },
										{
											default: l(() => [
												s('span', q, [
													i(n, { name: 'vscode-icons:default-folder' }),
													e[25] || (e[25] = s('span', { class: 'name' }, 'preview', -1)),
													e[26] || (e[26] = s('span', { class: 'comment' }, '# 博客分类之一', -1)),
												]),
												s('ul', null, [
													i(
														a,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: l(() => [
																s('span', T, [
																	i(n, { name: 'vscode-icons:file-type-markdown' }),
																	e[27] ||
																		(e[27] = s('span', { class: 'name' }, 'markdown.md', -1)),
																	e[28] ||
																		(e[28] = s(
																			'span',
																			{ class: 'comment' },
																			'# 分类下的博客文章',
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
										a,
										{ type: 'file', expanded: !1, empty: !0 },
										{
											default: l(() => [
												s('span', N, [
													i(n, { name: 'vscode-icons:file-type-markdown' }),
													e[29] || (e[29] = s('span', { class: 'name' }, 'article.md', -1)),
													e[30] || (e[30] = s('span', { class: 'comment' }, '# 博客文章', -1)),
												]),
											]),
											_: 1,
										}
									),
									i(
										a,
										{ type: 'file', expanded: !1, empty: !0 },
										{
											default: l(() => [
												s('span', j, [
													i(n, { name: 'flat-color-icons:info' }),
													e[31] || (e[31] = s('span', { class: 'name' }, 'README.md', -1)),
													e[32] || (e[32] = s('span', { class: 'comment' }, '# 首页', -1)),
												]),
											]),
											_: 1,
										}
									),
									i(
										a,
										{ type: 'file', expanded: !1, empty: !0 },
										{
											default: l(
												() =>
													e[33] ||
													(e[33] = [
														s(
															'span',
															{ class: 'tree-node file' },
															[s('span', { class: 'name' }, '…')],
															-1
														),
													])
											),
											_: 1,
										}
									),
								]),
							]),
							_: 1,
						}
					),
					i(
						a,
						{ type: 'file', expanded: !1, empty: !0 },
						{
							default: l(() => [
								s('span', M, [
									i(n, { name: 'vscode-icons:file-type-node' }),
									e[34] || (e[34] = s('span', { class: 'name' }, 'package.json', -1)),
								]),
							]),
							_: 1,
						}
					),
					i(
						a,
						{ type: 'file', expanded: !1, empty: !0 },
						{
							default: l(() => [
								s('span', R, [
									i(n, { name: 'vscode-icons:file-type-light-pnpm' }),
									e[35] || (e[35] = s('span', { class: 'name' }, 'pnpm-lock.yaml', -1)),
								]),
							]),
							_: 1,
						}
					),
					i(
						a,
						{ type: 'file', expanded: !1, empty: !0 },
						{
							default: l(() => [
								s('span', z, [
									i(n, { name: 'vscode-icons:file-type-git' }),
									e[36] || (e[36] = s('span', { class: 'name' }, '.gitignore', -1)),
								]),
							]),
							_: 1,
						}
					),
					i(
						a,
						{ type: 'file', expanded: !1, empty: !0 },
						{
							default: l(() => [
								s('span', I, [
									i(n, { name: 'flat-color-icons:info' }),
									e[37] || (e[37] = s('span', { class: 'name' }, 'README.md', -1)),
								]),
							]),
							_: 1,
						}
					),
				]),
			]),
			e[80] ||
				(e[80] = o(
					`<div class="hint-container tip"><p class="hint-container-title">如果你是手动创建的，也可以参考此文件结构管理您的项目</p></div><h2 id="文档源目录" tabindex="-1"><a class="header-anchor" href="#文档源目录"><span>文档源目录</span></a></h2><p><strong>文档源目录</strong> 指的是，你的站点的所有 markdown 文件所在的目录。该目录一般在使用 命令行工具 启动 VuePress 时指定：</p><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">vuepress</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> dev</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;" class="highlighted-word">docs</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#            这里声明了文档源目录为 </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;" class="highlighted-word">docs</span></span></code></pre></div><div class="language-json" data-ext="json" data-title="package.json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">scripts</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">docs:dev</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress dev docs</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    //                        ^^^^</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">docs:build</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress build docs</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    //                            ^^^^</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div><p>一般而言，VuePress 仅会接管 该目录，非源目录下的其它文件会被忽略。</p><h2 id="vuepress-目录" tabindex="-1"><a class="header-anchor" href="#vuepress-目录"><span><code>.vuepress</code> 目录</span></a></h2><p><code>.vuepress/</code> 目录是 VuePress 配置文件夹，你还可以在这里创建 自己的组件、自定义主题样式等。</p><p><strong>在此目录中：</strong></p><h3 id="client-ts" tabindex="-1"><a class="header-anchor" href="#client-ts"><span><code>client.ts</code></span></a></h3><p>客户端配置文件，你可以在这里扩展 VuePress 的功能，比如声明新的全局组件等。</p>`,
					11
				)),
			i(
				k,
				{ id: '158', data: [{ id: '.vuepress/client.ts' }] },
				{
					title0: l(({ value: d, isActive: p }) => [
						i(n, { name: 'vscode-icons:file-type-typescript' }),
						e[38] || (e[38] = s('span', null, '.vuepress/client.ts', -1)),
					]),
					tab0: l(
						({ value: d, isActive: p }) =>
							e[39] ||
							(e[39] = [
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
														'import'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' {'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' defineClientConfig'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' }'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' from'
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														" '"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'vuepress/client'
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
												]),
												t(`
`),
												s('span', { class: 'line' }),
												t(`
`),
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
														' defineClientConfig'
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
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'  enhance'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'({ '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'app'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														', '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'router'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														', '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'siteData'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' }) {'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'    // app: vue app 实例'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'    // router: vue router 实例'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'    // siteData: vuepress 站点配置'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'    // 注册全局组件'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'    app'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'component'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
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
														'MyComponent'
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'MyComponent'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														')'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  },'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'  setup'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'() {'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'    // 等同于 vue 根组件 上的  setup 方法'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  }'
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
			e[81] ||
				(e[81] = s(
					'h3',
					{ id: 'config-ts', tabindex: '-1' },
					[
						s('a', { class: 'header-anchor', href: '#config-ts' }, [
							s('span', null, [s('code', null, 'config.ts')]),
						]),
					],
					-1
				)),
			e[82] ||
				(e[82] = s(
					'p',
					null,
					'为 VuePress 配置文件，你需要在这里进行一个必要的配置，比如 主题、插件、构建工具等。',
					-1
				)),
			i(
				k,
				{ id: '169', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: l(({ value: d, isActive: p }) => [
						i(n, { name: 'vscode-icons:file-type-typescript' }),
						e[40] || (e[40] = s('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: l(
						({ value: d, isActive: p }) =>
							e[41] ||
							(e[41] = [
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
														'import'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' {'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' viteBundler'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' }'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' from'
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														" '"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'@vuepress/bundler-vite'
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'import'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' {'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' defineUserConfig'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' }'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' from'
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														" '"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'vuepress'
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'import'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' {'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' plumeTheme'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' }'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' from'
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														" '"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'vuepress-theme-plume'
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
												]),
												t(`
`),
												s('span', { class: 'line' }),
												t(`
`),
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
														'  lang'
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
														'zh-CN'
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
														','
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
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'    // more...'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  }),'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'  bundler'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'viteBundler'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'(),'
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
			e[83] ||
				(e[83] = s(
					'h3',
					{ id: 'plume-config-ts', tabindex: '-1' },
					[
						s('a', { class: 'header-anchor', href: '#plume-config-ts' }, [
							s('span', null, [s('code', null, 'plume.config.ts')]),
						]),
					],
					-1
				)),
			e[84] ||
				(e[84] = s(
					'p',
					null,
					[
						t('主题配置文件，由于每次修改 '),
						s('code', null, '.vuepress/config.ts'),
						t('，都需要重启 VuePress 服务，然而实际上大多数时候都不需要这么做。'),
					],
					-1
				)),
			e[85] ||
				(e[85] = s(
					'p',
					null,
					'主题将不需要重启服务的配置移动到了这里。在这里修改配置时，仅通过热更新的方式更新主题。',
					-1
				)),
			i(
				k,
				{
					id: '183',
					data: [
						{ id: '.vuepress/plume.config.ts' },
						{ id: '.vuepress/navbar.ts' },
						{ id: '.vuepress/notes.ts' },
					],
				},
				{
					title0: l(({ value: d, isActive: p }) => [
						i(n, { name: 'vscode-icons:file-type-typescript' }),
						e[42] || (e[42] = s('span', null, '.vuepress/plume.config.ts', -1)),
					]),
					title1: l(({ value: d, isActive: p }) => [
						i(n, { name: 'vscode-icons:file-type-typescript' }),
						e[43] || (e[43] = s('span', null, '.vuepress/navbar.ts', -1)),
					]),
					title2: l(({ value: d, isActive: p }) => [
						i(n, { name: 'vscode-icons:file-type-typescript' }),
						e[44] || (e[44] = s('span', null, '.vuepress/notes.ts', -1)),
					]),
					tab0: l(
						({ value: d, isActive: p }) =>
							e[45] ||
							(e[45] = [
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
														'import'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' {'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' definePlumeConfig'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' }'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' from'
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														" '"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'vuepress-theme-plume'
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'import'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' navbar'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' from'
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														" '"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'./navbar'
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'import'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' notes'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' from'
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														" '"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'./notes'
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
												]),
												t(`
`),
												s('span', { class: 'line' }),
												t(`
`),
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
														' definePlumeConfig'
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
														'  logo'
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
														'/logo.svg'
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
														','
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'  profile'
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
														'    name'
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
														'Theme Plume'
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
														','
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  },'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'  navbar'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'  notes'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'  // ... more'
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
												s('div', { class: 'line-number' }),
												s('div', { class: 'line-number' }),
											]
										),
									],
									-1
								),
							])
					),
					tab1: l(
						({ value: d, isActive: p }) =>
							e[46] ||
							(e[46] = [
								s(
									'div',
									{ class: 'language-ts', 'data-ext': 'ts', 'data-title': 'ts' },
									[
										s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										s('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											s('code', null, [
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'import'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' {'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' defineNavbarConfig'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' }'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' from'
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														" '"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'vuepress-theme-plume'
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
												]),
												t(`
`),
												s('span', { class: 'line' }),
												t(`
`),
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
														' defineNavbarConfig'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'(['
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'  // ...'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'])'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab2: l(
						({ value: d, isActive: p }) =>
							e[47] ||
							(e[47] = [
								s(
									'div',
									{ class: 'language-ts', 'data-ext': 'ts', 'data-title': 'ts' },
									[
										s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										s('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											s('code', null, [
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'import'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' {'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' defineNotesConfig'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' }'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' from'
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														" '"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'vuepress-theme-plume'
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
												]),
												t(`
`),
												s('span', { class: 'line' }),
												t(`
`),
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
														' defineNotesConfig'
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
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'  // ...'
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
									],
									-1
								),
							])
					),
					_: 1,
				}
			),
			e[86] ||
				(e[86] = o(
					'<h2 id="notes-目录" tabindex="-1"><a class="header-anchor" href="#notes-目录"><span>notes 目录</span></a></h2><p><strong>notes</strong> 目录用于存放你的 知识笔记、系列文档等。</p><h3 id="如何理解知识笔记-系列文档" tabindex="-1"><a class="header-anchor" href="#如何理解知识笔记-系列文档"><span>如何理解知识笔记/系列文档 ？</span></a></h3><p>一种很常见的场景是，您正在学习某项技能，并打算把学习心得、重点内容、疑难点等记录在笔记中，这一场景下， 您可能会写多篇文档进行记录。</p><p>或者是，您正在准备面试，想要提前准备好 面试题目和答案，这时候可能会把 每个题目和答案都单独作为一篇文档。</p><p>你很容易就会希望把它们都单独放在一个目录下进行管理，与此同时，还希望在生成的文档站点中，能够快速的在 这项技能笔记 的不同文档之间导航，或者在不同的面试题目之间导航。</p><p>这是博客类型的文档满足不了的诉求，而这恰恰是 <code>notes</code> 所要解决的一个痛点。</p><p>上述的内容，很容易产生以下目录结构：</p>',
					8
				)),
			s('div', U, [
				s('ul', null, [
					i(
						a,
						{ type: 'folder', expanded: !0, empty: !1 },
						{
							default: l(() => [
								s('span', Z, [
									i(n, { name: 'vscode-icons:default-folder' }),
									e[48] || (e[48] = s('span', { class: 'name' }, 'notes', -1)),
								]),
								s('ul', null, [
									i(
										a,
										{ type: 'folder', expanded: !0, empty: !1 },
										{
											default: l(() => [
												s('span', L, [
													i(n, { name: 'vscode-icons:default-folder' }),
													e[49] || (e[49] = s('span', { class: 'name' }, 'interview', -1)),
													e[50] || (e[50] = s('span', { class: 'comment' }, ' # 面试题', -1)),
												]),
												s('ul', null, [
													i(
														a,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: l(() => [
																s('span', S, [
																	i(n, { name: 'vscode-icons:file-type-markdown' }),
																	e[51] ||
																		(e[51] = s('span', { class: 'name' }, '自我介绍.md', -1)),
																]),
															]),
															_: 1,
														}
													),
													i(
														a,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: l(() => [
																s('span', J, [
																	i(n, { name: 'vscode-icons:file-type-markdown' }),
																	e[52] ||
																		(e[52] = s('span', { class: 'name' }, '我的技能.md', -1)),
																]),
															]),
															_: 1,
														}
													),
													i(
														a,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: l(() => [
																s('span', O, [
																	i(n, { name: 'vscode-icons:file-type-markdown' }),
																	e[53] ||
																		(e[53] = s('span', { class: 'name' }, '做过的项目.md', -1)),
																]),
															]),
															_: 1,
														}
													),
													i(
														a,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: l(
																() =>
																	e[54] ||
																	(e[54] = [
																		s(
																			'span',
																			{ class: 'tree-node file' },
																			[s('span', { class: 'name' }, '…')],
																			-1
																		),
																	])
															),
															_: 1,
														}
													),
												]),
											]),
											_: 1,
										}
									),
									i(
										a,
										{ type: 'folder', expanded: !0, empty: !1 },
										{
											default: l(() => [
												s('span', G, [
													i(n, { name: 'vscode-icons:default-folder' }),
													e[55] || (e[55] = s('span', { class: 'name' }, 'typescript', -1)),
													e[56] || (e[56] = s('span', { class: 'comment' }, '# 学习笔记', -1)),
												]),
												s('ul', null, [
													i(
														a,
														{ type: 'folder', expanded: !0, empty: !1 },
														{
															default: l(() => [
																s('span', H, [
																	i(n, { name: 'vscode-icons:default-folder' }),
																	e[57] || (e[57] = s('span', { class: 'name' }, '基础', -1)),
																]),
																s('ul', null, [
																	i(
																		a,
																		{ type: 'file', expanded: !1, empty: !0 },
																		{
																			default: l(() => [
																				s('span', K, [
																					i(n, { name: 'vscode-icons:file-type-markdown' }),
																					e[58] ||
																						(e[58] = s(
																							'span',
																							{ class: 'name' },
																							'基本类型.md',
																							-1
																						)),
																				]),
																			]),
																			_: 1,
																		}
																	),
																	i(
																		a,
																		{ type: 'file', expanded: !1, empty: !0 },
																		{
																			default: l(() => [
																				s('span', Q, [
																					i(n, { name: 'vscode-icons:file-type-markdown' }),
																					e[59] ||
																						(e[59] = s('span', { class: 'name' }, '泛型.md', -1)),
																				]),
																			]),
																			_: 1,
																		}
																	),
																	i(
																		a,
																		{ type: 'file', expanded: !1, empty: !0 },
																		{
																			default: l(
																				() =>
																					e[60] ||
																					(e[60] = [
																						s(
																							'span',
																							{ class: 'tree-node file' },
																							[s('span', { class: 'name' }, '…')],
																							-1
																						),
																					])
																			),
																			_: 1,
																		}
																	),
																]),
															]),
															_: 1,
														}
													),
													i(
														a,
														{ type: 'folder', expanded: !0, empty: !1 },
														{
															default: l(() => [
																s('span', W, [
																	i(n, { name: 'vscode-icons:default-folder' }),
																	e[61] || (e[61] = s('span', { class: 'name' }, '进阶', -1)),
																]),
																s('ul', null, [
																	i(
																		a,
																		{ type: 'file', expanded: !1, empty: !0 },
																		{
																			default: l(() => [
																				s('span', X, [
																					i(n, { name: 'vscode-icons:file-type-markdown' }),
																					e[62] ||
																						(e[62] = s('span', { class: 'name' }, '函数.md', -1)),
																				]),
																			]),
																			_: 1,
																		}
																	),
																	i(
																		a,
																		{ type: 'file', expanded: !1, empty: !0 },
																		{
																			default: l(
																				() =>
																					e[63] ||
																					(e[63] = [
																						s(
																							'span',
																							{ class: 'tree-node file' },
																							[s('span', { class: 'name' }, '…')],
																							-1
																						),
																					])
																			),
																			_: 1,
																		}
																	),
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
								]),
							]),
							_: 1,
						}
					),
				]),
			]),
			e[87] ||
				(e[87] = s(
					'p',
					null,
					'这可以很方便的管理多个系列文档，每个系列文档都可以有自己的目录结构。',
					-1
				)),
			e[88] ||
				(e[88] = s(
					'h2',
					{ id: '其它目录-文件', tabindex: '-1' },
					[
						s('a', { class: 'header-anchor', href: '#其它目录-文件' }, [
							s('span', null, '其它目录/文件'),
						]),
					],
					-1
				)),
			e[89] ||
				(e[89] = s(
					'p',
					null,
					[
						t('在 '),
						s('mark', null, '文档源目录'),
						t(' 中的 其它目录、文件，除了 '),
						s('code', null, 'README.md'),
						t(' 被识别为 '),
						s('code', null, '主页'),
						t(' 之外，都会被识别为 博客文章。 而 目录结构 则将被识别为 博客分类。'),
					],
					-1
				)),
			s('div', Y, [
				s('ul', null, [
					i(
						a,
						{ type: 'folder', expanded: !0, empty: !1 },
						{
							default: l(() => [
								s('span', $, [
									i(n, { name: 'vscode-icons:folder-type-docs' }),
									e[64] || (e[64] = s('span', { class: 'name' }, 'docs', -1)),
								]),
								s('ul', null, [
									i(
										a,
										{ type: 'folder', expanded: !0, empty: !1 },
										{
											default: l(() => [
												s('span', _, [
													i(n, { name: 'vscode-icons:default-folder' }),
													e[65] || (e[65] = s('span', { class: 'name' }, '生活', -1)),
												]),
												s('ul', null, [
													i(
														a,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: l(() => [
																s('span', ss, [
																	i(n, { name: 'vscode-icons:file-type-markdown' }),
																	e[66] ||
																		(e[66] = s('span', { class: 'name' }, '旅游日记.md', -1)),
																]),
															]),
															_: 1,
														}
													),
													i(
														a,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: l(
																() =>
																	e[67] ||
																	(e[67] = [
																		s(
																			'span',
																			{ class: 'tree-node file' },
																			[s('span', { class: 'name' }, '…')],
																			-1
																		),
																	])
															),
															_: 1,
														}
													),
												]),
											]),
											_: 1,
										}
									),
									i(
										a,
										{ type: 'folder', expanded: !0, empty: !1 },
										{
											default: l(() => [
												s('span', es, [
													i(n, { name: 'vscode-icons:default-folder' }),
													e[68] || (e[68] = s('span', { class: 'name' }, '学习', -1)),
												]),
												s('ul', null, [
													i(
														a,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: l(() => [
																s('span', is, [
																	i(n, { name: 'vscode-icons:file-type-markdown' }),
																	e[69] ||
																		(e[69] = s('span', { class: 'name' }, '考试笔记.md', -1)),
																]),
															]),
															_: 1,
														}
													),
													i(
														a,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: l(
																() =>
																	e[70] ||
																	(e[70] = [
																		s(
																			'span',
																			{ class: 'tree-node file' },
																			[s('span', { class: 'name' }, '…')],
																			-1
																		),
																	])
															),
															_: 1,
														}
													),
												]),
											]),
											_: 1,
										}
									),
									i(
										a,
										{ type: 'folder', expanded: !0, empty: !1 },
										{
											default: l(() => [
												s('span', ls, [
													i(n, { name: 'vscode-icons:default-folder' }),
													e[71] || (e[71] = s('span', { class: 'name' }, '工作', -1)),
												]),
												s('ul', null, [
													i(
														a,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: l(() => [
																s('span', ts, [
																	i(n, { name: 'vscode-icons:file-type-markdown' }),
																	e[72] ||
																		(e[72] = s('span', { class: 'name' }, '番茄时间.md', -1)),
																]),
															]),
															_: 1,
														}
													),
													i(
														a,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: l(
																() =>
																	e[73] ||
																	(e[73] = [
																		s(
																			'span',
																			{ class: 'tree-node file' },
																			[s('span', { class: 'name' }, '…')],
																			-1
																		),
																	])
															),
															_: 1,
														}
													),
												]),
											]),
											_: 1,
										}
									),
									i(
										a,
										{ type: 'file', expanded: !1, empty: !0 },
										{
											default: l(() => [
												s('span', as, [
													i(n, { name: 'vscode-icons:file-type-markdown' }),
													e[74] || (e[74] = s('span', { class: 'name' }, '杂事.md', -1)),
													e[75] || (e[75] = s('span', { class: 'comment' }, ' # 无分类的文章', -1)),
												]),
											]),
											_: 1,
										}
									),
									i(
										a,
										{ type: 'file', expanded: !1, empty: !0 },
										{
											default: l(() => [
												s('span', ns, [
													i(n, { name: 'flat-color-icons:info' }),
													e[76] || (e[76] = s('span', { class: 'name' }, 'README.md', -1)),
													e[77] || (e[77] = s('span', { class: 'comment' }, ' # 主页', -1)),
												]),
											]),
											_: 1,
										}
									),
									i(
										a,
										{ type: 'file', expanded: !1, empty: !0 },
										{
											default: l(
												() =>
													e[78] ||
													(e[78] = [
														s(
															'span',
															{ class: 'tree-node file' },
															[s('span', { class: 'name' }, '…')],
															-1
														),
													])
											),
											_: 1,
										}
									),
								]),
							]),
							_: 1,
						}
					),
				]),
			]),
		])
	)
}
const ks = m(f, [
		['render', ds],
		['__file', 'index.html.vue'],
	]),
	os = JSON.parse(
		'{"path":"/blog/guide/project-structure/","title":"项目结构","lang":"zh-CN","frontmatter":{"title":"项目结构","icon":"ph:tree-structure-bold","createTime":"2024/09/16 21:59:30","permalink":"/blog/guide/project-structure/","description":"本指南将向您说明 VuePress 和 Plume 创建的项目的文件结构，以及如何在项目中使用它们。 当您 的项目，它的文件结构是这样的： 如果你是手动创建的，也可以参考此文件结构管理您的项目 文档源目录 文档源目录 指的是，你的站点的所有 markdown 文件所在的目录。该目录一般在使用 命令行工具 启动 VuePress 时指定： 一般而言，Vu...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/project-structure/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"项目结构"}],["meta",{"property":"og:description","content":"本指南将向您说明 VuePress 和 Plume 创建的项目的文件结构，以及如何在项目中使用它们。 当您 的项目，它的文件结构是这样的： 如果你是手动创建的，也可以参考此文件结构管理您的项目 文档源目录 文档源目录 指的是，你的站点的所有 markdown 文件所在的目录。该目录一般在使用 命令行工具 启动 VuePress 时指定： 一般而言，Vu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"项目结构\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":3.62,"words":1085},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/项目结构.md","bulletin":false}'
	)
export { ks as comp, os as data }
