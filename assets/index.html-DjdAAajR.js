import {
	_ as g,
	c as y,
	d as i,
	e as s,
	b as t,
	w as a,
	a as A,
	r,
	o as D,
} from './app-B_7CxFr0.js'
const c = {},
	B = { class: 'hint-container info' }
function E(u, l) {
	const n = r('VPIcon'),
		d = r('CodeTabs'),
		p = r('Badge'),
		e = r('RouteLink')
	return (
		D(),
		y('div', null, [
			l[80] ||
				(l[80] = i(
					'h2',
					{ id: '概述', tabindex: '-1' },
					[i('a', { class: 'header-anchor', href: '#概述' }, [i('span', null, '概述')])],
					-1
				)),
			l[81] ||
				(l[81] = i(
					'p',
					null,
					[
						s('主题 使用 '),
						i(
							'a',
							{ href: 'https://shiki.style/', target: '_blank', rel: 'noopener noreferrer' },
							'Shiki'
						),
						s(' 在 Markdown 代码块实现语法高亮。'),
					],
					-1
				)),
			i('div', B, [
				l[2] || (l[2] = i('p', { class: 'hint-container-title' }, '相关信息', -1)),
				l[3] ||
					(l[3] = i(
						'p',
						null,
						[
							s('主题默认 加载了 '),
							i(
								'a',
								{ href: 'https://shiki.style/', target: '_blank', rel: 'noopener noreferrer' },
								'Shiki'
							),
							s(' 支持的超过 190+ 的 语言，这可能导致 在启用 vuepress 服务时， 需要多等待 '),
							i('strong', null, '300ms ~ 600ms'),
							s(' 左右的时间来加载所有的 语言。'),
						],
						-1
					)),
				l[4] ||
					(l[4] = i(
						'p',
						null,
						'因此，如果比较在意 vuepress 启动时间，建议修改配置为仅加载 您所需要的 语言。',
						-1
					)),
				l[5] || (l[5] = i('p', null, '示例：', -1)),
				t(
					d,
					{ id: '16', data: [{ id: '.vuepress/config.ts' }] },
					{
						title0: a(({ value: h, isActive: k }) => [
							t(n, { name: 'vscode-icons:file-type-typescript' }),
							l[0] || (l[0] = i('span', null, '.vuepress/config.ts', -1)),
						]),
						tab0: a(
							({ value: h, isActive: k }) =>
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
																{
																	style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' },
																},
																'export'
															),
															i(
																'span',
																{
																	style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' },
																},
																' default'
															),
															i(
																'span',
																{
																	style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' },
																},
																' defineUserConfig'
															),
															i(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																'({'
															),
														]),
														s(`
`),
														i('span', { class: 'line' }, [
															i(
																'span',
																{
																	style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' },
																},
																'  theme'
															),
															i(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																': '
															),
															i(
																'span',
																{
																	style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' },
																},
																'plumeTheme'
															),
															i(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																'({'
															),
														]),
														s(`
`),
														i('span', { class: 'line' }, [
															i(
																'span',
																{
																	style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' },
																},
																'    plugins'
															),
															i(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																': {'
															),
														]),
														s(`
`),
														i('span', { class: 'line' }, [
															i(
																'span',
																{
																	style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' },
																},
																'      shiki'
															),
															i(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																': {'
															),
														]),
														s(`
`),
														i('span', { class: 'line highlighted' }, [
															i(
																'span',
																{
																	style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' },
																},
																'        languages'
															),
															i(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
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
																{
																	style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' },
																},
																'javascript'
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
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
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
																"'"
															),
															i(
																'span',
																{
																	style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' },
																},
																'typescript'
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
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
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
																"'"
															),
															i(
																'span',
																{
																	style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' },
																},
																'vue'
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
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
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
																"'"
															),
															i(
																'span',
																{
																	style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' },
																},
																'bash'
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
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
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
																"'"
															),
															i(
																'span',
																{
																	style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' },
																},
																'sh'
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
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																'], '
															),
														]),
														s(`
`),
														i('span', { class: 'line' }, [
															i(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																'      }'
															),
														]),
														s(`
`),
														i('span', { class: 'line' }, [
															i(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																'    }'
															),
														]),
														s(`
`),
														i('span', { class: 'line' }, [
															i(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
																'  })'
															),
														]),
														s(`
`),
														i('span', { class: 'line' }, [
															i(
																'span',
																{
																	style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' },
																},
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
			]),
			l[82] || (l[82] = i('hr', null, null, -1)),
			t(p, { type: 'warning', text: 'v1.0.0-rc.105 更新' }),
			l[83] ||
				(l[83] = A(
					`<p>随着 <code>shiki</code> 支持的语言越来越丰富，默认加载全部的语言所花费的时间越来越多了， 因此 <strong>强烈建议您 手动配置 <code>languages</code></strong> ，仅加载 您需要的 语言。</p><p>同时，在您未配置 <code>languages</code> 时，主题会在启动时尝试分析 <code>markdown</code> 文件中的代码块所使用的语言， 并将它们作为 <code>languages</code> 传入给 shiki，这也极大的减少了加载时间。然而随着 项目 <code>markdown</code> 文件数量和内容的增长， 这种方式带来额外的 i/o 开销和解析开销也会越来越长，因此 <strong>强烈建议您手动配置 <code>languages</code></strong> 。 :::</p><h2 id="语言" tabindex="-1"><a class="header-anchor" href="#语言"><span>语言</span></a></h2><p><a href="https://shiki.style/" target="_blank" rel="noopener noreferrer">Shiki</a> 支持 超过 190+ 种语言， 你可以在 <a href="https://shiki.style/languages" target="_blank" rel="noopener noreferrer">languages</a> 查看所有支持的语言列表。</p><p>你可以通过以下语法为你使用的 语言所编写的代码 实现高亮效果：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">[lang]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span></span></code></pre></div><p>其中，<code>[lang]</code> 为你使用的语言。</p><p>示例：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">js</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span></span></code></pre></div><div class="language-js" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><h2 id="高亮主题" tabindex="-1"><a class="header-anchor" href="#高亮主题"><span>高亮主题</span></a></h2><p><a href="https://shiki.style/" target="_blank" rel="noopener noreferrer">Shiki</a> 支持 超过 40+ 种高亮主题。</p><p>你可以在 <a href="https://shiki.style/themes" target="_blank" rel="noopener noreferrer">Themes</a> 找到所有支持的主题列表，根据个人的喜欢自定义 高亮主题。</p><p>Theme Plume 默认为 代码块使用的主题配置：</p><div class="language-ts" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark has-highlighted vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      shiki</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: { </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">light</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vitesse-light</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">dark</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vitesse-dark</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }, </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre></div><p>默认配置支持在 亮色/暗色 模式分别使用 <code>vitesse-light</code>/<code>vitesse-dark</code> 主题。</p><h2 id="更多支持" tabindex="-1"><a class="header-anchor" href="#更多支持"><span>更多支持</span></a></h2>`,
					17
				)),
			i('p', null, [
				l[7] || (l[7] = s('得益于 ')),
				l[8] ||
					(l[8] = i(
						'a',
						{ href: 'https://shiki.style/', target: '_blank', rel: 'noopener noreferrer' },
						'Shiki',
						-1
					)),
				l[9] || (l[9] = s(' 的强大能力，Theme Plume 还为 代码块 提供了 更多的 ')),
				t(
					e,
					{
						to: '/notes/theme/blog/guide/%E4%BB%A3%E7%A0%81/%E7%89%B9%E6%80%A7%E6%94%AF%E6%8C%81.html',
					},
					{ default: a(() => l[6] || (l[6] = [s('特性支持')])), _: 1 }
				),
				l[10] || (l[10] = s('，它们让 代码块具备更强的表达能力。')),
			]),
			i('p', null, [
				l[15] || (l[15] = s('同时，为了方便 更好的 完成 代码演示，Theme Plume 还提供了嵌入 ')),
				t(
					e,
					{ to: '/notes/theme/blog/guide/%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA/codepen.html' },
					{ default: a(() => l[11] || (l[11] = [s('CodePen')])), _: 1 }
				),
				l[16] || (l[16] = s('， ')),
				t(
					e,
					{ to: '/notes/theme/blog/guide/%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA/jsFiddle.html' },
					{ default: a(() => l[12] || (l[12] = [s('Js Fiddle')])), _: 1 }
				),
				l[17] || (l[17] = s('，')),
				t(
					e,
					{ to: '/notes/theme/blog/guide/%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA/codeSandbox.html' },
					{ default: a(() => l[13] || (l[13] = [s('Code Sandbox')])), _: 1 }
				),
				l[18] || (l[18] = s('， ')),
				t(
					e,
					{ to: '/notes/theme/blog/guide/%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA/replit.html' },
					{ default: a(() => l[14] || (l[14] = [s('Replit')])), _: 1 }
				),
				l[19] || (l[19] = s(' 的语法支持，你可以很方便的嵌入代码演示。')),
			]),
			l[84] ||
				(l[84] = i(
					'h2',
					{ id: '示例', tabindex: '-1' },
					[i('a', { class: 'header-anchor', href: '#示例' }, [i('span', null, '示例')])],
					-1
				)),
			t(
				d,
				{
					id: '78',
					data: [
						{ id: 'C' },
						{ id: 'C++' },
						{ id: 'Java' },
						{ id: 'Kotlin' },
						{ id: 'Python' },
						{ id: 'Go' },
						{ id: 'Ruby' },
						{ id: 'Makefile' },
						{ id: 'Object-C' },
						{ id: 'Swift' },
						{ id: 'PHP' },
						{ id: 'Rust' },
						{ id: 'SQL' },
						{ id: 'XML' },
						{ id: 'Zig' },
					],
				},
				{
					title0: a(({ value: h, isActive: k }) => [
						t(n, { name: 'vscode-icons:file-type-c' }),
						l[20] || (l[20] = i('span', null, 'C', -1)),
					]),
					title1: a(({ value: h, isActive: k }) => [
						t(n, { name: 'vscode-icons:file-type-cpp' }),
						l[21] || (l[21] = i('span', null, 'C++', -1)),
					]),
					title2: a(({ value: h, isActive: k }) => [
						t(n, { name: 'vscode-icons:file-type-java' }),
						l[22] || (l[22] = i('span', null, 'Java', -1)),
					]),
					title3: a(({ value: h, isActive: k }) => [
						t(n, { name: 'vscode-icons:file-type-kotlin' }),
						l[23] || (l[23] = i('span', null, 'Kotlin', -1)),
					]),
					title4: a(({ value: h, isActive: k }) => [
						t(n, { name: 'vscode-icons:file-type-python' }),
						l[24] || (l[24] = i('span', null, 'Python', -1)),
					]),
					title5: a(({ value: h, isActive: k }) => [
						t(n, { name: 'vscode-icons:file-type-go-gopher' }),
						l[25] || (l[25] = i('span', null, 'Go', -1)),
					]),
					title6: a(({ value: h, isActive: k }) => [
						t(n, { name: 'vscode-icons:file-type-ruby' }),
						l[26] || (l[26] = i('span', null, 'Ruby', -1)),
					]),
					title7: a(({ value: h, isActive: k }) => [
						t(n, { name: 'vscode-icons:file-type-makefile' }),
						l[27] || (l[27] = i('span', null, 'Makefile', -1)),
					]),
					title8: a(({ value: h, isActive: k }) => [
						t(n, { name: 'vscode-icons:file-type-objectivec' }),
						l[28] || (l[28] = i('span', null, 'Object-C', -1)),
					]),
					title9: a(({ value: h, isActive: k }) => [
						t(n, { name: 'vscode-icons:file-type-swift' }),
						l[29] || (l[29] = i('span', null, 'Swift', -1)),
					]),
					title10: a(({ value: h, isActive: k }) => [
						t(n, { name: 'vscode-icons:file-type-php3' }),
						l[30] || (l[30] = i('span', null, 'PHP', -1)),
					]),
					title11: a(({ value: h, isActive: k }) => [
						t(n, { name: 'vscode-icons:file-type-rust' }),
						l[31] || (l[31] = i('span', null, 'Rust', -1)),
					]),
					title12: a(({ value: h, isActive: k }) => [
						t(n, { name: 'vscode-icons:file-type-sql' }),
						l[32] || (l[32] = i('span', null, 'SQL', -1)),
					]),
					title13: a(({ value: h, isActive: k }) => [
						t(n, { name: 'vscode-icons:file-type-xml' }),
						l[33] || (l[33] = i('span', null, 'XML', -1)),
					]),
					title14: a(({ value: h, isActive: k }) => [
						t(n, { name: 'vscode-icons:file-type-zig' }),
						l[34] || (l[34] = i('span', null, 'Zig', -1)),
					]),
					tab0: a(
						({ value: h, isActive: k }) =>
							l[35] ||
							(l[35] = [
								i(
									'div',
									{ class: 'language-c line-numbers-mode', 'data-ext': 'c', 'data-title': 'c' },
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
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														' <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'stdio.h'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'#'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'define'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' ARR_LEN'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 7'
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
														'void'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' qsort'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' v'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'[]'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' left'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' right'
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
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'void'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' printArr'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' v'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'[]'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' len'
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
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'{'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'	int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' i'
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
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'	int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' v'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'['
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'ARR_LEN'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														']'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' {'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 4'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 3'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 1'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 7'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 9'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 6'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 2'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' };'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'	printArr'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'v'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' ARR_LEN'
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
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'	qsort'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'v'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 0'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' ARR_LEN'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'-'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'1'
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
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'	printArr'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'v'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' ARR_LEN'
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'	return'
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
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'void'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' qsort'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' v'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'[]'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' left'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' right'
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'{'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'	int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' i'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' last'
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
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'	void'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' swap'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' v'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'[]'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' i'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' j'
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'	if'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'left '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'>='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' right'
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'		return'
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
														'	swap'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'v'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' left'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'left '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'+'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' right'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														')'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' /'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 2'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'	last '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' left'
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
														'	for'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'i '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' left'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'+'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'1'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														';'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' i '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'<='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' right'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														';'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' i'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'++'
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'		if'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'v'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'['
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'i'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														']'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' v'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'['
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'left'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'])'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'			swap'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'v'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' ++'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'last'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' i'
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
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'	swap'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'v'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' left'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' last'
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
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'	qsort'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'v'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' left'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' last'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'-'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'1'
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
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'	qsort'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'v'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' last'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'+'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'1'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' right'
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
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'void'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' swap'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' v'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'[]'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' i'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' j'
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'{'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'	int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' temp'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'	temp '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' v'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'['
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'i'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'];'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'	v'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'['
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'i'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														']'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' v'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'['
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'j'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'];'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'	v'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'['
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'j'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														']'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' temp'
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
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'void'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' printArr'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' v'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'[]'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' len'
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'{'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'	int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' i'
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
														'	for'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'i '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
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
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' i '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'<'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' len'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														';'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' i'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'++'
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
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'		printf'
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
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'%d'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														' "'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' v'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'['
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'i'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														']);'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'	printf'
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
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'\\n'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
					tab1: a(
						({ value: h, isActive: k }) =>
							l[36] ||
							(l[36] = [
								i(
									'div',
									{
										class: 'language-c++ line-numbers-mode',
										'data-ext': 'c++',
										'data-title': 'c++',
									},
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'// Working of implicit type-conversion'
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
														'include'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'>'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'using'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' namespace'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' std'
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
												i('span', { class: 'line' }),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'   int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' num_int'
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
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'   double'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' num_double '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 9.99'
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
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'   // implicit conversion'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'   // assigning a double value to an int variable'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'   num_int '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' num_double'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'   cout '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'<<'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														' "'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'num_int = '
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' <<'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' num_int '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'<<'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' endl'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'   cout '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'<<'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														' "'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'num_double = '
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' <<'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' num_double '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'<<'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' endl'
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'   return'
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
											]
										),
									],
									-1
								),
							])
					),
					tab2: a(
						({ value: h, isActive: k }) =>
							l[37] ||
							(l[37] = [
								i(
									'div',
									{
										class: 'language-java line-numbers-mode',
										'data-ext': 'java',
										'data-title': 'java',
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' java'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'awt'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Rectangle'
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
														' ObjectVarsAsParameters'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'{'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'	public'
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
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'String'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'[]'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' args'
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'	{'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'	go'
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
														'	}'
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
														'	public'
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
														' go'
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'	{'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'	Rectangle'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' r1'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' new'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' Rectangle'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'0'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'0'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'5'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'5'
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'		System'
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
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'In method go. r1 '
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' r1 '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'+'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														' "'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'\\n'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'		// could have been'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'		//System.out.prinltn("r1" + r1.toString());'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'		r1'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'setSize'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'10'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 15'
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'		System'
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
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'In method go. r1 '
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' r1 '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'+'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														' "'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'\\n'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'		alterPointee'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'r1'
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'		System'
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
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'In method go. r1 '
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' r1 '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'+'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														' "'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'\\n'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'		alterPointer'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'r1'
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'		System'
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
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'In method go. r1 '
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' r1 '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'+'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														' "'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'\\n'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'	}'
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
														'	public'
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
														' alterPointee'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Rectangle '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'r'
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'	{'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'	System'
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
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'In method alterPointee. r '
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' r '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'+'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														' "'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'\\n'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'		r'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'setSize'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'20'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 30'
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'		System'
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
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'In method alterPointee. r '
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' r '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'+'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														' "'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'\\n'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'	}'
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
														'	public'
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
														' alterPointer'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Rectangle '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'r'
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'	{'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'	System'
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
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'In method alterPointer. r '
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' r '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'+'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														' "'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'\\n'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'		r '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' new'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' Rectangle'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'5'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 10'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 30'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 35'
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'		System'
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
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'In method alterPointer. r '
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' r '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'+'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														' "'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'\\n'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'	}'
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
						({ value: h, isActive: k }) =>
							l[38] ||
							(l[38] = [
								i(
									'div',
									{
										class: 'language-kotlin line-numbers-mode',
										'data-ext': 'kotlin',
										'data-title': 'kotlin',
									},
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'package'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' com.example.kotlin'
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
														'import'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' java.util.Random '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'as'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' Rand'
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
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' android.support.v7.app.AppCompatActivity'
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
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' org.amshove.kluent.`should equal` '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'as'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' Type'
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
														'fun'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' main'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'@NonNull'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' args: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'Array'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'<'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'String'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'>) {'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'    println'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'"Hello Kotlin! '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'${'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'/*test*/'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'}'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' map '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' mutableMapOf'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'"A"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' to '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'"B"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'    thing.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'apply'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'"random string here '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'\\n\\t\\r'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														')'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'    thing.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'let'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' { test: ->    }'
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
														'    val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' string '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' "'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'${'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'getThing'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'()'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'}'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'"'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' items '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' listOf'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'"apple"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														', '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'"banana"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														', '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'"kiwifruit"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														')'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'var'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' x '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 9'
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' CONSTANT '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 99'
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
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'@get'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'Rule'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' activityRule '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' ActivityTestRule'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'(SplashActivity::'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'class'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'.java)'
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
														'val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' oneMillion '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 1_000_000'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' creditCardNumber '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 1234_5678_9012_3456L'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' socialSecurityNumber '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 999_99_9999L'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' hexBytes '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 0xFF_EC_DE_5E'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' float '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 0.043_331F'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' bytes '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 0b11010010_01101001_10010100_10010010'
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
														'if'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'(test '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'=='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' ""'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') {'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'    1'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' and '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'2'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' not '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'3'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'} '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'else'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'fun'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'T'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'> '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'foo'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'() {'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' x  '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' Bar::'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'class'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' y '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' hello?.test'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
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
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'suspend'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' fun'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'T'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														', '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'U'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'> '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'SequenceBuilder'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'<'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'yieldIfOdd'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'(x: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'Int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') {'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    if'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' (x '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'%'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 2'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' !='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 0'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'yield'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'(x)'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' function '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' fun'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'@Inject'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' x: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'Int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														', y: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'Int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														', lamda: ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'A'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														', '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'B'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') -> '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'Unit'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'): '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'Int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' {'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'    test.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'test'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'()'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    return'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' x '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'+'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' y;'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
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
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'abstract'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' fun'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' onCreate'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'(savedInstanceState: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'Bundle'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'?)'
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
														'fun'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' isOdd'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'(x: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'Int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' x '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'%'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 2'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' !='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 0'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'fun'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' isOdd'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'(s: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'String'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' s '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'=='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' "brillig"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' ||'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' s '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'=='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' "slithy"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' ||'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' s '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'=='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' "tove"'
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
														'val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' numbers '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' listOf'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'1'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														', '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'2'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														', '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'3'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														')'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'println'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'(numbers.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'filter'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'(::'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'isOdd'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'))'
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
														'fun'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' foo'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'(node: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'Node'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'?): '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'String'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'? {'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' parent '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' node.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'getParent'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'() ?: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'return'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' null'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'interface'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' Greetable'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' {'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    fun'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' greet'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'()'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
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
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'open'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' class'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' Greeter'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														': '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'Greetable'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' {'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'    companion'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' object'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' {'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'        private'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' GREETING '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' "Hello, World!"'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'    }'
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
														'    override'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' fun'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' greet'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'() {'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'        println'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'(GREETING)'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'    }'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'expect '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'class'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' Foo'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'(bar: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'String'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') {'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    fun'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' frob'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'()'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'actual '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'class'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' Foo'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' actual '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'constructor'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' bar: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'String'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') {'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'    actual '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'fun'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' frob'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'() {'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'        println'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'"Frobbing the $bar"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														')'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'    }'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'expect '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'fun'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' formatString'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'(source: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'String'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														', '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'vararg'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' args: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'Any'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'): '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'String'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'expect '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'annotation'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' class'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' Test'
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
														'actual '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'fun'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' formatString'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'(source: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'String'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														', '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'vararg'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' args: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'Any'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' String.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'format'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'(source, args)'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'actual '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'typealias'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' Test'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' org.junit.Test'
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
														'sealed'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' class'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' Expr'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'data'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' class'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' Const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' number: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'Double'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') : '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'Expr'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'()'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'data'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' class'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' Sum'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' e1: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'Expr'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														', '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' e2: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'Expr'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') : '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'Expr'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'()'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'object'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' NotANumber'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' : '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'Expr'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'()'
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
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'@file'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'JvmName'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'("'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'Foo'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'")'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'private'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' sealed'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' class'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' InjectedClass'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'<'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'T'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														', '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'U'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'> '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'@Inject'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' constructor'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' test: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'Int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 50'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														','
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    var'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' anotherVar: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'String'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' "hello world"'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') : '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'SomeSuperClass'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'test'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														', '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'anotherVar'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') {'
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
														'    init'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' {'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'        //'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'    }'
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
														'    constructor'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'(param1: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'String'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														', param2: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'Int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'): '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'this'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'param1'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														', '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'param2'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') {'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'        //'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'    }'
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
														'    companion'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' object'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' {'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'        //'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'    }'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'}'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'annotation'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' class'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' Suspendable'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' f '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' @Suspendable'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' { Fiber.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'sleep'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'10'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') }'
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
														'private'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' data'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' class'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' Foo'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'    /**'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'     * ```'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'     * ($)'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'     * ```'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'     */'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' variables: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'Map'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'<'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'String'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														', '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'String'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'>'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
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
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'data'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' class'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' Response'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'@SerializedName'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'"param1"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' param1: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'String'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														','
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'                    @SerializedName'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'"param2"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' param2: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'String'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														','
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'                    @SerializedName'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'"param3"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'val'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' param3: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'String'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') {'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'object'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' DefaultListener'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' : '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'MouseAdapter'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'() {'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'    override'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' fun'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' mouseClicked'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'(e: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'MouseEvent'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') { }'
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
														'    override'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' fun'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' mouseEntered'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'(e: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'MouseEvent'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') { }'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'class'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' Feature'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' : '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'Node'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'"Title"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														', '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'"Content"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														', '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'"Description"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') {'
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'class'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' Outer'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' {'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'    inner'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' class'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' Inner'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' {}'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
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
						({ value: h, isActive: k }) =>
							l[39] ||
							(l[39] = [
								i(
									'div',
									{ class: 'language-py line-numbers-mode', 'data-ext': 'py', 'data-title': 'py' },
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'def'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' fib'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'n'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'):'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'    # write Fibonacci series up to n'
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
														'    """'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'Print a Fibonacci series up to n.'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"""'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'    a'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' b '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 0'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 1'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    while'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' a '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'<'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' n'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'a'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' end'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
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
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														" '"
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'        a'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' b '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' b'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' a'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'+'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'b'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'    print'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'()'
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
														'# Now call the function we just defined:'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'fib'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'2000'
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
					tab5: a(
						({ value: h, isActive: k }) =>
							l[40] ||
							(l[40] = [
								i(
									'div',
									{ class: 'language-go line-numbers-mode', 'data-ext': 'go', 'data-title': 'go' },
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'package'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' main'
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
														'import'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ('
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
														'    "'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'fmt'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'    "'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'log'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'    "'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'net/http'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
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
														'func'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' handler'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'w'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' http'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'ResponseWriter'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' r'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' *'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'http'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'Request'
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'    fmt'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'Fprintf'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'w'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														' "'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'Hi there, I love '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'%s'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'!'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' r'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'URL'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'Path'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'['
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'1'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':])'
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'func'
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'    http'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'HandleFunc'
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
														'"'
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
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' handler'
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'    log'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'Fatal'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'http'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'ListenAndServe'
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
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														':8080'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' nil'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'))'
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
											]
										),
									],
									-1
								),
							])
					),
					tab6: a(
						({ value: h, isActive: k }) =>
							l[41] ||
							(l[41] = [
								i(
									'div',
									{
										class: 'language-ruby line-numbers-mode',
										'data-ext': 'ruby',
										'data-title': 'ruby',
									},
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'class'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' LotteryTicket'
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
														'  NUMERIC_RANGE'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 1'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'..'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'25'
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
														'  attr_reader'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' :'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'picks'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' :'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'purchased'
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
														'  def'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' initialize'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' *'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'picks '
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    if'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' picks'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'length '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'!='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 3'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'      raise'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' ArgumentError'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														' "'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'three numbers must be picked'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'    elsif'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' picks'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'uniq'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'length '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'!='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 3'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'      raise'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' ArgumentError'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														' "'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'the three picks must be different numbers'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'    elsif'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' picks'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'detect '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'{'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' |'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'p'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'|'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' not'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' NUMERIC_RANGE'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' ==='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														' p'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' }'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'      raise'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' ArgumentError'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														' "'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'the three picks must be numbers between 1 and 25'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'    end'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    @'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'picks'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' picks'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    @'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'purchased'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														' Time'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'now'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'  end'
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
														'end'
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
											]
										),
									],
									-1
								),
							])
					),
					tab7: a(
						({ value: h, isActive: k }) =>
							l[42] ||
							(l[42] = [
								i(
									'div',
									{
										class: 'language-make line-numbers-mode',
										'data-ext': 'make',
										'data-title': 'make',
									},
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'edit'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' :'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' main.o kbd.o command.o display.o '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'\\'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'       insert.o search.o files.o utils.o'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'        cc -o edit main.o kbd.o command.o display.o \\'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'                   insert.o search.o files.o utils.o'
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
														'main.o'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' :'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' main.c defs.h'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'        cc -c main.c'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'kbd.o'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' :'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' kbd.c defs.h command.h'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'        cc -c kbd.c'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'command.o'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' :'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' command.c defs.h command.h'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'        cc -c command.c'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'display.o'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' :'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' display.c defs.h buffer.h'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'        cc -c display.c'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'insert.o'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' :'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' insert.c defs.h buffer.h'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'        cc -c insert.c'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'search.o'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' :'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' search.c defs.h buffer.h'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'        cc -c search.c'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'files.o'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' :'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' files.c defs.h buffer.h command.h'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'        cc -c files.c'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'utils.o'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' :'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' utils.c defs.h'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'        cc -c utils.c'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'clean'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' :'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'        rm edit main.o kbd.o command.o display.o \\'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'           insert.o search.o files.o utils.o'
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
											]
										),
									],
									-1
								),
							])
					),
					tab8: a(
						({ value: h, isActive: k }) =>
							l[43] ||
							(l[43] = [
								i(
									'div',
									{
										class: 'language-objc line-numbers-mode',
										'data-ext': 'objc',
										'data-title': 'objc',
									},
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'@'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'interface'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' classname'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' :'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' superclassname'
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
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'  // instance variables'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'+ classMethod1;'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'+ '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'return_type'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														')'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'classMethod2'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														';'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'+ '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'return_type'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														')'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'classMethod3'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'param1_type'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														')'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'param1_varName;'
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
														'- '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'return_type'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														')'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'instanceMethod1With1Parameter'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'param1_type'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														')'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'param1_varName;'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'- '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'return_type'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														')'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'instanceMethod2With2Parameters'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'param1_type'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														')'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'param1_varName'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'                              param2_callName'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'param2_type'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														')'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'param2_varName;'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'@'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'end'
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
					tab9: a(
						({ value: h, isActive: k }) =>
							l[44] ||
							(l[44] = [
								i(
									'div',
									{
										class: 'language-swift line-numbers-mode',
										'data-ext': 'swift',
										'data-title': 'swift',
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
														' Residence'
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
														'    var'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' rooms: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'['
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Room'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														']'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' []'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    var'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' numberOfRooms: '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'Int'
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
														'        return'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' rooms.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'count'
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
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'    subscript'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'i'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														': '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'Int'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														')'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' ->'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' Room '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'{'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'        get'
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
														'            return'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' rooms'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'['
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'i'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														']'
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
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'        set'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'            rooms'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'['
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'i'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														']'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' newValue'
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    }'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'    func'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' printNumberOfRooms'
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
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'The number of rooms is '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'\\('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'numberOfRooms)'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    }'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    var'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' address: Address'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'?'
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
											]
										),
									],
									-1
								),
							])
					),
					tab10: a(
						({ value: h, isActive: k }) =>
							l[45] ||
							(l[45] = [
								i(
									'div',
									{
										class: 'language-php line-numbers-mode',
										'data-ext': 'php',
										'data-title': 'php',
									},
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'<?'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'php'
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
														'namespace'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' App'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'\\'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'Console'
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'use'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														' Illuminate'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'\\'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'Console'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'\\'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'Scheduling'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'\\'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'Schedule'
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
														'use'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														' Illuminate'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'\\'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'Foundation'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'\\'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'Console'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'\\'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'Kernel'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' as'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' ConsoleKernel'
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
														'class'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' Kernel'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' extends'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' ConsoleKernel'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'{'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'    /**'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														"     * Define the application's command schedule."
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'     */'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'    protected'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' function'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' schedule'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'Schedule'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' $'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'schedule'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														')'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' void'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    {'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														"        // $schedule->command('inspire')->hourly();"
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
												i('span', { class: 'line' }),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'    /**'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'     * Register the commands for the application.'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'     */'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'    protected'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' function'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' commands'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'()'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' void'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    {'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'        $'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'this'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'->'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'load'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'__DIR__'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.'
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
														'/Commands'
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'        require'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' base_path'
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
														'routes/console.php'
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
														');'
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
						({ value: h, isActive: k }) =>
							l[46] ||
							(l[46] = [
								i(
									'div',
									{ class: 'language-rs line-numbers-mode', 'data-ext': 'rs', 'data-title': 'rs' },
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														"// Unlike C/C++, there's no restriction on the order of function definitions"
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'fn'
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
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'    // We can use this function here, and define it somewhere later'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'    fizzbuzz_to'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'100'
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
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'// Function that returns a boolean value'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'fn'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' is_divisible_by'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'lhs'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' u32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' rhs'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' u32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														')'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' ->'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' bool'
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
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'    // Corner case, early return'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    if'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' rhs'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' =='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 0'
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
														'        return'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' false'
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
														'    }'
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
														'    // This is an expression, the `return` keyword is not necessary here'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'    lhs'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' %'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' rhs'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' =='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 0'
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
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'// Functions that "don\'t" return a value, actually return the unit type `()`'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'fn'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' fizzbuzz'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'n'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' u32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														')'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' ->'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ()'
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
														'    if'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' is_divisible_by'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'n'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 15'
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
														'        println!'
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
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'fizzbuzz'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'    }'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' else'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' if'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' is_divisible_by'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'n'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 3'
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
														'        println!'
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
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'fizz'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'    }'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' else'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' if'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' is_divisible_by'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'n'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 5'
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
														'        println!'
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
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'buzz'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'    }'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' else'
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
														'        println!'
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
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'{}'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' n'
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
												s(`
`),
												i('span', { class: 'line' }),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'// When a function returns `()`, the return type can be omitted from the'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'// signature'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'fn'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' fizzbuzz_to'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'n'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' u32'
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    for'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' n'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' in'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 1'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'..='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'n'
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
														'        fizzbuzz'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'n'
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
						({ value: h, isActive: k }) =>
							l[47] ||
							(l[47] = [
								i(
									'div',
									{
										class: 'language-sql line-numbers-mode',
										'data-ext': 'sql',
										'data-title': 'sql',
									},
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'USE'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' AdventureWorks2022;'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'GO'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'IF'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														' OBJECT_ID'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
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
														'dbo.NewProducts'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
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
														'U'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'IS NOT NULL'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    DROP'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' TABLE'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' dbo'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'NewProducts'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														';'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'GO'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'ALTER'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' DATABASE'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' AdventureWorks2022 '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'SET'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' RECOVERY'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' BULK_LOGGED'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														';'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'GO'
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
														'SELECT'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' *'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' INTO'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' dbo'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'NewProducts'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'FROM'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' Production'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'Product'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'WHERE'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' ListPrice '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' $'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'25'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'AND'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' ListPrice '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'<'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' $'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'100'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														';'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'GO'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'ALTER'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' DATABASE'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' AdventureWorks2022 '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'SET'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' RECOVERY'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' FULL;'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'GO'
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
					tab13: a(
						({ value: h, isActive: k }) =>
							l[48] ||
							(l[48] = [
								i(
									'div',
									{
										class: 'language-xml line-numbers-mode',
										'data-ext': 'xml',
										'data-title': 'xml',
									},
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'<?'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'xml'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' version'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'1.0'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'?>'
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
														'catalog'
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
														'   <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'book'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' id'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'bk101'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'author'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Gambardella, Matthew'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'author'
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
														'      <'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														"XML Developer's Guide"
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'genre'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Computer'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'genre'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'price'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'44.95'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'price'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'publish_date'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'2000-10-01'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'publish_date'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'description'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'An in-depth look at creating applications'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'      with XML.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'description'
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
														'   </'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'book'
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
														'   <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'book'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' id'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'bk102'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'author'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Ralls, Kim'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'author'
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
														'      <'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Midnight Rain'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'genre'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Fantasy'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'genre'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'price'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'5.95'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'price'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'publish_date'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'2000-12-16'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'publish_date'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'description'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'A former architect battles corporate zombies,'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'      an evil sorceress, and her own childhood to become queen'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'      of the world.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'description'
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
														'   </'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'book'
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
														'   <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'book'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' id'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'bk103'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'author'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Corets, Eva'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'author'
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
														'      <'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Maeve Ascendant'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'genre'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Fantasy'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'genre'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'price'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'5.95'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'price'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'publish_date'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'2000-11-17'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'publish_date'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'description'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'After the collapse of a nanotechnology'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'      society in England, the young survivors lay the'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'      foundation for a new society.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'description'
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
														'   </'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'book'
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
														'   <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'book'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' id'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'bk104'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'author'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Corets, Eva'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'author'
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
														'      <'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														"Oberon's Legacy"
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'genre'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Fantasy'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'genre'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'price'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'5.95'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'price'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'publish_date'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'2001-03-10'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'publish_date'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'description'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'In post-apocalypse England, the mysterious'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'      agent known only as Oberon helps to create a new life'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'      for the inhabitants of London. Sequel to Maeve'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'      Ascendant.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'description'
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
														'   </'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'book'
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
														'   <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'book'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' id'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'bk105'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'author'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Corets, Eva'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'author'
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
														'      <'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'The Sundered Grail'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'genre'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Fantasy'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'genre'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'price'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'5.95'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'price'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'publish_date'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'2001-09-10'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'publish_date'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'description'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'The two daughters of Maeve, half-sisters,'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'      battle one another for control of England. Sequel to'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														"      Oberon's Legacy."
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'description'
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
														'   </'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'book'
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
														'   <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'book'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' id'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'bk106'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'author'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Randall, Cynthia'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'author'
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
														'      <'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Lover Birds'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'genre'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Romance'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'genre'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'price'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'4.95'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'price'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'publish_date'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'2000-09-02'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'publish_date'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'description'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'When Carla meets Paul at an ornithology'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'      conference, tempers fly as feathers get ruffled.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'description'
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
														'   </'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'book'
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
														'   <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'book'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' id'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'bk107'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'author'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Thurman, Paula'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'author'
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
														'      <'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Splish Splash'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'genre'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Romance'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'genre'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'price'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'4.95'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'price'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'publish_date'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'2000-11-02'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'publish_date'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'description'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'A deep sea diver finds true love twenty'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'      thousand leagues beneath the sea.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'description'
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
														'   </'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'book'
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
														'   <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'book'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' id'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'bk108'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'author'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Knorr, Stefan'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'author'
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
														'      <'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Creepy Crawlies'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'genre'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Horror'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'genre'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'price'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'4.95'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'price'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'publish_date'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'2000-12-06'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'publish_date'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'description'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'An anthology of horror stories about roaches,'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'      centipedes, scorpions  and other insects.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'description'
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
														'   </'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'book'
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
														'   <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'book'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' id'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'bk109'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'author'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Kress, Peter'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'author'
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
														'      <'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Paradox Lost'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'genre'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Science Fiction'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'genre'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'price'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'6.95'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'price'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'publish_date'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'2000-11-02'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'publish_date'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'description'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'After an inadvertant trip through a Heisenberg'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'      Uncertainty Device, James Salway discovers the problems'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'      of being quantum.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'description'
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
														'   </'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'book'
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
														'   <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'book'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' id'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'bk110'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'author'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														"O'Brien, Tim"
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'author'
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
														'      <'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Microsoft .NET: The Programming Bible'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'genre'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Computer'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'genre'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'price'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'36.95'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'price'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'publish_date'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'2000-12-09'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'publish_date'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'description'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														"Microsoft's .NET initiative is explored in"
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														"      detail in this deep programmer's reference."
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'description'
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
														'   </'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'book'
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
														'   <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'book'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' id'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'bk111'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'author'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														"O'Brien, Tim"
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'author'
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
														'      <'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'MSXML3: A Comprehensive Guide'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'genre'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Computer'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'genre'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'price'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'36.95'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'price'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'publish_date'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'2000-12-01'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'publish_date'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'description'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'The Microsoft MSXML3 parser is covered in'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'      detail, with attention to XML DOM interfaces, XSLT processing,'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'      SAX and more.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'description'
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
														'   </'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'book'
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
														'   <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'book'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' id'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'bk112'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'author'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Galos, Mike'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'author'
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
														'      <'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Visual Studio 7: A Comprehensive Guide'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'genre'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Computer'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'genre'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'price'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'49.95'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'price'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'publish_date'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'2001-04-16'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'publish_date'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'description'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Microsoft Visual Studio 7 is explored in depth,'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'      looking at how Visual Basic, Visual C++, C#, and ASP+ are'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'      integrated into a comprehensive development'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'      environment.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'description'
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
														'   </'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'book'
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
														'catalog'
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
					tab14: a(
						({ value: h, isActive: k }) =>
							l[49] ||
							(l[49] = [
								i(
									'div',
									{
										class: 'language-zig line-numbers-mode',
										'data-ext': 'zig',
										'data-title': 'zig',
									},
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' std'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														' @import'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'"std"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														')'
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
														'const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' parseInt'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' std'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'fmt'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'parseInt'
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'test'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' "parse integers"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' {'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' input'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' "123 67 89,99"'
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
														'    const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' ally'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' std'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'testing'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'allocator'
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    var'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' list'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' std'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'ArrayList'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'u32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														')'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'init'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'ally'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														')'
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
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'    // Ensure the list is freed at scope exit.'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'    // Try commenting out this line!'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    defer'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' list'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'deinit'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'()'
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    var'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' it'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' std'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'mem'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'tokenize'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'u8'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' input'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' " ,"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														')'
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
														'    while'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'it'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'next'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'()) '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'|'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'num'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'|'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' {'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'        const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' n'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' try'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' parseInt'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'u32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' num'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 10'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														')'
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
														'        try'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' list'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'append'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'n'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														')'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'    }'
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
														'    const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' expected'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' ['
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'_'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														']'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'u32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'{ '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'123'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 67'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 89'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 99'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' }'
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    for'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'expected'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' list'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'items'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'|'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'exp'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' actual'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'|'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' {'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'        try'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' std'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'testing'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'expectEqual'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'exp'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' actual'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														')'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'    }'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
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
			t(
				d,
				{
					id: '125',
					data: [
						{ id: 'HTML' },
						{ id: 'Pug' },
						{ id: 'HTTP' },
						{ id: 'CSS' },
						{ id: 'Less' },
						{ id: 'SCSS' },
						{ id: 'Stylus' },
						{ id: 'JavaScript' },
						{ id: 'JSX' },
						{ id: 'TypeScript' },
						{ id: 'TSX' },
						{ id: 'Astro' },
						{ id: 'Vue' },
						{ id: 'Svelte' },
						{ id: 'WebAssembly' },
					],
				},
				{
					title0: a(({ value: h, isActive: k }) => [
						t(n, { name: 'vscode-icons:file-type-html' }),
						l[50] || (l[50] = i('span', null, 'HTML', -1)),
					]),
					title1: a(({ value: h, isActive: k }) => l[51] || (l[51] = [i('span', null, 'Pug', -1)])),
					title2: a(
						({ value: h, isActive: k }) => l[52] || (l[52] = [i('span', null, 'HTTP', -1)])
					),
					title3: a(({ value: h, isActive: k }) => [
						t(n, { name: 'vscode-icons:file-type-css' }),
						l[53] || (l[53] = i('span', null, 'CSS', -1)),
					]),
					title4: a(({ value: h, isActive: k }) => [
						t(n, { name: 'vscode-icons:file-type-less' }),
						l[54] || (l[54] = i('span', null, 'Less', -1)),
					]),
					title5: a(({ value: h, isActive: k }) => [
						t(n, { name: 'vscode-icons:file-type-scss' }),
						l[55] || (l[55] = i('span', null, 'SCSS', -1)),
					]),
					title6: a(({ value: h, isActive: k }) => [
						t(n, { name: 'vscode-icons:file-type-light-stylus' }),
						l[56] || (l[56] = i('span', null, 'Stylus', -1)),
					]),
					title7: a(({ value: h, isActive: k }) => [
						t(n, { name: 'vscode-icons:file-type-js-official' }),
						l[57] || (l[57] = i('span', null, 'JavaScript', -1)),
					]),
					title8: a(({ value: h, isActive: k }) => l[58] || (l[58] = [i('span', null, 'JSX', -1)])),
					title9: a(({ value: h, isActive: k }) => [
						t(n, { name: 'vscode-icons:file-type-typescript-official' }),
						l[59] || (l[59] = i('span', null, 'TypeScript', -1)),
					]),
					title10: a(
						({ value: h, isActive: k }) => l[60] || (l[60] = [i('span', null, 'TSX', -1)])
					),
					title11: a(({ value: h, isActive: k }) => [
						t(n, { name: 'vscode-icons:file-type-light-astro' }),
						l[61] || (l[61] = i('span', null, 'Astro', -1)),
					]),
					title12: a(({ value: h, isActive: k }) => [
						t(n, { name: 'vscode-icons:file-type-vue' }),
						l[62] || (l[62] = i('span', null, 'Vue', -1)),
					]),
					title13: a(({ value: h, isActive: k }) => [
						t(n, { name: 'vscode-icons:file-type-svelte' }),
						l[63] || (l[63] = i('span', null, 'Svelte', -1)),
					]),
					title14: a(({ value: h, isActive: k }) => [
						t(n, { name: 'vscode-icons:file-type-wasm' }),
						l[64] || (l[64] = i('span', null, 'WebAssembly', -1)),
					]),
					tab0: a(
						({ value: h, isActive: k }) =>
							l[65] ||
							(l[65] = [
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
														'DOCTYPE'
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
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'en-us'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'utf-8'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'width=device-width'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'MDN Web Docs Example: Toggling full-screen mode'
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
														'    <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'link'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' rel'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'stylesheet'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' href'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'styles.css'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'    <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'style'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' class'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'editable'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'        video'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'::'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'backdrop'
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
														'          background-color'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' #'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'448'
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
														'        }'
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
														'style'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														"    <!-- import the webpage's javascript file -->"
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
														'script'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' src'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'script.js'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' defer'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'></'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'script'
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'section'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' class'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'preview'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'video'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' controls'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'        src'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'        poster'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'        width'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'620'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
												i('span', { class: 'line' }),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														"        Sorry, your browser doesn't support embedded videos.  Time to upgrade!"
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
														'      </'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'video'
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
														'    </'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'section'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'<'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'textarea'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' class'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'playable playable-css'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' style'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'height: 100px;'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'video::backdrop {'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'  background-color: #448;'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'}'
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
														'textarea'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'<'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'textarea'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' class'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'playable playable-html'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' style'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'height: 200px;'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'<'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'video'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' controls'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'  src'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'  poster'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'  width'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'620'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														"Sorry, your browser doesn't support embedded videos.  Time to upgrade!"
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
														'video'
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
														'textarea'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'div'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' class'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'playable-buttons'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'        <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'input'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' id'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'reset'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' type'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'button'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' value'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'Reset'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'      </'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'div'
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
														'    </'
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
														'    <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'script'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' src'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'playable.js'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'></'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'script'
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
						({ value: h, isActive: k }) =>
							l[66] ||
							(l[66] = [
								i(
									'div',
									{
										class: 'language-pug line-numbers-mode',
										'data-ext': 'pug',
										'data-title': 'pug',
									},
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'doctype html'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'html'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'lang'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'en'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														')'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'  head'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    title'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' pageTitle'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    script'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'type'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'='
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
														'text/javascript'
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
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														')'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'.'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'      if'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'foo'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														')'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' bar'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'1'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' +'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 5'
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'  body'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    h1'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' Pug - node template engine'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'    #container.col'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'      if'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' youAreUsingPug'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'        p'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' You are amazing'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'      else'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'        p'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' Get on it!'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'      p'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'        Pug is a terse and simple templating language with a'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'        strong focus on performance and powerful features.'
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
											]
										),
									],
									-1
								),
							])
					),
					tab2: a(
						({ value: h, isActive: k }) =>
							l[67] ||
							(l[67] = [
								i(
									'div',
									{
										class: 'language-http line-numbers-mode',
										'data-ext': 'http',
										'data-title': 'http',
									},
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'// Basic authentication'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'GET'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' http://example.com'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'Authorization:'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' Basic username password'
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
														'###'
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
														'// Digest authentication'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'GET'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' http://example.com'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'Authorization:'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' Digest username password'
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
														'// The request body is provided in place'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'POST'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' https://example.com:8080/api/html/post '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'HTTP'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'/'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'1.1'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'Content-Type:'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' application/json'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'Cookie:'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' key=first-value'
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
														'{'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#99841877', '--shiki-dark': '#B8A96577' },
														},
														' "'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'key'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#99841877', '--shiki-dark': '#B8A96577' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' :'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														' "'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'value'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#99841877', '--shiki-dark': '#B8A96577' },
														},
														' "'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'list'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#99841877', '--shiki-dark': '#B8A96577' },
														},
														'"'
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
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'1'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 2'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 3'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														']'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' }'
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
											]
										),
									],
									-1
								),
							])
					),
					tab3: a(
						({ value: h, isActive: k }) =>
							l[68] ||
							(l[68] = [
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
														' {'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'	margin'
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
														'	background'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' black'
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
														'	height'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 100'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'%'
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
														'	margin'
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
														'	width'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 100'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'%'
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
														'	height'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' inherit'
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
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'/* the three main rows going down the page */'
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
														'body'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' >'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' div'
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
														'  height'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 25'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'%'
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'thumb'
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
														'	float'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' left'
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
														'	width'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 25'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'%'
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
														'	height'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 100'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'%'
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
														'	object-fit'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' cover'
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'main'
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
														'  display'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' none'
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'blowup'
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
														'  display'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' block'
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
														'  position'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' absolute'
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
														'  object-fit'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' contain'
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
														'  object-position'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' center'
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
														'  top'
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
														'  left'
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
														'  width'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 100'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'%'
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
														'  height'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 100'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'%'
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
														'  z-index'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 2000'
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'darken'
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
														'  opacity'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 0.4'
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
					tab4: a(
						({ value: h, isActive: k }) =>
							l[69] ||
							(l[69] = [
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'button'
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  &'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'-ok'
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
														'    background-image'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														' url'
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
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'ok.png'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  &'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'-cancel'
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
														'    background-image'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														' url'
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
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'cancel.png'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
												i('span', { class: 'line' }),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  &'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'-custom'
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
														'    background-image'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														' url'
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
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'custom.png'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'link'
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  &'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' +'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' &'
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
														'    color'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' red'
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
														'  }'
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
														'  &'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' &'
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
														'    color'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' green'
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
														'  }'
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
														'  &&'
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
														'    color'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' blue'
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
														'  }'
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
														'  &,'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' &'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'ish'
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
														'    color'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' cyan'
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
														'  }'
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
						({ value: h, isActive: k }) =>
							l[70] ||
							(l[70] = [
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
														'nav'
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
														'  ul'
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
														'    margin'
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
														'    padding'
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
														'    list-style'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' none'
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
														'  }'
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
														'  li'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' {'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														' display'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' inline-block'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														';'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' }'
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
														'  a'
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
														'    display'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' block'
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
														'    padding'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 6'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'px'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 12'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'px'
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
														'    text-decoration'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' none'
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
														'  }'
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
						({ value: h, isActive: k }) =>
							l[71] ||
							(l[71] = [
								i(
									'div',
									{
										class: 'language-styl line-numbers-mode',
										'data-ext': 'styl',
										'data-title': 'styl',
									},
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'vendor'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'prop'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														', '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'args'
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'  -webkit-'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'{'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'prop'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'}'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' args'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'  -moz-'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'{'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'prop'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'}'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' args'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  {'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'prop'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'}'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' args'
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
														'border-radius'
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
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'  vendor'
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
														'border-radius'
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
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'arguments'
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
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'box-shadow'
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
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'  vendor'
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
														'box-shadow'
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
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'arguments'
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'button'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'  border-radius'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 1'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'px'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 2'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'px'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' /'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 3'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'px'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 4'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'px'
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
														'border-radius'
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
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'  -webkit-border-radius'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' arguments'
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
														'  -moz-border-radius'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' arguments'
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
														'  border-radius'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' arguments'
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'body'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' a'
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
														'  font'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 12'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'px/'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'1.4'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														' "'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'Lucida Grande'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														', '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'Arial'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														', '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'sans-serif'
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
														'  background'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' black'
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
														'  color'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' #'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														'ccc'
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'form'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' input'
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
														' 5'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'px'
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
														'  border'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 1'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'px'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' solid'
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
														'  border-radius'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 5'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'px'
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
						({ value: h, isActive: k }) =>
							l[72] ||
							(l[72] = [
								i(
									'div',
									{ class: 'language-js line-numbers-mode', 'data-ext': 'js', 'data-title': 'js' },
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'function'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' resolveAfter2Seconds'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'x'
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'  return'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' new'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														' Promise'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'(('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'resolve'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														')'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' =>'
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
														'    setTimeout'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'(()'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' =>'
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
														'      resolve'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'x'
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    },'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 2000'
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
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'// async function expression assigned to a variable'
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
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' add'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' async'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' function'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'x'
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
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'  const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' a'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' await'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' resolveAfter2Seconds'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'20'
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
														'  const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' b'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' await'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' resolveAfter2Seconds'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'30'
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'  return'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' x'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' +'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' a'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' +'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' b'
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
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'add'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'10'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														').'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'then'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'(('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'v'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														')'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' =>'
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'  console'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'log'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'v'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														')'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														' // prints 60 after 4 seconds.'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'});'
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
														'// async function expression used as an IIFE'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'async'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' function'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'x'
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
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'  const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' p1'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' resolveAfter2Seconds'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'20'
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
														'  const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' p2'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' resolveAfter2Seconds'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'30'
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'  return'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' x'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' +'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'await'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' p1'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														')'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' +'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'await'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' p2'
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'})('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														'10'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														').'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'then'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'(('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'v'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														')'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' =>'
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'  console'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'log'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'v'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														')'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														' // prints 60 after 2 seconds.'
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
					tab8: a(
						({ value: h, isActive: k }) =>
							l[73] ||
							(l[73] = [
								i(
									'div',
									{
										class: 'language-jsx line-numbers-mode',
										'data-ext': 'jsx',
										'data-title': 'jsx',
									},
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'function'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' Item'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'({'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' name'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' isPacked'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' })'
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
														'  if'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'isPacked'
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'    return'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' null'
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
														'  return'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'li'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' className'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'item'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>{'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'name'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'}</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'li'
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
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' function'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' PackingList'
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
														'  return'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ('
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
														'section'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'h1'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														"Sally Ride's Packing List"
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'h1'
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
														'      <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'ul'
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
														'        <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'Item'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'          isPacked'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'={'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'true'
													),
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'          name'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'Space suit'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'        />'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'        <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'Item'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'          isPacked'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'={'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'true'
													),
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'          name'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'Helmet with a golden leaf'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'        />'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'        <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'Item'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'          isPacked'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'={'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'false'
													),
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'          name'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'Photo of Tam'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'        />'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'      </'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'ul'
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
														'    </'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'section'
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
														'  )'
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
						({ value: h, isActive: k }) =>
							l[74] ||
							(l[74] = [
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
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'enum'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' LogLevel'
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'  ERROR'
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'  WARN'
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'  INFO'
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'  DEBUG'
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
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'/**'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														' * This is equivalent to:'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														" * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';"
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														' */'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'type'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' LogLevelStrings'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' keyof'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' typeof'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' LogLevel'
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
														'function'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' printImportant'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'key'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'LogLevelStrings'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' message'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'string'
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
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'  const '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'num'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' LogLevel'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'['
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'key'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														']'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'  if'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'num'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' <='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' LogLevel'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'WARN'
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'    console'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'log'
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
														'Log level key is:'
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
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' key'
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'    console'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'log'
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
														'Log level value is:'
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
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' num'
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'    console'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'log'
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
														'Log level message is:'
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
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' message'
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
														'}'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'printImportant'
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
														'ERROR'
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
														'This is a message'
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
					tab10: a(
						({ value: h, isActive: k }) =>
							l[75] ||
							(l[75] = [
								i(
									'div',
									{
										class: 'language-tsx line-numbers-mode',
										'data-ext': 'tsx',
										'data-title': 'tsx',
									},
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'// posts will be populated at build time by getStaticProps()'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'function'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' Blog'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'({'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' posts'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' })'
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
														'  return'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ('
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
														'ul'
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
														'      {'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'posts'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'map'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'post'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' =>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ('
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'        <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'li'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>{'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'post'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'title'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'}</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'li'
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
														'      ))}'
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
														'ul'
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
														'  )'
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
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'// This function gets called at build time on server-side.'
													),
												]),
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
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' async'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' function'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' getStaticProps'
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
														'  const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' res'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' await'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' fetch'
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
														'https://.../posts'
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
														')'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'  const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' posts'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' await'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' res'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'json'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'()'
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
														'  return'
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
														'    props'
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'      posts'
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
														'  }'
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' Blog'
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
											]
										),
									],
									-1
								),
							])
					),
					tab11: a(
						({ value: h, isActive: k }) =>
							l[76] ||
							(l[76] = [
								i(
									'div',
									{
										class: 'language-astro line-numbers-mode',
										'data-ext': 'astro',
										'data-title': 'astro',
									},
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'---'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'// Your component script here!'
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
														' Banner'
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
														'../components/Banner.astro'
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
														';'
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
														' ReactPokemonComponent'
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
														'../components/ReactPokemonComponent.jsx'
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
														';'
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
														'myFavoritePokemon'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ['
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'/* ... */'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'];'
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'{'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' title'
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' Astro'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'props'
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
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'---'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'<!-- HTML comments supported! -->'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'{'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'/* JS comment syntax is also valid! */'
													),
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'<'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'Banner'
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
														'<'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'h1'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Hello, world!'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'h1'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'<!-- Use props and other variables from the component script: -->'
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
														'p'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>{'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'title'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'}</'
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
												i('span', { class: 'line' }),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'<!-- Include other UI framework components with a `client:` directive to hydrate: -->'
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
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'ReactPokemonComponent'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' client:visible'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' />'
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
														'<!-- Mix HTML with JavaScript expressions, similar to JSX: -->'
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
														'ul'
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
														'  {'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'myFavoritePokemon'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'map'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'(('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'data'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														')'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' =>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' <'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'li'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>{'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'data'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'name'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'}</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'li'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>)}'
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
														'ul'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'<!-- Use a template directive to build class names from multiple strings or even objects! -->'
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
														'p'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' class:list'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'={['
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'add'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														' "'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'dynamic'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
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
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'classNames'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' true'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'}]}'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' />'
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
												i('div', { class: 'line-number' }),
											]
										),
									],
									-1
								),
							])
					),
					tab12: a(
						({ value: h, isActive: k }) =>
							l[77] ||
							(l[77] = [
								i(
									'div',
									{
										class: 'language-vue line-numbers-mode',
										'data-ext': 'vue',
										'data-title': 'vue',
									},
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'<'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'script'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' setup'
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
														' ref'
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
														'vue'
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
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' message'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' ref'
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
														'Hello World!'
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
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'function'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' reverseMessage'
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
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'  // Access/mutate the value of a ref via'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'  // its .value property.'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'  message'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'value'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ='
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' message'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'value'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'split'
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
														"''"
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														').'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'reverse'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'().'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'join'
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
														"''"
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
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'function'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' notify'
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
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'  alert'
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
														'navigation was prevented.'
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
														')'
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
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'script'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'<'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'template'
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
														'h1'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'{{ message }}'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'h1'
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
														'button'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' @click'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'reverseMessage'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'    Reverse Message'
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
														'button'
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
														'button'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' @click'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														"message += '!'"
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'    Append "!"'
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
														'button'
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
														'a'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' href'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'https://vuejs.org'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' @click.prevent'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'notify'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'    A link with e.preventDefault()'
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
														'a'
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
														'template'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'<'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'style'
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'button'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' a'
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
														'  display'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' block'
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
														'  margin-bottom'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 1'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'em'
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'style'
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
					tab13: a(
						({ value: h, isActive: k }) =>
							l[78] ||
							(l[78] = [
								i(
									'div',
									{
										class: 'language-svelte line-numbers-mode',
										'data-ext': 'svelte',
										'data-title': 'svelte',
									},
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'<'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'script'
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
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'	let'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' files'
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
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'	$'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' if'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'files'
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
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'		// Note that `files` is of type `FileList`, not an Array:'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'		// https://developer.mozilla.org/en-US/docs/Web/API/FileList'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'		console'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'log'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'files'
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
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'		for'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' file'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														' of'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' files'
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'			console'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'log'
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
														'`'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'${'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'file'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'name'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'}'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														': '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'${'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'file'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'size'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'}'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' bytes'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'`'
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
														'		}'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'	}'
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
														'script'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'<'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'label'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' for'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'avatar'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Upload a picture:'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'label'
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
														'input'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' accept'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'image/png, image/jpeg'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' bind'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'files'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' id'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'avatar'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
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
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'avatar'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' type'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'file'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
												i('span', { class: 'line' }),
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
														'label'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' for'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'many'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Upload multiple files of any type:'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'label'
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
														'input'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' bind'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														':'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'files'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' id'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'many'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' multiple'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' type'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'='
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'file'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
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
												i('span', { class: 'line' }),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'{#'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'if'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' files'
													),
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
														'	<'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'h2'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'Selected files:'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'h2'
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
														'	{#'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'each'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' Array'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'from'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'files'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														')'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' as'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' file'
													),
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
														'		<'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'p'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'>{'
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'name'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'}'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'{'
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
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'size'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'}'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' bytes)'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'</'
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
														'	{/'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'each'
													),
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
														'{/'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'if'
													),
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
					tab14: a(
						({ value: h, isActive: k }) =>
							l[79] ||
							(l[79] = [
								i(
									'div',
									{
										class: 'language-wasm line-numbers-mode',
										'data-ext': 'wasm',
										'data-title': 'wasm',
									},
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'module'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'	;; add the $even_check function to the top of the module'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'	('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'func'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' $even_check'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'param'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' $n'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'result'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														')'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'		local'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.get'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' $n'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'		i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 2'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'		i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.rem_u'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														' ;; if you take the remainder of a division by 2'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'		i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 0'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														' ;; even numbers will have a remainder 0'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'		i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.eq'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														' ;; $n % 2 == 0'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'	)'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'	;; add the $eq_2 function after $even_check'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'	('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'func'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' $eq_2'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'param'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' $n'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'result'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														')'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'		local'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.get'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' $n'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'		i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 2'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'		i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.eq'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														' ;; returns 1 if $n == 2'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'	)'
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
														'	;; add $multiple_check after $eq_2'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'	('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'func'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' $multiple_check'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'param'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' $n'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'param'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' $m'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'result'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														')'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'		local'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.get'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' $n'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'		local'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.get'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' $m'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'		i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.rem_u'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														' ;; get the remainder of $n / $m'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'		i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 0'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														' ;; I want to know if the remainder is 0'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'		i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.eq'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														' ;; that will tell us if $n is a multiple of $m'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'	)'
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
														'	;; add the is_prime exported function after $multiple_check'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'	('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														'func'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'export'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														' "'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'is_prime'
													),
													i(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														'"'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'param'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' $n'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'result'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														')'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'		('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'local'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' $i'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2E8F82', '--shiki-dark': '#5DA994' } },
														' i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														')'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'		('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'if'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.eq'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'local'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.get'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' $n'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 1'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														')) '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														';; 1 is not prime'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'		('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'then'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'			i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 0'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'			return'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'		))'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'		('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'if'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'call'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' $eq_2'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'local'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.get'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' $n'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														')) '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														';; check to see if $n is 2'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'		('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'then'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'			i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 1'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														' ;; 2 is prime'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'			return'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'		)'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'	)'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'	('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'block'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' $not_prime'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'		('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'call'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' $even_check'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'local'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.get'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' $n'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'))'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'		br_if'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' $not_prime'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														' ;; even numbers are not prime (except 2)'
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
														'		('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'local'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.set'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' $i'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 1'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'))'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'		('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'loop'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' $prime_test_loop'
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
														'			('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'local'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.tee'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' $i'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.add'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'local'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.get'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' $i'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 2'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') ) ) '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														';; $i += 2'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'			local'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.get'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' $n'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														' ;; stack = [$n, $i]'
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
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'			i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.ge_u'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														' ;; $i >= $n'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'			if'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														' ;; if $i >= $n, $n is prime'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'				i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 1'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'			return'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'			end'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'			('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'call'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' $multiple_check'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'local'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.get'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' $n'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') ('
													),
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'local'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.get'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' $i'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'))'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'			br_if'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' $not_prime'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														' ;; if $n is a multiple of $i this is not prime'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'			br'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' $prime_test_loop'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														' ;; branch back to top of loop'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'			) '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														';; end of $prime_test_loop loop'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														'		) '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														';; end of $not_prime block'
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
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'i32'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
														'.const'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
														' 0'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														' ;; return false'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														' )'
													),
												]),
												s(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
														') '
													),
													i(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														';; end of module'
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
		])
	)
}
const v = g(c, [
		['render', E],
		['__file', 'index.html.vue'],
	]),
	C = JSON.parse(
		'{"path":"/blog/guide/code/intro/","title":"介绍","lang":"zh-CN","frontmatter":{"title":"介绍","author":"pengzhanbo","icon":"ic:outline-code","createTime":"2024/04/04 10:35:45","permalink":"/blog/guide/code/intro/","description":"概述 主题 使用 Shiki 在 Markdown 代码块实现语法高亮。 相关信息 主题默认 加载了 Shiki 支持的超过 190+ 的 语言，这可能导致 在启用 vuepress 服务时， 需要多等待 300ms ~ 600ms 左右的时间来加载所有的 语言。 因此，如果比较在意 vuepress 启动时间，建议修改配置为仅加载 您所需要的 语言。...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/code/intro/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"介绍"}],["meta",{"property":"og:description","content":"概述 主题 使用 Shiki 在 Markdown 代码块实现语法高亮。 相关信息 主题默认 加载了 Shiki 支持的超过 190+ 的 语言，这可能导致 在启用 vuepress 服务时， 需要多等待 300ms ~ 600ms 左右的时间来加载所有的 语言。 因此，如果比较在意 vuepress 启动时间，建议修改配置为仅加载 您所需要的 语言。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"介绍\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":2.12,"words":635},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/代码/介绍.md","bulletin":false}'
	)
export { v as comp, C as data }
