import {
	_ as g,
	c as o,
	a as p,
	d as s,
	b as e,
	w as a,
	e as i,
	r,
	o as c,
} from './app-B_7CxFr0.js'
const u = {},
	m = { class: 'vp-file-tree' },
	A = { class: 'tree-node folder' },
	D = { class: 'tree-node folder' },
	v = { class: 'tree-node folder' },
	f = { class: 'tree-node file' },
	B = { class: 'tree-node file' },
	b = { class: 'tree-node folder' },
	C = { class: 'tree-node file' },
	x = { class: 'tree-node file' },
	E = { class: 'tree-node file' },
	F = { class: 'tree-node file' },
	N = { class: 'hint-container tip' },
	w = { class: 'hint-container details' },
	T = { class: 'vp-file-tree' },
	I = { class: 'tree-node folder' },
	R = { class: 'tree-node folder' },
	S = { class: 'tree-node folder' },
	U = { class: 'tree-node file' },
	z = { class: 'tree-node file' },
	M = { class: 'tree-node file' },
	j = { class: 'tree-node folder' },
	V = { class: 'tree-node folder' },
	q = { class: 'tree-node folder' },
	L = { class: 'vp-file-tree' },
	P = { class: 'tree-node folder' },
	Z = { class: 'tree-node folder' },
	O = { class: 'tree-node file' },
	J = { class: 'tree-node file' },
	G = { class: 'tree-node folder' },
	H = { class: 'tree-node file' },
	K = { class: 'tree-node file' },
	Q = { class: 'tree-node folder' },
	W = { class: 'tree-node file' },
	X = { class: 'tree-node file' },
	Y = { class: 'tree-node file' },
	$ = { class: 'tree-node folder' },
	_ = { class: 'tree-node folder' },
	ss = { class: 'tree-node file' },
	is = { class: 'tree-node file' },
	ls = { class: 'tree-node file' },
	es = { class: 'vp-file-tree' },
	as = { class: 'tree-node folder' },
	ns = { class: 'tree-node folder' },
	ts = { class: 'tree-node file' },
	ks = { class: 'tree-node file' },
	hs = { class: 'tree-node folder' },
	ds = { class: 'tree-node file' },
	ps = { class: 'tree-node file' },
	rs = { class: 'vp-file-tree' },
	ys = { class: 'tree-node folder' },
	gs = { class: 'tree-node folder' },
	os = { class: 'tree-node folder' },
	cs = { class: 'tree-node folder' },
	us = { class: 'tree-node file' },
	ms = { class: 'tree-node file' },
	As = { class: 'vp-file-tree' },
	Ds = { class: 'tree-node folder' },
	vs = { class: 'tree-node file' }
function fs(Bs, l) {
	const n = r('VPIcon'),
		t = r('FileTreeItem'),
		d = r('CodeTabs'),
		y = r('RouteLink')
	return (
		c(),
		o('div', null, [
			l[104] ||
				(l[104] = p(
					'<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>主题提供了 <code>笔记</code> 的功能，它用于聚合 同一个系列的文章、或者作为站点的 <strong>子文档</strong> 。</p><p><code>笔记</code> 以 文件结构 作为划分依据，默认以 <code>notes/</code> 作为根目录， 存放在 <code>notes</code> 目录下的 文档不会作为 博客文章，不会出现在 博客文章列表页中。</p><h2 id="文件结构与配置" tabindex="-1"><a class="header-anchor" href="#文件结构与配置"><span>文件结构与配置</span></a></h2><p>我们有一个项目中，有以下文件结构：</p>',
					5
				)),
			s('div', m, [
				s('ul', null, [
					e(
						t,
						{ type: 'folder', expanded: !0, empty: !1 },
						{
							default: a(() => [
								s('span', A, [
									e(n, { name: 'vscode-icons:folder-type-docs' }),
									l[0] || (l[0] = s('span', { class: 'name' }, 'docs', -1)),
								]),
								s('ul', null, [
									e(
										t,
										{ type: 'folder', expanded: !0, empty: !1 },
										{
											default: a(() => [
												s('span', D, [
													e(n, { name: 'vscode-icons:default-folder' }),
													l[1] || (l[1] = s('span', { class: 'name' }, 'notes', -1)),
												]),
												s('ul', null, [
													e(
														t,
														{ type: 'folder', expanded: !0, empty: !1 },
														{
															default: a(() => [
																s('span', v, [
																	e(n, { name: 'vscode-icons:default-folder' }),
																	l[2] || (l[2] = s('span', { class: 'name' }, 'typescript', -1)),
																	l[3] ||
																		(l[3] = s(
																			'span',
																			{ class: 'comment' },
																			'# typescript 笔记',
																			-1
																		)),
																]),
																s('ul', null, [
																	e(
																		t,
																		{ type: 'file', expanded: !1, empty: !0 },
																		{
																			default: a(() => [
																				s('span', f, [
																					e(n, { name: 'vscode-icons:file-type-markdown' }),
																					l[4] ||
																						(l[4] = s('span', { class: 'name' }, 'basic.md', -1)),
																				]),
																			]),
																			_: 1,
																		}
																	),
																	e(
																		t,
																		{ type: 'file', expanded: !1, empty: !0 },
																		{
																			default: a(() => [
																				s('span', B, [
																					e(n, { name: 'vscode-icons:file-type-markdown' }),
																					l[5] ||
																						(l[5] = s('span', { class: 'name' }, 'types.md', -1)),
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
													e(
														t,
														{ type: 'folder', expanded: !0, empty: !1 },
														{
															default: a(() => [
																s('span', b, [
																	e(n, { name: 'vscode-icons:default-folder' }),
																	l[6] || (l[6] = s('span', { class: 'name' }, 'rust', -1)),
																	l[7] ||
																		(l[7] = s('span', { class: 'comment' }, '# rust 笔记', -1)),
																]),
																s('ul', null, [
																	e(
																		t,
																		{ type: 'file', expanded: !1, empty: !0 },
																		{
																			default: a(() => [
																				s('span', C, [
																					e(n, { name: 'vscode-icons:file-type-markdown' }),
																					l[8] ||
																						(l[8] = s('span', { class: 'name' }, 'tuple.md', -1)),
																				]),
																			]),
																			_: 1,
																		}
																	),
																	e(
																		t,
																		{ type: 'file', expanded: !1, empty: !0 },
																		{
																			default: a(() => [
																				s('span', x, [
																					e(n, { name: 'vscode-icons:file-type-markdown' }),
																					l[9] ||
																						(l[9] = s('span', { class: 'name' }, 'struct.md', -1)),
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
									e(
										t,
										{ type: 'file', expanded: !1, empty: !0 },
										{
											default: a(() => [
												s('span', E, [
													e(n, { name: 'vscode-icons:file-type-markdown' }),
													l[10] || (l[10] = s('span', { class: 'name' }, 'blog-post.md', -1)),
													l[11] || (l[11] = s('span', { class: 'comment' }, '# 博客文章', -1)),
												]),
											]),
											_: 1,
										}
									),
									e(
										t,
										{ type: 'file', expanded: !1, empty: !0 },
										{
											default: a(() => [
												s('span', F, [
													e(n, { name: 'flat-color-icons:info' }),
													l[12] || (l[12] = s('span', { class: 'name' }, 'README.md', -1)),
													l[13] || (l[13] = s('span', { class: 'comment' }, '# 站点首页', -1)),
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
			l[105] ||
				(l[105] = s(
					'p',
					null,
					[
						i('在 '),
						s('code', null, 'docs/notes'),
						i(' 目录下，有两个子目录，分别用于存放 '),
						s('code', null, 'typescript'),
						i(' 和 '),
						s('code', null, 'rust'),
						i(' 的系列内容。'),
					],
					-1
				)),
			l[106] ||
				(l[106] = s(
					'p',
					null,
					[i('接下来，在配置文件中配置 '), s('code', null, 'notes'), i('：')],
					-1
				)),
			e(
				d,
				{ id: '83', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: a(({ value: k, isActive: h }) => [
						e(n, { name: 'vscode-icons:file-type-typescript' }),
						l[14] || (l[14] = s('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: a(
						({ value: k, isActive: h }) =>
							l[15] ||
							(l[15] = [
								s(
									'div',
									{ class: 'language-js line-numbers-mode', 'data-ext': 'js', 'data-title': 'js' },
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
												i(`
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
												i(`
`),
												s('span', { class: 'line' }),
												i(`
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
												i(`
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
														':'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' plumeTheme'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'({'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'    notes'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' {'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'      // 声明所有笔记的目录，(默认配置，通常您不需要声明它)'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      dir'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
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
														'/notes/'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      link'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
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
														'/'
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
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														" // 声明所有笔记默认的链接前缀， 默认为 '/' （默认配置，通常您不需要声明它）"
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      notes'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ['
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'        // 每个笔记都是 `notes` 数组中的一个对象'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'        {'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'          // 声明笔记的目录，相对于 `notes.dir`，这里表示 `notes/typescript` 目录'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'          dir'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
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
														'typescript'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'          // 声明笔记的链接前缀，与 `notes.link` 拼接，这里表示 `/typescript/`'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'          // 笔记内的所有文章会以 `/typescript/` 作为访问链接前缀。'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'          link'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
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
														'/typescript/'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'          // 配置 笔记侧边导航栏，用于导航向笔记内的所有文档'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'          // 声明为 `auto` 的，将根据目录结构自动生成侧边栏导航'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'          sidebar'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
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
														'auto'
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'        },'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'        {'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'          dir'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
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
														'rust'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'          link'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
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
														'/rust/'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'          sidebar'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ['
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'            {'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														' text'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
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
														'简介'
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
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														' items'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ['
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
														'foo'
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
														']'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' }'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'          ]'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'        }'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'      ]'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    }'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  })'
													),
												]),
												i(`
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
			s('div', N, [
				l[19] || (l[19] = s('p', { class: 'hint-container-title' }, '提示', -1)),
				s('p', null, [
					l[17] ||
						(l[17] = i(
							'你应该在创建文件之前，建议先把笔记的目录和链接前缀等配置好。 主题默认启用了 '
						)),
					e(
						y,
						{ to: '/notes/theme/config/%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE.html#autofrontmatter' },
						{ default: a(() => l[16] || (l[16] = [i('auto-frontmatter')])), _: 1 }
					),
					l[18] || (l[18] = i('， 需要根据配置，为目录中的 md 文件生成永久链接，以及侧边栏。')),
				]),
			]),
			l[107] ||
				(l[107] = s(
					'h3',
					{ id: '编写notes配置', tabindex: '-1' },
					[
						s('a', { class: 'header-anchor', href: '#编写notes配置' }, [
							s('span', null, '编写notes配置'),
						]),
					],
					-1
				)),
			l[108] ||
				(l[108] = s(
					'p',
					null,
					[
						i('由于 '),
						s('code', null, 'notes'),
						i(' 配置全部写在 '),
						s('code', null, 'plumeTheme({ })'),
						i(' 中可能会导致 代码层级嵌套过深，因此更推荐使用主题提供的 '),
						s('code', null, 'defineNotesConfig()'),
						i(' 和 '),
						s('code', null, 'defineNoteConfig()'),
						i(
							' 将 notes 配置提取到外部，它们还能帮助你获得更好的类型提示， 更具可读性和便于维护。'
						),
					],
					-1
				)),
			e(
				d,
				{ id: '99', data: [{ id: '.vuepress/notes.ts' }, { id: '.vuepress/config.ts' }] },
				{
					title0: a(({ value: k, isActive: h }) => [
						e(n, { name: 'vscode-icons:file-type-typescript' }),
						l[20] || (l[20] = s('span', null, '.vuepress/notes.ts', -1)),
					]),
					title1: a(({ value: k, isActive: h }) => [
						e(n, { name: 'vscode-icons:file-type-typescript' }),
						l[21] || (l[21] = s('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: a(
						({ value: k, isActive: h }) =>
							l[22] ||
							(l[22] = [
								s(
									'div',
									{ class: 'language-ts line-numbers-mode', 'data-ext': 'ts', 'data-title': 'ts' },
									[
										s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										s(
											'pre',
											{ class: 'shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code' },
											[
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
															' defineNoteConfig'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
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
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
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
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
													]),
													i(`
`),
													s('span', { class: 'line' }),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'/**'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															' * 配置 单个 note'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															' */'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'const '
														),
														s(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															'typescript'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' ='
														),
														s(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															' defineNoteConfig'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'({'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  dir'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'typescript'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  link'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/typescript/'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  sidebar'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': ['
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"    '"
														),
														s(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/blog/guide/intro.md'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"    '"
														),
														s(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/blog/guide/getting-start.md'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"    '"
														),
														s(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/config/config-file.md'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'  ]'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'})'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'/**'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															' * 配置 notes'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															' */'
														),
													]),
													i(`
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
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'  // 声明所有笔记的目录，(默认配置，通常您不需要声明它)'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  dir'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/notes/'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  link'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'  // 在这里添加 note 配置'
														),
													]),
													i(`
`),
													s('span', { class: 'line diff add' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  notes'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': ['
														),
														s(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															'typescript'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'] '
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'})'
														),
													]),
												]),
											]
										),
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
					tab1: a(
						({ value: k, isActive: h }) =>
							l[23] ||
							(l[23] = [
								s(
									'div',
									{ class: 'language-ts', 'data-ext': 'ts', 'data-title': 'ts' },
									[
										s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										s(
											'pre',
											{ class: 'shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code' },
											[
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
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
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
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
													]),
													i(`
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
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
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
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
													]),
													i(`
`),
													s('span', { class: 'line diff add' }, [
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
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
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
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
													]),
													i(`
`),
													s('span', { class: 'line' }),
													i(`
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
													i(`
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
													i(`
`),
													s('span', { class: 'line diff add' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															'    notes'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'  }),'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
			s('details', w, [
				l[42] || (l[42] = s('summary', null, '笔记比较多时怎么配置？', -1)),
				l[43] ||
					(l[43] = s(
						'p',
						null,
						[
							i('如果您拥有比较多的笔记，全部放到一个 '),
							s('code', null, 'notes.ts'),
							i(' 中配置，可能会显得文件比较大且不好维护。 您可以对文件进行拆分，以 '),
							s('code', null, '.vuepress/notes/'),
							i(' 目录作为 笔记配置的目录。'),
						],
						-1
					)),
				s('div', T, [
					s('ul', null, [
						e(
							t,
							{ type: 'folder', expanded: !0, empty: !1 },
							{
								default: a(() => [
									s('span', I, [
										e(n, { name: 'vscode-icons:folder-type-docs' }),
										l[24] || (l[24] = s('span', { class: 'name' }, 'docs', -1)),
									]),
									s('ul', null, [
										e(
											t,
											{ type: 'folder', expanded: !0, empty: !1 },
											{
												default: a(() => [
													s('span', R, [
														e(n, { name: 'vscode-icons:default-folder' }),
														l[25] || (l[25] = s('span', { class: 'name' }, '.vuepress', -1)),
													]),
													s('ul', null, [
														e(
															t,
															{ type: 'folder', expanded: !0, empty: !1 },
															{
																default: a(() => [
																	s('span', S, [
																		e(n, { name: 'vscode-icons:default-folder' }),
																		l[26] || (l[26] = s('span', { class: 'name' }, 'notes', -1)),
																	]),
																	s('ul', null, [
																		e(
																			t,
																			{ type: 'file', expanded: !1, empty: !0 },
																			{
																				default: a(() => [
																					s('span', U, [
																						e(n, { name: 'vscode-icons:file-type-typescript' }),
																						l[27] ||
																							(l[27] = s(
																								'span',
																								{ class: 'name' },
																								'typescript.ts',
																								-1
																							)),
																					]),
																				]),
																				_: 1,
																			}
																		),
																		e(
																			t,
																			{ type: 'file', expanded: !1, empty: !0 },
																			{
																				default: a(() => [
																					s('span', z, [
																						e(n, { name: 'vscode-icons:file-type-typescript' }),
																						l[28] ||
																							(l[28] = s('span', { class: 'name' }, 'rust.ts', -1)),
																					]),
																				]),
																				_: 1,
																			}
																		),
																		e(
																			t,
																			{ type: 'file', expanded: !1, empty: !0 },
																			{
																				default: a(() => [
																					s('span', M, [
																						e(n, { name: 'vscode-icons:file-type-typescript' }),
																						l[29] ||
																							(l[29] = s(
																								'span',
																								{ class: 'name' },
																								'index.ts',
																								-1
																							)),
																					]),
																				]),
																				_: 1,
																			}
																		),
																		e(
																			t,
																			{ type: 'file', expanded: !1, empty: !0 },
																			{
																				default: a(
																					() =>
																						l[30] ||
																						(l[30] = [
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
										e(
											t,
											{ type: 'folder', expanded: !0, empty: !1 },
											{
												default: a(() => [
													s('span', j, [
														e(n, { name: 'vscode-icons:default-folder' }),
														l[31] || (l[31] = s('span', { class: 'name' }, 'notes', -1)),
													]),
													s('ul', null, [
														e(
															t,
															{ type: 'folder', expanded: !1, empty: !0 },
															{
																default: a(() => [
																	s('span', V, [
																		e(n, { name: 'vscode-icons:default-folder' }),
																		l[32] ||
																			(l[32] = s('span', { class: 'name' }, 'typescript', -1)),
																	]),
																]),
																_: 1,
															}
														),
														e(
															t,
															{ type: 'folder', expanded: !1, empty: !0 },
															{
																default: a(() => [
																	s('span', q, [
																		e(n, { name: 'vscode-icons:default-folder' }),
																		l[33] || (l[33] = s('span', { class: 'name' }, 'rust', -1)),
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
				l[44] || (l[44] = s('p', null, '代码如下所示：', -1)),
				e(
					d,
					{
						id: '176',
						data: [
							{ id: '.vuepress/config.ts' },
							{ id: '.vuepress/notes/index.ts' },
							{ id: '.vuepress/notes/typescript.ts' },
							{ id: '.vuepress/notes/rust.ts' },
						],
					},
					{
						title0: a(({ value: k, isActive: h }) => [
							e(n, { name: 'vscode-icons:file-type-typescript' }),
							l[34] || (l[34] = s('span', null, '.vuepress/config.ts', -1)),
						]),
						title1: a(({ value: k, isActive: h }) => [
							e(n, { name: 'vscode-icons:file-type-typescript' }),
							l[35] || (l[35] = s('span', null, '.vuepress/notes/index.ts', -1)),
						]),
						title2: a(({ value: k, isActive: h }) => [
							e(n, { name: 'vscode-icons:file-type-typescript' }),
							l[36] || (l[36] = s('span', null, '.vuepress/notes/typescript.ts', -1)),
						]),
						title3: a(({ value: k, isActive: h }) => [
							e(n, { name: 'vscode-icons:file-type-typescript' }),
							l[37] || (l[37] = s('span', null, '.vuepress/notes/rust.ts', -1)),
						]),
						tab0: a(
							({ value: k, isActive: h }) =>
								l[38] ||
								(l[38] = [
									s(
										'div',
										{ class: 'language-ts', 'data-ext': 'ts', 'data-title': 'ts' },
										[
											s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
											s(
												'pre',
												{ class: 'shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code' },
												[
													s('code', null, [
														s('span', { class: 'line' }, [
															s(
																'span',
																{
																	style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' },
																},
																'import'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																' {'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' },
																},
																' defineUserConfig'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																' }'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' },
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
																	style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' },
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
														i(`
`),
														s('span', { class: 'line' }, [
															s(
																'span',
																{
																	style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' },
																},
																'import'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																' {'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' },
																},
																' plumeTheme'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																' }'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' },
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
																	style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' },
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
														i(`
`),
														s('span', { class: 'line diff add' }, [
															s(
																'span',
																{
																	style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' },
																},
																'import'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' },
																},
																' notes'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' },
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
																	style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' },
																},
																'./notes/index.js'
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
														i(`
`),
														s('span', { class: 'line' }),
														i(`
`),
														s('span', { class: 'line' }, [
															s(
																'span',
																{
																	style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' },
																},
																'export'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' },
																},
																' default'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' },
																},
																' defineUserConfig'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																'({'
															),
														]),
														i(`
`),
														s('span', { class: 'line' }, [
															s(
																'span',
																{
																	style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' },
																},
																'  theme'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																': '
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' },
																},
																'plumeTheme'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																'({'
															),
														]),
														i(`
`),
														s('span', { class: 'line diff add' }, [
															s(
																'span',
																{
																	style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' },
																},
																'    notes'
															),
														]),
														i(`
`),
														s('span', { class: 'line' }, [
															s(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																'  }),'
															),
														]),
														i(`
`),
														s('span', { class: 'line' }, [
															s(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
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
						tab1: a(
							({ value: k, isActive: h }) =>
								l[39] ||
								(l[39] = [
									s(
										'div',
										{
											class: 'language-ts line-numbers-mode',
											'data-ext': 'ts',
											'data-title': 'ts',
										},
										[
											s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
											s(
												'pre',
												{ class: 'shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code' },
												[
													s('code', null, [
														s('span', { class: 'line' }, [
															s(
																'span',
																{
																	style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' },
																},
																'import'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																' {'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' },
																},
																' defineNotesConfig'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																' }'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' },
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
																	style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' },
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
														i(`
`),
														s('span', { class: 'line diff add' }, [
															s(
																'span',
																{
																	style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' },
																},
																'import'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' },
																},
																' rust'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' },
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
																	style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' },
																},
																'./rust'
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
														i(`
`),
														s('span', { class: 'line diff add' }, [
															s(
																'span',
																{
																	style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' },
																},
																'import'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' },
																},
																' typescript'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' },
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
																	style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' },
																},
																'./typescript'
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
														i(`
`),
														s('span', { class: 'line' }),
														i(`
`),
														s('span', { class: 'line' }, [
															s(
																'span',
																{
																	style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' },
																},
																'export'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' },
																},
																' default'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' },
																},
																' defineNotesConfig'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																'({'
															),
														]),
														i(`
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
																'  // 声明所有笔记的目录，(默认配置，通常您不需要声明它)'
															),
														]),
														i(`
`),
														s('span', { class: 'line' }, [
															s(
																'span',
																{
																	style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' },
																},
																'  dir'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
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
																	style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' },
																},
																'/notes/'
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
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																','
															),
														]),
														i(`
`),
														s('span', { class: 'line' }, [
															s(
																'span',
																{
																	style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' },
																},
																'  link'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
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
																	style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' },
																},
																'/'
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
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																','
															),
														]),
														i(`
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
																'  // 在这里添加 note 配置'
															),
														]),
														i(`
`),
														s('span', { class: 'line diff add' }, [
															s(
																'span',
																{
																	style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' },
																},
																'  notes'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																': [ '
															),
														]),
														i(`
`),
														s('span', { class: 'line diff add' }, [
															s(
																'span',
																{
																	style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' },
																},
																'    typescript'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																','
															),
														]),
														i(`
`),
														s('span', { class: 'line diff add' }, [
															s(
																'span',
																{
																	style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' },
																},
																'    rust'
															),
															s(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																','
															),
														]),
														i(`
`),
														s('span', { class: 'line diff add' }, [
															s(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																'  ]'
															),
														]),
														i(`
`),
														s('span', { class: 'line' }, [
															s(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																'})'
															),
														]),
													]),
												]
											),
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
												]
											),
										],
										-1
									),
								])
						),
						tab2: a(
							({ value: k, isActive: h }) =>
								l[40] ||
								(l[40] = [
									s(
										'div',
										{
											class: 'language-ts line-numbers-mode',
											'data-ext': 'ts',
											'data-title': 'ts',
										},
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
															' defineNoteConfig'
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
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
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
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
													]),
													i(`
`),
													s('span', { class: 'line' }),
													i(`
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
															' defineNoteConfig'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'({'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  dir'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'typescript'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  link'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/typescript/'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  sidebar'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': ['
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"    '"
														),
														s(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/blog/guide/intro.md'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"    '"
														),
														s(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/blog/guide/getting-start.md'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"    '"
														),
														s(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/config/config-file.md'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'  ]'
														),
													]),
													i(`
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
						tab3: a(
							({ value: k, isActive: h }) =>
								l[41] ||
								(l[41] = [
									s(
										'div',
										{
											class: 'language-ts line-numbers-mode',
											'data-ext': 'ts',
											'data-title': 'ts',
										},
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
															' defineNoteConfig'
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
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
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
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
													]),
													i(`
`),
													s('span', { class: 'line' }),
													i(`
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
															' defineNoteConfig'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'({'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  dir'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'rust'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  link'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/rust/'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  sidebar'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': ['
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"    '"
														),
														s(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/blog/guide/intro.md'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"    '"
														),
														s(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/blog/guide/getting-start.md'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"    '"
														),
														s(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/config/config-file.md'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'  ]'
														),
													]),
													i(`
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
			]),
			l[109] ||
				(l[109] = s(
					'h3',
					{ id: '侧边栏配置', tabindex: '-1' },
					[
						s('a', { class: 'header-anchor', href: '#侧边栏配置' }, [
							s('span', null, '侧边栏配置'),
						]),
					],
					-1
				)),
			l[110] ||
				(l[110] = s(
					'p',
					null,
					[i('以 '), s('code', null, 'typescript'), i(' 目录为例，它拥有如下的文件结构：')],
					-1
				)),
			s('div', L, [
				s('ul', null, [
					e(
						t,
						{ type: 'folder', expanded: !0, empty: !1 },
						{
							default: a(() => [
								s('span', P, [
									e(n, { name: 'vscode-icons:default-folder' }),
									l[45] || (l[45] = s('span', { class: 'name' }, 'typescript', -1)),
								]),
								s('ul', null, [
									e(
										t,
										{ type: 'folder', expanded: !0, empty: !1 },
										{
											default: a(() => [
												s('span', Z, [
													e(n, { name: 'vscode-icons:default-folder' }),
													l[46] || (l[46] = s('span', { class: 'name' }, 'guide', -1)),
												]),
												s('ul', null, [
													e(
														t,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: a(() => [
																s('span', O, [
																	e(n, { name: 'vscode-icons:file-type-markdown' }),
																	l[47] || (l[47] = s('span', { class: 'name' }, 'intro.md', -1)),
																]),
															]),
															_: 1,
														}
													),
													e(
														t,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: a(() => [
																s('span', J, [
																	e(n, { name: 'vscode-icons:file-type-markdown' }),
																	l[48] ||
																		(l[48] = s('span', { class: 'name' }, 'getting-start.md', -1)),
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
									e(
										t,
										{ type: 'folder', expanded: !0, empty: !1 },
										{
											default: a(() => [
												s('span', G, [
													e(n, { name: 'vscode-icons:folder-type-config' }),
													l[49] || (l[49] = s('span', { class: 'name' }, 'config', -1)),
												]),
												s('ul', null, [
													e(
														t,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: a(() => [
																s('span', H, [
																	e(n, { name: 'vscode-icons:file-type-markdown' }),
																	l[50] ||
																		(l[50] = s('span', { class: 'name' }, 'config-file.md', -1)),
																]),
															]),
															_: 1,
														}
													),
													e(
														t,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: a(() => [
																s('span', K, [
																	e(n, { name: 'vscode-icons:file-type-markdown' }),
																	l[51] ||
																		(l[51] = s('span', { class: 'name' }, 'configuration.md', -1)),
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
									e(
										t,
										{ type: 'folder', expanded: !0, empty: !1 },
										{
											default: a(() => [
												s('span', Q, [
													e(n, { name: 'vscode-icons:default-folder' }),
													l[52] || (l[52] = s('span', { class: 'name' }, 'reference', -1)),
												]),
												s('ul', null, [
													e(
														t,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: a(() => [
																s('span', W, [
																	e(n, { name: 'vscode-icons:file-type-markdown' }),
																	l[53] || (l[53] = s('span', { class: 'name' }, 'basic.md', -1)),
																]),
															]),
															_: 1,
														}
													),
													e(
														t,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: a(() => [
																s('span', X, [
																	e(n, { name: 'vscode-icons:file-type-markdown' }),
																	l[54] || (l[54] = s('span', { class: 'name' }, 'syntax.md', -1)),
																]),
															]),
															_: 1,
														}
													),
													e(
														t,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: a(() => [
																s('span', Y, [
																	e(n, { name: 'vscode-icons:file-type-markdown' }),
																	l[55] || (l[55] = s('span', { class: 'name' }, 'modules.md', -1)),
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
									e(
										t,
										{ type: 'folder', expanded: !0, empty: !1 },
										{
											default: a(() => [
												s('span', $, [
													e(n, { name: 'vscode-icons:default-folder' }),
													l[56] || (l[56] = s('span', { class: 'name' }, 'built-in', -1)),
												]),
												s('ul', null, [
													e(
														t,
														{ type: 'folder', expanded: !0, empty: !1 },
														{
															default: a(() => [
																s('span', _, [
																	e(n, { name: 'vscode-icons:folder-type-typings' }),
																	l[57] || (l[57] = s('span', { class: 'name' }, 'types', -1)),
																]),
																s('ul', null, [
																	e(
																		t,
																		{ type: 'file', expanded: !1, empty: !0 },
																		{
																			default: a(() => [
																				s('span', ss, [
																					e(n, { name: 'vscode-icons:file-type-markdown' }),
																					l[58] ||
																						(l[58] = s(
																							'span',
																							{ class: 'name' },
																							'Required.md',
																							-1
																						)),
																				]),
																			]),
																			_: 1,
																		}
																	),
																	e(
																		t,
																		{ type: 'file', expanded: !1, empty: !0 },
																		{
																			default: a(() => [
																				s('span', is, [
																					e(n, { name: 'vscode-icons:file-type-markdown' }),
																					l[59] ||
																						(l[59] = s('span', { class: 'name' }, 'Omit.md', -1)),
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
									e(
										t,
										{ type: 'file', expanded: !1, empty: !0 },
										{
											default: a(() => [
												s('span', ls, [
													e(n, { name: 'flat-color-icons:info' }),
													l[60] || (l[60] = s('span', { class: 'name' }, 'README.md', -1)),
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
			l[111] ||
				(l[111] = s(
					'h4',
					{ id: '自动生成侧边栏', tabindex: '-1' },
					[
						s('a', { class: 'header-anchor', href: '#自动生成侧边栏' }, [
							s('span', null, '自动生成侧边栏'),
						]),
					],
					-1
				)),
			l[112] ||
				(l[112] = s(
					'p',
					null,
					[
						i('一种最简单的配置方式是 '),
						s('code', null, "sidebar: 'auto'"),
						i(' ， 主题会自动根据 文件结构生成侧边栏，并根据 首个字符的编码 来排序。'),
					],
					-1
				)),
			l[113] ||
				(l[113] = s(
					'p',
					null,
					[
						i('如果想要修改 自动生成的侧边栏的顺序，可以直接在 目录名 或 文件名之前，添加 '),
						s('code', null, '1.'),
						i(' 或 '),
						s('code', null, '2.'),
						i(' 等前缀。'),
					],
					-1
				)),
			s('div', es, [
				s('ul', null, [
					e(
						t,
						{ type: 'folder', expanded: !0, empty: !1 },
						{
							default: a(() => [
								s('span', as, [
									e(n, { name: 'vscode-icons:default-folder' }),
									l[61] || (l[61] = s('span', { class: 'name' }, 'typescript', -1)),
								]),
								s('ul', null, [
									e(
										t,
										{ type: 'folder', expanded: !0, empty: !1 },
										{
											default: a(() => [
												s('span', ns, [
													e(n, { name: 'vscode-icons:default-folder' }),
													l[62] || (l[62] = s('span', { class: 'name' }, '1.guide', -1)),
												]),
												s('ul', null, [
													e(
														t,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: a(() => [
																s('span', ts, [
																	e(n, { name: 'vscode-icons:file-type-markdown' }),
																	l[63] || (l[63] = s('span', { class: 'name' }, '1.intro.md', -1)),
																]),
															]),
															_: 1,
														}
													),
													e(
														t,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: a(() => [
																s('span', ks, [
																	e(n, { name: 'vscode-icons:file-type-markdown' }),
																	l[64] ||
																		(l[64] = s(
																			'span',
																			{ class: 'name' },
																			'2.getting-start.md',
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
									e(
										t,
										{ type: 'folder', expanded: !0, empty: !1 },
										{
											default: a(() => [
												s('span', hs, [
													e(n, { name: 'vscode-icons:default-folder' }),
													l[65] || (l[65] = s('span', { class: 'name' }, '2.config', -1)),
												]),
												s('ul', null, [
													e(
														t,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: a(() => [
																s('span', ds, [
																	e(n, { name: 'vscode-icons:file-type-markdown' }),
																	l[66] ||
																		(l[66] = s('span', { class: 'name' }, '1.config-file.md', -1)),
																]),
															]),
															_: 1,
														}
													),
													e(
														t,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: a(() => [
																s('span', ps, [
																	e(n, { name: 'vscode-icons:file-type-markdown' }),
																	l[67] ||
																		(l[67] = s(
																			'span',
																			{ class: 'name' },
																			'2.configuration.md',
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
									e(
										t,
										{ type: 'file', expanded: !1, empty: !0 },
										{
											default: a(
												() =>
													l[68] ||
													(l[68] = [
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
			l[114] ||
				(l[114] = p(
					`<p>主题将根据 这部分的前缀的 数字 进行排序，前缀部分不会显示在侧边栏中。</p><h4 id="自定义侧边栏" tabindex="-1"><a class="header-anchor" href="#自定义侧边栏"><span>自定义侧边栏</span></a></h4><p>有时候自动生成侧边栏 不能完全满足需求，你可以自定义侧边栏。</p><p>以下是 侧边栏的 类型定义：</p><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Sidebar</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> |</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> SidebarItem</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)[]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> SidebarItem</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 侧边栏文本</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  text</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 侧边栏链接</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  link</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 侧边栏图标</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  icon</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">ThemeIcon</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 当前分组的链接前缀，链接前缀会拼接在 \`items\` 内的 \`link\` 之前</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 当且仅当 \`items\` 内的 \`link\` 为 相对路径时，才会拼接</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  prefix</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 次级侧边栏分组</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  items</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">auto</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | (</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">SidebarItem</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)[]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 如果未指定，组不可折叠。</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 如果为\`true\`，组可折叠，并默认折叠。</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 如果为\`false\`，组可折叠，但默认展开。</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  collapsed</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 传入类型为 <code>string</code> 时，表示 markdown 文件的路径：</p>`,
					6
				)),
			e(
				d,
				{ id: '368', data: [{ id: '.vuepress/notes.ts' }] },
				{
					title0: a(({ value: k, isActive: h }) => [
						e(n, { name: 'vscode-icons:file-type-typescript' }),
						l[69] || (l[69] = s('span', null, '.vuepress/notes.ts', -1)),
					]),
					tab0: a(
						({ value: k, isActive: h }) =>
							l[70] ||
							(l[70] = [
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
														' defineNoteConfig'
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
												i(`
`),
												s('span', { class: 'line' }),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'const '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'typescript'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' defineNoteConfig'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'({'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'  dir'
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
														'typescript'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'  link'
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
														'/typescript/'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'  sidebar'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': ['
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"    '"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'/blog/guide/intro.md'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"    '"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'/blog/guide/getting-start.md'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"    '"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'/config/config-file.md'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'    // ...'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  ]'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'})'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'// ... other code'
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
			l[115] ||
				(l[115] = p(
					'<p>你也可以省略 <code>.md</code> 文件后缀，简写为 <code>/blog/guide/intro</code> 。主题会解析 对应的文件，获取 <strong>标题</strong> 和 <strong>页面链接地址</strong> 并将其转换为 <code>{ text: string, link: string }</code> 的数据形式。</p><p>当传入类型为 <code>SidebarItem</code> 时:</p>',
					2
				)),
			e(
				d,
				{ id: '379', data: [{ id: '.vuepress/notes.ts' }] },
				{
					title0: a(({ value: k, isActive: h }) => [
						e(n, { name: 'vscode-icons:file-type-typescript' }),
						l[71] || (l[71] = s('span', null, '.vuepress/notes.ts', -1)),
					]),
					tab0: a(
						({ value: k, isActive: h }) =>
							l[72] ||
							(l[72] = [
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
														' defineNoteConfig'
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
												i(`
`),
												s('span', { class: 'line' }),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'const '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'typescript'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' defineNoteConfig'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'({'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'  dir'
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
														'typescript'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'  link'
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
														'/typescript/'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'  sidebar'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': ['
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    { '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'text'
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
														'介绍'
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
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'link'
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
														'/blog/guide/intro'
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
														' },'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    { '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'text'
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
														'快速上手'
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
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'link'
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
														'/blog/guide/getting-start'
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
														' },'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'  // ...'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  ]'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'})'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'// ... other code'
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
					_: 1,
				}
			),
			l[116] || (l[116] = s('p', null, '也可以进行多层嵌套：', -1)),
			e(
				d,
				{ id: '387', data: [{ id: '.vuepress/notes.ts' }] },
				{
					title0: a(({ value: k, isActive: h }) => [
						e(n, { name: 'vscode-icons:file-type-typescript' }),
						l[73] || (l[73] = s('span', null, '.vuepress/notes.ts', -1)),
					]),
					tab0: a(
						({ value: k, isActive: h }) =>
							l[74] ||
							(l[74] = [
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
														' defineNoteConfig'
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
												i(`
`),
												s('span', { class: 'line' }),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'const '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'typescript'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' defineNoteConfig'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'({'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'  dir'
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
														'typescript'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'  link'
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
														'/typescript/'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'  sidebar'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': ['
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    {'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      text'
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
														'指南'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      prefix'
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
														'/blog/guide'
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
														'// 使用 prefix 拼接，可以简写 下面的 items 中的 link 为相对路径'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      items'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': ['
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'      // 可以混用 string 和 SidebarItem'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'        { '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'text'
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
														'介绍'
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
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'link'
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
														'intro'
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
														' },'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"        '"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'getting-start'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'      ],'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    },'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    {'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      text'
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
														'配置'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      prefix'
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
														'/config'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      items'
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
														'auto'
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
														"// items 为 'auto'，会根据 prefix 的文件结构自动生成侧边栏"
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    },'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  ]'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'})'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'// ... other code'
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
			l[117] ||
				(l[117] = p(
					'<h3 id="关于-prefix" tabindex="-1"><a class="header-anchor" href="#关于-prefix"><span>关于 <code>prefix</code></span></a></h3><p><code>prefix</code> 的目的是为了简写与其同层级的 <code>items</code> 项内的 链接，它允许你将这些链接的相同的前缀提取到 <code>prefix</code> 中，由主题帮您完成完整链接的拼接。</p><p>需要注意的是，<code>items</code> 中的链接 仅有 相对路径的链接才会与 <code>prefix</code> 拼接，而绝对路径则不进行处理。</p>',
					3
				)),
			e(
				d,
				{ id: '401', data: [{ id: '.vuepress/notes.ts' }] },
				{
					title0: a(({ value: k, isActive: h }) => [
						e(n, { name: 'vscode-icons:file-type-typescript' }),
						l[75] || (l[75] = s('span', null, '.vuepress/notes.ts', -1)),
					]),
					tab0: a(
						({ value: k, isActive: h }) =>
							l[76] ||
							(l[76] = [
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
														' defineNoteConfig'
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
												i(`
`),
												s('span', { class: 'line' }),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'const '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'typescript'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' defineNoteConfig'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'({'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'  dir'
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
														'typescript'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'  link'
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
														'/typescript/'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'  sidebar'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': ['
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    {'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      prefix'
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
														'/blog/guide'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      items'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': ['
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"        '"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'intro'
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
														'// 相对路径, 最终拼接为 /blog/guide/intro'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"        '"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'/config/config-file'
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
														'// 绝对路径，不拼接'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'        {'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'          text'
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
														'博客'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'          link'
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
														'blog'
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
														'// 相对路径, 最终拼接为 /blog/guide/blog'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'        },'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'        {'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'          text'
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
														'配置'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'          link'
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
														'/config'
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
														'// 绝对路径，不拼接'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'        }'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'      ]'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    }'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  ]'
													),
												]),
												i(`
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
			l[118] ||
				(l[118] = p(
					'<p>同时，<code>items</code> 内还支持 深层嵌套，内部还依然支持 <code>prefix</code>，这里也遵循相同的规则，<code>prefix</code> 如果是相对路径， 则会与 上一层的 <code>prefix</code> 拼接，再与 当前层级 <code>items</code> 内的 <code>link</code> 拼接，如果 <code>prefix</code> 是绝对路径，则不与 上一层级 <code>prefix</code> 拼接。</p>',
					1
				)),
			e(
				d,
				{ id: '409', data: [{ id: '.vuepress/notes.ts' }] },
				{
					title0: a(({ value: k, isActive: h }) => [
						e(n, { name: 'vscode-icons:file-type-typescript' }),
						l[77] || (l[77] = s('span', null, '.vuepress/notes.ts', -1)),
					]),
					tab0: a(
						({ value: k, isActive: h }) =>
							l[78] ||
							(l[78] = [
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
														' defineNoteConfig'
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
												i(`
`),
												s('span', { class: 'line' }),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'const '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'typescript'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' defineNoteConfig'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'({'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'  dir'
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
														'typescript'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'  link'
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
														'/typescript/'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'  sidebar'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': ['
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    {'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      prefix'
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
														'/blog/guide'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      items'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': ['
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"        '"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'intro'
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
														'// 相对路径, 最终拼接为 /blog/guide/intro'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'        {'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'          prefix'
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
														'/config'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'          items'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': ['
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"            '"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'config-file'
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
														'// 相对路径, 最终拼接为 /config/config-file'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"            '"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'configuration'
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
														'// 相对路径, 最终拼接为 /config/configuration'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'          ]'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'        },'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'        {'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'          prefix'
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
														'blog'
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'          items'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': ['
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"            '"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'intro'
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
														'// 相对路径, 最终拼接为 /blog/guide/blog/intro'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"            '"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'getting-start'
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
														'// 相对路径, 最终拼接为 /blog/guide/blog/getting-start'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'          ]'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'        }'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'      ]'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    }'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  ]'
													),
												]),
												i(`
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
			l[119] ||
				(l[119] = p(
					'<p><strong>是否是绝对路径的判断标准是，如果以 <code>/</code> 开头，则为绝对路径，否则为相对路径</strong></p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>不建议 侧边栏的层级过深，超过 3 层的侧边栏 可能会导致 糟糕的 UI 效果。</p></div><h3 id="侧边栏图标" tabindex="-1"><a class="header-anchor" href="#侧边栏图标"><span>侧边栏图标</span></a></h3><p>为侧边栏添加 图标 有助于 侧边栏更好的呈现。得益于 <a href="https://iconify.design/" target="_blank" rel="noopener noreferrer">iconify</a> 这个强大的开源图标库， 你可以使用超过 <code>200k</code> 的图标，仅需要添加 <code>icon</code> 配置即可。</p>',
					4
				)),
			e(
				d,
				{ id: '428', data: [{ id: '.vuepress/notes.ts' }] },
				{
					title0: a(({ value: k, isActive: h }) => [
						e(n, { name: 'vscode-icons:file-type-typescript' }),
						l[79] || (l[79] = s('span', null, '.vuepress/notes.ts', -1)),
					]),
					tab0: a(
						({ value: k, isActive: h }) =>
							l[80] ||
							(l[80] = [
								s(
									'div',
									{ class: 'language-ts line-numbers-mode', 'data-ext': 'ts', 'data-title': 'ts' },
									[
										s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										s(
											'pre',
											{
												class:
													'shiki shiki-themes vitesse-light vitesse-dark has-highlighted vp-code',
											},
											[
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
															' defineNoteConfig'
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
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
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
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
													]),
													i(`
`),
													s('span', { class: 'line' }),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'const '
														),
														s(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															'typescript'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' ='
														),
														s(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															' defineNoteConfig'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'({'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  dir'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'typescript'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  link'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/typescript/'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  sidebar'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': ['
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'    {'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'      text'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'指南'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'      prefix'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/blog/guide'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													i(`
`),
													s('span', { class: 'line highlighted' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'      icon'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'ep:guide'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															', '
														),
														s(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'// iconify icon name'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'      items'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': ['
														),
													]),
													i(`
`),
													s('span', { class: 'line highlighted' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'        { '
														),
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'text'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'介绍'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															', '
														),
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'link'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'intro'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															', '
														),
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'icon'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'ph:info-light'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' }, '
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'      ],'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'    },'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'  ]'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'})'
														),
													]),
												]),
											]
										),
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
			l[120] || (l[120] = s('p', null, '也可以使用本地图标，或者本地图片：', -1)),
			e(
				d,
				{ id: '436', data: [{ id: '.vuepress/notes.ts' }] },
				{
					title0: a(({ value: k, isActive: h }) => [
						e(n, { name: 'vscode-icons:file-type-typescript' }),
						l[81] || (l[81] = s('span', null, '.vuepress/notes.ts', -1)),
					]),
					tab0: a(
						({ value: k, isActive: h }) =>
							l[82] ||
							(l[82] = [
								s(
									'div',
									{ class: 'language-ts line-numbers-mode', 'data-ext': 'ts', 'data-title': 'ts' },
									[
										s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										s(
											'pre',
											{
												class:
													'shiki shiki-themes vitesse-light vitesse-dark has-highlighted vp-code',
											},
											[
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
															' defineNoteConfig'
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
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
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
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
													]),
													i(`
`),
													s('span', { class: 'line' }),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'const '
														),
														s(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															'typescript'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' ='
														),
														s(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															' defineNoteConfig'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'({'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  dir'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'typescript'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  link'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/typescript/'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  sidebar'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': ['
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'    {'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'      text'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'指南'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'      prefix'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/blog/guide'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													i(`
`),
													s('span', { class: 'line highlighted' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'      icon'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/images/blog/guide.png'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															', '
														),
														s(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'// iconify icon name'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'      items'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': ['
														),
													]),
													i(`
`),
													s('span', { class: 'line highlighted' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'        { '
														),
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'text'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'介绍'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															', '
														),
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'link'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'intro'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															', '
														),
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'icon'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/images/info.png'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' }, '
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'        // 也可以是一个远程图片'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'        { '
														),
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'text'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'快速上手'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															', '
														),
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'link'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'getting-start'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															', '
														),
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'icon'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'https://cn.vuejs.org/images/logo.png'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' },'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'      ],'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'    },'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'  ]'
														),
													]),
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'})'
														),
													]),
												]),
											]
										),
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
			l[121] ||
				(l[121] = s(
					'p',
					null,
					[
						s('strong', null, [
							i('请注意，使用本地图片必须以 '),
							s('code', null, '/'),
							i(' 开头，表示为 静态资源路径，它将从 '),
							s('code', null, '.vuepress/public/'),
							i(' 目录中加载。'),
						]),
					],
					-1
				)),
			s('div', rs, [
				s('ul', null, [
					e(
						t,
						{ type: 'folder', expanded: !0, empty: !1 },
						{
							default: a(() => [
								s('span', ys, [
									e(n, { name: 'vscode-icons:folder-type-docs' }),
									l[83] || (l[83] = s('span', { class: 'name' }, 'docs', -1)),
								]),
								s('ul', null, [
									e(
										t,
										{ type: 'folder', expanded: !0, empty: !1 },
										{
											default: a(() => [
												s('span', gs, [
													e(n, { name: 'vscode-icons:default-folder' }),
													l[84] || (l[84] = s('span', { class: 'name' }, '.vuepress', -1)),
												]),
												s('ul', null, [
													e(
														t,
														{ type: 'folder', expanded: !0, empty: !1 },
														{
															default: a(() => [
																s('span', os, [
																	e(n, { name: 'vscode-icons:folder-type-public' }),
																	l[85] || (l[85] = s('span', { class: 'name' }, 'public', -1)),
																	l[86] ||
																		(l[86] = s(
																			'span',
																			{ class: 'comment' },
																			' # 在这个位置保存静态资源',
																			-1
																		)),
																]),
																s('ul', null, [
																	e(
																		t,
																		{ type: 'folder', expanded: !0, empty: !1 },
																		{
																			default: a(() => [
																				s('span', cs, [
																					e(n, { name: 'vscode-icons:folder-type-images' }),
																					l[87] ||
																						(l[87] = s('span', { class: 'name' }, 'images', -1)),
																				]),
																				s('ul', null, [
																					e(
																						t,
																						{ type: 'file', expanded: !1, empty: !0 },
																						{
																							default: a(() => [
																								s('span', us, [
																									e(n, { name: 'vscode-icons:file-type-image' }),
																									l[88] ||
																										(l[88] = s(
																											'span',
																											{ class: 'name' },
																											'guide.png',
																											-1
																										)),
																								]),
																							]),
																							_: 1,
																						}
																					),
																					e(
																						t,
																						{ type: 'file', expanded: !1, empty: !0 },
																						{
																							default: a(() => [
																								s('span', ms, [
																									e(n, { name: 'vscode-icons:file-type-image' }),
																									l[89] ||
																										(l[89] = s(
																											'span',
																											{ class: 'name' },
																											'info.png',
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
									e(
										t,
										{ type: 'file', expanded: !1, empty: !0 },
										{
											default: a(
												() =>
													l[90] ||
													(l[90] = [
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
			l[122] ||
				(l[122] = s(
					'p',
					null,
					[
						i('你可能已经注意到，'),
						s('code', null, 'sidebar: auto'),
						i(' 时，该如何配置 侧边栏图标，事实上很简单，直接在 文件的 '),
						s('code', null, 'frontmatter'),
						i(' 部分， 添加 一个 '),
						s('code', null, 'icon'),
						i(' 字段即可。'),
					],
					-1
				)),
			e(
				d,
				{ id: '494', data: [{ id: 'typescript/blog/guide/intro.md' }] },
				{
					title0: a(({ value: k, isActive: h }) => [
						e(n, { name: 'vscode-icons:file-type-markdown' }),
						l[91] || (l[91] = s('span', null, 'typescript/blog/guide/intro.md', -1)),
					]),
					tab0: a(
						({ value: k, isActive: h }) =>
							l[92] ||
							(l[92] = [
								s(
									'div',
									{ class: 'language-md', 'data-ext': 'md', 'data-title': 'md' },
									[
										s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										s('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											s('code', null, [
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'---'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'title'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' 介绍'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'icon'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' ep:guide'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'---'
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
			l[123] ||
				(l[123] = s(
					'h2',
					{ id: '笔记首页', tabindex: '-1' },
					[s('a', { class: 'header-anchor', href: '#笔记首页' }, [s('span', null, '笔记首页')])],
					-1
				)),
			l[124] ||
				(l[124] = s(
					'p',
					null,
					[
						i('你可能注意到，在 '),
						s('code', null, 'typescript'),
						i(' 目录下，有一个 '),
						s('code', null, 'README.md'),
						i(' 文件，它会被作为笔记首页显示。'),
					],
					-1
				)),
			s('div', As, [
				s('ul', null, [
					e(
						t,
						{ type: 'folder', expanded: !0, empty: !1 },
						{
							default: a(() => [
								s('span', Ds, [
									e(n, { name: 'vscode-icons:default-folder' }),
									l[93] || (l[93] = s('span', { class: 'name' }, 'typescript', -1)),
								]),
								s('ul', null, [
									e(
										t,
										{ type: 'file', expanded: !1, empty: !0 },
										{
											default: a(() => [
												s('span', vs, [
													e(n, { name: 'flat-color-icons:info' }),
													l[94] || (l[94] = s('span', { class: 'name' }, 'README.md', -1)),
												]),
											]),
											_: 1,
										}
									),
									e(
										t,
										{ type: 'file', expanded: !1, empty: !0 },
										{
											default: a(
												() =>
													l[95] ||
													(l[95] = [
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
					e(
						t,
						{ type: 'file', expanded: !1, empty: !0 },
						{
							default: a(
								() =>
									l[96] ||
									(l[96] = [
										s('span', { class: 'tree-node file' }, [s('span', { class: 'name' }, '…')], -1),
									])
							),
							_: 1,
						}
					),
				]),
			]),
			l[125] ||
				(l[125] = s(
					'p',
					null,
					[
						i('默认情况下，它与 普通的文档页面 没有区别，这是因为 主题 默认对 所有页面 设置了 '),
						s('code', null, 'pageLayout: docs'),
						i('。'),
					],
					-1
				)),
			s('p', null, [
				l[98] || (l[98] = i('但你可以直接配置 ')),
				l[99] || (l[99] = s('code', null, "pageLayout: 'home'", -1)),
				l[100] || (l[100] = i('，就像配置 ')),
				e(
					y,
					{ to: '/notes/theme/blog/guide/%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A6%96%E9%A1%B5.html' },
					{ default: a(() => l[97] || (l[97] = [i('站点首页')])), _: 1 }
				),
				l[101] || (l[101] = i(' 一样，为 笔记配置一个个性化的首页！')),
			]),
			e(
				d,
				{ id: '537', data: [{ id: 'typescript/README.md' }] },
				{
					title0: a(({ value: k, isActive: h }) => [
						e(n, { name: 'vscode-icons:file-type-markdown' }),
						l[102] || (l[102] = s('span', null, 'typescript/README.md', -1)),
					]),
					tab0: a(
						({ value: k, isActive: h }) =>
							l[103] ||
							(l[103] = [
								s(
									'div',
									{ class: 'language-md', 'data-ext': 'md', 'data-title': 'md' },
									[
										s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										s('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											s('code', null, [
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'---'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'pageLayout'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' home'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'config'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  -'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														' type'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' hero'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  -'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														' type'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' features'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'---'
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
const Cs = g(u, [
		['render', fs],
		['__file', 'index.html.vue'],
	]),
	xs = JSON.parse(
		'{"path":"/blog/guide/document/","title":"文档/知识笔记","lang":"zh-CN","frontmatter":{"title":"文档/知识笔记","author":"pengzhanbo","icon":"teenyicons:doc-outline","createTime":"2024/03/04 15:45:34","permalink":"/blog/guide/document/","tags":["指南","快速开始"],"description":"概述 主题提供了 笔记 的功能，它用于聚合 同一个系列的文章、或者作为站点的 子文档 。 笔记 以 文件结构 作为划分依据，默认以 notes/ 作为根目录， 存放在 notes 目录下的 文档不会作为 博客文章，不会出现在 博客文章列表页中。 文件结构与配置 我们有一个项目中，有以下文件结构： 在 docs/notes 目录下，有两个子目录，分别用于...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/document/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"文档/知识笔记"}],["meta",{"property":"og:description","content":"概述 主题提供了 笔记 的功能，它用于聚合 同一个系列的文章、或者作为站点的 子文档 。 笔记 以 文件结构 作为划分依据，默认以 notes/ 作为根目录， 存放在 notes 目录下的 文档不会作为 博客文章，不会出现在 博客文章列表页中。 文件结构与配置 我们有一个项目中，有以下文件结构： 在 docs/notes 目录下，有两个子目录，分别用于..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:tag","content":"指南"}],["meta",{"property":"article:tag","content":"快速开始"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文档/知识笔记\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":7.71,"words":2313},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/知识笔记.md","bulletin":false}'
	)
export { Cs as comp, xs as data }
