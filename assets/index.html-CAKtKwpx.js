import {
	_ as g,
	c as m,
	d as i,
	e as a,
	b as n,
	w as l,
	a as p,
	r as e,
	o as u,
} from './app-B_7CxFr0.js'
const y = {},
	v = { class: 'demo-wrapper' },
	A = { class: 'demo-container' },
	D = { class: 'demo-wrapper' },
	c = { class: 'demo-container' }
function b(f, s) {
	const t = e('Plot'),
		d = e('VPIcon'),
		k = e('CodeTabs'),
		h = e('RouteLink')
	return (
		u(),
		m('div', null, [
			s[27] ||
				(s[27] = i(
					'h2',
					{ id: '概述', tabindex: '-1' },
					[i('a', { class: 'header-anchor', href: '#概述' }, [i('span', null, '概述')])],
					-1
				)),
			s[28] ||
				(s[28] = i(
					'p',
					null,
					'有时候，你不想直接把文本内容毫无保留的展示出来，想要保留一些 隐秘性， 可能是为了引起读者的好奇心，也可能纯粹是故意增加点阅读障碍，让文章变得更加有趣。',
					-1
				)),
			s[29] ||
				(s[29] = i(
					'p',
					null,
					[
						a('为了满足这种小小的心思，主题提供了一个 '),
						i('strong', null, '“隐秘”文本'),
						a(' 的有趣小功能。它看起来像这样：'),
					],
					-1
				)),
			i('div', v, [
				s[7] ||
					(s[7] = i(
						'div',
						{ class: 'demo-head' },
						[i('div', { class: 'demo-ctrl' }, [i('i'), i('i'), i('i')])],
						-1
					)),
				i('div', A, [
					i('p', null, [
						s[3] || (s[3] = a('你知道吗， ')),
						n(t, null, { default: l(() => s[0] || (s[0] = [a('鲁迅')])), _: 1 }),
						s[4] || (s[4] = a(' 曾说过：“ ')),
						n(t, null, { default: l(() => s[1] || (s[1] = [a('我没说过这句话！')])), _: 1 }),
						s[5] || (s[5] = a(' ” 令我醍醐灌顶，深受启发，浑身迸发出无可匹敌的 力量！于是，')),
						n(t, null, { default: l(() => s[2] || (s[2] = [a('我在床上翻了个身')])), _: 1 }),
						s[6] || (s[6] = a(' ！')),
					]),
				]),
			]),
			s[30] ||
				(s[30] = i(
					'p',
					null,
					'读者不能直接阅读到完整的内容，部分的内容被 “遮住”，需要鼠标悬停到内容上，才能看到被遮住的内容。',
					-1
				)),
			s[31] ||
				(s[31] = i(
					'h2',
					{ id: '配置', tabindex: '-1' },
					[i('a', { class: 'header-anchor', href: '#配置' }, [i('span', null, '配置')])],
					-1
				)),
			s[32] ||
				(s[32] = i(
					'p',
					null,
					[a('该功能默认不启用，你需要在 '), i('code', null, 'theme'), a(' 配置中启用。')],
					-1
				)),
			n(
				k,
				{ id: '23', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: l(({ value: r, isActive: o }) => [
						n(d, { name: 'vscode-icons:file-type-typescript' }),
						s[8] || (s[8] = i('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: l(
						({ value: r, isActive: o }) =>
							s[9] ||
							(s[9] = [
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
												a(`
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
												a(`
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
												a(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      markdownPower'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': {'
													),
												]),
												a(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'        plot'
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
												a(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'      },'
													),
												]),
												a(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    }'
													),
												]),
												a(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  })'
													),
												]),
												a(`
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
			s[33] ||
				(s[33] = p(
					`<p><code>markdownPower.plot</code> 支持传入 <code>boolean | PlotOptions</code> 类型</p><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> PlotOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 是否启用 \`!! !!\`  markdown （该标记为非标准标记，脱离插件将不生效）</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 如果设置为 false， 则表示不启用该标记，只能使用 &lt;Plot /&gt; 组件</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">default</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> true</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  tag</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 遮罩层颜色</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  mask</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | { </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">light</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">dark</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 文本颜色</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  color</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | { </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">light</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">dark</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 触发方式</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">default</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">hover</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  trigger</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">hover</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">click</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">!!需要隐秘的内容!!</span></span></code></pre></div>`,
					4
				)),
			i('p', null, [
				s[11] || (s[11] = a('如果不想使用 非标准的 ')),
				s[12] || (s[12] = i('code', null, '!! !!', -1)),
				s[13] || (s[13] = a(' 标记语法，你可以将 ')),
				s[14] || (s[14] = i('code', null, 'plot.tag', -1)),
				s[15] || (s[15] = a(' 设置为 ')),
				s[16] || (s[16] = i('code', null, 'false', -1)),
				s[17] || (s[17] = a(' ， 然后使用 ')),
				n(
					h,
					{ to: '/blog/guide/features/component/#plot' },
					{ default: l(() => s[10] || (s[10] = [i('code', null, '<Plot />', -1)])), _: 1 }
				),
				s[18] || (s[18] = a(' 组件替代。')),
			]),
			s[34] ||
				(s[34] = p(
					`<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p>输入：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">你知道吗， !!鲁迅!! 曾说过：“ !!我没说过这句话！!! ” 令我醍醐灌顶，深受启发，浑身迸发出无可匹敌的</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">力量！于是，!!我在床上翻了个身!! ！</span></span></code></pre></div><p>输出：</p>`,
					4
				)),
			i('div', D, [
				s[26] ||
					(s[26] = i(
						'div',
						{ class: 'demo-head' },
						[i('div', { class: 'demo-ctrl' }, [i('i'), i('i'), i('i')])],
						-1
					)),
				i('div', c, [
					i('p', null, [
						s[22] || (s[22] = a('你知道吗， ')),
						n(t, null, { default: l(() => s[19] || (s[19] = [a('鲁迅')])), _: 1 }),
						s[23] || (s[23] = a(' 曾说过：“ ')),
						n(t, null, { default: l(() => s[20] || (s[20] = [a('我没说过这句话！')])), _: 1 }),
						s[24] || (s[24] = a(' ” 令我醍醐灌顶，深受启发，浑身迸发出无可匹敌的 力量！于是，')),
						n(t, null, { default: l(() => s[21] || (s[21] = [a('我在床上翻了个身')])), _: 1 }),
						s[25] || (s[25] = a(' ！')),
					]),
				]),
			]),
		])
	)
}
const C = g(y, [
		['render', b],
		['__file', 'index.html.vue'],
	]),
	E = JSON.parse(
		'{"path":"/blog/guide/markdown/plot/","title":"隐秘文本","lang":"zh-CN","frontmatter":{"title":"隐秘文本","createTime":"2024/09/30 14:45:35","icon":"weui:eyes-off-outlined","permalink":"/blog/guide/markdown/plot/","description":"概述 有时候，你不想直接把文本内容毫无保留的展示出来，想要保留一些 隐秘性， 可能是为了引起读者的好奇心，也可能纯粹是故意增加点阅读障碍，让文章变得更加有趣。 为了满足这种小小的心思，主题提供了一个 “隐秘”文本 的有趣小功能。它看起来像这样： 你知道吗， 曾说过：“ ” 令我醍醐灌顶，深受启发，浑身迸发出无可匹敌的 力量！于是， ！ 读者不能直接阅读...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/markdown/plot/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"隐秘文本"}],["meta",{"property":"og:description","content":"概述 有时候，你不想直接把文本内容毫无保留的展示出来，想要保留一些 隐秘性， 可能是为了引起读者的好奇心，也可能纯粹是故意增加点阅读障碍，让文章变得更加有趣。 为了满足这种小小的心思，主题提供了一个 “隐秘”文本 的有趣小功能。它看起来像这样： 你知道吗， 曾说过：“ ” 令我醍醐灌顶，深受启发，浑身迸发出无可匹敌的 力量！于是， ！ 读者不能直接阅读..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"隐秘文本\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":1.66,"words":497},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/markdown/隐秘文本.md","bulletin":false}'
	)
export { C as comp, E as data }
