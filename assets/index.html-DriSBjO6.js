import {
	_ as p,
	c as g,
	d as i,
	e,
	b as l,
	w as t,
	a as o,
	r as h,
	o as y,
} from './app-B_7CxFr0.js'
const m = {}
function u(A, s) {
	const a = h('RouteLink'),
		d = h('VPIcon'),
		r = h('CodeTabs')
	return (
		y(),
		g('div', null, [
			s[25] ||
				(s[25] = i(
					'h2',
					{ id: '概述', tabindex: '-1' },
					[i('a', { class: 'header-anchor', href: '#概述' }, [i('span', null, '概述')])],
					-1
				)),
			s[26] ||
				(s[26] = i(
					'p',
					null,
					'在本主题中，侧边栏 特指 位于页面 最左侧的内容区域，用于导航到不同的页面。',
					-1
				)),
			s[27] ||
				(s[27] = i(
					'p',
					null,
					[
						e('在 '),
						i('code', null, 'vuepress'),
						e(' 的默认主题 '),
						i('code', null, '@vuepress/theme-default'),
						e(' 中，侧边栏是通过 '),
						i('code', null, 'sidebar'),
						e(' 进行配置。'),
					],
					-1
				)),
			i('p', null, [
				i('strong', null, [
					s[1] || (s[1] = e('但在本主题中，为使其更具语义化，主题将侧边栏配置整合到了 ')),
					l(
						a,
						{ to: '/notes/theme/config/notes%E9%85%8D%E7%BD%AE.html' },
						{ default: t(() => s[0] || (s[0] = [e('notes 配置')])), _: 1 }
					),
					s[2] || (s[2] = e(' 中')),
				]),
				s[3] || (s[3] = e(' 。 通过一个 ')),
				s[4] || (s[4] = i('code', null, 'note', -1)),
				s[5] || (s[5] = e(' 对应一个 ')),
				s[6] || (s[6] = i('code', null, 'sidebar', -1)),
				s[7] || (s[7] = e(' 的方式，实现更加简洁，语义化的侧边栏配置。')),
			]),
			s[28] ||
				(s[28] = o(
					'<p>同时，为了满足 用户不希望使用 <code>notes</code> 功能的需求，本主题也提供了 <code>sidebar</code> 的选项进行侧边栏配置。</p><h2 id="notes-中的侧边栏配置" tabindex="-1"><a class="header-anchor" href="#notes-中的侧边栏配置"><span>Notes 中的侧边栏配置</span></a></h2><p><code>notes</code> 的功能是聚合一系列的文章，通过侧边栏来导航到 notes 中不同的文章。</p><p>你可以在 <code>notes</code> 目录下创建多个 <code>note</code> ，在每一个 <code>note</code> 中单独配置 <code>sidebar</code>:</p>',
					4
				)),
			l(
				r,
				{ id: '24', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: t(({ value: n, isActive: k }) => [
						l(d, { name: 'vscode-icons:file-type-typescript' }),
						s[8] || (s[8] = i('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: t(
						({ value: n, isActive: k }) =>
							s[9] ||
							(s[9] = [
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
													e(`
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
															' defineNoteConfig'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															','
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
															'vuepress-theme-plume'
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
													e(`
`),
													i('span', { class: 'line' }),
													e(`

`),
													i('span', { class: 'line diff add' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
															'const '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															'noteA'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															' ='
														),
														i(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															' defineNoteConfig'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'({'
														),
													]),
													e(`
`),
													i('span', { class: 'line diff add' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  dir'
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
															'note A'
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
													e(`
`),
													i('span', { class: 'line diff add' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  link'
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
															'/note-a/'
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
													e(`
`),
													i('span', { class: 'line diff add' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  sidebar'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': ['
														),
													]),
													e(`
`),
													i('span', { class: 'line diff add' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'    { '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'text'
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
															'one item'
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
															'link'
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
															'one'
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
													e(`
`),
													i('span', { class: 'line diff add' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'    { '
														),
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'text'
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
															'two item'
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
															'link'
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
															'two'
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
													e(`
`),
													i('span', { class: 'line diff add' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'  ]'
														),
													]),
													e(`
`),
													i('span', { class: 'line diff add' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'})'
														),
													]),
													e(`
`),
													i('span', { class: 'line' }),
													e(`
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
													e(`
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
													e(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'    notes'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': {'
														),
													]),
													e(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'      link'
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
															','
														),
													]),
													e(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'      dir'
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
															'notes'
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
													e(`
`),
													i('span', { class: 'line diff add' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'      notes'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': ['
														),
														i(
															'span',
															{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
															'noteA'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'], '
														),
													]),
													e(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'    },'
														),
													]),
													e(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'  })'
														),
													]),
													e(`
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
			i('p', null, [
				s[11] || (s[11] = e('主题提供了 ')),
				s[12] || (s[12] = i('code', null, 'defineNoteConfig', -1)),
				s[13] || (s[13] = e(' 来帮助你配置 note , 你可以参考 ')),
				l(
					a,
					{ to: '/notes/theme/config/notes%E9%85%8D%E7%BD%AE.html' },
					{ default: t(() => s[10] || (s[10] = [e('这里')])), _: 1 }
				),
				s[14] || (s[14] = e('来查看如何配置。')),
			]),
			s[29] ||
				(s[29] = i(
					'h2',
					{ id: '通用-sidebar-配置', tabindex: '-1' },
					[
						i('a', { class: 'header-anchor', href: '#通用-sidebar-配置' }, [
							i('span', null, '通用 Sidebar 配置'),
						]),
					],
					-1
				)),
			i('p', null, [
				s[16] || (s[16] = e('如果你不想使用 ')),
				s[17] || (s[17] = i('code', null, 'notes', -1)),
				s[18] ||
					(s[18] = e(' 的方式来管理系列文章，但又期望通过侧边栏来导航到不同的文章， 可以通过 ')),
				l(
					a,
					{ to: '/notes/theme/config/%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE.html#sidebar' },
					{ default: t(() => s[15] || (s[15] = [e('sidebar')])), _: 1 }
				),
				s[19] || (s[19] = e(' 通用配置来实现。')),
			]),
			l(
				r,
				{ id: '38', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: t(({ value: n, isActive: k }) => [
						l(d, { name: 'vscode-icons:file-type-typescript' }),
						s[20] || (s[20] = i('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: t(
						({ value: n, isActive: k }) =>
							s[21] ||
							(s[21] = [
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
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
												]),
												e(`
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
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														" '"
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'vuepress-theme-plume'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
												]),
												e(`
`),
												i('span', { class: 'line' }),
												e(`
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
												e(`
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
												e(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'    notes'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'false'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
												]),
												e(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'    sidebar'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': {'
													),
												]),
												e(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"      '"
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'/config/'
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
														': ['
													),
												]),
												e(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'        { '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'text'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': '
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
														'侧边栏配置'
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
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'link'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': '
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
														'sidebar-1'
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
														' },'
													),
												]),
												e(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'        { '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'text'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': '
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
														'侧边栏配置'
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
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'link'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': '
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
														'sidebar-2'
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
														' },'
													),
												]),
												e(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'      ]'
													),
												]),
												e(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    }'
													),
												]),
												e(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  })'
													),
												]),
												e(`
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
			i('p', null, [
				s[23] || (s[23] = e('完整侧边栏使用说明，请查看 ')),
				l(
					a,
					{ to: '/notes/theme/blog/guide/%E7%9F%A5%E8%AF%86%E7%AC%94%E8%AE%B0.html' },
					{ default: t(() => s[22] || (s[22] = [e('此文档')])), _: 1 }
				),
				s[24] || (s[24] = e(' 。')),
			]),
		])
	)
}
const f = p(m, [
		['render', u],
		['__file', 'index.html.vue'],
	]),
	c = JSON.parse(
		'{"path":"/config/sidebar/","title":"侧边栏配置","lang":"zh-CN","frontmatter":{"title":"侧边栏配置","author":"Plume Theme","createTime":"2024/08/15 21:05:36","permalink":"/config/sidebar/","description":"概述 在本主题中，侧边栏 特指 位于页面 最左侧的内容区域，用于导航到不同的页面。 在 vuepress 的默认主题 @vuepress/theme-default 中，侧边栏是通过 sidebar 进行配置。 但在本主题中，为使其更具语义化，主题将侧边栏配置整合到了 中 。 通过一个 note 对应一个 sidebar 的方式，实现更加简洁，语义化的...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/config/sidebar/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"侧边栏配置"}],["meta",{"property":"og:description","content":"概述 在本主题中，侧边栏 特指 位于页面 最左侧的内容区域，用于导航到不同的页面。 在 vuepress 的默认主题 @vuepress/theme-default 中，侧边栏是通过 sidebar 进行配置。 但在本主题中，为使其更具语义化，主题将侧边栏配置整合到了 中 。 通过一个 note 对应一个 sidebar 的方式，实现更加简洁，语义化的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:author","content":"Plume Theme"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"侧边栏配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Plume Theme\\"}]}"]]},"headers":[],"readingTime":{"minutes":1.46,"words":438},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/config/侧边栏配置.md","bulletin":false}'
	)
export { f as comp, c as data }
