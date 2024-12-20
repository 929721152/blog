import {
	_ as o,
	c,
	a as t,
	d as s,
	b as e,
	w as n,
	e as a,
	r as p,
	o as g,
} from './app-B_7CxFr0.js'
const u = {}
function A(m, i) {
	const l = p('RouteLink'),
		h = p('VPIcon'),
		r = p('CodeTabs')
	return (
		g(),
		c('div', null, [
			i[13] ||
				(i[13] = t(
					'<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>主题内置的代码高亮插件， 对代码块进行代码高亮。</p><p>主题 使用 <a href="https://github.com/shikijs/shiki" target="_blank" rel="noopener noreferrer">Shiki</a> 在 Markdown 代码块中使用彩色文本实现语法高亮。 Shiki 支持多种编程语言。</p><p>在 Shiki 的代码仓库中，可以找到 <a href="https://shiki.style/languages" target="_blank" rel="noopener noreferrer">合法的编程语言列表</a> 。</p><p>关联插件： <a href="https://github.com/pengzhanbo/vuepress-theme-plume/tree/main/plugins/plugin-shikiji" target="_blank" rel="noopener noreferrer">@vuepress-plume/plugin-shikiji</a></p><details class="hint-container details"><summary>为什么不用 官方的 @vuepress/plugin-shiki ？</summary><p>你可以认为本插件是 官方 <a href="https://ecosystem.vuejs.press/zh/plugins/shiki.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-shiki</a> 的 一个分支版本，但本插件更为激进，支持更多新的特性。</p><p>同时，我也是 <a href="https://ecosystem.vuejs.press/zh/plugins/shiki.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-shiki</a> 的主要维护者之一 ，在 <code>@vuepress-plume/plugin-shikiji</code> 插件中新增的试验性的新特性，会在未来合适的时候合并到 官方插件中。</p></details><h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性"><span>特性</span></a></h2>',
					7
				)),
			s('ul', null, [
				s('li', null, [
					e(
						l,
						{
							to: '/notes/theme/blog/guide/%E4%BB%A3%E7%A0%81/%E7%89%B9%E6%80%A7%E6%94%AF%E6%8C%81.html#%E5%9C%A8%E4%BB%A3%E7%A0%81%E5%9D%97%E4%B8%AD%E5%AE%9E%E7%8E%B0%E8%A1%8C%E9%AB%98%E4%BA%AE',
						},
						{ default: n(() => i[0] || (i[0] = [a('代码行高亮')])), _: 1 }
					),
				]),
				s('li', null, [
					e(
						l,
						{
							to: '/notes/theme/blog/guide/%E4%BB%A3%E7%A0%81/%E7%89%B9%E6%80%A7%E6%94%AF%E6%8C%81.html#%E4%BB%A3%E7%A0%81%E5%9D%97%E4%B8%AD%E8%81%9A%E7%84%A6',
						},
						{ default: n(() => i[1] || (i[1] = [a('代码聚焦')])), _: 1 }
					),
				]),
				s('li', null, [
					e(
						l,
						{
							to: '/notes/theme/blog/guide/%E4%BB%A3%E7%A0%81/%E7%89%B9%E6%80%A7%E6%94%AF%E6%8C%81.html#%E4%BB%A3%E7%A0%81%E5%9D%97%E4%B8%AD%E7%9A%84%E9%A2%9C%E8%89%B2%E5%B7%AE%E5%BC%82',
						},
						{ default: n(() => i[2] || (i[2] = [a('代码对比差异')])), _: 1 }
					),
				]),
				s('li', null, [
					e(
						l,
						{
							to: '/notes/theme/blog/guide/%E4%BB%A3%E7%A0%81/%E7%89%B9%E6%80%A7%E6%94%AF%E6%8C%81.html#%E9%AB%98%E4%BA%AE-%E9%94%99%E8%AF%AF-%E5%92%8C-%E8%AD%A6%E5%91%8A',
						},
						{ default: n(() => i[3] || (i[3] = [a('代码高亮“错误”和“警告”')])), _: 1 }
					),
				]),
				s('li', null, [
					e(
						l,
						{
							to: '/notes/theme/blog/guide/%E4%BB%A3%E7%A0%81/%E7%89%B9%E6%80%A7%E6%94%AF%E6%8C%81.html#%E4%BB%A3%E7%A0%81%E5%9D%97%E4%B8%AD-%E8%AF%8D%E9%AB%98%E4%BA%AE',
						},
						{ default: n(() => i[4] || (i[4] = [a('代码词高亮')])), _: 1 }
					),
				]),
				s('li', null, [
					e(
						l,
						{
							to: '/notes/theme/blog/guide/%E4%BB%A3%E7%A0%81/%E7%89%B9%E6%80%A7%E6%94%AF%E6%8C%81.html#%E6%8A%98%E5%8F%A0%E4%BB%A3%E7%A0%81%E5%9D%97',
						},
						{ default: n(() => i[5] || (i[5] = [a('代码块折叠')])), _: 1 }
					),
				]),
				s('li', null, [
					e(
						l,
						{ to: '/notes/theme/blog/guide/%E4%BB%A3%E7%A0%81/twoslash.html#twoslash' },
						{ default: n(() => i[6] || (i[6] = [a('twoslash')])), _: 1 }
					),
					i[7] || (i[7] = a(' ：在代码块内提供内联类型提示。')),
				]),
			]),
			i[14] ||
				(i[14] = s(
					'h2',
					{ id: '配置', tabindex: '-1' },
					[s('a', { class: 'header-anchor', href: '#配置' }, [s('span', null, '配置')])],
					-1
				)),
			i[15] || (i[15] = s('p', null, '默认配置：', -1)),
			e(
				r,
				{ id: '69', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: n(({ value: k, isActive: d }) => [
						e(h, { name: 'vscode-icons:file-type-typescript' }),
						i[8] || (i[8] = s('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: n(
						({ value: k, isActive: d }) =>
							i[9] ||
							(i[9] = [
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
												a(`
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
												a(`
`),
												s('span', { class: 'line' }),
												a(`
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
												a(`
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
												a(`
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
												a(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      shiki'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': {'
													),
												]),
												a(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'        theme'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': { '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'light'
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
														'vitesse-light'
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
														'dark'
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
														'vitesse-dark'
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
												a(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'      },'
													),
												]),
												a(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    }'
													),
												]),
												a(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  }),'
													),
												]),
												a(`
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
			i[16] ||
				(i[16] = t(
					`<h3 id="theme" tabindex="-1"><a class="header-anchor" href="#theme"><span>theme</span></a></h3><ul><li>类型: <code>string | { light: string, dark: string }</code></li><li>默认值: <code>{ light: &#39;vitesse-light&#39;, dark: &#39;vitesse-dark&#39; }</code></li></ul><p>代码高亮主题，支持 浅色/暗色 双主题。</p><p>可在 支持的 <a href="https://shiki.style/themes" target="_blank" rel="noopener noreferrer">主题列表</a> 中选择你喜欢的主题。</p><h3 id="languages" tabindex="-1"><a class="header-anchor" href="#languages"><span>languages</span></a></h3><ul><li>类型: <code>string[]</code></li><li>默认值: <code>[]</code></li></ul><p>需要高亮的编程语言， 例如 <code>javascript</code>、<code>typescript</code>、<code>python</code>、<code>java</code>、<code>c++</code>、<code>c#</code>等。 默认会根据代码块的语言自动识别。</p><p>在 Shiki 的代码仓库中，可以找到 <a href="https://shiki.style/languages" target="_blank" rel="noopener noreferrer">合法的编程语言列表</a> 。</p><h3 id="defaulthighlightlang" tabindex="-1"><a class="header-anchor" href="#defaulthighlightlang"><span>defaultHighlightLang</span></a></h3><ul><li>类型： <code>string</code></li><li>默认值： <code>text</code></li></ul><p>默认高亮的编程语言。当代码块未指定语言时使用。</p><h3 id="linenumbers" tabindex="-1"><a class="header-anchor" href="#linenumbers"><span>lineNumbers</span></a></h3><ul><li>类型：<code>boolean | number</code></li><li>默认值： <code>true</code></li></ul><p>是否显示行号。</p><p><code>true</code>： 显示行号<br><code>false</code>： 不显示行号<br><code>number</code>： 指定需要显式代码行号的最小行数。</p><h3 id="copycode" tabindex="-1"><a class="header-anchor" href="#copycode"><span>copyCode</span></a></h3><ul><li>类型: <code>boolean | CopyCodeOptions</code></li><li>默认值： <code>true</code></li></ul><p>是否允许复制代码。启用时，会在代码块右侧显示复制按钮。</p><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> CopyCodeOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 复制成功后提示文本持续时间</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">default</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> 2000</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  duration</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 多语言配置</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  locales</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    [</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">localePath</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]: {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">       * 复制按钮标题</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">       *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">       * </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">default</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Copy code</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">       */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      title</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">       * 复制成功提示</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">       *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">       * </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">default</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Copied</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">       */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      copied</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="twoslash" tabindex="-1"><a class="header-anchor" href="#twoslash"><span>twoslash</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>实验性功能，是否启用 对 <code>typescript</code> 和 <code>vue</code> 语言的 类型提示 支持。</p>`,
					22
				)),
			s('p', null, [
				i[11] || (i[11] = a('查看 ')),
				e(
					l,
					{ to: '/blog/guide/markdown/experiment/#twoslash' },
					{ default: n(() => i[10] || (i[10] = [a('twoslash')])), _: 1 }
				),
				i[12] || (i[12] = a(' 了解更多信息。')),
			]),
			i[17] ||
				(i[17] = t(
					`<h3 id="whitespace" tabindex="-1"><a class="header-anchor" href="#whitespace"><span>whitespace</span></a></h3><ul><li>类型: <code>boolean | &#39;all&#39; | &#39;boundary&#39; | &#39;trailing&#39;</code></li><li>默认值: <code>false</code></li></ul><p>将空白字符（Tab 和空格）渲染为单独的标签（具有 tab 或 space 类名）。</p><p>效果：</p><div class="language-xml" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">catalog</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">book</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Everyday</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Italian</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">book</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">catalog</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><h3 id="collapselines" tabindex="-1"><a class="header-anchor" href="#collapselines"><span>collapseLines</span></a></h3><ul><li>类型: <code>boolean | number</code></li><li>默认值： <code>false</code></li></ul><p>将代码块折叠到指定行数。</p><h3 id="codetransformers" tabindex="-1"><a class="header-anchor" href="#codetransformers"><span>codeTransformers</span></a></h3><ul><li>类型: <code>ShikiTransformer[]</code></li><li>默认值: <code>[]</code></li></ul><p>代码转换器， 查看 <a href="https://shiki.style/blog/guide/transformers" target="_blank" rel="noopener noreferrer">shiki transformers</a> 了解更多信息。</p>`,
					11
				)),
		])
	)
}
const D = o(u, [
		['render', A],
		['__file', 'index.html.vue'],
	]),
	v = JSON.parse(
		'{"path":"/config/plugins/code-highlight/","title":"代码高亮","lang":"zh-CN","frontmatter":{"title":"代码高亮","author":"pengzhanbo","createTime":"2024/03/06 10:21:47","permalink":"/config/plugins/code-highlight/","description":"概述 主题内置的代码高亮插件， 对代码块进行代码高亮。 主题 使用 Shiki 在 Markdown 代码块中使用彩色文本实现语法高亮。 Shiki 支持多种编程语言。 在 Shiki 的代码仓库中，可以找到 合法的编程语言列表 。 关联插件： @vuepress-plume/plugin-shikiji 为什么不用 官方的 @vuepress/plu...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/config/plugins/code-highlight/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"代码高亮"}],["meta",{"property":"og:description","content":"概述 主题内置的代码高亮插件， 对代码块进行代码高亮。 主题 使用 Shiki 在 Markdown 代码块中使用彩色文本实现语法高亮。 Shiki 支持多种编程语言。 在 Shiki 的代码仓库中，可以找到 合法的编程语言列表 。 关联插件： @vuepress-plume/plugin-shikiji 为什么不用 官方的 @vuepress/plu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代码高亮\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":2.66,"words":798},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/config/plugins/代码高亮.md","bulletin":false}'
	)
export { D as comp, v as data }
