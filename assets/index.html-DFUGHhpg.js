import {
	_ as r,
	c as g,
	a as d,
	b as h,
	w as a,
	d as i,
	e as s,
	r as p,
	o as y,
} from './app-B_7CxFr0.js'
const c = {},
	A = { class: 'hint-container tip' }
function u(D, l) {
	const t = p('VPIcon'),
		k = p('CodeTabs')
	return (
		y(),
		g('div', null, [
			l[36] ||
				(l[36] = d(
					'<div class="hint-container important"><p class="hint-container-title">注意</p><p>从 主题的 <code>v1.0.0-rc.120</code> 版本开始，导入文件的功能实现， 从 <a href="https://plugin-md-enhance.vuejs.press" target="_blank" rel="noopener noreferrer"><code>vuepress-plugin-md-enhance</code></a> 迁移到了 <a href="https://ecosystem.vuejs.press/zh/plugins/markdown/markdown-include.html" target="_blank" rel="noopener noreferrer"><code>@vuepress/plugin-markdown-include</code></a> 。</p><p>因此在主题配置中，配置项从 <code>plugins.markdownEnhance.include</code> 改名为 <code>plugins.markdownInclude</code>。 如果你有自定义配置，请注意需要进行迁移。</p></div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>主题支持在 Markdown 文件中导入文件切片。</p><p>导入文件 默认启用，你还可以通过配置来自定义行为。</p>',
					4
				)),
			h(
				k,
				{ id: '17', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: a(({ value: n, isActive: e }) => [
						h(t, { name: 'vscode-icons:file-type-typescript' }),
						l[0] || (l[0] = i('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: a(
						({ value: n, isActive: e }) =>
							l[1] ||
							(l[1] = [
								i(
									'div',
									{ class: 'language-ts', 'data-ext': 'ts', 'data-title': 'ts' },
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
															'  theme'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															'plumeTheme'
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
															'    plugins'
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
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'      markdownInclude'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': {'
														),
													]),
													s(`
`),
													i('span', { class: 'line highlighted' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'        // ... options,'
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
									],
									-1
								),
							])
					),
					_: 1,
				}
			),
			l[37] ||
				(l[37] = d(
					'<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><p>使用 <code>&lt;!-- @include: filename --&gt;</code> 导入文件。</p><p>如果要部分导入文件，你可以指定导入的行数:</p><ul><li><code>&lt;!-- @include: filename{start-end} --&gt;</code></li><li><code>&lt;!-- @include: filename{start-} --&gt;</code></li><li><code>&lt;!-- @include: filename{-end} --&gt;</code></li></ul><p>同时你也可以导入文件区域:</p><ul><li><code>&lt;!-- @include: filename#region --&gt;</code></li></ul>',
					6
				)),
			i('div', A, [
				l[28] || (l[28] = i('p', { class: 'hint-container-title' }, '文件区域', -1)),
				l[29] ||
					(l[29] = i(
						'p',
						null,
						[
							s('文件区域是 vscode 中的一个概念，区域内容被 '),
							i('code', null, '#region'),
							s(' 和 '),
							i('code', null, '#endregion'),
							s(' 注释包围。'),
						],
						-1
					)),
				h(
					k,
					{
						id: '63',
						data: [
							{ id: 'HTML' },
							{ id: 'Markdown' },
							{ id: 'TS' },
							{ id: 'JS' },
							{ id: 'css' },
							{ id: 'Less' },
							{ id: 'Sass' },
							{ id: 'Java' },
							{ id: 'Python' },
							{ id: 'Visual Basic' },
							{ id: 'Bat' },
							{ id: 'C#' },
							{ id: 'C/C++' },
						],
					},
					{
						title0: a(({ value: n, isActive: e }) => [
							h(t, { name: 'vscode-icons:file-type-html' }),
							l[2] || (l[2] = i('span', null, 'HTML', -1)),
						]),
						title1: a(
							({ value: n, isActive: e }) => l[3] || (l[3] = [i('span', null, 'Markdown', -1)])
						),
						title2: a(({ value: n, isActive: e }) => [
							h(t, { name: 'vscode-icons:file-type-typescript-official' }),
							l[4] || (l[4] = i('span', null, 'TS', -1)),
						]),
						title3: a(({ value: n, isActive: e }) => [
							h(t, { name: 'vscode-icons:file-type-js-official' }),
							l[5] || (l[5] = i('span', null, 'JS', -1)),
						]),
						title4: a(({ value: n, isActive: e }) => [
							h(t, { name: 'vscode-icons:file-type-css' }),
							l[6] || (l[6] = i('span', null, 'css', -1)),
						]),
						title5: a(({ value: n, isActive: e }) => [
							h(t, { name: 'vscode-icons:file-type-less' }),
							l[7] || (l[7] = i('span', null, 'Less', -1)),
						]),
						title6: a(({ value: n, isActive: e }) => [
							h(t, { name: 'vscode-icons:file-type-sass' }),
							l[8] || (l[8] = i('span', null, 'Sass', -1)),
						]),
						title7: a(({ value: n, isActive: e }) => [
							h(t, { name: 'vscode-icons:file-type-java' }),
							l[9] || (l[9] = i('span', null, 'Java', -1)),
						]),
						title8: a(({ value: n, isActive: e }) => [
							h(t, { name: 'vscode-icons:file-type-python' }),
							l[10] || (l[10] = i('span', null, 'Python', -1)),
						]),
						title9: a(
							({ value: n, isActive: e }) =>
								l[11] || (l[11] = [i('span', null, 'Visual Basic', -1)])
						),
						title10: a(
							({ value: n, isActive: e }) => l[12] || (l[12] = [i('span', null, 'Bat', -1)])
						),
						title11: a(
							({ value: n, isActive: e }) => l[13] || (l[13] = [i('span', null, 'C#', -1)])
						),
						title12: a(
							({ value: n, isActive: e }) => l[14] || (l[14] = [i('span', null, 'C/C++', -1)])
						),
						tab0: a(
							({ value: n, isActive: e }) =>
								l[15] ||
								(l[15] = [
									i(
										'div',
										{
											class: 'language-html line-numbers-mode',
											'data-ext': 'html',
											'data-title': 'html',
										},
										[
											i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
											i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
												i('code', null, [
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'<!'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'doctype'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															' html'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'>'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'<'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'html'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															' lang'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'='
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
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
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'>'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'  <'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'head'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'>'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'    <'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'meta'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															' charset'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'='
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'UTF-8'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' />'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'    <'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'meta'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															' http-equiv'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'='
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'X-UA-Compatible'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															' content'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'='
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'IE=edge'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' />'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'    <'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'meta'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															' name'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'='
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'viewport'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															' content'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'='
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'width=device-width, initial-scale=1.0'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' />'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'    <'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'title'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'>'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'Document'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'</'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'title'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'>'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'  </'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'head'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'>'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'  <'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'body'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'>'
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
															'    <!-- region snippet -->'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'    <'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'p'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'>'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'      repellendus. Voluptatibus alias cupiditate at, fuga tenetur error officiis'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'      provident quisquam autem, porro facere! Neque quibusdam animi quaerat'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'      eligendi recusandae eaque.'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'    </'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'p'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'>'
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
															'    <!-- endregion snippet -->'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'    <'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'p'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'>'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'      Veniam harum illum natus omnis necessitatibus numquam architecto eum'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'      dignissimos, quos a adipisci et non quam maxime repellendus alias ipsum,'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'      vero praesentium laborum commodi perferendis velit repellat? Vero,'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'      cupiditate sequi.'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'    </'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'p'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'>'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'  </'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'body'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'>'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'</'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'html'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'>'
														),
													]),
												]),
											]),
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
												]
											),
										],
										-1
									),
								])
						),
						tab1: a(
							({ value: n, isActive: e }) =>
								l[16] ||
								(l[16] = [
									i(
										'div',
										{
											class: 'language-md line-numbers-mode',
											'data-ext': 'md',
											'data-title': 'md',
										},
										[
											i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
											i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
												i('code', null, [
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#999999',
																	'--shiki-light-font-weight': 'bold',
																	'--shiki-dark': '#666666',
																	'--shiki-dark-font-weight': 'bold',
																},
															},
															'##'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#1C6B48',
																	'--shiki-light-font-weight': 'bold',
																	'--shiki-dark': '#4D9375',
																	'--shiki-dark-font-weight': 'bold',
																},
															},
															' Hello world'
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
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'<!-- #region snippet -->'
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
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'inventore iure quo aut doloremque, ipsum ab voluptatem ipsa, velit laborum'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'illo quae omnis reiciendis hic, ut dolorem non debitis in!'
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
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'<!-- #endregion snippet -->'
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
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'Veniam harum illum natus omnis necessitatibus numquam architecto eum'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'dignissimos, quos a adipisci et non quam maxime repellendus alias ipsum,'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'vero praesentium laborum commodi perferendis velit repellat? Vero,'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'cupiditate sequi.'
														),
													]),
												]),
											]),
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
												]
											),
										],
										-1
									),
								])
						),
						tab2: a(
							({ value: n, isActive: e }) =>
								l[17] ||
								(l[17] = [
									i(
										'div',
										{
											class: 'language-ts line-numbers-mode',
											'data-ext': 'ts',
											'data-title': 'ts',
										},
										[
											i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
											i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
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
															' include'
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
															'@mdit/plugin-include'
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
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															' MarkdownIt'
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
															'markdown-it'
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
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'// #region snippet'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'const '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															'mdIt'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' ='
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															' MarkdownIt'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'().'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															'use'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'('
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															'include'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
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
															'  // your options, currentPath is required'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															'  currentPath'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															'env'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' => '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															'env'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'.'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															'filePath'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'})'
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
															'// #endregion snippet'
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
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															'mdIt'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'.'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															'render'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'('
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
															'<!-- @include: ./path/to/include/file.md -->'
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
															'  filePath'
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
															'path/to/current/file.md'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'})'
														),
													]),
												]),
											]),
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
						tab3: a(
							({ value: n, isActive: e }) =>
								l[18] ||
								(l[18] = [
									i(
										'div',
										{
											class: 'language-js line-numbers-mode',
											'data-ext': 'js',
											'data-title': 'js',
										},
										[
											i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
											i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
												i('code', null, [
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'const'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' {'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															' include'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' }'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' ='
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															' require'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'('
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
															'@mdit/plugin-include'
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
															')'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'const'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															' MarkdownIt'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' ='
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															' require'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'('
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
															'markdown-it'
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
															')'
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
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'// #region snippet'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'const'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															' mdIt'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' ='
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															' MarkdownIt'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'().'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															'use'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'('
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															'include'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
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
															'  // your options, currentPath is required'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															'  currentPath'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															' env'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' =>'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															' env'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'.'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															'filePath'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'})'
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
															'// #endregion snippet'
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
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															'mdIt'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'.'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															'render'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'('
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
															'<!-- @include: ./path/to/include/file.md -->'
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
															'  filePath'
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
															'path/to/current/file.md'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'})'
														),
													]),
												]),
											]),
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
						tab4: a(
							({ value: n, isActive: e }) =>
								l[19] ||
								(l[19] = [
									i(
										'div',
										{
											class: 'language-css line-numbers-mode',
											'data-ext': 'css',
											'data-title': 'css',
										},
										[
											i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
											i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
												i('code', null, [
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'html'
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
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'body'
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
															'  margin'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
															' 0'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															';'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  padding'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
															' 0'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															';'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'}'
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
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'/* #region snippet */'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'h1'
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
															'  font-size'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
															' 1.5'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'rem'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															';'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'}'
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
															'/* #endregion snippet */'
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
															'h2'
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
															'  font-size'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
															' 1.2'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'rem'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															';'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'}'
														),
													]),
												]),
											]),
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
												]
											),
										],
										-1
									),
								])
						),
						tab5: a(
							({ value: n, isActive: e }) =>
								l[20] ||
								(l[20] = [
									i(
										'div',
										{
											class: 'language-less line-numbers-mode',
											'data-ext': 'less',
											'data-title': 'less',
										},
										[
											i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
											i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
												i('code', null, [
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'html'
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
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'body'
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
															'  margin'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
															' 0'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															';'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  padding'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
															' 0'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															';'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'}'
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
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'/* #region snippet */'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'h1'
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
															'  font-size'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
															' 1.5'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'rem'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															';'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'}'
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
															'/* #endregion snippet */'
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
															'h2'
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
															'  font-size'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
															' 1.2'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'rem'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															';'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'}'
														),
													]),
												]),
											]),
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
												]
											),
										],
										-1
									),
								])
						),
						tab6: a(
							({ value: n, isActive: e }) =>
								l[21] ||
								(l[21] = [
									i(
										'div',
										{
											class: 'language-scss line-numbers-mode',
											'data-ext': 'scss',
											'data-title': 'scss',
										},
										[
											i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
											i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
												i('code', null, [
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'html'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															','
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'body'
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
															'  margin'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
															' 0'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															';'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  padding'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
															' 0'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															';'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'}'
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
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'/* #region snippet */'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'h1'
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
															'  font-size'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
															' 1.5'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'rem'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															';'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'}'
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
															'/* #endregion snippet */'
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
															'h2'
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
															'  font-size'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
															' 1.2'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'rem'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															';'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'}'
														),
													]),
												]),
											]),
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
												]
											),
										],
										-1
									),
								])
						),
						tab7: a(
							({ value: n, isActive: e }) =>
								l[22] ||
								(l[22] = [
									i(
										'div',
										{ class: 'language-java', 'data-ext': 'java', 'data-title': 'java' },
										[
											i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
											i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
												i('code', null, [
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'public'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															' class'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
															' HelloWorld'
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
															'  // #region snippet'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'  public'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															' static'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															' void'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															' main'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'('
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'String '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															'args'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'[]){'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															'    System'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'.'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															'out'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'.'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															'println'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'('
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'Hello World'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															');'
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
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'  // #endregion snippet'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'}'
														),
													]),
												]),
											]),
										],
										-1
									),
								])
						),
						tab8: a(
							({ value: n, isActive: e }) =>
								l[23] ||
								(l[23] = [
									i(
										'div',
										{
											class: 'language-py line-numbers-mode',
											'data-ext': 'py',
											'data-title': 'py',
										},
										[
											i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
											i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
												i('code', null, [
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'class'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
															' MyClass'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'    msg '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'='
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															' "'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'world'
														),
														i(
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
													s(`
`),
													i('span', { class: 'line' }),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'    #region snippet'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'    def'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															' sayHello'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'('
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'self'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'):'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'        print'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'('
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'Hello '
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															' +'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
															' self'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'.'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'msg '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'+'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															' "'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'!'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															')'
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
															'    #region snippet'
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
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'    def'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															' sayBye'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'('
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'self'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'):'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'        print'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'('
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'Bye '
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															' +'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
															' self'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'.'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'msg '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'+'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															' "'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'!'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															')'
														),
													]),
												]),
											]),
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
						tab9: a(
							({ value: n, isActive: e }) =>
								l[24] ||
								(l[24] = [
									i(
										'div',
										{
											class: 'language-vb line-numbers-mode',
											'data-ext': 'vb',
											'data-title': 'vb',
										},
										[
											i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
											i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
												i('code', null, [
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'Imports System'
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
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'Module Module1'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'   # Region snippet'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'   Sub '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															'Main'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'()'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'     Console.'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															'WriteLine'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'('
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'Hello World!'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															')'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'     Console.'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															'WriteLine'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'('
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'Press Enter Key to Exit.'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															')'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'     Console.'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															'ReadLine'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'()'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'   End Sub'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'   # EndRegion'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'End'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															' Module'
														),
													]),
												]),
											]),
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
												]
											),
										],
										-1
									),
								])
						),
						tab10: a(
							({ value: n, isActive: e }) =>
								l[25] ||
								(l[25] = [
									i(
										'div',
										{
											class: 'language-bat line-numbers-mode',
											'data-ext': 'bat',
											'data-title': 'bat',
										},
										[
											i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
											i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
												i('code', null, [
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'>'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'nul'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
															' 2'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'>&'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'1 '
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'%'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'SYSTEMROOT'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'%'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'\\system32\\cacls.exe'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															' "'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'%'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'SYSTEMROOT'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'%'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'\\system32\\config\\system'
														),
														i(
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
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'if'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															" '"
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'%'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															'errorlevel'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'%'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															"' "
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'NEQ'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															" '0' "
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'('
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'echo'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															' Requesting administrative privileges...'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'goto'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															' UACPrompt'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															')'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															' else'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' ('
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															' goto'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															' gotAdmin '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															')'
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
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'::#region snippet'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'UACPrompt'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'echo'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															' Set UAC = CreateObject'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
															'^'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'('
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'Shell.Application'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
															'^'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															') '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'>'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															' "'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'%'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'temp'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'%'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'\\getadmin.vbs'
														),
														i(
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
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'echo'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															' UAC.ShellExecute '
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'%'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'~s0'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															', '
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'""'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															', '
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'""'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															', '
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'runas'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															', '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
															'1'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															' >>'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															' "'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'%'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'temp'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'%'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'\\getadmin.vbs'
														),
														i(
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
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'%'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'temp'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'%'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'\\getadmin.vbs'
														),
														i(
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
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'exit'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															' /B'
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
															'::#endregion snippet'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'gotAdmin'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'if'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															' exist'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															' "'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'%'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'temp'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'%'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'\\getadmin.vbs'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' ('
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															' del'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															' "'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'%'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'temp'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'%'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'\\getadmin.vbs'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' )'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'pushd'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															' "'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'%'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'CD'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'%'
														),
														i(
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
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'CD'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															' /D '
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'%'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'~dp0'
														),
														i(
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
												]),
											]),
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
												]
											),
										],
										-1
									),
								])
						),
						tab11: a(
							({ value: n, isActive: e }) =>
								l[26] ||
								(l[26] = [
									i(
										'div',
										{
											class: 'language-cs line-numbers-mode',
											'data-ext': 'cs',
											'data-title': 'cs',
										},
										[
											i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
											i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
												i('code', null, [
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'using'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
															' System'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															';'
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
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'namespace'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
															' HelloWorldApp'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' {'
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
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'    class'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
															' Geeks'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' {'
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
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'        // #region snippet'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'        static'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															' void'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															' Main'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'('
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'string'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'[]'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															' args'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															')'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' {'
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
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'            // statement'
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
															'            // printing Hello World!'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															'            Console'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'.'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															'WriteLine'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'('
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'Hello World!'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'"'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															');'
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
															{
																style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' },
															},
															'            // To prevents the screen from'
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
															'            // running and closing quickly'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															'            Console'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'.'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															'ReadKey'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'();'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'        }'
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
															'        // #endregion snippet'
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
															'}'
														),
													]),
												]),
											]),
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
												]
											),
										],
										-1
									),
								])
						),
						tab12: a(
							({ value: n, isActive: e }) =>
								l[27] ||
								(l[27] = [
									i(
										'div',
										{
											class: 'language-cpp line-numbers-mode',
											'data-ext': 'cpp',
											'data-title': 'cpp',
										},
										[
											i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
											i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
												i('code', null, [
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'#'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'include'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															' <'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'iostream'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'>'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'#'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'include'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															' <'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
															'vector'
														),
														i(
															'span',
															{
																style: {
																	'--shiki-light': '#B5695977',
																	'--shiki-dark': '#C98A7D77',
																},
															},
															'>'
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
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															'std'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'::'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'vector'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'<int>'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															' v'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															';'
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
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'#'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'pragma'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															' region'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															' snippet'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'int'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															' f'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'()'
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
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'  for'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' ('
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'int'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															' item '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															':'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															' v'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															')'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															' std'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'::'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'cout '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'<<'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															' item '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'<<'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															' std'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'::'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'endl'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															';'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'  return'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															' v'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'.'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															'size'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'();'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'}'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'#'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'pragma'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															' endregion'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															' snippet'
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
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'int'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															' main'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'()'
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
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'  int'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															' n'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															' u'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															';'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															'  std'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'::'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'cin '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'>>'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															' n'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															';'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'  for'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' ('
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'int'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															' i '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'='
														),
														i(
															'span',
															{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
															' 1'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															';'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															' i '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'<='
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															' n'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															';'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															' ++'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'i'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															')'
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
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															'    std'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'::'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'cin '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'>>'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															' u'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															';'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															'    v'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'.'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															'push_back'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'('
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'u'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															');'
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
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															'  std'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'::'
														),
														i(
															'span',
															{
																style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' },
															},
															'cout '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'<<'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															' f'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'();'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'  return'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
															' 0'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															';'
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'}'
														),
													]),
												]),
											]),
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
			l[38] ||
				(l[38] = d(
					`<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><p>你还可以设置一个对象来自定义包含文件路径和包含行为。</p><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> IncludeOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 处理 include 文件路径</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">default</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> (path)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> =&gt; path</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  resolvePath</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">cwd</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">null</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">) =&gt; </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 是否深度导入包含的 Markdown 文件</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">default</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> false</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  deep</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 是否使用 \`&lt;!-- @include: xxx --&gt;\` 代替 \`@include: xxx\` 导入文件</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">default</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> true</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  useComment</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 是否解析包含的 Markdown 文件的里的相对图像路径</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">default</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> true</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  resolveImagePath</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 是否解析包含的 Markdown 文件的里的文件相对路径</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">default</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> true</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  resolveLinkPath</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如: 你可以使用 @src 作为源文件夹的别名。</p>`,
					4
				)),
			h(
				k,
				{ id: '116', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: a(({ value: n, isActive: e }) => [
						h(t, { name: 'vscode-icons:file-type-typescript' }),
						l[30] || (l[30] = i('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: a(
						({ value: n, isActive: e }) =>
							l[31] ||
							(l[31] = [
								i(
									'div',
									{ class: 'language-ts line-numbers-mode', 'data-ext': 'ts', 'data-title': 'ts' },
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
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
														'  theme'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'plumeTheme'
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
														'    plugins'
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
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      markdownInclude'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': {'
													),
												]),
												s(`
`),
												i('span', { class: 'line highlighted' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'        resolvePath'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'file'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														') => {'
													),
												]),
												s(`
`),
												i('span', { class: 'line highlighted' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'          if'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'file'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'startsWith'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'@src'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'))'
													),
												]),
												s(`
`),
												i('span', { class: 'line highlighted' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'            return'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' file'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'replace'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'@src'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'path'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'resolve'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'__dirname'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														', '
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'..'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'))'
													),
												]),
												s(`
`),
												i('span', { class: 'line highlighted' }),
												s(`
`),
												i('span', { class: 'line highlighted' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'          return'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' file'
													),
												]),
												s(`
`),
												i('span', { class: 'line highlighted' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'        },'
													),
												]),
												s(`
`),
												i('span', { class: 'line highlighted' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'      },'
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
										]),
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
			l[39] ||
				(l[39] = i(
					'p',
					null,
					[
						s(
							'此外，如果你想将 Markdown 文件直接放在实际文件旁边，但不希望它们呈现为页面， 你可以在 VuePress 配置中设置 '
						),
						i('code', null, 'pagePatterns'),
						s(' 选项。 有关详细信息，请参阅 '),
						i(
							'a',
							{
								href: 'https://vuejs.press/zh/reference/config.html#pagepatterns',
								target: '_blank',
								rel: 'noopener noreferrer',
							},
							'pagePatterns'
						),
						s('。'),
					],
					-1
				)),
			h(
				k,
				{ id: '124', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: a(({ value: n, isActive: e }) => [
						h(t, { name: 'vscode-icons:file-type-typescript' }),
						l[32] || (l[32] = i('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: a(
						({ value: n, isActive: e }) =>
							l[33] ||
							(l[33] = [
								i(
									'div',
									{ class: 'language-ts', 'data-ext': 'ts', 'data-title': 'ts' },
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
															'  // 现在任何带有 `.snippet.md` 扩展名的文件都不会呈现为页面'
														),
													]),
													s(`
`),
													i('span', { class: 'line diff add' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  pagePatterns'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': ['
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
															'**/*.md'
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
															'!**/*.snippet.md'
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
															'!.vuepress'
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
															'!node_modules'
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
															'], '
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
															': '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															'plumeTheme'
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
															'    plugins'
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
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'      markdownInclude'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'true'
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
									],
									-1
								),
							])
					),
					_: 1,
				}
			),
			l[40] ||
				(l[40] = i(
					'h2',
					{ id: '示例', tabindex: '-1' },
					[i('a', { class: 'header-anchor', href: '#示例' }, [i('span', null, '示例')])],
					-1
				)),
			l[41] ||
				(l[41] = i(
					'p',
					null,
					[s('在项目中有一个 '), i('code', null, 'foo.snippet.md'), s(' 文件：')],
					-1
				)),
			h(
				k,
				{ id: '135', data: [{ id: 'foo.snippet.md' }] },
				{
					title0: a(({ value: n, isActive: e }) => [
						h(t, { name: 'vscode-icons:file-type-markdown' }),
						l[34] || (l[34] = i('span', null, 'foo.snippet.md', -1)),
					]),
					tab0: a(
						({ value: n, isActive: e }) =>
							l[35] ||
							(l[35] = [
								i(
									'div',
									{ class: 'language-md line-numbers-mode', 'data-ext': 'md', 'data-title': 'md' },
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
												i('span', { class: 'line' }, [
													i(
														'span',
														{
															style: {
																'--shiki-light': '#999999',
																'--shiki-light-font-weight': 'bold',
																'--shiki-dark': '#666666',
																'--shiki-dark-font-weight': 'bold',
															},
														},
														'###'
													),
													i(
														'span',
														{
															style: {
																'--shiki-light': '#1C6B48',
																'--shiki-light-font-weight': 'bold',
																'--shiki-dark': '#4D9375',
																'--shiki-dark-font-weight': 'bold',
															},
														},
														' 三级标题'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'这是 foo.snippet.md 文件中的内容。'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'::: info'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'提示容器包括的内容'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														':::'
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
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'<!-- region snippet -->'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'这里是被 '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'`'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'<!-- region snippet -->'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'`'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' 包裹的内容。'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'通过 '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'`'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'<!-- @include: ./foo.snippet.md#snippet -->'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'`'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' 来引入。'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'<!-- endregion snippet -->'
													),
												]),
											]),
										]),
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
			l[42] ||
				(l[42] = d(
					'<p>使用 <code>&lt;!-- @include: ./foo.snippet.md --&gt;</code> 导入文件：</p><div class="demo-wrapper has-title"><div class="demo-head"><div class="demo-ctrl"><i></i><i></i><i></i></div><h4 class="demo-title"><p>Include by file</p></h4></div><div class="demo-container"><h3 id="三级标题" tabindex="-1"><a class="header-anchor" href="#三级标题"><span>三级标题</span></a></h3><p>这是 foo.snippet.md 文件中的内容。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>提示容器包括的内容</p></div><p>这里是被 <code>&lt;!-- region snippet --&gt;</code> 包裹的内容。</p><p>通过 <code>&lt;!-- @include: ./foo.snippet.md#snippet --&gt;</code> 来引入。</p></div></div><p>使用 <code>&lt;!-- @include: ./foo.snippet.md{5-7} --&gt;</code> 导入文件内的 5 到 7 行：</p><div class="demo-wrapper has-title"><div class="demo-head"><div class="demo-ctrl"><i></i><i></i><i></i></div><h4 class="demo-title"><p>Include by lines</p></h4></div><div class="demo-container"><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>提示容器包括的内容</p></div></div></div><p>使用 <code>&lt;!-- @include: ./foo.snippet.md#snippet --&gt;</code> 导入 <code>snippet</code> 区域</p><div class="demo-wrapper has-title"><div class="demo-head"><div class="demo-ctrl"><i></i><i></i><i></i></div><h4 class="demo-title"><p>Include by file region</p></h4></div><div class="demo-container"><p>这里是被 <code>&lt;!-- region snippet --&gt;</code> 包裹的内容。</p><p>通过 <code>&lt;!-- @include: ./foo.snippet.md#snippet --&gt;</code> 来引入。</p></div></div>',
					6
				)),
		])
	)
}
const m = r(c, [
		['render', u],
		['__file', 'index.html.vue'],
	]),
	v = JSON.parse(
		'{"path":"/blog/guide/markdown/include/","title":"导入文件","lang":"zh-CN","frontmatter":{"title":"导入文件","createTime":"2024/09/30 14:53:04","icon":"fluent:table-simple-include-16-regular","permalink":"/blog/guide/markdown/include/","outline":2,"description":"注意 从 主题的 v1.0.0-rc.120 版本开始，导入文件的功能实现， 从 vuepress-plugin-md-enhance 迁移到了 @vuepress/plugin-markdown-include 。 因此在主题配置中，配置项从 plugins.markdownEnhance.include 改名为 plugins.markdownIn...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/markdown/include/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"导入文件"}],["meta",{"property":"og:description","content":"注意 从 主题的 v1.0.0-rc.120 版本开始，导入文件的功能实现， 从 vuepress-plugin-md-enhance 迁移到了 @vuepress/plugin-markdown-include 。 因此在主题配置中，配置项从 plugins.markdownEnhance.include 改名为 plugins.markdownIn..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"导入文件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":2.17,"words":650},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/markdown/导入文件.md","bulletin":false}'
	)
export { m as comp, v as data }
