import {
	_ as l,
	c as d,
	a as n,
	b as i,
	w as e,
	d as k,
	r as a,
	o as r,
	e as o,
} from './app-B_7CxFr0.js'
const g = {}
function c(y, s) {
	const t = a('ImageCard'),
		h = a('CardGrid'),
		p = a('RouteLink')
	return (
		r(),
		d('div', null, [
			s[1] ||
				(s[1] = n(
					`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>使用 <code>&lt;ImageCard&gt;</code> 组件在页面中显示图片卡片。</p><p>图片卡片 有别于 markdown 的 普通插入图片方式，它展示与图片相关的更多信息，包括标题、描述、作者、链接等。 适用于如 摄影作品、设计作品、宣传海报 等场景。</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>image</td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>必填，图片链接</td></tr><tr><td>title</td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>可选，标题 (展示其它信息需要依赖此属性)</td></tr><tr><td>description</td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>可选，描述</td></tr><tr><td>author</td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>可选，作者</td></tr><tr><td>href</td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>可选，链接</td></tr><tr><td>date</td><td><code>string | Date | number</code></td><td><code>&#39;&#39;</code></td><td>可选，日期</td></tr><tr><td>width</td><td><code>string | number</code></td><td><code>&#39;&#39;</code></td><td>可选，宽度</td></tr><tr><td>center</td><td><code>boolean</code></td><td><code>false</code></td><td>可选，是否居中</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">ImageCard</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  image</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://cn.bing.com/th?id=OHR.AlfanzinaLighthouse_ZH-CN9704515669_1920x1080.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">阿尔凡齐纳灯塔，阿尔加维，葡萄牙</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  description</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">今天照片中的灯塔位于葡萄牙南部海岸阿尔加维的卡沃埃罗。阿尔凡齐纳灯塔建于1919年，照耀着大海，帮助船只在该地区周围危险的水域航行。这座灯塔是著名的旅游胜地，同时也是该地区与海洋紧密联系的象征。如果你有幸住在灯塔附近，那么本周末就是拜访灯塔的最佳时机。</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  href</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  author</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Andreas Kunz</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  date</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">2024/08/16</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">/&gt;</span></span></code></pre></div><p><strong>输出：</strong></p>`,
					9
				)),
			i(t, {
				image: 'https://cn.bing.com/th?id=OHR.AlfanzinaLighthouse_ZH-CN9704515669_1920x1080.webp',
				title: '阿尔凡齐纳灯塔，阿尔加维，葡萄牙',
				description:
					'今天照片中的灯塔位于葡萄牙南部海岸阿尔加维的卡沃埃罗。阿尔凡齐纳灯塔建于1919年，照耀着大海，帮助船只在该地区周围危险的水域航行。这座灯塔是著名的旅游胜地，同时也是该地区与海洋紧密联系的象征。如果你有幸住在灯塔附近，那么本周末就是拜访灯塔的最佳时机。',
				href: '/',
				author: 'Andreas Kunz',
				date: '2024/08/16',
			}),
			s[2] ||
				(s[2] = n(
					`<p>还可以放到 <code>&lt;CardGrid&gt;</code> 组件中。</p><p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">CardGrid</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">ImageCard</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    image</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://cn.bing.com/th?id=OHR.AlfanzinaLighthouse_ZH-CN9704515669_1920x1080.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">阿尔凡齐纳灯塔，阿尔加维，葡萄牙</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    description</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">...</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    href</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    author</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Andreas Kunz</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    date</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">2024/08/16</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  /&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">ImageCard</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    image</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://cn.bing.com/th?id=OHR.AlfanzinaLighthouse_ZH-CN9704515669_1920x1080.webp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">阿尔凡齐纳灯塔，阿尔加维，葡萄牙</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    description</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">...</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    href</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    author</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Andreas Kunz</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    date</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">2024/08/16</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  /&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">CardGrid</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><p><strong>输出：</strong></p>`,
					4
				)),
			i(h, null, {
				default: e(() => [
					i(t, {
						image:
							'https://cn.bing.com/th?id=OHR.AlfanzinaLighthouse_ZH-CN9704515669_1920x1080.webp',
						title: '阿尔凡齐纳灯塔，阿尔加维，葡萄牙',
						description:
							'今天照片中的灯塔位于葡萄牙南部海岸阿尔加维的卡沃埃罗。阿尔凡齐纳灯塔建于1919年，照耀着大海，帮助船只在该地区周围危险的水域航行。这座灯塔是著名的旅游胜地，同时也是该地区与海洋紧密联系的象征。如果你有幸住在灯塔附近，那么本周末就是拜访灯塔的最佳时机。',
						href: '/',
						author: 'Andreas Kunz',
						date: '2024/08/16',
					}),
					i(t, {
						image:
							'https://cn.bing.com/th?id=OHR.AlfanzinaLighthouse_ZH-CN9704515669_1920x1080.webp',
						title: '阿尔凡齐纳灯塔，阿尔加维，葡萄牙',
						description:
							'今天照片中的灯塔位于葡萄牙南部海岸阿尔加维的卡沃埃罗。阿尔凡齐纳灯塔建于1919年，照耀着大海，帮助船只在该地区周围危险的水域航行。这座灯塔是著名的旅游胜地，同时也是该地区与海洋紧密联系的象征。如果你有幸住在灯塔附近，那么本周末就是拜访灯塔的最佳时机。',
						href: '/',
						author: 'Andreas Kunz',
						date: '2024/08/16',
					}),
				]),
				_: 1,
			}),
			k('p', null, [
				i(
					p,
					{
						to: '/1.%E7%A4%BA%E4%BE%8B/%E7%85%A7%E7%89%87%E7%B1%BB%E4%BD%9C%E5%93%81%E7%A4%BA%E4%BE%8B.html',
					},
					{ default: e(() => s[0] || (s[0] = [o('查看 照片类作品示例')])), _: 1 }
				),
			]),
		])
	)
}
const D = l(g, [
		['render', c],
		['__file', 'index.html.vue'],
	]),
	m = JSON.parse(
		'{"path":"/blog/guide/components/image-card/","title":"图片卡片","lang":"zh-CN","frontmatter":{"title":"图片卡片","author":"pengzhanbo","icon":"fa:photo","createTime":"2024/08/18 23:35:51","permalink":"/blog/guide/components/image-card/","description":"概述 使用 <ImageCard> 组件在页面中显示图片卡片。 图片卡片 有别于 markdown 的 普通插入图片方式，它展示与图片相关的更多信息，包括标题、描述、作者、链接等。 适用于如 摄影作品、设计作品、宣传海报 等场景。 Props 示例 输入： 输出：","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/components/image-card/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"图片卡片"}],["meta",{"property":"og:description","content":"概述 使用 <ImageCard> 组件在页面中显示图片卡片。 图片卡片 有别于 markdown 的 普通插入图片方式，它展示与图片相关的更多信息，包括标题、描述、作者、链接等。 适用于如 摄影作品、设计作品、宣传海报 等场景。 Props 示例 输入： 输出："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"图片卡片\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":2.91,"words":874},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/组件/图片卡片.md","bulletin":false}'
	)
export { D as comp, m as data }
