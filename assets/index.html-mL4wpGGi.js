import {
	_ as d,
	c as k,
	a as p,
	b as n,
	w as l,
	r as h,
	o as r,
	d as s,
	e as a,
} from './app-B_7CxFr0.js'
const c = {}
function o(g, i) {
	const e = h('VPCardMasonry'),
		t = h('VPCard')
	return (
		r(),
		k('div', null, [
			i[8] ||
				(i[8] = p(
					`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>瀑布流容器是一个 通用的容器组件，你可以把任何内容放到 <code>&lt;CardMasonry&gt;</code> 里面，容器会自动计算每一个 <strong>项</strong> 的高度， 然后将它们按照瀑布流的方式进行排列。</p><details class="hint-container details"><summary>什么是项 ？</summary><p>项 表示的是一个单独的内容，可以是图片、文字、视频等等。</p><ul><li>从 markdown 的语法而言，独占一行的可以被认为是一个项。（该行的前后应该有空行）</li><li>从 html 的结构而言，容器下的每一个子元素都会被认为是一个项。</li></ul></details><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">CardMasonry</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">img</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> src</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">...</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> alt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">...</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 更多内容 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">CardMasonry</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">cols</td><td style="text-align:left;"><code>number | Record&lt;&#39;sm&#39; | &#39;md&#39; | &#39;lg&#39;, number&gt;</code></td><td style="text-align:left;"><code>3</code></td><td style="text-align:left;">列数</td></tr><tr><td style="text-align:left;">gap</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>16</code></td><td style="text-align:left;">列之间的间距</td></tr></tbody></table><p>组件默认会根据屏幕宽度自动调整列数。在空间足够时，默认显示三列，小屏幕下显示双列。</p><p>你可以通过 <code>cols</code> 配置列数。当传入 <code>number</code> 时，所有尺寸均显示为 <code>number</code> 个卡片。 传入 <code>{ sm: number, md: number, lg: number }</code> 时，根据屏幕宽度自动调整列数。</p><ul><li><code>sm</code> : <code>&lt; 640px</code></li><li><code>md</code> : <code>&gt;= 640px &lt; 960px</code></li><li><code>lg</code> : <code>&gt;= 960px</code></li></ul><h2 id="markdown-语法支持" tabindex="-1"><a class="header-anchor" href="#markdown-语法支持"><span>Markdown 语法支持</span></a></h2><p>在 markdown 中，可以使用 <code>::: card-masonry</code> 容器代替 <code>&lt;CardMasonry&gt;</code>。</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark has-highlighted vp-code"><code><span class="line highlighted"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: card-masonry cols=&quot;3&quot; gap=&quot;16&quot; </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">![](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">/images/1.png</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 更多内容 --&gt;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: </span></span></code></pre></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><h3 id="图片瀑布流" tabindex="-1"><a class="header-anchor" href="#图片瀑布流"><span>图片瀑布流</span></a></h3><p>瀑布流特别适合用于展示图片，你可以直接在将 <code>![](image_url)</code> 写到 <code>::: card-masonry</code> 中。</p><p><strong>输入：</strong></p><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: card-masonry</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">![](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">image_url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">![](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">image_url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">![](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">image_url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">![](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">image_url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">![](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">image_url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">![](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">image_url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>`,
					18
				)),
			n(e, null, {
				default: l(
					() =>
						i[0] ||
						(i[0] = [
							s(
								'p',
								null,
								[
									s('img', {
										src: 'https://images.unsplash.com/photo-1719937051124-91c677bc58fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
										alt: 'a',
									}),
								],
								-1
							),
							s(
								'p',
								null,
								[
									s('img', {
										src: 'https://plus.unsplash.com/premium_photo-1731329153355-1015daf2cb92?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
										alt: 'b',
									}),
								],
								-1
							),
							s(
								'p',
								null,
								[
									s('img', {
										src: 'https://images.unsplash.com/photo-1731323036230-fb37b4d9ed71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
										alt: 'c',
									}),
								],
								-1
							),
							s(
								'p',
								null,
								[
									s('img', {
										src: 'https://images.unsplash.com/photo-1730630906214-1256b57d65b7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
										alt: 'a',
									}),
								],
								-1
							),
							s(
								'p',
								null,
								[
									s('img', {
										src: 'https://plus.unsplash.com/premium_photo-1733864822156-f3cf26187fd9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
										alt: 'b',
									}),
								],
								-1
							),
							s(
								'p',
								null,
								[
									s('img', {
										src: 'https://images.unsplash.com/photo-1731756748993-85e1513dfc76?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8',
										alt: 'a',
									}),
								],
								-1
							),
							s(
								'p',
								null,
								[
									s('img', {
										src: 'https://images.unsplash.com/photo-1733705879328-a18f2a025c67?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx',
										alt: 'b',
									}),
								],
								-1
							),
						])
				),
				_: 1,
			}),
			i[9] ||
				(i[9] = p(
					`<h3 id="卡片瀑布流" tabindex="-1"><a class="header-anchor" href="#卡片瀑布流"><span>卡片瀑布流</span></a></h3><p>瀑布流也适合用于展示卡片，你可以直接在将 <code>::: card</code> 写到 <code>::: card-masonry</code> 中。</p><p><strong>输入：</strong></p><div class="language-md line-numbers-mode has-collapsed collapsed" data-ext="md" data-title="md" style="--vp-collapsed-lines:15;"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::: card-masonry</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: card title=&quot;卡片1&quot;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">卡片内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: card title=&quot;卡片2&quot;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">卡片内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">卡片内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: card title=&quot;卡片3&quot;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">卡片内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: card title=&quot;卡片4&quot;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">卡片内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: card title=&quot;卡片5&quot;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">卡片内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">卡片内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: card title=&quot;卡片6&quot;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">卡片内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::::</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p><strong>输出：</strong></p>`,
					5
				)),
			n(e, null, {
				default: l(() => [
					n(
						t,
						{ title: '卡片1' },
						{ default: l(() => i[1] || (i[1] = [s('p', null, '卡片内容', -1)])), _: 1 }
					),
					n(
						t,
						{ title: '卡片2' },
						{
							default: l(
								() => i[2] || (i[2] = [s('p', null, '卡片内容', -1), s('p', null, '卡片内容', -1)])
							),
							_: 1,
						}
					),
					n(
						t,
						{ title: '卡片3' },
						{ default: l(() => i[3] || (i[3] = [s('p', null, '卡片内容', -1)])), _: 1 }
					),
					n(
						t,
						{ title: '卡片4' },
						{ default: l(() => i[4] || (i[4] = [s('p', null, '卡片内容', -1)])), _: 1 }
					),
					n(
						t,
						{ title: '卡片5' },
						{
							default: l(
								() => i[5] || (i[5] = [s('p', null, '卡片内容', -1), s('p', null, '卡片内容', -1)])
							),
							_: 1,
						}
					),
					n(
						t,
						{ title: '卡片6' },
						{ default: l(() => i[6] || (i[6] = [s('p', null, '卡片内容', -1)])), _: 1 }
					),
				]),
				_: 1,
			}),
			i[10] ||
				(i[10] = p(
					`<h3 id="代码块瀑布流" tabindex="-1"><a class="header-anchor" href="#代码块瀑布流"><span>代码块瀑布流</span></a></h3><p><strong>输入：</strong></p><div class="language-md line-numbers-mode has-collapsed collapsed" data-ext="md" data-title="md" style="--vp-collapsed-lines:15;"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::card-masonry</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">ts</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">json</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">name</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">John</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">css</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">p</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> red</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">html</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">html</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">body</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">h1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Hello world</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">h1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">body</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">html</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">ts</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 12</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">b</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">rust</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">fn</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    println!</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Hello, world!</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p><strong>输出：</strong></p>`,
					4
				)),
			n(e, null, {
				default: l(
					() =>
						i[7] ||
						(i[7] = [
							s(
								'div',
								{ class: 'language-ts', 'data-ext': 'ts', 'data-title': 'ts' },
								[
									s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
									s('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
										s('code', null, [
											s('span', { class: 'line' }, [
												s(
													'span',
													{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
													'const '
												),
												s(
													'span',
													{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
													'a'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													' ='
												),
												s(
													'span',
													{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
													' 1'
												),
											]),
										]),
									]),
								],
								-1
							),
							s(
								'div',
								{ class: 'language-json', 'data-ext': 'json', 'data-title': 'json' },
								[
									s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
									s('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
										s('code', null, [
											s('span', { class: 'line' }, [
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													'{'
												),
											]),
											a(`
`),
											s('span', { class: 'line' }, [
												s(
													'span',
													{ style: { '--shiki-light': '#99841877', '--shiki-dark': '#B8A96577' } },
													'  "'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
													'name'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#99841877', '--shiki-dark': '#B8A96577' } },
													'"'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													':'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' } },
													' "'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
													'John'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' } },
													'"'
												),
											]),
											a(`
`),
											s('span', { class: 'line' }, [
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													'}'
												),
											]),
										]),
									]),
								],
								-1
							),
							s(
								'div',
								{ class: 'language-css', 'data-ext': 'css', 'data-title': 'css' },
								[
									s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
									s('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
										s('code', null, [
											s('span', { class: 'line' }, [
												s(
													'span',
													{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
													'p'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													' {'
												),
											]),
											a(`
`),
											s('span', { class: 'line' }, [
												s(
													'span',
													{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
													'  color'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													':'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
													' red'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													';'
												),
											]),
											a(`
`),
											s('span', { class: 'line' }, [
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													'}'
												),
											]),
										]),
									]),
								],
								-1
							),
							s(
								'div',
								{ class: 'language-html', 'data-ext': 'html', 'data-title': 'html' },
								[
									s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
									s('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
										s('code', null, [
											s('span', { class: 'line' }, [
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													'<'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
													'html'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													'>'
												),
											]),
											a(`
`),
											s('span', { class: 'line' }, [
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													'  <'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
													'body'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													'>'
												),
											]),
											a(`
`),
											s('span', { class: 'line' }, [
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													'    <'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
													'h1'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													'>'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#393A34', '--shiki-dark': '#DBD7CAEE' } },
													'Hello world'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													'</'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
													'h1'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													'>'
												),
											]),
											a(`
`),
											s('span', { class: 'line' }, [
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													'  </'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
													'body'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													'>'
												),
											]),
											a(`
`),
											s('span', { class: 'line' }, [
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													'</'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
													'html'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													'>'
												),
											]),
										]),
									]),
								],
								-1
							),
							s(
								'div',
								{ class: 'language-ts', 'data-ext': 'ts', 'data-title': 'ts' },
								[
									s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
									s('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
										s('code', null, [
											s('span', { class: 'line' }, [
												s(
													'span',
													{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
													'const '
												),
												s(
													'span',
													{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
													'a'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													' ='
												),
												s(
													'span',
													{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
													' 12'
												),
											]),
											a(`
`),
											s('span', { class: 'line' }, [
												s(
													'span',
													{ style: { '--shiki-light': '#AB5959', '--shiki-dark': '#CB7676' } },
													'const '
												),
												s(
													'span',
													{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
													'b'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													' ='
												),
												s(
													'span',
													{ style: { '--shiki-light': '#2F798A', '--shiki-dark': '#4C9A91' } },
													' 1'
												),
											]),
										]),
									]),
								],
								-1
							),
							s(
								'div',
								{ class: 'language-rust', 'data-ext': 'rust', 'data-title': 'rust' },
								[
									s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
									s('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
										s('code', null, [
											s('span', { class: 'line' }, [
												s(
													'span',
													{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
													'fn'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
													' main'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													'()'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													' {'
												),
											]),
											a(`
`),
											s('span', { class: 'line' }, [
												s(
													'span',
													{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
													'    println!'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													'('
												),
												s(
													'span',
													{ style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' } },
													'"'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
													'Hello, world!'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' } },
													'"'
												),
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													');'
												),
											]),
											a(`
`),
											s('span', { class: 'line' }, [
												s(
													'span',
													{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
													'}'
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
			}),
		])
	)
}
const u = d(c, [
		['render', o],
		['__file', 'index.html.vue'],
	]),
	y = JSON.parse(
		'{"path":"/blog/guide/components/card-masonry/","title":"瀑布流容器","lang":"zh-CN","frontmatter":{"title":"瀑布流容器","icon":"ri:layout-masonry-line","createTime":"2024/12/14 17:17:06","permalink":"/blog/guide/components/card-masonry/","badge":{"text":"v1.0.0-rc.121 +"},"description":"概述 瀑布流容器是一个 通用的容器组件，你可以把任何内容放到 <CardMasonry> 里面，容器会自动计算每一个 项 的高度， 然后将它们按照瀑布流的方式进行排列。 什么是项 ？ 项 表示的是一个单独的内容，可以是图片、文字、视频等等。 从 markdown 的语法而言，独占一行的可以被认为是一个项。（该行的前后应该有空行） 从 html 的结构而...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/components/card-masonry/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"瀑布流容器"}],["meta",{"property":"og:description","content":"概述 瀑布流容器是一个 通用的容器组件，你可以把任何内容放到 <CardMasonry> 里面，容器会自动计算每一个 项 的高度， 然后将它们按照瀑布流的方式进行排列。 什么是项 ？ 项 表示的是一个单独的内容，可以是图片、文字、视频等等。 从 markdown 的语法而言，独占一行的可以被认为是一个项。（该行的前后应该有空行） 从 html 的结构而..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://plume.pengzhanbo.cn/images/1.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"瀑布流容器\\",\\"image\\":[\\"https://plume.pengzhanbo.cn/images/1.png\\",\\"https://images.unsplash.com/photo-1719937051124-91c677bc58fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8\\",\\"https://plus.unsplash.com/premium_photo-1731329153355-1015daf2cb92?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8\\",\\"https://images.unsplash.com/photo-1731323036230-fb37b4d9ed71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8\\",\\"https://images.unsplash.com/photo-1730630906214-1256b57d65b7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8\\",\\"https://plus.unsplash.com/premium_photo-1733864822156-f3cf26187fd9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8\\",\\"https://images.unsplash.com/photo-1731756748993-85e1513dfc76?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8\\",\\"https://images.unsplash.com/photo-1733705879328-a18f2a025c67?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":2.53,"words":759},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/组件/瀑布流容器.md","bulletin":false}'
	)
export { u as comp, y as data }
