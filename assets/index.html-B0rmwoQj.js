import {
	_ as p,
	c as k,
	a as n,
	d as i,
	e as a,
	b as e,
	w as r,
	r as t,
	o as d,
} from './app-B_7CxFr0.js'
const o = {},
	g = { id: 'home', tabindex: '-1' },
	c = { class: 'header-anchor', href: '#home' }
function m(y, s) {
	const l = t('Badge'),
		h = t('RouteLink')
	return (
		d(),
		k('div', null, [
			s[3] ||
				(s[3] = n(
					`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>仅适用于 首页。在 <code>{sourceDir}/README.md</code> 中进行配置。</p><p>示例：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">home</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">config</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> banner</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> custom</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span></code></pre></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>`,
					5
				)),
			i('h3', g, [
				i('a', c, [
					i('span', null, [s[0] || (s[0] = a('home ')), e(l, { type: 'warning', text: '弃用' })]),
				]),
			]),
			s[4] ||
				(s[4] = n(
					`<ul><li><p>类型： <code>boolean</code></p></li><li><p>详情：</p><p>声明是否为 首页。</p><p>已弃用，请使用 <code>pageLayout: &#39;home&#39;</code> 代替。</p></li></ul><h3 id="pagelayout" tabindex="-1"><a class="header-anchor" href="#pagelayout"><span>pageLayout</span></a></h3><ul><li><p>类型：<code>&#39;home&#39;</code></p></li><li><p>详情：</p><p>声明当前页面为 首页。</p></li></ul><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>config</span></a></h3><ul><li>类型： <code>PlumeHomeConfig[]</code></li></ul><p>定义 首页 区域</p><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> PlumeHomeConfigBase</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 该区域的类型，根据类型应用不同的组件</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">banner</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">hero</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">text-image</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">image-text</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">features</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">profile</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">custom</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 该区域是否占满全屏</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  full</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 该区域的背景图片</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 你可以定义在 浅色/暗色 模式下的背景图片</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  backgroundImage</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | { </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">light</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">dark</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 该区域的背景 定位方式</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  backgroundAttachment</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">fixed</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">local</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,
					7
				)),
			i('p', null, [
				s[2] || (s[2] = a('更多详细配置请参考 ')),
				e(
					h,
					{ to: '/notes/theme/blog/guide/%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A6%96%E9%A1%B5.html' },
					{ default: r(() => s[1] || (s[1] = [a('自定义首页')])), _: 1 }
				),
			]),
		])
	)
}
const D = p(o, [
		['render', m],
		['__file', 'index.html.vue'],
	]),
	u = JSON.parse(
		`{"path":"/config/frontmatter/home/","title":"首页","lang":"zh-CN","frontmatter":{"title":"首页","author":"pengzhanbo","createTime":"2024/03/03 15:00:43","permalink":"/config/frontmatter/home/","description":"概述 仅适用于 首页。在 {sourceDir}/README.md 中进行配置。 示例： 配置 home 类型： boolean 详情： 声明是否为 首页。 已弃用，请使用 pageLayout: 'home' 代替。 pageLayout 类型：'home' 详情： 声明当前页面为 首页。 config 类型： PlumeHomeConfig[] ...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/config/frontmatter/home/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"首页"}],["meta",{"property":"og:description","content":"概述 仅适用于 首页。在 {sourceDir}/README.md 中进行配置。 示例： 配置 home 类型： boolean 详情： 声明是否为 首页。 已弃用，请使用 pageLayout: 'home' 代替。 pageLayout 类型：'home' 详情： 声明当前页面为 首页。 config 类型： PlumeHomeConfig[] ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"首页\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.71,"words":212},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/config/frontmatter/home.md","bulletin":false}`
	)
export { D as comp, u as data }
