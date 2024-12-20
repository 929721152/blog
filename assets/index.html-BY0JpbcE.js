import {
	_ as o,
	c as s,
	a as l,
	d as a,
	e as i,
	b as p,
	w as n,
	r as d,
	o as r,
} from './app-B_7CxFr0.js'
const c = {}
function h(u, e) {
	const t = d('RouteLink')
	return (
		r(),
		s('div', null, [
			e[13] ||
				(e[13] = l(
					`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>通用 Frontmatter 配置，适用于 所有的文章。</p><p>示例：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 标题</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">createTime</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 2024/03/02 20:01:09</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">permalink</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /config/frontmatter/basic/</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span></code></pre></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><h3 id="pagelayout" tabindex="-1"><a class="header-anchor" href="#pagelayout"><span>pageLayout</span></a></h3><ul><li><p>类型： <code>false | &#39;home&#39; | &#39;doc&#39; | &#39;custom&#39; | &#39;page&#39; | &#39;friends&#39; | string</code></p></li><li><p>默认值： <code>doc</code></p></li><li><p>详情：</p><p>页面布局方式。</p><ul><li><code>&#39;home&#39;</code>: 主页布局</li><li><code>&#39;doc&#39;</code>: 文章页布局，包括左侧侧边栏、文章内容、右侧侧边栏、导航栏、评论等</li><li><code>&#39;page&#39;</code>: 仅包含导航栏 和 MD 文件内容，可以使用此布局方式自定义页面内容</li><li><code>&#39;friends&#39;</code>: 友链页布局</li><li><code>&#39;custom&#39;</code>: 仅包含 MD 文件内容，可以使用此布局方式完全自定义页面内容</li><li><code>false</code>: 等同于 <code>custom</code></li><li><code>string</code>: 可以传入一个全局组件组件名，该组件将被应用为布局组件</li></ul></li></ul><h3 id="pageclass" tabindex="-1"><a class="header-anchor" href="#pageclass"><span>pageClass</span></a></h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>&#39;&#39;</code></p></li><li><p>详情：</p><p>自定义页面额外的 类名。</p></li></ul><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title"><span>title</span></a></h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>&#39;&#39;</code></p></li><li><p>详情：</p><p>文章标题。</p><p>主题会在文件创建时，自动填充 当前文件名作为 文章标题。</p></li></ul><h3 id="badge" tabindex="-1"><a class="header-anchor" href="#badge"><span>badge</span></a></h3><ul><li>类型： <code>string | { text: string, type?: &#39;info&#39; | &#39;tip&#39; | &#39;warning&#39; | &#39;danger&#39; }</code></li></ul><p>在文章标题右侧显示 徽章。</p><h3 id="createtime" tabindex="-1"><a class="header-anchor" href="#createtime"><span>createTime</span></a></h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>&#39;&#39;</code></p></li><li><p>详情：</p><p>文章创建时间。</p><p>主题会在文件创建时，自动填充 当前时间作为 文章创建时间。</p></li></ul><h3 id="permalink" tabindex="-1"><a class="header-anchor" href="#permalink"><span>permalink</span></a></h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>&#39;&#39;</code></p></li><li><p>详情：</p><p>文章永久链接。</p><p>主题会在文件创建时:</p><ul><li>博客类型的文章，自动填充 <code>/article/</code> + <code>nanoid 生成的 8 位随机字符串</code> 作为 文章永久链接</li><li>notes 目录下的文章，会根据 notes 的配置，自动填充 文章永久链接</li></ul></li></ul><h3 id="externallinkicon" tabindex="-1"><a class="header-anchor" href="#externallinkicon"><span>externalLinkIcon</span></a></h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>默认值： <code>true</code></p></li><li><p>详情：</p><p>当前文章内的 外部链接是否显示 外部链接图标。</p></li></ul><h3 id="backtotop" tabindex="-1"><a class="header-anchor" href="#backtotop"><span>backToTop</span></a></h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>默认值： <code>true</code></p></li><li><p>详情：</p><p>当前文章是否 显示 回到顶部 的按钮。</p></li></ul><h3 id="comments" tabindex="-1"><a class="header-anchor" href="#comments"><span>comments</span></a></h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>默认值： <code>true</code></p></li><li><p>详情：</p><p>当前文章是否 可评论。 仅在启用了评论功能的情况下生效。</p></li></ul><h3 id="aside" tabindex="-1"><a class="header-anchor" href="#aside"><span>aside</span></a></h3><ul><li><p>类型： <code>boolean | &#39;left&#39;</code></p></li><li><p>默认值： <code>true</code></p></li><li><p>详情：</p><p>当前文章是否 显示 右侧边栏。</p><p>当设置为 <code>&#39;left&#39;</code> 时，右侧边栏将显示在左侧。</p></li></ul><h3 id="navbar" tabindex="-1"><a class="header-anchor" href="#navbar"><span>navbar</span></a></h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>默认值： <code>true</code></p></li><li><p>详情：</p><p>当前文章是否 显示 导航栏。</p></li></ul><h3 id="outline" tabindex="-1"><a class="header-anchor" href="#outline"><span>outline</span></a></h3><ul><li><p>类型： <code>false | number | [number, number] | &#39;deep&#39;</code></p></li><li><p>默认值： <code>[2, 3]</code></p></li><li><p>详情：</p><p>要显示的标题级别。</p><p>单个数字表示只显示该级别的标题。</p><p>如果传递的是一个元组，第一个数字是最小级别，第二个数字是最大级别。</p><p><code>&#39;deep&#39;</code> 与 <code>[2, 6]</code> 相同，将显示从 <code>&lt;h2&gt;</code> 到 <code>&lt;h6&gt;</code> 的所有标题。</p></li></ul><h3 id="prev" tabindex="-1"><a class="header-anchor" href="#prev"><span>prev</span></a></h3><ul><li><p>类型： <code>string | { text: string, link: string, icon?: string }</code></p></li><li><p>默认值： <code>&#39;&#39;</code></p></li><li><p>详情：</p><p>自定义当前文章的上一篇文章。</p><ul><li>博客类型的文章，主题根据时间排序，自动填充上一篇文章的标题和链接。</li><li>notes 类型的文章，主题根据 note sidebar 配置，自动填充上一篇文章的标题和链接。</li></ul></li></ul><h3 id="next" tabindex="-1"><a class="header-anchor" href="#next"><span>next</span></a></h3><ul><li><p>类型： <code>string | { text: string, link: string, icon?: string }</code></p></li><li><p>默认值： <code>&#39;&#39;</code></p></li><li><p>详情：</p><p>自定义当前文章的下一篇文章。</p><ul><li>博客类型的文章，主题根据时间排序，自动填充下一篇文章的标题和链接。</li><li>notes 类型的文章，主题根据 note sidebar 配置，自动填充下一篇文章的标题和链接。</li></ul></li></ul><h3 id="readingtime" tabindex="-1"><a class="header-anchor" href="#readingtime"><span>readingTime</span></a></h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>默认值： <code>true</code></p></li><li><p>详情：</p><p>当前文章是否 显示 阅读时长。</p></li></ul><h3 id="lastupdated" tabindex="-1"><a class="header-anchor" href="#lastupdated"><span>lastUpdated</span></a></h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>默认值： <code>true</code></p></li><li><p>详情：</p><p>当前文章是否 显示 最后更新时间。 最后更新时间 根据 git 提交时间自动填充。</p></li></ul><h3 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors"><span>contributors</span></a></h3>`,
					39
				)),
			a('ul', null, [
				e[5] ||
					(e[5] = a('li', null, [a('p', null, [i('类型： '), a('code', null, 'boolean')])], -1)),
				e[6] ||
					(e[6] = a(
						'li',
						null,
						[a('p', null, [i('默认值： '), a('code', null, 'true | string | string[]')])],
						-1
					)),
				a('li', null, [
					e[2] || (e[2] = a('p', null, '详情：', -1)),
					e[3] ||
						(e[3] = a(
							'p',
							null,
							'当前文章是否 显示 贡献者。 贡献者 根据 git 提交者自动填充。',
							-1
						)),
					e[4] ||
						(e[4] = a(
							'p',
							null,
							'如果您的文章来源于第三方， git 提交不能完整列出所有的作者，您可以在此处补充贡献者。',
							-1
						)),
					a('p', null, [
						e[1] || (e[1] = i('额外信息补充请查看 ')),
						p(
							t,
							{
								to: '/notes/theme/blog/guide/%E5%8A%9F%E8%83%BD/%E6%96%87%E7%AB%A0%E8%B4%A1%E7%8C%AE%E8%80%85.html#info',
							},
							{ default: n(() => e[0] || (e[0] = [i('contributors')])), _: 1 }
						),
					]),
				]),
			]),
			e[14] ||
				(e[14] = l(
					'<h3 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog"><span>changelog</span></a></h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>默认值： <code>false</code></p></li><li><p>详情：</p><p>当前页面是否显示页面变更历史。</p></li></ul><h3 id="copyright" tabindex="-1"><a class="header-anchor" href="#copyright"><span>copyright</span></a></h3>',
					3
				)),
			a('ul', null, [
				e[11] ||
					(e[11] = a(
						'li',
						null,
						[
							a('p', null, [
								i('类型： '),
								a('code', null, 'boolean | CopyrightLicense | CopyrightFrontmatter'),
							]),
						],
						-1
					)),
				e[12] ||
					(e[12] = a('li', null, [a('p', null, [i('默认值： '), a('code', null, 'false')])], -1)),
				a('li', null, [
					e[9] || (e[9] = a('p', null, '详情：', -1)),
					e[10] || (e[10] = a('p', null, '当前文章是否 显示 版权信息。', -1)),
					a('p', null, [
						e[8] || (e[8] = i('完整信息请查看 ')),
						p(
							t,
							{
								to: '/notes/theme/blog/guide/%E5%8A%9F%E8%83%BD/%E6%96%87%E7%AB%A0%E7%89%88%E6%9D%83%E6%89%80%E6%9C%89.html',
							},
							{ default: n(() => e[7] || (e[7] = [i('copyright')])), _: 1 }
						),
					]),
				]),
			]),
			e[15] ||
				(e[15] = l(
					'<h3 id="editlink" tabindex="-1"><a class="header-anchor" href="#editlink"><span>editLink</span></a></h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>默认值： <code>true</code></p></li><li><p>详情：</p><p>当前文章是否 显示 文章编辑 按钮。</p></li></ul><h3 id="watermark" tabindex="-1"><a class="header-anchor" href="#watermark"><span>watermark</span></a></h3><ul><li><p>类型： <code>boolean | WatermarkOptions</code></p></li><li><p>默认值： <code>undefined</code> 主题不启用水印，或不启用全局水印时，默认值为 <code>false</code>，启用全局水印则为 <code>true</code>。</p></li><li><p>详情： 配置当前文章 水印。</p><p>当类型为 boolean 时，表示是否启用水印。</p><p>当类型为 WatermarkOptions 时，表示当前页面水印配置。</p><p>可以参考 <a href="https://zhensherlock.github.io/watermark-js-plus/zh/config/" target="_blank" rel="noopener noreferrer">watermark-js-plus</a> 。</p></li></ul>',
					4
				)),
		])
	)
}
const g = o(c, [
		['render', h],
		['__file', 'index.html.vue'],
	]),
	b = JSON.parse(
		`{"path":"/config/frontmatter/basic/","title":"通用配置","lang":"zh-CN","frontmatter":{"title":"通用配置","author":"pengzhanbo","createTime":"2024/03/02 20:01:09","permalink":"/config/frontmatter/basic/","badge":"徽章 badge","description":"概述 通用 Frontmatter 配置，适用于 所有的文章。 示例： 配置 pageLayout 类型： false | 'home' | 'doc' | 'custom' | 'page' | 'friends' | string 默认值： doc 详情： 页面布局方式。 'home': 主页布局 'doc': 文章页布局，包括左侧侧边栏、文章内容...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/config/frontmatter/basic/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"通用配置"}],["meta",{"property":"og:description","content":"概述 通用 Frontmatter 配置，适用于 所有的文章。 示例： 配置 pageLayout 类型： false | 'home' | 'doc' | 'custom' | 'page' | 'friends' | string 默认值： doc 详情： 页面布局方式。 'home': 主页布局 'doc': 文章页布局，包括左侧侧边栏、文章内容..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"通用配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":3.8,"words":1140},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/config/frontmatter/basic.md","bulletin":false}`
	)
export { g as comp, b as data }
