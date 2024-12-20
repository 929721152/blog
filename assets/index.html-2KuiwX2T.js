import {
	_ as k,
	c as u,
	d as i,
	e as s,
	b as e,
	w as n,
	a as c,
	r as a,
	o as g,
} from './app-B_7CxFr0.js'
const m = {}
function y(b, t) {
	const l = a('RouteLink'),
		o = a('VPIcon'),
		d = a('CodeTabs'),
		p = a('VideoYoutube')
	return (
		g(),
		u('div', null, [
			t[5] ||
				(t[5] = i(
					'h2',
					{ id: '概述', tabindex: '-1' },
					[i('a', { class: 'header-anchor', href: '#概述' }, [i('span', null, '概述')])],
					-1
				)),
			t[6] || (t[6] = i('p', null, '有时候，你想在你的文档中嵌入视频，以提高内容的表达能力。', -1)),
			t[7] || (t[7] = i('p', null, '主题提供了 嵌入 Youtube 视频 的功能。', -1)),
			i('p', null, [
				t[1] || (t[1] = s('该功能由 ')),
				e(
					l,
					{ to: '/' },
					{ default: n(() => t[0] || (t[0] = [s('vuepress-plugin-md-power')])), _: 1 }
				),
				t[2] || (t[2] = s(' 提供支持。')),
			]),
			t[8] ||
				(t[8] = i(
					'h2',
					{ id: '配置', tabindex: '-1' },
					[i('a', { class: 'header-anchor', href: '#配置' }, [i('span', null, '配置')])],
					-1
				)),
			t[9] || (t[9] = i('p', null, '该功能默认不启用。你需要在主题配置中开启。', -1)),
			e(
				d,
				{ id: '18', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: n(({ value: h, isActive: r }) => [
						e(o, { name: 'vscode-icons:file-type-typescript' }),
						t[3] || (t[3] = i('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: n(
						({ value: h, isActive: r }) =>
							t[4] ||
							(t[4] = [
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
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'        youtube'
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
										]),
									],
									-1
								),
							])
					),
					_: 1,
				}
			),
			t[10] ||
				(t[10] = c(
					'<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><p>简单的语法：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">youtube</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>更多选项：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">youtube autoplay loop start=&quot;0&quot; end=&quot;0&quot; width=&quot;100%&quot; height=&quot;400px&quot; ratio=&quot;16:9&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p><strong>选项说明：</strong></p><ul><li>id: 视频 ID</li><li>autoplay: 是否自动播放</li><li>loop: 是否循环播放</li><li>start: 视频开始播放时间点，单位为秒， 也可以使用 <code>mm:ss</code> 或 <code>hh:mm:ss</code> 格式</li><li>end: 视频结束播放时间点，单位为秒， 也可以使用 <code>mm:ss</code> 或 <code>hh:mm:ss</code> 格式</li><li>width: 视频宽度</li><li>height: 视频高度</li><li>ratio: 视频比例，默认 <code>16:9</code></li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><h3 id="宽频视频" tabindex="-1"><a class="header-anchor" href="#宽频视频"><span>宽频视频</span></a></h3><p>输入：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">youtube</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">0JJPfz5dg20</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>输出：</p>',
					12
				)),
			e(p, {
				src: 'https://www.youtube.com/embed//0JJPfz5dg20?',
				width: '100%',
				height: '',
				ratio: '',
				title: 'undefined',
			}),
		])
	)
}
const v = k(m, [
		['render', y],
		['__file', 'index.html.vue'],
	]),
	x = JSON.parse(
		'{"path":"/blog/guide/embed/video/youtube/","title":"Youtube 视频","lang":"zh-CN","frontmatter":{"title":"Youtube 视频","author":"pengzhanbo","icon":"mdi:youtube","createTime":"2024/03/28 14:30:33","permalink":"/blog/guide/embed/video/youtube/","description":"概述 有时候，你想在你的文档中嵌入视频，以提高内容的表达能力。 主题提供了 嵌入 Youtube 视频 的功能。 该功能由 提供支持。 配置 该功能默认不启用。你需要在主题配置中开启。 语法 简单的语法： 更多选项： 选项说明： id: 视频 ID autoplay: 是否自动播放 loop: 是否循环播放 start: 视频开始播放时间点，单位为秒，...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/embed/video/youtube/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"Youtube 视频"}],["meta",{"property":"og:description","content":"概述 有时候，你想在你的文档中嵌入视频，以提高内容的表达能力。 主题提供了 嵌入 Youtube 视频 的功能。 该功能由 提供支持。 配置 该功能默认不启用。你需要在主题配置中开启。 语法 简单的语法： 更多选项： 选项说明： id: 视频 ID autoplay: 是否自动播放 loop: 是否循环播放 start: 视频开始播放时间点，单位为秒，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Youtube 视频\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.83,"words":248},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/嵌入/youtube.md","bulletin":false}'
	)
export { v as comp, x as data }
