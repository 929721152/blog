import {
	_ as r,
	c as k,
	d as e,
	e as s,
	b as a,
	w as n,
	a as t,
	r as l,
	o as c,
} from './app-B_7CxFr0.js'
const g = {}
function m(u, i) {
	const p = l('VPIcon'),
		d = l('CodeTabs')
	return (
		c(),
		k('div', null, [
			i[2] ||
				(i[2] = e(
					'p',
					null,
					[
						s('主题支持在 Markdown 文件中嵌入 '),
						e(
							'a',
							{ href: 'https://codepen.io/', target: '_blank', rel: 'noopener noreferrer' },
							'CodePen'
						),
						s('。'),
					],
					-1
				)),
			i[3] ||
				(i[3] = e(
					'h2',
					{ id: '配置', tabindex: '-1' },
					[e('a', { class: 'header-anchor', href: '#配置' }, [e('span', null, '配置')])],
					-1
				)),
			i[4] || (i[4] = e('p', null, '此功能默认不启用，你可以在配置文件中启用它。', -1)),
			a(
				d,
				{ id: '9', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: n(({ value: o, isActive: h }) => [
						a(p, { name: 'vscode-icons:file-type-typescript' }),
						i[0] || (i[0] = e('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: n(
						({ value: o, isActive: h }) =>
							i[1] ||
							(i[1] = [
								e(
									'div',
									{ class: 'language-ts', 'data-ext': 'ts', 'data-title': 'ts' },
									[
										e('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										e(
											'pre',
											{
												class:
													'shiki shiki-themes vitesse-light vitesse-dark has-highlighted vp-code',
											},
											[
												e('code', null, [
													e('span', { class: 'line' }, [
														e(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'export'
														),
														e(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															' default'
														),
														e(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															' defineUserConfig'
														),
														e(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'({'
														),
													]),
													s(`
`),
													e('span', { class: 'line' }, [
														e(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'  theme'
														),
														e(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': '
														),
														e(
															'span',
															{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
															'plumeTheme'
														),
														e(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'({'
														),
													]),
													s(`
`),
													e('span', { class: 'line' }, [
														e(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'    plugins'
														),
														e(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': {'
														),
													]),
													s(`
`),
													e('span', { class: 'line' }, [
														e(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'      markdownPower'
														),
														e(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': {'
														),
													]),
													s(`
`),
													e('span', { class: 'line highlighted' }, [
														e(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'        codepen'
														),
														e(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': '
														),
														e(
															'span',
															{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
															'true'
														),
														e(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															', '
														),
													]),
													s(`
`),
													e('span', { class: 'line' }, [
														e(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'      },'
														),
													]),
													s(`
`),
													e('span', { class: 'line' }, [
														e(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'    }'
														),
													]),
													s(`
`),
													e('span', { class: 'line' }, [
														e(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'  })'
														),
													]),
													s(`
`),
													e('span', { class: 'line' }, [
														e(
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
				(i[5] = t(
					'<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><p>简单语法：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">codepen</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">user/slash</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>更多选项支持：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">codepen preview editable tab=&quot;css,result&quot; theme=&quot;dark&quot; height=&quot;500px&quot; width=&quot;100%&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">user/slash</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><ul><li><code>preview</code>: 是否渲染为预览模式</li><li><code>editable</code>: 是否可编辑</li><li><code>tab</code>: 默认显示的标签， 默认为 <code>result</code>，多个使用 <code>,</code> 分隔</li><li><code>theme</code>: 主题， 可选值 <code>dark</code> 和 <code>light</code></li><li><code>height</code>: 容器高度， 默认为 <code>400px</code></li><li><code>width</code>: 容器宽度， 默认为 <code>100%</code></li><li><code>user</code>: CodePen 用户名</li><li><code>slash</code>: CodePen 代码文件名</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p>输入：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">codepen</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">leimapapa/RwOZQOW</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>输出：</p>',
					10
				)),
			i[6] ||
				(i[6] = e(
					'iframe',
					{
						class: 'code-pen-iframe-wrapper',
						src: 'https://codepen.io/leimapapa/embed/RwOZQOW?default-tab=result',
						title: 'Codepen',
						style: { width: '100%', height: '400px', margin: '16px auto', 'border-radius': '5px' },
						frameborder: 'no',
						loading: 'lazy',
						allowtransparency: 'true',
						allowfullscreen: 'true',
					},
					[
						s('See the Pen '),
						e('a', { href: 'https://codepen.io/leimapapa/pen/RwOZQOW' }, 'Codepen'),
						s(' by leimapapa ('),
						e('a', { href: 'https://codepen.io/leimapapa' }, '@leimapapa'),
						s(') on '),
						e('a', { href: 'https://codepen.io/' }, 'CodePen'),
						s('.'),
					],
					-1
				)),
			i[7] ||
				(i[7] = t(
					'<p><strong>预览模式：</strong></p><p>输入：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">codepen preview</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">leimapapa/RwOZQOW</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>输出：</p>',
					4
				)),
			i[8] ||
				(i[8] = e(
					'iframe',
					{
						class: 'code-pen-iframe-wrapper',
						src: 'https://codepen.io/leimapapa/embed/preview/RwOZQOW?default-tab=result',
						title: 'Codepen',
						style: { width: '100%', height: '400px', margin: '16px auto', 'border-radius': '5px' },
						frameborder: 'no',
						loading: 'lazy',
						allowtransparency: 'true',
						allowfullscreen: 'true',
					},
					[
						s('See the Pen '),
						e('a', { href: 'https://codepen.io/leimapapa/pen/RwOZQOW' }, 'Codepen'),
						s(' by leimapapa ('),
						e('a', { href: 'https://codepen.io/leimapapa' }, '@leimapapa'),
						s(') on '),
						e('a', { href: 'https://codepen.io/' }, 'CodePen'),
						s('.'),
					],
					-1
				)),
			i[9] ||
				(i[9] = t(
					'<p><strong>编辑模式：</strong></p><p>输入：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">codepen editable tab=&quot;html,result&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">leimapapa/RwOZQOW</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>输出：</p>',
					4
				)),
			i[10] ||
				(i[10] = e(
					'iframe',
					{
						class: 'code-pen-iframe-wrapper',
						src: 'https://codepen.io/leimapapa/embed/RwOZQOW?editable=true&default-tab=html%2Cresult',
						title: 'Codepen',
						style: { width: '100%', height: '400px', margin: '16px auto', 'border-radius': '5px' },
						frameborder: 'no',
						loading: 'lazy',
						allowtransparency: 'true',
						allowfullscreen: 'true',
					},
					[
						s('See the Pen '),
						e('a', { href: 'https://codepen.io/leimapapa/pen/RwOZQOW' }, 'Codepen'),
						s(' by leimapapa ('),
						e('a', { href: 'https://codepen.io/leimapapa' }, '@leimapapa'),
						s(') on '),
						e('a', { href: 'https://codepen.io/' }, 'CodePen'),
						s('.'),
					],
					-1
				)),
		])
	)
}
const b = r(g, [
		['render', m],
		['__file', 'index.html.vue'],
	]),
	f = JSON.parse(
		'{"path":"/blog/guide/code/code-pen/","title":"Code Pen","lang":"zh-CN","frontmatter":{"title":"Code Pen","author":"pengzhanbo","icon":"mingcute:codepen-line","createTime":"2024/04/04 10:41:58","permalink":"/blog/guide/code/code-pen/","description":"主题支持在 Markdown 文件中嵌入 CodePen。 配置 此功能默认不启用，你可以在配置文件中启用它。 语法 简单语法： 更多选项支持： preview: 是否渲染为预览模式 editable: 是否可编辑 tab: 默认显示的标签， 默认为 result，多个使用 , 分隔 theme: 主题， 可选值 dark 和 light height...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/code/code-pen/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"Code Pen"}],["meta",{"property":"og:description","content":"主题支持在 Markdown 文件中嵌入 CodePen。 配置 此功能默认不启用，你可以在配置文件中启用它。 语法 简单语法： 更多选项支持： preview: 是否渲染为预览模式 editable: 是否可编辑 tab: 默认显示的标签， 默认为 result，多个使用 , 分隔 theme: 主题， 可选值 dark 和 light height..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Code Pen\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.76,"words":227},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/代码演示/codepen.md","bulletin":false}'
	)
export { b as comp, f as data }
