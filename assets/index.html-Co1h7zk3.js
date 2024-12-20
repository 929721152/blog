import { _ as n, c as h, a as l, d as i, e as a, b as e, o as p, r as o } from './app-B_7CxFr0.js'
const r = {}
function k(d, s) {
	const t = o('Icon')
	return (
		p(),
		h('div', null, [
			s[3] ||
				(s[3] = l(
					`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>支持 iconify 所有图标，通过 icon name 加载图标。</p><p>可在 <a href="https://icon-sets.iconify.design/" target="_blank" rel="noopener noreferrer">iconify search</a> 搜索图标使用。</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>name</td><td>string</td><td><code>&#39;&#39;</code></td><td>图标名</td></tr><tr><td>color</td><td>string</td><td><code>&#39;currentcolor&#39;</code></td><td>图标颜色</td></tr><tr><td>size</td><td>string</td><td><code>&#39;1em&#39;</code></td><td>图标大小</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> home - </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Icon</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">material-symbols:home</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">currentColor</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> size</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">1em</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> vscode - </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Icon</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">skill-icons:vscode-dark</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> size</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">2em</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> twitter - </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Icon</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">skill-icons:twitter</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> size</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">2em</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span></code></pre></div><p><strong>输出：</strong></p>`,
					9
				)),
			i('ul', null, [
				i('li', null, [
					s[0] || (s[0] = a('home - ')),
					e(t, { name: 'material-symbols:home', color: 'currentColor', size: '1em' }),
				]),
				i('li', null, [
					s[1] || (s[1] = a('vscode - ')),
					e(t, { name: 'skill-icons:vscode-dark', size: '2em' }),
				]),
				i('li', null, [
					s[2] || (s[2] = a('twitter - ')),
					e(t, { name: 'skill-icons:twitter', size: '2em' }),
				]),
			]),
		])
	)
}
const g = n(r, [
		['render', k],
		['__file', 'index.html.vue'],
	]),
	m = JSON.parse(
		'{"path":"/blog/guide/components/icon/","title":"图标","lang":"zh-CN","frontmatter":{"title":"图标","author":"pengzhanbo","icon":"grommet-icons:emoji","createTime":"2024/08/18 22:58:39","permalink":"/blog/guide/components/icon/","description":"概述 支持 iconify 所有图标，通过 icon name 加载图标。 可在 iconify search 搜索图标使用。 Props 示例 输入： 输出： home - vscode - twitter -","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/components/icon/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"图标"}],["meta",{"property":"og:description","content":"概述 支持 iconify 所有图标，通过 icon name 加载图标。 可在 iconify search 搜索图标使用。 Props 示例 输入： 输出： home - vscode - twitter -"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"图标\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.48,"words":145},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/组件/图标.md","bulletin":false}'
	)
export { g as comp, m as data }
