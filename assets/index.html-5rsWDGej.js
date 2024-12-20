import {
	_ as d,
	c as g,
	a as p,
	b as n,
	w as l,
	r,
	o as y,
	d as s,
	e as i,
} from './app-B_7CxFr0.js'
const c = {}
function A(v, a) {
	const k = r('VPIcon'),
		t = r('CodeTabs')
	return (
		y(),
		g('div', null, [
			a[6] ||
				(a[6] = p(
					'<p>主题提供了两种方式支持 内容搜索。</p><ul><li>本地内容搜索</li><li>Algolia DocSearch</li></ul><p>注意，请勿同时配置使用两种方式，同时配置时，只有 本地内容搜索 生效。</p><h2 id="本地内容搜索" tabindex="-1"><a class="header-anchor" href="#本地内容搜索"><span>本地内容搜索</span></a></h2><p>本地内容搜索由 <a href="https://github.com/pengzhanbo/vuepress-theme-plume/tree/main/plugins/plugin-search" target="_blank" rel="noopener noreferrer">@vuepress-plume/plugin-search</a> 插件提供支持。</p><p>该插件使用 <a href="https://github.com/lucaong/minisearch" target="_blank" rel="noopener noreferrer">minisearch</a> 进行内容搜索。</p><h3 id="启用" tabindex="-1"><a class="header-anchor" href="#启用"><span>启用</span></a></h3><p>主题默认 启用 本地内容搜索 功能。您也可以对其进行自定义配置。</p>',
					8
				)),
			n(
				t,
				{ id: '33', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: l(({ value: h, isActive: e }) => [
						n(k, { name: 'vscode-icons:file-type-typescript' }),
						a[0] || (a[0] = s('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: l(
						({ value: h, isActive: e }) =>
							a[1] ||
							(a[1] = [
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      search'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': {'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'        // more options'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'      }'
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
			a[7] ||
				(a[7] = p(
					'<p>该插件会根据你的页面，在本地生成搜索索引，然后在用户访问站点时加载搜索索引文件。 换句话说，这是一个轻量级的内置搜索能力，不会进行任何外部请求。</p><p>然而，当你的站点包含大量页面时，搜索索引文件也会变得非常大，它可能会拖慢你的页面加载速度。 在这种情况下，我们建议你使用更成熟的解决方案 - <a href="#algolia-docsearch">Algolia DocSearch</a> 。</p><h2 id="algolia-docsearch" tabindex="-1"><a class="header-anchor" href="#algolia-docsearch"><span>Algolia DocSearch</span></a></h2><p>使用 <a href="https://docsearch.algolia.com/" target="_blank" rel="noopener noreferrer">Algolia DocSearch</a> 提供支持的网站内容搜索插件</p><h3 id="启用-1" tabindex="-1"><a class="header-anchor" href="#启用-1"><span>启用</span></a></h3>',
					5
				)),
			n(
				t,
				{ id: '53', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: l(({ value: h, isActive: e }) => [
						n(k, { name: 'vscode-icons:file-type-typescript' }),
						a[2] || (a[2] = s('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: l(
						({ value: h, isActive: e }) =>
							a[3] ||
							(a[3] = [
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
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      docsearch'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': {'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'        // more options'
													),
												]),
												i(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'      }'
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
			a[8] ||
				(a[8] = p(
					`<h3 id="获取搜索索引" tabindex="-1"><a class="header-anchor" href="#获取搜索索引"><span>获取搜索索引</span></a></h3><p>你需要 <a href="https://docsearch.algolia.com/apply/" target="_blank" rel="noopener noreferrer">提交你的网站 URL</a> 来加入 DocSearch 项目。 当你的索引成功创建后， DocSearch 团队会将 <code>apiKey</code> 和 <code>indexName</code> 发送到你的邮箱。接下来，你就可以配置该插件，在 VuePress 中启用 DocSearch 了。</p><p>或者，你也可以 <a href="https://docsearch.algolia.com/docs/run-your-own/" target="_blank" rel="noopener noreferrer">运行你自己的爬虫</a> 来创建索引， 然后使用你自己的 <code>appId</code> ， <code>apiKey</code> 和 <code>indexName</code> 来配置该插件。</p><p>以下是本主题使用的 爬虫配置示例, 你可以前往 <a href="https://crawler.algolia.com/admin/crawlers/" target="_blank" rel="noopener noreferrer">Algolia Crawler</a> 根据你的需求进行修改:</p><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark has-highlighted vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Crawler</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  appId</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">YOUR_APP_ID</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  apiKey</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">YOUR_API_KEY</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  rateLimit</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">8</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  startUrls</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 这是 Algolia 开始抓取网站的初始地址</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 如果你的网站被分为数个独立部分，你可能需要在此设置多个入口链接</span></span>
<span class="line highlighted"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">    &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://YOUR_WEBSITE_URL/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  ],</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  renderJavaScript</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">false</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  sitemaps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 主题默认会生成 sitemap，这里需要替换为你的域名链接</span></span>
<span class="line highlighted"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">    &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://YOUR_WEBSITE_URL/sitemap.xml</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  ],</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  ignoreCanonicalTo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  discoveryPatterns</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 这是 Algolia 抓取 URL 的范围</span></span>
<span class="line highlighted"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">    &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://YOUR_WEBSITE_URL/**</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  ],</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 爬虫执行的计划时间，可根据文档更新频率设置</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  schedule</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">at 02:00 every 1 day</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  actions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 你可以拥有多个 action，特别是你在一个域名下部署多个文档时</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 使用适当的名称为索引命名</span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      indexName</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">YOUR_INDEX_NAME</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 索引生效的路径</span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      pathsToMatch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://YOUR_WEBSITE_URL/**</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">], </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">      recordExtractor</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: ({ </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">helpers</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }) =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // vuepress-theme-plume 的选项</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> helpers</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docsearch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          recordProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: { </span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">            lvl1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">.plume-content h1</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">            content</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">.plume-content p, .plume-content li</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">            lvl0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: { </span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">              selectors</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [ </span></span>
<span class="line highlighted"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">                &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">.sidebar-item.is-active p</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span></span>
<span class="line highlighted"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">                &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">.content-container .page-title</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span></span>
<span class="line highlighted"><span style="--shiki-light:#999999;--shiki-dark:#666666;">              ], </span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">              defaultValue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Documentation</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span></span>
<span class="line highlighted"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            }, </span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">            lvl2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">.plume-content h2</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">            lvl3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">.plume-content h3</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">            lvl4</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">.plume-content h4</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">            lvl5</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">.plume-content h5</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span></span>
<span class="line highlighted"><span style="--shiki-light:#999999;--shiki-dark:#666666;">          }, </span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          indexHeadings</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          aggregateContent</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          recordVersion</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">v3</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  ],</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  initialIndexSettings</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 控制索引如何被初始化，这仅当索引尚未生成时有效</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 你可能需要在修改后手动删除并重新生成新的索引</span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    YOUR_INDEX_NAME</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: { </span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      attributesForFaceting</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">type</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">lang</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">], </span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      attributesToRetrieve</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">hierarchy</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">content</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">anchor</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">url</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">url_without_anchor</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">type</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      ],</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      attributesToHighlight</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">hierarchy</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">hierarchy_camel</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">content</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">],</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      attributesToSnippet</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">content:10</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">],</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      camelCaseAttributes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">hierarchy</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">hierarchy_radio</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">content</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">],</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      searchableAttributes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy_radio_camel.lvl0)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy_radio.lvl0)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy_radio_camel.lvl1)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy_radio.lvl1)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy_radio_camel.lvl2)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy_radio.lvl2)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy_radio_camel.lvl3)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy_radio.lvl3)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy_radio_camel.lvl4)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy_radio.lvl4)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy_radio_camel.lvl5)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy_radio.lvl5)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy_radio_camel.lvl6)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy_radio.lvl6)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy_camel.lvl0)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy.lvl0)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy_camel.lvl1)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy.lvl1)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy_camel.lvl2)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy.lvl2)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy_camel.lvl3)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy.lvl3)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy_camel.lvl4)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy.lvl4)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy_camel.lvl5)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy.lvl5)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy_camel.lvl6)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unordered(hierarchy.lvl6)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">content</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      ],</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      distinct</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      attributeForDistinct</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">url</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      customRanking</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">desc(weight.pageRank)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">desc(weight.level)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">asc(weight.position)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      ],</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      ranking</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">words</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">filters</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">typo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">attribute</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">proximity</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">exact</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">custom</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      ],</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      highlightPreTag</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&lt;span class=&quot;algolia-docsearch-suggestion--highlight&quot;&gt;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      highlightPostTag</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&lt;/span&gt;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      minWordSizefor1Typo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      minWordSizefor2Typos</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">7</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      allowTyposOnNumericTokens</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">false</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      minProximity</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      ignorePlurals</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      advancedSyntax</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      attributeCriteriaComputedByMinProximity</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      removeWordsIfNoResults</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">allOptional</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>recordProps</code> 部分的配置选项用于本主题进行索引的爬取配置。</p><h3 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h3><p>完整配置请查看 <a href="https://ecosystem.vuejs.press/zh/plugins/search/docsearch.html" target="_blank" rel="noopener noreferrer">文档</a></p><h3 id="配置示例" tabindex="-1"><a class="header-anchor" href="#配置示例"><span>配置示例</span></a></h3><p>以下是本主题使用的配置：</p>`,
					10
				)),
			n(
				t,
				{ id: '86', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: l(({ value: h, isActive: e }) => [
						n(k, { name: 'vscode-icons:file-type-typescript' }),
						a[4] || (a[4] = s('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: l(
						({ value: h, isActive: e }) =>
							a[5] ||
							(a[5] = [
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
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'      docsearch'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': {'
														),
													]),
													i(`
`),
													s('span', { class: 'line highlighted' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'        appId'
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
															'YOUR_APP_ID'
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
													i(`
`),
													s('span', { class: 'line highlighted' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'        apiKey'
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
															'YOUR_API_KEY'
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
													i(`
`),
													s('span', { class: 'line highlighted' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'        indexName'
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
															'YOUR_INDEX_NAME'
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
													i(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'      }'
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
					_: 1,
				}
			),
		])
	)
}
const u = d(c, [
		['render', A],
		['__file', 'index.html.vue'],
	]),
	D = JSON.parse(
		'{"path":"/blog/guide/features/content-search/","title":"内容搜索","lang":"zh-CN","frontmatter":{"title":"内容搜索","author":"pengzhanbo","icon":"material-symbols:search","createTime":"2024/03/04 09:58:39","permalink":"/blog/guide/features/content-search/","description":"主题提供了两种方式支持 内容搜索。 本地内容搜索 Algolia DocSearch 注意，请勿同时配置使用两种方式，同时配置时，只有 本地内容搜索 生效。 本地内容搜索 本地内容搜索由 @vuepress-plume/plugin-search 插件提供支持。 该插件使用 minisearch 进行内容搜索。 启用 主题默认 启用 本地内容搜索 功能...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/features/content-search/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"内容搜索"}],["meta",{"property":"og:description","content":"主题提供了两种方式支持 内容搜索。 本地内容搜索 Algolia DocSearch 注意，请勿同时配置使用两种方式，同时配置时，只有 本地内容搜索 生效。 本地内容搜索 本地内容搜索由 @vuepress-plume/plugin-search 插件提供支持。 该插件使用 minisearch 进行内容搜索。 启用 主题默认 启用 本地内容搜索 功能..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"内容搜索\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":3.55,"words":1066},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/功能/内容搜索.md","bulletin":false}'
	)
export { u as comp, D as data }
