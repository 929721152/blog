import { _ as d, c, d as s, e, b as n, w as t, a as h, r as o, o as k } from './app-B_7CxFr0.js'
const g = {}
function m(u, i) {
	const r = o('VPIcon'),
		p = o('CodeTabs')
	return (
		k(),
		c('div', null, [
			i[10] ||
				(i[10] = s(
					'h2',
					{ id: '概述', tabindex: '-1' },
					[s('a', { class: 'header-anchor', href: '#概述' }, [s('span', null, '概述')])],
					-1
				)),
			i[11] ||
				(i[11] = s(
					'p',
					null,
					[
						e('文章评论由 '),
						s(
							'a',
							{
								href: 'https://ecosystem.vuejs.press/zh/plugins/blog/comment/',
								target: '_blank',
								rel: 'noopener noreferrer',
							},
							'@vuepress/plugin-comment'
						),
						e(' 提供支持。'),
					],
					-1
				)),
			i[12] || (i[12] = s('p', null, '主题已内置插件，你无需重新安装即可使用。', -1)),
			i[13] || (i[13] = s('p', null, '在本主题中，通过以下字段进行配置：', -1)),
			n(
				p,
				{ id: '12', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: t(({ value: a, isActive: l }) => [
						n(r, { name: 'vscode-icons:file-type-typescript' }),
						i[0] || (i[0] = s('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: t(
						({ value: a, isActive: l }) =>
							i[1] ||
							(i[1] = [
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
												e(`
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
												e(`
`),
												s('span', { class: 'line' }),
												e(`
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
												e(`
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
												e(`
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
												e(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      comment'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': {'
													),
												]),
												e(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'        // 服务提供商'
													),
												]),
												e(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'        provider'
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
														"''"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														', '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'// "Artalk" | "Giscus" | "Twikoo" | "Waline"'
													),
												]),
												e(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'        // 是否默认启用评论'
													),
												]),
												e(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'        comment'
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
														','
													),
												]),
												e(`
`),
												s('span', { class: 'line' }),
												e(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'        // 其它配置，根据服务提供商进行配置'
													),
												]),
												e(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'        // ...'
													),
												]),
												e(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'      }'
													),
												]),
												e(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    }'
													),
												]),
												e(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  })'
													),
												]),
												e(`
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
			i[14] ||
				(i[14] = h(
					'<h3 id="服务提供商" tabindex="-1"><a class="header-anchor" href="#服务提供商"><span>服务提供商</span></a></h3><p><a href="https://ecosystem.vuejs.press/zh/plugins/blog/comment/" target="_blank" rel="noopener noreferrer">@vuepress/plugin-comment</a> 支持 <code>&quot;Artalk&quot; | &quot;Giscus&quot; | &quot;Twikoo&quot; | &quot;Waline&quot;</code> 等多种不同的评论服务提供商。</p><p>你可以根据自己的需求进行配置。</p><ul><li><code>Giscus</code> 是一个基于 GitHub Discussion 的评论系统，启用简便。<a href="https://ecosystem.vuejs.press/zh/plugins/blog/comment/giscus/" target="_blank" rel="noopener noreferrer">查看文档</a></li><li><code>Waline</code> 是一个 需要后端的评论系统，安全性较高。<a href="https://ecosystem.vuejs.press/zh/plugins/blog/comment/waline/" target="_blank" rel="noopener noreferrer">查看文档</a></li><li><code>Twikoo</code> 一个简洁、安全、免费的静态网站评论系统，基于 腾讯云开发。<a href="https://ecosystem.vuejs.press/zh/plugins/blog/comment/twikoo/" target="_blank" rel="noopener noreferrer">查看文档</a></li><li><code>Artalk</code> 是一款简洁的自托管评论系统，你可以在服务器上轻松部署并置入前端页面中。<a href="https://ecosystem.vuejs.press/zh/plugins/blog/comment/artalk/" target="_blank" rel="noopener noreferrer">查看文档</a></li></ul><div class="hint-container tip"><p class="hint-container-title">推荐的评论服务</p><ul><li>面向程序员和开发人员: Giscus</li><li>面向公众: Waline</li></ul></div><div class="hint-container note"><p class="hint-container-title">注</p><p>示例 Fork 自 <a href="https://ecosystem.vuejs.press/zh/plugins/blog/comment/" target="_blank" rel="noopener noreferrer">@vuepress/plugin-comment</a>, 遵循 <a href="https://github.com/vuepress/ecosystem/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">MIT</a> 许可证。</p></div><h2 id="giscus" tabindex="-1"><a class="header-anchor" href="#giscus"><span>Giscus</span></a></h2><p>Giscus 是一个基于 GitHub Discussion 的评论系统，启用简便。</p><h3 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作"><span>准备工作</span></a></h3><ol><li><p>你需要创建一个公开仓库，并开启评论区，以作为评论存放的地点</p></li><li><p>你需要安装 <a href="https://github.com/apps/giscus" target="_blank" rel="noopener noreferrer">Giscus App</a>，使其有权限访问对应仓库。</p></li><li><p>在完成以上步骤后，请前往 <a href="https://giscus.app/zh-CN" target="_blank" rel="noopener noreferrer">Giscus 页面</a> 获得你的设置。</p><p>你只需要填写仓库和 Discussion 分类，之后滚动到页面下部的 “启用 giscus” 部分， 获取 <code>data-repo</code>, <code>data-repo-id</code>, <code>data-category</code> 和 <code>data-category-id</code> 这四个属性。</p></li></ol><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3><p>请配置 <code>provider: &#39;Giscus&#39;</code> 并将 <code>data-repo</code>, <code>data-repo-id</code>, <code>data-category</code> 和 <code>data-category-id</code> 作为插件选项传入 <code>repo</code>, <code>repoId</code>, <code>category</code>, <code>categoryId</code> 。</p>',
					12
				)),
			n(
				p,
				{ id: '102', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: t(({ value: a, isActive: l }) => [
						n(r, { name: 'vscode-icons:file-type-typescript' }),
						i[2] || (i[2] = s('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: t(
						({ value: a, isActive: l }) =>
							i[3] ||
							(i[3] = [
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
													e(`
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
													e(`
`),
													s('span', { class: 'line' }),
													e(`
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
													e(`
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
													e(`
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
													e(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'      comment'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': {'
														),
													]),
													e(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'        provider'
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
															'Giscus'
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
															'// "Artalk“ | "Giscus" | "Twikoo" | "Waline"'
														),
													]),
													e(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'        comment'
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
															','
														),
													]),
													e(`
`),
													s('span', { class: 'line diff add' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'        repo'
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
															'Your_Repo'
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
													]),
													e(`
`),
													s('span', { class: 'line diff add' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'        repoId'
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
															'Your_RepoId'
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
													]),
													e(`
`),
													s('span', { class: 'line diff add' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'        category'
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
															'Your_Category'
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
													]),
													e(`
`),
													s('span', { class: 'line diff add' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'        categoryId'
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
															'Your_CategoryId'
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
													]),
													e(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'      }'
														),
													]),
													e(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'    }'
														),
													]),
													e(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'  })'
														),
													]),
													e(`
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
			i[15] ||
				(i[15] = h(
					'<h3 id="主题" tabindex="-1"><a class="header-anchor" href="#主题"><span>主题</span></a></h3><p>默认情况下，Giscus 使用 <code>light</code> 或 <code>dark</code> 主题 (基于夜间模式状态)。</p><p>如果你想在日间模式和夜间模式下自定义主题，你可以设置 <code>lightTheme</code> 和 <code>darkTheme</code> 选项， 使用内置主题关键字或以 <code>https://</code> 开头的自定义 css 链接。</p><h2 id="waline" tabindex="-1"><a class="header-anchor" href="#waline"><span>Waline</span></a></h2><p>一个有后端的安全评论系统。</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><p>如果你想要在主题中使用 Waline， 你需要先安装 <code>@waline/client</code>。</p>',
					7
				)),
			n(
				p,
				{ id: '128', data: [{ id: 'pnpm' }, { id: 'npm' }, { id: 'yarn' }] },
				{
					title0: t(({ value: a, isActive: l }) => [
						n(r, { name: 'vscode-icons:file-type-light-pnpm' }),
						i[4] || (i[4] = s('span', null, 'pnpm', -1)),
					]),
					title1: t(({ value: a, isActive: l }) => [
						n(r, { name: 'logos:npm-icon' }),
						i[5] || (i[5] = s('span', null, 'npm', -1)),
					]),
					title2: t(({ value: a, isActive: l }) => [
						n(r, { name: 'vscode-icons:file-type-yarn' }),
						i[6] || (i[6] = s('span', null, 'yarn', -1)),
					]),
					tab0: t(
						({ value: a, isActive: l }) =>
							i[7] ||
							(i[7] = [
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
														' add'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' @waline/client'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab1: t(
						({ value: a, isActive: l }) =>
							i[8] ||
							(i[8] = [
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
														' i'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' @waline/client'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab2: t(
						({ value: a, isActive: l }) =>
							i[9] ||
							(i[9] = [
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
														' add'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' @waline/client'
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
			i[16] ||
				(i[16] = h(
					'<h3 id="leancloud-设置-数据库" tabindex="-1"><a class="header-anchor" href="#leancloud-设置-数据库"><span>LeanCloud 设置 (数据库)</span></a></h3><ol><li><p><a href="https://console.leancloud.app/login" target="_blank" rel="noopener noreferrer">登录</a> 或 <a href="https://console.leancloud.app/register" target="_blank" rel="noopener noreferrer">注册</a> <code>LeanCloud 国际版</code> 并进入 <a href="https://console.leancloud.app/apps" target="_blank" rel="noopener noreferrer">控制台</a></p></li><li><p>点击左上角 <a href="https://console.leancloud.app/apps" target="_blank" rel="noopener noreferrer">创建应用</a> 并起一个你喜欢的名字 (请选择免费的开发版):</p><p><img src="https://ecosystem.vuejs.press/blog/assets/leancloud-1-D6GvqV4-.png" alt="创建应用"></p></li><li><p>进入应用，选择左下角的 <code>设置</code> &gt; <code>应用 Key</code>。你可以看到你的 <code>APP ID</code>,<code>APP Key</code> 和 <code>Master Key</code>。 请记录它们，以便后续使用。</p><p><img src="https://ecosystem.vuejs.press/blog/assets/leancloud-2-B5wKvXiY.png" alt="ID 和 Key"></p></li></ol><div class="hint-container warning"><p class="hint-container-title">国内版需要完成备案接入</p><p>如果你正在使用 Leancloud 国内版 (<a href="https://leancloud.cn" target="_blank" rel="noopener noreferrer">leancloud.cn</a>)，我们推荐你切换到国际版 (<a href="https://leancloud.app" target="_blank" rel="noopener noreferrer">leancloud.app</a>)。 否则，你需要为应用额外绑定<strong>已备案</strong>的域名，同时购买独立 IP 并完成备案接入:</p><ul><li>登录国内版并进入需要使用的应用</li><li>选择 <code>设置</code> &gt; <code>域名绑定</code> &gt; <code>API 访问域名</code> &gt; <code>绑定新域名</code> &gt; 输入域名 &gt; <code>确定</code>。</li><li>按照页面上的提示按要求在 DNS 上完成 CNAME 解析。</li><li>购买独立 IP 并提交工单完成备案接入。(独立 IP 目前价格为 ￥ 50/个/月)</li></ul><p><img src="https://ecosystem.vuejs.press/blog/assets/leancloud-3-D7gbeXS0.png" alt="域名设置"></p></div><h3 id="vercel-部署-服务端" tabindex="-1"><a class="header-anchor" href="#vercel-部署-服务端"><span>Vercel 部署 (服务端)</span></a></h3><p><a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample" target="_blank" rel="noopener noreferrer"><img src="https://vercel.com/button" alt="Vercel"></a></p><ol><li><p>点击上方按钮，跳转至 Vercel 进行 Server 端部署。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>如果你未登录的话，Vercel 会让你注册或登录，请使用 GitHub 账户进行快捷登录。</p></div></li><li><p>输入一个你喜欢的 Vercel 项目名称并点击 <code>Create</code> 继续:</p><p><img src="https://ecosystem.vuejs.press/images/comment/vercel-1.png" alt="创建项目"></p></li><li><p>此时 Vercel 会基于 Waline 模板帮助你新建并初始化仓库，仓库名为你之前输入的项目名。</p><p><img src="https://ecosystem.vuejs.press/images/comment/vercel-3.png" alt="deploy"></p><p>一两分钟后，满屏的烟花会庆祝你部署成功。此时点击 <code>Go to Dashboard</code> 可以跳转到应用的控制台。</p><p><img src="https://ecosystem.vuejs.press/images/comment/vercel-4.png" alt="deploy"></p></li><li><p>点击顶部的 <code>Settings</code> - <code>Environment Variables</code> 进入环境变量配置页， 并配置三个环境变量 <code>LEAN_ID</code>, <code>LEAN_KEY</code> 和 <code>LEAN_MASTER_KEY</code> 。 它们的值分别对应上一步在 LeanCloud 中获得的 <code>APP ID</code>, <code>APP KEY</code>, <code>Master Key</code>。</p><p><img src="https://ecosystem.vuejs.press/images/comment/vercel-5.png" alt="设置环境变量"></p><div class="hint-container note"><p class="hint-container-title">注</p><p>如果你使用 LeanCloud 国内版，请额外配置 <code>LEAN_SERVER</code> 环境变量，值为你绑定好的域名。</p></div></li><li><p>环境变量配置完成之后点击顶部的 <code>Deployments</code> 点击顶部最新的一次部署右侧的 <code>Redeploy</code> 按钮进行重新部署。该步骤是为了让刚才设置的环境变量生效。</p><p><img src="https://ecosystem.vuejs.press/images/comment/vercel-6.png" alt="redeploy"></p></li><li><p>此时会跳转到 <code>Overview</code> 界面开始部署，等待片刻后 <code>STATUS</code> 会变成 <code>Ready</code>。此时请点击 <code>Visit</code> ，即可跳转到部署好的网站地址，此地址即为你的服务端地址。</p><p><img src="https://ecosystem.vuejs.press/images/comment/vercel-7.png" alt="redeploy success"></p></li></ol><h3 id="绑定域名-可选" tabindex="-1"><a class="header-anchor" href="#绑定域名-可选"><span>绑定域名 (可选)</span></a></h3><ol><li><p>点击顶部的 <code>Settings</code> - <code>Domains</code> 进入域名配置页</p></li><li><p>输入需要绑定的域名并点击 <code>Add</code></p><p><img src="https://ecosystem.vuejs.press/images/comment/vercel-8.png" alt="Add domain"></p></li><li><p>在域名服务器商处添加新的 <code>CNAME</code> 解析记录</p><table><thead><tr><th>Type</th><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>CNAME</td><td>example</td><td>cname.vercel-dns.com</td></tr></tbody></table></li><li><p>等待生效，你可以通过自己的域名来访问了🎉</p><ul><li>评论系统：example.your-domain.com</li><li>评论管理：example.your-domain.com/ui</li></ul><p><img src="https://ecosystem.vuejs.press/images/comment/vercel-9.png" alt="success"></p></li></ol><h3 id="客户端" tabindex="-1"><a class="header-anchor" href="#客户端"><span>客户端</span></a></h3><h4 id="使用插件" tabindex="-1"><a class="header-anchor" href="#使用插件"><span>使用插件</span></a></h4><p>在插件选项中设置 <code>provider: &quot;Waline&quot;</code>，同时设置服务端地址 <code>serverURL</code> 为上一步获取到的值。</p><p>此时，将 <code>&lt;CommentService&gt;</code> 组件放置在你网站中合适的位置 (通常是页面的底部)，即可使用 Waline 评论功能。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>你也可以传入其他 Waline 支持的选项 (除了 <code>el</code>)。详情请见 <a href="https://ecosystem.vuejs.press/zh/plugins/blog/comment/waline/config.html" target="_blank" rel="noopener noreferrer">Waline 配置</a></p></div><h3 id="评论管理-管理端" tabindex="-1"><a class="header-anchor" href="#评论管理-管理端"><span>评论管理 (管理端)</span></a></h3><ol><li>部署完成后，请访问 <code>&lt;serverURL&gt;/ui/register</code> 进行注册。首个注册的人会被设定成管理员。</li><li>管理员登陆后，即可看到评论管理界面。在这里可以修改、标记或删除评论。</li><li>用户也可通过评论框注册账号，登陆后会跳转到自己的档案页。</li></ol>',
					15
				)),
		])
	)
}
const v = d(g, [
		['render', m],
		['__file', 'index.html.vue'],
	]),
	b = JSON.parse(
		'{"path":"/blog/guide/features/comments/","title":"评论","lang":"zh-CN","frontmatter":{"title":"评论","author":"pengzhanbo","icon":"la:comment","createTime":"2024/03/04 11:58:59","permalink":"/blog/guide/features/comments/","description":"概述 文章评论由 @vuepress/plugin-comment 提供支持。 主题已内置插件，你无需重新安装即可使用。 在本主题中，通过以下字段进行配置： 服务提供商 @vuepress/plugin-comment 支持 \\"Artalk\\" | \\"Giscus\\" | \\"Twikoo\\" | \\"Waline\\" 等多种不同的评论服务提供商。 你可以根据自己...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/features/comments/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"评论"}],["meta",{"property":"og:description","content":"概述 文章评论由 @vuepress/plugin-comment 提供支持。 主题已内置插件，你无需重新安装即可使用。 在本主题中，通过以下字段进行配置： 服务提供商 @vuepress/plugin-comment 支持 \\"Artalk\\" | \\"Giscus\\" | \\"Twikoo\\" | \\"Waline\\" 等多种不同的评论服务提供商。 你可以根据自己..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://ecosystem.vuejs.press/blog/assets/leancloud-1-D6GvqV4-.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"评论\\",\\"image\\":[\\"https://ecosystem.vuejs.press/blog/assets/leancloud-1-D6GvqV4-.png\\",\\"https://ecosystem.vuejs.press/blog/assets/leancloud-2-B5wKvXiY.png\\",\\"https://ecosystem.vuejs.press/blog/assets/leancloud-3-D7gbeXS0.png\\",\\"https://vercel.com/button\\",\\"https://ecosystem.vuejs.press/images/comment/vercel-1.png\\",\\"https://ecosystem.vuejs.press/images/comment/vercel-3.png\\",\\"https://ecosystem.vuejs.press/images/comment/vercel-4.png\\",\\"https://ecosystem.vuejs.press/images/comment/vercel-5.png\\",\\"https://ecosystem.vuejs.press/images/comment/vercel-6.png\\",\\"https://ecosystem.vuejs.press/images/comment/vercel-7.png\\",\\"https://ecosystem.vuejs.press/images/comment/vercel-8.png\\",\\"https://ecosystem.vuejs.press/images/comment/vercel-9.png\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":5.46,"words":1638},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/功能/评论.md","bulletin":false}'
	)
export { v as comp, b as data }
