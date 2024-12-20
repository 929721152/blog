import {
	_ as c,
	c as g,
	d as i,
	e,
	b as t,
	w as p,
	a as n,
	r as l,
	o as m,
} from './app-B_7CxFr0.js'
const u = {}
function y(f, s) {
	const d = l('RouteLink'),
		h = l('VPIcon'),
		o = l('CodeTabs'),
		a = l('PDFViewer')
	return (
		m(),
		g('div', null, [
			s[5] ||
				(s[5] = i(
					'h2',
					{ id: '概述', tabindex: '-1' },
					[i('a', { class: 'header-anchor', href: '#概述' }, [i('span', null, '概述')])],
					-1
				)),
			s[6] ||
				(s[6] = i(
					'p',
					null,
					'主题支持在 markdown 中嵌入 PDF 文件，它能够在页面中直接阅读 PDF 。',
					-1
				)),
			i('p', null, [
				s[1] || (s[1] = e('该功能由 ')),
				t(
					d,
					{ to: '/' },
					{ default: p(() => s[0] || (s[0] = [e('vuepress-plugin-md-power')])), _: 1 }
				),
				s[2] || (s[2] = e(' 提供支持。')),
			]),
			s[7] ||
				(s[7] = i(
					'h2',
					{ id: '配置', tabindex: '-1' },
					[i('a', { class: 'header-anchor', href: '#配置' }, [i('span', null, '配置')])],
					-1
				)),
			s[8] || (s[8] = i('p', null, '该功能默认不启用。你需要在主题配置中开启。', -1)),
			t(
				o,
				{ id: '15', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: p(({ value: r, isActive: k }) => [
						t(h, { name: 'vscode-icons:file-type-typescript' }),
						s[3] || (s[3] = i('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: p(
						({ value: r, isActive: k }) =>
							s[4] ||
							(s[4] = [
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
												e(`
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
												e(`
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
												e(`
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
												e(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'        pdf'
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
												e(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'      },'
													),
												]),
												e(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    }'
													),
												]),
												e(`
`),
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  })'
													),
												]),
												e(`
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
			s[9] ||
				(s[9] = n(
					'<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><p>最简单的语法如下：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">pdf</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>当需要打开特定页面时，在 <code>pdf</code> 后面跟随一个 页数。</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">pdf 2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>还可以添加更多的 选项到 <code>@[pdf ]</code> 中，更灵活的控制行为。</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">pdf 2 no-toolbar width=&quot;100%&quot; height=&quot;400px&quot; ratio=&quot;16:9&quot; zoom=&quot;100&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><ul><li><code>no-toolbar</code> - 不显示工具栏</li><li><code>width</code> - 宽度，默认为 100%</li><li><code>height</code> - 高度，默认为 <code>auto</code></li><li><code>ratio</code> - 宽高比, 默认为 <code>16:9</code>, 仅当未指定高度时生效</li><li><code>zoom</code> - 缩放比例, 百分比。</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><h3 id="默认" tabindex="-1"><a class="header-anchor" href="#默认"><span>默认</span></a></h3><p>输入：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">pdf</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">https://plume.pengzhanbo.cn/files/sample.pdf</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>输出：</p>',
					13
				)),
			t(a, {
				src: '/files/sample.pdf',
				title: 'sample.pdf',
				page: 1,
				'no-toolbar': !1,
				width: '100%',
				height: '',
				ratio: '',
				zoom: 50,
			}),
			s[10] ||
				(s[10] = n(
					'<h3 id="设置页码为-2" tabindex="-1"><a class="header-anchor" href="#设置页码为-2"><span>设置页码为 2</span></a></h3><p>输入：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">pdf 2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">https://plume.pengzhanbo.cn/files/sample.pdf</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>输出：</p>',
					4
				)),
			t(a, {
				src: '/files/sample.pdf',
				title: 'sample.pdf',
				page: 2,
				'no-toolbar': !1,
				width: '100%',
				height: '',
				ratio: '',
				zoom: 95,
			}),
			s[11] ||
				(s[11] = n(
					'<h3 id="不显示工具栏" tabindex="-1"><a class="header-anchor" href="#不显示工具栏"><span>不显示工具栏</span></a></h3><p>输入：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">pdf no-toolbar</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">https://plume.pengzhanbo.cn/files/sample.pdf</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>输出：</p>',
					4
				)),
			t(a, {
				src: '/files/sample.pdf',
				title: 'sample.pdf',
				page: 1,
				'no-toolbar': !0,
				width: '100%',
				height: '',
				ratio: '',
				zoom: 50,
			}),
			s[12] ||
				(s[12] = n(
					'<h3 id="缩放比-90" tabindex="-1"><a class="header-anchor" href="#缩放比-90"><span>缩放比 90%</span></a></h3><p>输入：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">pdf zoom=&quot;90&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">https://plume.pengzhanbo.cn/files/sample.pdf</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>输出：</p>',
					4
				)),
			t(a, {
				src: '/files/sample.pdf',
				title: 'sample.pdf',
				page: 1,
				'no-toolbar': !1,
				width: '100%',
				height: '',
				ratio: '',
				zoom: 90,
			}),
			s[13] ||
				(s[13] = n(
					'<h3 id="宽高比-21-29" tabindex="-1"><a class="header-anchor" href="#宽高比-21-29"><span>宽高比 21:29</span></a></h3><p>输入：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">pdf zoom=&quot;95&quot; ratio=&quot;21:29&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">https://plume.pengzhanbo.cn/files/sample.pdf</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>输出：</p>',
					4
				)),
			t(a, {
				src: '/files/sample.pdf',
				title: 'sample.pdf',
				page: 1,
				'no-toolbar': !1,
				width: '100%',
				height: '',
				ratio: '21:29',
				zoom: 95,
			}),
		])
	)
}
const D = c(u, [
		['render', y],
		['__file', 'index.html.vue'],
	]),
	v = JSON.parse(
		'{"path":"/blog/guide/embed/pdf/","title":"PDF 阅读","lang":"zh-CN","frontmatter":{"title":"PDF 阅读","author":"pengzhanbo","icon":"teenyicons:pdf-outline","createTime":"2024/03/28 13:30:53","permalink":"/blog/guide/embed/pdf/","description":"概述 主题支持在 markdown 中嵌入 PDF 文件，它能够在页面中直接阅读 PDF 。 该功能由 提供支持。 配置 该功能默认不启用。你需要在主题配置中开启。 语法 最简单的语法如下： 当需要打开特定页面时，在 pdf 后面跟随一个 页数。 还可以添加更多的 选项到 @[pdf ] 中，更灵活的控制行为。 no-toolbar - 不显示工具栏 ...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/embed/pdf/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"PDF 阅读"}],["meta",{"property":"og:description","content":"概述 主题支持在 markdown 中嵌入 PDF 文件，它能够在页面中直接阅读 PDF 。 该功能由 提供支持。 配置 该功能默认不启用。你需要在主题配置中开启。 语法 最简单的语法如下： 当需要打开特定页面时，在 pdf 后面跟随一个 页数。 还可以添加更多的 选项到 @[pdf ] 中，更灵活的控制行为。 no-toolbar - 不显示工具栏 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PDF 阅读\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":1.08,"words":324},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/嵌入/pdf.md","bulletin":false}'
	)
export { D as comp, v as data }
