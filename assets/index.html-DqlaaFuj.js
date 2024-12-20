import {
	_ as g,
	c as u,
	a as t,
	b as a,
	w as l,
	d as s,
	e,
	r as n,
	o as m,
} from './app-B_7CxFr0.js'
const y = {}
function f(b, i) {
	const d = n('VPIcon'),
		h = n('CodeTabs'),
		r = n('RouteLink'),
		p = n('CanIUseViewer'),
		o = n('ClientOnly')
	return (
		m(),
		u('div', null, [
			i[6] ||
				(i[6] = t(
					'<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>在编写文章时， 提供嵌入 <a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer">can-i-use</a> WEB feature 各平台支持说明 的功能。</p><p>方便在描述某个 WEB feature 时，能更直观的表述 该特性的支持程度。</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><p>此功能默认不启用，你可以在配置文件中启用它。</p>',
					5
				)),
			a(
				h,
				{ id: '15', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: l(({ value: k, isActive: c }) => [
						a(d, { name: 'vscode-icons:file-type-typescript' }),
						i[0] || (i[0] = s('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: l(
						({ value: k, isActive: c }) =>
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
															'        caniuse'
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
			i[7] ||
				(i[7] = t(
					'<p>在你的 文章 markdown文件中，使用以下格式：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">caniuse</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">feature</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div>',
					2
				)),
			s('p', null, [
				i[3] || (i[3] = e('为了方便使用，主题提供了工具支持：')),
				a(
					r,
					{ to: '/notes/tools/caniuse.html' },
					{ default: l(() => i[2] || (i[2] = [e('caniuse 特性搜索')])), _: 1 }
				),
				i[4] || (i[4] = e('，你可以直接使用该工具 帮助生成 markdown 代码。')),
			]),
			i[8] ||
				(i[8] = t(
					`<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">caniuse</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">feature</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">caniuse{browser_versions}</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">feature</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">caniuse embed_type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">feature</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">caniuse embed_type{browser_versions}</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">feature</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><ul><li><p><code>feature</code></p><p>必填。 正确取值请参考 <a href="https://caniuse-embed.vercel.app/zh-CN" target="_blank" rel="noopener noreferrer">caniuse-embed.vercel.app</a></p></li><li><p><code>{browser_versions}</code></p><p>可选。当前特性在多个版本中的支持情况。</p><p>默认值为: <code>{-2,1}</code></p><p>格式： <code>{past,future}</code> 取值范围为 <code>-5 ~ 3</code></p><ul><li>小于<code>0</code> 表示低于当前浏览器版本的支持情况</li><li><code>0</code> 表示当前浏览器版本的支持情况</li><li>大于<code>0</code> 表示高于当前浏览器版本的支持情况</li></ul></li><li><p><code>embed_type</code></p><p>可选。 资源嵌入的类型。</p><p>类型： <code>&#39;embed&#39; | &#39;image&#39;</code></p><p>默认值为：<code>&#39;embed&#39;</code></p></li></ul><div class="hint-container caution"><p class="hint-container-title">警告</p><p>不再推荐使用 image 类型，建议使用 embed 类型，主题更换了 embed 实现技术方案， 现在的 embed 类型优势已远远超过 image 类型，加载速度更快，体积更小，交互体验更好。</p></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p><strong>获取 css 伪类选择器 <code>:dir()</code> 在各个浏览器的支持情况：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">caniuse</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">css-matches-pseudo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>效果：</p>`,
					8
				)),
			a(p, { feature: 'css-matches-pseudo', meta: 'skblv', past: '2', future: '1' }),
			i[9] ||
				(i[9] = t(
					'<p><strong>以图片的形式，获取 css 伪类选择器 <code>:dir()</code> 在各个浏览器的支持情况：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">caniuse image</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">css-matches-pseudo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>效果：</p>',
					3
				)),
			a(o, null, {
				default: l(
					() =>
						i[5] ||
						(i[5] = [
							s(
								'p',
								null,
								[
									s('picture', null, [
										s('source', {
											type: 'image/webp',
											srcset: 'https://caniuse.bitsofco.de/image/css-matches-pseudo.webp',
										}),
										s('source', {
											type: 'image/png',
											srcset: 'https://caniuse.bitsofco.de/image/css-matches-pseudo.png',
										}),
										s('img', {
											src: 'https://caniuse.bitsofco.de/image/css-matches-pseudo.jpg',
											alt: 'Data on support for the css-matches-pseudo feature across the major browsers from caniuse.com',
											width: '100%',
										}),
									]),
								],
								-1
							),
						])
				),
				_: 1,
			}),
			i[10] ||
				(i[10] = t(
					'<p><strong>获取 css 伪类选择器 <code>:dir()</code> 特定范围浏览器的支持情况：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">caniuse{-2,3}</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">css-matches-pseudo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>效果：</p>',
					3
				)),
			a(p, { feature: 'css-matches-pseudo', meta: 'zculs', past: '2', future: '3' }),
		])
	)
}
const v = g(y, [
		['render', f],
		['__file', 'index.html.vue'],
	]),
	A = JSON.parse(
		'{"path":"/blog/guide/markdown/caniuse/","title":"Can I Use","lang":"zh-CN","frontmatter":{"title":"Can I Use","createTime":"2024/09/30 14:50:55","icon":"streamline:desktop-help","permalink":"/blog/guide/markdown/caniuse/","description":"概述 在编写文章时， 提供嵌入 can-i-use WEB feature 各平台支持说明 的功能。 方便在描述某个 WEB feature 时，能更直观的表述 该特性的支持程度。 配置 此功能默认不启用，你可以在配置文件中启用它。 在你的 文章 markdown文件中，使用以下格式： 为了方便使用，主题提供了工具支持：，你可以直接使用该工具 帮助生成...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/markdown/caniuse/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"Can I Use"}],["meta",{"property":"og:description","content":"概述 在编写文章时， 提供嵌入 can-i-use WEB feature 各平台支持说明 的功能。 方便在描述某个 WEB feature 时，能更直观的表述 该特性的支持程度。 配置 此功能默认不启用，你可以在配置文件中启用它。 在你的 文章 markdown文件中，使用以下格式： 为了方便使用，主题提供了工具支持：，你可以直接使用该工具 帮助生成..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Can I Use\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":1.61,"words":482},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/markdown/caniuse.md","bulletin":false}'
	)
export { v as comp, A as data }
