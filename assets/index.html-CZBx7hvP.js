import {
	_ as o,
	c as y,
	a as d,
	d as i,
	b as a,
	w as e,
	e as s,
	r,
	o as c,
} from './app-B_7CxFr0.js'
const A = {},
	m = { class: 'vp-file-tree' },
	D = { class: 'tree-node folder' },
	B = { class: 'tree-node folder' },
	u = { class: 'tree-node file' },
	C = { class: 'tree-node file' },
	f = { class: 'tree-node folder' },
	v = { class: 'tree-node file' },
	b = { class: 'tree-node file' },
	E = { class: 'tree-node file' },
	x = { class: 'tree-node file' }
function F(N, l) {
	const t = r('VPIcon'),
		h = r('FileTreeItem'),
		p = r('CodeTabs'),
		g = r('RouteLink')
	return (
		c(),
		y('div', null, [
			l[24] ||
				(l[24] = d(
					'<p>在主题内实现 <mark>国际化</mark> 只需要进行一些简单的配置。</p><p>举一个例子，创建一个 默认语言为 <strong>中文</strong>，并包含 <strong>英语</strong> 和 <strong>法语</strong> 的项目。</p><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2><p>首先，需要创建类似于下面的目录结构：</p>',
					4
				)),
			i('div', m, [
				i('ul', null, [
					a(
						h,
						{ type: 'folder', expanded: !0, empty: !1 },
						{
							default: e(() => [
								i('span', D, [
									a(t, { name: 'vscode-icons:folder-type-docs' }),
									l[0] || (l[0] = i('span', { class: 'name' }, 'docs', -1)),
								]),
								i('ul', null, [
									a(
										h,
										{ type: 'folder', expanded: !0, empty: !1 },
										{
											default: e(() => [
												i('span', B, [
													a(t, { name: 'vscode-icons:default-folder' }),
													l[1] ||
														(l[1] = i(
															'span',
															{ class: 'name focus' },
															[i('strong', null, 'en')],
															-1
														)),
													l[2] || (l[2] = i('span', { class: 'comment' }, ' # 英文目录', -1)),
												]),
												i('ul', null, [
													a(
														h,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: e(() => [
																i('span', u, [
																	a(t, { name: 'vscode-icons:file-type-markdown' }),
																	l[3] || (l[3] = i('span', { class: 'name' }, 'foo.md', -1)),
																]),
															]),
															_: 1,
														}
													),
													a(
														h,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: e(() => [
																i('span', C, [
																	a(t, { name: 'flat-color-icons:info' }),
																	l[4] || (l[4] = i('span', { class: 'name' }, 'README.md', -1)),
																	l[5] ||
																		(l[5] = i('span', { class: 'comment' }, ' # 英文首页', -1)),
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
									a(
										h,
										{ type: 'folder', expanded: !0, empty: !1 },
										{
											default: e(() => [
												i('span', f, [
													a(t, { name: 'vscode-icons:default-folder' }),
													l[6] ||
														(l[6] = i(
															'span',
															{ class: 'name focus' },
															[i('strong', null, 'fr')],
															-1
														)),
													l[7] || (l[7] = i('span', { class: 'comment' }, ' # 法文目录', -1)),
												]),
												i('ul', null, [
													a(
														h,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: e(() => [
																i('span', v, [
																	a(t, { name: 'vscode-icons:file-type-markdown' }),
																	l[8] || (l[8] = i('span', { class: 'name' }, 'foo.md', -1)),
																]),
															]),
															_: 1,
														}
													),
													a(
														h,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: e(() => [
																i('span', b, [
																	a(t, { name: 'flat-color-icons:info' }),
																	l[9] || (l[9] = i('span', { class: 'name' }, 'README.md', -1)),
																	l[10] ||
																		(l[10] = i('span', { class: 'comment' }, ' # 法文首页', -1)),
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
									a(
										h,
										{ type: 'file', expanded: !1, empty: !0 },
										{
											default: e(() => [
												i('span', E, [
													a(t, { name: 'vscode-icons:file-type-markdown' }),
													l[11] || (l[11] = i('span', { class: 'name' }, 'foo.md', -1)),
												]),
											]),
											_: 1,
										}
									),
									a(
										h,
										{ type: 'file', expanded: !1, empty: !0 },
										{
											default: e(() => [
												i('span', x, [
													a(t, { name: 'flat-color-icons:info' }),
													l[12] || (l[12] = i('span', { class: 'name' }, 'README.md', -1)),
													l[13] || (l[13] = i('span', { class: 'comment' }, ' # 中文首页', -1)),
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
			l[25] ||
				(l[25] = d(
					'<p>其中，<code>docs/en/</code> 用于保存 <strong>英文</strong> 文档，<code>docs/fr/</code> 保存 <strong>法文</strong> 文档，而 <strong>中文</strong> 则直接保存在 <code>docs/</code> 下。</p><div class="hint-container important"><p class="hint-container-title">不同语言下的目录结构与文件名保持一致</p><p>在不同的语言目录下，请尽量保持文件名和目录名的一致。这有助于在 切换语言时，主题能够正确的导航到 文章 的不同的语言版本。</p></div><h2 id="vuepress-配置" tabindex="-1"><a class="header-anchor" href="#vuepress-配置"><span>vuepress 配置</span></a></h2><h3 id="默认语言" tabindex="-1"><a class="header-anchor" href="#默认语言"><span>默认语言</span></a></h3><p>在 <code>.vuepress/config.ts</code> 中，声明默认的语言：</p>',
					5
				)),
			a(
				p,
				{ id: '84', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: e(({ value: k, isActive: n }) => [
						a(t, { name: 'vscode-icons:file-type-typescript' }),
						l[14] || (l[14] = i('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: e(
						({ value: k, isActive: n }) =>
							l[15] ||
							(l[15] = [
								i(
									'div',
									{ class: 'language-ts line-numbers-mode', 'data-ext': 'ts', 'data-title': 'ts' },
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i(
											'pre',
											{ class: 'shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code' },
											[
												i('code', null, [
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'import'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' {'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															' defineUserConfig'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' }'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															' from'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'vuepress'
														),
														i(
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
													s(`
`),
													i('span', { class: 'line' }),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'export'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															' default'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															' defineUserConfig'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'({'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'  // 声明默认的语言'
														),
													]),
													s(`
`),
													i('span', { class: 'line diff add' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  lang'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': '
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'zh-CN'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															', '
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'  // 多语言下支持的各种语言 locales'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  locales'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': {'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"    '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': { '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'lang'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': '
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'zh-CN'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															', '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'title'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': '
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'博客'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' }, '
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'// 默认语言 为 简体中文'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'  }'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'})'
														),
													]),
												]),
											]
										),
										i(
											'div',
											{
												class: 'line-numbers',
												'aria-hidden': 'true',
												style: { 'counter-reset': 'line-number 0' },
											},
											[
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
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
			l[26] ||
				(l[26] = d(
					'<h3 id="添加其他语言" tabindex="-1"><a class="header-anchor" href="#添加其他语言"><span>添加其他语言</span></a></h3><p>你需要为每个语言设置 <code>lang</code> 选项。即使你只在使用单个语言，你也必须在 <code>.vuepress/config.{js,ts}</code> 中设置 <code>lang</code>。</p><div class="hint-container tip"><p class="hint-container-title">为什么要这样做?</p><p>要提供正确的语言环境文本，主题需要知道根文件夹以及每个多语言文件夹正在使用哪种语言。</p></div><p>在 <code>.vuepress/config.ts</code> 中配置：</p>',
					4
				)),
			a(
				p,
				{ id: '103', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: e(({ value: k, isActive: n }) => [
						a(t, { name: 'vscode-icons:file-type-typescript' }),
						l[16] || (l[16] = i('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: e(
						({ value: k, isActive: n }) =>
							l[17] ||
							(l[17] = [
								i(
									'div',
									{ class: 'language-ts line-numbers-mode', 'data-ext': 'ts', 'data-title': 'ts' },
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i(
											'pre',
											{ class: 'shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code' },
											[
												i('code', null, [
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'import'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' {'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															' defineUserConfig'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' }'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															' from'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'vuepress'
														),
														i(
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
													s(`
`),
													i('span', { class: 'line' }),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'export'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															' default'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															' defineUserConfig'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'({'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'  // 声明默认的语言'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  lang'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': '
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'zh-CN'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'  // 多语言下支持的各种语言 locales'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  locales'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': {'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'    // 配置 不同 path 下的语言'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"    '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': { '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'lang'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': '
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'zh-CN'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															', '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'title'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': '
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'博客'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' }, '
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'// 默认语言 为 简体中文'
														),
													]),
													s(`
`),
													i('span', { class: 'line diff add' }, [
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"    '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/en/'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': { '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'lang'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': '
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'en-US'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															', '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'title'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': '
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'Blog'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' }, '
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'// 英文'
														),
													]),
													s(`
`),
													i('span', { class: 'line diff add' }, [
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"    '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/fr/'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': { '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'lang'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': '
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'fr-FR'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															', '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'title'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': '
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'Le blog'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' }, '
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'// 法语'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'  }'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'})'
														),
													]),
												]),
											]
										),
										i(
											'div',
											{
												class: 'line-numbers',
												'aria-hidden': 'true',
												style: { 'counter-reset': 'line-number 0' },
											},
											[
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
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
			l[27] ||
				(l[27] = d(
					'<p><strong><code>locales</code> 配置中的 <code>key</code> 作为 <code>localPath</code>, 对应着 <code>docs</code> 目录下的语言路径，应该保证它们具有相同的命名。</strong></p><p><strong>同时，<code>key</code> (<code>localPath</code>) 也将作为 不同语言的页面访问链接的前缀。</strong></p><div class="hint-container important"><p class="hint-container-title">语言代码</p><p><code>locales</code> 配置中的 <code>key</code> 即 <code>localePath</code> 需要符合 <a href="https://zh.wikipedia.org/wiki/ISO_639-1" target="_blank" rel="noopener noreferrer">ISO 639</a> 规范， 对于非默认语言的，如 <code>英语</code> 应该为 <code>/en/</code>。</p><p>在 <code>locales[localePath]</code> 中， <code>lang</code> 为当前语言的 <strong>语言代码</strong>，请使用标准的 <a href="https://www.ietf.org/rfc/bcp/bcp47.txt" target="_blank" rel="noopener noreferrer">BCP47</a> 语言代码。如， <code>英语</code> 应该为 <code>en-US</code>，（表示英语（美国））。</p></div><h2 id="主题配置" tabindex="-1"><a class="header-anchor" href="#主题配置"><span>主题配置</span></a></h2><p>在主题配置中，同样使用 <code>locales</code> 配置项进行多语言配置。</p><p><code>locales</code> 支持 所有主题配置项。</p>',
					6
				)),
			a(
				p,
				{ id: '131', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: e(({ value: k, isActive: n }) => [
						a(t, { name: 'vscode-icons:file-type-typescript' }),
						l[18] || (l[18] = i('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: e(
						({ value: k, isActive: n }) =>
							l[19] ||
							(l[19] = [
								i(
									'div',
									{ class: 'language-js line-numbers-mode', 'data-ext': 'js', 'data-title': 'js' },
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i(
											'pre',
											{
												class:
													'shiki shiki-themes vitesse-light vitesse-dark has-highlighted vp-code',
											},
											[
												i('code', null, [
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'import'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' {'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															' plumeTheme'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' }'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															' from'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'@vuepress-plume/vuepress-theme-plume'
														),
														i(
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
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'import'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' {'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															' defineUserConfig'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' }'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															' from'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'vuepress'
														),
														i(
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
													s(`
`),
													i('span', { class: 'line' }),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'export'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															' default'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															' defineUserConfig'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'({'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  lang'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'zh-CN'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  locales'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' {'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"    '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' {'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															' lang'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'zh-CN'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															' title'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'博客'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' },'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															' // 默认语言 为 简体中文'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"    '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/en/'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' {'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															' lang'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'en-US'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															' title'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'Blog'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' },'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															' // 英文'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"    '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/fr/'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' {'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															' lang'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'fr-FR'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															' title'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'Le blog'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' },'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															' // 法语'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'  },'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  theme'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															' plumeTheme'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'({'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'    // 主题内的多语言配置'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'    locales'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' {'
														),
													]),
													s(`
`),
													i('span', { class: 'line highlighted' }, [
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"      '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' {'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'        // 当前语言显示在导航栏多语言下拉菜单的文本'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'        selectLanguageName'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'简体中文'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'        navbar'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' ['
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'          {'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															' text'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'首页'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															' link'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' },'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'          {'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															' text'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'博客'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															' link'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/blog/'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' },'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'        ]'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'      },'
														),
													]),
													s(`
`),
													i('span', { class: 'line highlighted' }, [
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"      '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/en/'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' {'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'        selectLanguageName'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'English'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'        navbar'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' ['
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'          {'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															' text'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'Home'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															' link'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/en/'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' },'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'          {'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															' text'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'Blog'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															' link'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/en/blog/'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' },'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'        ]'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'      },'
														),
													]),
													s(`
`),
													i('span', { class: 'line highlighted' }, [
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"      '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/fr/'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' {'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'        selectLanguageName'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'Français'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'        navbar'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' ['
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'          {'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															' text'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'Accueil'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															' link'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/fr/'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' },'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'          {'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															' text'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'Le Blog'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															' link'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'/fr/blog/'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															"'"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' },'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'        ]'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'      }'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'    }'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'  })'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'})'
														),
													]),
												]),
											]
										),
										i(
											'div',
											{
												class: 'line-numbers',
												'aria-hidden': 'true',
												style: { 'counter-reset': 'line-number 0' },
											},
											[
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
												i('div', { class: 'line-number' }),
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
			l[28] ||
				(l[28] = d(
					'<p>主题 <code>theme.locales</code> 配置中的 <code>key</code> 应与 <code>vuepress</code> 配置中的 <code>locales</code> 配置中的 <code>key</code> 一致。</p><p>您应该为 <code>theme.locales[localePath]</code> 配置 <code>selectLanguageName</code> 用于在导航栏多语言下拉菜单中显示当前语言的名称。</p><p>更多 <code>locales</code> 配置请查看</p>',
					3
				)),
			i('ul', null, [
				i('li', null, [
					a(
						g,
						{
							to: '/notes/theme/config/%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE.html#locale-%E9%85%8D%E7%BD%AE',
						},
						{ default: e(() => l[20] || (l[20] = [s('主题配置 > Locales 配置')])), _: 1 }
					),
					l[21] || (l[21] = s(' - 配置主题在不同语言下的行为。')),
				]),
				i('li', null, [
					a(
						g,
						{ to: '/notes/theme/config/%E5%A4%9A%E8%AF%AD%E8%A8%80%E9%85%8D%E7%BD%AE.html' },
						{ default: e(() => l[22] || (l[22] = [s('主题配置 > 多语言配置')])), _: 1 }
					),
					l[23] || (l[23] = s(' - 配置与语言相关的文本。')),
				]),
			]),
		])
	)
}
const T = o(A, [
		['render', F],
		['__file', 'index.html.vue'],
	]),
	w = JSON.parse(
		'{"path":"/blog/guide/international/","title":"国际化","lang":"zh-CN","frontmatter":{"title":"国际化","author":"pengzhanbo","icon":"material-symbols-light:language","createTime":"2024/03/05 10:01:26","permalink":"/blog/guide/international/","tags":["指南","i18n"],"description":"在主题内实现 国际化 只需要进行一些简单的配置。 举一个例子，创建一个 默认语言为 中文，并包含 英语 和 法语 的项目。 目录 首先，需要创建类似于下面的目录结构： 其中，docs/en/ 用于保存 英文 文档，docs/fr/ 保存 法文 文档，而 中文 则直接保存在 docs/ 下。 不同语言下的目录结构与文件名保持一致 在不同的语言目录下，请尽...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/international/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"国际化"}],["meta",{"property":"og:description","content":"在主题内实现 国际化 只需要进行一些简单的配置。 举一个例子，创建一个 默认语言为 中文，并包含 英语 和 法语 的项目。 目录 首先，需要创建类似于下面的目录结构： 其中，docs/en/ 用于保存 英文 文档，docs/fr/ 保存 法文 文档，而 中文 则直接保存在 docs/ 下。 不同语言下的目录结构与文件名保持一致 在不同的语言目录下，请尽..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:tag","content":"指南"}],["meta",{"property":"article:tag","content":"i18n"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"国际化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":3.03,"words":910},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/国际化.md","bulletin":false}'
	)
export { T as comp, w as data }
