import {
	_ as k,
	c as g,
	d as t,
	e as i,
	b as e,
	w as a,
	a as c,
	r as n,
	o as m,
} from './app-B_7CxFr0.js'
const y = {}
function u(f, s) {
	const p = n('RouteLink'),
		h = n('VPIcon'),
		d = n('CodeTabs'),
		l = n('Plot')
	return (
		m(),
		g('div', null, [
			s[11] ||
				(s[11] = t(
					'h2',
					{ id: '概述', tabindex: '-1' },
					[t('a', { class: 'header-anchor', href: '#概述' }, [t('span', null, '概述')])],
					-1
				)),
			t('p', null, [
				s[1] || (s[1] = i('使用 ')),
				s[2] || (s[2] = t('code', null, '<Plot>', -1)),
				s[3] || (s[3] = i(' 组件显示 ')),
				e(
					p,
					{ to: '/blog/guide/markdown/advance/#%E9%9A%90%E7%A7%98-%E6%96%87%E6%9C%AC' },
					{ default: a(() => s[0] || (s[0] = [i('“隐秘”文本')])), _: 1 }
				),
				s[4] || (s[4] = i(' ，能够更灵活的控制行为。')),
			]),
			s[12] || (s[12] = t('p', null, '该组件默认不启用，你需要在 theme 配置中启用。', -1)),
			e(
				d,
				{ id: '9', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: a(({ value: o, isActive: r }) => [
						e(h, { name: 'vscode-icons:file-type-typescript' }),
						s[5] || (s[5] = t('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: a(
						({ value: o, isActive: r }) =>
							s[6] ||
							(s[6] = [
								t(
									'div',
									{ class: 'language-ts', 'data-ext': 'ts', 'data-title': 'ts' },
									[
										t('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										t('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											t('code', null, [
												t('span', { class: 'line' }, [
													t(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'export'
													),
													t(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' default'
													),
													t(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' defineUserConfig'
													),
													t(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'({'
													),
												]),
												i(`
`),
												t('span', { class: 'line' }, [
													t(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'  theme'
													),
													t(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': '
													),
													t(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'plumeTheme'
													),
													t(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'({'
													),
												]),
												i(`
`),
												t('span', { class: 'line' }, [
													t(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'    plugins'
													),
													t(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': {'
													),
												]),
												i(`
`),
												t('span', { class: 'line' }, [
													t(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      markdownPower'
													),
													t(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': {'
													),
												]),
												i(`
`),
												t('span', { class: 'line' }, [
													t(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'        plot'
													),
													t(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': '
													),
													t(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'true'
													),
													t(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														','
													),
												]),
												i(`
`),
												t('span', { class: 'line' }, [
													t(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'      },'
													),
												]),
												i(`
`),
												t('span', { class: 'line' }, [
													t(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    }'
													),
												]),
												i(`
`),
												t('span', { class: 'line' }, [
													t(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  })'
													),
												]),
												i(`
`),
												t('span', { class: 'line' }, [
													t(
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
			s[13] ||
				(s[13] = c(
					`<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>trigger</td><td><code>&#39;hover&#39; | &#39;click&#39;</code></td><td><code>&#39;hover&#39;</code></td><td>鼠标悬停触发，或者点击触发</td></tr><tr><td>mask</td><td><code>string | { light: string, dark: string }</code></td><td><code>#000</code></td><td>遮罩颜色</td></tr><tr><td>color</td><td><code>string | { light: string, dark: string }</code></td><td><code>#fff</code></td><td>文本颜色</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 鼠标悬停 - </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Plot</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">悬停时可见</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Plot</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 点击 - </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Plot</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> trigger</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">click</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">点击时可见</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Plot</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><p><strong>输出：</strong></p>`,
					6
				)),
			t('ul', null, [
				t('li', null, [
					s[8] || (s[8] = i('鼠标悬停 - ')),
					e(l, null, { default: a(() => s[7] || (s[7] = [i('悬停时可见')])), _: 1 }),
				]),
				t('li', null, [
					s[10] || (s[10] = i('点击 - ')),
					e(
						l,
						{ trigger: 'click' },
						{ default: a(() => s[9] || (s[9] = [i('点击时可见')])), _: 1 }
					),
				]),
			]),
		])
	)
}
const A = k(y, [
		['render', u],
		['__file', 'index.html.vue'],
	]),
	v = JSON.parse(
		'{"path":"/blog/guide/components/plot/","title":"“隐秘”文本","lang":"zh-CN","frontmatter":{"title":"“隐秘”文本","author":"pengzhanbo","icon":"lets-icons:hide-eye","createTime":"2024/08/18 23:02:39","permalink":"/blog/guide/components/plot/","description":"概述 使用 <Plot> 组件显示 ，能够更灵活的控制行为。 该组件默认不启用，你需要在 theme 配置中启用。 Props 示例 输入： 输出： 鼠标悬停 - 点击 -","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/components/plot/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"“隐秘”文本"}],["meta",{"property":"og:description","content":"概述 使用 <Plot> 组件显示 ，能够更灵活的控制行为。 该组件默认不启用，你需要在 theme 配置中启用。 Props 示例 输入： 输出： 鼠标悬停 - 点击 -"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"“隐秘”文本\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.61,"words":184},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/组件/隐秘文本.md","bulletin":false}'
	)
export { A as comp, v as data }
