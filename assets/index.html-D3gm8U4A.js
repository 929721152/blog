import { _ as s, c as a, d as t, e as o, b as n, a as c, o as l, r as d } from './app-B_7CxFr0.js'
const p = {},
	r = { id: '图片优化', tabindex: '-1' },
	h = { class: 'header-anchor', href: '#图片优化' }
function g(m, e) {
	const i = d('Badge')
	return (
		l(),
		a('div', null, [
			t('h2', r, [
				t('a', h, [
					t('span', null, [
						e[0] || (e[0] = o('图片优化 ')),
						n(i, { type: 'warning', text: '试验性' }),
					]),
				]),
			]),
			e[1] ||
				(e[1] = c(
					`<p>当我们在 markdown 中使用 <code>[alt](url)</code> 或者 <code>&lt;img src=&quot;url&quot;&gt;</code> 嵌入图片后，虽然页面按照预期的显示了 图片。</p><p>由于图片的体积不同，当图片体积较小，网络情况良好的时候，我们不会感受到页面的布局有产生明显的抖动。 然而，当图片体积较大，或者网络情况较差时，由于图片为完成加载，原本页面上应该显示图片的位置被后面的 内容挤压，等到图片加载完成后，页面布局会发生变化，图片重新占据应该显示的位置，其它的内容被排开。</p><p>事实上这个体验相当不友好。特别是对于页面内的图片数量较多时，页面会频繁发生布局变化，这一过程还可能 感知到卡顿，较为明显的是布局的抖动。</p><p>因此，让页面布局稳定下来，图片是一个必须解决的问题。</p><p>从 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#height" target="_blank" rel="noopener noreferrer">MDN &gt; img</a> 我们可以知道：</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><code>&lt;img&gt;</code> 同时包括 <code>height</code> 和 <code>width</code> 使浏览器在加载图像之前计算图像的长宽比。 此长宽比用于保留显示图像所需的空间，减少甚至防止在下载图像并将其绘制到屏幕上时布局的偏移。 减少布局偏移是良好用户体验和 Web 性能的主要组成部分。</p></div><p>因此，主题围绕这个问题，提供了 一个解决方案：</p><p>为 markdown 文件中的 <code>[alt](url)</code> 或者 <code>&lt;img src=&quot;url&quot;&gt;</code> 自动添加 <code>width</code> 和 <code>height</code> 属性。</p><p>你可以通过配置 <code>markdownPower</code> 来启用它：</p><div class="language-ts" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      markdownPower</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        imageSize</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// &#39;local&#39; | &#39;all&#39;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre></div><p>启用此功能后，主题会通过图片资源地址，获取图片的原始尺寸，然后为图片添加 <code>width</code> 和 <code>height</code> 属性。</p><ul><li>如果设置为 <code>&#39;local&#39;</code>， 则仅为 本地图片添加 <code>width</code> 和 <code>height</code> 属性。</li><li>如果设置为 <code>&#39;all&#39;</code>， 则包括 <strong>本地图片</strong> 和 <strong>网络图片</strong> 都 添加 <code>width</code> 和 <code>height</code> 属性。</li><li>如果设置为 <code>true</code>， 则等同于 <code>&#39;local&#39;</code></li></ul><div class="hint-container important"><p class="hint-container-title">重要</p><p>请注意，出于性能考虑，即使您启用了此功能，该功能也仅在 构建生产包时生效。</p></div><div class="hint-container important"><p class="hint-container-title">重要</p><p>请谨慎使用 <code>&#39;all&#39;</code> 选项，该选项会在构建生产包时，请求所有 markdown 中包含的 远程图片资源， 这对于包含较多图片资源的站点而言，会使得构建时间变长。</p><p>主题也针对此类情况做了优化，请求远程图片仅在获取 <strong>几 KB</strong> 的数据包足够分析尺寸后不再等待请求完成， 同时并发请求其他图片资源。这在一定程度上能够改善构建时间。</p></div><h2 id="图标优化" tabindex="-1"><a class="header-anchor" href="#图标优化"><span>图标优化</span></a></h2><p>得益于 开源项目 <a href="https://icon-sets.iconify.design/" target="_blank" rel="noopener noreferrer">iconify</a> 的强大，您可以在主题内使用大约 20 万 个图标。</p><p>当然，这并不意味着主题需要加载全部的图标。您可能已经注意到，主题推荐您在本地安装 <code>@iconify/json</code> 包，这需要 下载大约 <strong>70Mb</strong> 的资源包，如果加载全部的图标到文档站点中，这太大太大了。</p><p>但请放心，主题仅会加载您有使用到的图标资源，这包括 导航栏、侧边栏、首页 Features 等配置中的 iconify 图标， 以及通过语法糖 <code>:[collect:name]:</code> 和 组件 <code>&lt;Icon name=&quot;icon_name&quot; /&gt;</code> 等各种方式使用的图标。</p><p>当从本地 <code>@iconify/json</code> 中加载图标时， iconify 通过 <code>[collect]:[name]</code> 的形式为图标命名，其中根据 <code>collect</code> 来区分图标所属的集合，每个集合拥有 100 ~ 1000+ 数量不等的图标，保存在以 <code>collect</code> 为维度的 <code>json</code> 文件中。当文档使用了比较多的不同的 <code>collect</code> 下的图标时，即使从本地加载和解析 <code>json</code>，也需要花费比较长的时间， 以主题站点为例，主题使用了 <strong>54 个collect</strong> 超过 <strong>160+ 个图标</strong>, 在初始启动时，在图标解析加载大约需要耗费 <code>500ms</code> 的时间开销，这显然是难以接受的。</p><p>针对这种情况，主题会在首次启动时，缓存有使用的图标资源，当二次启动时，优先从缓存中加载图标，由于仅缓存有使用的 图标资源，加载这部分资源远比 频繁解析不同 <code>collect</code> 下的图标资源要快的多，且资源利用率更高。</p><p>其时间开销从 <code>500ms</code> 减少到了 <code>20ms</code> 甚至更低！这也进一步优化了 启动开发服务的时间！</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>使用 <strong>54 个collect</strong> 下的图标资源 这种情况相对来说比较极端，这也意味着 54 次的 i/o 读取和 json 解析， 花费 <code>500ms</code> 的时间开销也算是正常，然而实际使用的图标数量仅 <code>160+ 个</code> 时，所带来的 直观感受是 <strong>不应该花费这么长的时间的</strong> ，因此，缓存这部分的图标资源是一个很好的选择。</p></div>`,
					22
				)),
		])
	)
}
const u = s(p, [
		['render', g],
		['__file', 'index.html.vue'],
	]),
	f = JSON.parse(
		'{"path":"/blog/guide/optimize-build/","title":"构建优化","lang":"zh-CN","frontmatter":{"title":"构建优化","icon":"clarity:bundle-solid","outline":2,"createTime":"2024/09/10 01:50:20","permalink":"/blog/guide/optimize-build/","description":"图片优化 当我们在 markdown 中使用 [alt](url) 或者 <img src=\\"url\\"> 嵌入图片后，虽然页面按照预期的显示了 图片。 由于图片的体积不同，当图片体积较小，网络情况良好的时候，我们不会感受到页面的布局有产生明显的抖动。 然而，当图片体积较大，或者网络情况较差时，由于图片为完成加载，原本页面上应该显示图片的位置被后面的 内...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/optimize-build/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"构建优化"}],["meta",{"property":"og:description","content":"图片优化 当我们在 markdown 中使用 [alt](url) 或者 <img src=\\"url\\"> 嵌入图片后，虽然页面按照预期的显示了 图片。 由于图片的体积不同，当图片体积较小，网络情况良好的时候，我们不会感受到页面的布局有产生明显的抖动。 然而，当图片体积较大，或者网络情况较差时，由于图片为完成加载，原本页面上应该显示图片的位置被后面的 内..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"构建优化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":4.29,"words":1288},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/构建优化.md","bulletin":false}'
	)
export { u as comp, f as data }
