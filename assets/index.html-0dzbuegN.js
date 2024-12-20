import {
	_ as r,
	c as d,
	d as s,
	e as i,
	b as n,
	w as a,
	a as h,
	r as l,
	o,
} from './app-B_7CxFr0.js'
const k = {}
function g(m, t) {
	const p = l('RouteLink'),
		e = l('Card')
	return (
		o(),
		d('div', null, [
			t[8] ||
				(t[8] = s(
					'h2',
					{ id: '概述', tabindex: '-1' },
					[s('a', { class: 'header-anchor', href: '#概述' }, [s('span', null, '概述')])],
					-1
				)),
			t[9] ||
				(t[9] = s(
					'p',
					null,
					[i('使用 '), s('code', null, '<Card>'), i(' 组件在页面中显示卡片。')],
					-1
				)),
			s('p', null, [
				t[1] || (t[1] = i('也可以使用 markdown ')),
				n(
					p,
					{ to: '/blog/guide/markdown/advance/#%E5%8D%A1%E7%89%87' },
					{ default: a(() => t[0] || (t[0] = [i('卡片容器')])), _: 1 }
				),
				t[2] || (t[2] = i(' 语法，替代 ')),
				t[3] || (t[3] = s('code', null, '<Card>', -1)),
				t[4] || (t[4] = i(' 组件。')),
			]),
			t[10] ||
				(t[10] = h(
					`<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>标题</td></tr><tr><td>icon</td><td><code>string | { svg: string }</code></td><td><code>&#39;&#39;</code></td><td>显示在标题左侧的图标，支持 iconify 所有图标，也可以使用 图片链接</td></tr></tbody></table><h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽"><span>插槽</span></a></h2><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>卡片内容</td></tr><tr><td>title</td><td>自定义标题</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Card</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">卡片标题</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> icon</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">twemoji:astonished-face</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  这里是卡片内容。</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Card</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Card</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> #title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">p</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> style</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">color: red</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">卡片标题</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">p</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  这里是卡片内容。</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Card</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><p><strong>输出：</strong></p>`,
					8
				)),
			n(
				e,
				{ title: '卡片标题', icon: 'twemoji:astonished-face' },
				{ default: a(() => t[5] || (t[5] = [i(' 这里是卡片内容。 ')])), _: 1 }
			),
			n(e, null, {
				title: a(
					() => t[6] || (t[6] = [s('p', { style: { color: 'red', margin: '0' } }, '卡片标题', -1)])
				),
				default: a(() => [t[7] || (t[7] = i(' 这里是卡片内容。 '))]),
				_: 1,
			}),
			t[11] ||
				(t[11] = s(
					'div',
					{ class: 'hint-container info' },
					[
						s('p', { class: 'hint-container-title' }, '相关信息'),
						s(
							'p',
							null,
							'在插槽内也可以使用 markdown 语法，但需要注意的是，markdown 语法需要与 标签之间间隔一行。 否则将被识别为普通文本。'
						),
					],
					-1
				)),
		])
	)
}
const y = r(k, [
		['render', g],
		['__file', 'index.html.vue'],
	]),
	u = JSON.parse(
		'{"path":"/blog/guide/components/cark/","title":"卡片","lang":"zh-CN","frontmatter":{"title":"卡片","author":"pengzhanbo","icon":"solar:card-broken","createTime":"2024/08/18 23:09:07","permalink":"/blog/guide/components/cark/","description":"概述 使用 <Card> 组件在页面中显示卡片。 也可以使用 markdown 语法，替代 <Card> 组件。 Props 插槽 示例 输入： 输出： 相关信息 在插槽内也可以使用 markdown 语法，但需要注意的是，markdown 语法需要与 标签之间间隔一行。 否则将被识别为普通文本。","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/components/cark/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"卡片"}],["meta",{"property":"og:description","content":"概述 使用 <Card> 组件在页面中显示卡片。 也可以使用 markdown 语法，替代 <Card> 组件。 Props 插槽 示例 输入： 输出： 相关信息 在插槽内也可以使用 markdown 语法，但需要注意的是，markdown 语法需要与 标签之间间隔一行。 否则将被识别为普通文本。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"卡片\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.82,"words":247},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/组件/卡片.md","bulletin":false}'
	)
export { y as comp, u as data }
