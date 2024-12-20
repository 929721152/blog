import {
	_ as k,
	c,
	d as i,
	e as s,
	b as a,
	w as d,
	a as o,
	r as t,
	o as g,
} from './app-B_7CxFr0.js'
const u = {}
function y(b, e) {
	const l = t('VPIcon'),
		h = t('CodeTabs'),
		n = t('CodeSandboxViewer')
	return (
		g(),
		c('div', null, [
			e[2] ||
				(e[2] = i(
					'p',
					null,
					[
						s('主题支持在 Markdown 文件中嵌入 '),
						i(
							'a',
							{ href: 'https://codesandbox.io', target: '_blank', rel: 'noopener noreferrer' },
							'Code Sandbox'
						),
						s('。'),
					],
					-1
				)),
			e[3] ||
				(e[3] = i(
					'h2',
					{ id: '配置', tabindex: '-1' },
					[i('a', { class: 'header-anchor', href: '#配置' }, [i('span', null, '配置')])],
					-1
				)),
			e[4] || (e[4] = i('p', null, '此功能默认不启用，你可以在配置文件中启用它。', -1)),
			a(
				h,
				{ id: '9', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: d(({ value: p, isActive: r }) => [
						a(l, { name: 'vscode-icons:file-type-typescript' }),
						e[0] || (e[0] = i('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: d(
						({ value: p, isActive: r }) =>
							e[1] ||
							(e[1] = [
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
															'    plugins'
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
															'      markdownPower'
														),
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															': {'
														),
													]),
													s(`
`),
													i('span', { class: 'line highlighted' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
															'        codesandbox'
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
															', '
														),
													]),
													s(`
`),
													i('span', { class: 'line' }, [
														i(
															'span',
															{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
															'      },'
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
			e[5] ||
				(e[5] = o(
					'<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><h3 id="简单语法" tabindex="-1"><a class="header-anchor" href="#简单语法"><span>简单语法</span></a></h3><p>将 Code Sandbox 嵌入到页面中</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">codesandbox</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>使用 Code Sandbox 跳转按钮</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">codesandbox button</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">workspace/id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><h3 id="更多选项" tabindex="-1"><a class="header-anchor" href="#更多选项"><span>更多选项</span></a></h3><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">codesanbox title=&quot;xxx&quot; layout=&quot;Editor+Preview&quot; height=&quot;500px&quot; navbar=&quot;false&quot; console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">id#filepath</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><ul><li><code>id</code>: Code Sandbox ID</li><li><code>title</code>: Code Sandbox 标题</li><li><code>layout</code>: 代码预览布局 可选值： <code>Preview</code>， <code>Editor</code>， <code>Editor+Preview</code></li><li><code>height</code>: 代码预览高度</li><li><code>navbar</code>: 是否显示导航栏，默认为 true</li><li><code>console</code>: 是否显示控制台，默认为 false</li><li><code>filepath</code>: 文件路径</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p>codeSandbox 跳转按钮：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">codesandbox button</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">reaction/5wyzu</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>输出：</p>',
					13
				)),
			a(n, {
				title: '',
				height: '500px',
				width: '100%',
				user: 'reaction',
				id: '5wyzu',
				type: 'button',
				filepath: '',
				console: !1,
				navbar: !0,
				layout: '',
			}),
			e[6] ||
				(e[6] = o(
					'<p>codeSandbox 内嵌到页面中：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">codesandbox</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">5wyzu</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>输出：</p>',
					3
				)),
			a(n, {
				title: '',
				height: '500px',
				width: '100%',
				user: '',
				id: '5wyzu',
				type: 'embed',
				filepath: '',
				console: !1,
				navbar: !0,
				layout: '',
			}),
		])
	)
}
const x = k(u, [
		['render', y],
		['__file', 'index.html.vue'],
	]),
	v = JSON.parse(
		'{"path":"/blog/guide/code/code-sandbox/","title":"Code Sandbox","lang":"zh-CN","frontmatter":{"title":"Code Sandbox","author":"pengzhanbo","icon":"lucide:codesandbox","createTime":"2024/04/04 03:42:13","permalink":"/blog/guide/code/code-sandbox/","description":"主题支持在 Markdown 文件中嵌入 Code Sandbox。 配置 此功能默认不启用，你可以在配置文件中启用它。 语法 简单语法 将 Code Sandbox 嵌入到页面中 使用 Code Sandbox 跳转按钮 更多选项 id: Code Sandbox ID title: Code Sandbox 标题 layout: 代码预览布局 可选...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/code/code-sandbox/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"Code Sandbox"}],["meta",{"property":"og:description","content":"主题支持在 Markdown 文件中嵌入 Code Sandbox。 配置 此功能默认不启用，你可以在配置文件中启用它。 语法 简单语法 将 Code Sandbox 嵌入到页面中 使用 Code Sandbox 跳转按钮 更多选项 id: Code Sandbox ID title: Code Sandbox 标题 layout: 代码预览布局 可选..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Code Sandbox\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.71,"words":214},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/代码演示/codeSandbox.md","bulletin":false}'
	)
export { x as comp, v as data }
