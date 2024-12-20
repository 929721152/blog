import {
	_ as m,
	c as u,
	d as s,
	e as t,
	b as n,
	w as e,
	a as k,
	r as d,
	o as g,
} from './app-B_7CxFr0.js'
const y = {},
	f = { class: 'hint-container details' },
	A = { class: 'hint-container info' },
	B = { class: 'vp-file-tree' },
	D = { class: 'tree-node folder' },
	E = { class: 'tree-node folder' },
	v = { class: 'tree-node folder' },
	b = { class: 'tree-node folder' },
	x = { class: 'tree-node folder' },
	C = { class: 'tree-node folder' },
	F = { class: 'tree-node folder' }
function w(M, i) {
	const l = d('RouteLink'),
		a = d('VPIcon'),
		h = d('CodeTabs'),
		r = d('FileTreeItem')
	return (
		g(),
		u('div', null, [
			s('p', null, [
				i[1] || (i[1] = t('VuePress 支持完整的 ')),
				n(
					l,
					{ to: '/notes/theme/blog/guide/markdown/%E5%9F%BA%E7%A1%80.html' },
					{ default: e(() => i[0] || (i[0] = [t('Markdown 语法')])), _: 1 }
				),
				i[2] || (i[2] = t(', 以及使用 ')),
				i[3] ||
					(i[3] = s(
						'a',
						{
							href: 'https://dev.to/paulasantamaria/introduction-to-yaml-125f',
							target: '_blank',
							rel: 'noopener noreferrer',
						},
						'YAML',
						-1
					)),
				i[4] || (i[4] = t(' 定义 frontmatter 页面元数据，例如 标题和创建时间。')),
			]),
			s('p', null, [
				i[6] || (i[6] = t('主题还对 Markdown 语法进行了 ')),
				n(
					l,
					{ to: '/notes/theme/blog/guide/markdown/%E6%89%A9%E5%B1%95.html' },
					{ default: e(() => i[5] || (i[5] = [t('扩展')])), _: 1 }
				),
				i[7] || (i[7] = t(' 支持。你还可以直接在 Markdown 中写 HTML ，或者使用 Vue 组件。')),
			]),
			i[73] ||
				(i[73] = s(
					'h2',
					{ id: 'frontmatter', tabindex: '-1' },
					[
						s('a', { class: 'header-anchor', href: '#frontmatter' }, [
							s('span', null, 'Frontmatter'),
						]),
					],
					-1
				)),
			i[74] ||
				(i[74] = s(
					'p',
					null,
					[
						t(
							'你可以通过设置 frontmatter 中的值来自定义 VuePress 里每个页面。 Frontmatter 是你的文件顶部在 '
						),
						s('code', null, '---'),
						t(' 中间的部分。'),
					],
					-1
				)),
			n(
				h,
				{ id: '12', data: [{ id: 'post.md' }] },
				{
					title0: e(({ value: o, isActive: p }) => [
						n(a, { name: 'vscode-icons:file-type-markdown' }),
						i[8] || (i[8] = s('span', null, 'post.md', -1)),
					]),
					tab0: e(
						({ value: o, isActive: p }) =>
							i[9] ||
							(i[9] = [
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
												t(`
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
														' 文章标题'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'createTime'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' 2024/09/08 22:53:34'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'permalink'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' /article/9eh4d6ao/'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'---'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'页面内容在第二个 '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'`'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'---'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'`'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' 后面。'
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
			s('details', f, [
				i[13] || (i[13] = s('summary', null, '什么是 frontmatter？', -1)),
				i[14] ||
					(i[14] = s(
						'p',
						null,
						[
							t('frontmatter 是一个 '),
							s(
								'a',
								{
									href: 'https://dev.to/paulasantamaria/introduction-to-yaml-125f',
									target: '_blank',
									rel: 'noopener noreferrer',
								},
								'YAML'
							),
							t(' 格式的配置内容，被放置于 markdown 文件的顶部，通过 '),
							s('code', null, '---'),
							t(' 来分隔。'),
						],
						-1
					)),
				s('p', null, [
					i[11] || (i[11] = t('您可以阅读 ')),
					n(
						l,
						{ to: '/4.%E6%95%99%E7%A8%8B/frontmatter.html' },
						{ default: e(() => i[10] || (i[10] = [t('这篇文章')])), _: 1 }
					),
					i[12] || (i[12] = t(' 了解如何正确书写 frontmatter。')),
				]),
			]),
			i[75] ||
				(i[75] = k(
					`<h2 id="自动生成-frontmatter" tabindex="-1"><a class="header-anchor" href="#自动生成-frontmatter"><span>自动生成 Frontmatter</span></a></h2><p>默认配置下，主题在启动开发服务后，会帮助为源目录中的 markdown 文件，生成一些 <code>frontmatter</code> 配置。 这些配置包括： <strong>标题</strong>, <strong>创建时间</strong> 以及 <strong>永久链接</strong>。</p><p>一方面，这可以减少 内容创作者 的一些重复工作；另一方面，这些配置也为主题后续的其他功能提供了前置支持。</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 标题</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">createTime</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 2024/09/08 22:53:34</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">permalink</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /article/9eh4d6ao/</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span></code></pre></div><h3 id="标题" tabindex="-1"><a class="header-anchor" href="#标题"><span>标题</span></a></h3><p>主题默认 使用文件名作为文章标题。在解析 文件名 时，<a href="#%E6%96%87%E4%BB%B6%E5%A4%B9%E5%91%BD%E5%90%8D%E7%BA%A6%E5%AE%9A">文件命名约定</a> 所命名的文件名如 <code>1.我的文章.md</code>，其中 <code>1.</code> 和 <code>.md</code> 部分将被裁剪，最终文章标题为 <code>我的文章</code> 。</p><h3 id="创建时间" tabindex="-1"><a class="header-anchor" href="#创建时间"><span>创建时间</span></a></h3><p>主题默认使用文件创建时间作为文章创建时间，并将其格式化为 <code>yyyy/MM/dd HH:mm:ss</code>。</p><h3 id="永久链接" tabindex="-1"><a class="header-anchor" href="#永久链接"><span>永久链接</span></a></h3><p><strong>永久链接</strong> 指的是，文章发布后的 访问地址，这个地址一旦生成，只要您不手动修改它，即使文件路径、文件名发生改变也不会改变。</p><p>提前准备好 <strong>永久链接</strong> 是比较有价值的，一方面，它可以帮助改善 站点的 SEO，避免收录的地址频繁变动； 另一方面，主题使用一套规范 生成 <strong>永久链接</strong> ，它使得整个站点的 链接 风格一致。</p>`,
					11
				)),
			s('ul', null, [
				s('li', null, [
					i[20] || (i[20] = s('p', null, [s('strong', null, '博客文章')], -1)),
					i[21] ||
						(i[21] = s(
							'p',
							null,
							[
								t('对于 博客文章，默认使用 '),
								s('code', null, '/article/'),
								t(' 作为永久链接的前缀，然后使用 '),
								s(
									'a',
									{
										href: 'https://github.com/ai/nanoid',
										target: '_blank',
										rel: 'noopener noreferrer',
									},
									[s('code', null, 'nanoid')]
								),
								t(' 生成长度为 '),
								s('code', null, '8'),
								t(' 的随机字符串进行拼接，作为文章的永久链接， 如 '),
								s('code', null, '/article/9eh4d6ao/'),
								t('。'),
							],
							-1
						)),
					s('p', null, [
						i[16] || (i[16] = t('对于链接前缀，还可以通过修改 ')),
						n(
							l,
							{ to: '/notes/theme/config/%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE.html#article' },
							{ default: e(() => i[15] || (i[15] = [t('主题配置 > article')])), _: 1 }
						),
						i[17] || (i[17] = t(' 替换默认的 ')),
						i[18] || (i[18] = s('code', null, '/article/', -1)),
						i[19] || (i[19] = t('。')),
					]),
				]),
				s('li', null, [
					i[29] || (i[29] = s('p', null, [s('strong', null, 'notes')], -1)),
					s('p', null, [
						i[23] || (i[23] = t('对于 notes , 主题使用更为灵活的自定义方案，你可以在 ')),
						n(
							l,
							{ to: '/notes/theme/config/notes%E9%85%8D%E7%BD%AE.html#%E9%85%8D%E7%BD%AE' },
							{ default: e(() => i[22] || (i[22] = [t('notes > note.link')])), _: 1 }
						),
						i[24] || (i[24] = t(' 声明不同的 note 的链接前缀，然后同样适用 ')),
						i[25] ||
							(i[25] = s(
								'a',
								{
									href: 'https://github.com/ai/nanoid',
									target: '_blank',
									rel: 'noopener noreferrer',
								},
								[s('code', null, 'nanoid')],
								-1
							)),
						i[26] || (i[26] = t(' 生成长度为 ')),
						i[27] || (i[27] = s('code', null, '8', -1)),
						i[28] || (i[28] = t(' 的随机字符串进行拼接，作为 ntoe 文章的永久链接。')),
					]),
				]),
			]),
			i[76] ||
				(i[76] = s(
					'h3',
					{ id: '禁用自动生成', tabindex: '-1' },
					[
						s('a', { class: 'header-anchor', href: '#禁用自动生成' }, [
							s('span', null, '禁用自动生成'),
						]),
					],
					-1
				)),
			s('p', null, [
				i[31] ||
					(i[31] = t(
						'你可能不想主题做额外的自动生成，希望由自己完全掌控。这完全没问题，主题支持通过配置来控制 自动生成 frontmatter 的行为。 通过 '
					)),
				n(
					l,
					{ to: '/notes/theme/config/%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE.html#autofrontmatter' },
					{ default: e(() => i[30] || (i[30] = [t('主题配置 > autoFrontmatter')])), _: 1 }
				),
				i[32] || (i[32] = t(' 即可轻松做到。')),
			]),
			n(
				h,
				{ id: '83', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: e(({ value: o, isActive: p }) => [
						n(a, { name: 'vscode-icons:file-type-typescript' }),
						i[33] || (i[33] = s('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: e(
						({ value: o, isActive: p }) =>
							i[34] ||
							(i[34] = [
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
														'    // 完全禁用所有自动生成'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'    // autoFrontmatter: false,'
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
														'    // 控制部分自动生成'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'    autoFrontmatter'
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
														'      permalink'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'true'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														', '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'// 是否生成永久链接'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      createTime'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'true'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														', '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'// 是否生成创建时间'
													),
												]),
												t(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      title'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'true'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														', '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'// 是否生成标题'
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
			i[77] ||
				(i[77] = s(
					'h2',
					{ id: '约定', tabindex: '-1' },
					[s('a', { class: 'header-anchor', href: '#约定' }, [s('span', null, '约定')])],
					-1
				)),
			s('div', A, [
				i[38] || (i[38] = s('p', { class: 'hint-container-title' }, '提示', -1)),
				s('p', null, [
					i[36] || (i[36] = t('以下内容，以 ')),
					n(
						l,
						{ to: '/notes/theme/blog/guide/%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84.html' },
						{ default: e(() => i[35] || (i[35] = [t('项目结构')])), _: 1 }
					),
					i[37] || (i[37] = t(' 中的文件结构作为基准。')),
				]),
			]),
			i[78] ||
				(i[78] = s(
					'p',
					null,
					[
						t('使用本主题编写文章是一件很轻松的事情，你可以在 '),
						s('code', null, 'docs'),
						t('目录中按照你的个人命名喜好新建任意名字的'),
						s('code', null, 'Markdown'),
						t('文件。'),
					],
					-1
				)),
			i[79] ||
				(i[79] = s(
					'h3',
					{ id: '文件夹命名约定', tabindex: '-1' },
					[
						s('a', { class: 'header-anchor', href: '#文件夹命名约定' }, [
							s('span', null, '文件夹命名约定'),
						]),
					],
					-1
				)),
			i[80] ||
				(i[80] = s(
					'p',
					null,
					[t('对于 '), s('code', null, 'docs'), t(' 中的文件夹命名，主题有一套简单的约定。')],
					-1
				)),
			s('ul', null, [
				i[42] ||
					(i[42] = s(
						'li',
						null,
						[
							t('文件夹的名称将作为 '),
							s('code', null, 'category'),
							t(' 即 '),
							s('strong', null, '分类'),
							t('。'),
						],
						-1
					)),
				i[43] ||
					(i[43] = s('li', null, '允许多级目录，子级目录将作为父目录对应的分类的子项。', -1)),
				s('li', null, [
					i[40] || (i[40] = t('如果目录名称 在 ')),
					n(
						l,
						{ to: '/notes/theme/config/notes%E9%85%8D%E7%BD%AE.html' },
						{ default: e(() => i[39] || (i[39] = [t('主题配置 notes')])), _: 1 }
					),
					i[41] || (i[41] = t(' 中声明用于 notes 文章管理，则默认不作为 分类目录。')),
				]),
			]),
			i[81] ||
				(i[81] = k(
					`<p>由于文件夹名称将作为分类名称，且不在主题配置中进行排序配置，对于有排序需要的场景，使用以下规则进行命名：</p><div class="language-ts" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">dir</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> /</span><span style="--shiki-light:#5A6AA6;--shiki-dark:#6872AB;">\\d</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">+</span><span style="--shiki-light:#BDA437;--shiki-dark:#E6CC77;">\\.</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#5A6AA6;--shiki-dark:#6872AB;">\\s\\S</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">+</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">/</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 即 数字 + . + 分类名称</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 如： 1.前端</span></span></code></pre></div><p>数字将作为 <strong>排序</strong> 的依据。 如果不带数字，则以默认的规则进行排序。</p><p><strong>example:</strong></p>`,
					4
				)),
			s('div', B, [
				s('ul', null, [
					n(
						r,
						{ type: 'folder', expanded: !0, empty: !1 },
						{
							default: e(() => [
								s('span', D, [
									n(a, { name: 'vscode-icons:folder-type-docs' }),
									i[44] || (i[44] = s('span', { class: 'name' }, 'docs', -1)),
								]),
								s('ul', null, [
									n(
										r,
										{ type: 'folder', expanded: !0, empty: !1 },
										{
											default: e(() => [
												s('span', E, [
													n(a, { name: 'vscode-icons:default-folder' }),
													i[45] || (i[45] = s('span', { class: 'name' }, '1.前端', -1)),
												]),
												s('ul', null, [
													n(
														r,
														{ type: 'folder', expanded: !1, empty: !0 },
														{
															default: e(() => [
																s('span', v, [
																	n(a, { name: 'vscode-icons:default-folder' }),
																	i[46] || (i[46] = s('span', { class: 'name' }, '1.html', -1)),
																]),
															]),
															_: 1,
														}
													),
													n(
														r,
														{ type: 'folder', expanded: !1, empty: !0 },
														{
															default: e(() => [
																s('span', b, [
																	n(a, { name: 'vscode-icons:default-folder' }),
																	i[47] || (i[47] = s('span', { class: 'name' }, '2.css', -1)),
																]),
															]),
															_: 1,
														}
													),
													n(
														r,
														{ type: 'folder', expanded: !1, empty: !0 },
														{
															default: e(() => [
																s('span', x, [
																	n(a, { name: 'vscode-icons:default-folder' }),
																	i[48] ||
																		(i[48] = s('span', { class: 'name' }, '3.javascript', -1)),
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
									n(
										r,
										{ type: 'folder', expanded: !1, empty: !0 },
										{
											default: e(() => [
												s('span', C, [
													n(a, { name: 'vscode-icons:default-folder' }),
													i[49] || (i[49] = s('span', { class: 'name' }, '2.后端', -1)),
												]),
											]),
											_: 1,
										}
									),
									n(
										r,
										{ type: 'folder', expanded: !1, empty: !0 },
										{
											default: e(() => [
												s('span', F, [
													n(a, { name: 'vscode-icons:default-folder' }),
													i[50] || (i[50] = s('span', { class: 'name' }, '运维', -1)),
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
			i[82] || (i[82] = s('p', null, '主题将根据 目录结构，生成一个 分类页。', -1)),
			i[83] ||
				(i[83] = s(
					'h3',
					{ id: '文件命名约定', tabindex: '-1' },
					[
						s('a', { class: 'header-anchor', href: '#文件命名约定' }, [
							s('span', null, '文件命名约定'),
						]),
					],
					-1
				)),
			s('ul', null, [
				s('li', null, [
					i[56] || (i[56] = s('p', null, [s('strong', null, '博客文章')], -1)),
					s('p', null, [
						i[52] || (i[52] = t('对于 ')),
						i[53] || (i[53] = s('strong', null, '博客文章', -1)),
						i[54] ||
							(i[54] = t(
								' 的名称，主题没有任何约定，你可以任意命名。博客文章默认排序规则仅根据文件创建时间进行排序。 你还可以通过 '
							)),
						n(
							l,
							{ to: '/notes/theme/config/frontmatter/post.html#sticky' },
							{ default: e(() => i[51] || (i[51] = [t('frontmatter > sticky')])), _: 1 }
						),
						i[55] || (i[55] = t(' 配置文章是否置顶。')),
					]),
				]),
				s('li', null, [
					i[64] || (i[64] = s('p', null, [s('strong', null, 'notes')], -1)),
					s('p', null, [
						i[58] || (i[58] = t('对于 ')),
						i[59] || (i[59] = s('strong', null, 'notes', -1)),
						i[60] || (i[60] = t(' 中的 markdown 文件名称，依然遵循 与 ')),
						i[61] ||
							(i[61] = s(
								'a',
								{ href: '#%E6%96%87%E4%BB%B6%E5%A4%B9%E5%91%BD%E5%90%8D%E7%BA%A6%E5%AE%9A' },
								'文件夹命名约定',
								-1
							)),
						i[62] || (i[62] = t(' 相同的规则。 这可以为 notes 的 ')),
						n(
							l,
							{
								to: '/notes/theme/config/notes%E9%85%8D%E7%BD%AE.html#%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90%E4%BE%A7%E8%BE%B9%E6%A0%8F',
							},
							{ default: e(() => i[57] || (i[57] = [t('自动生成侧边栏')])), _: 1 }
						),
						i[63] || (i[63] = t(' 提供排序依据。')),
					]),
				]),
			]),
			i[84] ||
				(i[84] = s(
					'h2',
					{ id: '文章写作', tabindex: '-1' },
					[s('a', { class: 'header-anchor', href: '#文章写作' }, [s('span', null, '文章写作')])],
					-1
				)),
			s('p', null, [
				i[66] || (i[66] = t('你可以使用 ')),
				i[67] || (i[67] = s('code', null, 'markdown', -1)),
				i[68] || (i[68] = t(' 语法开始在 ')),
				i[69] || (i[69] = s('code', null, 'docs', -1)),
				i[70] || (i[70] = t(' 下新建 ')),
				i[71] || (i[71] = s('code', null, 'Markdown', -1)),
				i[72] || (i[72] = t(' 文件，编写你自己的文章了， 关于 markdown 扩展的功能支持，请查看 ')),
				n(
					l,
					{ to: '/notes/theme/blog/guide/markdown/%E6%89%A9%E5%B1%95.html' },
					{ default: e(() => i[65] || (i[65] = [t('这个文档')])), _: 1 }
				),
			]),
			i[85] ||
				(i[85] = k(
					`<p>由于主题默认会为文章 的 <code>frontmatter</code> 自动生成一个 <code>title</code>，因此，文章内容的主体部分的标题，起始应该从 <code>h2</code> 即 <code>## 二级标题</code> 开始。如果您禁用了 <code>autoFrontmatter.title</code>，那么应该使用 <code>h1</code> 即 <code># 一级标题</code> 开始。</p><h3 id="标签" tabindex="-1"><a class="header-anchor" href="#标签"><span>标签</span></a></h3><p>通过 <code>frontmatter.tags</code> 可以为文章添加标签。</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 我的文章</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">tags</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 标签 1</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 标签 2</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span></code></pre></div>`,
					4
				)),
		])
	)
}
const V = m(y, [
		['render', w],
		['__file', 'index.html.vue'],
	]),
	P = JSON.parse(
		'{"path":"/blog/guide/write/","title":"编写文章","lang":"zh-CN","frontmatter":{"title":"编写文章","author":"pengzhanbo","icon":"mingcute:edit-4-line","createTime":"2024/03/04 10:06:06","permalink":"/blog/guide/write/","tags":["指南","快速开始"],"description":"VuePress 支持完整的 , 以及使用 YAML 定义 frontmatter 页面元数据，例如 标题和创建时间。 主题还对 Markdown 语法进行了 支持。你还可以直接在 Markdown 中写 HTML ，或者使用 Vue 组件。 Frontmatter 你可以通过设置 frontmatter 中的值来自定义 VuePress 里每个页面。...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/write/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"编写文章"}],["meta",{"property":"og:description","content":"VuePress 支持完整的 , 以及使用 YAML 定义 frontmatter 页面元数据，例如 标题和创建时间。 主题还对 Markdown 语法进行了 支持。你还可以直接在 Markdown 中写 HTML ，或者使用 Vue 组件。 Frontmatter 你可以通过设置 frontmatter 中的值来自定义 VuePress 里每个页面。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:tag","content":"指南"}],["meta",{"property":"article:tag","content":"快速开始"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"编写文章\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":5.03,"words":1509},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/编写文章.md","bulletin":false}'
	)
export { V as comp, P as data }
