import {
	_ as p,
	c as k,
	d as s,
	e,
	b as t,
	w as a,
	a as l,
	r as d,
	o as c,
} from './app-B_7CxFr0.js'
const g = {}
function u(m, i) {
	const n = d('VPIcon'),
		h = d('CodeTabs')
	return (
		c(),
		k('div', null, [
			i[2] ||
				(i[2] = s(
					'p',
					null,
					[
						e('主题支持在 Markdown 文件中嵌入 '),
						s(
							'a',
							{ href: 'https://jsfiddle.net/', target: '_blank', rel: 'noopener noreferrer' },
							'JS Fiddle'
						),
						e('。'),
					],
					-1
				)),
			i[3] ||
				(i[3] = s(
					'h2',
					{ id: '配置', tabindex: '-1' },
					[s('a', { class: 'header-anchor', href: '#配置' }, [s('span', null, '配置')])],
					-1
				)),
			i[4] || (i[4] = s('p', null, '此功能默认不启用，你可以在配置文件中启用它。', -1)),
			t(
				h,
				{ id: '9', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: a(({ value: r, isActive: o }) => [
						t(n, { name: 'vscode-icons:file-type-typescript' }),
						i[0] || (i[0] = s('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: a(
						({ value: r, isActive: o }) =>
							i[1] ||
							(i[1] = [
								s(
									'div',
									{ class: 'language-ts', 'data-ext': 'ts', 'data-title': 'ts' },
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
															'      markdownPower'
														),
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': {'
														),
													]),
													e(`
`),
													s('span', { class: 'line highlighted' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'        jsfiddle'
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
													]),
													e(`
`),
													s('span', { class: 'line' }, [
														s(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'      },'
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
									],
									-1
								),
							])
					),
					_: 1,
				}
			),
			i[5] ||
				(i[5] = l(
					'<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><h3 id="简单语法" tabindex="-1"><a class="header-anchor" href="#简单语法"><span>简单语法</span></a></h3><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">jsfiddle</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">user/id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><h3 id="更多选项" tabindex="-1"><a class="header-anchor" href="#更多选项"><span>更多选项</span></a></h3><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">jsfiddle theme=&quot;dark&quot; tab=&quot;js,css,html,result&quot; height=&quot;500px&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">user/id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><ul><li><code>user</code>: 用户</li><li><code>id</code>: jsfiddle id</li><li><code>theme</code>: 主题模式， 可选值： <code>&quot;light&quot; | &quot;dark&quot;</code></li><li><code>tab</code>: 选项卡， 可选值：<code>&quot;js&quot; | &quot;css&quot; | &quot;html&quot; | &quot;result&quot;</code>, 多个用 <code>&quot;,&quot;</code> 分割， 顺序将决定选项卡的排序，默认为 <code>js,css,html,result</code></li><li><code>height</code>: 高度</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p>输入：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">jsfiddle</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">pengzhanbo/1xbwz2p9</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>输出：</p>',
					10
				)),
			i[6] ||
				(i[6] = s(
					'iframe',
					{
						class: 'js-fiddle-iframe-wrapper',
						style: {
							width: '100%',
							height: '400px',
							margin: '16px auto',
							border: 'none',
							'border-radius': '5px',
						},
						title: 'JS Fiddle',
						src: 'https://jsfiddle.net/pengzhanbo/1xbwz2p9/embedded/js,css,html,result/dark/',
						allowfullscreen: 'true',
						allowpaymentrequest: 'true',
					},
					null,
					-1
				)),
			i[7] ||
				(i[7] = l(
					'<p>输入：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">jsfiddle tab=&quot;result,js,css,html&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">pengzhanbo/1xbwz2p9</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>输出：</p>',
					3
				)),
			i[8] ||
				(i[8] = s(
					'iframe',
					{
						class: 'js-fiddle-iframe-wrapper',
						style: {
							width: '100%',
							height: '400px',
							margin: '16px auto',
							border: 'none',
							'border-radius': '5px',
						},
						title: 'JS Fiddle',
						src: 'https://jsfiddle.net/pengzhanbo/1xbwz2p9/embedded/result,js,css,html/dark/',
						allowfullscreen: 'true',
						allowpaymentrequest: 'true',
					},
					null,
					-1
				)),
		])
	)
}
const f = p(g, [
		['render', u],
		['__file', 'index.html.vue'],
	]),
	b = JSON.parse(
		'{"path":"/blog/guide/code/jsfiddle/","title":"Js Fiddle","lang":"zh-CN","frontmatter":{"title":"Js Fiddle","author":"pengzhanbo","icon":"bxl:jsfiddle","createTime":"2024/04/04 10:42:21","permalink":"/blog/guide/code/jsfiddle/","description":"主题支持在 Markdown 文件中嵌入 JS Fiddle。 配置 此功能默认不启用，你可以在配置文件中启用它。 语法 简单语法 更多选项 user: 用户 id: jsfiddle id theme: 主题模式， 可选值： \\"light\\" | \\"dark\\" tab: 选项卡， 可选值：\\"js\\" | \\"css\\" | \\"html\\" | \\"result\\"...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/code/jsfiddle/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"Js Fiddle"}],["meta",{"property":"og:description","content":"主题支持在 Markdown 文件中嵌入 JS Fiddle。 配置 此功能默认不启用，你可以在配置文件中启用它。 语法 简单语法 更多选项 user: 用户 id: jsfiddle id theme: 主题模式， 可选值： \\"light\\" | \\"dark\\" tab: 选项卡， 可选值：\\"js\\" | \\"css\\" | \\"html\\" | \\"result\\"..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Js Fiddle\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.61,"words":183},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/代码演示/jsFiddle.md","bulletin":false}'
	)
export { f as comp, b as data }
