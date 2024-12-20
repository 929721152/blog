import {
	k as E,
	V as g,
	l as c,
	_ as D,
	c as y,
	d as s,
	e as u,
	b as a,
	w as l,
	a as d,
	r as A,
	o as B,
} from './app-B_7CxFr0.js'
const m = E({
		__name: 'index.html',
		setup(F, { expose: i }) {
			i()
			const o = { VPBlogProfile: g, VPPostItem: c }
			return Object.defineProperty(o, '__isScriptSetup', { enumerable: !1, value: !0 }), o
		},
	}),
	C = {
		style: {
			width: '310px',
			margin: '0 auto',
			padding: '20px 20px 1px',
			'text-align': 'center',
			'border-radius': '4px',
			'background-color': 'var(--vp-c-bg-soft)',
			transition: 'background-color var(--vp-t-color)',
		},
	},
	v = { class: 'vp-file-tree' },
	b = { class: 'tree-node folder' },
	f = { class: 'tree-node folder' },
	x = { class: 'tree-node folder' },
	w = { class: 'tree-node folder' },
	P = { class: 'tree-node file' },
	T = { class: 'tree-node file' },
	z = { class: 'tree-node file' },
	L = {
		style: {
			'background-color': 'var(--vp-c-bg-alt)',
			padding: '20px 24px',
			transition: 'var(--vp-t-color)',
		},
	},
	V = {
		style: {
			'background-color': 'var(--vp-c-bg-alt)',
			padding: '20px 24px',
			transition: 'var(--vp-t-color)',
		},
	},
	N = {
		style: {
			'background-color': 'var(--vp-c-bg-alt)',
			padding: '20px 24px',
			transition: 'var(--vp-t-color)',
		},
	},
	I = {
		style: {
			'background-color': 'var(--vp-c-bg-alt)',
			padding: '20px 24px',
			transition: 'var(--vp-t-color)',
		},
	},
	R = {
		style: {
			'background-color': 'var(--vp-c-bg-alt)',
			padding: '20px 24px',
			display: 'flex',
			'flex-direction': 'column',
			gap: '24px',
			transition: 'var(--vp-t-color)',
		},
	},
	M = { class: 'vp-file-tree' },
	j = { class: 'tree-node folder' },
	U = { class: 'tree-node folder' },
	q = { class: 'tree-node file' },
	S = { class: 'tree-node folder' },
	Z = { class: 'tree-node file' },
	O = { class: 'tree-node file' }
function J(F, i, o, p, G, H) {
	const r = A('RouteLink'),
		n = A('VPIcon'),
		k = A('CodeTabs'),
		e = A('FileTreeItem')
	return (
		B(),
		y('div', null, [
			i[46] ||
				(i[46] = s(
					'h2',
					{ id: '概述', tabindex: '-1' },
					[s('a', { class: 'header-anchor', href: '#概述' }, [s('span', null, '概述')])],
					-1
				)),
			s('p', null, [
				i[1] || (i[1] = u('主题默认会将 ')),
				a(
					r,
					{
						to: '/notes/theme/blog/guide/%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84.html#%E6%96%87%E6%A1%A3%E6%BA%90%E7%9B%AE%E5%BD%95',
					},
					{ default: l(() => i[0] || (i[0] = [u('文档源目录')])), _: 1 }
				),
				i[2] || (i[2] = u(' 下的，除了特定的目录（如 ')),
				i[3] || (i[3] = s('code', null, 'notes', -1)),
				i[4] || (i[4] = u(' 目录将作为笔记所在目录）， 所有 md 文件作为博客文章。')),
			]),
			i[47] ||
				(i[47] = s(
					'p',
					null,
					[
						u('主题还会根据 md 文件 所在的 文件目录结构，以 '),
						s('strong', null, '目录名'),
						u(' 作为 博客文章所属的 '),
						s('strong', null, '分类'),
						u('。'),
					],
					-1
				)),
			i[48] ||
				(i[48] = s(
					'p',
					null,
					[
						u('主题默认会生成一个 链接地址为 '),
						s('code', null, '/blog/'),
						u(' 的 博客文章列表页。 展示所有的博客文章，以及 博主的相关信息。'),
					],
					-1
				)),
			i[49] ||
				(i[49] = s(
					'h2',
					{ id: '配置', tabindex: '-1' },
					[s('a', { class: 'header-anchor', href: '#配置' }, [s('span', null, '配置')])],
					-1
				)),
			i[50] || (i[50] = s('p', null, '主题默认启用 博客功能，通常您无需进行额外的配置。', -1)),
			a(
				k,
				{ id: '19', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: l(({ value: t, isActive: h }) => [
						a(n, { name: 'vscode-icons:file-type-typescript' }),
						i[5] || (i[5] = s('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: l(
						({ value: t, isActive: h }) =>
							i[6] ||
							(i[6] = [
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
												u(`
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
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'    // 禁用博客功能'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'    // blog: false,'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'    blog'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': {'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'      /**'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'       * 通过 glob string 配置包含文件，'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'       * 默认读取 源目录中的所有 `.md` 文件，但会排除 `notes` 配置中用于笔记的目录。'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'       */'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      include'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': ['
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
														'**/*.md'
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
														'],'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'      // 如果希望只将源目录下某个目录下的文章读取为博客文章，比如 `blog` 目录，可以配置为：'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														"      // include: ['blog/**/*.md'],"
													),
												]),
												u(`
`),
												s('span', { class: 'line' }),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'      /**'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'       * 通过 glob string 配置排除的文件，相对于 源目录'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'       */'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      exclude'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': ['
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
														'.vuepress/'
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
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'**/README.md'
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
														'],'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'      // 禁用分页'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'      // pagination: false,'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'      // 每页显示的文章数量'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      pagination'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'15'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    }'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  })'
													),
												]),
												u(`
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
			i[51] ||
				(i[51] = s(
					'h2',
					{ id: '博主信息', tabindex: '-1' },
					[s('a', { class: 'header-anchor', href: '#博主信息' }, [s('span', null, '博主信息')])],
					-1
				)),
			i[52] || (i[52] = s('p', null, '主题支持展示博主的基本信息。', -1)),
			s('div', C, [a(p.VPBlogProfile)]),
			i[53] ||
				(i[53] = s(
					'h3',
					{ id: '配置-1', tabindex: '-1' },
					[s('a', { class: 'header-anchor', href: '#配置-1' }, [s('span', null, '配置')])],
					-1
				)),
			i[54] ||
				(i[54] = s(
					'p',
					null,
					[u('你可以通过 '), s('code', null, 'profile'), u(' 属性来设置博主头像等相关信息。')],
					-1
				)),
			a(
				k,
				{ id: '37', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: l(({ value: t, isActive: h }) => [
						a(n, { name: 'vscode-icons:file-type-typescript' }),
						i[7] || (i[7] = s('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: l(
						({ value: t, isActive: h }) =>
							i[8] ||
							(i[8] = [
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
												u(`
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
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'    profile'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': {'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      name'
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
														'您的名字'
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
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      description'
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
														'描述文字，座右铭/签名'
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
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      avatar'
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
														'/blogger.png'
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
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      location'
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
														'您的位置'
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
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      organization'
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
														'您的组织'
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
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      circle'
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
														'// 是否为圆形头像'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      layout'
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
														'right'
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
														"// 个人信息在左侧还是右侧，'left' | 'right'"
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    },'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'    // 社交链接'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'    social'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': ['
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'      { '
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
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'github'
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
														'https://github.com/vuepress-theme-plume'
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
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'      // ... more'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    ]'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  })'
													),
												]),
												u(`
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
			i[55] ||
				(i[55] = d(
					`<h2 id="文章元数据" tabindex="-1"><a class="header-anchor" href="#文章元数据"><span>文章元数据</span></a></h2><p>你可以配置展示博客文章的元数据，如标题、作者、日期、标签等。这些数据通过 <code>frontmatter</code> 配置。</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 文章标题</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">createTime</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 2024/01/01 00:00:00</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">tags</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tag1</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tag2</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span></code></pre></div><p>其中，<code>title</code> / <code>createTime</code> 会在新建 md 文件时由主题自动填充，你可以随意修改它们。</p><p>以下是在 博客文章中可用的 <code>frontmatter</code> 属性。</p><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td><code>string</code></td><td>默认自动填入文件名</td><td>文章标题</td></tr><tr><td>createTime</td><td><code>string</code></td><td>当前时间</td><td>文章创建时间</td></tr><tr><td>tags</td><td><code>string[]</code></td><td><code>[]</code></td><td>文章标签</td></tr><tr><td>sticky</td><td><code>boolean | number</code></td><td>false</td><td>是否置顶, 如果为数字，则数字越大，置顶越靠前</td></tr><tr><td>draft</td><td><code>boolean</code></td><td>false</td><td>是否为草稿，草稿文章不会被展示</td></tr><tr><td>cover</td><td><code>string | BlogPostCover</code></td><td><code>&#39;&#39;</code></td><td>文章封面</td></tr><tr><td>excerpt</td><td><code>boolean | string</code></td><td>&#39;&#39;</td><td>文章摘要，默认通过 <code>&lt;!-- more --&gt;</code> 注释生成, 传入字符串表示自定义内容，不再从正文提取</td></tr></tbody></table>`,
					6
				)),
			s('p', null, [
				i[10] || (i[10] = u('除了以上的字段，你还可以使用 ')),
				a(
					r,
					{ to: '/notes/theme/config/frontmatter/basic.html' },
					{ default: l(() => i[9] || (i[9] = [u('通用 frontmatter 配置')])), _: 1 }
				),
				i[11] || (i[11] = u(' 中的字段， 灵活的控制当前页面的行为。')),
			]),
			i[56] ||
				(i[56] = d(
					`<h2 id="文章摘要" tabindex="-1"><a class="header-anchor" href="#文章摘要"><span>文章摘要</span></a></h2><p>如果你想要为文章添加摘要，你可以使用 <code>&lt;!-- more --&gt;</code> 注释来标记它。任何在此注释之前的内容会被视为摘要。</p><p><strong>示例：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 标题</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">这里的内容会被作为摘要</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- more --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">这里的内容不会被作为摘要</span></span></code></pre></div><p>还可以使用 <code>frontmatter.excerpt</code> 来控制文章是否显示摘要，以及 自定义摘要内容。</p><ul><li><code>frontmatter.excerpt</code> 默认为 <code>false</code>，表示不显示摘要，此时 <code>&lt;!-- more --&gt;</code> 注释会被忽略。</li><li><code>frontmatter.excerpt</code> 为 <code>string</code> 类型时，表示自定义摘要内容，此时 <code>&lt;!-- more --&gt;</code> 注释会被忽略。</li></ul><p><strong>示例：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 标题</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">excerpt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 自定义摘要内容</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span></code></pre></div><p>您可以根据需要使用不同的方式来控制文章的摘要。</p><div class="hint-container tip"><p class="hint-container-title">主题更建议使用 <code>&lt;!-- more --&gt;</code> 注释来添加摘要</p></div><h2 id="文章封面图" tabindex="-1"><a class="header-anchor" href="#文章封面图"><span>文章封面图</span></a></h2><p>在博客文章列表页，主题支持为 文章添加封面图，并支持不同的 排版 和 灵活的尺寸配置。</p><p>为博客文章添加 封面图，可以在 <code>frontmatter</code> 中配置 <code>cover</code>:</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 标题</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cover</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /images/cover.jpg</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span></code></pre></div><p><strong>封面图</strong> 仅支持 绝对路径 或 远程路径。当使用 绝对路径时，从 <code>.vuepress/public</code> 目录中加载图片。</p>`,
					15
				)),
			s('div', v, [
				s('ul', null, [
					a(
						e,
						{ type: 'folder', expanded: !0, empty: !1 },
						{
							default: l(() => [
								s('span', b, [
									a(n, { name: 'vscode-icons:folder-type-docs' }),
									i[12] || (i[12] = s('span', { class: 'name' }, 'docs', -1)),
								]),
								s('ul', null, [
									a(
										e,
										{ type: 'folder', expanded: !0, empty: !1 },
										{
											default: l(() => [
												s('span', f, [
													a(n, { name: 'vscode-icons:default-folder' }),
													i[13] || (i[13] = s('span', { class: 'name' }, '.vuepress', -1)),
												]),
												s('ul', null, [
													a(
														e,
														{ type: 'folder', expanded: !0, empty: !1 },
														{
															default: l(() => [
																s('span', x, [
																	a(n, { name: 'vscode-icons:folder-type-public' }),
																	i[14] || (i[14] = s('span', { class: 'name' }, 'public', -1)),
																]),
																s('ul', null, [
																	a(
																		e,
																		{ type: 'folder', expanded: !0, empty: !1 },
																		{
																			default: l(() => [
																				s('span', w, [
																					a(n, { name: 'vscode-icons:folder-type-images' }),
																					i[15] ||
																						(i[15] = s('span', { class: 'name' }, 'images', -1)),
																				]),
																				s('ul', null, [
																					a(
																						e,
																						{ type: 'file', expanded: !1, empty: !0 },
																						{
																							default: l(() => [
																								s('span', P, [
																									a(n, { name: 'vscode-icons:file-type-image' }),
																									i[16] ||
																										(i[16] = s(
																											'span',
																											{ class: 'name' },
																											'cover.jpg',
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
													a(
														e,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: l(() => [
																s('span', T, [
																	a(n, { name: 'vscode-icons:file-type-typescript' }),
																	i[17] || (i[17] = s('span', { class: 'name' }, 'config.ts', -1)),
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
										e,
										{ type: 'file', expanded: !1, empty: !0 },
										{
											default: l(() => [
												s('span', z, [
													a(n, { name: 'vscode-icons:file-type-markdown' }),
													i[18] || (i[18] = s('span', { class: 'name' }, 'article.md', -1)),
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
						e,
						{ type: 'file', expanded: !1, empty: !0 },
						{
							default: l(
								() =>
									i[19] ||
									(i[19] = [
										s('span', { class: 'tree-node file' }, [s('span', { class: 'name' }, '…')], -1),
									])
							),
							_: 1,
						}
					),
				]),
			]),
			i[57] || (i[57] = s('p', null, '默认效果如下：', -1)),
			s('div', L, [
				a(p.VPPostItem, {
					post: {
						path: '/article/ecxnxxd0/',
						title: '文章标题',
						categoryList: [{ id: '65f30c', sort: 4, name: '教程' }],
						createTime: '2024/09/18 09:19:36',
						lang: 'zh-CN',
						excerpt: '',
						cover: 'https://api.pengzhanbo.cn/wallpaper/bing',
					},
					index: 1,
				}),
			]),
			i[58] ||
				(i[58] = d(
					`<p>还可以为 封面图 调整 布局位置，以及 尺寸比例：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 文章标题</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cover</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /images/cover.jpg</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  layout</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> left</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  ratio</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 16:9</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  width</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 300</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span></code></pre></div><p>效果如下:</p>`,
					3
				)),
			s('div', V, [
				a(p.VPPostItem, {
					post: {
						path: '/article/ecxnxxd0/',
						title: '文章标题',
						categoryList: [{ id: '65f30c', sort: 4, name: '教程' }],
						createTime: '2024/09/18 09:19:36',
						lang: 'zh-CN',
						excerpt: '',
						cover: {
							url: 'https://api.pengzhanbo.cn/wallpaper/bing',
							layout: 'left',
							ratio: '16:9',
							width: 300,
						},
					},
					index: 1,
				}),
			]),
			i[59] ||
				(i[59] = d(
					`<p>当文章没有摘要时，可能会显得比较空，为此你还可以通过 <code>compact: true</code> 使 封面图 贴合容器边缘，使整体变得更紧凑：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 文章标题</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cover</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /images/cover.jpg</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  layout</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> left</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  ratio</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 16:9</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  width</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 300</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  compact</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span></code></pre></div><p>效果如下:</p>`,
					3
				)),
			s('div', N, [
				a(p.VPPostItem, {
					post: {
						path: '/article/ecxnxxd0/',
						title: '文章标题',
						categoryList: [{ id: '65f30c', sort: 4, name: '教程' }],
						createTime: '2024/09/18 09:19:36',
						lang: 'zh-CN',
						excerpt: '',
						cover: {
							url: 'https://api.pengzhanbo.cn/wallpaper/bing',
							layout: 'left',
							ratio: '16:9',
							width: 300,
							compact: !0,
						},
					},
					index: 1,
				}),
			]),
			i[60] ||
				(i[60] = d(
					`<div class="hint-container warning"><p class="hint-container-title">compact: true 仅在文章没有摘要时生效</p></div><p>还可以设置 封面图在 标题上方，此时变为 大图风格：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 文章标题</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cover</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /images/cover.jpg</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  layout</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> top</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  ratio</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 16:9</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  width</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 300</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span></code></pre></div><p>效果如下:</p>`,
					4
				)),
			s('div', I, [
				a(p.VPPostItem, {
					post: {
						path: '/article/ecxnxxd0/',
						title: '文章标题',
						categoryList: [{ id: '65f30c', sort: 4, name: '教程' }],
						createTime: '2024/09/18 09:19:36',
						lang: 'zh-CN',
						excerpt: '',
						cover: {
							url: 'https://api.pengzhanbo.cn/wallpaper/bing',
							layout: 'top',
							ratio: '16:9',
							width: 300,
						},
					},
					index: 1,
				}),
			]),
			i[61] ||
				(i[61] = s(
					'h3',
					{ id: '预设配置', tabindex: '-1' },
					[s('a', { class: 'header-anchor', href: '#预设配置' }, [s('span', null, '预设配置')])],
					-1
				)),
			i[62] ||
				(i[62] = s(
					'p',
					null,
					'虽然主题支持为每个文章的封面图使用不同的配置，出于整体布局风格的考虑，以及简化配置的目的， 主题还支持为封面图预设配置：',
					-1
				)),
			a(
				k,
				{ id: '311', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: l(({ value: t, isActive: h }) => [
						a(n, { name: 'vscode-icons:file-type-typescript' }),
						i[20] || (i[20] = s('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: l(
						({ value: t, isActive: h }) =>
							i[21] ||
							(i[21] = [
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
												u(`
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
												u(`
`),
												s('span', { class: 'line' }),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'    blog'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': {'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'      // 配置 封面图 布局位置'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														"      // postCover: 'left', // 'left' | 'right' | 'odd-left' | 'odd-right' | 'top'"
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      postCover'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': {'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'        layout'
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
														'left'
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
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'        ratio'
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
														'16:9'
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
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'        width'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'300'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'        compact'
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
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'      }'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    }'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  })'
													),
												]),
												u(`
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
			i[63] ||
				(i[63] = d(
					`<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> BlogPostCoverLayout</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">left</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">right</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">odd-left</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">odd-right</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">top</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> BlogPostCover</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 封面图链接地址，只能使用 绝对路径 以及 远程图片地址</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 博客文章封面图的位置</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  layout</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">BlogPostCoverLayout</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 博客文章封面图的比例</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">default</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">4:3</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  ratio</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">\`</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">\${</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">\${</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 封面图的宽度, 仅在 layout 为 &#39;left&#39; 或 &#39;right&#39; 时生效</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">default</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> 240</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  width</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 是否使用紧凑模式，紧凑模式下，封面图紧贴容器边缘</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">default</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> false</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  compact</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可能已经注意到，在预设配置的 <code>layout</code> 中，还支持 <code>odd-left</code> 和 <code>odd-right</code> 两种配置。</p><ul><li><code>odd-left</code>: 表示 单数项在左侧，偶数项在右侧</li><li><code>odd-right</code>: 表示 单数项在右侧，偶数项在左侧</li></ul><p>比如 <code>odd-left</code> 效果如下：</p>`,
					4
				)),
			s('div', R, [
				a(p.VPPostItem, {
					post: {
						path: '/article/ecxnxxd0/',
						title: '文章标题',
						categoryList: [{ id: '65f30c', sort: 4, name: '教程' }],
						createTime: '2024/09/18 09:19:36',
						lang: 'zh-CN',
						excerpt: '',
						cover: {
							url: 'https://api.pengzhanbo.cn/wallpaper/bing',
							layout: 'odd-left',
							ratio: '16:9',
							width: 300,
							compact: !0,
						},
					},
					index: 0,
				}),
				a(p.VPPostItem, {
					post: {
						path: '/article/ecxnxxd0/',
						title: '文章标题',
						categoryList: [{ id: '65f30c', sort: 4, name: '教程' }],
						createTime: '2024/09/18 09:19:36',
						lang: 'zh-CN',
						excerpt: '',
						cover: {
							url: 'https://api.pengzhanbo.cn/wallpaper/bing',
							layout: 'odd-left',
							ratio: '16:9',
							width: 300,
							compact: !0,
						},
					},
					index: 1,
				}),
				a(p.VPPostItem, {
					post: {
						path: '/article/ecxnxxd0/',
						title: '文章标题',
						categoryList: [{ id: '65f30c', sort: 4, name: '教程' }],
						createTime: '2024/09/18 09:19:36',
						lang: 'zh-CN',
						excerpt: '',
						cover: {
							url: 'https://api.pengzhanbo.cn/wallpaper/bing',
							layout: 'odd-left',
							ratio: '16:9',
							width: 300,
							compact: !0,
						},
					},
					index: 2,
				}),
			]),
			i[64] ||
				(i[64] = d(
					'<div class="hint-container warning"><p class="hint-container-title">注意</p><p>当在 移动设备窄屏 上时，出于视觉效果考虑，<code>layout</code> 配置强制重置为 <code>top</code>。</p></div><h2 id="标签页-分类页和归档页" tabindex="-1"><a class="header-anchor" href="#标签页-分类页和归档页"><span>标签页，分类页和归档页</span></a></h2><p>主题除了自动生成 <strong>博客文章列表页</strong> 以外，还会自动生成 <strong>标签页</strong>，<strong>分类页</strong> 和 <strong>归档页</strong>。</p><p>标签页 可以根据 标签 筛选并展示 博客文章， 默认地址为 <code>/blog/tags/</code></p><p>分类页 可以根据 原始目录结构 分类展示 博客文章, 默认地址为 <code>/blog/categories/</code></p><p>归档页根据文章的创建时间进行归, 默认地址为 <code>/blog/archives/</code></p><h2 id="国际化支持" tabindex="-1"><a class="header-anchor" href="#国际化支持"><span>国际化支持</span></a></h2><p>如果启用了 国际化，那么博客列表页将会 根据 不同的语言，展示对应语言目录下的博客列表。 即 每个语言下的 文章列表 都是保持独立的。</p><p>特别的，如果您的 一篇博客文章 拥有不同的语言版本，请保持在 不同的语言目录下，都有相同的 目录文件结构和文件名。当切换语言时，主题能够正确的切换到对应语言的文章。</p>',
					9
				)),
			s('div', M, [
				s('ul', null, [
					a(
						e,
						{ type: 'folder', expanded: !0, empty: !1 },
						{
							default: l(() => [
								s('span', j, [
									a(n, { name: 'vscode-icons:folder-type-docs' }),
									i[22] || (i[22] = s('span', { class: 'name' }, 'docs', -1)),
								]),
								s('ul', null, [
									a(
										e,
										{ type: 'folder', expanded: !0, empty: !1 },
										{
											default: l(() => [
												s('span', U, [
													a(n, { name: 'vscode-icons:default-folder' }),
													i[23] || (i[23] = s('span', { class: 'name' }, 'en', -1)),
												]),
												s('ul', null, [
													a(
														e,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: l(() => [
																s('span', q, [
																	a(n, { name: 'vscode-icons:file-type-markdown' }),
																	i[24] ||
																		(i[24] = s('span', { class: 'name' }, 'my-article.md', -1)),
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
										e,
										{ type: 'folder', expanded: !0, empty: !1 },
										{
											default: l(() => [
												s('span', S, [
													a(n, { name: 'vscode-icons:default-folder' }),
													i[25] || (i[25] = s('span', { class: 'name' }, 'fr', -1)),
												]),
												s('ul', null, [
													a(
														e,
														{ type: 'file', expanded: !1, empty: !0 },
														{
															default: l(() => [
																s('span', Z, [
																	a(n, { name: 'vscode-icons:file-type-markdown' }),
																	i[26] ||
																		(i[26] = s('span', { class: 'name' }, 'my-article.md', -1)),
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
										e,
										{ type: 'file', expanded: !1, empty: !0 },
										{
											default: l(() => [
												s('span', O, [
													a(n, { name: 'vscode-icons:file-type-markdown' }),
													i[27] || (i[27] = s('span', { class: 'name' }, 'my-article.md', -1)),
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
			i[65] ||
				(i[65] = d(
					'<h2 id="设置博客为主页" tabindex="-1"><a class="header-anchor" href="#设置博客为主页"><span>设置博客为主页</span></a></h2><p>默认情况下，主题 将 <strong>首页</strong> 与 <strong>博客页</strong> 分离。</p><p>但对于 希望只建立一个 博客站点 的用户而言，可能直接将 博客页 作为 <strong>首页</strong> 是个更好的选择。</p><p>主题提供了两种方式来设置博客为主页，满足不同的需求场景：</p><ul><li><strong>方式一：配置 主页的 <code>pageLayout</code> 属性为 <code>blog</code></strong></li></ul>',
					5
				)),
			a(
				k,
				{ id: '424', data: [{ id: 'docs/README.md' }] },
				{
					title0: l(({ value: t, isActive: h }) => [
						a(n, { name: 'vscode-icons:file-type-markdown' }),
						i[28] || (i[28] = s('span', null, 'docs/README.md', -1)),
					]),
					tab0: l(
						({ value: t, isActive: h }) =>
							i[29] ||
							(i[29] = [
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
												u(`
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
														' blog'
													),
												]),
												u(`
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
			i[66] || (i[66] = s('p', null, '此配置会直接将页面应用 博客布局，显示博客文章列表。', -1)),
			i[67] ||
				(i[67] = s('p', null, '这是将主页修改为 博客页的 最简单的方式，但缺点是 缺少灵活性。', -1)),
			i[68] ||
				(i[68] = s(
					'ul',
					null,
					[
						s('li', null, [
							s('strong', null, [
								u('方式二：配置 主页的 '),
								s('code', null, 'pageLayout'),
								u(' 属性为 '),
								s('code', null, 'home'),
								u(', 添加 '),
								s('code', null, 'type: blog'),
								u(' 的首页区域类型'),
							]),
						]),
					],
					-1
				)),
			a(
				k,
				{ id: '442', data: [{ id: 'docs/README.md' }] },
				{
					title0: l(({ value: t, isActive: h }) => [
						a(n, { name: 'vscode-icons:file-type-markdown' }),
						i[30] || (i[30] = s('span', null, 'docs/README.md', -1)),
					]),
					tab0: l(
						({ value: t, isActive: h }) =>
							i[31] ||
							(i[31] = [
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
												u(`
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
												u(`
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
												u(`
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
														' blog'
													),
												]),
												u(`
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
			i[69] ||
				(i[69] = s(
					'p',
					null,
					'使用这种方式，你不仅可以在首页中添加 博客文章列表，还可以灵活的在页面的其他区域添加不同的内容。',
					-1
				)),
			i[70] ||
				(i[70] = s(
					'p',
					null,
					[u('比如，配置首屏为 '), s('code', null, 'banner'), u('，然后紧跟着 博客文章列表：')],
					-1
				)),
			a(
				k,
				{ id: '453', data: [{ id: 'docs/README.md' }] },
				{
					title0: l(({ value: t, isActive: h }) => [
						a(n, { name: 'vscode-icons:file-type-markdown' }),
						i[32] || (i[32] = s('span', null, 'docs/README.md', -1)),
					]),
					tab0: l(
						({ value: t, isActive: h }) =>
							i[33] ||
							(i[33] = [
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
												u(`
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
												u(`
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
												u(`
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
														' banner'
													),
												]),
												u(`
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
														' blog'
													),
												]),
												u(`
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
			s('p', null, [
				i[35] || (i[35] = u('更多自定义配置，请参考 ')),
				a(
					r,
					{ to: '/notes/theme/blog/guide/%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A6%96%E9%A1%B5.html' },
					{ default: l(() => i[34] || (i[34] = [u('自定义首页')])), _: 1 }
				),
				i[36] || (i[36] = u('。')),
			]),
			s('p', null, [
				i[38] ||
					(i[38] = u('当使用以上两种方式 将首页配置为 博客页后，由于主题默认依然会生成 地址为')),
				i[39] || (i[39] = s('code', null, '/blog/', -1)),
				i[40] || (i[40] = u(' 的博客文章列表页， 这导致存在了重复功能的页面，为此，你需要 ')),
				a(
					r,
					{ to: '/notes/theme/config/%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE.html#blog' },
					{ default: l(() => i[37] || (i[37] = [u('主题配置 > 博客配置')])), _: 1 }
				),
				i[41] || (i[41] = u(' 中， ')),
				i[42] || (i[42] = s('strong', null, '关闭自动生成博客文章列表页', -1)),
				i[43] || (i[43] = u('：')),
			]),
			i[71] || (i[71] = s('p', null, '（还可以在重新修改 分类页/标签页/归档页的链接地址）', -1)),
			a(
				k,
				{ id: '467', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: l(({ value: t, isActive: h }) => [
						a(n, { name: 'vscode-icons:file-type-typescript' }),
						i[44] || (i[44] = s('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: l(
						({ value: t, isActive: h }) =>
							i[45] ||
							(i[45] = [
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
												u(`
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
												u(`
`),
												s('span', { class: 'line' }),
												u(`
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
												u(`
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
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'    blog'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': {'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      postList'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'false'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														', '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'// 禁止生成博客文章列表页'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														"      // tagsLink: '/blog/tags/',"
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														"      // categoriesLink: '/blog/categories/',"
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														"      // archiveLink: '/blog/archives/',"
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    }'
													),
												]),
												u(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  })'
													),
												]),
												u(`
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
					_: 1,
				}
			),
		])
	)
}
const Q = D(m, [
		['render', J],
		['__file', 'index.html.vue'],
	]),
	W = JSON.parse(
		'{"path":"/blog/guide/blog/","title":"博客","lang":"zh-CN","frontmatter":{"title":"博客","author":"pengzhanbo","icon":"material-symbols:article-outline","createTime":"2024/03/04 19:16:40","permalink":"/blog/guide/blog/","tags":["指南","快速开始"],"description":"概述 主题默认会将 下的，除了特定的目录（如 notes 目录将作为笔记所在目录）， 所有 md 文件作为博客文章。 主题还会根据 md 文件 所在的 文件目录结构，以 目录名 作为 博客文章所属的 分类。 主题默认会生成一个 链接地址为 /blog/ 的 博客文章列表页。 展示所有的博客文章，以及 博主的相关信息。 配置 主题默认启用 博客功能，通常...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/blog/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"博客"}],["meta",{"property":"og:description","content":"概述 主题默认会将 下的，除了特定的目录（如 notes 目录将作为笔记所在目录）， 所有 md 文件作为博客文章。 主题还会根据 md 文件 所在的 文件目录结构，以 目录名 作为 博客文章所属的 分类。 主题默认会生成一个 链接地址为 /blog/ 的 博客文章列表页。 展示所有的博客文章，以及 博主的相关信息。 配置 主题默认启用 博客功能，通常..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:tag","content":"指南"}],["meta",{"property":"article:tag","content":"快速开始"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"博客\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":8.8,"words":2640},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/博客.md","bulletin":false}'
	)
export { Q as comp, W as data }
