import {
	_ as c,
	c as o,
	a,
	b as n,
	w as t,
	d as s,
	e as l,
	r as h,
	o as v,
} from './app-B_7CxFr0.js'
const m = {}
function g(u, i) {
	const r = h('VPIcon'),
		k = h('CodeTabs'),
		e = h('Mermaid')
	return (
		v(),
		o('div', null, [
			i[8] ||
				(i[8] = a(
					'<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>主题支持在 文章中 嵌入由 <a href="https://mermaid.js.org/" target="_blank" rel="noopener noreferrer">Mermaid</a> 。</p><p>该功能由 <a href="https://plugin-md-enhance.vuejs.press/" target="_blank" rel="noopener noreferrer">vuepress-plugin-md-enhance</a> 提供支持。</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><p>主题默认不启用该功能。</p><p>你需要在你的项目中安装 <a href="https://mermaid.js.org/" target="_blank" rel="noopener noreferrer">mermaid</a> 库。</p>',
					6
				)),
			n(
				k,
				{ id: '18', data: [{ id: 'pnpm' }, { id: 'npm' }, { id: 'yarn' }] },
				{
					title0: t(({ value: p, isActive: d }) => [
						n(r, { name: 'vscode-icons:file-type-light-pnpm' }),
						i[0] || (i[0] = s('span', null, 'pnpm', -1)),
					]),
					title1: t(({ value: p, isActive: d }) => [
						n(r, { name: 'logos:npm-icon' }),
						i[1] || (i[1] = s('span', null, 'npm', -1)),
					]),
					title2: t(({ value: p, isActive: d }) => [
						n(r, { name: 'vscode-icons:file-type-yarn' }),
						i[2] || (i[2] = s('span', null, 'yarn', -1)),
					]),
					tab0: t(
						({ value: p, isActive: d }) =>
							i[3] ||
							(i[3] = [
								s(
									'div',
									{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
									[
										s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										s('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											s('code', null, [
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'pnpm'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' add'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' mermaid'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab1: t(
						({ value: p, isActive: d }) =>
							i[4] ||
							(i[4] = [
								s(
									'div',
									{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
									[
										s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										s('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											s('code', null, [
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'npm'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' install'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' mermaid'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab2: t(
						({ value: p, isActive: d }) =>
							i[5] ||
							(i[5] = [
								s(
									'div',
									{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
									[
										s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										s('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											s('code', null, [
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'yarn'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' add'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' mermaid'
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
			i[9] ||
				(i[9] = s(
					'p',
					null,
					[l('然后在 '), s('code', null, '.vuepress/config.ts'), l(' 配置文件中，启用该功能：')],
					-1
				)),
			n(
				k,
				{ id: '32', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: t(({ value: p, isActive: d }) => [
						n(r, { name: 'vscode-icons:file-type-typescript' }),
						i[6] || (i[6] = s('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: t(
						({ value: p, isActive: d }) =>
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
												l(`
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
												l(`
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
												l(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      markdownEnhance'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': {'
													),
												]),
												l(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'        mermaid'
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
														','
													),
												]),
												l(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'      },'
													),
												]),
												l(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    }'
													),
												]),
												l(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  })'
													),
												]),
												l(`
`),
												s('span', { class: 'line' }, [
													s(
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
			i[10] ||
				(i[10] = a(
					`<div class="hint-container note"><p class="hint-container-title">注</p><p>以下文档 Fork 自 <a href="https://theme-hope.vuejs.press/zh/blog/guide/markdown/chart/mermaid.html" target="_blank" rel="noopener noreferrer">vuepress-theme-hope</a>, 遵循 <a href="https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">MIT</a> 许可证。</p></div><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">mermaid</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">&lt;!-- 在此处放置 mermaid 代码 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span></span></code></pre></div><p>除了使用 mermaid 代码块，你也可以直接使用以下代码块：</p><ul><li>class: <code>classDiagram</code></li><li>c4c: <code>C4Context</code></li><li>er: <code>erDiagram</code></li><li>gantt: <code>gantt</code></li><li>git-graph: <code>gitGraph</code></li><li>journey: <code>journey</code></li><li>mindmap: <code>mindmap</code></li><li>pie: <code>pie</code></li><li>quadrant: <code>quadrantChart</code></li><li>requirement: <code>requirementDiagram</code></li><li>sankey: <code>sankey-beta</code></li><li>sequence: <code>sequenceDiagram</code></li><li>state: <code>stateDiagram-v2</code></li><li>timeline: <code>timeline</code></li><li>xy: <code>xychart-beta</code></li></ul><p>你不需要再声明图表类型，也不需要缩进图表代码。</p><p>当图表支持设置标题时，你可以直接在代码块信息后添加标题:</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sequence 代码标题</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">&lt;!-- 顺序图代码内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">... --&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span></span></code></pre></div><p>配置文档详见 <a href="https://mermaid.js.org/" target="_blank" rel="noopener noreferrer">Mermaid 文档</a></p><h2 id="高级" tabindex="-1"><a class="header-anchor" href="#高级"><span>高级</span></a></h2><p>你可以在 <a href="https://vuejs.press/zh/blog/guide/configuration.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6" target="_blank" rel="noopener noreferrer">客户端配置文件</a> 中导入并使用 <code>defineMermaidConfig</code> 来自定义 Mermaid 配置:</p><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> defineMermaidConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress-theme-plume/client</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> defineClientConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress/client</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">defineMermaidConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 在此设置 mermaid 选项</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> defineClientConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><h3 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图"><span>流程图</span></a></h3><p><strong>输入：</strong></p><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">mermaid</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">---</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">title: Flowchart</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">---</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">flowchart TB</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    c1--&gt;a2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    subgraph one</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    a1--&gt;a2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    end</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    subgraph two</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    b1--&gt;b2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    end</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    subgraph three</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    c1--&gt;c2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    end</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    one --&gt; two</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    three --&gt; two</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    two --&gt; c2</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>`,
					17
				)),
			n(e, {
				id: 'mermaid-159',
				code: 'eJzT1dXlKsksyUm1UnDLyS9PzkgsKuECCabBeAohTlwKQJBsqKtrl2gEZheXJqUXJRZkKOTnpYIFEpEkU/NSUBWVlOeDBZJAipJwKcooSoWYBbYoGVUZ0B4FoCjcKLBqVJHyfDAfqBEAuj83LQ==',
			}),
			i[11] ||
				(i[11] = a(
					`<h3 id="循序图" tabindex="-1"><a class="header-anchor" href="#循序图"><span>循序图</span></a></h3><p><strong>输入：</strong></p><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sequence Greetings</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Alice -&gt;&gt; Bob: Hello Bob, how are you?</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Bob--&gt;&gt;John: How about you John?</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Bob--x Alice: I am good thanks!</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Bob-x John: I am good thanks!</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Note right of John: Bob thinks a long&lt;br/&gt;long time, so long&lt;br/&gt;that the text does&lt;br/&gt;not fit on a row.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Bob--&gt;Alice: Checking with John...</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Alice-&gt;John: Yes... John, how are you?</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>`,
					4
				)),
			n(e, {
				id: 'mermaid-174',
				code: 'eJxtkL1OxDAQhPs8xdCfQx+hIH4kfgp6Sie3Z1vneIW9UcLbsw7hkBDdaubzeHeMMY0EidThKRNJSK40VWwKfcyURnoM1mU7NcBdDCPB9D3ueejwTDFyHQ/wvMBmwifPtwqqZhR7ZZ8Uq97As1QXVbsg63dkhxfYCY75CPE2ncvVTqwb/7//xkLIwXkBn3ZO3ygRlIBF5ORuhnzd1wESJjqg8K+sUaI0QWgVHJnKJicWnIKGJs3IvLTN5aJ92wdP41mLwhLEbz+3bfvTj9nPfqei6ub+6ecL4yd1lw==',
				title: 'eJxzL0pNLcnMSy8GABGsA6k=',
			}),
			i[12] ||
				(i[12] = a(
					`<h3 id="类图" tabindex="-1"><a class="header-anchor" href="#类图"><span>类图</span></a></h3><p><strong>输入：</strong></p><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">class Animal Example</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">note &quot;From Duck till Zebra&quot;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Animal &lt;|-- Duck</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">note for Duck &quot;can fly\\ncan swim\\ncan dive\\ncan help in debugging&quot;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Animal &lt;|-- Fish</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Animal &lt;|-- Zebra</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Animal : +int age</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Animal : +String gender</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Animal: +isMammal()</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Animal: +mate()</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">class Duck{</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  +String beakColor</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  +swim()</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  +quack()</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">class Fish{</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  -int sizeInFeet</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  -canEat()</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">class Zebra{</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  +bool is_wild</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  +run()</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>`,
					4
				)),
			n(e, {
				id: 'mermaid-189',
				code: 'eJxdkMtOxDAMRff9CqsrEOoPjNggZiqxYMUOISG39WSsOsmQpAzPfyePUpjubo6vr+00TVMFDkIbuDGsUWD3hvooVKVK1Qt6v2VUDnUFYGwgqFtnNWynfoTAIvBIncM6VueA66+myeXfhr11xV73aGAv708mCX9iXdTAr1TUgeQIHAl1k1Js1Dq3ZX9YoTz/j23gik0AVHTGHoKLcaDIDOSWSjL7e9RRXlz+pxoDZZJ/IK//GV+wBHWE460Vm7IiTcdkf9QvE/ZjfnwvAWnvEtCk7Tx/0J1piUJh8fYdhlVPPmye2lkrwP75xDIU4iYz+38AvwSIcw==',
				title: 'eJxzzMvMTcxRcK1IzC3ISQUAJjwFPw==',
			}),
			i[13] ||
				(i[13] = a(
					`<h3 id="状态图" tabindex="-1"><a class="header-anchor" href="#状态图"><span>状态图</span></a></h3><p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">state Check if n is negative</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">state if_state &lt;&lt;choice&gt;&gt;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">[*] --&gt; IsPositive</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">IsPositive --&gt; if_state</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">if_state --&gt; False: if n &lt; 0</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">if_state --&gt; True : if n &gt;= 0</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span></span></code></pre></div><p><strong>输出：</strong></p>`,
					4
				)),
			n(e, {
				id: 'mermaid-204',
				code: 'eJxdjrEKwkAQRPv7iqmFBbGU8xpFsLOwE5HjWJPFmEBuzfe7OTWEdLvzZoYhIqeiDW+xrzk9IQ+0kIyWq6gysBsdLmtUPkis+viiYeMcUCSz37+H96nuJHEIxq6rG4gCTvncZSk1mD2F/ZNGppJRP8Ym25qyw2O9xJf+zfjhsDP+AfL5Oro=',
				title: 'eJxzzkhNzlbITFPIU8gsVshLTU8sySxLBQBVogfL',
			}),
			i[14] ||
				(i[14] = a(
					`<h3 id="关系图" tabindex="-1"><a class="header-anchor" href="#关系图"><span>关系图</span></a></h3><p><strong>输入：</strong></p><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">er Er Example</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">CAR ||--o{ NAMED-DRIVER : allows</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">CAR {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    string registrationNumber</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    string make</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    string model</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">PERSON ||--o{ NAMED-DRIVER : is</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">PERSON {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    string firstName</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    string lastName</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    int age</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>`,
					4
				)),
			n(e, {
				id: 'mermaid-219',
				code: 'eJx1jcEKwjAMhu99irxAX2C34XrwYJUK3iPGEmxXySoK297dFnbZYIGQ5MvP/2utVeYcqAEjYH4Y34FUpYqkY/SCUQEcWgfTpHUawbYn0+nOHW/GQQMYQvoOi2Qss9aQhXsPQp7LiplTbz/xTrL+R3zRhqQHhYLm0hfjrme7E8s1clFsUp8sQ7YYN9YBV5T7DOjrNas/3tBLQA==',
				title: 'eJxzLVJwrUjMLchJBQASlwOk',
			}),
			i[15] ||
				(i[15] = a(
					`<h3 id="用户日记图" tabindex="-1"><a class="header-anchor" href="#用户日记图"><span>用户日记图</span></a></h3><p><strong>输入：</strong></p><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">journey</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">title My working day</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">section Go to work</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  Make tea: 5: Me</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  Go upstairs: 3: Me</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  Do work: 1: Me, Cat</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">section Go home</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  Go downstairs: 5: Me</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  Sit down: 5: Me</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>`,
					4
				)),
			n(e, {
				id: 'mermaid-234',
				code: 'eJxVzD0OgzAMhuG9p/gO0KWqumRtpU6ZegKrWGB+YpQYIW4PBAFifT77rXWIgacbYGItw08YNTYSShS0cuK/iQZ8FaZ5WxDw1DCMyeHl4DnbcjL0yUhicnge/NneHB4r3fEmu3Yr7Y5AoWPYE2f5J5aX3WYBdjXD',
			}),
			i[16] ||
				(i[16] = a(
					`<h3 id="甘特图" tabindex="-1"><a class="header-anchor" href="#甘特图"><span>甘特图</span></a></h3><p><strong>输入：</strong></p><details class="hint-container details"><summary>查看代码</summary><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">gantt</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">dateFormat  YYYY-MM-DD</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">title       Adding GANTT diagram functionality to mermaid</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">excludes    weekends</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">%% (\`excludes\` accepts specific dates in YYYY-MM-DD format, days of the week (&quot;sunday&quot;) or &quot;weekends&quot;, but not the word &quot;weekdays&quot;.)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">section A section</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Completed task            :done,    des1, 2014-01-06,2014-01-08</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Active task               :active,  des2, 2014-01-09, 3d</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Future task               :         des3, after des2, 5d</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Future task2              :         des4, after des3, 5d</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">section Critical tasks</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Completed task in the critical line :crit, done, 2014-01-06,24h</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Implement parser                    :crit, done, after des1, 2d</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Create tests for parser             :crit, active, 3d</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Future task in critical line        :crit, 5d</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Create tests for renderer           :2d</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Add to mermaid                      :1d</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">section Documentation</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Describe gantt syntax               :active, a1, after des1, 3d</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Add gantt diagram to demo page      :after a1  , 20h</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Add another diagram to demo page    :doc1, after a1  , 48h</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">section Last section</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Describe gantt syntax               :after doc1, 3d</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Add gantt diagram to demo page      :20h</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Add another diagram to demo page    :48h</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><strong>输出：</strong></p>`,
					4
				)),
			n(e, {
				id: 'mermaid-251',
				code: 'eJyVU01v2zAMvfdXEAYKtIAzxGk2dLkFCToMWHfqZbeqEp0ItaVAorfm34+UP2A3adHqJJt6j4+P5E45ogsAowjvfKgVAfzhM7u/n223HCBLFUJ71sZYt4Mf698PD2Cs2gVVQ9k4TdY7VVk6AnmokWmsYSy+6KoxGAX7D/EZnYn8+/ISrh772CMorfFAEeIBtS2tTloiWDcSAmXSlnPsGMGXQHtMlHCVxcbx3+wafICsT5Pl8NQQOE/tUx9MGxSC7Mv1BeuImITDur/xv42vDxUSGiAVn7u601kZ7zCXG6sucljMi+VsXszm3/LhessMa6b6iydwYVApxBzMsBgxfM/hRvy6a6gJ56HDjaE3OaiSMHQ0X19BF+9AlyMo0zB05MMmWLJaVYlFGvXKDO6IeKn7Z5V1CCv55L4kc8aeLPfM8FMIanQEBxUi5z1zJgyDOnFYCtsE5HEAnggeEZ6Cc0QdQ2/viZcsfCp6iksGnuQJPEYYJplWSRFvwWjMz1XEL4uJs1uvG3FBdVO2xcipnxDS+kE8cujlrWlRbMXYllSeiGjB/R6yJIO1Z392XYGrFqUKAGmN9ENgipdiL2xvAHnQ9ZCyBS9v9+NyfqnIooed+Vg1bQWJ+uMVfEK1aPwPxhRkQQ==',
			}),
			i[17] ||
				(i[17] = a(
					'<h3 id="饼图" tabindex="-1"><a class="header-anchor" href="#饼图"><span>饼图</span></a></h3><p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pie</span></span>\n<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">title What Voldemort doesn&#39;t have?</span></span>\n<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  &quot;FRIENDS&quot; : 2</span></span>\n<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  &quot;FAMILY&quot; : 3</span></span>\n<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  &quot;NOSE&quot; : 45</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">```</span></span></code></pre></div><p><strong>输出：</strong></p>',
					4
				)),
			n(e, {
				id: 'mermaid-263',
				code: 'eJwryEzlUlAoySzJSVUIz0gsUQjLz0lJzc0vKlFIyU8tzlMvUchILEu1BypSUFByC/J09XMJVlKwUjCCijj6evpEggSMIQJ+/sGuIK6JKRcA9yEXxA==',
			}),
			i[18] ||
				(i[18] = a(
					`<h3 id="git-图表" tabindex="-1"><a class="header-anchor" href="#git-图表"><span>Git 图表</span></a></h3><p><strong>输入：</strong></p><details class="hint-container details"><summary>查看代码</summary><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">git-graph</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">commit</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">branch hotfix</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">checkout hotfix</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">commit</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">branch develop</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">checkout develop</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">commit id:&quot;ash&quot; tag:&quot;abc&quot;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">branch featureB</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">checkout featureB</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">commit type:HIGHLIGHT</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">checkout main</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">checkout hotfix</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">commit type:NORMAL</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">checkout develop</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">commit type:REVERSE</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">checkout featureB</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">commit</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">checkout main</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">merge hotfix</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">checkout featureB</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">commit</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">checkout develop</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">branch featureA</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">commit</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">checkout develop</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">merge hotfix</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">checkout featureA</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">commit</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">checkout featureB</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">commit</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">checkout develop</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">merge featureA</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">branch release</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">checkout release</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">commit</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">checkout main</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">commit</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">checkout release</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">merge main</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">checkout develop</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">merge release</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><strong>输出：</strong></p>`,
					4
				)),
			n(e, {
				id: 'mermaid-279',
				code: 'eJyNUUEOgjAQvPuKhmdww4SACWqCxnspC22klJRi9Pci1bAiFg5NNrMzs5NpKUykacM3hDAlpTD9kGlaM064MoW4vxYc2FV1BiETag43qFSDuQgayETkvkdb7hFDy37KmDfqC6Cm07DFBhizDubRgB/vojjp3xlzJRW1I6hVHo7pPkicGQdeGl7C9BQ6s8wcl6BLmCnNqR0TfDcRLLAXjs3LVyax3sjpHU1DBbQFLELQv1p+F6PIXpp+3jTJh/8EoXrlcg==',
			}),
			i[19] ||
				(i[19] = a(
					`<h3 id="c4c-图表" tabindex="-1"><a class="header-anchor" href="#c4c-图表"><span>C4C 图表</span></a></h3><p><strong>输入：</strong></p><details class="hint-container details"><summary>查看代码</summary><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">c4c</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">title System Context diagram for Internet Banking System</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Person(customerA, &quot;Banking Customer A&quot;, &quot;A customer of the bank, with personal bank accounts.&quot;)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Person(customerB, &quot;Banking Customer B&quot;)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Person_Ext(customerC, &quot;Banking Customer C&quot;)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">System(SystemAA, &quot;Internet Banking System&quot;, &quot;Allows customers to view information about their bank accounts, and make payments.&quot;)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Person(customerD, &quot;Banking Customer D&quot;, &quot;A customer of the bank, &lt;br/&gt; with personal bank accounts.&quot;)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Enterprise_Boundary(b1, &quot;BankBoundary&quot;) {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  SystemDb_Ext(SystemE, &quot;Mainframe Banking System&quot;, &quot;Stores all of the core banking information about customers, accounts, transactions, etc.&quot;)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  System_Boundary(b2, &quot;BankBoundary2&quot;) {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    System(SystemA, &quot;Banking System A&quot;)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    System(SystemB, &quot;Banking System B&quot;, &quot;A system of the bank, with personal bank accounts.&quot;)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  System_Ext(SystemC, &quot;E-mail system&quot;, &quot;The internal Microsoft Exchange e-mail system.&quot;)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  SystemDb(SystemD, &quot;Banking System D Database&quot;, &quot;A system of the bank, with personal bank accounts.&quot;)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  Boundary(b3, &quot;BankBoundary3&quot;, &quot;boundary&quot;) {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    SystemQueue(SystemF, &quot;Banking System F Queue&quot;, &quot;A system of the bank, with personal bank accounts.&quot;)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    SystemQueue_Ext(SystemG, &quot;Banking System G Queue&quot;, &quot;A system of the bank, with personal bank accounts.&quot;)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">BiRel(customerA, SystemAA, &quot;Uses&quot;)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">BiRel(SystemAA, SystemE, &quot;Uses&quot;)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Rel(SystemAA, SystemC, &quot;Sends e-mails&quot;, &quot;SMTP&quot;)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Rel(SystemC, customerA, &quot;Sends e-mails to&quot;)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><strong>输出：</strong></p>`,
					4
				)),
			n(e, {
				id: 'mermaid-296',
				code: 'eJytlMFu2zAMhu99CiKnFMg2rN1xGBDHbrFDgG7pzgXtMIlQWwokeUkw9N1HybKtxN6Gbb3YEP2J/PmL1uLDQklLR3sFYIUtCVYnY6mCEIa1wK3GCjZKw2cOaUkWEpTPQm4De8V7H0gbJadFbayqSM9nMGmhRYjBfMLRObQMqA3YHUHO3AwOwu5g77Ng6WOARaFqac3byfWwQjJWIYnIp+xoO3oxRi883fQwbV5zJ/wXbXr1ZakOpmvBgFXwXdABhGSDKrRCScBc1da1JvR5IzNAuYYKnwn2eKoo9DZsLh2Tm/7Ovo+5fvfpTyZyocz1ttfC0FPC8TXq0zR/H8q1kck1/HBwa06aezObRcbwErlfngoasWhllSYDWJatwoIDXowDh0Z1ZrI9nVFWozRYOIxXZIugv5UUqb+5UH/j5Tv08nAjV8OUz/0IDMh4uAKZNO6bZvV3owvwcqa9N9PNZfamQlGGzK7KI2cWfgY53VIUWhm1sZAdix3KLQHFG9oK7UmFxPEEhQ5SSNFijob+uRVfqXf+9sL5W5eYz7QfotjbLzXVFOTdDeXdgQf+y+azUpHN98Ny969Q7oWf/mQT8ZXK+PKLbpNvhoznG6j/0v9OHTIGuBFZkVybcO7G/2TLx4eLHczFt+/ZFr6mmP4Juk31kg==',
			}),
			i[20] ||
				(i[20] = a(
					`<h3 id="思维导图" tabindex="-1"><a class="header-anchor" href="#思维导图"><span>思维导图</span></a></h3><p><strong>输入：</strong></p><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">mindmap</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">root((VuePress))</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  Out of box</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    Default theme</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">      Navbar</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">      Sidebar</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">      Darkmode</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    I18n</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    Search</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">      Search</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">      DocSearch&lt;br /&gt;by algolia</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  Customize</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    Theme</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">      (hope)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    Plugins</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">      (components)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">      (md-enhance)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>`,
					4
				)),
			n(e, {
				id: 'mermaid-311',
				code: 'eJxVj7sOwjAMRXe+wmMZEGJjQCx0YYFKRexu4jYRSVzlgYCvp+qD0s3n+NqyrXbSYrsC8Mwxy+6JCk8hrNedArimCFxDxa8eAXKqMZkIUZGl0QFc8Fmh/2GpJf1zjv5hWU75827vxrIk9ELNg0vMWQzmUHnYHqs3oGnYaOwTpxQiW/2Z1t4WJ2WKWxqeAChMarQLc1OwbdmRi2GKdNLKDTmFTnRzX7jgSPM=',
			}),
			i[21] ||
				(i[21] = a(
					`<h3 id="时序图" tabindex="-1"><a class="header-anchor" href="#时序图"><span>时序图</span></a></h3><p><strong>输入：</strong></p><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">timeline</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">title Timeline of Industrial Revolution</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">section 17th-20th century</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    Industry 1.0 : Machinery, Water power, Steam &lt;br&gt;power</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    Industry 2.0 : Electricity, Internal combustion engine, Mass production</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    Industry 3.0 : Electronics, Computers, Automation</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">section 21st century</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    Industry 4.0 : Internet, Robotics, Internet of Things</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    Industry 5.0 : Artificial intelligence, Big data,3D printing</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>`,
					4
				)),
			n(e, {
				id: 'mermaid-326',
				code: 'eJx1kM9qwzAMxu99Cj2AN5p0YzDGoPtz6GGXrrCz46iJwLaCLW/k7ad4HYzAfBKSvp++z0IBPUXcAAiJRzhdGsBnOMS+ZElkPRzxk30R4qibGd1SQXMn41W7lREcRilp1tnyLroZmust3MObdaMS02zgwwommPgLk4F3QRvgoUuPtbEWt1X86vVYIkei8kNUeVQ7jkOnW4sJjIPCjV7JGabEfanm1rTdHxpHctnAM4epKFDLfREOdhWvbbL8l+ym4n78oBg4csdSqb+95QNPmnvIa+1t1e6T0FlzaRpSifc0YHQa5IkG6K1Ys3vRPDpTxuYb3KCNDQ==',
			}),
			i[22] ||
				(i[22] = a(
					`<h3 id="桑基图" tabindex="-1"><a class="header-anchor" href="#桑基图"><span>桑基图</span></a></h3><p><strong>输入：</strong></p><details class="hint-container details"><summary>查看代码</summary><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sankey</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Agricultural &#39;waste&#39;,Bio-conversion,124.729</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Bio-conversion,Liquid,0.597</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Bio-conversion,Losses,26.862</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Bio-conversion,Solid,280.322</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Bio-conversion,Gas,81.144</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Biofuel imports,Liquid,35</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Biomass imports,Solid,35</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Coal imports,Coal,11.606</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Coal reserves,Coal,63.965</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Coal,Solid,75.571</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">District heating,Industry,10.639</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">District heating,Heating and cooling - commercial,22.505</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">District heating,Heating and cooling - homes,46.184</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Electricity grid,Over generation / exports,104.453</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Electricity grid,Heating and cooling - homes,113.726</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Electricity grid,H2 conversion,27.14</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Electricity grid,Industry,342.165</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Electricity grid,Road transport,37.797</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Electricity grid,Agriculture,4.412</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Electricity grid,Heating and cooling - commercial,40.858</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Electricity grid,Losses,56.691</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Electricity grid,Rail transport,7.863</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Electricity grid,Lighting &amp; appliances - commercial,90.008</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Electricity grid,Lighting &amp; appliances - homes,93.494</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Gas imports,Ngas,40.719</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Gas reserves,Ngas,82.233</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Gas,Heating and cooling - commercial,0.129</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Gas,Losses,1.401</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Gas,Thermal generation,151.891</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Gas,Agriculture,2.096</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Gas,Industry,48.58</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Geothermal,Electricity grid,7.013</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">H2 conversion,H2,20.897</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">H2 conversion,Losses,6.242</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">H2,Road transport,20.897</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Hydro,Electricity grid,6.995</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Liquid,Industry,121.066</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Liquid,International shipping,128.69</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Liquid,Road transport,135.835</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Liquid,Domestic aviation,14.458</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Liquid,International aviation,206.267</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Liquid,Agriculture,3.64</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Liquid,National navigation,33.218</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Liquid,Rail transport,4.413</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Marine algae,Bio-conversion,4.375</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Ngas,Gas,122.952</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Nuclear,Thermal generation,839.978</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Oil imports,Oil,504.287</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Oil reserves,Oil,107.703</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Oil,Liquid,611.99</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Other waste,Solid,56.587</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Other waste,Bio-conversion,77.81</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Pumped heat,Heating and cooling - homes,193.026</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Pumped heat,Heating and cooling - commercial,70.672</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Solar PV,Electricity grid,59.901</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Solar Thermal,Heating and cooling - homes,19.263</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Solar,Solar Thermal,19.263</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Solar,Solar PV,59.901</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Solid,Agriculture,0.882</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Solid,Thermal generation,400.12</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Solid,Industry,46.477</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Thermal generation,Electricity grid,525.531</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Thermal generation,Losses,787.129</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Thermal generation,District heating,79.329</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Tidal,Electricity grid,9.452</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">UK land based bioenergy,Bio-conversion,182.01</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Wave,Electricity grid,19.013</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Wind,Electricity grid,289.366</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><strong>输出：</strong></p>`,
					4
				)),
			n(e, {
				id: 'mermaid-343',
				code: 'eJyNVsly00AQvesrdIKL0sy+HNkKKCBJseU8sQZ7Clkykhzw39OjzY4lkpyi9Ou9X/e4ceUvf7i49a1LXq7rsNoX7b52Rfr8j2ta/zx7FaqLVVXe+boJVZlRJkAzm5yJP4Xf+5BnBKTVM6xqGt9kTIFR7Bz8WhVoxwwBzmbgO9dkhgIVIiI/975Iw3ZX1W0zBuQyIlvXNBPSe0TgdYVljNL4T0YpKKJ6oPaNr+8wrw5RHKzqTQYHWoLUNHkTmha70qYb79pQrrMPZb5H0SGjBBS3c4X3/d/UlXm6qtAXfl/g13br61VA/4yBJPKphptqi0kKBdSI5G3hV9EotIcUh5VnV9iqdO1LX6NtVaYvUv+3L5gSAULyuclDYSjlOF21YMRQd5oL0ziTudLUGi4YUGznTONL5fK0rV3ZxCQzrkEjX2ZqRyL6DKug7KlVnHRZEDDSzA0HNkoFytKFDF0oTjLUyNmFHn4K600X/lnqdrsiuHLlm/vxLQFCluL/x7QfgOUgrEiQ+BNzL9e4BViNpraTT8TtAMOAcR6Bx1tCgOLmRtWhCRQEoZ3g28bXW9yKI5UyKikYbFGETwfCgFjVSad5CwPY6ne+ans32axqDYTy5D6L3rOM4ZCQAPflQ3IKmGAInZNmtDnkdTUPpMBamQzX4birjAJR6ihvfV12ZWLNzSbsdnEBKTNIilHpLCzlEgxelQF9E8fVhlXq7sLQr7hvZjnEpMQIlqX0qHXaVw5KjPLL0bBEy3VvyjkwOvk/42ncEp58dnUofeqKtfPnh1sA1zLpOBNnR/EKWcmSy/2q8K5eIoDhFqw2yRVGGsmI35nEy8KM7uQTGSNACe4z4REY77PCk2ttchWJkXYvynBecf9k9HECnCWscfdocr3f7nze3ciHLxduDsHL9bj+yUJoPOGaJZiRq9PrH3M2SewAbkivMLTokTRwvLw3iJWemC1AGPIY4YwOyHLTpYbyheEIErd5wI+LqEBonSzoz0tj+MBxuqQ7LKA2eObxYCxozN4ubfH9RtWQL22/xc1gyfePaRF7dusanNBtqKK/9WH2CwNPGnbkxt35uSdsYjwkN6HM5yAzmAVu+T+rqOo0',
			}),
			i[23] ||
				(i[23] = a(
					`<h3 id="依赖图" tabindex="-1"><a class="header-anchor" href="#依赖图"><span>依赖图</span></a></h3><p><strong>输入：</strong></p><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">requirement</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">requirement test_req {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">id: 1</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">text: the test text.</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">risk: high</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">verifymethod: test</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">element test_entity {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">type: simulation</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">test_entity - satisfies -&gt; test_req</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>`,
					4
				)),
			n(e, {
				id: 'mermaid-358',
				code: 'eJxNTjsKwzAM3X0KXSCFrh469R7F0JdYNE5aSyk1JXePYkjwIul9UcZn4YyESe8chhySI2pIUog+jKC/Cfz0dLWt+KknjahyhZc9x/LyFHmIBr7I3JcEjbOldp+Rq7OBsam2g7XUdi1veBJOyxiU5+nwt76OxDTpGULd7fzObcv+Q4w=',
			}),
			i[24] ||
				(i[24] = a(
					`<h3 id="象限图" tabindex="-1"><a class="header-anchor" href="#象限图"><span>象限图</span></a></h3><p><strong>输入：</strong></p><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">quadrant</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">title Reach and engagement of campaigns</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">x-axis Low Reach --&gt; High Reach</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">y-axis Low Engagement --&gt; High Engagement</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">quadrant-1 We should expand</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">quadrant-2 Need to promote</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">quadrant-3 Re-evaluate</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">quadrant-4 May be improved</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Campaign A: [0.3, 0.6]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Campaign B: [0.45, 0.23]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Campaign C: [0.57, 0.69]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Campaign D: [0.78, 0.34]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Campaign E: [0.40, 0.34]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Campaign F: [0.35, 0.78]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>`,
					4
				)),
			n(e, {
				id: 'mermaid-373',
				code: 'eJxtz81ygjAUBeC9T3EeoHGoYLFddKaldrpou+imC8fFVa6QGUgQguLbG4IKzLhMvnP/9jXFJSkTpVSaCWCkyRh/TNsUpGKwSijhnJWB3mFLeUEyUZVNNoIaWeFbHy9xIV7xJZO0e9rEqU8s+za3WP9ns9c9xCP+GVWq68wObwq7w1Bn+GWOYTSKUufa8BB9O1nwgbKaxhDgh07YMGRuyw7ctowup+DtBStv6j/Amz6th/DuIJi3MvNHFDmah67oeUQfjsJFS34womXX0LtDn90Sbla4WE/OPo17Fw==',
			}),
			i[25] ||
				(i[25] = a(
					'<h3 id="xy图" tabindex="-1"><a class="header-anchor" href="#xy图"><span>XY图</span></a></h3><p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">xy</span></span>\n<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">title &quot;Sales Revenue&quot;</span></span>\n<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">x-axis [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]</span></span>\n<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">y-axis &quot;Revenue (in $)&quot; 4000 --&gt; 11000</span></span>\n<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">bar [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]</span></span>\n<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">line [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">```</span></span></code></pre></div><p><strong>输出：</strong></p>',
					4
				)),
			n(e, {
				id: 'mermaid-388',
				code: 'eJytjM0OgkAMhO/7FBPiQZOSgPEHLz6EHgmHglUhsBDYJfD2LovxCbx8nem0M83Fm3sT5mJYmdLUguDOtQy4ySjaSqCmkKdyQFqxJjwlJzTcE7hzaHgmVNYFla3dzr4Ig3SEtjAE3Y6EhxSZmteO4FuKbamx2QU4RFGEMLwijp1SOfdIj04RTp5nZwjJfuHF6zhax3K/uDXyTHxy/r1nqi61/LXwA9LrSs8=',
			}),
			i[26] ||
				(i[26] = a(
					`<h3 id="块图" tabindex="-1"><a class="header-anchor" href="#块图"><span>块图</span></a></h3><p><strong>输入：</strong></p><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">block</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">columns 3</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">前端 blockArrowId6&lt;[&quot; &quot;]&gt;(right) 后端</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">space:2 down&lt;[&quot; &quot;]&gt;(down)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">硬盘 left&lt;[&quot; &quot;]&gt;(left) Database[(&quot;数据库&quot;)]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">classDef front fill:#696,stroke:#333;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">classDef back fill:#969,stroke:#333;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">class Frontend front</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">class Backend,Database back</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>`,
					4
				)),
			n(e, {
				id: 'mermaid-403',
				code: 'eJxLyslPztZNSi1J5ErOzynNzStWMOZ62tn7fPV6BbCcY1FRfrlniplNtJKCUqydRlFmekaJpsLTCX1AJVzFBYnJqVZGCin55XkwFSC2JtfzhWuez56hkJOaVgKTALE1FVwSSxKTEotTozWUnk3d8Kx33dNdk5U0Y7m4knMSi4tdUtMU0ory80oU0jJzcqyUzSzNdIpLivKzU62UjY2NrRGqkhKTs6GKLM0ssShScAOZk5qXAjEQKugE1AYU04E5A2wOFwC7sV83',
			}),
			i[27] ||
				(i[27] = a(
					`<h3 id="复杂例子" tabindex="-1"><a class="header-anchor" href="#复杂例子"><span>复杂例子</span></a></h3><p><strong>输入：</strong></p><details class="hint-container details"><summary>查看代码</summary><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">mermaid</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">graph TB</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    sq[Square shape] --&gt; ci((Circle shape))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    subgraph A</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        od&gt;Odd shape]-- Two line&lt;br/&gt;edge comment --&gt; ro</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        di{Diamond with &lt;br/&gt; line break} -.-&gt; ro(Rounded&lt;br&gt;square&lt;br&gt;shape)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        di==&gt;ro2(Rounded square shape)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    %% Notice that no text in shape are added here instead that is appended further down</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    e --&gt; od3&gt;Really long text with line break&lt;br&gt;in an Odd shape]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    %% Comments after double percent signs</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    e((Inner / circle&lt;br&gt;and some odd &lt;br&gt;special characters)) --&gt; f(,.?!+-*ز)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    cyr[Cyrillic]--&gt;cyr2((Circle shape));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">     classDef green fill:#9f6,stroke:#333,stroke-width:2px;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">     classDef orange fill:#f96,stroke:#333,stroke-width:4px;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">     class sq,e green</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">     class di orange</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><strong>输出：</strong></p>`,
					4
				)),
			n(e, {
				id: 'mermaid-420',
				code: 'eJx9UstOwzAQvPcrFiGkFBqQWoREgSAoFy4gATfEYWtvEgvXDrajUiF+iq/hc9jYgUIP+OTHzOzOjiuHTQ0PlwPg5V8e719adAS+xoaeIM8LECrLZsoJ3d8Oh4MEbueJfBGP3bKyuJWyJ+c5PCwtaGXodO4OCpIVgbCLBZkQhZ39IUr1dqVwYY2EpQo1REKkwtwRPr9Dvh8Z2Z1tjSTJgMLHVuMu9vVL7eyscHb8DWZfa1MJRkYmFzs7cGODEgShxgDGQqDXAMokNHQ8lJ1ITbxVxgdCmcDKAzYNS/Fr2brACJB2aVKF6NHKSXFHqPUKtDVVEo8W1+Y6B1wPDayH99PcLA2MK5UhyrdzDqIhJ7oxelUZn8pl2bUxjDjgwLqwOlXkeXq7IG5DdjMtfENCoQZRo0PBgn44jH2W2Wj/fGsv3/386OMVK/c4WzmltRKcZcHn8eZHOElQEBq9v6ISKkdkoGTSdPu4PBr54OwzTbcnk0m/z5dKhno6bl5PNrjWoeEfksjl8T/kw79kjndEqfTvW6l6ycEXT1TpbQ==',
			}),
		])
	)
}
const E = c(m, [
		['render', g],
		['__file', 'index.html.vue'],
	]),
	D = JSON.parse(
		'{"path":"/blog/guide/chart/mermaid/","title":"mermaid","lang":"zh-CN","frontmatter":{"title":"mermaid","author":"pengzhanbo","createTime":"2024/03/16 19:34:16","icon":"file-icons:mermaid","permalink":"/blog/guide/chart/mermaid/","description":"概述 主题支持在 文章中 嵌入由 Mermaid 。 该功能由 vuepress-plugin-md-enhance 提供支持。 配置 主题默认不启用该功能。 你需要在你的项目中安装 mermaid 库。 然后在 .vuepress/config.ts 配置文件中，启用该功能： 注 以下文档 Fork 自 vuepress-theme-hope, 遵循...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/chart/mermaid/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"mermaid"}],["meta",{"property":"og:description","content":"概述 主题支持在 文章中 嵌入由 Mermaid 。 该功能由 vuepress-plugin-md-enhance 提供支持。 配置 主题默认不启用该功能。 你需要在你的项目中安装 mermaid 库。 然后在 .vuepress/config.ts 配置文件中，启用该功能： 注 以下文档 Fork 自 vuepress-theme-hope, 遵循..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mermaid\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":2.26,"words":677},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/图表/mermaid.md","bulletin":false}'
	)
export { E as comp, D as data }
