import {
	_ as g,
	c as o,
	a as r,
	b as a,
	w as t,
	d as i,
	e as s,
	r as p,
	o as c,
} from './app-B_7CxFr0.js'
const y = {}
function u(m, e) {
	const h = p('VPIcon'),
		k = p('CodeTabs'),
		d = p('RouteLink')
	return (
		c(),
		o('div', null, [
			e[10] ||
				(e[10] = r(
					'<h2 id="加密" tabindex="-1"><a class="header-anchor" href="#加密"><span>加密</span></a></h2><p>在本主题中，支持 <strong>全站加密</strong> 和 <strong>部分加密</strong> 等多种灵活的加密方式。</p><div class="hint-container warning"><p class="hint-container-title">提示</p><p>由于 <code>vuepress</code> 是静态站点，其自身限制的原因，<strong>加密</strong> 仅仅只是 看起来 看不到内容， 并且在 编译时，不再将 内容 预渲染到 <code>html</code> 中，但实际上 还是能够从 站点源文件 中获取到内容。 因此，不建议将 <strong>加密</strong> 功能 认为是 安全可靠的。</p><p>请尽量避免将 <strong>加密功能</strong> 应用于需要 <strong>严格保密</strong> 的内容 中。</p></div><p><strong>已解锁的文章，仅在当前会话中可见。</strong></p><h2 id="启用加密功能" tabindex="-1"><a class="header-anchor" href="#启用加密功能"><span>启用加密功能</span></a></h2><p>在 主题配置中，添加 <code>encrypt</code> 选项。</p>',
					6
				)),
			a(
				k,
				{ id: '23', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: t(({ value: l, isActive: n }) => [
						a(h, { name: 'vscode-icons:file-type-typescript' }),
						e[0] || (e[0] = i('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: t(
						({ value: l, isActive: n }) =>
							e[1] ||
							(e[1] = [
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
														'    encrypt'
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
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'      // more options...'
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
			e[11] ||
				(e[11] = i(
					'h2',
					{ id: '全站加密', tabindex: '-1' },
					[i('a', { class: 'header-anchor', href: '#全站加密' }, [i('span', null, '全站加密')])],
					-1
				)),
			e[12] ||
				(e[12] = i(
					'p',
					null,
					[
						s('有些情况下，你可能 需要对 全站进行加密。 因此，你可以通过 '),
						i('code', null, 'encrypt.global'),
						s(' 选项配置全站加密。 然后，通过配置 '),
						i('code', null, 'encrypt.admin'),
						s(' 选项，设置一个或多个密码。'),
					],
					-1
				)),
			a(
				k,
				{ id: '34', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: t(({ value: l, isActive: n }) => [
						a(h, { name: 'vscode-icons:file-type-typescript' }),
						e[2] || (e[2] = i('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: t(
						({ value: l, isActive: n }) =>
							e[3] ||
							(e[3] = [
								i(
									'div',
									{ class: 'language-ts', 'data-ext': 'ts', 'data-title': 'ts' },
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
														'    encrypt'
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
														'      global'
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
														'      admin'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': ['
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
														'123456'
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
														'],'
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
									],
									-1
								),
							])
					),
					_: 1,
				}
			),
			e[13] ||
				(e[13] = i(
					'h2',
					{ id: '部分加密', tabindex: '-1' },
					[i('a', { class: 'header-anchor', href: '#部分加密' }, [i('span', null, '部分加密')])],
					-1
				)),
			e[14] ||
				(e[14] = i(
					'p',
					null,
					[
						s('大多数情况下，你可能只需需要 加密 某一篇文章、某一个目录 等。 因此，你可以通过 '),
						i('code', null, 'encrypt.rules'),
						s(' 选项配置部分加密。'),
					],
					-1
				)),
			a(
				k,
				{ id: '45', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: t(({ value: l, isActive: n }) => [
						a(h, { name: 'vscode-icons:file-type-typescript' }),
						e[4] || (e[4] = i('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: t(
						({ value: l, isActive: n }) =>
							e[5] ||
							(e[5] = [
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
														'    encrypt'
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
														'      rules'
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
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'        // 可以是 md 文件的相对路径，对该文件加密'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"        '"
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'前端/基础.md'
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
														'123456'
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
														','
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'        // 可以是 文件夹的路径，对该目录下所有文章加密'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"        '"
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'/notes/vuepress-theme-plume/'
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
														'123456'
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
														','
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'        // 可以是 访问地址的请求路径，对该访问路径下所有文章加密'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"        '"
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'/vuepress-theme-plume/'
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
														'123456'
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
														','
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'        // 可以是 具体的某个页面的请求路径，对该页面加密'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"        '"
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'/article/f8dnci3/'
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
														'123456'
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
														','
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'        // 如果是 `^` 开头，则匹配该正则表达式的页面也会加密'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"        '"
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'^/(a|b)/'
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
														'123456'
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
														','
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
					_: 1,
				}
			),
			e[15] ||
				(e[15] = r(
					'<p><code>encrypt.rules</code> 的 <strong>键</strong> 将作为 匹配规则，<strong>值</strong> 将作为 该规则对应的密码，可以设置 一个或多个密码。</p><div class="hint-container tip"><p class="hint-container-title">说明</p><ul><li>密码 必须是 普通的字符串。</li><li>如果是 加密的是 整个目录，解锁时也是解锁整个目录，而不是解锁该目录下的某个文章。</li><li><code>encrypt.admin</code> 也可用于解锁 <strong>部分加密</strong> 的页面。</li><li>使用 <code>encrypt.admin</code> 解锁后，被认为是管理员访问，其它未解锁页面也默认解锁。</li></ul></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2>',
					3
				)),
			i('p', null, [
				e[7] || (e[7] = s('点击访问 ')),
				a(
					d,
					{ to: '/article/enx7c9s/' },
					{ default: t(() => e[6] || (e[6] = [s('加密文章，密码：123456')])), _: 1 }
				),
			]),
			e[16] ||
				(e[16] = r(
					'<h2 id="相关配置" tabindex="-1"><a class="header-anchor" href="#相关配置"><span>相关配置</span></a></h2><p>以下配置支持在多语言配置中使用。</p><h3 id="encryptglobaltext" tabindex="-1"><a class="header-anchor" href="#encryptglobaltext"><span>encryptGlobalText</span></a></h3><ul><li><p><strong>类型</strong>： <code>string</code></p></li><li><p><strong>默认值</strong>： <code>&#39;Only password can access this site&#39;</code></p></li><li><p><strong>说明</strong>：</p><p>全站加密时，提示信息。支持 HTML。如果你期望为访客提供获取密码的联系方式，你可能会需要这个配置。</p></li></ul><h3 id="encryptpagetext" tabindex="-1"><a class="header-anchor" href="#encryptpagetext"><span>encryptPageText</span></a></h3><ul><li><p><strong>类型</strong>： <code>string</code></p></li><li><p><strong>默认值</strong>： <code>&#39;Only password can access this page&#39;</code></p></li><li><p><strong>说明</strong>：</p><p>部分加密时，提示信息。支持 HTML。如果你期望为访客提供获取密码的联系方式，你可能会需要这个配置。</p></li></ul><h3 id="encryptbuttontext" tabindex="-1"><a class="header-anchor" href="#encryptbuttontext"><span>encryptButtonText</span></a></h3><ul><li><strong>类型</strong>： <code>string</code></li><li><strong>默认值</strong>： <code>&#39;Confirm&#39;</code></li><li><strong>说明</strong>： 确认按钮的文本</li></ul><h3 id="encryptplaceholder" tabindex="-1"><a class="header-anchor" href="#encryptplaceholder"><span>encryptPlaceholder</span></a></h3><ul><li><strong>类型</strong>： <code>string</code></li><li><strong>默认值</strong>： <code>&#39;Enter password&#39;</code></li><li><strong>说明</strong>： 密码输入框的占位符</li></ul><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1"><span>示例</span></a></h3>',
					11
				)),
			a(
				k,
				{ id: '178', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: t(({ value: l, isActive: n }) => [
						a(h, { name: 'vscode-icons:file-type-typescript' }),
						e[8] || (e[8] = i('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: t(
						({ value: l, isActive: n }) =>
							e[9] ||
							(e[9] = [
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
														'    locales'
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
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
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
														'        encryptButtonText'
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
														'Confirm'
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
														','
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'        encryptPlaceholder'
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
														'Enter password'
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
														','
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'        encryptGlobalText'
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
														'Only password can access this site'
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
														','
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'        encryptPageText'
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
														'Only password can access this page'
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
														','
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
					_: 1,
				}
			),
		])
	)
}
const v = g(y, [
		['render', u],
		['__file', 'index.html.vue'],
	]),
	D = JSON.parse(
		'{"path":"/blog/guide/features/encryption/","title":"加密","lang":"zh-CN","frontmatter":{"title":"加密","author":"pengzhanbo","icon":"mdi:encryption-outline","createTime":"2024/03/04 15:58:48","permalink":"/blog/guide/features/encryption/","description":"加密 在本主题中，支持 全站加密 和 部分加密 等多种灵活的加密方式。 提示 由于 vuepress 是静态站点，其自身限制的原因，加密 仅仅只是 看起来 看不到内容， 并且在 编译时，不再将 内容 预渲染到 html 中，但实际上 还是能够从 站点源文件 中获取到内容。 因此，不建议将 加密 功能 认为是 安全可靠的。 请尽量避免将 加密功能 应用于...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/features/encryption/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"加密"}],["meta",{"property":"og:description","content":"加密 在本主题中，支持 全站加密 和 部分加密 等多种灵活的加密方式。 提示 由于 vuepress 是静态站点，其自身限制的原因，加密 仅仅只是 看起来 看不到内容， 并且在 编译时，不再将 内容 预渲染到 html 中，但实际上 还是能够从 站点源文件 中获取到内容。 因此，不建议将 加密 功能 认为是 安全可靠的。 请尽量避免将 加密功能 应用于..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"加密\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":2.73,"words":819},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/功能/加密.md","bulletin":false}'
	)
export { v as comp, D as data }
